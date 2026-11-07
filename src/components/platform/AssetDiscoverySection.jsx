import Link from "next/link";

import { ArrowRightIcon } from "../about/AboutIcons";
import AssetDiscoveryStackVisual from "./AssetDiscoveryStackVisual";

const ASSET_DISCOVERY_ROUTE = "/platform/asset-discovery";

const DISCOVERY_CAPABILITIES = [
  {
    title: "Subdomain Discovery",
    description:
      "Find publicly visible subdomains associated with a domain and see how they relate to your online presence.",
    href: "/platform/asset-discovery/subdomain-discovery",
  },
  {
    title: "Domain Discovery",
    description:
      "Explore domain-related information and identify associated domains where supported.",
    href: "/platform/asset-discovery/domain-discovery",
  },
  {
    title: "IP & Host Discovery",
    description:
      "Identify publicly visible IP addresses and hosts associated with your target.",
    href: "/platform/asset-discovery/ip-host-discovery",
  },
  {
    title: "Port & Service Discovery",
    description:
      "Review open ports and publicly accessible network services to understand which services may be exposed.",
    href: "/platform/asset-discovery/port-service-discovery",
  },
];

const DISCOVERY_SCOPE = ["Subdomains", "Domains", "Hosts", "Services"];

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
              Discover What&rsquo;s Visible on the Internet
            </h2>

            <p className="mt-5 max-w-[34rem] text-pretty text-[14.5px] leading-[1.75] text-white/75 sm:text-[15px]">
              Find publicly visible assets associated with your domain or other
              supported targets. Explore subdomains, IP addresses, open ports,
              and network services to better understand your internet-facing
              infrastructure.
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
                A connected view of the public assets and services associated
                with your targets.
              </p>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <AssetDiscoveryStackVisual />
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
