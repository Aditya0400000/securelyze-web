import Link from "next/link";

import { AssetsIcon } from "./about/AboutIcons";

export default function CTASection() {
  return (
    <section
      id="assets-discovery"
      aria-labelledby="asset-discovery-heading"
      className="relative scroll-mt-24 bg-[linear-gradient(180deg,#FCFDFE_0%,#F1F5F9_50%,#F4F8FB_64%,#F8FAFC_79%,#FCFDFE_92%,#FFFFFF_100%)] py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-12 xl:gap-16">
          <div className="min-w-0 lg:col-span-8">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2E526F]">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#6F9E13]/50"
              />
              Asset Discovery
            </p>

            <h2
              id="asset-discovery-heading"
              className="mt-4 max-w-[42rem] text-balance text-[2rem] font-bold leading-[1.06] tracking-[-0.045em] text-[#172554] sm:text-[2.25rem] lg:text-[2.75rem]"
            >
              Know What&rsquo;s Exposed on the Internet
            </h2>

            <p className="mt-5 max-w-[38rem] text-pretty text-[15px] leading-[1.75] text-[#475569] sm:mt-6 sm:text-base">
              Explore publicly discoverable subdomains, DNS information, and
              internet-facing assets to better understand your external attack
              surface.
            </p>
          </div>

          <div className="min-w-0 border-t border-[#CBD8E4] pt-8 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:pl-12">
            <div className="flex h-full flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[2px] border border-[#D6E1EA] bg-white text-[#0B2B45]">
                  <AssetsIcon className="h-[18px] w-[18px]" />
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-[2px] border border-[#C9D8E5] bg-white/70 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#36536C]">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 bg-[#8FCCFF]"
                  />
                  Coming Soon
                </span>
              </div>

              <p
                id="asset-discovery-status"
                className="mt-4 max-w-[22rem] text-[13px] leading-[1.65] text-[#526B7F]"
              >
                Asset discovery is in development. No live scans are available
                yet.
              </p>

              <Link
                href="/platform#assets-discovery"
                aria-describedby="asset-discovery-status"
                className="group mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-[3px] border border-[#071D34] bg-[#071D34] px-5 text-[12.5px] font-semibold tracking-[-0.005em] text-white shadow-[0_12px_28px_-18px_rgba(7,29,52,0.75)] transition-[background-color,transform] duration-200 ease-out hover:bg-[#0B2B45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F9E13] focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-safe:hover:-translate-y-px motion-reduce:transition-none"
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
