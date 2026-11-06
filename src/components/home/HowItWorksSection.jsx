import Reveal from "@/components/platform/Reveal";

const STEPS = [
  {
    title: "Choose a Tool",
    description:
      "Select Website Security Check or Asset Discovery based on what you want to examine.",
    preview: "code",
  },
  {
    title: "Enter Your Target",
    description:
      "Enter a domain or another supported target to begin your check.",
    preview: "domain",
  },
  {
    title: "Review Your Results",
    description:
      "Explore the findings, understand the security information, and identify what may need further review.",
    preview: "results",
  },
];

const SAMPLE_RESULTS = [
  { label: "dev.example.com exposed", status: "High", tone: "high" },
  { label: "CSP header missing", status: "Medium", tone: "warning" },
  { label: "Certificate valid", status: "Pass", tone: "pass" },
];

const STATUS_CLASSES = {
  high: "bg-[var(--status-high-bg)] text-[var(--status-high-text)]",
  warning: "bg-[var(--status-warning-bg)] text-[var(--status-warning-text)]",
  pass: "bg-[var(--status-pass-bg)] text-[var(--status-pass-text)]",
};

const PREVIEW_CLASSES =
  "mb-3.5 flex h-22 min-w-0 items-center justify-center rounded-xl bg-charcoal md:h-32 lg:h-22";

function CodePreview() {
  return (
    <div
      role="img"
      aria-label="Example one-time email code: 481926"
      className={`${PREVIEW_CLASSES} gap-1.5 px-2.5 md:gap-1 lg:gap-1.5`}
    >
      {[4, 8, 1, 9, 2, 6].map((digit, index) => (
        <span
          key={index}
          aria-hidden="true"
          className="flex h-9 w-7 shrink-0 items-center justify-center rounded-md border border-emerald-light bg-[var(--office-bg)] font-mono text-base text-[var(--office-text)] md:w-6 lg:w-7"
        >
          <span className="how-otp-digit" style={{ animationDelay: `${index * 0.45}s` }}>
            {digit}
          </span>
        </span>
      ))}
    </div>
  );
}

function DomainPreview() {
  return (
    <div role="img" aria-label="Example domain: example.com" className={PREVIEW_CLASSES}>
      <div aria-hidden="true" className="rounded-lg border border-emerald-light bg-[var(--office-bg)] px-3.5 py-2.5 font-mono text-[13px] text-[var(--office-text)]">
        <span className="how-domain-type">example.com</span>
      </div>
    </div>
  );
}

function ResultsPreview() {
  return (
    <div
      role="img"
      aria-label="Sample results: dev.example.com exposed, High; CSP header missing, Medium; Certificate valid, Pass."
      className={`${PREVIEW_CLASSES} flex-col gap-1.5 px-3.5 py-2.5 text-xs leading-[1.4] text-[var(--office-text)]`}
    >
      {SAMPLE_RESULTS.map(({ label, status, tone }, index) => (
        <div
          key={label}
          aria-hidden="true"
          className="how-result-row grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-1.5"
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          <span className="min-w-0 [overflow-wrap:anywhere]">{label}</span>
          <span className={`shrink-0 rounded-sm px-2 py-0.5 font-mono text-[11px] leading-none ${STATUS_CLASSES[tone]}`}>
            {status}
          </span>
        </div>
      ))}
    </div>
  );
}

const PREVIEWS = { code: CodePreview, domain: DomainPreview, results: ResultsPreview };

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="scroll-mt-28 bg-white py-10 font-sans sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="inline-flex rounded-full border border-soft-green bg-soft-green/30 px-3 py-1.5 text-xs font-medium text-emerald-hover">
          How it works
        </p>
        <h2 id="how-it-works-heading" className="heading-2 mt-3 max-w-3xl text-balance">
          Get Started in Three Simple Steps
        </h2>
        <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-text-secondary sm:text-base">
          Choose a tool, enter a supported target, and review the available
          results.
        </p>
        <ol className="mt-6 grid grid-cols-1 gap-3.5 md:grid-cols-3 lg:mt-8">
          {STEPS.map(({ title, description, preview }, index) => {
            const Preview = PREVIEWS[preview];

            return (
              <li key={title} className="min-w-0">
                <Reveal delay={index * 90} className="h-full">
                  <article className="h-full min-w-0 rounded-card border border-border bg-surface p-[18px] transition-[transform,border-color,box-shadow] duration-250 hover:border-emerald hover:shadow-[var(--shadow-card-ring)] motion-safe:hover:-translate-y-1.5 motion-reduce:transition-none">
                    <Preview />
                    <div className="flex items-center gap-2.5">
                      <span aria-hidden="true" className={`how-step how-step--${index + 1} flex size-7.5 shrink-0 items-center justify-center rounded-full bg-border text-[13px] font-medium text-text-secondary`}>
                        {index + 1}
                      </span>
                      <h3 className="text-base font-medium leading-snug text-charcoal">{title}</h3>
                    </div>
                    <p className="mt-1.5 text-[13px] leading-[1.6] text-text-secondary">{description}</p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
