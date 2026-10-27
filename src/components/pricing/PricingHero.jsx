import {
  ArrowDownIcon,
  ArrowRightIcon,
  CertificateIcon,
  CheckIcon,
  CodeIcon,
  LockIcon,
  MailIcon,
  NetworkIcon,
  RadarIcon,
  RecordIcon,
  ShieldIcon,
  SparkIcon,
} from "./PricingIcons";

const FEATURES = [
  {
    label: "SSL/TLS Certificate Analysis",
    icon: CertificateIcon,
    accent: "border-[#C6F36A]/20 bg-[#C6F36A]/[0.08] text-[#D8FA93]",
  },
  {
    label: "DNS Security and Record Analysis",
    icon: NetworkIcon,
    accent: "border-[#8FCCFF]/20 bg-[#8FCCFF]/[0.08] text-[#C4E7FF]",
  },
  {
    label: "HTTP Security Headers Checks",
    icon: CodeIcon,
    accent: "border-[#B9C3FF]/20 bg-[#B9C3FF]/[0.08] text-[#DCE2FF]",
  },
  {
    label: "HTTPS Configuration Checks",
    icon: LockIcon,
    accent: "border-[#8FCCFF]/20 bg-[#8FCCFF]/[0.08] text-[#C4E7FF]",
  },
  {
    label: "TLS Protocol Version Checks",
    icon: ShieldIcon,
    accent: "border-[#C6F36A]/20 bg-[#C6F36A]/[0.08] text-[#D8FA93]",
  },
  {
    label: "Email Security Checks (SPF, DKIM, DMARC)",
    icon: MailIcon,
    accent: "border-[#B9C3FF]/20 bg-[#B9C3FF]/[0.08] text-[#DCE2FF]",
  },
  {
    label: "CAA Records Verification",
    icon: RecordIcon,
    accent: "border-[#8DE0E8]/20 bg-[#8DE0E8]/[0.08] text-[#C7F8FB]",
  },
  {
    label: "Asset and Subdomain Discovery",
    icon: RadarIcon,
    accent: "border-[#B9C3FF]/20 bg-[#B9C3FF]/[0.08] text-[#DCE2FF]",
  },
];

function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="pricing-aurora absolute -left-48 top-[-20rem] h-[46rem] w-[46rem] rounded-full bg-[#5D4BC8]/20 blur-[130px]" />
      <div className="absolute right-[-14rem] top-[-8rem] h-[38rem] w-[38rem] rounded-full bg-[#227BA6]/[0.16] blur-[120px]" />
      <div className="absolute bottom-[-16rem] left-1/2 h-[34rem] w-[52rem] -translate-x-1/2 rounded-full bg-[#C6F36A]/[0.05] blur-[120px]" />

      <div className="absolute left-1/2 top-16 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-white/[0.045] sm:top-8 sm:h-[42rem] sm:w-[42rem]" />
      <div className="absolute left-1/2 top-28 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-dashed border-white/[0.045] sm:top-20 sm:h-[35rem] sm:w-[35rem]" />

      <svg
        viewBox="0 0 1440 760"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-0 hidden h-[48rem] w-full opacity-60 lg:block"
      >
        <defs>
          <linearGradient id="pricing-arc" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#8FCCFF" stopOpacity="0" />
            <stop offset="0.35" stopColor="#8FCCFF" stopOpacity="0.32" />
            <stop offset="0.68" stopColor="#B9C3FF" stopOpacity="0.24" />
            <stop offset="1" stopColor="#C6F36A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="pricing-arc-soft" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#C6F36A" stopOpacity="0" />
            <stop offset="0.45" stopColor="#C6F36A" stopOpacity="0.14" />
            <stop offset="1" stopColor="#8FCCFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M-80 250C190 70 405 342 698 208S1160 42 1520 260"
          fill="none"
          stroke="url(#pricing-arc)"
          strokeWidth="1"
        />
        <path
          d="M-60 510C235 318 430 600 750 430S1180 252 1520 500"
          fill="none"
          stroke="url(#pricing-arc-soft)"
          strokeWidth="1"
        />
        <circle cx="236" cy="198" r="3" fill="#8FCCFF" fillOpacity="0.6" />
        <circle cx="1120" cy="122" r="2.5" fill="#C6F36A" fillOpacity="0.55" />
        <circle cx="1246" cy="334" r="2" fill="#B9C3FF" fillOpacity="0.55" />
      </svg>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_50%_20%,black,transparent_74%)]" />
      <div className="absolute inset-x-0 top-0 h-64 bg-[linear-gradient(180deg,rgba(5,11,24,0.54),transparent)]" />
    </div>
  );
}

function PricePresentation() {
  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <span className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#C6F36A]/80">
        <SparkIcon className="h-3.5 w-3.5" />
        Pricing, kept simple
      </span>

      <div
        aria-hidden="true"
        className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-center sm:gap-5 lg:justify-start"
      >
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55">
            Illustrative value
          </span>
          <span className="mt-2 text-2xl font-semibold leading-none tracking-[-0.06em] text-white/40 line-through decoration-[#8FCCFF]/40 decoration-[1.5px] sm:text-3xl md:text-4xl">
            $49
          </span>
        </div>

        <span className="flex flex-col items-center text-[#C4E7FF] sm:flex-row">
          <span className="h-5 w-px bg-gradient-to-b from-transparent via-[#8FCCFF]/60 to-[#8FCCFF]/90 sm:h-px sm:w-8 sm:bg-gradient-to-r" />
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#8FCCFF]/35 bg-[#8FCCFF]/[0.08] shadow-[0_0_20px_rgba(143,204,255,0.18)]">
            <ArrowRightIcon className="hidden h-3.5 w-3.5 sm:block" />
            <ArrowDownIcon className="h-3.5 w-3.5 sm:hidden" />
          </span>
        </span>

        <div className="flex flex-col items-center sm:items-start">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C6F36A]/30 bg-[#C6F36A]/10 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.17em] text-[#D8FA93] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <span className="h-1 w-1 rounded-full bg-[#C6F36A]" />
            Forever free
          </span>
          <span className="mt-1 flex items-start">
            <span className="mt-2.5 text-lg font-semibold leading-none tracking-[-0.04em] text-[#C6F36A] sm:mt-3 sm:text-xl md:text-2xl lg:text-3xl">
              $
            </span>
            <span className="text-4xl font-semibold leading-[0.78] tracking-[-0.1em] text-white [text-shadow:0_0_40px_rgba(198,243,106,0.16)] sm:text-5xl md:text-6xl lg:text-7xl">
              0
            </span>
          </span>
        </div>
      </div>

      <p className="sr-only">
        Illustrative reference value: 49 dollars. Current price: 0 dollars,
        forever free.
      </p>

      <p className="mt-7 max-w-[23rem] text-balance text-[13.5px] font-medium leading-[1.65] text-white/65">
        All core Securelyze tools. No subscription required.
      </p>
      <p className="mt-4 max-w-[23rem] text-[10.5px] leading-[1.7] text-white/50">
        <span className="font-semibold text-white/70">
          Illustrative value only.
        </span>{" "}
        $49 is not a former, current, or discounted Securelyze price; it is
        shown only to frame the zero-cost comparison.
      </p>
    </div>
  );
}

function FeatureList() {
  return (
    <div id="included" className="scroll-mt-28">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8FCCFF]/70">
            Everything included
          </p>
          <h3 className="mt-2 text-[1.35rem] font-semibold leading-[1.2] tracking-[-0.035em] text-white sm:text-[1.5rem]">
            One plan. The full toolkit.
          </h3>
        </div>
        <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.14em] text-white/50 sm:inline-flex">
          <CheckIcon className="h-2.5 w-2.5 text-[#C6F36A]" />
          All core tools
        </span>
      </div>

      <p className="mt-2.5 max-w-[34rem] text-[12px] leading-[1.65] text-white/55">
        The listed tool areas are part of the free Securelyze offering.
      </p>

      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {FEATURES.map((feature) => {
          const Icon = feature.icon;

          return (
            <li
              key={feature.label}
              className="flex min-w-0 items-start gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            >
              <span
                className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border ${feature.accent}`}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className="min-w-0 flex-1 text-[11.5px] leading-[1.5] text-white/75">
                {feature.label}
              </span>
              <CheckIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-[#C6F36A]" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function PricingHero() {
  return (
    <section
      aria-labelledby="pricing-hero-heading"
      className="relative isolate overflow-hidden bg-[#050B18] font-sans selection:bg-[#C6F36A] selection:text-[#071D34]"
    >
      <style>{`
        .pricing-aurora {
          animation: pricing-aurora 24s ease-in-out infinite alternate;
          will-change: transform;
        }

        @keyframes pricing-aurora {
          from {
            transform: translate3d(-2%, -1%, 0) scale(1);
          }
          to {
            transform: translate3d(3%, 2%, 0) scale(1.07);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pricing-aurora {
            animation: none;
          }
        }
      `}</style>

      <HeroBackdrop />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="mx-auto max-w-[54rem] text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#C6F36A]/20 bg-[#C6F36A]/[0.06] px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D8FA93] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#C6F36A] shadow-[0_0_10px_rgba(198,243,106,0.6)]"
            />
            Simple. Transparent. Free.
          </p>

          <h1
            id="pricing-hero-heading"
            className="mt-6 text-balance text-[2.25rem] font-semibold leading-[0.99] tracking-[-0.06em] text-white min-[390px]:text-[2.75rem] sm:text-[3.9rem] lg:text-[4.65rem]"
          >
            <span className="md:whitespace-nowrap">
              <span className="whitespace-nowrap">Enterprise-Grade</span>{" "}
              Security.
            </span>{" "}
            <span className="block bg-[linear-gradient(100deg,#E9FFC0_0%,#C6F36A_52%,#A9DF4A_100%)] bg-clip-text text-transparent">
              Zero Cost.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-[39rem] text-pretty text-[15px] leading-[1.72] text-white/60 sm:text-[16.5px]">
            Discover, analyze, and understand your website security with
            powerful tools that won&rsquo;t cost you a thing.
          </p>
        </div>

        <div
          id="free-plan"
          className="relative mx-auto mt-12 max-w-6xl scroll-mt-28 sm:mt-14"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-8 -bottom-10 top-4 rounded-[3rem] bg-[radial-gradient(ellipse_at_50%_50%,rgba(103,89,226,0.2),transparent_68%)] blur-2xl"
          />

          <div className="relative rounded-[2rem] bg-[linear-gradient(135deg,rgba(198,243,106,0.58),rgba(143,204,255,0.18)_30%,rgba(185,195,255,0.46)_68%,rgba(198,243,106,0.28))] p-px shadow-[0_50px_140px_-58px_rgba(70,67,190,0.9),0_30px_70px_-48px_rgba(0,0,0,0.9)]">
            <div className="relative overflow-hidden rounded-[31px] bg-[linear-gradient(145deg,#09142A_0%,#0A1028_44%,#130F34_100%)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
              >
                <div className="absolute -left-24 top-8 h-80 w-80 rounded-full bg-[#7567E8]/[0.13] blur-[90px]" />
                <div className="absolute -right-16 top-[-4rem] h-80 w-80 rounded-full bg-[#2D84B8]/[0.12] blur-[100px]" />
                <div className="absolute bottom-[-12rem] left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-[#C6F36A]/[0.045] blur-[100px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.024)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.024)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_50%_30%,black,transparent_80%)]" />
              </div>

              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
              />

              <h2 className="sr-only">Securelyze free plan</h2>

              <div className="relative flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.07] px-5 py-3.5 sm:px-7">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/[0.045] text-[#C6F36A]">
                    <ShieldIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/65">
                    Securelyze
                  </span>
                  <span className="h-3 w-px bg-white/15" />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/50">
                    Free plan
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#D8FA93]/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C6F36A]" />
                  One plan
                </span>
              </div>

              <div className="relative grid lg:grid-cols-[0.88fr_1.12fr]">
                <div className="relative flex flex-col px-5 py-8 sm:px-8 lg:justify-center lg:px-10 lg:py-10">
                  <PricePresentation />
                </div>

                <div className="relative border-t border-white/[0.07] px-5 py-8 sm:px-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-10">
                  <FeatureList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C6F36A]/30 to-transparent"
      />
    </section>
  );
}
