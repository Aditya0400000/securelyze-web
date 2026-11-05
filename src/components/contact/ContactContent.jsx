import Link from "next/link";
import { ArrowRightIcon } from "@/components/about/AboutIcons";
import { MailIcon } from "@/components/pricing/PricingIcons";
import { PLATFORM_LOGIN_URL, SUPPORT_EMAIL } from "@/lib/siteLinks";
import ContactForm from "./ContactForm";
import ContactIllustration from "./ContactIllustration";

const FAQS = [
  {
    question: "How can I contact Securelyze support?",
    answer: <>Email <SupportLink /> with your question. The form on this page does not send messages.</>,
  },
  {
    question: "Where can I ask questions about the platform?",
    answer: <>Send your platform question to <SupportLink />. Include the tool or feature you want to understand.</>,
  },
  {
    question: "How do I report a technical issue?",
    answer: <>Email <SupportLink /> with the affected page, steps to reproduce the issue, and what you expected to happen. Leave out passwords and sensitive account details.</>,
  },
];

function SupportLink() {
  return (
    <a href={`mailto:${SUPPORT_EMAIL}`} className="break-words font-semibold text-dark-green underline decoration-emerald/40 underline-offset-4 transition-colors hover:text-emerald-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring motion-reduce:transition-none">
      {SUPPORT_EMAIL}
    </a>
  );
}

export default function ContactContent() {
  return (
    <>
      <section aria-labelledby="contact-heading" className="relative isolate overflow-hidden border-b border-border bg-linear-to-b from-light via-background to-white py-16 sm:py-20 lg:py-24">
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center xl:grid-cols-[minmax(0,1fr)_24rem] xl:gap-16">
            <div className="min-w-0 max-w-[52rem]">
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[10px] font-semibold">
                <Link href="/about" className="rounded-md text-text-muted transition-colors duration-150 hover:text-dark-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 motion-reduce:transition-none">About Securelyze</Link>
                <span aria-hidden="true" className="text-text-muted/60">/</span>
                <span aria-current="page" className="inline-flex items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] text-dark-green">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-emerald" />
                  Contact Us
                </span>
              </nav>
              <p className="mt-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-dark-green">
                <span aria-hidden="true" className="h-px w-8 bg-emerald" />GET IN TOUCH
              </p>
              <h1 id="contact-heading" className="mt-4 max-w-[48rem] text-balance text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.055em] text-charcoal sm:text-[3.25rem] lg:text-[3.45rem] xl:text-[3.6rem]">
                Let&apos;s talk about your security needs.
              </h1>
              <p className="mt-6 max-w-[44rem] text-pretty text-[15px] leading-[1.75] text-text-secondary sm:text-base">
                Have a question about Securelyze, our security tools, or your account? Get in touch with our team.
              </p>
              <p className="mt-5 max-w-[38rem] border-l-2 border-emerald/30 pl-4 text-[12.5px] leading-[1.75] text-text-muted">Choose the topic that best matches your question.</p>
            </div>
            <div className="min-w-0">
              <ContactIllustration />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-light py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-12 lg:px-8">
          <ContactForm />
          <aside className="min-w-0 space-y-9">
            <section aria-labelledby="contact-email-heading" className="rounded-3xl border border-border bg-white/85 p-6 shadow-card backdrop-blur-sm sm:p-8">
              <span className="inline-flex size-11 items-center justify-center rounded-xl border border-emerald/20 bg-soft-green/60 text-dark-green"><MailIcon className="size-5" /></span>
              <h2 id="contact-email-heading" className="mt-5 text-[1.25rem] font-semibold leading-[1.25] tracking-[-0.025em] text-charcoal">A direct line to Securelyze.</h2>
              <p className="mt-3 text-[13px] leading-[1.75] text-text-secondary">For support, platform questions, and account inquiries, contact us by email.</p>
              <div className="mt-5 border-t border-border-subtle pt-5 text-[15px]"><SupportLink /></div>
            </section>

            <section aria-labelledby="contact-faq-heading">
              <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-dark-green">A FEW QUICK ANSWERS</p>
              <h2 id="contact-faq-heading" className="heading-3 mt-3">Before you get in touch.</h2>
              <div className="mt-5 space-y-3">
                {FAQS.map((faq) => (
                  <details key={faq.question} className="group rounded-xl border border-border bg-white open:border-emerald/30">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus-ring [&::-webkit-details-marker]:hidden">
                      <span className="text-sm font-semibold leading-[1.5] text-charcoal">{faq.question}</span>
                      <span aria-hidden="true" className="text-[18px] font-light leading-none text-text-muted transition-transform duration-150 group-open:rotate-45 motion-reduce:transition-none">+</span>
                    </summary>
                    <div className="border-t border-border px-4 py-4 text-sm leading-[1.75] text-text-secondary">{faq.answer}</div>
                  </details>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>

      <section aria-labelledby="contact-cta-heading" className="bg-light pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-charcoal p-6 shadow-[var(--shadow-card-dark)] sm:p-10 lg:p-12">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-[linear-gradient(var(--bot-line-faint)_1px,transparent_1px),linear-gradient(90deg,var(--bot-line-faint)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
              <div className="absolute -right-20 -top-28 size-80 rounded-full bg-emerald/10 blur-3xl" />
            </div>
            <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12">
              <div className="max-w-[40rem]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-light">EXPLORE SECURELYZE</p>
                <h2 id="contact-cta-heading" className="heading-2 mt-4 text-balance text-white!">Ready to explore your website&apos;s security?</h2>
                <p className="mt-4 text-[15px] leading-[1.75] text-soft-green/75">Discover the tools that help you understand your public-facing security.</p>
              </div>
              <Link href={PLATFORM_LOGIN_URL} className="btn-primary group w-full sm:w-auto lg:justify-self-end motion-reduce:transition-none!">
                Explore Full Platform
                <ArrowRightIcon className="size-4 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
