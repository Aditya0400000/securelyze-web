import { ChevronDownIcon } from "../pricing/PricingIcons";

const FAQS = [
  {
    question: "Do I need an account to use these resources?",
    answer:
      "No. The guides and tutorials on this page are free to read. No account is required to browse the educational content.",
  },
  {
    question: "Does Securelyze automatically fix security issues?",
    answer:
      "No. Securelyze is designed to help review public website signals. It does not automatically apply changes, fix findings, or guarantee security.",
  },
  {
    question: "Where should I start?",
    answer:
      "Start with Learn for the fundamentals, then use the tutorials in Explore to inspect the signals yourself.",
  },
  {
    question: "Why are some areas marked Coming Soon?",
    answer:
      "We only publish content when it is ready. The Read and Product Updates areas will expand as verified articles and release notes become available.",
  },
];

export default function ResourcesQuickAnswers() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-heading"
      className="mt-12 scroll-mt-28 border-t border-[#E2E8F0] pt-10"
    >
      <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-10">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#059669]">
            Quick answers
          </p>
          <h3
            id="faqs-heading"
            className="mt-2 text-[1.35rem] font-semibold leading-[1.2] tracking-[-0.035em] text-[#101A18] sm:text-[1.5rem]"
          >
            A few things to know.
          </h3>
          <p className="mt-3 max-w-[28rem] text-[12px] leading-[1.65] text-[#64748B]">
            Short answers about the resources and what Securelyze does. If you
            are looking for a specific product answer, start with the platform
            pages or the guides above.
          </p>
        </div>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 shadow-[inset_0_1px_0_#FFFFFF] transition-colors duration-150 open:border-[#D1FAE5] motion-reduce:transition-none"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-[11.5px] font-semibold leading-[1.5] text-[#183B32] outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#475569] [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] bg-[#FFFFFF] text-[#64748B] transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                >
                  <ChevronDownIcon className="h-3 w-3" />
                </span>
              </summary>
              <p className="mt-2 border-t border-[#F1F5F9] pt-2 text-[11px] leading-[1.65] text-[#64748B]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
