import Link from "next/link";

import {
  ArrowRightIcon,
  CertificateIcon,
  CodeIcon,
  GlobeIcon,
  NetworkIcon,
  RadarIcon,
} from "./AboutIcons";

const SIGNAL_LABELS = [
  "SSL / TLS",
  "DNS",
  "Security headers",
  "Public assets",
];

const HERO_SIGNALS = [
  {
    label: "SSL / TLS",
    detail: "Certificate context",
    icon: CertificateIcon,
    accent: "border-[#10B981]/20 bg-[#10B981]/10 text-[#D1FAE5]",
  },
  {
    label: "DNS",
    detail: "Routing records",
    icon: NetworkIcon,
    accent: "border-[#10B981]/20 bg-[#10B981]/10 text-[#D1FAE5]",
  },
  {
    label: "Headers",
    detail: "Browser policy",
    icon: CodeIcon,
    accent: "border-[#10B981]/20 bg-[#10B981]/10 text-[#D1FAE5]",
  },
];

const ASSET_CHIPS = ["www.example.com", "api.example.com", "cdn.example.com"];

function HeroVisual() {
  return (
    <figure className="relative mx-auto w-full max-w-[34rem] lg:max-w-[36rem]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle_at_55%_45%,rgba(16,185,129,0.18),transparent_68%)] blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[2rem] border border-[#183B32]/20 bg-[#101A18] p-1.5 shadow-[0_45px_110px_-48px_rgba(16,26,24,0.8),inset_0_1px_0_rgba(255,255,255,0.12)]">
        <div className="relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#183B32]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_6%,rgba(16,185,129,0.16),transparent_38%),radial-gradient(circle_at_12%_100%,rgba(16,185,129,0.08),transparent_36%)]"
          />

          <div className="relative flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]/80" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]/45" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            </div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55">
              Illustrative view
            </span>
          </div>

          <div className="relative p-3.5 sm:p-5">
            <div className="relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/[0.035] p-4">
              <span
                aria-hidden="true"
                className="about-hero-scan pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#10B981]/80 to-transparent shadow-[0_0_18px_rgba(16,185,129,0.55)]"
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="about-hero-pulse relative flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-[#10B981]/25 bg-[#183B32] text-[#10B981]">
                    <GlobeIcon className="h-[21px] w-[21px]" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/50">
                      Public entry point
                    </p>
                    <p className="mt-1 truncate text-[15px] font-semibold tracking-[-0.02em] text-white">
                      example.com
                    </p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-white/50">
                  Site
                </span>
              </div>

              <div className="mt-4 flex items-end gap-[3px]" aria-hidden="true">
                {[18, 30, 24, 40, 32, 50, 36, 58, 44, 66, 52, 74, 60, 82, 68, 92, 76, 64, 84, 54, 70, 44, 58, 36].map(
                  (height, index) => (
                    <span
                      key={`${height}-${index}`}
                      className="block flex-1 rounded-full bg-[#10B981]/25"
                      style={{ height: `${height / 4}px` }}
                    />
                  ),
                )}
              </div>

              <div className="mt-2.5 flex items-center justify-between gap-3 text-[9px]">
                <span className="font-medium text-white/55">Connection context</span>
                <span className="inline-flex items-center gap-1.5 font-semibold uppercase tracking-[0.13em] text-[#10B981]/80">
                  <span className="h-1 w-1 rounded-full bg-[#10B981]" />
                  HTTPS
                </span>
              </div>
            </div>

            <div className="mt-2.5 space-y-1.5">
              {HERO_SIGNALS.map((signal) => {
                const Icon = signal.icon;

                return (
                  <div
                    key={signal.label}
                    className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-2.5"
                  >
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border ${signal.accent}`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span className="truncate text-[11px] font-medium text-white/80">
                        {signal.label}
                      </span>
                    </div>
                    <span className="shrink-0 text-[9px] font-medium uppercase tracking-[0.12em] text-white/55">
                      {signal.detail}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-2.5 rounded-[1.05rem] border border-white/[0.08] bg-white/[0.03] p-3.5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md border border-[#10B981]/20 bg-[#10B981]/10 text-[#D1FAE5]">
                    <RadarIcon className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">
                    Related public assets
                  </p>
                </div>
                <span className="text-[8.5px] font-medium uppercase tracking-[0.13em] text-white/45">
                  Illustrative
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {ASSET_CHIPS.map((asset) => (
                  <span
                    key={asset}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#183B32]/80 px-2.5 py-1 font-mono text-[9.5px] text-white/60"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#10B981]/75" />
                    {asset}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex flex-wrap items-center justify-between gap-2 border-t border-white/10 px-4 py-2.5 text-[9px] font-medium uppercase tracking-[0.14em] text-white/45 sm:px-5">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full border border-white/30" />
              Public layer
            </span>
            <span>Signal preview</span>
          </div>
        </div>
      </div>

      <figcaption className="mt-4 px-3 text-center text-[11px] leading-[1.6] text-[#64748B]">
        Illustrative view. Public signals and discovered assets depend on the
        website and its configuration.
      </figcaption>
    </figure>
  );
}

export default function AboutHero() {
  return (
    <section
      id="about"
      aria-labelledby="about-hero-heading"
      className="relative isolate scroll-mt-24 overflow-hidden border-b border-[#E2E8F0] bg-[linear-gradient(180deg,#F7FAFC_0%,#FBFDFF_58%,#FFFFFF_100%)] font-sans selection:bg-[#10B981] selection:text-[#101A18]"
    >
      <style>{`
        .about-hero-scan {
          animation: about-hero-scan 7.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .about-hero-pulse::before,
        .about-hero-pulse::after {
          position: absolute;
          inset: -5px;
          content: "";
          border: 1px solid rgba(198, 243, 106, 0.24);
          border-radius: 18px;
          animation: about-hero-pulse 4.8s ease-out infinite;
          pointer-events: none;
        }

        .about-hero-pulse::after {
          animation-delay: 2.4s;
        }

        @keyframes about-hero-scan {
          0% {
            opacity: 0;
            transform: translateY(-2px);
          }
          12% {
            opacity: 1;
          }
          78% {
            opacity: 0.45;
          }
          100% {
            opacity: 0;
            transform: translateY(480px);
          }
        }

        @keyframes about-hero-pulse {
          0% {
            opacity: 0.62;
            transform: scale(0.84);
          }
          70%,
          100% {
            opacity: 0;
            transform: scale(1.3);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-hero-scan,
          .about-hero-pulse::before,
          .about-hero-pulse::after {
            animation: none;
          }
        }
      `}</style>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[#D1FAE5]/65 blur-3xl" />
        <div className="absolute right-[-8rem] top-[-4rem] h-[26rem] w-[26rem] rounded-full bg-[#10B981]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,26,24,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,26,24,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_34%_0%,black,transparent_72%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-12 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#183B32]/10 bg-white/80 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#475569] shadow-[0_8px_24px_-18px_rgba(16,26,24,0.35)] backdrop-blur-sm">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#059669]"
            />
            The platform
          </p>

          <h1
            id="about-hero-heading"
            className="mt-6 max-w-[43rem] text-balance text-[2.65rem] font-semibold leading-[1.01] tracking-[-0.055em] text-[#101A18] sm:text-[3.4rem] lg:text-[3.75rem]"
          >
            About{" "}
            <span className="relative inline-block">
              Securelyze
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[linear-gradient(90deg,#C6F36A_0%,#8ED13C_60%,#6F9E13_100%)] sm:-bottom-1.5"
              />
            </span>
          </h1>

          <p className="mt-7 max-w-[38rem] text-pretty text-[15.5px] leading-[1.72] text-[#475569] sm:text-[16.5px]">
            Securelyze is a free web security analysis and asset discovery
            platform. We give website owners, developers, and security
            professionals a connected view of the public signals that shape a
            website&rsquo;s security picture.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/platform#website-security-check"
              className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-[#10B981] px-5 text-[13.5px] font-semibold tracking-[-0.005em] text-[#101A18] shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_14px_30px_-18px_rgba(5,150,105,0.9)] transition-[transform,background-color,box-shadow] duration-200 ease-out hover:bg-[#059669] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_18px_36px_-18px_rgba(5,150,105,0.95)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#101A18] focus-visible:ring-offset-2 motion-safe:hover:-translate-y-px motion-reduce:transition-none"
            >
              Explore the Security Checker
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </Link>

            <a
              href="#ecosystem"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#183B32]/15 bg-white/70 px-5 text-[13.5px] font-semibold tracking-[-0.005em] text-[#183B32] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-sm transition-colors duration-200 hover:border-[#183B32]/25 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#101A18] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              See how it connects
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2.5 border-t border-[#E2E8F0] pt-5">
            {SIGNAL_LABELS.map((label) => (
              <li
                key={label}
                className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#475569]"
              >
                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-[#059669]/70"
                />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
