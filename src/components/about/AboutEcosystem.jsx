import {
  AssetsIcon,
  CertificateIcon,
  CodeIcon,
  GlobeIcon,
  NetworkIcon,
  RadarIcon,
  ShieldIcon,
  WebsiteIcon,
} from "./AboutIcons";

const CHECKS = [
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
    label: "HTTP headers",
    detail: "Browser policy",
    icon: CodeIcon,
    accent: "border-[#10B981]/20 bg-[#10B981]/10 text-[#D1FAE5]",
  },
];

const ASSET_NODES = [
  { label: "www", position: "left-[9%] top-[17%]" },
  { label: "api", position: "right-[8%] top-[14%]" },
  { label: "cdn", position: "bottom-[17%] left-[9%]" },
  { label: "mail", position: "bottom-[14%] right-[8%]" },
];

function HorizontalConnector() {
  return (
    <div
      aria-hidden="true"
      className="hidden items-center justify-center lg:flex"
    >
      <span className="relative block h-px w-full bg-[linear-gradient(90deg,rgba(16,185,129,0.16),rgba(16,185,129,0.55),rgba(16,185,129,0.12))]">
        <span className="about-eco-travel-dot absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#10B981] shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
        <span className="absolute right-0 top-1/2 h-1 w-1 -translate-y-1/2 rotate-45 border-r border-t border-[#10B981]/50" />
      </span>
    </div>
  );
}

function VerticalConnector() {
  return (
    <div
      aria-hidden="true"
      className="flex h-7 items-center justify-center lg:hidden"
    >
      <span className="relative block h-full w-px bg-[linear-gradient(180deg,rgba(16,185,129,0.16),rgba(16,185,129,0.5),rgba(16,185,129,0.12))]">
        <span className="about-eco-travel-dot-vertical absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#10B981] shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
      </span>
    </div>
  );
}

function WebsiteCard() {
  return (
    <article className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#10B981]/75">
          01 / Start
        </p>
        <span className="flex h-8 w-8 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.04] text-[#D1FAE5]">
          <WebsiteIcon className="h-4 w-4" />
        </span>
      </div>

      <h3 className="mt-6 text-[15px] font-semibold tracking-[-0.02em] text-white">
        Your website
      </h3>
      <p className="mt-2 text-[12px] leading-[1.65] text-white/60">
        The public domain people visit and the configuration in front of it.
      </p>

      <div className="mt-auto pt-4">
        <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#101A18]">
          <div className="flex items-center gap-1.5 border-b border-white/[0.08] px-3 py-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]/75" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]/35" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            <span className="ml-1 truncate font-mono text-[9px] text-white/40">
              example.com
            </span>
          </div>

          <div className="relative h-[5.6rem] overflow-hidden p-3">
            <span
              aria-hidden="true"
              className="about-eco-scan pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#10B981]/65 to-transparent"
            />
            <div className="flex items-center gap-2.5 rounded-lg border border-white/[0.07] bg-white/[0.025] p-2.5">
              <span className="about-eco-pulse relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#10B981]/20 bg-[#10B981]/10 text-[#10B981]">
                <GlobeIcon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <span className="block h-1.5 w-4/5 rounded-full bg-white/20" />
                <span className="mt-1.5 block h-1 w-1/2 rounded-full bg-white/10" />
              </div>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-1.5" aria-hidden="true">
              <span className="h-6 rounded-md border border-white/[0.06] bg-white/[0.02]" />
              <span className="h-6 rounded-md border border-white/[0.06] bg-white/[0.02]" />
              <span className="h-6 rounded-md border border-white/[0.06] bg-white/[0.02]" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function ChecksCard() {
  return (
    <article className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#10B981]/15 bg-[#183B32]/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#10B981]/75">
          02 / Review
        </p>
        <span className="flex h-8 w-8 items-center justify-center rounded-[10px] border border-[#10B981]/15 bg-[#10B981]/10 text-[#D1FAE5]">
          <ShieldIcon className="h-4 w-4" />
        </span>
      </div>

      <h3 className="mt-6 text-[15px] font-semibold tracking-[-0.02em] text-white">
        Security checks
      </h3>
      <p className="mt-2 text-[12px] leading-[1.65] text-white/60">
        Public configuration signals that add context to the website.
      </p>

      <ul className="mt-4 space-y-1.5">
        {CHECKS.map((check) => {
          const Icon = check.icon;

          return (
            <li
              key={check.label}
              className="flex items-center justify-between gap-2 rounded-xl border border-white/[0.08] bg-white/[0.035] px-3 py-2.5"
            >
              <div className="flex min-w-0 items-center gap-2.5">
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border ${check.accent}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[11px] font-medium text-white/85">
                    {check.label}
                  </p>
                  <p className="mt-0.5 truncate text-[9px] text-white/50">
                    {check.detail}
                  </p>
                </div>
              </div>
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#10B981]/70 shadow-[0_0_9px_rgba(16,185,129,0.6)]"
              />
            </li>
          );
        })}
      </ul>

      <p className="mt-auto flex items-center gap-1.5 pt-4 text-[9px] font-medium uppercase tracking-[0.13em] text-white/50">
        <span className="h-1 w-1 rounded-full bg-[#10B981]/70" />
        Context, not a verdict
      </p>
    </article>
  );
}

function AssetsCard() {
  return (
    <article className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#10B981]/75">
          03 / Discover
        </p>
        <span className="flex h-8 w-8 items-center justify-center rounded-[10px] border border-[#10B981]/15 bg-[#10B981]/10 text-[#D1FAE5]">
          <RadarIcon className="h-4 w-4" />
        </span>
      </div>

      <h3 className="mt-6 text-[15px] font-semibold tracking-[-0.02em] text-white">
        Discovered assets
      </h3>
      <p className="mt-2 text-[12px] leading-[1.65] text-white/60">
        Related public-facing domains, subdomains, and endpoints.
      </p>

      <div className="relative mt-auto h-[9.2rem] overflow-hidden rounded-xl border border-white/[0.08] bg-[#101A18]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08),transparent_62%)]"
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 260 148"
          fill="none"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <path
            d="M130 74 45 36M130 74 215 35M130 74 45 112M130 74 215 113"
            stroke="rgba(16,185,129,0.25)"
            strokeWidth="1"
            strokeDasharray="3 4"
            className="about-eco-dash"
          />
          <circle cx="130" cy="74" r="21" stroke="rgba(16,185,129,0.16)" strokeWidth="1" />
          <circle cx="130" cy="74" r="31" stroke="rgba(16,185,129,0.1)" strokeWidth="1" strokeDasharray="2 5" />
        </svg>

        <span className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full border border-[#10B981]/20 bg-[#183B32] px-2.5 py-1 font-mono text-[9px] text-[#D1FAE5] shadow-[0_0_18px_rgba(16,185,129,0.12)]">
          <span className="h-1 w-1 rounded-full bg-[#10B981]" />
          example.com
        </span>

        {ASSET_NODES.map((node) => (
          <span
            key={node.label}
            className={`about-eco-node absolute ${node.position} inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#183B32]/90 px-2 py-1 font-mono text-[8.5px] text-white/60`}
          >
            <span className="h-1 w-1 rounded-full bg-[#10B981]/75" />
            {node.label}
          </span>
        ))}

        <div className="absolute inset-x-3 bottom-2.5 flex items-center justify-between gap-2 text-[8px] font-medium uppercase tracking-[0.13em] text-white/45">
          <span>Domains</span>
          <span>Subdomains</span>
          <span>Endpoints</span>
        </div>
      </div>
    </article>
  );
}

export default function AboutEcosystem() {
  return (
    <section
      id="ecosystem"
      aria-labelledby="ecosystem-heading"
      className="relative scroll-mt-24 overflow-hidden bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_50%_0%,rgba(209,250,229,0.45),transparent_68%)]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#059669]">
              <span aria-hidden="true" className="h-px w-8 bg-[#059669]/45" />
              How it fits together
            </p>
            <h2
              id="ecosystem-heading"
              className="mt-4 max-w-[42rem] text-balance text-[1.9rem] font-bold leading-[1.08] tracking-[-0.045em] text-[#101A18] sm:text-[2.35rem] lg:text-[2.7rem]"
            >
              From one website to a wider external picture.
            </h2>
          </div>

          <p className="max-w-[34rem] text-pretty text-[14.5px] leading-[1.7] text-[#475569] sm:text-[15px] lg:col-span-5 lg:justify-self-end">
            Securelyze connects the public view of a site with the configuration
            signals around it and the assets that may sit beyond the home page.
            Together, they make the external picture easier to understand.
          </p>
        </div>

        <style>{`
          .about-eco-travel-dot {
            left: 0;
            animation: about-eco-travel 3.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }

          .about-eco-travel-dot-vertical {
            top: 0;
            animation: about-eco-travel-vertical 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }

          .about-eco-scan {
            animation: about-eco-scan 6.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }

          .about-eco-pulse::before {
            position: absolute;
            inset: -4px;
            content: "";
            border: 1px solid rgba(198, 243, 106, 0.22);
            border-radius: 12px;
            animation: about-eco-pulse 4.5s ease-out infinite;
            pointer-events: none;
          }

          .about-eco-dash {
            animation: about-eco-dash 22s linear infinite;
          }

          .about-eco-node {
            animation: about-eco-node 4.8s ease-in-out infinite;
          }

          .about-eco-node:nth-of-type(2) {
            animation-delay: -1.2s;
          }

          .about-eco-node:nth-of-type(3) {
            animation-delay: -2.4s;
          }

          .about-eco-node:nth-of-type(4) {
            animation-delay: -3.6s;
          }

          @keyframes about-eco-travel {
            0% {
              left: 0;
              opacity: 0;
            }
            12%,
            82% {
              opacity: 1;
            }
            100% {
              left: calc(100% - 6px);
              opacity: 0;
            }
          }

          @keyframes about-eco-travel-vertical {
            0% {
              top: 0;
              opacity: 0;
            }
            12%,
            82% {
              opacity: 1;
            }
            100% {
              top: calc(100% - 6px);
              opacity: 0;
            }
          }

          @keyframes about-eco-scan {
            0% {
              opacity: 0;
              transform: translateY(-2px);
            }
            14% {
              opacity: 1;
            }
            78% {
              opacity: 0.35;
            }
            100% {
              opacity: 0;
              transform: translateY(108px);
            }
          }

          @keyframes about-eco-pulse {
            0% {
              opacity: 0.55;
              transform: scale(0.86);
            }
            75%,
            100% {
              opacity: 0;
              transform: scale(1.28);
            }
          }

          @keyframes about-eco-dash {
            to {
              stroke-dashoffset: -84;
            }
          }

          @keyframes about-eco-node {
            0%,
            100% {
              opacity: 0.65;
            }
            50% {
              opacity: 1;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .about-eco-travel-dot,
            .about-eco-travel-dot-vertical,
            .about-eco-scan,
            .about-eco-pulse::before,
            .about-eco-dash,
            .about-eco-node {
              animation: none;
            }
          }
        `}</style>

        <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-[#183B32]/20 bg-[#101A18] shadow-[0_35px_90px_-50px_rgba(16,26,24,0.85),inset_0_1px_0_rgba(255,255,255,0.08)] sm:mt-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-[-8rem] h-72 w-72 rounded-full bg-[#047857]/20 blur-[90px]" />
            <div className="absolute -right-16 bottom-[-8rem] h-72 w-72 rounded-full bg-[#10B981]/[0.06] blur-[90px]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_50%_45%,black,transparent_75%)]" />
          </div>

          <div className="relative p-4 sm:p-6 lg:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <p className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-[#10B981]/80 shadow-[0_0_9px_rgba(16,185,129,0.6)]"
                />
                Connected external view
              </p>
              <span className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[8.5px] font-medium uppercase tracking-[0.14em] text-white/50">
                Illustrative view
              </span>
            </div>

            <div className="mt-5 grid gap-0 lg:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1.15fr)_4rem_minmax(0,1fr)] lg:items-stretch lg:gap-2 xl:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1.15fr)_5rem_minmax(0,1fr)]">
              <WebsiteCard />
              <VerticalConnector />
              <HorizontalConnector />
              <ChecksCard />
              <VerticalConnector />
              <HorizontalConnector />
              <AssetsCard />
            </div>

            <div className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-4 text-[10px] leading-[1.6] text-white/50 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-center gap-2">
                <AssetsIcon className="h-3.5 w-3.5 shrink-0 text-[#10B981]/60" />
                Public entry point, configuration context, and related assets.
              </p>
              <p>Actual results depend on the domain and its configuration.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
