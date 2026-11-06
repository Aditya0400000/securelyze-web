"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "What is Securelyze?",
    answer:
      "Securelyze is a platform for reviewing security configurations and discovering internet-facing assets. It helps you understand information about domains, DNS, SSL/TLS, email security, IP addresses, and network services.",
  },
  {
    question: "What can I check with Securelyze?",
    answer:
      "You can use the available tools to review DNS records, SSL/TLS certificates, email authentication, HTTP security headers, and information about internet-facing assets and services.",
  },
  {
    question: "What is Asset Discovery?",
    answer:
      "Asset Discovery helps you find publicly visible assets associated with a target, including supported domain, subdomain, IP address, and service information.",
  },
  {
    question: "Does Securelyze fix security issues automatically?",
    answer:
      "No. Securelyze helps you review security configurations and findings. Any necessary changes or fixes must be assessed and carried out separately.",
  },
  {
    question: "Do I need technical knowledge to use Securelyze?",
    answer:
      "You can begin with basic information, such as a domain name. Results are presented in an organized format, although some technical knowledge may help when reviewing detailed findings.",
  },
  {
    question: "Should I only scan assets I own?",
    answer:
      "Only scan or assess systems you own or have permission to test. Make sure you have the appropriate authorization before using security tools on third-party systems.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      aria-labelledby="home-faq-heading"
      className="relative scroll-mt-24 bg-light py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="home-faq-heading"
            className="mx-auto max-w-[42rem] text-balance text-[2rem] font-bold leading-[1.06] tracking-[-0.045em] text-charcoal sm:text-[2.25rem] lg:text-[2.75rem]"
          >
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-5 max-w-[38rem] text-pretty text-[15px] leading-[1.75] text-text-secondary sm:mt-6 sm:text-base">
            Find answers to common questions about Securelyze and website
            security.
          </p>
        </div>

        <ul className="mt-10 space-y-3 sm:mt-12 sm:space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const number = String(index + 1).padStart(2, "0");
            const questionId = `home-faq-question-${index + 1}`;
            const answerId = `home-faq-answer-${index + 1}`;
            const boxBaseClasses =
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-colors duration-200 motion-reduce:transition-none";
            const boxStateClasses = isOpen
              ? "border-emerald bg-emerald text-white"
              : "border-border bg-soft-green text-emerald group-hover:border-emerald/40 group-hover:text-emerald-hover";

            return (
              <li
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white shadow-card transition-[border-color,box-shadow] duration-200 motion-reduce:transition-none ${
                  isOpen
                    ? "border-emerald/30 shadow-card-hover"
                    : "border-border hover:border-emerald/25 hover:shadow-card-hover"
                }`}
              >
                <h3>
                  <button
                    id={questionId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group grid w-full cursor-pointer grid-cols-[2.25rem_minmax(0,1fr)_2.25rem] items-start gap-3 px-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus-ring sm:gap-4 sm:px-5 sm:py-5"
                  >
                    <span
                      aria-hidden="true"
                      className={`${boxBaseClasses} ${boxStateClasses} font-mono text-[10px] font-semibold tracking-[0.04em]`}
                    >
                      {number}
                    </span>

                    <span className="min-w-0 text-[15px] font-semibold leading-[1.5] tracking-[-0.02em] text-charcoal transition-colors duration-200 group-hover:text-emerald-hover motion-reduce:transition-none sm:text-base">
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
                    <div className="grid grid-cols-[2.25rem_minmax(0,1fr)_2.25rem] gap-3 px-4 pb-4 sm:gap-4 sm:px-5 sm:pb-5">
                      <p className="col-start-2 text-pretty text-[14px] leading-[1.75] text-text-secondary sm:text-[14.5px]">
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
