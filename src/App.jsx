 import React, { useState, useRef,  } from "react";
 import "./App.css";
import SpeakerLangSwitcher from "./SpeakerLangSwitcher";
const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="trusted-section">
        
      </div>

      <div className="features-heading">
        <span className="small-title">Features</span>

        <h2>
          Everything you need for{" "}
          <span>borderless</span>
          <br />
          <span>meetings</span>
        </h2>

        <p>
          A complete AI translation toolkit built for modern,
          multilingual teams — from
          <br />
          live captions to automated meeting notes.
        </p>
      </div>

      <div className="feature-cards">

        {/* Card 1 */}
        <div className="feature-card">
          <div className="feature-icon blue">
            🌍

          </div>

          <h3>Real-time Translation</h3>

          <p>
            Live, instant translation of spoken language
            across 100+ languages with sub-second latency.
          </p>
        </div>

        {/* Card 2 */}
        <div className="feature-card">
          <div className="feature-icon green">
            👥
          </div>

          <h3>Speaker Recognition</h3>

          <p>
            Automatically identify and label each speaker in
            multi-person meetings and conversations.
          </p>
        </div>

        {/* Card 3 */}
        <div className="feature-card">
          <div className="feature-icon blue">
            💬
          </div>

          <h3>Live Captions</h3>

          <p>
            Accurate, real-time captions that appear as
            people speak — perfect for accessibility.
          </p>
        </div>

        {/* Card 1 */}
<div className="feature-card">
  <div className="feature-icon purple">
    ✎
  </div>

  <h3>Meeting Notes</h3>

  <p>
    Automatically capture and organize important notes
    from every meeting.
  </p>
</div>--

{/* Card 2 */}
<div className="feature-card">
  <div className="feature-icon green">
    📄
  </div>

  <h3>AI Summarise</h3>

  <p>
    Turn long meetings and conversations into clear,
    concise AI-powered summaries.
  </p>
</div>

{/* Card 3 */}
<div className="feature-card">
  <div className="feature-icon blue">
    🌍

  </div>

  <h3>100+ Languages</h3>

  <p>
    Transcribe and understand conversations in more than
    100 languages with ease.
  </p>
</div>
        
      
      </div>
    </section>
  );
};

const HowItWorks = () => {
    const [videoOpen, setVideoOpen] = useState(false);
  return (
    <section className="how-it-works">

      <div className="how-header">
        <p className="how-small-title">How it Works</p>

        <h2>
          Live translation in{" "}
          <span>three simple steps</span>
        </h2>

        <p className="how-subtitle">
          No setup calls, no engineering work. Connect your calendar and
          Gomtng.ai handles the rest automatically.
        </p>
      </div>

      <div className="how-content">

        <div className="steps-container">

          {/* Step 1 */}
          <div className="step-card">
            <div className="step-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <path d="M16 2v4M8 2v4M3 9h18" />
              </svg>
            </div>

            <div className="step-info">
              <span className="step-number">01</span>

              <h3>Connect your calendar</h3>

              <p>
                Link Google Calendar or Outlook and Gomting.ai auto-detects
                every upcoming meeting that needs translation.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="step-card">
            <div className="step-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M4 10a8 8 0 0 1 16 0" />
                <path d="M7 10a5 5 0 0 1 10 0" />
                <path d="M10 10a2 2 0 0 1 4 0" />
                <path d="M12 13v7" />
              </svg>
            </div>

            <div className="step-info">
              <span className="step-number">02</span>

              <h3>Join and translate live</h3>

              <p>
                Gomtng.ai joins your call and delivers real-time captions
                and translation in over 100 languages as people speak.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="step-card">
            <div className="step-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M6 3h12v18H6z" />
                <path d="M9 7h6M9 11h6M9 15h4" />
              </svg>
            </div>

            <div className="step-info">
              <span className="step-number">03</span>

              <h3>Get notes and summaries</h3>

              <p>
                The moment your meeting ends, receive AI-generated notes,
                action items, and a shareable summary in everyone's language.
              </p>
            </div>
          </div>

        </div>

          <div className="video-area" onClick={() => setVideoOpen(true)}>
          <div className="play-button"><span>▶</span></div>
          <h3>Watch Gomtng.ai in action</h3>
          <p>2-minute product walkthrough</p>
        </div>

        {videoOpen && (
          <div className="video-modal" onClick={() => setVideoOpen(false)}>
            <div className="video-modal-box" onClick={(e) => e.stopPropagation()}>
              <button className="video-close" onClick={() => setVideoOpen(false)}>✕</button>
              <video src="/demo.mp4" controls autoPlay playsInline />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};



const integrations = [
  {
    icon: "▣",
    title: "Zoom",
    description: "Join any Zoom meeting with live translation and captions.",
    type: "zoom",
  },
  {
    icon: "G",
    title: "Google Meet",
    description: "Real-time captions and translation for every Google Meet call.",
    type: "google",
  },
  {
    icon: "⊞",
    title: "Microsoft Teams",
    description: "Seamless translation inside your existing Teams workflow.",
    type: "teams",
  },
  {
    icon: "✣",
    title: "Slack",
    description: "Share translated meeting notes and summaries to Slack channels.",
    type: "slack",
  },
  {
    icon: "✉",
    title: "Outlook Calendar",
    description: "Auto-join and translate meetings straight from your Outlook calendar.",
    type: "outlook",
  },
  {
    icon: "▦",
    title: "Google Calendar",
    description: "Sync your schedule and translate every booked meeting automatically.",
    type: "calendar",
  },
  {
    icon: "•••",
    title: "More",
    description: "Webhooks, Zapier, and a full REST API for custom integrations.",
    type: "more",
  },
];

function Integrations() {
  return (
    <section className="integrations-section">
      <div className="integrations-container">

        <div className="integrations-heading">
          <span className="integrations-label">Integrations</span>

          <h2>
            Works with the tools{" "}
            <span>your team already uses</span>
          </h2>

          <p>
            Connect Gomting.ai to your favorite meeting and productivity apps
            in seconds.
          </p>
        </div>

        <div className="integrations-grid">
          {integrations.map((item) => (
            <div
              className={`integration-card ${item.type}`}
              key={item.title}
            >
              <div className="integration-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


const securityFeatures = [
  {
    icon: "🔒",
    title: "End-to-end Encryption",
    text: "Every conversation is encrypted in transit and at rest with AES-256.",
  },
  {
    icon: "♢",
    title: "SOC 2 Type II",
    text: "Independently audited and certified for security, availability, and confidentiality.",
  },
  {
    icon: "✓",
    title: "GDPR Compliant",
    text: "Full compliance with EU data protection regulations and data residency options.",
  },
  {
    icon: "⚿",
    title: "SSO & SAML",
    text: "Enterprise single sign-on with Okta, Azure AD, Google Workspace, and more.",
  },
  {
    icon: "◉",
    title: "Data Never Used for Training",
    text: "Your conversations are never used to train any AI model. Ever.",
  },
  {
    icon: "✓",
    title: "99.9% Uptime",
    text: "Backed by an enterprise SLA with redundant infrastructure across regions.",
  },
];

function EnterpriseSecurity() {
  return (
    <section className="enterprise-security">
      <div className="security-container">

        {/* LEFT CARD */}
        <div className="security-card-wrapper">
          <div className="security-card">

            <div className="security-icon-box">
              <svg
                width="54"
                height="54"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3L19 6V11C19 15.5 16.1 19.2 12 21C7.9 19.2 5 15.5 5 11V6L12 3Z"
                  stroke="white"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3>Protected end-to-end</h3>

            <p className="security-card-subtitle">
              AES-256 encryption · SOC 2 · GDPR
            </p>

            <div className="security-badges">

              <div className="security-badge">
                <span>✓</span>
                <strong>SOC 2</strong>
              </div>

              <div className="security-badge">
                <span>✓</span>
                <strong>GDPR</strong>
              </div>

              <div className="security-badge">
                <span>✓</span>
                <strong>SSO</strong>
              </div>

            </div>
          </div>
        </div>

        <div className="security-content">

          <div className="security-label">
            Enterprise Security
          </div>

          <h2>
            Security built for the{" "}
            <span>enterprise</span>
          </h2>

          <p className="security-description">
            Your conversations are sensitive. Gomting.ai is engineered to meet
            the strictest security and compliance standards from day one.
          </p>

          <div className="security-features">

            {securityFeatures.map((feature, index) => (
              <div className="security-feature" key={index}>

                <div className="feature-icon">
                  {feature.icon}
                </div>

                <div className="feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.text}</p>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}


const testimonials = [
  {
    quote:
      "Security was our top concern. End-to-end encryption, SOC 2, and a clear promise that our data is never used for training gave our legal team the confidence to roll this out company-wide.",
    name: "David Okafor",
    role: "Chief Information Security Officer",
    company: "Meridian Financial",
    initials: "DO",
  },
  
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const previousTestimonial = () => {
    setActive((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setActive((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const testimonial = testimonials[active];

  return (
    <section className="testimonials-section">
      <div className="testimonial-container">

        <div className="testimonial-label">
          Testimonials
        </div>

        <h2 className="testimonial-heading">
          Loved by teams{" "}
          <span>around the world</span>
        </h2>

        <div className="testimonial-card">

          <div className="stars">
            ★ ★ ★ ★ ★
          </div>

           <p className="testimonial-quote">
            "{testimonial.quote}"
          </p>

           <div className="testimonial-user">

            <div className="user-avatar">
              {testimonial.initials}
            </div>

            <div className="user-info">
              <h4>{testimonial.name}</h4>

              <p>
                {testimonial.role}
                <span> • </span>
                {testimonial.company}
              </p>
            </div>

          </div>

          <div className="testimonial-controls">

            <button
              className="arrow-btn"
              onClick={previousTestimonial}
            >
              ‹
            </button>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${
                    active === index ? "active-dot" : ""
                  }`}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>

            <button
              className="arrow-btn"
              onClick={nextTestimonial}
            >
              ›
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};



const Footer = () => {
  return (
    <footer className="footer-section">

       <section className="cta-section">
        <div className="cta-content">
          <h2>Start translating your meetings today</h2>

          <p>
            Join thousands of teams using Gomting.ai to break down language barriers.
            <br />
            Free to start — no credit card required.
          </p>

          <div className="cta-buttons">
            <button className="get-started-btn">
              Get Started Free <span>→</span>
            </button>

            <button className="sales-btn">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      <div className="footer-container">

         <div className="footer-brand">
          <div className="brand-logo">
            <div className="logo-icon">🌐</div>
            <span>Gomtng<span>.ai</span></span>
          </div>

          <p>
            Real-time AI translation for meetings, calls, and
            conversations that connect the world.
          </p>

          <div className="social-icons">
            <a href="#">𝕏</a>
            <a href="#">in</a>
            <a href="#">◉</a>
            <a href="#">▶</a>
          </div>
        </div>

        {/* PRODUCT */}
        <div className="footer-column">
          <h3>Product</h3>
          <a href="#">Features</a>
          <a href="#">Integrations</a>
          <a href="#">Security</a>
          <a href="#">Pricing</a>
          <a href="#">Changelog</a>
        </div>

        {/* SOLUTIONS */}
        <div className="footer-column">
          <h3>Solutions</h3>
          <a href="#">Sales Teams</a>
          <a href="#">Customer Support</a>
          <a href="#">Engineering</a>
          <a href="#">Healthcare</a>
          <a href="#">Education</a>
        </div>

        {/* RESOURCES */}
        <div className="footer-column">
          <h3>Resources</h3>
          <a href="#">Documentation</a>
          <a href="#">API Reference</a>
          <a href="#">Blog</a>
          <a href="#">Help Center</a>
          <a href="#">Community</a>
        </div>

        {/* COMPANY */}
        <div className="footer-column">
          <h3>Company</h3>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
          <a href="#">Partners</a>
          <a href="#">Contact</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Gomtng.ai. All rights reserved.</p>

        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>

    </footer>
  );
};

function App() {

    const [inputText, setInputText] = useState("How are you today?");
  const [translated, setTranslated] = useState("Como estas hoy?");
  const [loading, setLoading] = useState(false);

  const recognitionRef = useRef(null);
  const debounceRef = useRef(null);
const [listening, setListening] = useState(false);
const [showAll, setShowAll] = useState(false);

const LANGS = [
  { name: "English", voice: "en-US" },
  { name: "Spanish", voice: "es-ES" },
  { name: "Hindi", voice: "hi-IN" },
  { name: "Chinese", voice: "zh-CN" },
  { name: "French", voice: "fr-FR" },
  { name: "German", voice: "de-DE" },
  { name: "Russian", voice: "ru-RU" },
  { name: "Japanese", voice: "ja-JP" },
  { name: "Korean", voice: "ko-KR" },
  { name: "Italian", voice: "it-IT" },
  { name: "Portuguese", voice: "pt-PT" },
  { name: "Dutch", voice: "nl-NL" },
  { name: "Arabic", voice: "ar-SA" },
  { name: "Turkish", voice: "tr-TR" },
  { name: "Vietnamese", voice: "vi-VN" },
  { name: "Bengali", voice: "bn-IN" },
  { name: "Marathi", voice: "mr-IN" },
  
];
const [target, setTarget] = useState(LANGS[0]);
const targetRef = useRef(LANGS[0]);
const SOURCE_LANGS = [
  { name: "English", label: "English", voice: "en-US", sample: "How are you today?" },
  { name: "Hindi", label: "हिन्दी", voice: "hi-IN", sample: "आप आज कैसे हैं?" },
];
const [source, setSource] = useState(SOURCE_LANGS[0]);
const sourceRef = useRef(SOURCE_LANGS[0]);

const speakText = (text, voice) => {
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = voice;
  window.speechSynthesis.speak(u);
};

const translateText = async (text, speak = false, lang = targetRef.current) => {
  if (!text.trim()) return;
  if (speak) setLoading(true);
  try {
    const res = await fetch("http://localhost:5000/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
  text,
  sourceLanguage: sourceRef.current.name,
  targetLanguage: lang.name,
}),
    });
    const data = await res.json();
    if (!res.ok) {
      setTranslated(data.error || "Something went wrong");
    } else {
      setTranslated(data.translatedText);
      if (speak) speakText(data.translatedText, lang.voice);
    }
  } catch (err) {
    setTranslated("Server not reachable");
  }
  setLoading(false);
};

const selectLang = (lang) => {
  setTarget(lang);
  targetRef.current = lang;
  setShowAll(false);
  translateText(inputText, true, lang);
};
const selectSource = (src) => {
  recognitionRef.current?.stop();
  setSource(src);
  sourceRef.current = src;

  let lang = targetRef.current;
  if (lang.name === src.name) {
    lang = LANGS.find((l) => l.name !== src.name);
    setTarget(lang);
    targetRef.current = lang;
  }

  setInputText(src.sample);
  translateText(src.sample, false, lang);
};

const handleTranslate = () => translateText(inputText);

const toggleMic = () => {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    return;
  }
  if (listening) {
    recognitionRef.current?.stop();
    return;
  }
  const rec = new SR();
  rec.lang = sourceRef.current.voice;
  rec.interimResults = true;
  rec.onstart = () => setListening(true);
  rec.onend = () => setListening(false);
  rec.onresult = (e) => {
  const text = Array.from(e.results).map((r) => r[0].transcript).join("");
  setInputText(text);
  clearTimeout(debounceRef.current);
  const isFinal = e.results[e.results.length - 1].isFinal;
  if (isFinal) {
    translateText(text, true);
  } else {
    debounceRef.current = setTimeout(() => translateText(text, false), 700);
  }
};

  recognitionRef.current = rec;
  rec.start();
}
  return (
    
    <div className="app">
      
      <header className="navbar">
        <div className="logo-area">
          <div className="logo-icon">
            <span className="logo-circle">🌐</span>
          </div>

          <div className="logo-text">
            Gomtng<span>.ai</span>
          </div>
        </div>
        

        <nav className="nav-links">
          <a href="#product">Product</a>
          <a href="#solutions">Solutions</a>
          <a href="#resources">Resources</a>
          <a href="#pricing">Pricing</a>
          <a href="#company">Company</a>
        </nav>
        

        <div className="nav-actions">
          <button className="sign-in">Sign in</button>
          <button className="get-started">
            Get Started Free
          </button>
        </div>

        <button className="menu-btn">☰</button>
      </header>

      <main className="hero">
        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>
        <div className="hero-glow glow-three"></div>

        <div className="hero-content">

          <section className="hero-left">

            <div className="small-badge">
              <span className="badge-dot"></span>
              AI voice translation platform
            </div>

            <h1>
              Real-time voice
              <br />

              <span>translation,</span>
              <br />

              limitless
              <br />

              possibilities
            </h1>
            

            <p className="hero-description">
              Break language barriers instantly with Gomting.ai.
              Real-time voice translation for live conversations,
              events, and global connections.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Start Translating Now
                <span>→</span>
              </button>

              <button className="secondary-btn">
                Explore Features
                <span>→</span>
              </button>
            </div>

            <div className="features">

              <div className="feature">
                <div className="feature-icon">ϟ</div>
                <span>Real-time Translation</span>
              </div>

              <div className="feature">
                <div className="feature-icon">◎</div>
                <span>100+ Languages</span>
              </div>

              <div className="feature">
                <div className="feature-icon">♢</div>
                <span>Enterprise Security</span>
              </div>

            </div>
          </section>
          

          <section className="hero-right">

            <div className="translation-card">

               <div className="translation-top">

                <div className="dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="live">
                  <span className="live-dot"></span>
                  LIVE 00:02:43
                </div>

              </div>
               <div className="accuracy-card">
                <div className="shield">♢</div>

                <div>
                  <strong>99.9% accuracy</strong>
                  <small>Gomtng.ai</small>
                </div>
              </div>

              <div className="language-wrapper">

                <div className="language-card">

                  <div className="language-header">
                  <SpeakerLangSwitcher
                   options={SOURCE_LANGS}
                   value={source.name}
                   onChange={selectSource}
                />
            </div>
            
                  <div className="voice-image english-image">
                    <div className="voice-glow"></div>
                  </div>

                  <div className="speaker-label">

                    SPEAKER

                  </div>
                  <div className="sentence">
                    <textarea
                     value={inputText}
                     onChange={(e) => setInputText(e.target.value)}
                     rows={4}
                     style={{
                          background: "transparent",
                          border: "none",
                          color: "inherit",
                          width: "100%",
                          outline: "none",
                          font: "inherit",
                          textAlign: "center",
                          resize: "none",
                          overflowWrap: "anywhere",
                      }}
                   />
                </div>

                </div>

                <div className="language-card">

                  <div className="language-header">
                    <strong>{target.name}</strong>
                    <span>◉</span>
                  </div>

                  <div className="voice-image spanish-image">
                    <div className="voice-glow"></div>
                  </div>

                  <div className="speaker-label">
                  </div>

                  <div className="sentence">{loading ? "Translating..." : translated}</div>

                </div>

              </div>

              <div className="languages-badge">
                <span className="globe">◎</span>
                <div className="lang-picker">
                <small>◉ {target.name}</small>

                <button
                  className="lang-more-btn"
                  onClick={() => setShowAll(!showAll)}
                  aria-label="Show all languages"
               >
                    {showAll ? "▲" : "▼"} +{LANGS.length - 2}
                 </button>

             {showAll && (
               <div className="lang-panel">
                {LANGS.filter((l) => l.name !== source.name).map((l) => (
                 <button
                      key={l.name}
                      className={`lang-chip ${target.name === l.name ? "active" : ""}`}
                      onClick={() => selectLang(l)}
                  >
                     {l.name}
                  </button>
                ))}
             </div>
           )}
         </div>
       </div>

               <div className="translation-bottom">

                <div className="bottom-icon">
                  ↑
                </div>

                <div className="bottom-text">
                  <small>REAL-TIME TRANSLATION</small>
                  <strong>
                    Powered by low-latency speech models
                  </strong>
                </div>

                <button className="arrow-btn" onClick={handleTranslate}>
                  ↘
                </button>
                <button className="arrow-btn" onClick={toggleMic}>
                     {listening ? "⏹" : "🎤"}
                 </button>

              </div>

            </div>

          </section>
        </div>

         <div className="bottom-glow"></div>
      </main>
      <p className="trusted-title">
          TRUSTED BY INNOVATORS WORLDWIDE
        </p>

        <div className="company-logos">
          <span>Northwind</span>
          <span>Lumen</span>
          <span>Atlas</span>
          <span>Meridian</span>
          <span>Cobalt</span>
          <span>Vantage</span>
        </div>
      <FeaturesSection />

      <HowItWorks />

      <Integrations />

      <EnterpriseSecurity />

      <Testimonials/>

       <Footer />

      


    </div>
    
  );
}

export default App;