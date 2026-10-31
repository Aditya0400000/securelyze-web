import Link from "next/link";

import { ArrowRightIcon } from "../about/AboutIcons";
import { CheckIcon } from "../pricing/PricingIcons";
import Reveal from "./Reveal";
import { SECURITY_CHECK_TOOLS } from "./securityCheckContent";

const BODY_TEXT =
  "text-[14px] leading-[1.8] text-text-secondary sm:text-[14.5px]";

const SECTION_LINKS = [
  { id: "why-it-matters", label: "Why it matters" },
  { id: "what-is-reviewed", label: "What can be reviewed" },
  { id: "how-it-works", label: "How the analysis works" },
  { id: "illustrative-results", label: "Illustrative example" },
  { id: "faqs", label: "FAQs" },
  { id: "related-tools", label: "Related tools" },
];

function Breadcrumb({ title }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-[10px] font-semibold"
    >
      <Link
        href="/platform"
        className="rounded-md text-text-muted transition-colors duration-150 hover:text-dark-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 motion-reduce:transition-none"
      >
        Platform
      </Link>
      <span aria-hidden="true" className="text-text-muted/60">
        /
      </span>
      <Link
        href="/platform#website-security-check"
        className="rounded-md text-text-muted transition-colors duration-150 hover:text-dark-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 motion-reduce:transition-none"
      >
        Website Security Check
      </Link>
      <span aria-hidden="true" className="text-text-muted/60">
        /
      </span>
      <span
        aria-current="page"
        className="inline-flex items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] text-dark-green"
      >
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald" />
        {title}
      </span>
    </nav>
  );
}

function SectionHeading({ id, children }) {
  return (
    <h2
      id={id}
      className="flex items-start gap-3 text-[1.35rem] font-semibold tracking-[-0.035em] text-charcoal sm:text-[1.5rem]"
    >
      <span
        aria-hidden="true"
        className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald"
      />
      <span>{children}</span>
    </h2>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className={`flex gap-3 ${BODY_TEXT}`}>
          <span
            aria-hidden="true"
            className="mt-[0.62rem] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald"
          />
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Callout({ title, children }) {
  return (
    <div className="rounded-2xl border border-emerald/20 bg-emerald/5 p-4">
      <div className="flex items-start gap-2.5">
        <span
          aria-hidden="true"
          className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald"
        />
        <div>
          {title ? (
            <p className="text-[12px] font-semibold text-dark-green">{title}</p>
          ) : null}
          <p className="mt-1 text-[12.5px] leading-[1.7] text-text-secondary">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

function ReviewCard({ item }) {
  return (
    <div className="rounded-2xl border border-border bg-light/70 p-4 transition-colors duration-200 hover:border-emerald/30 hover:bg-soft-green/10 motion-reduce:transition-none">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald/20 bg-white text-emerald">
          <CheckIcon className="h-4 w-4" />
        </span>
        <h3 className="text-[13px] font-semibold tracking-[-0.02em] text-charcoal">
          {item.title}
        </h3>
      </div>
      <p className="mt-2 text-[12px] leading-[1.65] text-text-secondary">
        {item.description}
      </p>
    </div>
  );
}

function StepCard({ step, index }) {
  return (
    <li className="rounded-2xl border border-border bg-light/70 p-4 transition-colors duration-200 hover:border-emerald/30 hover:bg-soft-green/10 motion-reduce:transition-none">
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald/20 bg-emerald/10 text-[10px] font-bold tabular-nums text-dark-green">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-3 text-[13px] font-semibold tracking-[-0.02em] text-charcoal">
        {step.title}
      </h3>
      <p className="mt-1.5 text-[12px] leading-[1.65] text-text-secondary">
        {step.description}
      </p>
    </li>
  );
}

function FaqItem({ item }) {
  return (
    <details className="group rounded-xl border border-border bg-white open:border-emerald/30">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 [&::-webkit-details-marker]:hidden">
        <span className="text-[13px] font-semibold leading-[1.5] text-charcoal">
          {item.question}
        </span>
        <span
          aria-hidden="true"
          className="text-[16px] font-light leading-none text-text-muted transition-transform duration-150 group-open:rotate-45 motion-reduce:transition-none"
        >
          +
        </span>
      </summary>
      <p className="border-t border-border px-4 py-3.5 text-[13px] leading-[1.75] text-text-secondary">
        {item.answer}
      </p>
    </details>
  );
}

function RelatedToolCard({ tool }) {
  const Icon = tool.icon;

  return (
    <Link
      href={tool.href}
      className="group flex h-full min-w-0 flex-col rounded-2xl border border-border bg-white p-4 shadow-card transition-all duration-200 ease-out hover:border-emerald/40 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-light text-charcoal transition-colors duration-200 group-hover:border-emerald/30 group-hover:bg-soft-green/30 group-hover:text-emerald motion-reduce:transition-none">
          <Icon className="h-4 w-4" />
        </span>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/10 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-dark-green">
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-emerald" />
          Preview
        </span>
      </div>

      <h3 className="mt-4 text-[13px] font-semibold tracking-[-0.02em] text-charcoal">
        {tool.title}
      </h3>
      <p className="mt-1.5 text-[11.5px] leading-[1.6] text-text-secondary">
        {tool.description}
      </p>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-3.5">
        <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-text-muted transition-colors duration-200 group-hover:text-emerald motion-reduce:transition-none">
          Open page
        </span>
        <ArrowRightIcon className="h-3.5 w-3.5 text-text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-emerald motion-reduce:transition-none" />
      </div>
    </Link>
  );
}

function OnThisPage() {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-[6.5rem] rounded-2xl border border-border bg-white/80 p-4 shadow-card backdrop-blur-sm"
    >
      <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-text-muted">
        On this page
      </p>
      <ul className="mt-3 space-y-1">
        {SECTION_LINKS.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="block rounded-lg py-1.5 text-[10.5px] leading-[1.45] text-text-muted transition-colors duration-150 hover:text-dark-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-4 border-t border-border pt-4">
        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-text-muted">
          Preview status
        </p>
        <p className="mt-1.5 text-[10.5px] leading-[1.6] text-text-secondary">
          Illustrative content. Live checks are not available yet.
        </p>
        <Link
          href="/platform#website-security-check"
          className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-semibold text-dark-green transition-colors duration-150 hover:text-emerald focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 motion-reduce:transition-none"
        >
          Back to Security Check
          <ArrowRightIcon className="h-3 w-3" />
        </Link>
      </div>
    </nav>
  );
}

function MobileOnThisPage() {
  return (
    <details className="group mb-6 rounded-2xl border border-border bg-white shadow-card lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 [&::-webkit-details-marker]:hidden">
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted">
          On this page
        </span>
        <span
          aria-hidden="true"
          className="text-[16px] font-light leading-none text-text-muted transition-transform duration-150 group-open:rotate-45 motion-reduce:transition-none"
        >
          +
        </span>
      </summary>
      <ul className="border-t border-border px-4 py-3">
        {SECTION_LINKS.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="block py-1.5 text-[12px] leading-[1.5] text-text-muted transition-colors duration-150 hover:text-dark-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}

function SecurityTopicHero({ topic, heroVisual }) {
  const Icon = topic.icon;

  return (
    <section
      aria-labelledby="security-topic-heading"
      className="relative isolate overflow-hidden border-b border-border bg-gradient-to-b from-light via-background to-white font-sans selection:bg-emerald selection:text-charcoal"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-[-12rem] h-[30rem] w-[30rem] rounded-full bg-soft-green/40 blur-3xl" />
        <div className="absolute right-[-8rem] top-[-5rem] h-[24rem] w-[24rem] rounded-full bg-emerald/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-40 w-[42rem] -translate-x-1/2 rounded-full bg-emerald/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:px-8 lg:pb-20 lg:pt-12">
        <Breadcrumb title={topic.title} />

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start lg:gap-12">
          <Reveal className="min-w-0">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-dark-green">
              <span aria-hidden="true" className="h-px w-8 bg-emerald" />
              Website Security Check
            </p>

            <h1
              id="security-topic-heading"
              className="mt-4 max-w-[46rem] text-balance text-[2.4rem] font-semibold leading-[1.03] tracking-[-0.055em] text-charcoal sm:text-[3rem] lg:text-[3.35rem]"
            >
              {topic.title}
            </h1>

            <p className="mt-5 max-w-[44rem] text-pretty text-[15px] leading-[1.75] text-text-secondary sm:text-base">
              {topic.heroDescription}
            </p>
            <p className="mt-3 max-w-[44rem] text-pretty text-[13px] leading-[1.7] text-text-muted">
              {topic.heroNote}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#what-is-reviewed"
                className="btn-primary group w-full sm:w-auto"
              >
                See what can be reviewed
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </a>
              <Link
                href="/platform#website-security-check"
                className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-white px-5 text-sm font-semibold tracking-[-0.01em] text-dark-green transition-colors duration-200 hover:border-emerald/40 hover:bg-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none sm:w-auto"
              >
                Back to Security Check
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/10 px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-dark-green">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-emerald"
                />
                Preview only
              </span>
              <span className="text-[11.5px] leading-[1.6] text-text-muted">
                Sample values are used for illustration.
              </span>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-white/70 p-4 shadow-card backdrop-blur-sm">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald/20 bg-emerald/10 text-emerald">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                    At a glance
                  </p>
                  <p className="mt-0.5 truncate text-[12px] font-semibold text-charcoal">
                    {topic.title}
                  </p>
                </div>
              </div>

              <ul className="mt-3 grid gap-2 border-t border-border pt-3 sm:grid-cols-2">
                {topic.heroChecklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[11px] leading-[1.55] text-text-secondary"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-3 rounded-xl border border-border bg-light px-3 py-2 text-[10px] leading-[1.6] text-text-muted">
                Illustrative preview. Sample values are used.
              </p>
            </div>
          </Reveal>

          <Reveal as="aside" delay={120} className="min-w-0">
            {heroVisual}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function WebsiteSecurityTopicPage({
  topic,
  heroVisual,
  examplePanel,
}) {
  const relatedTools = SECURITY_CHECK_TOOLS.filter(
    (tool) => tool.slug !== topic.slug,
  );

  return (
    <>
      <SecurityTopicHero topic={topic} heroVisual={heroVisual} />

      <section className="relative bg-background py-10 font-sans sm:py-12 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-8">
            <div className="hidden lg:block">
              <OnThisPage />
            </div>

            <article className="min-w-0 rounded-3xl border border-border bg-white p-5 shadow-card sm:p-7 lg:p-9">
              <MobileOnThisPage />

              <Reveal
                as="section"
                id="why-it-matters"
                aria-labelledby="why-it-matters-heading"
                className="scroll-mt-28"
              >
                <SectionHeading id="why-it-matters-heading">
                  Why {topic.title} matters
                </SectionHeading>
                <div className="mt-4 space-y-4 sm:mt-5">
                  {topic.why.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className={`max-w-[48rem] ${BODY_TEXT}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                  <BulletList items={topic.why.bullets} />
                  <Callout title={topic.why.callout.title}>
                    {topic.why.callout.body}
                  </Callout>
                </div>
              </Reveal>

              <Reveal
                as="section"
                id="what-is-reviewed"
                aria-labelledby="what-is-reviewed-heading"
                className="mt-10 scroll-mt-28 border-t border-border pt-9 sm:mt-12 sm:pt-10"
              >
                <SectionHeading id="what-is-reviewed-heading">
                  What can be reviewed
                </SectionHeading>
                <div className="mt-4 space-y-5 sm:mt-5">
                  <p className={`max-w-[48rem] ${BODY_TEXT}`}>
                    {topic.review.intro}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {topic.review.items.map((item) => (
                      <ReviewCard key={item.title} item={item} />
                    ))}
                  </div>
                  <p className="text-[11.5px] leading-[1.65] text-text-muted">
                    {topic.review.note}
                  </p>
                </div>
              </Reveal>

              <Reveal
                as="section"
                id="how-it-works"
                aria-labelledby="how-it-works-heading"
                className="mt-10 scroll-mt-28 border-t border-border pt-9 sm:mt-12 sm:pt-10"
              >
                <SectionHeading id="how-it-works-heading">
                  How the analysis works
                </SectionHeading>
                <div className="mt-4 space-y-5 sm:mt-5">
                  <p className={`max-w-[48rem] ${BODY_TEXT}`}>
                    {topic.how.intro}
                  </p>
                  <ol className="grid gap-3 sm:grid-cols-3">
                    {topic.how.steps.map((step, index) => (
                      <StepCard key={step.title} step={step} index={index} />
                    ))}
                  </ol>
                  <Callout>{topic.how.callout}</Callout>
                </div>
              </Reveal>

              <Reveal
                as="section"
                id="illustrative-results"
                aria-labelledby="illustrative-results-heading"
                className="mt-10 scroll-mt-28 border-t border-border pt-9 sm:mt-12 sm:pt-10"
              >
                <SectionHeading id="illustrative-results-heading">
                  Illustrative example results
                </SectionHeading>
                <p className={`mt-4 max-w-[48rem] sm:mt-5 ${BODY_TEXT}`}>
                  {topic.example.intro}
                </p>
                <div className="mt-5">{examplePanel}</div>
              </Reveal>

              <Reveal
                as="section"
                id="faqs"
                aria-labelledby="faqs-heading"
                className="mt-10 scroll-mt-28 border-t border-border pt-9 sm:mt-12 sm:pt-10"
              >
                <SectionHeading id="faqs-heading">FAQs</SectionHeading>
                <div className="mt-4 space-y-2.5 sm:mt-5">
                  {topic.faqs.map((item) => (
                    <FaqItem key={item.question} item={item} />
                  ))}
                </div>
              </Reveal>

              <Reveal
                as="section"
                id="related-tools"
                aria-labelledby="related-tools-heading"
                className="mt-10 scroll-mt-28 border-t border-border pt-9 sm:mt-12 sm:pt-10"
              >
                <SectionHeading id="related-tools-heading">
                  Related Website Security Check tools
                </SectionHeading>
                <p className={`mt-4 max-w-[48rem] sm:mt-5 ${BODY_TEXT}`}>
                  {topic.relatedIntro}
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {relatedTools.map((tool) => (
                    <RelatedToolCard key={tool.title} tool={tool} />
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-emerald/20 bg-soft-green/20 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-dark-green">
                      Website Security Check
                    </p>
                    <p className="mt-1 text-[13px] font-semibold text-charcoal">
                      Explore all four dedicated tools
                    </p>
                    <p className="mt-1 text-[11.5px] leading-[1.6] text-text-secondary">
                      See the other security check pages and their illustrative
                      examples in one place.
                    </p>
                  </div>
                  <Link
                    href="/platform#website-security-check"
                    className="btn-primary group w-full shrink-0 sm:w-auto"
                  >
                    Open Security Check
                    <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
                  </Link>
                </div>
              </Reveal>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
