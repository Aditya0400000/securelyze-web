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
  "Public information to support further investigation.";

const HERO_ITEMS = [
  {
    icon: GlobeIcon,
    title: "Domains",
    detail: "Domain information and DNS relationships.",
  },
  {
    icon: RadarIcon,
    title: "Subdomains",
    detail: "Visible hostnames beneath a domain.",
  },
  {
    icon: AssetsIcon,
    title: "Hosts & services",
    detail: "Public addresses and available services.",
  },
  {
    icon: ShieldIcon,
    title: "Security context",
    detail: "DNS, TLS, headers, and email settings.",
  },
];

const CHALLENGES = [
  {
    title: "Domains outside the inventory",
    description:
      "Domains and subdomains can span teams, providers, and older projects. Public information can surface names that need ownership and scope verification.",
  },
  {
    title: "Hostname-to-address relationships",
    description:
      "Several hostnames may share an address, proxy, or provider. Those relationships add context, but do not establish ownership or reveal all underlying infrastructure.",
  },
  {
    title: "Expected and unexpected services",
    description:
      "Available port and service information can help teams question unexpected exposure. A public service is not, by itself, evidence of a vulnerability.",
  },
  {
    title: "Configuration differences",
    description:
      "Certificate coverage, DNS records, HTTP policies, and email authentication can differ between assets. Review each setting against the purpose of the service.",
  },
  {
    title: "Assets left behind by projects",
    description:
      "Legacy names and temporary hosts may remain public after a migration or handoff. Validate whether they are still needed and who is responsible for them.",
  },
  {
    title: "Information that needs validation",
    description:
      "Public records and observed service details can be incomplete or outdated. Separate useful leads from conclusions that require authorized testing.",
  },
];

const CHECKS = [
  {
    title: "SSL/TLS Analysis",
    description: "Examine certificate validity, hostname coverage, and available HTTPS configuration details.",
    href: "/platform/website-security-check/ssl-tls",
    icon: CertificateIcon,
  },
  {
    title: "DNS Security",
    description: "Review published records, service targets, nameservers, and resolution relationships.",
    href: "/platform/website-security-check/dns-security",
    icon: NetworkIcon,
  },
  {
    title: "Security Headers",
    description: "Examine HTTP security policies and assess their suitability for the application.",
    href: "/platform/website-security-check/security-headers",
    icon: CodeIcon,
  },
  {
    title: "Email Security",
    description: "Review SPF, DKIM, and DMARC configuration, including policy and alignment concepts.",
    href: "/platform/website-security-check/email-security",
    icon: MailIcon,
  },
];

const ASSET_CATEGORIES = [
  {
    title: "Domain Discovery",
    description:
      "Review domain information, DNS relationships, and related domains where supported.",
    href: "/platform/asset-discovery/domain-discovery",
    icon: GlobeIcon,
  },
  {
    title: "Subdomain Discovery",
    description:
      "Explore publicly visible hostnames and how they relate to parent domains and shared targets.",
    href: "/platform/asset-discovery/subdomain-discovery",
    icon: RadarIcon,
  },
  {
    title: "IP & Host Discovery",
    description:
      "Review public IPv4 and IPv6 relationships and hostnames that share addresses.",
    href: "/platform/asset-discovery/ip-host-discovery",
    icon: AssetsIcon,
  },
  {
    title: "Port & Service Discovery",
    description:
      "Examine available information about exposed ports, service labels, and response context.",
    href: "/platform/asset-discovery/port-service-discovery",
    icon: LayersIcon,
  },
];

const WORKFLOW_STEPS = [
  {
    title: "Establish the public scope",
    description:
      "Explore domain, hostname, address, and service relationships, then validate which assets belong in scope.",
  },
  {
    title: "Examine configuration",
    description:
      "Use the relevant DNS, TLS, HTTP header, and email authentication guides to interpret available details.",
  },
  {
    title: "Plan further investigation",
    description:
      "Decide what needs ownership confirmation, configuration review, or separate authorized testing.",
  },
];

const USE_CASES = [
  {
    title: "Scoping an external review",
    label: "External assets",
    description:
      "Use public asset relationships as leads when defining and validating assessment scope.",
  },
  {
    title: "Adding domains or subdomains",
    label: "New domains",
    description:
      "Review the public names, addresses, and services associated with a newly introduced asset.",
  },
  {
    title: "After infrastructure changes",
    label: "Infrastructure change",
    description:
      "Revisit DNS targets, certificate coverage, and HTTP policies after routing or hosting changes.",
  },
  {
    title: "Questioning service exposure",
    label: "Exposed services",
    description:
      "Compare available port and service details with the services expected on each public host.",
  },
  {
    title: "Preparing a deeper assessment",
    label: "Periodic review",
    description:
      "Use available findings to identify questions for service owners and plan authorized validation.",
  },
];

const BENEFITS = [
  {
    title: "Define review scope",
    description:
      "Use public domains, addresses, and service relationships to inform scope discussions.",
    icon: EyeIcon,
  },
  {
    title: "Investigate asset relationships",
    description:
      "Consider shared DNS targets and public addresses without treating them as ownership proof.",
    icon: NetworkIcon,
  },
  {
    title: "Interpret configuration details",
    description:
      "Relate DNS, TLS, HTTP headers, and email authentication to the assets under review.",
    icon: ShieldIcon,
  },
  {
    title: "Separate leads from findings",
    description:
      "Use public information to decide what requires confirmation before making a security conclusion.",
    icon: CompassIcon,
  },
];

const FAQS = [
  {
    question: "Which Asset Discovery areas can teams explore?",
    answer:
      "The capability pages cover public domains, subdomains, IP addresses, hosts, ports, and services. Available information can help with scoping and investigation, but public sources may not provide a complete inventory.",
  },
  {
    question: "Do shared addresses or related domains prove ownership?",
    answer:
      "No. Shared hosting, DNS providers, proxies, and content-delivery networks can connect unrelated systems. Validate ownership and authorization before adding assets to an assessment.",
  },
  {
    question: "Which security configuration areas are covered?",
    answer:
      "The guides cover certificate and HTTPS settings, DNS records, HTTP security headers, and SPF, DKIM, and DMARC. These are configuration review areas, not a full application or infrastructure assessment.",
  },
  {
    question: "What can port and service information tell us?",
    answer:
      "Available port, service, and response details can help you identify exposure that needs review. They do not confirm a service version, a vulnerability, or that access is safe.",
  },
  {
    question: "Do these pages provide continuous monitoring?",
    answer:
      "No. These pages are informational, and capability examples use sample data. They do not run live scans, monitor assets continuously, or provide automated change alerts.",
  },
  {
    question: "Do discovery results confirm vulnerabilities?",
    answer:
      "No. Public visibility and configuration observations are leads for investigation. Confirm vulnerabilities through separate authorized testing. These pages do not automatically detect vulnerabilities or change asset configurations.",
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
              FOR SECURITY TEAMS
            </p>

            <h1
              id="security-teams-heading"
              className="mt-4 max-w-[48rem] text-balance text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.055em] text-charcoal sm:text-[3.25rem] lg:text-[3.45rem] xl:text-[3.6rem]"
            >
              Explore Your Internet-Facing Infrastructure
            </h1>

            <p className="mt-6 max-w-[44rem] text-pretty text-[15px] leading-[1.75] text-text-secondary sm:text-base">
              Review domains, hosts, exposed services, and security configurations
              to identify areas that may need attention.
            </p>

            <p className="mt-4 max-w-[44rem] text-pretty text-[12.5px] leading-[1.7] text-text-muted">
              Combine asset relationships with configuration information to plan
              further investigation.
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
              eyebrow="Review challenges"
              title="Where public information needs context"
              description="Internet-facing assets cross team and provider boundaries. Understanding their relationships helps teams decide what belongs in scope and what needs validation."
            />

            <p className="mt-6 max-w-[34rem] border-l-2 border-emerald/30 pl-4 text-[12.5px] leading-[1.75] text-text-muted">
              Treat public information as evidence to validate, rather than a
              complete or verified inventory.
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
              title="Examine security configuration"
              description="Use DNS, TLS, HTTP header, and email authentication details to frame specific configuration questions."
            />

            <p className="mt-5 max-w-[38rem] text-[11.5px] leading-[1.65] text-text-muted">
              Configuration observations need application and service-owner context.
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
              title="Explore the assets in scope"
              description="Explore public domains, subdomains, addresses, hosts, and available service information. Use those relationships to support an inventory review and identify questions for asset owners."
            />

            <p className="mt-5 max-w-[42rem] text-[13px] leading-[1.75] text-text-secondary">
              Public sources may be incomplete. Confirm ownership, service
              purpose, and authorization before testing an asset.
            </p>

            <p className="mt-4 max-w-[42rem] text-[11.5px] leading-[1.65] text-text-muted">
              A relationship between public assets is a useful lead, not a
              confirmed security finding.
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
          title="From public information to investigation"
          description="Establish the asset scope, interpret available configuration details, and determine what needs separate validation."
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
          title="Support focused security reviews"
          description="Use the discovery and configuration topics when defining scope, reviewing changes, or preparing a deeper assessment."
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
          title="Use public information with context"
          description="Connect asset relationships and configuration observations to specific investigation questions."
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
          title="Security team questions"
          description="Coverage, interpretation, and the limits of public asset information."
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
        layout="split"
        id="security-teams-cta"
        title="Start with your internet-facing assets"
        description="Explore the platform's Asset Discovery and security configuration guides to plan your review."
        primary={{
          label: "Explore Securelyze",
          href: "/platform",
        }}
      />
    </main>
  );
}
