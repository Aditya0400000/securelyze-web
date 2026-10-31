import Link from "next/link";

import { AssetsIcon } from "./about/AboutIcons";

export default function CTASection() {
  return (
    <section
      id="assets-discovery"
      aria-labelledby="asset-discovery-heading"
      className="relative isolate scroll-mt-24 overflow-hidden border-t border-white/10 bg-charcoal py-16 font-sans text-white sm:py-20 lg:py-24"
    >
      {/* Premium dark-green gradient and ambient emerald glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-dark-green/75 via-charcoal to-dark-green/60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-emerald/12 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 -z-10 h-72 w-72 rounded-full bg-dark-green/40 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-12 xl:gap-16">
          <div className="min-w-0 lg:col-span-8">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-soft-green">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-emerald"
              />
              Asset Discovery
            </p>

            <h2
              id="asset-discovery-heading"
              className="mt-4 max-w-[42rem] text-balance text-[2rem] font-bold leading-[1.06] tracking-[-0.045em] text-white sm:text-[2.25rem] lg:text-[2.75rem]"
            >
              Know What&rsquo;s Exposed on the Internet
            </h2>

            <p className="mt-5 max-w-[38rem] text-pretty text-[15px] leading-[1.75] text-white/75 sm:mt-6 sm:text-base">
              Explore asset visibility with Subdomain Discovery, DNS information,
              and a clearer view of publicly discoverable internet-facing assets.
            </p>
          </div>

          <div className="min-w-0 border-t border-white/10 pt-8 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:pl-12">
            <div className="flex h-full flex-col justify-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald/25 bg-emerald/10 text-emerald">
                <AssetsIcon className="h-5 w-5" />
              </span>

              <Link
                href="/platform#assets-discovery"
                className="btn-primary group mt-5 inline-flex w-full items-center justify-center gap-2 text-[13px] font-semibold text-charcoal shadow-btn"
              >
                Explore Asset Discovery
                <span
                  aria-hidden="true"
                  className="text-[14px] transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
