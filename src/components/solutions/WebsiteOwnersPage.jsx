import Link from "next/link";

import {
  AssetsIcon,
  CertificateIcon,
  CodeIcon,
  CompassIcon,
  GlobeIcon,
  NetworkIcon,
  RadarIcon,
  ShieldIcon,
  UserIcon,
} from "../about/AboutIcons";
import {
  ArrowRightIcon,
  EyeIcon,
  LayersIcon,
  MailIcon,
} from "../pricing/PricingIcons";
import SolutionBreadcrumb from "./SolutionBreadcrumb";
import SolutionClosingCta from "./SolutionClosingCta";
import SolutionHeroCard from "./SolutionHeroCard";
import SolutionSectionHeading from "./SolutionSectionHeading";

const HERO_CARD_FOOTER =
  "A clearer view of your public footprint.";

const HERO_ITEMS = [
  {
    icon: CertificateIcon,
    title: "SSL/TLS",
    detail: "Certificate and HTTPS context.",
  },
  {
    icon: NetworkIcon,
    title: "DNS",
    detail: "Records that route your domain.",
  },
  {
    icon: CodeIcon,
    title: "Security headers",
    detail: "Browser protections and policy.",
  },
  {
    icon: MailIcon,
    title: "Email security",
    detail: "SPF, DKIM, and DMARC context.",
  },
  {
    icon: RadarIcon,
    title: "Asset discovery",
    detail: "Domains, subdomains, hosts, and services.",
  },
];

const CONCERNS = [
  {
    title: "SSL/TLS configuration",
    description:
      "Certificates and TLS settings influence how browsers establish a secure connection. Expired certificates, hostname mismatches, or incomplete configuration can interrupt access and weaken trust.",
  },
  {
    title: "DNS configuration",
    description:
      "DNS records route traffic and support services such as email. Missing, conflicting, or unintended records can create security and deliverability gaps.",
  },
  {
    title: "Security headers",
    description:
      "Headers such as HSTS, CSP, and X-Frame-Options help browsers apply protections. Missing or weak values can leave avoidable exposure.",
  },
  {
    title: "Email security",
    description:
      "SPF, DKIM, and DMARC help receiving mail servers verify who sent a message. Misconfiguration can affect deliverability and make impersonation easier.",
  },
  {
    title: "Exposed digital assets",
    description:
      "Public hostnames and internet-facing services expand your external footprint. A clear inventory helps you identify assets that may need review.",
  },
];

const CHECKS = [
  {
    title: "SSL/TLS Analysis",
    description:
      "Review certificate, HTTPS, and TLS configuration context in one place.",
    href: "/platform/website-security-check/ssl-tls",
    icon: CertificateIcon,
  },
  {
    title: "DNS Security",
    description:
      "Understand DNS records, resolution context, and the signals that support a healthy domain.",
    href: "/platform/website-security-check/dns-security",
    icon: NetworkIcon,
  },
  {
    title: "Security Headers",
    description:
      "Understand the browser-facing HTTP headers that help protect a site and the context around them.",
    href: "/platform/website-security-check/security-headers",
    icon: CodeIcon,
  },
  {
    title: "Email Security",
    description:
      "Review SPF, DKIM, and DMARC context for the domain used to send email.",
    href: "/platform/website-security-check/email-security",
    icon: MailIcon,
  },
];

const ASSET_CATEGORIES = [
  {
    title: "Domain Discovery",
    description:
      "See the primary domains that make up your public website footprint.",
    href: "/platform/asset-discovery/domain-discovery",
    icon: GlobeIcon,
  },
  {
    title: "Subdomain Discovery",
    description:
      "Understand public subdomains that may sit alongside your main site.",
    href: "/platform/asset-discovery/subdomain-discovery",
    icon: RadarIcon,
  },
  {
    title: "IP & Host Discovery",
    description:
      "Review the IP addresses and hosts connected to your public environment.",
    href: "/platform/asset-discovery/ip-host-discovery",
    icon: AssetsIcon,
  },
  {
    title: "Port & Service Discovery",
    description:
      "Explore internet-facing ports and services that may need review.",
    href: "/platform/asset-discovery/port-service-discovery",
    icon: LayersIcon,
  },
];

const WORKFLOW_STEPS = [
  {
    title: "Identify your domain",
    description:
      "Choose the domain you want to understand. It gives the review a clear starting point.",
  },
  {
    title: "Explore available security checks",
    description:
      "Explore the security-check pages and the Asset Discovery overview in one connected structure.",
  },
  {
    title: "Understand the available findings",
    description:
      "Use plain-language explanations and context to decide what to review, change, or ask your provider about.",
  },
];

const USE_CASES = [
  {
    title: "Before launching a website.",
    label: "Launch",
    description:
      "Review the public security signals and asset context you plan to launch with.",
  },
  {
    title: "After domain or hosting changes.",
    label: "Domain or hosting",
    description:
      "Check whether a change has altered the context you expect to see for your domain, including migrations to a new provider.",
  },
  {
    title: "During regular website reviews.",
    label: "Regular review",
    description:
      "Use a consistent structure to revisit certificates, DNS, headers, email settings, and public assets.",
  },
  {
    title: "When checking a new website.",
    label: "New website",
    description:
      "Use the same review path when you take on a new site or want a clearer view of one you already own.",
  },
];

const BENEFITS = [
  {
    title: "Better visibility into your website security.",
    description:
      "See how certificates, DNS, headers, email settings, and public assets fit together.",
    icon: EyeIcon,
  },
  {
    title: "Clearer security information.",
    description:
      "Use plain-language explanations and context instead of sorting through technical output alone.",
    icon: ShieldIcon,
  },
  {
    title: "Awareness of configuration areas that may need attention.",
    description:
      "Spot missing or inconsistent details that may deserve a closer look.",
    icon: CodeIcon,
  },
  {
    title: "More informed security decisions.",
    description:
      "Use the available context to decide what to review, change, or ask your provider about.",
    icon: CompassIcon,
  },
];

const FAQS = [
  {
    question: "Why should website owners check website security?",
    answer:
      "Website security depends on many configuration details. Reviewing them helps you spot expired certificates, incomplete DNS records, weak headers, email configuration gaps, and public assets that may need attention.",
  },
  {
    question: "What can Securelyze help me review?",
    answer:
      "Securelyze brings together website security check pages for SSL/TLS, DNS, security headers, and email security, plus an Asset Discovery overview for public domains, subdomains, hosts, and services.",
  },
  {
    question: "Do I need technical knowledge to use Securelyze?",
    answer:
      "The pages are written to explain technical topics in plain language. You can start with the overview and follow the checks that are relevant to your site, then share the context with a developer or hosting provider if needed.",
  },
  {
    question: "Does Securelyze perform live security scans?",
    answer:
      "No. Securelyze does not currently perform live security scans or automated monitoring. You can use the available security checks and Asset Discovery pages to review configuration context and your public footprint.",
  },
  {
    question: "How often should I review my website security?",
    answer:
      "Review security context before major changes and periodically afterward. Common times include launches, DNS or hosting changes, and migrations. The right cadence depends on how often your site changes.",
  },
];

function FaqItem({ item }) {
  return (
    <details className="group rounded-xl border border-border bg-white open:border-emerald/30">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
        <span className="text-[13.5px] font-semibold leading-[1.5] text-charcoal">
          {item.question}
        </span>
        <span
          aria-hidden="true"
          className="text-[18px] font-light leading-none text-text-muted group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <p className="border-t border-border px-5 py-4 text-[13px] leading-[1.75] text-text-secondary">
        {item.answer}
      </p>
    </details>
  );
}

function WebsiteOwnersHero() {
  return (
    <section
      id="website-owners"
      aria-labelledby="website-owners-heading"
      className="relative isolate overflow-hidden border-b border-border bg-gradient-to-b from-light via-background to-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center xl:grid-cols-[minmax(0,1fr)_24rem] xl:gap-16">
          <div className="min-w-0 max-w-[52rem]">
            <SolutionBreadcrumb current="Website Owners" />

            <p className="mt-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-dark-green">
              <span aria-hidden="true" className="h-px w-8 bg-emerald" />
              SOLUTIONS FOR WEBSITE OWNERS
            </p>

            <h1
              id="website-owners-heading"
              className="mt-4 max-w-[48rem] text-balance text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.055em] text-charcoal sm:text-[3.25rem] lg:text-[3.45rem] xl:text-[3.6rem]"
            >
              Website Security, Made Clear for Website Owners
            </h1>

            <p className="mt-6 max-w-[44rem] text-pretty text-[15px] leading-[1.75] text-text-secondary sm:text-base">
              Securelyze helps website owners understand the security signals
              and public assets that shape their website’s exposure. Explore the
              checks that matter, see how they connect, and use plain-language
              context to decide what to review next.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/platform#website-security-check"
                className="btn-primary group w-full sm:w-auto"
              >
                Explore Website Security Check
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/platform/asset-discovery"
                className="btn-outline group w-full sm:w-auto"
              >
                Explore Asset Discovery
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="min-w-0">
            <SolutionHeroCard
              eyebrow="Website owner view"
              title="A practical review path"
              icon={UserIcon}
              items={HERO_ITEMS}
              footer={HERO_CARD_FOOTER}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CommonConcernsSection() {
  return (
    <section
      id="common-security-concerns"
      aria-labelledby="common-concerns-heading"
      className="scroll-mt-24 bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <SolutionSectionHeading
              id="common-concerns-heading"
              eyebrow="Common concerns"
              title="Common Security Concerns for Website Owners"
              description="Most website security issues are not dramatic. They often show up as configuration details that are easy to overlook until something breaks or a review brings them into focus."
            />

            <p className="mt-6 max-w-[34rem] border-l-2 border-emerald/30 pl-4 text-[12.5px] leading-[1.75] text-text-muted">
              A clear review starts with the details that are easiest to
              overlook.
            </p>
          </div>

          <ol className="border-t border-border">
            {CONCERNS.map((concern, index) => (
              <li
                key={concern.title}
                className="grid grid-cols-[2.25rem_1fr] gap-4 border-b border-border py-5 sm:grid-cols-[3rem_1fr] sm:gap-5"
              >
                <span className="pt-0.5 font-mono text-[10px] font-semibold tabular-nums tracking-[0.08em] text-emerald">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[14.5px] font-semibold leading-[1.45] tracking-[-0.01em] text-charcoal">
                    {concern.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-[1.7] text-text-secondary">
                    {concern.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function WebsiteSecurityChecksSection() {
  return (
    <section
      id="what-you-can-check"
      aria-labelledby="what-you-can-check-heading"
      className="scroll-mt-24 border-y border-border bg-light/60 py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <SolutionSectionHeading
              id="what-you-can-check-heading"
              eyebrow="What you can check"
              title="Website Security Checks"
              description="Explore the security checks available through Securelyze and see how each area fits into a broader website security view."
            />

            <p className="mt-5 max-w-[38rem] text-[11.5px] leading-[1.65] text-text-muted">
              Explore each check to understand the security context it covers.
            </p>
          </div>

          <div className="border-t border-border">
            {CHECKS.map((check) => {
              const Icon = check.icon;

              return (
                <Link
                  key={check.title}
                  href={check.href}
                  className="group grid grid-cols-[auto_1fr_auto] items-start gap-4 border-b border-border py-5 hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus-ring sm:gap-5"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald/20 bg-white text-emerald group-hover:border-emerald/40"
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[14px] font-semibold leading-[1.45] text-charcoal">
                      {check.title}
                    </span>
                    <span className="mt-1 block text-[12.5px] leading-[1.7] text-text-secondary">
                      {check.description}
                    </span>
                  </span>
                  <ArrowRightIcon className="mt-1 h-4 w-4 shrink-0 text-text-muted group-hover:text-emerald" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExposureSection() {
  return (
    <section
      id="website-exposure"
      aria-labelledby="website-exposure-heading"
      className="scroll-mt-24 bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-16">
          <div>
            <SolutionSectionHeading
              id="website-exposure-heading"
              eyebrow="Asset discovery"
              title="Understand Your Website's Exposure"
              description="Asset Discovery brings your public domains, subdomains, hosts, and internet-facing services into one connected view. It helps you see the external footprint around your website."
            />

            <p className="mt-5 max-w-[42rem] text-[13px] leading-[1.75] text-text-secondary">
              Visibility into these assets helps you understand what is
              publicly reachable and how the pieces relate to the website you
              own.
            </p>

            <p className="mt-4 max-w-[42rem] text-[11.5px] leading-[1.65] text-text-muted">
              Use these categories together to understand the public surface
              around your website.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-light/60 p-5 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">
              Your public footprint
            </p>

            <ul className="mt-4 divide-y divide-border-subtle">
              {ASSET_CATEGORIES.map((asset) => {
                const Icon = asset.icon;

                return (
                  <li key={asset.title}>
                    <Link
                      href={asset.href}
                      className="group flex items-start gap-4 py-4 hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus-ring"
                    >
                      <span
                        aria-hidden="true"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald/20 bg-white text-emerald group-hover:border-emerald/40"
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[13.5px] font-semibold leading-[1.4] text-charcoal">
                          {asset.title}
                        </span>
                        <span className="mt-1 block text-[11.5px] leading-[1.65] text-text-muted">
                          {asset.description}
                        </span>
                      </span>
                      <ArrowRightIcon className="mt-1 h-4 w-4 shrink-0 text-text-muted group-hover:text-emerald" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/platform/asset-discovery"
              className="group mt-4 inline-flex items-center gap-2 border-t border-border pt-4 text-[12px] font-semibold text-dark-green hover:text-emerald focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2"
            >
              Explore Asset Discovery
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowSecurelyzeHelpsSection() {
  return (
    <section
      id="how-securelyze-helps"
      aria-labelledby="how-securelyze-helps-heading"
      className="scroll-mt-24 bg-charcoal py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="how-securelyze-helps-heading"
          eyebrow="How it works"
          title="How Securelyze Helps"
          description="A simple structure helps you move from a domain to a clearer view of the security details and public assets that may need attention."
          tone="dark"
        />

        <ol className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-0">
          {WORKFLOW_STEPS.map((step, index) => (
            <li
              key={step.title}
              className={`lg:px-8 ${
                index > 0
                  ? "border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pt-0"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-soft-green">
                  Step {index + 1}
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
              </div>
              <h3 className="mt-4 text-[1.5rem] font-semibold leading-[1.15] tracking-[-0.03em] text-white lg:min-h-[2.3em]">
                {step.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.75] text-white/65">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}

function UseCasesSection() {
  const [primaryUseCase, ...otherUseCases] = USE_CASES;

  return (
    <section
      id="website-owner-use-cases"
      aria-labelledby="use-cases-heading"
      className="scroll-mt-24 border-y border-border bg-light/60 py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="use-cases-heading"
          eyebrow="When to use it"
          title="When Website Owners Can Use Securelyze"
          description="Use Securelyze as a starting point at the moments when a clearer view of website security and public assets is most useful."
        />

        <ul className="mt-10 grid gap-0 lg:grid-cols-3">
          <li className="border-t border-border py-6 lg:col-span-3">
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-text-muted">
              01 / {primaryUseCase.label}
            </p>
            <h3 className="mt-2 max-w-[42rem] text-[1.6rem] font-semibold leading-[1.2] tracking-[-0.03em] text-charcoal sm:text-[1.8rem]">
              {primaryUseCase.title}
            </h3>
            <p className="mt-2 max-w-[46rem] text-[13px] leading-[1.75] text-text-secondary">
              {primaryUseCase.description}
            </p>
          </li>

          {otherUseCases.map((useCase, index) => (
            <li
              key={useCase.title}
              className={`border-t border-border py-5 lg:px-6 ${
                index === 0 ? "lg:pl-0" : "lg:border-l lg:pl-6"
              } ${index === otherUseCases.length - 1 ? "lg:pr-0" : ""}`}
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                0{index + 2} / {useCase.label}
              </p>
              <h3 className="mt-1.5 text-[14px] font-semibold leading-[1.45] text-charcoal">
                {useCase.title}
              </h3>
              <p className="mt-1.5 text-[12.5px] leading-[1.7] text-text-secondary">
                {useCase.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section
      id="benefits"
      aria-labelledby="website-owners-benefits-heading"
      className="scroll-mt-24 bg-soft-green/25 py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="website-owners-benefits-heading"
          eyebrow="Benefits"
          title="Benefits for Website Owners"
          description="Securelyze is designed to make website security information easier to approach, understand, and act on."
          align="center"
        />

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <li
                key={benefit.title}
                className={`lg:px-6 ${
                  index > 0 ? "lg:border-l lg:border-emerald/15" : "lg:pl-0"
                } ${index === BENEFITS.length - 1 ? "lg:pr-0" : ""}`}
              >
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald/20 bg-white text-emerald"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[14px] font-semibold leading-[1.45] text-charcoal lg:min-h-[2.9em]">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-[1.7] text-text-secondary">
                  {benefit.description}
                </p>
              </li>
            );
          })}
        </ul>

      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-heading"
      className="scroll-mt-24 bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="faqs-heading"
          eyebrow="FAQs"
          title="Questions Website Owners Ask"
          description="Short answers to the questions that come up most often when starting a website security review."
          align="center"
        />

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {FAQS.map((item) => (
            <FaqItem key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function WebsiteOwnersPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-emerald selection:text-charcoal">
      <WebsiteOwnersHero />
      <CommonConcernsSection />
      <WebsiteSecurityChecksSection />
      <ExposureSection />
      <HowSecurelyzeHelpsSection />
      <UseCasesSection />
      <BenefitsSection />
      <FaqSection />

      <SolutionClosingCta
        id="website-owners-cta"
        title="Take a Clearer Look at Your Website Security"
        description="Start with the Website Security Check overview, then explore the checks and asset context that are most relevant to your site."
        primary={{
          label: "Explore Website Security Tools",
          href: "/platform#website-security-check",
        }}
        secondary={{
          label: "Explore Asset Discovery",
          href: "/platform/asset-discovery",
        }}
      />
    </main>
  );
}
