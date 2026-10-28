import { CheckIcon, ChevronDownIcon } from "./PricingIcons";

const FAQS = [
  {
    question: "What is included in the Silver plan?",
    answer:
      "Silver includes basic SSL/TLS, domain/DNS, security-header, and HTTPS checks, plus a basic issue summary. The 100-checks-per-month limit is a proposed plan limit.",
  },
  {
    question: "Is the Silver plan really $0?",
    answer:
      "Yes. Silver is presented at $0/month. The crossed-out $49 figure is a visual reference only, not a previous or discounted price.",
  },
  {
    question: "What is the Custom plan?",
    answer:
      "Custom is designed for teams that need higher limits, multiple users, advanced scanning, detailed reports and integrations, or priority support. These custom capabilities are proposed and not yet available for online purchase.",
  },
  {
    question: "How do I get started?",
    answer:
      "Use the Website Security Checker to run a basic check. Demo scheduling and sales contact routes are not yet connected.",
  },
];

export default function PricingFaq() {
  return (
    <section
      id="faq"
      aria-labelledby="pricing-faq-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#F7FAFC] py-16 font-sans sm:py-20 lg:py-24"
    >
      <style>{`
        .pricing-faq-item > summary::-webkit-details-marker {
          display: none;
        }

        .pricing-faq-item[open] .pricing-faq-chevron {
          transform: rotate(180deg);
        }

        .pricing-faq-item[open] > summary {
          background: linear-gradient(180deg, #FBFDFF 0%, #FFFFFF 100%);
        }

        @media (prefers-reduced-motion: reduce) {
          .pricing-faq-chevron {
            transition: none;
          }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_50%_0%,rgba(220,232,247,0.55),transparent_72%)]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-9 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-4">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4F7410]">
              <span aria-hidden="true" className="h-px w-8 bg-[#4F7410]/45" />
              FAQ
            </p>
            <h2
              id="pricing-faq-heading"
              className="mt-4 max-w-[25rem] text-balance text-[1.9rem] font-bold leading-[1.08] tracking-[-0.045em] text-[#071D34] sm:text-[2.35rem]"
            >
              Pricing questions, answered plainly.
            </h2>
            <p className="mt-5 max-w-[26rem] text-pretty text-[14px] leading-[1.7] text-[#526B7F]">
              A quick look at how the Silver and Custom plans are presented,
              including which details are still proposed.
            </p>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#DCC98F] bg-[#FBF2D8] px-3 py-1.5 text-[9.5px] font-semibold uppercase tracking-[0.13em] text-[#7A5A12]">
              <CheckIcon className="h-3 w-3 text-[#8A6A1F]" />
              Silver is free · Custom is proposed
            </p>
          </div>

          <div className="min-w-0 lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-[#DCE7F1] bg-white shadow-[0_24px_65px_-55px_rgba(7,29,52,0.55)]">
              {FAQS.map((faq, index) => (
                <details
                  key={faq.question}
                  open={index === 0}
                  className="pricing-faq-item group border-b border-[#E7EFF5] last:border-b-0"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 transition-colors duration-200 hover:bg-[#FBFDFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#36536C] motion-reduce:transition-none sm:px-6">
                    <span className="text-[13.5px] font-semibold leading-[1.45] tracking-[-0.015em] text-[#0A2138] sm:text-[14.5px]">
                      {faq.question}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#DCE7F1] bg-[#F8FBFD] text-[#647C8D]">
                      <ChevronDownIcon className="pricing-faq-chevron h-3.5 w-3.5 transition-transform duration-200 motion-reduce:transition-none" />
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pr-14 sm:px-6 sm:pb-6 sm:pr-16">
                    <p className="max-w-[43rem] text-pretty text-[12.5px] leading-[1.75] text-[#526B7F] sm:text-[13px]">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
