"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const SPEECH_MESSAGES = [
  "Hi, I'm Secu. Send me a domain and I'll review it.",
  "Let me show you what to fix first.",
  "Found 3 things an attacker would notice.",
];

function subscribeToReducedMotion(onChange) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

function useTypedMessages(messages) {
  const reducedMotion = usePrefersReducedMotion();
  const [messageIndex, setMessageIndex] = useState(0);
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const hasStartedRef = useRef(false);
  const message = messages[messageIndex];

  useEffect(() => {
    if (reducedMotion) return undefined;

    let cancelled = false;
    let intervalId;
    let timeoutId;
    let characterIndex = 0;

    const schedule = (callback, delay) => {
      timeoutId = window.setTimeout(callback, delay);
    };

    const startTyping = () => {
      if (cancelled) return;

      intervalId = window.setInterval(() => {
        characterIndex += 1;
        setVisibleCharacters(characterIndex);

        if (characterIndex >= message.length) {
          window.clearInterval(intervalId);
          intervalId = undefined;

          schedule(() => {
            if (cancelled) return;
            setIsResetting(true);

            schedule(() => {
              if (cancelled) return;
              setVisibleCharacters(0);
              setMessageIndex((current) => (current + 1) % messages.length);
              setIsResetting(false);
            }, 240);
          }, 2200);
        }
      }, 40);
    };

    const initialDelay = hasStartedRef.current ? 180 : 600;
    hasStartedRef.current = true;

    schedule(() => {
      if (cancelled) return;
      setVisibleCharacters(0);
      setIsResetting(false);
      schedule(startTyping, initialDelay);
    }, 0);

    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [message, messages.length, reducedMotion]);

  useEffect(() => {
    if (!reducedMotion) return undefined;

    const intervalId = window.setInterval(() => {
      setMessageIndex((current) => (current + 1) % messages.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [messages.length, reducedMotion]);

  const visibleCount = reducedMotion ? message.length : visibleCharacters;

  return {
    typed: message.slice(0, visibleCount),
    complete: visibleCount >= message.length,
    reducedMotion,
    isResetting: reducedMotion ? false : isResetting,
  };
}

function SecuRobot() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 240"
      fill="none"
      className="home-hero__robot-svg"
    >
      <g className="home-hero__robot-float">
        <path
          d="M62 124 Q62 116 72 116 H128 Q138 116 138 124 L124 178 Q122 188 112 188 H88 Q78 188 76 178 Z"
          fill="var(--white)"
          stroke="var(--bot-line-strong)"
          strokeWidth="1.5"
        />
        <rect
          x="78"
          y="132"
          width="44"
          height="34"
          rx="8"
          fill="var(--soft-green)"
          fillOpacity="0.35"
          stroke="var(--bot-line-strong)"
        />
        <path
          d="M100 138 L90 142 V150 C90 156 95 160 100 162 C105 160 110 156 110 150 V142 Z"
          stroke="var(--emerald-light)"
          strokeWidth="2.2"
        />
        <circle cx="100" cy="200" r="11" fill="var(--text-muted)" />

        <path
          d="M30 32 Q26 14 44 12"
          stroke="var(--text-muted)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M170 32 Q174 14 156 12"
          stroke="var(--text-muted)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <rect
          x="14"
          y="54"
          width="18"
          height="34"
          rx="9"
          fill="var(--soft-green)"
          fillOpacity="0.35"
          stroke="var(--bot-line-strong)"
        />
        <rect
          x="168"
          y="54"
          width="18"
          height="34"
          rx="9"
          fill="var(--soft-green)"
          fillOpacity="0.35"
          stroke="var(--bot-line-strong)"
        />

        <path
          d="M34 30 Q34 20 46 20 H154 Q166 20 166 30 L158 92 Q156 104 144 104 H56 Q44 104 42 92 Z"
          fill="var(--white)"
          stroke="var(--bot-line-strong)"
          strokeWidth="1.5"
        />

        <path
          d="M52 36 H148 L142 90 H58 Z"
          fill="var(--charcoal)"
          stroke="var(--emerald-light)"
          strokeWidth="10"
          strokeLinejoin="round"
        />
        <path
          d="M52 36 H148 L142 90 H58 Z"
          fill="var(--charcoal)"
          stroke="var(--charcoal)"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        <rect
          className="home-hero__robot-eye"
          x="78"
          y="48"
          width="12"
          height="22"
          rx="2"
          fill="var(--emerald-light)"
        />
        <rect
          className="home-hero__robot-eye"
          x="110"
          y="48"
          width="12"
          height="22"
          rx="2"
          fill="var(--emerald-light)"
        />
        <path
          d="M90 80 Q100 86 110 80"
          stroke="var(--emerald-light)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <g className="home-hero__robot-arm home-hero__robot-arm--left">
          <rect
            x="42"
            y="120"
            width="13"
            height="52"
            rx="6.5"
            fill="var(--charcoal)"
          />
          <circle
            cx="48.5"
            cy="178"
            r="8"
            fill="var(--white)"
            stroke="var(--bot-line-strong)"
          />
        </g>
        <g className="home-hero__robot-arm home-hero__robot-arm--right">
          <rect
            x="145"
            y="120"
            width="13"
            height="52"
            rx="6.5"
            fill="var(--charcoal)"
          />
          <circle
            cx="151.5"
            cy="178"
            r="8"
            fill="var(--white)"
            stroke="var(--bot-line-strong)"
          />
        </g>
      </g>
    </svg>
  );
}

function ScanNetwork() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 620 520"
      fill="none"
      preserveAspectRatio="none"
      className="home-hero__network"
    >
      <g stroke="var(--bot-line)" strokeWidth="1" strokeDasharray="4 9">
        <path className="home-hero__network-path" d="M18 142c86-54 164-64 254-22s146 102 330 54" />
        <path className="home-hero__network-path home-hero__network-path--delay" d="M62 438c72-52 152-44 226-8s166 62 286 12" />
        <path className="home-hero__network-path" d="M574 118c-62 34-98 68-106 140s12 154 32 210" />
        <path className="home-hero__network-path home-hero__network-path--delay" d="M36 318c62 20 104 48 138 104" />
      </g>
      <g fill="var(--emerald-light)">
        <circle className="home-hero__network-node" cx="18" cy="142" r="3.2" />
        <circle className="home-hero__network-node home-hero__network-node--delay" cx="272" cy="120" r="3.2" />
        <circle className="home-hero__network-node" cx="574" cy="118" r="3.2" />
        <circle className="home-hero__network-node home-hero__network-node--delay" cx="62" cy="438" r="3.2" />
        <circle className="home-hero__network-node" cx="500" cy="442" r="3.2" />
        <circle className="home-hero__network-node home-hero__network-node--delay" cx="174" cy="422" r="3.2" />
      </g>
    </svg>
  );
}

function BrowserWireframe() {
  return (
    <div className="home-hero__browser">
      <div className="home-hero__browser-bar">
        <div className="home-hero__browser-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="home-hero__browser-url">https://example.com</span>
        <span className="home-hero__browser-status">
          <span className="home-hero__status-dot" aria-hidden="true" />
          Scanning
        </span>
      </div>

      <div className="home-hero__browser-body">
        <div className="home-hero__browser-hero">
          <span className="home-hero__skeleton home-hero__skeleton--title" />
          <span className="home-hero__skeleton home-hero__skeleton--text" />
          <span className="home-hero__skeleton home-hero__skeleton--text-short" />
        </div>

        <div className="home-hero__browser-grid">
          <div className="home-hero__browser-panel home-hero__browser-panel--wide">
            <span className="home-hero__skeleton home-hero__skeleton--panel-title" />
            <span className="home-hero__skeleton home-hero__skeleton--panel-line" />
            <span className="home-hero__skeleton home-hero__skeleton--panel-line-short" />
          </div>
          <div className="home-hero__browser-panel">
            <span className="home-hero__skeleton home-hero__skeleton--panel-title" />
            <span className="home-hero__skeleton home-hero__skeleton--panel-line" />
            <span className="home-hero__skeleton home-hero__skeleton--panel-line-short" />
          </div>
        </div>

        <div className="home-hero__browser-cards">
          <span className="home-hero__browser-card" />
          <span className="home-hero__browser-card" />
          <span className="home-hero__browser-card" />
        </div>

        <div className="home-hero__scan-beam" />
        <div className="home-hero__crosshair">
          <span className="home-hero__crosshair-ring" />
          <span className="home-hero__crosshair-dot" />
          <span className="home-hero__crosshair-line home-hero__crosshair-line--horizontal" />
          <span className="home-hero__crosshair-line home-hero__crosshair-line--vertical" />
        </div>

        <span className="home-hero__finding home-hero__finding--api">
          <span className="home-hero__finding-dot" aria-hidden="true" />
          api.example.com found
        </span>
        <span className="home-hero__finding home-hero__finding--header">
          <span className="home-hero__finding-dot" aria-hidden="true" />
          CSP header missing
        </span>
        <span className="home-hero__finding home-hero__finding--login">
          <span className="home-hero__finding-dot" aria-hidden="true" />
          Public login page
        </span>
      </div>
    </div>
  );
}

export default function HeroScanVisual() {
  const { typed, complete, reducedMotion, isResetting } =
    useTypedMessages(SPEECH_MESSAGES);

  return (
    <figure
      aria-labelledby="home-hero-visual-caption"
      className="home-hero__visual"
    >
      <figcaption id="home-hero-visual-caption" className="sr-only">
        An illustrative website wireframe is being scanned for exposed assets
        and security findings. The scan surfaces an exposed API subdomain, a
        missing CSP header, and a public login page. Secu, the Securelyze robot,
        rotates short security guidance in a speech bubble.
      </figcaption>

      <div aria-hidden="true" className="home-hero__stage">
        <div className="home-hero__stage-glow" />
        <ScanNetwork />
        <BrowserWireframe />

        <div className="home-hero__code">
          <span>
            <span className="home-hero__code-prompt">$</span> securelyze scan
            example.com
          </span>
          <span>
            <span className="home-hero__code-arrow">→</span> TLS 1.3 · HSTS
            enabled
          </span>
          <span>
            <span className="home-hero__code-arrow">→</span> 3 subdomains
            discovered
          </span>
        </div>

        <div className="home-hero__speech">
          <p
            className={`home-hero__speech-message${isResetting ? " home-hero__speech-message--resetting" : ""}`}
          >
            {typed}
            {!complete && !reducedMotion ? (
              <span className="home-hero__speech-caret" />
            ) : null}
          </p>
        </div>

        <div className="home-hero__robot">
          <SecuRobot />
        </div>
      </div>
    </figure>
  );
}
