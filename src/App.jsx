
import { useState } from "react";
import "./App.css";

function App() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className={`app ${isOn ? "light-on" : "light-off"}`}>
      <div className="card">
        <div className="top-label">
          <span className={`status-dot ${isOn ? "active" : ""}`} />
          SMART LIGHT
        </div>

        <h1>
          Light <span>Studio</span>
        </h1>
        <p className="subtitle">
          Bring a little brightness into your space.
        </p>

        <div className={`bulb-scene ${isOn ? "glowing" : ""}`}>
          <div className="halo" />

          <svg
            className="bulb"
            viewBox="0 0 240 350"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={isOn ? "Light switched on" : "Light switched off"}
          >
            <defs>
              <linearGradient id="glassOff" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#dfe5ef" />
                <stop offset="100%" stopColor="#aeb9cc" />
              </linearGradient>

              <linearGradient id="glassOn" x1="0" y1="0" x2="0.8" y2="1">
                <stop offset="0%" stopColor="#fffde9" />
                <stop offset="50%" stopColor="#ffe878" />
                <stop offset="100%" stopColor="#ffb52e" />
              </linearGradient>

              <linearGradient id="metal" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#657086" />
                <stop offset="25%" stopColor="#f5f7fc" />
                <stop offset="50%" stopColor="#9aa5b8" />
                <stop offset="75%" stopColor="#f5f7fc" />
                <stop offset="100%" stopColor="#68748a" />
              </linearGradient>

              <radialGradient id="innerLight">
                <stop offset="0%" stopColor="#ffffff" stopOpacity=".95" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Glass bulb */}
            <path
              className="glass"
              d="M120 15
                 C60 15 19 62 19 125
                 C19 175 42 208 76 235
                 C87 244 91 252 91 264
                 L149 264
                 C149 252 153 244 164 235
                 C198 208 221 175 221 125
                 C221 62 180 15 120 15 Z"
              fill={isOn ? "url(#glassOn)" : "url(#glassOff)"}
            />

            {/* Glass reflection */}
            <path
              d="M48 105 C53 65 77 40 102 34"
              fill="none"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
              opacity=".9"
            />

            <path
              d="M39 135 C40 110 46 87 59 70"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              opacity=".65"
            />

            {/* Inner illumination */}
            <ellipse
              cx="120"
              cy="142"
              rx="76"
              ry="95"
              fill="url(#innerLight)"
              className="inner-light"
            />

            {/* Filament supports */}
            <g
              fill="none"
              stroke={isOn ? "#b47b1b" : "#788398"}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M96 211 L96 178 L105 160" />
              <path d="M144 211 L144 178 L135 160" />
            </g>

            {/* Glowing filament */}
            <path
              className="filament"
              d="M105 160
                 Q120 143 135 160
                 L135 174
                 Q120 187 105 174 Z"
              fill="none"
              stroke={isOn ? "#fff8b7" : "#778398"}
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Bulb neck */}
            <path
              d="M91 263 L149 263 L145 284 L95 284 Z"
              fill={isOn ? "#ffe38a" : "#cbd3e0"}
              stroke="#7c8799"
              strokeWidth="2"
            />

            {/* Metallic screw base */}
            <path
              d="M95 280 L145 280 L151 311
                 Q151 319 142 319 L98 319
                 Q89 319 89 311 Z"
              fill="url(#metal)"
              stroke="#737f93"
              strokeWidth="2"
            />

            <path
              d="M92 290 L148 290
                 M91 300 L149 300
                 M91 310 L149 310"
              fill="none"
              stroke="#758196"
              strokeWidth="3"
            />

            <rect
              x="105"
              y="318"
              width="30"
              height="13"
              rx="4"
              fill="url(#metal)"
              stroke="#758196"
              strokeWidth="2"
            />

            <ellipse cx="120" cy="333" rx="12" ry="5" fill="#68748a" />
          </svg>

          {/* Animated rays */}
          <div className="rays">
            {Array.from({ length: 12 }, (_, i) => (
              <span
                key={i}
                style={{ "--angle": `${i * 30}deg` }}
              />
            ))}
          </div>

          <div className="bulb-shadow" />
        </div>

        {/* Separate switch control */}
        <div className="control-panel">
          <div className="status">
            <span className="status-caption">POWER STATUS</span>
            <strong>{isOn ? "Switched ON" : "Switched OFF"}</strong>
          </div>

          <button
            className={`toggle ${isOn ? "toggle-on" : ""}`}
            onClick={() => setIsOn((previous) => !previous)}
            aria-pressed={isOn}
            type="button"
          >
            <span className="toggle-track">
              <span className="toggle-knob" />
            </span>
            <span>{isOn ? "ON" : "OFF"}</span>
          </button>
        </div>

        <p className="footer-text">
          Tap the switch to {isOn ? "turn off" : "turn on"} the light
        </p>
      </div>
    </div>
  );
}

export default App;