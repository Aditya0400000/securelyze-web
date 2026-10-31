import Link from "next/link";

import {
  CertificateIcon,
  CodeIcon,
  CompassIcon,
  DeveloperIcon,
  GlobeIcon,
  NetworkIcon,
  RadarIcon,
  ShieldIcon,
  UserIcon,
} from "../about/AboutIcons";
import { LayersIcon } from "../pricing/PricingIcons";
import SolutionsCta from "./SolutionsCta";

const AUDIENCE_LINKS = [
  {
    label: "Website Owners",
    href: "#website-owners",
    icon: UserIcon,
  },
  {
    label: "Small Businesses",
    href: "#small-businesses",
    icon: CompassIcon,
  },
  {
    label: "Developers",
    href: "#developers",
    icon: DeveloperIcon,
  },
  {
    label: "Security Teams",
    href: "#security-teams",
    icon: ShieldIcon,
  },
];

const CAPABILITIES = [
  {
    label: "Website checks",
    detail: "SSL/TLS, DNS, HTTPS, and headers",
    icon: ShieldIcon,
    tone: "border-[#10B981]/20 bg-[#10B981]/[0.07] text-[#D1FAE5]",
  },
  {
    label: "Asset discovery",
    detail: "Domains, subdomains, and services",
    icon: RadarIcon,
    tone: "border-[#10B981]/20 bg-[#10B981]/[0.07] text-[#D1FAE5]",
  },
  {
    label: "Developer context",
    detail: "Technical configuration details",
    icon: CodeIcon,
    tone: "border-[#10B981]/20 bg-[#10B981]/[0.07] text-[#D1FAE5]",
  },
  {
    label: "Team clarity",
    detail: "One shared security view",
    icon: LayersIcon,
    tone: "border-[#10B981]/20 bg-[#10B981]/[0.07] text-[#D1FAE5]",
  },
];

const ORBIT_ICONS = [
  {
    icon: CertificateIcon,
    position: "left-[5%] top-[14%]",
    tone: "border-[#10B981]/20 bg-[#183B32]/90 text-[#D1FAE5]",
  },
  {
    icon: GlobeIcon,
    position: "right-[5%] top-[14%]",
    tone: "border-[#10B981]/20 bg-[#183B32]/90 text-[#D1FAE5]",
  },
  {
    icon: NetworkIcon,
    position: "left-[5%] bottom-[14%]",
    tone: "border-[#10B981]/20 bg-[#183B32]/90 text-[#D1FAE5]",
  },
  {
    icon: CodeIcon,
    position: "right-[5%] bottom-[14%]",
    tone: "border-[#10B981]/20 bg-[#183B32]/90 text-[#D1FAE5]",
  },
];

function HeroVisual() {
  return (
    <figure
      aria-labelledby="solutions-hero-visual-caption"
      className="relative mx-auto w-full max-w-[34rem]"
    >
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
            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Securelyze / Solutions
            </span>
          </div>

          <div className="relative p-3.5 sm:p-5">
            <div className="relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 pb-4 pt-5 sm:px-5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(16,185,129,0.09),transparent_44%)]"
              />

              <div className="relative mx-auto flex h-52 w-full items-center justify-center sm:h-60">
                <div
                  aria-hidden="true"
                  className="solutions-hero-orbit absolute h-44 w-44 rounded-full border border-dashed border-white/10 sm:h-52 sm:w-52"
                />
                <div
                  aria-hidden="true"
                  className="absolute h-28 w-28 rounded-full border border-[#10B981]/15 sm:h-32 sm:w-32"
                />
                <div
                  aria-hidden="true"
                  className="absolute h-16 w-16 rounded-full bg-[#10B981]/10 blur-xl"
                />

                <span className="solutions-hero-pulse relative flex h-20 w-20 items-center justify-center rounded-[1.4rem] border border-[#10B981]/25 bg-[#183B32] text-[#10B981] shadow-[0_20px_50px_-24px_rgba(16,185,129,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] sm:h-24 sm:w-24">
                  <ShieldIcon className="h-9 w-9 sm:h-10 sm:w-10" />
                </span>

                {ORBIT_ICONS.map(({ icon: Icon, position, tone }) => (
                  <span
                    key={position}
                    aria-hidden="true"
                    className={`absolute ${position} flex h-9 w-9 items-center justify-center rounded-xl border ${tone} shadow-[0_14px_30px_-18px_rgba(0,0,0,0.8)] backdrop-blur-sm`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                ))}
              </div>

              <div className="relative mt-3 grid grid-cols-2 gap-2">
                {CAPABILITIES.map((capability) => {
                  const Icon = capability.icon;

                  return (
                    <div
                      key={capability.label}
                      className="group rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 transition duration-300 motion-safe:hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.055]"
                    >
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-lg border ${capability.tone}`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <p className="mt-2 text-[10px] font-semibold leading-[1.3] text-white">
                        {capability.label}
                      </p>
                      <p className="mt-1 text-[8.5px] leading-[1.5] text-white/45">
                        {capability.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 rounded-[1.05rem] border border-white/[0.08] bg-white/[0.03] px-3.5 py-3 text-[8.5px] font-medium uppercase tracking-[0.14em] text-white/45">
              <span className="inline-flex items-center gap-1.5">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-[#10B981]"
                />
                One connected experience
              </span>
              <span>For every team</span>
            </div>
          </div>

          <div className="relative flex flex-wrap items-center justify-between gap-2 border-t border-white/10 px-4 py-2.5 text-[8.5px] font-medium uppercase tracking-[0.14em] text-white/40 sm:px-5">
            <span>Website checks</span>
            <span>Asset discovery &middot; Developer context</span>
          </div>
        </div>
      </div>

      <figcaption
        id="solutions-hero-visual-caption"
        className="sr-only"
      >
        Abstract illustration connecting website checks, asset discovery,
        developer context, and team clarity around a central security shield.
      </figcaption>
    </figure>
  );
}

export default function SolutionsHero() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-hero-heading"
      className="relative isolate scroll-mt-24 overflow-hidden border-b border-[#E2E8F0] bg-[linear-gradient(180deg,#F7FAFC_0%,#FBFDFF_58%,#FFFFFF_100%)] font-sans selection:bg-[#10B981] selection:text-[#101A18]"
    >
      <style>{`
        .solutions-hero-orbit {
          animation: solutions-hero-orbit 52s linear infinite;
        }

        .solutions-hero-pulse::before,
        .solutions-hero-pulse::after {
          position: absolute;
          inset: -7px;
          content: "";
          border: 1px solid rgba(198, 243, 106, 0.22);
          border-radius: 28px;
          animation: solutions-hero-pulse 5.2s ease-out infinite;
          pointer-events: none;
        }

        .solutions-hero-pulse::after {
          animation-delay: 2.6s;
        }

        @keyframes solutions-hero-orbit {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes solutions-hero-pulse {
          0% {
            opacity: 0.6;
            transform: scale(0.88);
          }
          72%,
          100% {
            opacity: 0;
            transform: scale(1.24);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .solutions-hero-orbit,
          .solutions-hero-pulse::before,
          .solutions-hero-pulse::after {
            animation: none;
          }
        }
      `}</style>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[#D1FAE5]/65 blur-3xl" />
        <div className="absolute right-[-8rem] top-[-4rem] h-[26rem] w-[26rem] rounded-full bg-[#10B981]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,26,24,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,26,24,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_34%_0%,black,transparent_72%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-12 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#183B32]/10 bg-white/80 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#475569] shadow-[0_8px_24px_-18px_rgba(16,26,24,0.35)] backdrop-blur-sm">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#059669]"
            />
            Solutions
          </p>

          <h1
            id="solutions-hero-heading"
            className="mt-6 max-w-[43rem] text-balance text-[2.65rem] font-semibold leading-[1.01] tracking-[-0.055em] text-[#101A18] sm:text-[3.4rem] lg:text-[3.75rem]"
          >
            Security Solutions for{" "}
            <span className="relative inline-block">
              Every Team
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[linear-gradient(90deg,#C6F36A_0%,#8ED13C_60%,#6F9E13_100%)] sm:-bottom-1.5"
              />
            </span>
          </h1>

          <p className="mt-7 max-w-[38rem] text-pretty text-[15.5px] leading-[1.72] text-[#475569] sm:text-[16.5px]">
            A connected view of website security for the people who build, run,
            and protect the web. From everyday checks to a clearer view of your
            external footprint.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <SolutionsCta
              href="/platform#website-security-check"
              className="w-full sm:w-auto"
            >
              Check Your Website
            </SolutionsCta>
            <SolutionsCta
              href="/platform"
              tone="secondary"
              className="w-full sm:w-auto"
            >
              Explore the Platform
            </SolutionsCta>
          </div>

          <div className="mt-8 border-t border-[#E2E8F0] pt-5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">
              Explore solutions for
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap lg:grid lg:grid-cols-2">
              {AUDIENCE_LINKS.map((audience) => {
                const Icon = audience.icon;

                return (
                  <Link
                    key={audience.label}
                    href={audience.href}
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#E2E8F0] bg-white/70 px-3 py-2 text-[10.5px] font-semibold text-[#183B32] shadow-[0_10px_24px_-22px_rgba(16,26,24,0.35)] transition duration-200 hover:border-[#10B981] hover:bg-[#ECFDF5] hover:text-[#183B32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#101A18] focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-safe:hover:-translate-y-0.5 sm:justify-start"
                  >
                    <Icon className="h-3.5 w-3.5 text-[#059669]" />
                    {audience.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
