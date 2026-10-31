const MARQUEE_ITEMS = [
  {
    label: "SSL/TLS Check",
    icon: "certificate",
  },
  {
    label: "DNS Analysis",
    icon: "dns",
  },
  {
    label: "Security Headers",
    icon: "headers",
  },
  {
    label: "HTTPS Check",
    icon: "https",
  },
  {
    label: "Subdomain Discovery",
    icon: "subdomains",
  },
  {
    label: "Asset Discovery",
    icon: "assets",
  },
];

// Two equal-width copies keep the loop seamless. The second copy is hidden
// from assistive tech and removed for reduced motion.
const MARQUEE_GROUPS = [0, 1];

function ToolIcon({ name, className = "" }) {
  if (name === "certificate") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="9.5" width="14" height="9.5" rx="2.25" />
        <path d="M8.25 9.5V8a3.75 3.75 0 0 1 7.5 0v1.5M12 13.1v2.2" />
      </svg>
    );
  }

  if (name === "dns") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="7.25" />
        <path d="M4.9 12h14.2M12 4.75c1.85 2 2.85 4.48 2.85 7.25s-1 5.25-2.85 7.25c-1.85-2-2.85-4.48-2.85-7.25s1-5.25 2.85-7.25Z" />
        <circle cx="17.4" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "headers") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 5.25h14M5 9.5h10.5M5 13.75h7M5 18h11.5" />
      </svg>
    );
  }

  if (name === "https") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.5 14.5 14.5 9.5M7.55 17.2 5.9 18.85a3.1 3.1 0 0 1-4.38-4.38l3.3-3.3a3.1 3.1 0 0 1 4.38 0" />
        <path d="m16.45 6.8 1.65-1.65a3.1 3.1 0 1 1 4.38 4.38l-3.3 3.3a3.1 3.1 0 0 1-4.38 0" />
      </svg>
    );
  }

  if (name === "subdomains") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="5.25" r="2.25" />
        <circle cx="5.5" cy="18.25" r="2.25" />
        <circle cx="18.5" cy="18.25" r="2.25" />
        <path d="M12 7.5v3.25M5.5 15.95v-2.7a2.5 2.5 0 0 1 2.5-2.5h8a2.5 2.5 0 0 1 2.5 2.5v2.7" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="5.2" />
      <path d="M12 3.5v3.3M20.5 12h-3.3M12 20.5v-3.3M3.5 12h3.3" />
      <circle cx="18" cy="7.6" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="6.25" cy="16.75" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MarqueeItem({ item }) {
  return (
    <li className="security-marquee-item flex shrink-0 items-center">
      <span className="flex items-center gap-2.5 whitespace-nowrap px-5 py-2.5 sm:px-7 sm:py-3">
        <ToolIcon
          name={item.icon}
          className="h-[18px] w-[18px] shrink-0 text-[#047857]"
        />
        <span className="text-[13px] font-semibold tracking-[-0.015em] text-[#183B32] sm:text-[14px]">
          {item.label}
        </span>
      </span>

      <span
        aria-hidden="true"
        className="h-4 w-px shrink-0 bg-[#183B32]/12"
      />
    </li>
  );
}

function MarqueeGroup({ isClone = false }) {
  return (
    <ul
      aria-hidden={isClone ? "true" : undefined}
      className={`security-marquee-group flex shrink-0 items-center ${
        isClone ? "security-marquee-clone" : ""
      }`}
    >
      {MARQUEE_ITEMS.map((item) => (
        <MarqueeItem key={item.label} item={item} />
      ))}
    </ul>
  );
}

export default function SecurityMarquee() {
  return (
    // Full-width white strip below the hero. The edge mask fades only the
    // scrolling items; the section background remains solid white.
    <section
      aria-labelledby="security-marquee-heading"
      className="relative overflow-hidden bg-white pt-8 font-sans sm:pt-10"
    >
      <style>{`
        .security-marquee-group {
          min-width: 50vw;
          justify-content: space-around;
        }

        .security-marquee-viewport {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0,
            black 2.5rem,
            black calc(100% - 2.5rem),
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0,
            black 2.5rem,
            black calc(100% - 2.5rem),
            transparent 100%
          );
        }

        .security-marquee-track {
          animation: security-marquee-scroll 44s linear infinite;
          will-change: transform;
        }

        @keyframes security-marquee-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (min-width: 640px) {
          .security-marquee-viewport {
            -webkit-mask-image: linear-gradient(
              to right,
              transparent 0,
              black 6rem,
              black calc(100% - 6rem),
              transparent 100%
            );
            mask-image: linear-gradient(
              to right,
              transparent 0,
              black 6rem,
              black calc(100% - 6rem),
              transparent 100%
            );
          }
        }

        @media (hover: hover) and (prefers-reduced-motion: no-preference) {
          .security-marquee-strip:hover .security-marquee-track {
            animation-play-state: paused;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .security-marquee-viewport {
            -webkit-mask-image: none;
            mask-image: none;
          }

          .security-marquee-track {
            width: 100%;
            animation: none;
            transform: none;
            will-change: auto;
          }

          .security-marquee-group {
            display: grid;
            width: 100%;
            min-width: 0;
            grid-template-columns: minmax(0, 1fr);
            justify-items: center;
            gap: 0.15rem 0;
            padding: 0.25rem 1rem;
          }

          .security-marquee-item {
            width: 100%;
            justify-content: center;
          }

          .security-marquee-item > span:first-child {
            padding-block: 0.45rem;
            padding-inline: 0.6rem;
          }

          .security-marquee-item > span[aria-hidden="true"] {
            display: none;
          }

          .security-marquee-clone {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) and (min-width: 480px) {
          .security-marquee-group {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (prefers-reduced-motion: reduce) and (min-width: 768px) {
          .security-marquee-group {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (prefers-reduced-motion: reduce) and (min-width: 1440px) {
          .security-marquee-group {
            grid-template-columns: repeat(6, minmax(0, 1fr));
          }
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-center justify-center gap-3 sm:mb-6">
          <span
            aria-hidden="true"
            className="h-px w-5 bg-gradient-to-r from-transparent to-[#047857]/45 sm:w-7"
          />
          <h3
            id="security-marquee-heading"
            className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#475569] sm:text-[10.5px]"
          >
            Planned security coverage
          </h3>
          <span
            aria-hidden="true"
            className="h-px w-5 bg-gradient-to-l from-transparent to-[#047857]/45 sm:w-7"
          />
        </div>

        <p className="sr-only">
          These labels describe planned security tool categories. This strip is a
          visual preview, and no live checks are running.
        </p>
      </div>

      <div className="security-marquee-strip relative overflow-hidden">
        <div className="security-marquee-viewport relative overflow-hidden pb-1 pt-0.5">
          <div className="security-marquee-track flex w-max items-center">
            {MARQUEE_GROUPS.map((group) => (
              <MarqueeGroup key={group} isClone={group > 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
