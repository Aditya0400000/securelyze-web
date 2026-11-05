const BOT_STROKE = "var(--text-muted)";
const BOT_STROKE_OPACITY = 0.38;

export default function AssetDiscoveryGlobeVisual() {
  return (
    <figure className="asset-globe-visual mx-auto w-full min-w-0 max-w-[32rem]">
      <style>{`
        .asset-globe-visual {
          --asset-globe-amber: #F59E0B;
        }

        .asset-globe-bot-float {
          animation: asset-globe-float 5s ease-in-out infinite;
        }

        .asset-globe-bot-shadow {
          animation: asset-globe-shadow 5s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        .asset-globe-bot-blink {
          animation: asset-globe-blink 4s infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        .asset-globe-bot-arm-left {
          animation: asset-globe-arm-left 3.2s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: 50% 6%;
        }

        .asset-globe-bot-arm-right {
          animation: asset-globe-arm-right 3.2s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: 50% 6%;
        }

        .asset-globe-meridian {
          animation: asset-globe-meridian 6s linear infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        .asset-globe-ping {
          animation: asset-globe-ping 2.6s ease-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        .asset-globe-dot-pulse {
          animation: asset-globe-dot-pulse 4s ease-in-out infinite;
        }

        .asset-globe-beam {
          animation: asset-globe-beam 2.4s ease-in-out infinite;
        }

        @keyframes asset-globe-float {
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes asset-globe-shadow {
          50% {
            transform: scale(0.8);
            opacity: 0.15;
          }
        }

        @keyframes asset-globe-blink {
          0%,
          92%,
          100% {
            transform: scaleY(1);
          }
          96% {
            transform: scaleY(0.1);
          }
        }

        @keyframes asset-globe-arm-left {
          50% {
            transform: rotate(-7deg);
          }
        }

        @keyframes asset-globe-arm-right {
          50% {
            transform: rotate(7deg);
          }
        }

        @keyframes asset-globe-meridian {
          0%,
          100% {
            transform: scaleX(1);
          }
          50% {
            transform: scaleX(0.06);
          }
        }

        @keyframes asset-globe-ping {
          0% {
            transform: scale(0.4);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }

        @keyframes asset-globe-dot-pulse {
          0%,
          100% {
            fill: var(--asset-globe-amber);
          }
          50% {
            fill: var(--emerald-light);
          }
        }

        @keyframes asset-globe-beam {
          50% {
            opacity: 0.35;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .asset-globe-bot-float,
          .asset-globe-bot-shadow,
          .asset-globe-bot-blink,
          .asset-globe-bot-arm-left,
          .asset-globe-bot-arm-right,
          .asset-globe-meridian,
          .asset-globe-ping,
          .asset-globe-dot-pulse,
          .asset-globe-beam {
            animation: none;
          }
        }
      `}</style>

      <svg
        viewBox="0 0 300 290"
        role="img"
        aria-labelledby="asset-globe-title asset-globe-description"
        className="h-auto w-full"
      >
        <title id="asset-globe-title">Rotating globe with a scanning bot</title>
        <desc id="asset-globe-description">
          A bot hovers above a rotating globe and scans for exposed assets that
          ping on the surface.
        </desc>

        <circle
          cx="150"
          cy="178"
          r="96"
          fill="var(--dark-green)"
          stroke="var(--emerald-light)"
          strokeOpacity="0.6"
        />

        <g
          fill="none"
          stroke="var(--emerald-light)"
          strokeOpacity="0.3"
        >
          <ellipse cx="150" cy="178" rx="96" ry="30" />
          <ellipse cx="150" cy="178" rx="96" ry="62" />
          <line x1="54" y1="178" x2="246" y2="178" />

          <ellipse
            className="asset-globe-meridian"
            cx="150"
            cy="178"
            rx="96"
            ry="96"
          />
          <ellipse
            className="asset-globe-meridian"
            cx="150"
            cy="178"
            rx="96"
            ry="96"
            style={{ animationDelay: "-2s" }}
          />
          <ellipse
            className="asset-globe-meridian"
            cx="150"
            cy="178"
            rx="96"
            ry="96"
            style={{ animationDelay: "-4s" }}
          />
        </g>

        <g>
          <circle cx="108" cy="150" r="4" fill="var(--emerald-light)" />
          <circle
            className="asset-globe-ping"
            cx="108"
            cy="150"
            r="5"
            fill="none"
            stroke="var(--emerald-light)"
          />

          <circle
            className="asset-globe-dot-pulse"
            cx="196"
            cy="168"
            r="5"
            fill="var(--asset-globe-amber)"
          />
          <circle
            className="asset-globe-ping"
            cx="196"
            cy="168"
            r="5"
            fill="none"
            stroke="var(--asset-globe-amber)"
            style={{ animationDelay: "0.6s" }}
          />

          <circle cx="128" cy="212" r="4" fill="var(--emerald-light)" />
          <circle
            className="asset-globe-ping"
            cx="128"
            cy="212"
            r="5"
            fill="none"
            stroke="var(--emerald-light)"
            style={{ animationDelay: "1.2s" }}
          />

          <circle cx="178" cy="222" r="4" fill="var(--emerald-light)" />
        </g>

        <path
          className="asset-globe-beam"
          d="M150 98 L186 162 L206 170 Z"
          fill="var(--emerald-light)"
          fillOpacity="0.28"
        />

        <g transform="translate(108,6) scale(0.42)">
          <g className="asset-globe-bot-float">
            <ellipse
              className="asset-globe-bot-shadow"
              cx="100"
              cy="230"
              rx="30"
              ry="5"
              fill="var(--charcoal)"
              opacity="0.3"
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

            <g>
              <rect
                className="asset-globe-bot-blink"
                x="78"
                y="48"
                width="12"
                height="22"
                rx="2"
                fill="var(--emerald-light)"
              />
              <rect
                className="asset-globe-bot-blink"
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

            <g className="asset-globe-bot-arm-left">
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

            <g className="asset-globe-bot-arm-right">
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
        </g>
      </svg>
    </figure>
  );
}
