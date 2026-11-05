"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "Hi, I am Secu.",
  "I scan your site and explain every result.",
  "Stay secure!",
];

const TYPE_INTERVAL = 38;
const SECOND_MESSAGE_DELAY = 4300;
const THIRD_MESSAGE_DELAY = 9200;
const CYCLE_INTERVAL = 12000;

const BOT_STROKE = "var(--text-muted)";
const BOT_STROKE_OPACITY = 0.38;

export default function AboutBotVisual() {
  const [message, setMessage] = useState("");
  const [reducedMotion, setReducedMotion] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion !== false) return undefined;

    let typingTimer;
    let cycleTimer;
    let startTimer;
    let messageTimers = [];

    const typeMessage = (text) => {
      window.clearInterval(typingTimer);
      setMessage("");

      let characterIndex = 0;
      typingTimer = window.setInterval(() => {
        characterIndex += 1;
        setMessage(text.slice(0, characterIndex));

        if (characterIndex >= text.length) {
          window.clearInterval(typingTimer);
          typingTimer = undefined;
        }
      }, TYPE_INTERVAL);
    };

    const startCycle = () => {
      messageTimers.forEach((timer) => window.clearTimeout(timer));
      messageTimers = [];

      typeMessage(MESSAGES[0]);
      messageTimers.push(
        window.setTimeout(
          () => typeMessage(MESSAGES[1]),
          SECOND_MESSAGE_DELAY,
        ),
        window.setTimeout(
          () => typeMessage(MESSAGES[2]),
          THIRD_MESSAGE_DELAY,
        ),
      );
    };

    startTimer = window.setTimeout(startCycle, 0);
    cycleTimer = window.setInterval(startCycle, CYCLE_INTERVAL);

    return () => {
      window.clearTimeout(startTimer);
      window.clearInterval(typingTimer);
      window.clearInterval(cycleTimer);
      messageTimers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [reducedMotion]);

  const displayedMessage = reducedMotion ? MESSAGES[0] : message;

  return (
    <figure className="relative mx-auto flex w-full max-w-[28rem] items-start justify-center gap-1">
      <style>{`
        .about-bot-float {
          animation: about-bot-float 5s ease-in-out infinite;
        }

        .about-bot-shadow {
          animation: about-bot-shadow 5s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        .about-bot-blink {
          animation: about-bot-blink 4s infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        .about-bot-arm-left {
          animation: about-bot-arm-left 12s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: 50% 6%;
        }

        .about-bot-arm-right {
          animation: about-bot-arm-right 12s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: 50% 6%;
        }

        .about-bot-face-normal {
          animation: about-bot-face-normal 12s infinite;
        }

        .about-bot-face-happy {
          opacity: 0;
          animation: about-bot-face-happy 12s infinite;
        }

        .about-bot-cursor {
          display: inline-block;
          width: 7px;
          height: 14px;
          margin-left: 2px;
          vertical-align: -2px;
          background: var(--emerald-light);
          animation: about-bot-cursor-blink 1s steps(2) infinite;
        }

        @keyframes about-bot-float {
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes about-bot-shadow {
          50% {
            transform: scale(0.8);
            opacity: 0.15;
          }
        }

        @keyframes about-bot-blink {
          0%,
          92%,
          100% {
            transform: scaleY(1);
          }
          96% {
            transform: scaleY(0.1);
          }
        }

        @keyframes about-bot-arm-left {
          50% {
            transform: rotate(4deg);
          }
        }

        @keyframes about-bot-arm-right {
          0%,
          30% {
            transform: rotate(0);
          }
          38% {
            transform: rotate(-150deg);
          }
          44% {
            transform: rotate(-168deg);
          }
          50% {
            transform: rotate(-140deg);
          }
          56% {
            transform: rotate(-168deg);
          }
          62% {
            transform: rotate(-146deg);
          }
          72% {
            transform: rotate(-150deg);
          }
          80%,
          100% {
            transform: rotate(0);
          }
        }

        @keyframes about-bot-face-normal {
          0%,
          30% {
            opacity: 1;
          }
          34%,
          78% {
            opacity: 0;
          }
          82%,
          100% {
            opacity: 1;
          }
        }

        @keyframes about-bot-face-happy {
          0%,
          30% {
            opacity: 0;
          }
          34%,
          78% {
            opacity: 1;
          }
          82%,
          100% {
            opacity: 0;
          }
        }

        @keyframes about-bot-cursor-blink {
          50% {
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-bot-float,
          .about-bot-shadow,
          .about-bot-blink,
          .about-bot-arm-left,
          .about-bot-arm-right,
          .about-bot-face-normal,
          .about-bot-face-happy,
          .about-bot-cursor {
            animation: none;
          }
        }
      `}</style>

      <div className="relative mt-3 w-[47%] shrink-0">
        <div className="flex min-h-[76px] items-start rounded-[18px] bg-charcoal px-3.5 py-3 font-mono text-[12px] leading-[1.5] text-soft-green sm:text-[13px]">
          <span className="block min-w-0">
            {displayedMessage}
            {reducedMotion === false ? (
              <span aria-hidden="true" className="about-bot-cursor" />
            ) : null}
          </span>
        </div>
        <span
          aria-hidden="true"
          className="absolute -right-[10px] top-[28px] h-0 w-0 border-y-[8px] border-y-transparent border-l-[10px] border-l-charcoal"
        />
      </div>

      <div className="w-[51%] shrink-0">
        <svg
          viewBox="0 0 200 240"
          role="img"
          aria-labelledby="about-bot-title"
          className="h-auto w-full overflow-visible"
        >
          <title id="about-bot-title">White AI robot</title>

          <g className="about-bot-float">
            <ellipse
              className="about-bot-shadow"
              cx="100"
              cy="230"
              rx="30"
              ry="5"
              fill="var(--charcoal)"
              opacity="0.22"
            />

            <path
              d="M62 124 Q62 116 72 116 H128 Q138 116 138 124 L124 178 Q122 188 112 188 H88 Q78 188 76 178 Z"
              fill="var(--white)"
              stroke={BOT_STROKE}
              strokeOpacity={BOT_STROKE_OPACITY}
              strokeWidth="1.5"
            />
            <rect
              x="78"
              y="132"
              width="44"
              height="34"
              rx="8"
              fill="var(--border)"
              stroke={BOT_STROKE}
              strokeOpacity={BOT_STROKE_OPACITY}
            />
            <path
              d="M100 138 L90 142 V150 C90 156 95 160 100 162 C105 160 110 156 110 150 V142 Z"
              fill="none"
              stroke="var(--emerald)"
              strokeWidth="1.6"
            />
            <circle cx="100" cy="200" r="11" fill={BOT_STROKE} opacity="0.62" />

            <path
              d="M30 32 Q26 14 44 12"
              fill="none"
              stroke={BOT_STROKE}
              strokeOpacity="0.62"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M170 32 Q174 14 156 12"
              fill="none"
              stroke={BOT_STROKE}
              strokeOpacity="0.62"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <rect
              x="14"
              y="54"
              width="18"
              height="34"
              rx="9"
              fill="var(--border)"
              stroke={BOT_STROKE}
              strokeOpacity={BOT_STROKE_OPACITY}
            />
            <rect
              x="168"
              y="54"
              width="18"
              height="34"
              rx="9"
              fill="var(--border)"
              stroke={BOT_STROKE}
              strokeOpacity={BOT_STROKE_OPACITY}
            />

            <path
              d="M34 30 Q34 20 46 20 H154 Q166 20 166 30 L158 92 Q156 104 144 104 H56 Q44 104 42 92 Z"
              fill="var(--white)"
              stroke={BOT_STROKE}
              strokeOpacity={BOT_STROKE_OPACITY}
              strokeWidth="1.5"
            />
            <path
              d="M52 36 H148 L142 90 H58 Z"
              fill="var(--charcoal)"
              stroke="var(--charcoal)"
              strokeWidth="10"
              strokeLinejoin="round"
            />

            <g className="about-bot-face-normal">
              <rect
                className="about-bot-blink"
                x="78"
                y="48"
                width="12"
                height="22"
                rx="2"
                fill="var(--emerald-light)"
              />
              <rect
                className="about-bot-blink"
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
                fill="none"
                strokeLinecap="round"
              />
            </g>

            <g className="about-bot-face-happy">
              <path
                d="M74 62 Q83 46 92 62"
                fill="none"
                stroke="var(--emerald-light)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M108 62 Q117 46 126 62"
                fill="none"
                stroke="var(--emerald-light)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M82 70 Q100 94 118 70 Z"
                fill="var(--emerald-light)"
              />
            </g>

            <g className="about-bot-arm-left">
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
                stroke={BOT_STROKE}
                strokeOpacity={BOT_STROKE_OPACITY}
              />
            </g>

            <g className="about-bot-arm-right">
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
                stroke={BOT_STROKE}
                strokeOpacity={BOT_STROKE_OPACITY}
              />
            </g>
          </g>
        </svg>
      </div>
    </figure>
  );
}
