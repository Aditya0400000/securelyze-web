"use client";

import { useEffect, useState } from "react";
import Bot, { BotSpeech } from "./Bot";
import BotTasks from "./BotTasks";

const ACTIVE_HOLD_MS = 5200;
const GAP_MS = 120;
const ENTER_FALLBACK_MS = 900;
const EXIT_FALLBACK_MS = 700;
const PARTICLES = Array.from({ length: 10 });
const TELEMETRY =
  "TLS 1.3 · AES-256-GCM · HSTS · CSP · SPF · DKIM · DMARC · DNS · ASN 13335 · SURFACE VERIFIED · CONTINUOUS REVIEW ·";

const HERO_BOTS = [
  {
    id: "secu",
    name: "Secu",
    role: "Guide",
    task: "secu",
    message: "Hey, I’m Secu. I’ll guide you through your public security surface.",
    status: "Building your six-point security view…",
    result: "Signal ready",
  },
  {
    id: "certi",
    name: "Certi",
    role: "SSL / TLS",
    task: "certi",
    message: "Certi here. I inspect certificate trust, protocol versions, and TLS configuration.",
    status: "Reading the certificate chain…",
    result: "TLS profile ready",
  },
  {
    id: "dee",
    name: "Dee",
    role: "DNS",
    task: "dee",
    message: "Dee on DNS. I trace records and resolution paths across your domain.",
    status: "Following A, CNAME, TXT, and NS records…",
    result: "DNS resolved",
  },
  {
    id: "hedy",
    name: "Hedy",
    role: "Security Headers",
    task: "hedy",
    message: "Hedy here. I review the browser-facing headers that shape your security policy.",
    status: "Checking policy coverage and missing headers…",
    result: "Header review ready",
  },
  {
    id: "mailo",
    name: "Mailo",
    role: "Email Security",
    task: "mailo",
    message: "Mailo on email. I check SPF, DKIM, and DMARC alignment for your domain.",
    status: "Validating email authentication signals…",
    result: "Email aligned",
  },
  {
    id: "radi",
    name: "Radi",
    role: "Asset Discovery",
    task: "radi",
    message: "Radi here. I map domains, subdomains, hosts, ports, and services.",
    status: "Sweeping your public attack surface…",
    result: "Asset map ready",
  },
];

export default function HeroBotStage({ onBotChange }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState("entering");
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [documentHidden, setDocumentHidden] = useState(false);

  const paused = hovered || focused || documentHidden;
  const activeBot = HERO_BOTS[activeIndex];

  useEffect(() => {
    onBotChange?.(activeIndex);
  }, [activeIndex, onBotChange]);

  useEffect(() => {
    if (paused || phase !== "entering") return undefined;

    const timer = window.setTimeout(() => setPhase("active"), ENTER_FALLBACK_MS);
    return () => window.clearTimeout(timer);
  }, [paused, phase]);

  useEffect(() => {
    if (paused || phase !== "active") return undefined;

    const timer = window.setTimeout(() => setPhase("exiting"), ACTIVE_HOLD_MS);
    return () => window.clearTimeout(timer);
  }, [paused, phase]);

  useEffect(() => {
    if (paused || phase !== "exiting") return undefined;

    const timer = window.setTimeout(() => setPhase("gap"), EXIT_FALLBACK_MS);
    return () => window.clearTimeout(timer);
  }, [paused, phase]);

  useEffect(() => {
    if (paused || phase !== "gap") return undefined;

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % HERO_BOTS.length);
      setPhase("entering");
    }, GAP_MS);

    return () => window.clearTimeout(timer);
  }, [paused, phase]);

  useEffect(() => {
    const handleVisibilityChange = () => setDocumentHidden(document.hidden);

    handleVisibilityChange();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const handleBotAnimationEnd = (event) => {
    if (event.animationName === "hero-bot-enter") {
      setPhase("active");
    } else if (event.animationName === "hero-bot-exit") {
      setPhase("gap");
    }
  };

  const speechVisible = phase === "entering" || phase === "active";

  return (
    <div
      className="hero-bot-stage"
      data-paused={paused ? "true" : undefined}
      data-bot={activeBot.id}
      data-phase={phase}
      tabIndex={0}
      role="region"
      aria-label={`Animated AI security team. ${activeBot.name}, ${activeBot.role}.`}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setHovered(false);
      }}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div className="hero-bot-stage__grid" aria-hidden="true" />
      <div className="hero-bot-stage__glow" aria-hidden="true" />
      <div className="hero-bot-stage__orbit hero-bot-stage__orbit--outer" aria-hidden="true" />
      <div className="hero-bot-stage__orbit hero-bot-stage__orbit--inner" aria-hidden="true" />
      <div className="hero-bot-stage__crosshair" aria-hidden="true" />

      <div className="hero-bot-stage__circuit" aria-hidden="true">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
          <path className="hero-bot-stage__circuit-line" d="M4 18h18v14h20M96 22H78v18H56M8 82h16V64h22M92 78H74V58H54" />
          <path className="hero-bot-stage__circuit-line hero-bot-stage__circuit-line--accent" d="M4 52h14l8-8h10M96 48H82l-8 8H62M20 4v10l7 7M80 96V86l-7-7" />
        </svg>
        <span className="hero-bot-stage__circuit-node hero-bot-stage__circuit-node--one" />
        <span className="hero-bot-stage__circuit-node hero-bot-stage__circuit-node--two" />
        <span className="hero-bot-stage__circuit-node hero-bot-stage__circuit-node--three" />
        <span className="hero-bot-stage__circuit-node hero-bot-stage__circuit-node--four" />
      </div>

      <div className="hero-bot-stage__telemetry" aria-hidden="true">
        <div className="hero-bot-stage__telemetry-track">
          <span>{TELEMETRY}</span>
          <span>{TELEMETRY}</span>
        </div>
      </div>

      <div className="hero-bot-stage__packets" aria-hidden="true">
        <span className="hero-bot-stage__packet hero-bot-stage__packet--one" />
        <span className="hero-bot-stage__packet hero-bot-stage__packet--two" />
        <span className="hero-bot-stage__packet hero-bot-stage__packet--three" />
      </div>

      <div className="hero-bot-stage__atmosphere" aria-hidden="true">
        {PARTICLES.map((_, index) => (
          <span
            key={`particle-${index + 1}`}
            className={`hero-bot-stage__particle hero-bot-stage__particle--${index + 1}`}
          />
        ))}
        <span className="hero-bot-stage__scanline" />
      </div>

      <div key={`task-${activeIndex}`} className="hero-bot-stage__task">
        <BotTasks variant={activeBot.task} />
      </div>

      <div className="hero-bot-stage__slot">
        {phase !== "gap" ? (
          <div
            key={`bot-${activeIndex}`}
            className={`hero-bot-motion ${
              phase === "exiting" ? "hero-bot-motion--exit" : "hero-bot-motion--enter"
            }`}
            data-phase={phase}
            onAnimationEnd={handleBotAnimationEnd}
          >
            <span
              className={`hero-bot-trail ${
                phase === "exiting" ? "hero-bot-trail--exit" : "hero-bot-trail--enter"
              }`}
              aria-hidden="true"
            />
            <div className="hero-bot-float">
              <Bot
                name={activeBot.name}
                role={activeBot.role}
                result={activeBot.result}
                tone={activeBot.id}
                showResult={phase !== "exiting"}
              />
            </div>
          </div>
        ) : null}
      </div>

      {speechVisible ? (
        <div className={`hero-bot-stage__speech hero-bot--${activeBot.id}`}>
          <BotSpeech
            name={activeBot.name}
            role={activeBot.role}
            message={activeBot.message}
            status={activeBot.status}
            paused={paused}
          />
        </div>
      ) : null}

      <div className="hero-bot-stage__footer" aria-hidden="true">
        <span className="hero-bot-stage__team">
          <span className="hero-bot-stage__pulse" />
          AI SECURITY TEAM
        </span>

        <span className="hero-bot-stage__progress">
          {HERO_BOTS.map((bot, index) => (
            <span
              key={bot.id}
              className={`hero-bot-stage__dot ${index === activeIndex ? "is-active" : ""}`}
            />
          ))}
        </span>

        <span className="hero-bot-stage__counter">
          {String(activeIndex + 1).padStart(2, "0")} / {String(HERO_BOTS.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
