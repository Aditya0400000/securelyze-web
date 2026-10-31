function IconBase({ className = "", children }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function FreeIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="M4.75 5.45c0-.4.32-.72.72-.72h6.4l7.4 7.42a2.05 2.05 0 0 1 0 2.9l-4.48 4.48a2.05 2.05 0 0 1-2.9 0l-7.4-7.4V5.45Z" />
      <circle cx="8.95" cy="8.05" r="1.1" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

function FastIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="M13.15 2.8 5.85 13.1h4.9l-.9 8.1 7.25-10.2h-4.95l1-8.2Z" />
      <path d="M4.4 18.1h2.3" stroke="currentColor" />
    </IconBase>
  );
}

function PrivateIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="M12 3.15 5.55 5.6v5.18c0 4.1 2.75 7.72 6.45 8.78 3.7-1.06 6.45-4.68 6.45-8.78V5.6L12 3.15Z" />
      <circle cx="12" cy="10.9" r="1.65" stroke="currentColor" />
      <path d="M12 12.55v2.05" stroke="currentColor" />
    </IconBase>
  );
}

function ReportsIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="M6.4 3.8h7.05L18 8.35v11.85H6.4V3.8Z" />
      <path d="M13.3 3.95v4.5h4.55" opacity="0.55" />
      <path d="M9.2 11.9h5.6M9.2 14.65h3.5" opacity="0.45" />
      <path d="m9.2 17.45 1.35 1.35 2.55-2.7" stroke="currentColor" />
    </IconBase>
  );
}

function UpdatedIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="M19.7 8.4A8 8 0 1 0 20 12" />
      <path d="M19.7 4.15V8.4h-4.25" stroke="currentColor" />
    </IconBase>
  );
}

function ToolsIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <rect x="4.25" y="4.25" width="6.1" height="6.1" rx="1.2" />
      <rect x="13.65" y="4.25" width="6.1" height="6.1" rx="1.2" />
      <rect x="4.25" y="13.65" width="6.1" height="6.1" rx="1.2" />
      <rect
        x="13.65"
        y="13.65"
        width="6.1"
        height="6.1"
        rx="1.2"
        stroke="currentColor"
      />
    </IconBase>
  );
}

// Content verification flags: keep this approved copy for now, but confirm
// these claims before launch. Do not implement fake behavior to support them.
// - Lightning Fast: "Get instant results with our optimized scanning engine."
// - Secure & Private: "Your data is never stored. Full privacy guaranteed."
// - Always Updated: "Latest security checks and industry standards included."
const FEATURES = [
  {
    title: "100% Free",
    description: "No credit card required. Access all features without any cost.",
    icon: FreeIcon,
  },
  {
    title: "Lightning Fast",
    description: "Get instant results with our optimized scanning engine.",
    icon: FastIcon,
  },
  {
    title: "Secure & Private",
    description: "Your data is never stored. Full privacy guaranteed.",
    icon: PrivateIcon,
  },
  {
    title: "Detailed Reports",
    description: "Comprehensive analysis with actionable recommendations.",
    icon: ReportsIcon,
  },
  {
    title: "Always Updated",
    description: "Latest security checks and industry standards included.",
    icon: UpdatedIcon,
  },
  {
    title: "Multiple Tools",
    description: "Everything you need for web security in one platform.",
    icon: ToolsIcon,
  },
];

const MARQUEE_COLUMNS = [
  [FEATURES[0], FEATURES[2], FEATURES[4]],
  [FEATURES[1], FEATURES[3], FEATURES[5]],
];

function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <article className="group relative flex min-h-[9rem] min-w-0 flex-col rounded-2xl border border-border bg-white p-3.5 shadow-card transition-[border-color,box-shadow,transform] duration-200 ease-out hover:border-emerald-hover/40 hover:shadow-card-hover motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none sm:min-h-[10rem] sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-soft-green text-emerald transition-colors duration-200 group-hover:bg-emerald group-hover:text-charcoal sm:h-9 sm:w-9">
          <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
        </span>
        <span
          aria-hidden="true"
          className="h-px w-4 bg-emerald/50 sm:w-5"
        />
      </div>

      <h3 className="mt-3.5 break-words text-pretty text-[14px] font-semibold leading-[1.3] tracking-[-0.02em] text-charcoal sm:mt-4 sm:text-base">
        {feature.title}
      </h3>
      <p className="mt-2 break-words text-pretty text-[12.5px] leading-[1.65] text-text-secondary sm:text-[13.5px]">
        {feature.description}
      </p>
    </article>
  );
}

function MarqueeColumn({ features, direction }) {
  const trackClass =
    direction === "up" ? "why-marquee-track-up" : "why-marquee-track-down";

  return (
    <div
      className="why-marquee-column min-w-0 rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald/50 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
      role="group"
      aria-label={`Why Securelyze benefits, ${
        direction === "up" ? "first" : "second"
      } column`}
      tabIndex={0}
    >
      <div className="why-marquee-viewport relative h-[24rem] overflow-hidden sm:h-[28rem] lg:h-[30rem]">
        <div className={`why-marquee-track ${trackClass} flex flex-col`}>
          {[0, 1].map((group) => (
            <div
              key={group}
              className={`why-marquee-group flex flex-col gap-2.5 pb-2.5 sm:gap-4 sm:pb-4 ${
                group === 1 ? "why-marquee-clone" : ""
              }`}
              aria-hidden={group === 1 ? "true" : undefined}
            >
              {features.map((feature) => (
                <FeatureCard
                  key={`${group}-${feature.title}`}
                  feature={feature}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-securelyze"
      aria-labelledby="why-choose-us-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-charcoal py-16 font-sans text-white sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-charcoal via-dark-green/80 to-charcoal"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-3xl bg-emerald/10 blur-3xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-3xl bg-emerald/10 blur-3xl sm:h-[28rem] sm:w-[28rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-soft-green/5 blur-3xl"
      />

      <style>{`
        .why-marquee-viewport {
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            var(--charcoal) 12%,
            var(--charcoal) 88%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            var(--charcoal) 12%,
            var(--charcoal) 88%,
            transparent 100%
          );
          mask-mode: alpha;
        }

        .why-marquee-track {
          will-change: transform;
        }

        .why-marquee-track-up {
          animation: why-marquee-up 34s linear infinite;
        }

        .why-marquee-track-down {
          animation: why-marquee-down 40s linear infinite;
        }

        @keyframes why-marquee-up {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(0, -50%, 0);
          }
        }

        @keyframes why-marquee-down {
          from {
            transform: translate3d(0, -50%, 0);
          }
          to {
            transform: translate3d(0, 0, 0);
          }
        }

        @media (hover: hover) and (prefers-reduced-motion: no-preference) {
          .why-marquee-column:hover .why-marquee-track {
            animation-play-state: paused;
          }
        }

        @media (prefers-reduced-motion: no-preference) {
          .why-marquee-column:focus-visible .why-marquee-track {
            animation-play-state: paused;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .why-marquee-viewport {
            -webkit-mask-image: none;
            mask-image: none;
            height: auto;
            overflow: visible;
          }

          .why-marquee-track {
            animation: none;
            transform: none;
            will-change: auto;
          }

          .why-marquee-group {
            padding-bottom: 0;
          }

          .why-marquee-clone {
            display: none;
          }
        }
      `}</style>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-14 xl:gap-20">
          <div className="min-w-0 lg:col-span-5">
            <div className="max-w-[36rem] text-left lg:max-w-[30rem]">
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-soft-green/80">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-emerald/60"
                />
                Why Securelyze
              </p>

              <h2
                id="why-choose-us-heading"
                className="mt-4 max-w-[34rem] text-balance text-[2rem] font-bold leading-[1.06] tracking-[-0.045em] text-white sm:text-[2.5rem] xl:text-[2.75rem]"
              >
                Security That Starts With{" "}
                <span className="text-emerald">Clarity</span>
              </h2>

              <p className="mt-5 max-w-[34rem] text-pretty text-[15px] leading-[1.75] text-soft-green/70 sm:mt-6 sm:text-base lg:max-w-[28rem]">
                Understand your website&apos;s security posture with clear
                insights, practical checks, and a simpler approach to security.
              </p>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:gap-5">
                <MarqueeColumn
                  features={MARQUEE_COLUMNS[0]}
                  direction="up"
                />
                <MarqueeColumn
                  features={MARQUEE_COLUMNS[1]}
                  direction="down"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
