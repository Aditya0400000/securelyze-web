import Link from "next/link";

import { DocsIcon } from "./DocsIcons";
import { getDocsCategory } from "./docsData";
import { CATEGORY_TONES } from "./docsStyles";

export default function DocsTopicHero({ topic }) {
  const category = getDocsCategory(topic.category);
  const tone = CATEGORY_TONES[category?.tone ?? "lime"];
  const sectionCount = topic.sections.length;

  return (
    <section
      aria-labelledby="docs-topic-heading"
      className="relative isolate overflow-hidden border-b border-[#DCE7F1] bg-[linear-gradient(180deg,#F7FAFC_0%,#FBFDFF_58%,#FFFFFF_100%)] font-sans selection:bg-[#C6F36A] selection:text-[#071D34]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-[-12rem] h-[30rem] w-[30rem] rounded-full bg-[#E6F4F2]/70 blur-3xl" />
        <div className="absolute right-[-8rem] top-[-5rem] h-[24rem] w-[24rem] rounded-full bg-[#C6F36A]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(7,29,52,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(7,29,52,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_28%_0%,black,transparent_70%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-10 lg:px-8 lg:pb-14 lg:pt-12">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-[10px] font-semibold"
        >
          <Link
            href="/docs"
            className="rounded-md text-[#5F7284] transition-colors duration-150 hover:text-[#10283E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17344E] focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            Documentation
          </Link>
          <span aria-hidden="true" className="text-[#A8B7C4]">
            /
          </span>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] ${tone.lightBadge}`}
          >
            <span
              aria-hidden="true"
              className={`h-1.5 w-1.5 rounded-full ${tone.dot}`}
            />
            {category?.title}
          </span>
        </nav>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end lg:gap-12">
          <div className="min-w-0">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#7A8FA0]">
              Product guide
            </p>
            <h1
              id="docs-topic-heading"
              className="mt-3 max-w-[46rem] text-balance text-[2.35rem] font-semibold leading-[1.04] tracking-[-0.05em] text-[#071D34] sm:text-[3rem] lg:text-[3.35rem]"
            >
              {topic.title}
            </h1>
            <p className="mt-4 max-w-[46rem] text-pretty text-[15px] leading-[1.72] text-[#526B7F] sm:text-[16px]">
              {topic.description}
            </p>
          </div>

          <aside className="rounded-[1.25rem] border border-[#DCE7F1] bg-white/80 p-4 shadow-[0_18px_44px_-36px_rgba(7,29,52,0.4),inset_0_1px_0_#FFFFFF] backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${tone.lightIcon}`}
              >
                <DocsIcon type={topic.icon} className="h-[18px] w-[18px]" />
              </span>
              <div className="min-w-0">
                <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#7A8FA0]">
                  In this guide
                </p>
                <p className="mt-0.5 text-[12px] font-semibold text-[#10283E]">
                  {sectionCount} {sectionCount === 1 ? "section" : "sections"}
                </p>
              </div>
            </div>

            <div className="mt-3 border-t border-[#EDF2F7] pt-3">
              <p className="text-[10px] leading-[1.6] text-[#7A8FA0]">
                Based on the Securelyze product documentation.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
