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
  "A clear starting point for external visibility.";

const HERO_ITEMS = [
  {
    icon: GlobeIcon,
    title: "Domains",
    detail: "Primary web properties.",
  },
  {
    icon: RadarIcon,
    title: "Subdomains",
    detail: "Public hostnames and hierarchy.",
  },
  {
    icon: AssetsIcon,
    title: "Hosts & services",
    detail: "Internet-facing endpoints.",
  },
  {
    icon: ShieldIcon,
    title: "Security context",
    detail: "Checks connected to the footprint.",
  },
];

const CHALLENGES = [
  {
    title: "Maintaining visibility across domains and subdomains",
    description:
      "Public hostnames can accumulate across teams, campaigns, and environments. Without a shared inventory, parts of the footprint can fall outside a routine review.",
  },
  {
    title: "Keeping track of external-facing IP addresses and hosts",
    description:
      "Hosts and IP addresses may change as infrastructure evolves. Keeping them connected to the domains they support makes the external surface easier to understand.",
  },
  {
    title: "Understanding exposed ports and services",
    description:
      "Internet-facing ports and services may exist alongside the applications you intended to expose. A clear view helps teams identify what is publicly reachable.",
  },
  {
    title: "Reviewing website security configurations across multiple assets",
    description:
      "Certificates, DNS records, and headers can differ across properties. Reviewing each asset with consistent context helps teams avoid gaps.",
  },
  {
    title: "Identifying overlooked or forgotten digital assets",
    description:
      "Legacy domains, new subdomains, and temporary hosts can remain public after a project changes. Periodic visibility reviews help bring them back into scope.",
  },
  {
    title: "Organizing security information for regular reviews",
    description:
      "Asset and configuration details are often spread across tools. A connected review path helps teams keep context organized for the next assessment.",
  },
];

const CHECKS = [
  {
    title: "SSL/TLS Analysis",
    description: "Review certificate and HTTPS configuration information.",
    href: "/platform/website-security-check/ssl-tls",
    icon: CertificateIcon,
  },
  {
    title: "DNS Security",
    description: "Understand DNS records and domain configuration.",
    href: "/platform/website-security-check/dns-security",
    icon: NetworkIcon,
  },
  {
    title: "Security Headers",
    description: "Review browser-facing security header configuration.",
    href: "/platform/website-security-check/security-headers",
    icon: CodeIcon,
  },
  {
    title: "Email Security",
    description: "Understand SPF, DKIM and DMARC configuration.",
    href: "/platform/website-security-check/email-security",
    icon: MailIcon,
  },
];

const ASSET_CATEGORIES = [
  {
    title: "Domain Discovery",
    description:
      "Understand the primary domains that shape an organization's public footprint.",
    href: "/platform/asset-discovery/domain-discovery",
    icon: GlobeIcon,
  },
  {
    title: "Subdomain Discovery",
    description:
      "Review how public subdomains and hostnames connect to a domain.",
    href: "/platform/asset-discovery/subdomain-discovery",
    icon: RadarIcon,
  },
  {
    title: "IP & Host Discovery",
    description:
      "Explore how IP addresses and hosts fit into the external environment.",
    href: "/platform/asset-discovery/ip-host-discovery",
    icon: AssetsIcon,
  },
  {
    title: "Port & Service Discovery",
    description:
      "Review how internet-facing ports and services appear in the asset view.",
    href: "/platform/asset-discovery/port-service-discovery",
    icon: LayersIcon,
  },
];

const WORKFLOW_STEPS = [
  {
    title: "Discover Assets",
    description:
      "Explore domains, subdomains, IPs, hosts and available service information.",
  },
  {
    title: "Review Security Configuration",
    description:
      "Explore relevant SSL/TLS, DNS, security headers and email security information.",
  },
  {
    title: "Understand and Prioritize Reviews",
    description:
      "Use the available information to identify assets and configuration areas that may need further investigation.",
  },
];

const USE_CASES = [
  {
    title: "Reviewing an organization's external-facing assets.",
    label: "External assets",
    description:
      "Start with the domains, subdomains, hosts, and services that shape the external surface.",
  },
  {
    title: "Reviewing newly added domains and subdomains.",
    label: "New domains",
    description:
      "Review the public surface connected to a new domain or subdomain as it joins the environment.",
  },
  {
    title: "Reviewing website configuration after infrastructure changes.",
    label: "Infrastructure change",
    description:
      "Revisit certificate, DNS, header, and asset context when hosting or routing changes.",
  },
  {
    title: "Understanding exposed services.",
    label: "Exposed services",
    description:
      "Explore the hosts, ports, and services that make up the external-facing environment.",
  },
  {
    title: "Conducting periodic reviews or preparing for a deeper assessment.",
    label: "Periodic review",
    description:
      "Use a consistent review path to revisit asset and configuration context before a broader security assessment.",
  },
];

const BENEFITS = [
  {
    title: "Better visibility into external-facing assets.",
    description:
      "Understand the domains, subdomains, hosts, ports, and services that shape the public surface.",
    icon: EyeIcon,
  },
  {
    title: "Easier access to domain and host information.",
    description:
      "Find the domain and host context that explains how the external environment is organized.",
    icon: NetworkIcon,
  },
  {
    title: "A clearer view of available website security checks.",
    description:
      "Review SSL/TLS, DNS, security header, and email security context in one place.",
    icon: ShieldIcon,
  },
  {
    title: "More organized information for security reviews.",
    description:
      "Keep asset and configuration details organized, with a clearer view of areas that may need further investigation.",
    icon: CompassIcon,
  },
];

const FAQS = [
  {
    question: "What asset discovery information can Security Teams explore?",
    answer:
      "Security Teams can explore Domain Discovery, Subdomain Discovery, IP & Host Discovery, and Port & Service Discovery to understand how public domains, subdomains, hosts, IP addresses, ports, and services fit together.",
  },
  {
    question: "Can Securelyze help identify subdomains and hosts?",
    answer:
      "Yes. Subdomain Discovery and IP & Host Discovery explain how public subdomains, hosts, and IP addresses fit into the external-facing environment.",
  },
  {
    question: "Can teams review SSL/TLS and DNS configuration?",
    answer:
      "Yes. SSL/TLS Analysis and DNS Security explain certificate, HTTPS, DNS record, and domain configuration context.",
  },
  {
    question: "Can Securelyze identify exposed ports and services?",
    answer:
      "Yes. Port & Service Discovery explains how internet-facing ports and services can be reviewed in the asset view.",
  },
  {
    question: "Does Securelyze provide continuous attack surface monitoring?",
    answer:
      "No. Securelyze does not currently provide continuous attack surface monitoring or automated change detection. You can use the available Asset Discovery and Website Security Check pages to review asset and configuration context.",
  },
  {
    question: "Does Securelyze automatically detect and fix vulnerabilities?",
    answer:
      "No. Securelyze does not automatically detect or fix vulnerabilities, and it does not provide vulnerability management or automatic remediation. You can use the available pages to review asset and configuration information and decide what may need further investigation.",
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

function SecurityTeamsHero() {
  return (
    <section
      id="security-teams"
      aria-labelledby="security-teams-heading"
      className="relative isolate overflow-hidden border-b border-border bg-gradient-to-b from-light via-background to-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center xl:grid-cols-[minmax(0,1fr)_24rem] xl:gap-16">
          <div className="min-w-0 max-w-[52rem]">
            <SolutionBreadcrumb current="Security Teams" />

            <p className="mt-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-dark-green">
              <span aria-hidden="true" className="h-px w-8 bg-emerald" />
              SOLUTIONS FOR SECURITY TEAMS
            </p>

            <h1
              id="security-teams-heading"
              className="mt-4 max-w-[48rem] text-balance text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.055em] text-charcoal sm:text-[3.25rem] lg:text-[3.45rem] xl:text-[3.6rem]"
            >
              Clearer Visibility Across Your Digital Attack Surface
            </h1>

            <p className="mt-6 max-w-[44rem] text-pretty text-[15px] leading-[1.75] text-text-secondary sm:text-base">
              Understand your external-facing digital assets and review website
              security configurations with a more organized approach to security
              visibility.
            </p>

            <p className="mt-4 max-w-[44rem] text-pretty text-[12.5px] leading-[1.7] text-text-muted">
              See how asset context and website security details fit together in
              one review path.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/platform/asset-discovery"
                className="btn-primary group w-full sm:w-auto"
              >
                Explore Asset Discovery
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/platform#website-security-check"
                className="btn-outline group w-full sm:w-auto"
              >
                Explore Security Checks
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="min-w-0">
            <SolutionHeroCard
              eyebrow="Security team view"
              title="Map the public surface"
              icon={ShieldIcon}
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
      id="security-team-challenges"
      aria-labelledby="security-team-challenges-heading"
      className="scroll-mt-24 bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <SolutionSectionHeading
              id="security-team-challenges-heading"
              eyebrow="Where visibility gets difficult"
              title="Security Challenges for Security Teams"
              description="External assets and configuration details change across teams and environments. Keeping the public surface visible is an ongoing part of a security review."
            />

            <p className="mt-6 max-w-[34rem] border-l-2 border-emerald/30 pl-4 text-[12.5px] leading-[1.75] text-text-muted">
              A connected view helps teams keep asset context organized before
              it is needed for a review.
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
      id="security-team-security-checks"
      aria-labelledby="security-team-security-checks-heading"
      className="scroll-mt-24 border-y border-border bg-light/60 py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <SolutionSectionHeading
              id="security-team-security-checks-heading"
              eyebrow="Security checks"
              title="Security Checks Teams Can Explore"
              description="Review the public configuration details behind the assets in your external footprint."
            />

            <p className="mt-5 max-w-[38rem] text-[11.5px] leading-[1.65] text-text-muted">
              Use the checks together to build a clearer picture of website
              configuration.
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
      id="security-team-asset-discovery"
      aria-labelledby="security-team-asset-discovery-heading"
      className="scroll-mt-24 bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-16">
          <div>
            <SolutionSectionHeading
              id="security-team-asset-discovery-heading"
              eyebrow="Asset discovery"
              title="Asset Discovery and External Visibility"
              description="Asset Discovery is the starting point for external visibility. Explore how public domains, subdomains, hosts, ports, and services fit together so your team can understand the external-facing environment and organize asset information for review."
            />

            <p className="mt-5 max-w-[42rem] text-[13px] leading-[1.75] text-text-secondary">
              Use these views together to keep public assets connected to the
              domains and services they support, then carry that context into a
              security review.
            </p>

            <p className="mt-4 max-w-[42rem] text-[11.5px] leading-[1.65] text-text-muted">
              A connected view makes the public surface easier to review and
              discuss with your team.
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
      id="security-team-workflow"
      aria-labelledby="security-team-workflow-heading"
      className="scroll-mt-24 bg-charcoal py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="security-team-workflow-heading"
          eyebrow="A practical workflow"
          title="A Structured Security Review Workflow"
          description="Use a structured review path to move from external assets to the configuration context that may need further investigation."
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
      id="security-team-use-cases"
      aria-labelledby="security-team-use-cases-heading"
      className="scroll-mt-24 border-y border-border bg-light/60 py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="security-team-use-cases-heading"
          eyebrow="When to use it"
          title="When Security Teams Can Use Securelyze"
          description="Use the platform as a review aid at moments when external assets or configuration context need to be organized."
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
      id="security-team-benefits"
      aria-labelledby="security-team-benefits-heading"
      className="scroll-mt-24 bg-soft-green/25 py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="security-team-benefits-heading"
          eyebrow="Benefits"
          title="Benefits for Security Teams"
          description="A clearer view of the external-facing assets and configuration context that support a security review."
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
      id="security-team-faqs"
      aria-labelledby="security-team-faqs-heading"
      className="scroll-mt-24 bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="security-team-faqs-heading"
          eyebrow="FAQs"
          title="Questions Security Teams Ask"
          description="Short answers about asset discovery and website security checks."
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

export default function SecurityTeamsPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-emerald selection:text-charcoal">
      <SecurityTeamsHero />
      <ChallengesSection />
      <ChecksSection />
      <AssetsSection />
      <WorkflowSection />
      <UseCasesSection />
      <BenefitsSection />
      <FaqSection />

      <SolutionClosingCta
        id="security-teams-cta"
        title="Get a Clearer View of Your External Attack Surface"
        description="Explore your digital assets and review available website security information with Securelyze."
        primary={{
          label: "Explore Securelyze",
          href: "/platform",
        }}
      />
    </main>
  );
}
