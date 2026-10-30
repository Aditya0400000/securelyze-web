import Link from "next/link";

import { ArrowRightIcon } from "../about/AboutIcons";
import ResourcesSectionHeading from "../resources/ResourcesSectionHeading";
import { DocsIcon } from "./DocsIcons";
import { DOCS_CATEGORIES, getDocsTopicsByCategory } from "./docsData";
import { CATEGORY_TONES } from "./docsStyles";

function TopicCard({ topic, tone, wide = false }) {
  return (
    <Link
      href={`/docs/${topic.slug}`}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-[#DCE7F1] bg-white p-5 shadow-[0_18px_45px_-38px_rgba(7,29,52,0.45),inset_0_1px_0_#FFFFFF] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[#C9DFA4] hover:shadow-[0_24px_55px_-34px_rgba(7,29,52,0.4),inset_0_1px_0_#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17344E] focus-visible:ring-offset-2 motion-reduce:transition-none ${
        wide ? "sm:max-w-[34rem]" : ""
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-[2px] ${tone.rule} opacity-0 transition-opacity duration-200 group-hover:opacity-100 motion-reduce:transition-none`}
      />

      <div className="flex items-start justify-between gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${tone.lightIcon}`}
        >
          <DocsIcon type={topic.icon} className="h-[18px] w-[18px]" />
        </span>
        <span className="mt-0.5 rounded-full border border-[#E7EEF5] bg-[#FBFDFF] px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#7A8FA0]">
          Guide
        </span>
      </div>

      <h4 className="mt-4 text-[1.02rem] font-semibold tracking-[-0.025em] text-[#10283E]">
        {topic.title}
      </h4>
      <p className="mt-2 text-[12.5px] leading-[1.65] text-[#5F7284]">
        {topic.summary}
      </p>

      <span className="mt-auto flex items-center justify-between gap-3 border-t border-[#EDF2F7] pt-4 text-[11px] font-semibold text-[#36536C]">
        Read guide
        <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 text-[#7A8FA0] transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none" />
      </span>
    </Link>
  );
}

export default function DocsCategories() {
  return (
    <section
      id="documentation"
      aria-labelledby="documentation-heading"
      className="relative scroll-mt-28 bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ResourcesSectionHeading
          id="documentation-heading"
          eyebrow="Documentation map"
          title="Find the guide that fits the task."
          description="The library is organised around the way the product works: start with the model, move into daily workflows, then manage the settings and people behind them."
        />

        <div className="mt-12 space-y-10 lg:mt-14 lg:space-y-12">
          {DOCS_CATEGORIES.map((category) => {
            const topics = getDocsTopicsByCategory(category.id);
            const tone = CATEGORY_TONES[category.tone];
            const isSingle = topics.length === 1;
            const gridClass = isSingle
              ? "grid-cols-1"
              : topics.length === 2
                ? "sm:grid-cols-2"
                : "sm:grid-cols-2 xl:grid-cols-3";

            return (
              <div
                key={category.id}
                className="border-t border-[#E7EEF5] pt-8 first:border-t-0 first:pt-0 lg:pt-10"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-3.5">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${tone.lightIcon}`}
                    >
                      <DocsIcon type={category.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#7A8FA0]">
                        {category.eyebrow}
                      </p>
                      <h3 className="mt-1.5 text-[1.45rem] font-semibold tracking-[-0.035em] text-[#10283E]">
                        {category.title}
                      </h3>
                      <p className="mt-1 max-w-[40rem] text-[12.5px] leading-[1.65] text-[#5F7284]">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`inline-flex w-fit shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] ${tone.lightBadge}`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full ${tone.dot}`}
                    />
                    {topics.length} {topics.length === 1 ? "guide" : "guides"}
                  </span>
                </div>

                <div className={`mt-5 grid gap-3 ${gridClass}`}>
                  {topics.map((topic) => (
                    <TopicCard
                      key={topic.slug}
                      topic={topic}
                      tone={tone}
                      wide={isSingle}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
