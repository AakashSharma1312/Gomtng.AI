import { useState, useRef, useEffect } from "react";

function SpeakerLangSwitcher({ options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const current = options.find((o) => o.name === value);

  return (
    <div className="spk-lang" ref={ref}>
      <span className="spk-lang-title">{current.label}</span>

      <button
        type="button"
        className={`spk-lang-btn ${open ? "active" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Change speaker language"
        aria-expanded={open}
      >
        <span style={{ fontSize: "15px", fontWeight: 700 }}>अ/A</span>
      </button>

      {open && (
        <ul className="spk-lang-menu" role="listbox">
          {options.map((o) => (
            <li
              key={o.name}
              role="option"
              aria-selected={o.name === value}
              className={o.name === value ? "selected" : ""}
              onClick={() => {
                onChange(o);
                setOpen(false);
              }}
            >
              <span>{o.label}</span>
              {o.name === value && <span className="tick">✓</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SpeakerLangSwitcher;