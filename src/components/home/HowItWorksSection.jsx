import { ArrowRightIcon, RadarIcon } from "@/components/about/AboutIcons";
import HomeSectionBadge from "./HomeSectionBadge";
import { ProductIcon } from "./ProductPreviews";
import "./HowItWorksSection.css";

const STEPS = [
  {
    title: "Choose a Tool",
    description:
      "Select Website Security Check or Asset Discovery based on what you want to examine.",
    preview: "tools",
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

function SearchIcon({ className = "size-4" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className={className}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </svg>
  );
}

function MiniWindow({ children, sample = false }) {
  return (
    <div aria-hidden="true" className="how-light-window relative z-10 w-full max-w-60 overflow-hidden rounded-xl border border-emerald/15 bg-white shadow-card">
      <div className="flex h-6 items-center gap-1 border-b border-border-subtle bg-soft-green/15 px-2.5">
        {[0, 1, 2].map(dot => <span key={dot} className="size-1 rounded-full bg-emerald/40" />)}
        {sample ? <span className="ml-auto text-[8px] font-medium text-text-muted">Sample data</span> : null}
      </div>
      {children}
    </div>
  );
}

function ToolPreview() {
  return (
    <div role="img" aria-label="Illustration of choosing Website Security Check or Asset Discovery" className="how-light-preview">
      <MiniWindow>
        <div className="space-y-2 p-2.5">
          <div className="flex min-h-9 items-center gap-1.5 rounded-lg border border-emerald/20 bg-soft-green/20 px-2 text-emerald-hover">
            <ProductIcon name="shield" className="size-3.5 shrink-0" />
            <span className="min-w-0 flex-1 text-[10px] font-medium leading-4 text-charcoal">Website Security Check</span>
            <span className="size-2 shrink-0 rounded-full border-2 border-emerald-hover" />
          </div>
          <div className="flex min-h-9 items-center gap-1.5 rounded-lg border border-border bg-white px-2 text-text-muted">
            <RadarIcon className="size-3.5 shrink-0" />
            <span className="min-w-0 flex-1 text-[10px] font-medium leading-4 text-text-secondary">Asset Discovery</span>
            <span className="size-2 shrink-0 rounded-full border border-border" />
          </div>
        </div>
      </MiniWindow>
    </div>
  );
}

function DomainPreview() {
  return (
    <div role="img" aria-label="Example target input containing example.com and a search icon" className="how-light-preview">
      <MiniWindow>
        <div className="p-3">
          <div className="flex min-h-11 items-center gap-2 rounded-lg border border-emerald/15 bg-soft-green/20 pl-2.5 pr-1.5">
            <span className="min-w-0 flex-1 font-mono text-[12px] font-medium text-dark-green">example.com</span>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald text-charcoal shadow-sm"><SearchIcon /></span>
          </div>
        </div>
      </MiniWindow>
    </div>
  );
}

const SAMPLE_RESULTS = [
  { label: "SSL/TLS", detail: "Certificate valid", status: "Pass", tone: "pass" },
  { label: "DNS", detail: "DNS records", status: "Pass", tone: "pass" },
  { label: "Security Headers", detail: "CSP header missing", status: "Medium", tone: "warning" },
];

function ResultsPreview() {
  return (
    <div role="img" aria-label="Sample data: SSL/TLS certificate valid, Pass; DNS records, Pass; CSP header missing, Medium" className="how-light-preview">
      <MiniWindow sample>
        <div className="divide-y divide-border-subtle px-2.5 py-1">
          {SAMPLE_RESULTS.map(result => (
            <div key={result.label} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-1.5 py-2">
              <div className="min-w-0">
                <span className="block text-[10px] font-semibold leading-3.5 text-charcoal">{result.label}</span>
                <span className="mt-0.5 block text-[9px] leading-3 text-text-muted">{result.detail}</span>
              </div>
              <span className={`rounded-md px-1.5 py-1 text-[8px] font-medium leading-none ${result.tone === "warning" ? "bg-[var(--status-warning-bg)] text-[var(--status-warning-text)]" : "bg-[var(--status-pass-bg)] text-[var(--status-pass-text)]"}`}>{result.status}</span>
            </div>
          ))}
        </div>
      </MiniWindow>
    </div>
  );
}

const PREVIEWS = { tools: ToolPreview, domain: DomainPreview, results: ResultsPreview };

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="home-how-it-works relative isolate scroll-mt-28 overflow-hidden bg-white py-16 font-sans sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <HomeSectionBadge>How it works</HomeSectionBadge>
          <h2 id="how-it-works-heading" className="mx-auto mt-5 max-w-5xl text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.045em] text-charcoal sm:text-[36px] lg:text-[44px]">
            Get Started in{" "}<span className="text-emerald-hover">Three Simple Steps</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-pretty text-[15px] leading-[1.75] text-text-secondary sm:text-base">
            Choose a tool, enter a supported target, and review the available
            results.
          </p>
        </div>
        <ol className="mt-10 grid auto-rows-fr grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:mt-12 lg:gap-10">
          {STEPS.map(({ title, description, preview }, index) => {
            const Preview = PREVIEWS[preview];
            return (
              <li key={title} className="relative min-w-0">
                <article className="how-light-card flex h-full min-w-0 flex-col rounded-3xl border border-border bg-white p-5 shadow-card sm:p-6 md:p-4 lg:p-6">
                  <span aria-hidden="true" className="inline-flex min-h-8 w-fit items-center justify-center rounded-xl border border-emerald/10 bg-soft-green/45 px-3 text-[14px] font-semibold text-dark-green">0{index + 1}</span>
                  <Preview />
                  <h3 className="mt-5 text-[19px] font-semibold leading-tight tracking-[-0.03em] text-charcoal sm:text-xl md:text-[18px] lg:text-xl">{title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.75] text-text-secondary md:text-[13px] lg:text-[14px]">{description}</p>
                </article>
                {index < STEPS.length - 1 ? <span aria-hidden="true" className="how-light-connector"><ArrowRightIcon className="size-4" /></span> : null}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
