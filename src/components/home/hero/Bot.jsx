"use client";

import { useEffect, useId, useRef, useState } from "react";

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  return reducedMotion;
}

function useTypewriter(text, { delay = 520, speed = 24, paused, disabled }) {
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const pausedRef = useRef(paused);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    if (disabled) return undefined;

    let interval;

    const timeout = window.setTimeout(() => {
      setVisibleCharacters(1);
      interval = window.setInterval(() => {
        if (pausedRef.current) return;

        setVisibleCharacters((current) => {
          if (current >= text.length) {
            window.clearInterval(interval);
            return current;
          }

          return current + 1;
        });
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, [delay, disabled, speed, text]);

  const visibleCount = disabled ? text.length : visibleCharacters;

  return {
    typed: text.slice(0, visibleCount),
    complete: visibleCount >= text.length,
  };
}

function RobotSvg({ name, role }) {
  const rawId = useId();
  const id = rawId.replace(/[^a-zA-Z0-9_-]/g, "");
  const shellId = `bot-shell-${id}`;
  const visorId = `bot-visor-${id}`;
  const accentId = `bot-accent-${id}`;
  const glowId = `bot-glow-${id}`;

  return (
    <svg
      viewBox="0 0 200 232"
      fill="none"
      className="hero-bot__svg"
      role="img"
      aria-label={`${name}, ${role} robot`}
    >
      <defs>
        <linearGradient id={shellId} x1="52" y1="36" x2="148" y2="190" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--white)" />
          <stop offset="0.54" stopColor="var(--light)" />
          <stop offset="1" stopColor="var(--soft-green)" />
        </linearGradient>
        <linearGradient id={visorId} x1="64" y1="47" x2="136" y2="95" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--charcoal)" />
          <stop offset="1" stopColor="var(--dark-green)" />
        </linearGradient>
        <linearGradient id={accentId} x1="84" y1="134" x2="116" y2="164" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--bot-accent)" />
          <stop offset="1" stopColor="var(--emerald)" />
        </linearGradient>
        <radialGradient
          id={glowId}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="translate(100 112) rotate(90) scale(88)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--bot-accent)" stopOpacity="0.26" />
          <stop offset="1" stopColor="var(--bot-accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="112" r="88" fill={`url(#${glowId})`} />

      <ellipse cx="100" cy="221" rx="38" ry="5" fill="var(--charcoal)" fillOpacity="0.28" />

      <g className="hero-bot__hover">
        <ellipse cx="100" cy="207" rx="27" ry="6.5" fill="var(--bot-accent)" fillOpacity="0.1" />
        <ellipse cx="100" cy="204" rx="17" ry="4" fill="var(--bot-accent)" fillOpacity="0.2" />
        <path d="M83 199c5-3 11-4.5 17-4.5s12 1.5 17 4.5" stroke="var(--bot-accent)" strokeOpacity="0.52" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      <g className="hero-bot__antenna">
        <path d="M100 36V22" stroke="var(--bot-accent)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="100" cy="17" r="7" stroke="var(--bot-accent)" strokeOpacity="0.18" strokeWidth="1" />
        <circle cx="100" cy="17" r="3.8" fill="var(--bot-accent)" stroke="var(--soft-green)" strokeWidth="1.1" />
      </g>

      <g className="hero-bot__head">
        <rect x="45" y="59" width="10" height="27" rx="5" fill="var(--soft-green)" stroke="var(--dark-green)" strokeOpacity="0.45" strokeWidth="1.2" />
        <path d="M50 65v15" stroke="var(--bot-accent)" strokeOpacity="0.68" strokeWidth="1.1" strokeLinecap="round" />
        <rect x="145" y="59" width="10" height="27" rx="5" fill="var(--soft-green)" stroke="var(--dark-green)" strokeOpacity="0.45" strokeWidth="1.2" />
        <path d="M150 65v15" stroke="var(--bot-accent)" strokeOpacity="0.68" strokeWidth="1.1" strokeLinecap="round" />

        <rect x="52" y="36" width="96" height="74" rx="24" fill={`url(#${shellId})`} stroke="var(--dark-green)" strokeOpacity="0.55" strokeWidth="1.7" />
        <path d="M66 46c8-5 17-7 31-7" stroke="var(--white)" strokeOpacity="0.72" strokeWidth="2" strokeLinecap="round" />
        <rect x="63" y="47" width="74" height="46" rx="16" fill={`url(#${visorId})`} stroke="var(--bot-accent)" strokeOpacity="0.5" strokeWidth="1.2" />
        <path d="M72 54h30" stroke="var(--white)" strokeOpacity="0.16" strokeWidth="1.6" strokeLinecap="round" />

        <g className="hero-bot__eyes">
          <rect x="78.75" y="62" width="8.5" height="11" rx="4.25" fill="var(--bot-accent)" />
          <rect x="112.75" y="62" width="8.5" height="11" rx="4.25" fill="var(--bot-accent)" />
          <circle cx="81" cy="64.8" r="0.85" fill="var(--white)" fillOpacity="0.68" />
          <circle cx="115" cy="64.8" r="0.85" fill="var(--white)" fillOpacity="0.68" />
        </g>

        <path d="M89 82c3.2 2.9 7.2 4.3 11 4.3 4 0 7.8-1.4 11-4.3" stroke="var(--bot-accent)" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="100" cy="41.5" r="2" fill="var(--bot-accent)" fillOpacity="0.85" />
        <circle cx="100" cy="41.5" r="4.4" stroke="var(--bot-accent)" strokeOpacity="0.2" strokeWidth="1" />

        <path d="M90 112h20" stroke="var(--dark-green)" strokeOpacity="0.58" strokeWidth="8" strokeLinecap="round" />
      </g>

      <g className="hero-bot__torso">
        <path d="M69 126c0-7 5.5-12.5 12.5-12.5h37c7 0 12.5 5.5 12.5 12.5v39c0 9.5-7.5 17-17 17H86c-9.5 0-17-7.5-17-17v-39Z" fill={`url(#${shellId})`} stroke="var(--dark-green)" strokeOpacity="0.52" strokeWidth="1.6" />
        <path d="M80 121h40" stroke="var(--white)" strokeOpacity="0.6" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M69 137h-6M137 137h6" stroke="var(--bot-accent)" strokeOpacity="0.4" strokeWidth="1.2" strokeLinecap="round" />

        <rect x="83" y="132" width="34" height="30" rx="9" fill="var(--dark-green)" stroke="var(--bot-accent)" strokeOpacity="0.5" strokeWidth="1.1" />
        <circle cx="100" cy="147" r="9" fill="var(--bot-accent)" fillOpacity="0.12" />
        <path d="M100 139.5 106.5 143v7.5L100 154l-6.5-3.5V143l6.5-3.5Z" fill={`url(#${accentId})`} fillOpacity="0.9" />
        <path d="m97.4 146.8 1.7 1.8 3.5-3.8" stroke="var(--charcoal)" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />

        <path d="M84 170h6M110 170h6" stroke="var(--bot-accent)" strokeOpacity="0.4" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M89 181h22l-3 10H92l-3-10Z" fill="var(--dark-green)" fillOpacity="0.9" />
        <rect x="90" y="186" width="20" height="3" rx="1.5" fill="var(--bot-accent)" fillOpacity="0.58" />
      </g>

      <g className="hero-bot__arm hero-bot__arm--left">
        <rect x="58" y="126" width="13" height="34" rx="6.5" fill="var(--soft-green)" stroke="var(--dark-green)" strokeOpacity="0.42" strokeWidth="1.2" />
        <circle cx="64.5" cy="161" r="5.3" fill="var(--light)" stroke="var(--dark-green)" strokeOpacity="0.5" strokeWidth="1.1" />
        <rect x="56" y="162" width="14" height="24" rx="7" fill={`url(#${shellId})`} stroke="var(--dark-green)" strokeOpacity="0.45" strokeWidth="1.2" />
        <circle cx="63" cy="188" r="7.5" fill="var(--bot-accent)" fillOpacity="0.16" stroke="var(--bot-accent)" strokeOpacity="0.68" strokeWidth="1.2" />
        <path d="M60 188h6" stroke="var(--bot-accent)" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      <g className="hero-bot__arm hero-bot__arm--right">
        <rect x="129" y="126" width="13" height="34" rx="6.5" fill="var(--soft-green)" stroke="var(--dark-green)" strokeOpacity="0.42" strokeWidth="1.2" />
        <circle cx="135.5" cy="161" r="5.3" fill="var(--light)" stroke="var(--dark-green)" strokeOpacity="0.5" strokeWidth="1.1" />
        <rect x="130" y="162" width="14" height="24" rx="7" fill={`url(#${shellId})`} stroke="var(--dark-green)" strokeOpacity="0.45" strokeWidth="1.2" />
        <circle cx="137" cy="188" r="7.5" fill="var(--bot-accent)" fillOpacity="0.16" stroke="var(--bot-accent)" strokeOpacity="0.68" strokeWidth="1.2" />
        <path d="M134 188h6" stroke="var(--bot-accent)" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      <path d="M54 151H46M154 151h8" stroke="var(--bot-accent)" strokeOpacity="0.22" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function BotSpeech({ message, status, name, role, paused }) {
  const reducedMotion = usePrefersReducedMotion();
  const messageTyping = useTypewriter(message, {
    delay: 640,
    speed: 22,
    paused,
    disabled: reducedMotion,
  });
  const statusTyping = useTypewriter(status, {
    delay: 640 + message.length * 22 + 220,
    speed: 18,
    paused,
    disabled: reducedMotion,
  });

  return (
    <>
      <span className="sr-only" aria-live="polite">
        {name}, {role}: {message} {status}
      </span>

      <div className="hero-bot__speech" aria-hidden="true">
        <div className="hero-bot__speech-header">
          <span className="hero-bot__speech-name">{name}</span>
          <span className="hero-bot__speech-role">{role}</span>
        </div>
        <p className="hero-bot__speech-message">
          {messageTyping.typed}
          {!messageTyping.complete && !reducedMotion ? <span className="hero-bot__caret" /> : null}
        </p>
        <p className={`hero-bot__speech-status ${statusTyping.typed ? "is-visible" : ""}`}>
          <span className="hero-bot__speech-status-dot" />
          {statusTyping.typed}
        </p>
      </div>
    </>
  );
}

export default function Bot({
  name,
  role,
  result,
  showResult = true,
  tone = "secu",
  className = "",
}) {
  return (
    <div className={`hero-bot hero-bot--${tone} ${className}`.trim()}>
      <span className="hero-bot__aura" aria-hidden="true" />
      <span className="hero-bot__orbit" aria-hidden="true" />
      <RobotSvg name={name} role={role} />
      {showResult ? (
        <span className="hero-bot__result" aria-hidden="true">
          <span className="hero-bot__result-check">
            <svg viewBox="0 0 16 16" fill="none">
              <path d="m4.2 8.4 2.4 2.4 5.2-5.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          {result}
        </span>
      ) : null}
    </div>
  );
}
