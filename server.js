const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const { GoogleGenAI } = require('@google/genai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

const MODELS = [
  'gemini-3.1-flash-lite',
  'gemini-3.5-flash-lite',
  'gemini-3.8-flash',
  'gemini-2.5-flash-lite',
  'gemini-2.5-flash',
];

app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const cache = new Map();

const withTimeout = (promise, ms) => {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error('timeout')), ms);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
};

const tryModel = async (model, prompt) => {
  const r = await withTimeout(
    ai.models.generateContent({
      model,
      contents: prompt,
      config: { temperature: 0 },
    }),
    5000
  );
  const out = (r.text || '').trim();
  if (!out) throw new Error('empty');
  return out;
};

const translateFast = (prompt) => Promise.any(MODELS.map((m) => tryModel(m, prompt)));

const translateText = async (text, targetLanguage, sourceLanguage = 'English') => {
  if (targetLanguage === sourceLanguage) return text;

  const key = `${sourceLanguage}:${targetLanguage}:${text}`;
  if (cache.has(key)) return cache.get(key);

  const prompt = `Translate from ${sourceLanguage} to ${targetLanguage}. Reply with only the translation:\n${text}`;

  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const out = await translateFast(prompt);
      if (cache.size > 1000) cache.delete(cache.keys().next().value);
      cache.set(key, out);
      return out;
    } catch (e) {
      console.log('attempt', attempt + 1, 'all models failed');
      if (attempt === 0) await new Promise((r) => setTimeout(r, 200));
    }
  }
  throw new Error('Google servers busy');
};

app.post('/api/translate', async (req, res) => {
  const { text, targetLanguage, sourceLanguage = 'English' } = req.body;
  if (!text || !text.trim()) return res.status(400).json({ error: 'No text' });

  try {
    const out = await translateText(text, targetLanguage, sourceLanguage);
    return res.json({ translatedText: out });
  } catch (e) {
    return res.status(503).json({ error: 'Google servers busy, try again' });
  }
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: FRONTEND_URL },
});

io.on('connection', (socket) => {
  let chain = Promise.resolve();

  socket.on('join', (data) => {
    const { room, name, lang } = data || {};
    if (!room || !lang || !lang.name) return;
    socket.data.room = room;
    socket.data.name = name || 'Client';
    socket.data.lang = { name: lang.name, voice: lang.voice };
    socket.join(room);
  });

  socket.on('speech', (data) => {
    const { text, isFinal } = data || {};
    const room = socket.data.room;
    if (!room || typeof text !== 'string') return;

    const clean = text.trim().slice(0, 500);
    if (!clean) return;

    chain = chain
      .then(() => handleSpeech(socket, room, clean, !!isFinal))
      .catch((e) => console.log('speech error:', e.message));
  });
});

async function handleSpeech(socket, room, text, isFinal) {
  const sockets = await io.in(room).fetchSockets();

  let listeners = sockets.filter((s) => s.id !== socket.id);
  if (listeners.length === 0) listeners = sockets;

  const langs = [...new Set(listeners.map((s) => s.data.lang && s.data.lang.name).filter(Boolean))];

  const pairs = await Promise.all(
    langs.map(async (l) => {
      try {
        return [l, await translateText(text, l)];
      } catch (e) {
        return [l, ''];
      }
    })
  );
  const byLang = Object.fromEntries(pairs);

  for (const s of listeners) {
    const t = s.data.lang && byLang[s.data.lang.name];
    if (t) io.to(s.id).emit('translated', { from: socket.id, text: t, isFinal });
  }
}

server.listen(PORT, () => console.log(`Server running on ${PORT}`));