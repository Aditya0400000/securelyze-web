"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "What is a website security checker?",
    answer:
      "A website security checker reviews publicly available configuration details—such as certificate, DNS, and browser security header information—and presents them in a clear summary. Securelyze currently offers a preview of this experience; live checks are not yet available.",
  },
  {
    question: "How does SSL certificate analysis work?",
    answer:
      "SSL certificate analysis reviews the certificate and TLS configuration details a website presents publicly, helping you understand certificate context and connection settings. In the current Securelyze preview, this analysis is illustrative and does not run a live certificate scan.",
  },
  {
    question: "What is asset discovery?",
    answer:
      "Asset discovery maps publicly discoverable internet-facing assets, such as domains, subdomains, and related endpoints, to help clarify an organization’s external attack surface. Asset Discovery is still in development at Securelyze and is not available for live scans yet.",
  },
  {
    question: "Is Securelyze free to use?",
    answer:
      "Yes. The current Securelyze preview is free to use, with no credit card or paid subscription required. There are no paid plans at this time.",
  },
  {
    question: "What security headers does the checker analyze?",
    answer:
      "Securelyze is designed to review HTTP response headers that influence browser security policy and help identify missing or weak header configuration. The current preview does not yet run live header checks, so it does not confirm specific headers for a domain.",
  },
  {
    question: "How accurate is the security score?",
    answer:
      "Securelyze does not currently provide a live security score. The preview uses illustrative sample data rather than a real assessment, so there is no accuracy rating to report yet. Any future score should be treated as guidance, not a guarantee of security.",
  },
  {
    question: "Can I check multiple domains?",
    answer:
      "The current preview accepts one website URL at a time. Multi-domain scanning is not available yet.",
  },
  {
    question: "What information is included in the security report?",
    answer:
      "The intended report summarizes public configuration signals such as SSL/TLS certificate context, DNS records, and security headers, with clear observations. The current preview does not generate a live or downloadable report; the final report contents will be documented when scanning is available.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      aria-labelledby="home-faq-heading"
      className="relative scroll-mt-24 bg-[linear-gradient(180deg,#FCFDFE_0%,#F1F5F9_50%,#F4F8FB_64%,#F8FAFC_79%,#FCFDFE_92%,#FFFFFF_100%)] py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="home-faq-heading"
            className="mx-auto max-w-[42rem] text-balance text-[2rem] font-bold leading-[1.06] tracking-[-0.045em] text-[#172554] sm:text-[2.25rem] lg:text-[2.75rem]"
          >
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-5 max-w-[38rem] text-pretty text-[15px] leading-[1.75] text-[#475569] sm:mt-6 sm:text-base">
            Find answers to common questions about Securelyze and website
            security.
          </p>
        </div>

        <ul className="mt-10 border-t border-[#D5E0E9] sm:mt-12">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const number = String(index + 1).padStart(2, "0");
            const questionId = `home-faq-question-${index + 1}`;
            const answerId = `home-faq-answer-${index + 1}`;
            const boxBaseClasses =
              "flex h-9 w-9 items-center justify-center border border-[#172554] transition-colors duration-200 motion-reduce:transition-none";
            const boxStateClasses = isOpen
              ? "bg-[#172554] text-white"
              : "bg-transparent text-[#172554] group-hover:text-[#071D34]";

            return (
              <li key={faq.question} className="border-b border-[#D5E0E9]">
                <h3>
                  <button
                    id={questionId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group grid w-full cursor-pointer grid-cols-[2.25rem_minmax(0,1fr)_2.25rem] items-start gap-3 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#36536C] sm:gap-4 sm:py-6"
                  >
                    <span
                      aria-hidden="true"
                      className={`${boxBaseClasses} ${boxStateClasses} font-mono text-[10px] font-semibold tracking-[0.04em]`}
                    >
                      {number}
                    </span>

                    <span className="min-w-0 text-[15px] font-semibold leading-[1.5] tracking-[-0.02em] text-[#172554] transition-colors duration-200 group-hover:text-[#071D34] motion-reduce:transition-none sm:text-base">
                      {faq.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`${boxBaseClasses} ${boxStateClasses} text-[18px] font-normal leading-none`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="grid grid-cols-[2.25rem_minmax(0,1fr)_2.25rem] gap-3 pb-5 sm:gap-4 sm:pb-6">
                      <p className="col-start-2 text-pretty text-[14px] leading-[1.75] text-[#475569] sm:text-[14.5px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
