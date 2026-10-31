import Link from "next/link";

import { ArrowRightIcon, RadarIcon } from "../about/AboutIcons";

const ASSET_DISCOVERY_ROUTE = "/platform/asset-discovery";

const DISCOVERY_CAPABILITIES = [
  {
    title: "Subdomain Discovery",
    description: "Find publicly discoverable subdomains tied to a domain.",
    href: "/platform/asset-discovery/subdomain-discovery",
  },
  {
    title: "Domain Discovery",
    description: "Review domains and related DNS context.",
    href: "/platform/asset-discovery/domain-discovery",
  },
  {
    title: "IP & Host Discovery",
    description: "Map internet-facing hosts and IP context.",
    href: "/platform/asset-discovery/ip-host-discovery",
  },
  {
    title: "Port & Service Discovery",
    description: "Review exposed services and port context.",
    href: "/platform/asset-discovery/port-service-discovery",
  },
];

const DISCOVERY_SCOPE = ["Subdomains", "Domains", "Hosts", "Services"];

function AssetFootprintPreview() {
  return (
    <figure
      aria-labelledby="asset-footprint-caption"
      className="mx-auto w-full min-w-0 max-w-[44rem]"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-dark-green/80 p-4 shadow-[var(--shadow-card-dark)] transition-colors duration-300 hover:border-emerald/25 sm:p-5 lg:p-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-emerald/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-emerald/5 blur-3xl"
        />

        <div className="relative flex items-center justify-between gap-3 border-b border-white/10 pb-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/10 text-soft-green">
              <RadarIcon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/60">
                Public footprint view
              </p>
              <p className="mt-0.5 truncate text-[11px] font-medium text-white/80">
                Sample asset map
              </p>
            </div>
          </div>

          <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-white/65">
            Illustrative
          </span>
        </div>

        <svg
          aria-hidden="true"
          viewBox="0 0 440 280"
          fill="none"
          className="relative mt-2 h-auto w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle
            cx="220"
            cy="140"
            r="112"
            stroke="var(--white)"
            strokeOpacity="0.055"
          />
          <circle
            cx="220"
            cy="140"
            r="76"
            stroke="var(--white)"
            strokeOpacity="0.05"
            strokeDasharray="4 7"
          />
          <circle
            cx="220"
            cy="140"
            r="42"
            fill="var(--emerald)"
            fillOpacity="0.045"
            stroke="var(--emerald)"
            strokeOpacity="0.16"
          />

          <path
            d="M220 140 80 70M220 140 360 70M220 140 72 220M220 140 368 220M220 140 220 30M220 140 220 250"
            stroke="var(--emerald)"
            strokeOpacity="0.22"
          />
          <path
            d="M80 70 42 42M360 70 398 42M72 220 36 248M368 220 404 248"
            stroke="var(--emerald)"
            strokeOpacity="0.12"
          />

          <circle cx="150" cy="105" r="2.5" fill="var(--emerald)" fillOpacity="0.6" />
          <circle cx="290" cy="105" r="2.5" fill="var(--emerald)" fillOpacity="0.55" />
          <circle cx="146" cy="180" r="2.2" fill="var(--emerald)" fillOpacity="0.45" />
          <circle cx="294" cy="180" r="2.2" fill="var(--emerald)" fillOpacity="0.45" />
          <circle cx="220" cy="30" r="3" fill="var(--emerald)" fillOpacity="0.7" />
          <circle cx="220" cy="250" r="3" fill="var(--emerald)" fillOpacity="0.5" />
          <circle cx="42" cy="42" r="2" fill="var(--emerald)" fillOpacity="0.4" />
          <circle cx="398" cy="42" r="2" fill="var(--emerald)" fillOpacity="0.4" />
          <circle cx="36" cy="248" r="2" fill="var(--emerald)" fillOpacity="0.35" />
          <circle cx="404" cy="248" r="2" fill="var(--emerald)" fillOpacity="0.35" />

          <rect
            x="165"
            y="124"
            width="110"
            height="32"
            rx="9"
            fill="var(--emerald)"
          />
          <text
            x="220"
            y="145"
            textAnchor="middle"
            fill="var(--charcoal)"
            fontSize="13"
            fontWeight="600"
          >
            example.com
          </text>

          <rect
            x="39"
            y="57"
            width="82"
            height="26"
            rx="7"
            fill="var(--dark-green)"
            stroke="var(--white)"
            strokeOpacity="0.1"
          />
          <text
            x="80"
            y="74"
            textAnchor="middle"
            fill="var(--white)"
            fillOpacity="0.75"
            fontSize="12"
            fontWeight="500"
          >
            www
          </text>

          <rect
            x="319"
            y="57"
            width="82"
            height="26"
            rx="7"
            fill="var(--dark-green)"
            stroke="var(--white)"
            strokeOpacity="0.1"
          />
          <text
            x="360"
            y="74"
            textAnchor="middle"
            fill="var(--white)"
            fillOpacity="0.75"
            fontSize="12"
            fontWeight="500"
          >
            api
          </text>

          <rect
            x="31"
            y="207"
            width="82"
            height="26"
            rx="7"
            fill="var(--dark-green)"
            stroke="var(--white)"
            strokeOpacity="0.1"
          />
          <text
            x="72"
            y="224"
            textAnchor="middle"
            fill="var(--white)"
            fillOpacity="0.75"
            fontSize="12"
            fontWeight="500"
          >
            cdn
          </text>

          <rect
            x="327"
            y="207"
            width="82"
            height="26"
            rx="7"
            fill="var(--dark-green)"
            stroke="var(--white)"
            strokeOpacity="0.1"
          />
          <text
            x="368"
            y="224"
            textAnchor="middle"
            fill="var(--white)"
            fillOpacity="0.75"
            fontSize="12"
            fontWeight="500"
          >
            mail
          </text>
        </svg>

        <div className="relative mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3 text-[8.5px] font-medium tracking-[0.02em] text-white/55">
          <span>Illustrative asset relationships</span>
          <span className="inline-flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-emerald"
            />
            Subdomains · Hosts · Services
          </span>
        </div>
      </div>

      <figcaption id="asset-footprint-caption" className="sr-only">
        Illustrative asset map for example.com showing sample subdomains www,
        api, cdn, and mail. All values are illustrative.
      </figcaption>
    </figure>
  );
}

export default function AssetDiscoverySection() {
  return (
    <section
      id="assets-discovery"
      aria-labelledby="asset-discovery-heading"
      className="relative scroll-mt-24 overflow-hidden bg-charcoal py-16 font-sans text-white sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-[30rem] w-[30rem] rounded-full bg-emerald-hover/15 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-emerald/5 blur-[110px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14 xl:gap-20">
          <div className="min-w-0 lg:col-span-5">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald">
              <span aria-hidden="true" className="h-px w-8 bg-emerald/50" />
              Asset Discovery
            </p>

            <h2
              id="asset-discovery-heading"
              className="mt-4 max-w-[36rem] text-balance text-[2rem] font-bold leading-[1.06] tracking-[-0.045em] text-white sm:text-[2.25rem] lg:text-[2.75rem]"
            >
              Know What&rsquo;s Exposed on the Internet
            </h2>

            <p className="mt-5 max-w-[34rem] text-pretty text-[14.5px] leading-[1.75] text-white/75 sm:text-[15px]">
              Asset Discovery brings publicly discoverable subdomains, domains,
              hosts, and internet-facing services into one connected view, so
              you can understand the shape of your external footprint.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {DISCOVERY_SCOPE.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.12em] text-white/70"
                >
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-emerald"
                  />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7">
              <Link
                href={ASSET_DISCOVERY_ROUTE}
                className="btn-primary group w-full sm:w-auto"
              >
                Explore Asset Discovery
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </Link>
              <p className="mt-3 max-w-[30rem] text-[11px] leading-[1.6] text-white/60">
                A connected view of the public assets and services that shape
                your external footprint.
              </p>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <AssetFootprintPreview />
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {DISCOVERY_CAPABILITIES.map((capability) => (
            <Link
              key={capability.title}
              href={capability.href}
              className="group flex h-full min-w-0 flex-col rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors duration-200 hover:border-emerald/25 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal motion-reduce:transition-none"
            >
              <div className="flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald"
                />
                <h3 className="text-pretty text-[13px] font-semibold leading-[1.4] text-white">
                  {capability.title}
                </h3>
              </div>
              <p className="mt-2 pl-4 text-pretty text-[11.5px] leading-[1.6] text-white/70">
                {capability.description}
              </p>
              <span className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-3 pl-4 text-[8.5px] font-semibold uppercase tracking-[0.12em] text-white/45 transition-colors duration-200 group-hover:text-soft-green motion-reduce:transition-none">
                Open capability
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
