import Link from "next/link";

import {
  ArrowRightIcon,
  AssetsIcon,
  WebsiteIcon,
} from "../about/AboutIcons";
import { LayersIcon } from "../pricing/PricingIcons";

const NAV_LINKS = [
  {
    title: "Platform Overview",
    description: "Return to the top-level view of both platform pillars.",
    href: "/platform#platform-overview",
    icon: LayersIcon,
  },
  {
    title: "Website Security Check",
    description: "Explore the four dedicated security check pages.",
    href: "/platform#website-security-check",
    icon: WebsiteIcon,
  },
  {
    title: "Asset Discovery",
    description:
      "Explore the dedicated overview and capability pages for the public footprint.",
    href: "/platform/asset-discovery",
    icon: AssetsIcon,
    ctaLabel: "Open overview",
  },
];

export default function PlatformNavigationCta() {
  return (
    <section
      id="platform-navigation"
      aria-labelledby="platform-navigation-heading"
      className="bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-charcoal px-5 py-8 shadow-card sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-emerald/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-emerald/5 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,var(--emerald)_0%,transparent_32%)] opacity-[0.06]" />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.6fr] lg:items-center lg:gap-12">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald">
                <span aria-hidden="true" className="h-px w-8 bg-emerald/50" />
                Platform navigation
              </p>
              <h2
                id="platform-navigation-heading"
                className="mt-4 text-balance text-[1.8rem] font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-[2.15rem]"
              >
                Move through the platform with context.
              </h2>
              <p className="mt-4 max-w-[30rem] text-pretty text-[13.5px] leading-[1.75] text-white/60">
                Jump between the overview, Website Security Check, and Asset
                Discovery without losing your place.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {NAV_LINKS.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex h-full min-w-0 flex-col rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors duration-200 hover:border-emerald/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal motion-reduce:transition-none"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/10 text-emerald">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="mt-4 text-pretty text-[13px] font-semibold leading-[1.4] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-pretty text-[11.5px] leading-[1.6] text-white/55">
                      {item.description}
                    </p>
                    <span className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-3.5 text-[8.5px] font-semibold uppercase tracking-[0.12em] text-white/45 transition-colors duration-200 group-hover:text-soft-green motion-reduce:transition-none">
                      {item.ctaLabel ?? "Open section"}
                      <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
