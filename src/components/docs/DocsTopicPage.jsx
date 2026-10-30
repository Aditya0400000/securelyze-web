import Link from "next/link";

import { ArrowRightIcon } from "../about/AboutIcons";
import DocsArticle from "./DocsArticle";
import { DocsIcon } from "./DocsIcons";
import DocsTopicHero from "./DocsTopicHero";
import DocsTopicNav from "./DocsTopicNav";
import {
  getAdjacentTopics,
  getDocsCategory,
  getRelatedTopics,
} from "./docsData";
import { CATEGORY_TONES } from "./docsStyles";

function OnThisPage({ topic }) {
  return (
    <div className="rounded-[1.25rem] border border-[#DCE7F1] bg-white/80 p-4 shadow-[0_18px_44px_-38px_rgba(7,29,52,0.4),inset_0_1px_0_#FFFFFF] backdrop-blur-sm">
      <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#7A8FA0]">
        On this page
      </p>
      <ul className="mt-3 space-y-1">
        {topic.sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="block rounded-md py-1.5 text-[10.5px] leading-[1.45] text-[#5F7284] transition-colors duration-150 hover:text-[#3E5D11] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36536C] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileOnThisPage({ topic }) {
  return (
    <details className="group mb-6 rounded-xl border border-[#DCE7F1] bg-[#FBFDFF] xl:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 [&::-webkit-details-marker]:hidden">
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7A8FA0]">
          On this page
        </span>
        <span
          aria-hidden="true"
          className="text-[16px] font-light leading-none text-[#7A8FA0] transition-transform duration-150 group-open:rotate-45 motion-reduce:transition-none"
        >
          +
        </span>
      </summary>
      <ul className="border-t border-[#EDF2F7] px-4 py-3">
        {topic.sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="block py-1.5 text-[12px] leading-[1.5] text-[#5F7284] transition-colors duration-150 hover:text-[#3E5D11] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36536C] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}

function RelatedGuides({ topic }) {
  const relatedTopics = getRelatedTopics(topic);

  if (!relatedTopics.length) return null;

  return (
    <div className="mt-10 border-t border-[#EDF2F7] pt-8 sm:mt-12 sm:pt-9">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#7A8FA0]">
            Keep going
          </p>
          <h2 className="mt-1.5 text-[1.2rem] font-semibold tracking-[-0.03em] text-[#10283E]">
            Related guides
          </h2>
        </div>
        <Link
          href="/docs"
          className="text-[10px] font-semibold text-[#5C8414] transition-colors duration-150 hover:text-[#3E5D11] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36536C] focus-visible:ring-offset-2 motion-reduce:transition-none"
        >
          All documentation
        </Link>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {relatedTopics.map((relatedTopic) => {
          const category = getDocsCategory(relatedTopic.category);
          const tone = CATEGORY_TONES[category?.tone ?? "lime"];

          return (
            <Link
              key={relatedTopic.slug}
              href={`/docs/${relatedTopic.slug}`}
              className="group flex items-start gap-3 rounded-xl border border-[#DCE7F1] bg-[#FBFDFF] p-3.5 transition-[border-color,background-color] duration-150 hover:border-[#C9DFA4] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17344E] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${tone.lightIcon}`}
              >
                <DocsIcon type={relatedTopic.icon} className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-[12px] font-semibold text-[#183044]">
                  {relatedTopic.title}
                </span>
                <span className="mt-1 block text-[11px] leading-[1.55] text-[#7A8FA0]">
                  {relatedTopic.summary}
                </span>
              </span>
              <ArrowRightIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-[#8A9BAA] transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function Pagination({ topic }) {
  const { previous, next } = getAdjacentTopics(topic.slug);

  return (
    <nav
      aria-label="Documentation pagination"
      className="mt-8 grid gap-3 border-t border-[#EDF2F7] pt-6 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          href={`/docs/${previous.slug}`}
          className="group flex min-w-0 flex-col rounded-xl border border-[#DCE7F1] bg-white p-3.5 transition-colors duration-150 hover:border-[#C9DFA4] hover:bg-[#FBFDFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17344E] focus-visible:ring-offset-2 motion-reduce:transition-none"
        >
          <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#7A8FA0]">
            <ArrowRightIcon className="h-3 w-3 rotate-180" />
            Previous
          </span>
          <span className="mt-1.5 truncate text-[12px] font-semibold text-[#183044]">
            {previous.title}
          </span>
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link
          href={`/docs/${next.slug}`}
          className="group flex min-w-0 flex-col rounded-xl border border-[#DCE7F1] bg-white p-3.5 text-right transition-colors duration-150 hover:border-[#C9DFA4] hover:bg-[#FBFDFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17344E] focus-visible:ring-offset-2 motion-reduce:transition-none sm:items-end"
        >
          <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#7A8FA0]">
            Next
            <ArrowRightIcon className="h-3 w-3" />
          </span>
          <span className="mt-1.5 truncate text-[12px] font-semibold text-[#183044]">
            {next.title}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}

export default function DocsTopicPage({ topic }) {
  return (
    <>
      <DocsTopicHero topic={topic} />

      <section className="relative bg-[#F7FAFC] py-8 font-sans sm:py-10 lg:py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:hidden">
            <DocsTopicNav activeSlug={topic.slug} />
          </div>

          <div className="mt-5 grid gap-8 lg:mt-0 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[15rem_minmax(0,1fr)_13rem]">
            <div className="hidden lg:block">
              <DocsTopicNav activeSlug={topic.slug} />
            </div>

            <article className="min-w-0 rounded-[1.75rem] border border-[#DCE7F1] bg-white p-5 shadow-[0_22px_60px_-46px_rgba(7,29,52,0.45),inset_0_1px_0_#FFFFFF] sm:p-7 lg:p-9">
              <MobileOnThisPage topic={topic} />
              <DocsArticle topic={topic} />
              <RelatedGuides topic={topic} />
              <Pagination topic={topic} />
            </article>

            <aside className="hidden xl:block">
              <div className="sticky top-[6.5rem] space-y-4">
                <OnThisPage topic={topic} />

                <div className="rounded-[1.25rem] border border-[#DCE7F1] bg-[linear-gradient(160deg,#F7FCEB_0%,#FFFFFF_72%)] p-4 shadow-[0_18px_44px_-38px_rgba(7,29,52,0.4),inset_0_1px_0_#FFFFFF]">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#6F9E13]">
                    Need a quick answer?
                  </p>
                  <p className="mt-2 text-[11.5px] leading-[1.65] text-[#5F7284]">
                    Check the troubleshooting guide for empty states, access
                    questions, and common product notices.
                  </p>
                  <Link
                    href="/docs/troubleshooting"
                    className="group mt-3 inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#5C8414] transition-colors duration-150 hover:text-[#3E5D11] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36536C] focus-visible:ring-offset-2 motion-reduce:transition-none"
                  >
                    Open troubleshooting
                    <ArrowRightIcon className="h-3 w-3 transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
