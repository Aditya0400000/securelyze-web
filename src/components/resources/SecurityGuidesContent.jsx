import {
  CertificateIcon,
  CodeIcon,
  NetworkIcon,
  ShieldIcon,
} from "../about/AboutIcons";
import { CheckIcon, MailIcon } from "../pricing/PricingIcons";
import { ChecklistIcon } from "./ResourcesIcons";
import ResourcesSectionHeading from "./ResourcesSectionHeading";

const ACCENTS = {
  lime: {
    card: "hover:border-[#D1FAE5]",
    icon: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
    pill: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
    takeaway: "border-[#D1FAE5] bg-[#F8FAFC]",
    label: "text-[#047857]",
    glow: "bg-[#10B981]/10",
  },
  teal: {
    card: "hover:border-[#D1FAE5]",
    icon: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
    pill: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
    takeaway: "border-[#D1FAE5] bg-[#ECFDF5]",
    label: "text-[#047857]",
    glow: "bg-[#10B981]/10",
  },
  amber: {
    card: "hover:border-[#D1FAE5]",
    icon: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
    pill: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
    takeaway: "border-[#D1FAE5] bg-[#ECFDF5]",
    label: "text-[#047857]",
    glow: "bg-[#10B981]/10",
  },
  periwinkle: {
    card: "hover:border-[#D1FAE5]",
    icon: "border-[#D1FAE5] bg-[#ECFDF5] text-[#059669]",
    pill: "border-[#D1FAE5] bg-[#F8FAFC] text-[#059669]",
    takeaway: "border-[#D1FAE5] bg-[#FFFFFF]",
    label: "text-[#059669]",
    glow: "bg-[#10B981]/10",
  },
};

const GUIDES = [
  {
    id: "website-security-fundamentals",
    title: "Website security fundamentals",
    category: "Foundations",
    icon: ShieldIcon,
    accent: "lime",
    description:
      "Website security is the practice of reducing the chance that a site, its data, or its visitors can be harmed through misconfiguration, weak access controls, or vulnerable software. It covers both the systems you control and the signals visitors can observe.",
    takeaway:
      "Start with the public signals: HTTPS, DNS, headers, and email authentication. They reveal a lot about how a site is configured.",
  },
  {
    id: "ssl-tls-and-https",
    title: "SSL/TLS certificates and HTTPS",
    category: "Connection",
    icon: CertificateIcon,
    accent: "teal",
    description:
      "A TLS certificate helps a browser verify the hostname it connects to. HTTPS uses TLS to encrypt data exchanged between the browser and the server.",
    takeaway:
      "A valid, current certificate is necessary but not sufficient. Check that HTTPS is used consistently and that the certificate matches the domain.",
  },
  {
    id: "dns-security-basics",
    title: "DNS security basics",
    category: "Routing",
    icon: NetworkIcon,
    accent: "amber",
    description:
      "DNS records connect domain names to websites, mail servers, and other services. Incorrect or outdated records can send traffic to unintended systems or disrupt access.",
    takeaway:
      "Review the records you actually need, remove stale entries, and protect the account that controls your DNS.",
  },
  {
    id: "http-security-headers",
    title: "HTTP security headers",
    category: "Browser policy",
    icon: CodeIcon,
    accent: "periwinkle",
    description:
      "Security headers are response instructions that tell browsers how to handle a page. They can influence whether a page may be framed, which sources scripts may load from, and whether HTTPS should be enforced on future visits.",
    takeaway:
      "Headers are not a substitute for secure code, but they reduce avoidable browser-side risk when configured deliberately.",
  },
  {
    id: "email-security-spf-dkim-dmarc",
    title: "Email security: SPF, DKIM, and DMARC",
    category: "Email",
    icon: MailIcon,
    accent: "lime",
    description:
      "SPF identifies permitted sending servers for a domain. DKIM lets receiving systems verify a message's signature. DMARC checks whether SPF or DKIM authentication aligns with the visible sender domain and publishes a policy for failures.",
    takeaway:
      "Use all three together. SPF and DKIM support authentication; DMARC turns that evidence into a policy.",
  },
];

const CHECKLIST = [
  "Serve the site over HTTPS and redirect HTTP where appropriate.",
  "Confirm the certificate is valid, current, and covers the hostnames you use.",
  "Keep the DNS record set tidy and protect registrar and DNS account access.",
  "Review security headers and remove unnecessary permissive settings.",
  "Publish SPF, DKIM, and DMARC records for domains that send email.",
  "Keep CMS, plugins, libraries, and server software updated.",
  "Require multi-factor authentication for administrative and DNS accounts.",
  "Maintain tested backups and a way to monitor for unexpected changes.",
];

function GuideCard({ guide }) {
  const accent = ACCENTS[guide.accent];
  const Icon = guide.icon;

  return (
    <article
      id={guide.id}
      className={`group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-[1.5rem] border border-[#E2E8F0] bg-white p-5 shadow-[inset_0_1px_0_#FFFFFF,0_14px_34px_-30px_rgba(16,26,24,0.35)] transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_#FFFFFF,0_20px_42px_-30px_rgba(16,26,24,0.4)] motion-reduce:transition-none sm:p-6 ${accent.card}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl ${accent.glow}`}
      />

      <div className="relative flex items-start justify-between gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${accent.icon}`}
        >
          <Icon className="h-[18px] w-[18px]" />
        </span>
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] ${accent.pill}`}
        >
          {guide.category}
        </span>
      </div>

      <h4 className="relative mt-5 text-[1.05rem] font-semibold leading-[1.25] tracking-[-0.025em] text-[#101A18]">
        {guide.title}
      </h4>
      <p className="relative mt-2.5 text-[12.5px] leading-[1.7] text-[#475569]">
        {guide.description}
      </p>

      <div
        className={`relative mt-5 rounded-xl border px-3.5 py-3 ${accent.takeaway}`}
      >
        <p
          className={`text-[8.5px] font-semibold uppercase tracking-[0.15em] ${accent.label}`}
        >
          Key takeaway
        </p>
        <p className="mt-1.5 text-[11.5px] leading-[1.65] text-[#475569]">
          {guide.takeaway}
        </p>
      </div>
    </article>
  );
}

export default function SecurityGuidesContent() {
  return (
    <section
      id="security-guides"
      aria-labelledby="security-guides-heading"
      className="relative scroll-mt-28 border-t border-[#F1F5F9] bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ResourcesSectionHeading
          id="security-guides-heading"
          as="h3"
          size="md"
          eyebrow="Security Guides"
          title="Five concepts behind common security settings"
          description="Read about website security fundamentals, TLS, DNS, HTTP headers, and email authentication. Then use the checklist to organize a review."
        />

        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {GUIDES.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>

        <div
          id="security-checklist"
          className="relative mt-5 scroll-mt-28 overflow-hidden rounded-[1.75rem] border border-[#183B32]/20 bg-[#101A18] shadow-[0_34px_90px_-58px_rgba(16,26,24,0.85),inset_0_1px_0_rgba(255,255,255,0.08)]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#10B981]/[0.09] blur-[90px]" />
            <div className="absolute -bottom-24 right-[-4rem] h-72 w-72 rounded-full bg-[#10B981]/[0.06] blur-[90px]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_70%_50%,black,transparent_78%)]" />
          </div>

          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:p-10">
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#10B981]/25 bg-[#10B981]/10 text-[#D1FAE5]">
                <ChecklistIcon className="h-5 w-5" />
              </span>
              <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#10B981]">
                Practical checklist
              </p>
              <h4 className="mt-2 text-balance text-[1.45rem] font-semibold leading-[1.2] tracking-[-0.035em] text-white sm:text-[1.65rem]">
                A practical website security checklist
              </h4>
              <p className="mt-3 text-[12.5px] leading-[1.7] text-white/60">
                Use this checklist to organize routine maintenance and
                configuration questions. Review the settings you manage and
                discuss provider-managed settings with the responsible team.
              </p>
              <p className="mt-5 text-[10px] leading-[1.65] text-white/55">
                Covers public configuration and operational basics. It does not
                replace a full security assessment.
              </p>
            </div>

            <ul className="grid gap-2.5 sm:grid-cols-2">
              {CHECKLIST.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-3"
                >
                  <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border border-[#10B981]/25 bg-[#10B981]/10 text-[#10B981]">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span className="text-[11.5px] leading-[1.6] text-white/70">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
