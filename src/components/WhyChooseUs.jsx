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
      <circle cx="8.95" cy="8.05" r="1.1" fill="#6F9E13" stroke="none" />
    </IconBase>
  );
}

function FastIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="M13.15 2.8 5.85 13.1h4.9l-.9 8.1 7.25-10.2h-4.95l1-8.2Z" />
      <path d="M4.4 18.1h2.3" stroke="#6F9E13" />
    </IconBase>
  );
}

function PrivateIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="M12 3.15 5.55 5.6v5.18c0 4.1 2.75 7.72 6.45 8.78 3.7-1.06 6.45-4.68 6.45-8.78V5.6L12 3.15Z" />
      <circle cx="12" cy="10.9" r="1.65" stroke="#6F9E13" />
      <path d="M12 12.55v2.05" stroke="#6F9E13" />
    </IconBase>
  );
}

function ReportsIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="M6.4 3.8h7.05L18 8.35v11.85H6.4V3.8Z" />
      <path d="M13.3 3.95v4.5h4.55" opacity="0.55" />
      <path d="M9.2 11.9h5.6M9.2 14.65h3.5" opacity="0.45" />
      <path d="m9.2 17.45 1.35 1.35 2.55-2.7" stroke="#6F9E13" />
    </IconBase>
  );
}

function UpdatedIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="M19.7 8.4A8 8 0 1 0 20 12" />
      <path d="M19.7 4.15V8.4h-4.25" stroke="#6F9E13" />
    </IconBase>
  );
}

function ToolsIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <rect x="4.25" y="4.25" width="6.1" height="6.1" rx="1.2" />
      <rect x="13.65" y="4.25" width="6.1" height="6.1" rx="1.2" />
      <rect x="4.25" y="13.65" width="6.1" height="6.1" rx="1.2" />
      <rect x="13.65" y="13.65" width="6.1" height="6.1" rx="1.2" stroke="#6F9E13" />
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

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-securelyze"
      aria-labelledby="why-choose-us-heading"
      className="relative scroll-mt-24 bg-[linear-gradient(180deg,#FCFDFE_0%,#F1F5F9_50%,#F4F8FB_64%,#F8FAFC_79%,#FCFDFE_92%,#FFFFFF_100%)] py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-[42rem]">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2E526F]">
            <span aria-hidden="true" className="h-px w-8 bg-[#6F9E13]/50" />
            Why Securelyze
          </p>

          <h2
            id="why-choose-us-heading"
            className="mt-4 text-balance text-[2rem] font-bold leading-[1.06] tracking-[-0.045em] text-[#172554] sm:text-[2.25rem] lg:text-[2.75rem]"
          >
            Security That Starts With Clarity
          </h2>

          <p className="mt-5 max-w-[38rem] text-pretty text-[15px] leading-[1.75] text-[#475569] sm:mt-6 sm:text-base">
            Understand your website&apos;s security posture with clear insights,
            practical checks, and a simpler approach to security.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group relative flex h-full min-h-[13rem] min-w-0 flex-col border border-[#D5E0E9] bg-white/90 p-5 transition-[translate,box-shadow] duration-200 ease-out hover:z-10 hover:shadow-[8px_8px_0_0_#050505] motion-safe:hover:-translate-y-1 motion-reduce:transition-none sm:p-6 lg:p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#D6E1EA] bg-white/85 text-[#0B2B45]">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px w-5 bg-[#6F9E13]/45"
                  />
                </div>

                <h3 className="mt-5 text-pretty font-sans text-[17px] font-semibold leading-[1.3] tracking-[-0.025em] text-[#172554] sm:text-[18px]">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-pretty font-sans text-[14.5px] leading-[1.7] text-[#475569]">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
