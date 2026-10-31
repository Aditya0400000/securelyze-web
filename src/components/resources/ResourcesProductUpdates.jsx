import { ArrowRightIcon } from "../about/AboutIcons";
import { RefreshIcon } from "./ResourcesIcons";
import ResourcesSectionHeading from "./ResourcesSectionHeading";
import SmoothAnchor from "./SmoothAnchor";

const FEED_ITEMS = [
  {
    label: "Release notes",
    description: "New capabilities and notable changes.",
  },
  {
    label: "Improvements",
    description: "Refinements to existing workflows.",
  },
  {
    label: "Fixes",
    description: "Resolved issues and reliability work.",
  },
  {
    label: "Documentation",
    description: "Updates to guides and reference material.",
  },
];

export default function ResourcesProductUpdates() {
  return (
    <section
      id="product-updates"
      aria-labelledby="product-updates-heading"
      className="mt-12 scroll-mt-28 border-t border-[#E2E8F0] pt-10"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <ResourcesSectionHeading
          id="product-updates-heading"
          as="h3"
          size="md"
          eyebrow="Explore / Product Updates"
          title="Release notes, when they are ready."
          description="Verified product updates and release notes will live here. We will publish them only when there is something real to share."
        />
        <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-[#D1FAE5] bg-[#ECFDF5] px-3 py-1.5 text-[8.5px] font-semibold uppercase tracking-[0.15em] text-[#047857]">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-[#10B981]"
          />
          Coming soon
        </span>
      </div>

      <div className="mt-7 overflow-hidden rounded-[1.75rem] border border-[#183B32]/20 bg-[#101A18] text-white shadow-[0_34px_90px_-58px_rgba(16,26,24,0.85),inset_0_1px_0_rgba(255,255,255,0.08)]">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:p-10">
          <div>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#10B981]/25 bg-[#10B981]/10 text-[#D1FAE5]">
              <RefreshIcon className="h-5 w-5" />
            </span>
            <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#10B981]">
              Changelog
            </p>
            <h4 className="mt-2 text-balance text-[1.45rem] font-semibold leading-[1.2] tracking-[-0.035em] text-white sm:text-[1.65rem]">
              Verified updates will appear here.
            </h4>
            <p className="mt-3 text-[12.5px] leading-[1.7] text-white/60">
              There are no published product updates yet. When there are
              verified release notes to share, they will appear here with clear
              dates and details.
            </p>

            <SmoothAnchor
              href="#tutorials"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-3.5 py-2.5 text-[11px] font-semibold text-white/80 transition-[border-color,background-color,color] duration-150 hover:border-white/25 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101A18] motion-reduce:transition-none"
            >
              Explore tutorials while you wait
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </SmoothAnchor>
          </div>

          <div className="space-y-2.5">
            {FEED_ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-3"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#10B981]"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-[12px] font-semibold text-white/85">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-[10.5px] leading-[1.55] text-white/55">
                    {item.description}
                  </p>
                </div>
                <span className="shrink-0 text-[8px] font-medium uppercase tracking-[0.1em] text-white/50">
                  Not yet
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-3 text-[9px] leading-[1.6] text-white/50 sm:px-8 lg:px-10">
          No release dates, version numbers, or shipped features have been
          announced.
        </div>
      </div>
    </section>
  );
}
