import Link from "next/link";

import { DocsIcon } from "./DocsIcons";
import { DOCS_CATEGORIES, getDocsTopicsByCategory } from "./docsData";

function NavGroups({ activeSlug }) {
  return DOCS_CATEGORIES.map((category) => {
    const topics = getDocsTopicsByCategory(category.id);

    return (
      <div key={category.id}>
        <p className="flex items-center gap-1.5 px-2.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#8A9BAA]">
          <DocsIcon type={category.icon} className="h-3 w-3" />
          {category.title}
        </p>

        <ul className="mt-1.5 space-y-0.5">
          {topics.map((topic) => {
            const isActive = topic.slug === activeSlug;

            return (
              <li key={topic.slug}>
                <Link
                  href={`/docs/${topic.slug}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`group flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11.5px] leading-[1.35] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#36536C] motion-reduce:transition-none ${
                    isActive
                      ? "bg-[#F4FBE5] font-semibold text-[#3E5D11]"
                      : "text-[#526B7F] hover:bg-[#F7FAFC] hover:text-[#10283E]"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                      isActive ? "bg-[#7BA92E]" : "bg-[#D5E1EB]"
                    }`}
                  />
                  <span className="min-w-0 flex-1">{topic.navLabel}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
}

export default function DocsTopicNav({ activeSlug }) {
  return (
    <>
      <details className="group rounded-[1.1rem] border border-[#DCE7F1] bg-white/90 shadow-[0_16px_36px_-34px_rgba(7,29,52,0.4),inset_0_1px_0_#FFFFFF] lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 [&::-webkit-details-marker]:hidden">
          <span className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#D7E9B0] bg-[#F2FADF] text-[#5C8414]">
              <DocsIcon type="overview" className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-[8px] font-semibold uppercase tracking-[0.14em] text-[#7A8FA0]">
                Documentation
              </span>
              <span className="mt-0.5 block text-[12px] font-semibold text-[#10283E]">
                Browse all guides
              </span>
            </span>
          </span>
          <span
            aria-hidden="true"
            className="text-[18px] font-light leading-none text-[#7A8FA0] transition-transform duration-150 group-open:rotate-45 motion-reduce:transition-none"
          >
            +
          </span>
        </summary>

        <div className="max-h-[65vh] overflow-y-auto border-t border-[#EDF2F7] px-2 py-3">
          <div className="space-y-5">
            <NavGroups activeSlug={activeSlug} />
          </div>
          <Link
            href="/docs"
            className="mt-4 flex items-center justify-center rounded-lg border border-[#DCE7F1] bg-[#FBFDFF] px-3 py-2.5 text-[11px] font-semibold text-[#36536C] transition-colors duration-150 hover:border-[#C9DFA4] hover:bg-[#F5FAEA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#36536C] motion-reduce:transition-none"
          >
            Back to documentation home
          </Link>
        </div>
      </details>

      <aside className="hidden lg:block">
        <div className="sticky top-[6.5rem]">
          <div className="rounded-[1.25rem] border border-[#DCE7F1] bg-white/80 p-3.5 shadow-[0_18px_44px_-38px_rgba(7,29,52,0.4),inset_0_1px_0_#FFFFFF] backdrop-blur-sm">
            <div className="flex items-center justify-between gap-3 px-2.5">
              <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#7A8FA0]">
                Documentation
              </p>
              <Link
                href="/docs"
                className="text-[9px] font-semibold text-[#5C8414] transition-colors duration-150 hover:text-[#3E5D11] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36536C] focus-visible:ring-offset-2 motion-reduce:transition-none"
              >
                All guides
              </Link>
            </div>

            <div className="mt-4 space-y-5">
              <NavGroups activeSlug={activeSlug} />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
