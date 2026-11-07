import Link from "next/link";

import {
  AssetsIcon,
  CertificateIcon,
  CodeIcon,
  CompassIcon,
  DeveloperIcon,
  GlobeIcon,
  NetworkIcon,
  RadarIcon,
  ShieldIcon,
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
  "Review what your deployment makes public.";

const HERO_ITEMS = [
  {
    icon: CertificateIcon,
    title: "TLS & HTTPS",
    detail: "Validity, hostname coverage, and HTTPS.",
  },
  {
    icon: NetworkIcon,
    title: "DNS records",
    detail: "Published records and service targets.",
  },
  {
    icon: CodeIcon,
    title: "HTTP headers",
    detail: "Policies returned in HTTP responses.",
  },
  {
    icon: RadarIcon,
    title: "Application assets",
    detail: "Domains, subdomains, hosts, and services.",
  },
];

const CHALLENGES = [
  {
    title: "Certificates after deployment",
    description:
      "A certificate valid for one hostname may not cover another. Review certificate coverage and HTTPS settings for each public deployment.",
  },
  {
    title: "DNS after routing changes",
    description:
      "A new record or provider can change where application traffic goes. Review the published DNS values alongside your intended configuration.",
  },
  {
    title: "Headers at the public endpoint",
    description:
      "A reverse proxy or hosting layer may add, remove, or override headers. Review the policies returned to browsers, not just the values in your application.",
  },
  {
    title: "Staging and legacy hostnames",
    description:
      "Application subdomains may remain public after a release or migration. Public hostname information can help you identify entries to review with the team.",
  },
  {
    title: "Services beyond the application",
    description:
      "Public hosts may expose services beyond the expected web endpoint. Available port and service information helps you ask whether each exposure is intentional.",
  },
  {
    title: "Configuration review between releases",
    description:
      "Deployment work spans DNS, hosting, certificates, and application settings. A defined review checklist helps keep those responsibilities clear.",
  },
];

const CHECKS = [
  {
    title: "SSL/TLS Analysis",
    description: "Review certificate validity, hostname coverage, and HTTPS behavior for application endpoints.",
    href: "/platform/website-security-check/ssl-tls",
    icon: CertificateIcon,
  },
  {
    title: "DNS Security",
    description: "Understand A, AAAA, CNAME, and other records involved in application routing.",
    href: "/platform/website-security-check/dns-security",
    icon: NetworkIcon,
  },
  {
    title: "Security Headers",
    description:
      "Examine HTTP security policies and whether their values suit the application.",
    href: "/platform/website-security-check/security-headers",
    icon: CodeIcon,
  },
  {
    title: "Email Security",
    description: "Understand SPF, DKIM, and DMARC when your application sends mail using a domain.",
    href: "/platform/website-security-check/email-security",
    icon: MailIcon,
  },
];

const ASSET_CATEGORIES = [
  {
    title: "Subdomain Discovery",
    description:
      "Explore publicly visible application, staging, and service hostnames beneath a domain.",
    href: "/platform/asset-discovery/subdomain-discovery",
    icon: RadarIcon,
  },
  {
    title: "Domain Discovery",
    description:
      "Review domain and DNS information, including related domains where supported.",
    href: "/platform/asset-discovery/domain-discovery",
    icon: GlobeIcon,
  },
  {
    title: "IP & Host Discovery",
    description:
      "Review hostname-to-address relationships and shared public IP addresses.",
    href: "/platform/asset-discovery/ip-host-discovery",
    icon: AssetsIcon,
  },
  {
    title: "Port & Service Discovery",
    description:
      "Review available port and service information for public hosts, where supported.",
    href: "/platform/asset-discovery/port-service-discovery",
    icon: LayersIcon,
  },
];

const WORKFLOW_STEPS = [
  {
    title: "Choose an environment",
    description: "Identify the public domain or hostname for the application you want to review.",
  },
  {
    title: "Review the public settings",
    description:
      "Use the configuration guides and discovery categories to understand the endpoint and its related assets.",
  },
  {
    title: "Plan the follow-up",
    description:
      "Compare the available information with your intended setup and decide what to validate or change.",
  },
];

const USE_CASES = [
  {
    title: "Around a deployment",
    label: "Deployment",
    description:
      "Include certificate coverage, HTTPS behavior, and response headers in the release review.",
  },
  {
    title: "After a routing change",
    label: "DNS or hosting",
    description:
      "Review DNS targets and hostname-to-address relationships after changing providers or routing.",
  },
  {
    title: "When adding an endpoint",
    label: "New domain",
    description:
      "Review the hostname, its certificate coverage, and the public services associated with it.",
  },
  {
    title: "During application maintenance",
    label: "Maintenance",
    description:
      "Revisit browser security policies and domain settings as application requirements change.",
  },
  {
    title: "When reviewing service exposure",
    label: "Exposed services",
    description:
      "Check whether available port and service information matches the public endpoints you expect.",
  },
];

const BENEFITS = [
  {
    title: "Connect names to infrastructure",
    description:
      "Understand how application hostnames relate to public addresses and services.",
    icon: EyeIcon,
  },
  {
    title: "Review configuration by layer",
    description:
      "Work through DNS, certificates, HTTPS, headers, and email authentication as separate review areas.",
    icon: ShieldIcon,
  },
  {
    title: "Investigate routing questions",
    description:
      "Use published domain records to understand where application traffic is directed.",
    icon: NetworkIcon,
  },
  {
    title: "Make follow-up specific",
    description:
      "Turn a configuration concern into a setting or endpoint the responsible team can validate.",
    icon: CompassIcon,
  },
];

const FAQS = [
  {
    question: "What can I review for an application?",
    answer:
      "The capability pages cover DNS, certificates, HTTPS, HTTP security headers, and domain email authentication. Asset Discovery adds public domains, subdomains, host-to-address relationships, and available port and service information.",
  },
  {
    question: "Why review both DNS and HTTPS?",
    answer:
      "DNS records determine where a hostname points. Certificates and HTTPS settings affect how clients connect to it. Reviewing both helps you distinguish routing questions from certificate or connection issues.",
  },
  {
    question: "Can I explore application subdomains?",
    answer:
      "Subdomain Discovery covers publicly visible hostnames beneath a domain and their DNS relationships. Public sources may not reveal every subdomain, and a listed name does not prove ownership or a vulnerability.",
  },
  {
    question: "Does this replace code review or penetration testing?",
    answer:
      "No. Public configuration and asset information do not show how application code behaves. Use code review and authorized security testing for issues beyond these configuration and discovery topics.",
  },
  {
    question: "Will these pages run checks or change my configuration?",
    answer:
      "No. These are informational pages, and capability examples use sample data. They do not run live checks, integrate with your deployment pipeline, or modify your environment.",
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

function DevelopersHero() {
  return (
    <section
      id="developers"
      aria-labelledby="developers-heading"
      className="relative isolate overflow-hidden border-b border-border bg-gradient-to-b from-light via-background to-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="site-light-grid site-light-grid--right" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center xl:grid-cols-[minmax(0,1fr)_24rem] xl:gap-16">
          <div className="min-w-0 max-w-[52rem]">
            <SolutionBreadcrumb current="Developers" />

            <p className="mt-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-dark-green">
              <span aria-hidden="true" className="h-px w-8 bg-emerald" />
              FOR DEVELOPERS
            </p>

            <h1
              id="developers-heading"
              className="mt-4 max-w-[48rem] text-balance text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.055em] text-charcoal sm:text-[3.25rem] lg:text-[3.45rem] xl:text-[3.6rem]"
            >
              Review Security Across Your Applications
            </h1>

            <p className="mt-6 max-w-[44rem] text-pretty text-[15px] leading-[1.75] text-text-secondary sm:text-base">
              Check security configurations and explore internet-facing services
              connected to your applications.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/platform#website-security-check"
                className="btn-primary group w-full sm:w-auto"
              >
                Review Security Configuration
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
              eyebrow="Developer view"
              title="Public configuration at a glance"
              icon={DeveloperIcon}
              items={HERO_ITEMS}
              footer={HERO_CARD_FOOTER}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ChallengesSection() {
  return (
    <section
      id="developer-challenges"
      aria-labelledby="developer-challenges-heading"
      className="scroll-mt-24 bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <SolutionSectionHeading
              id="developer-challenges-heading"
              eyebrow="Deployment challenges"
              title="What can change after deployment"
              description="The public endpoint can differ from a local setup. Review the settings supplied by your application, DNS provider, hosting platform, and proxy."
            />

            <p className="mt-6 max-w-[34rem] border-l-2 border-emerald/30 pl-4 text-[12.5px] leading-[1.75] text-text-muted">
              Review what clients can reach, alongside the configuration you
              intended to publish.
            </p>
          </div>

          <ol className="border-t border-border">
            {CHALLENGES.map((challenge, index) => (
              <li
                key={challenge.title}
                className="grid grid-cols-[2.25rem_1fr] gap-4 border-b border-border py-5 sm:grid-cols-[3rem_1fr] sm:gap-5"
              >
                <span className="pt-0.5 font-mono text-[10px] font-semibold tabular-nums tracking-[0.08em] text-emerald">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[14.5px] font-semibold leading-[1.45] tracking-[-0.01em] text-charcoal">
                    {challenge.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-[1.7] text-text-secondary">
                    {challenge.description}
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

function ChecksSection() {
  return (
    <section
      id="developer-security-checks"
      aria-labelledby="developer-security-checks-heading"
      className="scroll-mt-24 border-y border-border bg-light/60 py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <SolutionSectionHeading
              id="developer-security-checks-heading"
              eyebrow="Security checks"
              title="Review the configuration you publish"
              description="Use each capability guide to understand a different part of application delivery, from DNS routing to browser security policies."
            />

            <p className="mt-5 max-w-[38rem] text-[11.5px] leading-[1.65] text-text-muted">
              Start with the layer involved in your deployment or debugging question.
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

function AssetsSection() {
  return (
    <section
      id="developer-asset-discovery"
      aria-labelledby="developer-asset-discovery-heading"
      className="scroll-mt-24 bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-16">
          <div>
            <SolutionSectionHeading
              id="developer-asset-discovery-heading"
              eyebrow="Asset discovery"
              title="Find the assets around an application"
              description="Explore public subdomains, domain information, hosts, and services associated with your targets. Use those relationships to understand which parts of an application environment may be visible."
            />

            <p className="mt-5 max-w-[42rem] text-[13px] leading-[1.75] text-text-secondary">
              A public asset is not automatically a vulnerability. Confirm its
              purpose and ownership before deciding on follow-up.
            </p>

            <p className="mt-4 max-w-[42rem] text-[11.5px] leading-[1.65] text-text-muted">
              Follow the relationships from application names to hosts and
              available service information.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-light/60 p-5 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">
              Asset categories
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

function WorkflowSection() {
  return (
    <section
      id="developer-workflow"
      aria-labelledby="developer-workflow-heading"
      className="scroll-mt-24 bg-charcoal py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="developer-workflow-heading"
          eyebrow="A practical workflow"
          title="A review path for deployments"
          description="Start with a public endpoint, understand its configuration, and decide what needs validation in your own environment."
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
              <h3 className="mt-4 text-[1.5rem] font-semibold leading-[1.15] tracking-[-0.03em] text-white">
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
      id="developer-use-cases"
      aria-labelledby="developer-use-cases-heading"
      className="scroll-mt-24 border-y border-border bg-light/60 py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="developer-use-cases-heading"
          eyebrow="When to use it"
          title="Fit review into development work"
          description="Revisit public settings when a release, routing change, or new endpoint affects how users reach an application."
        />

        <ul className="mt-10 grid gap-0 sm:grid-cols-2">
          <li className="border-t border-border py-6 sm:col-span-2">
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
              className={`border-t border-border py-5 ${
                index % 2 === 0 ? "sm:pr-6" : "sm:border-l sm:pl-6"
              }`}
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
      id="developer-benefits"
      aria-labelledby="developer-benefits-heading"
      className="scroll-mt-24 bg-soft-green/25 py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="developer-benefits-heading"
          eyebrow="Benefits"
          title="Make configuration reviews more useful"
          description="Bring a specific domain, setting, or service into the discussion before deciding on a change."
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
                <h3 className="mt-4 text-[14px] font-semibold leading-[1.45] text-charcoal">
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
      id="developer-faqs"
      aria-labelledby="developer-faqs-heading"
      className="scroll-mt-24 bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="developer-faqs-heading"
          eyebrow="FAQs"
          title="Developer questions"
          description="Scope, limitations, and how configuration review fits with other security work."
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

export default function DevelopersPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-emerald selection:text-charcoal">
      <DevelopersHero />
      <ChallengesSection />
      <ChecksSection />
      <AssetsSection />
      <WorkflowSection />
      <UseCasesSection />
      <BenefitsSection />
      <FaqSection />

      <SolutionClosingCta
        layout="split"
        id="developers-cta"
        title="Review your next deployment"
        description="Start with the configuration guides, then explore the public assets associated with your application."
        primary={{
          label: "Review Security Configuration",
          href: "/platform#website-security-check",
        }}
      />
    </main>
  );
}
