"use client";

import { useId, useState } from "react";

const FAQS = [
  {
    question: "How do I send a message?",
    answer:
      'Fill out the contact form and click "Send Message." Your email app will open with the details ready. Press Send there to email us.',
  },
  {
    question: "Why does my email app open?",
    answer:
      "Securelyze uses your email app to send contact messages. This means you can review what you're sending before it goes out.",
  },
  {
    question: "What if my email app doesn't open?",
    answer:
      "Check that a default email app is set up on your device. You can also use the contact email address shown on this page, if available.",
  },
  {
    question: "Can I ask about Website Security Check or Asset Discovery?",
    answer:
      "Of course. Tell us which feature you're asking about and what you'd like to know.",
  },
  {
    question: "Can I share feedback or report a problem?",
    answer:
      "Yes. Describe what happened and, if possible, include the page or feature involved. Please don't include passwords, API keys, or other sensitive information.",
  },
];

function FaqItem({ item, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const buttonId = useId();
  const panelId = useId();

  return (
    <div
      className={`border-b border-border last:border-b-0 transition-colors duration-200 motion-reduce:transition-none ${
        isOpen ? "bg-emerald/[0.025]" : "bg-white"
      }`}
    >
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
          className="group flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition-colors duration-200 hover:bg-light/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus-ring motion-reduce:transition-none sm:px-6"
        >
          <span className="text-[13.5px] font-semibold leading-[1.5] tracking-[-0.01em] text-charcoal sm:text-[14.5px]">
            {item.question}
          </span>
          <span
            aria-hidden="true"
            className={`flex size-7 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color,color] duration-200 motion-reduce:transition-none ${
              isOpen
                ? "rotate-45 border-emerald/30 bg-emerald/10 text-emerald"
                : "border-border bg-light text-text-muted group-hover:border-emerald/30 group-hover:text-emerald"
            }`}
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="size-3.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              <path d="M8 3.25v9.5M3.25 8h9.5" />
            </svg>
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[46rem] px-5 pb-5 text-[13px] leading-[1.75] text-text-secondary sm:px-6 sm:pb-6 sm:pr-16">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ContactFaq() {
  return (
    <section
      aria-labelledby="contact-faq-heading"
      className="border-t border-border-subtle bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="min-w-0">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-dark-green">
              <span aria-hidden="true" className="h-px w-8 bg-emerald" />
              COMMON QUESTIONS
            </p>
            <h2
              id="contact-faq-heading"
              className="mt-4 max-w-[28rem] text-balance text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.045em] text-charcoal sm:text-[2.35rem]"
            >
              A few things people ask.
            </h2>
            <p className="mt-5 max-w-[28rem] text-pretty text-[14px] leading-[1.7] text-text-secondary">
              Short answers about how the form works and what to include.
            </p>
          </div>

          <div className="min-w-0 overflow-hidden rounded-2xl border border-border bg-white shadow-card">
            {FAQS.map((faq, index) => (
              <FaqItem
                key={faq.question}
                item={faq}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
