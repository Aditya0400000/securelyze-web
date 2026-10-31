import { CodeIcon, NetworkIcon } from "../about/AboutIcons";
import { CheckIcon, LockIcon } from "../pricing/PricingIcons";
import {
  DatabaseIcon,
  KeyIcon,
  RefreshIcon,
} from "./ResourcesIcons";
import ResourcesSectionHeading from "./ResourcesSectionHeading";

const ACCENTS = {
  lime: {
    card: "hover:border-[#D1FAE5]",
    icon: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
    number: "text-[#059669]",
    check: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
  },
  teal: {
    card: "hover:border-[#D1FAE5]",
    icon: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
    number: "text-[#047857]",
    check: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
  },
  amber: {
    card: "hover:border-[#D1FAE5]",
    icon: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
    number: "text-[#047857]",
    check: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
  },
  periwinkle: {
    card: "hover:border-[#D1FAE5]",
    icon: "border-[#D1FAE5] bg-[#ECFDF5] text-[#059669]",
    number: "text-[#059669]",
    check: "border-[#D1FAE5] bg-[#F8FAFC] text-[#059669]",
  },
};

const PRACTICES = [
  {
    id: "keep-software-updated",
    number: "01",
    title: "Keep software and dependencies updated",
    icon: RefreshIcon,
    accent: "lime",
    description:
      "Updates close known vulnerabilities in CMS platforms, plugins, libraries, and server software. Unused components are easy to forget and hard to keep current.",
    doThis: [
      "Enable automatic updates where it is safe to do so.",
      "Review changelogs before major updates.",
      "Remove unused plugins, themes, and packages.",
      "Test significant updates before production.",
    ],
  },
  {
    id: "use-https-and-valid-certificates",
    number: "02",
    title: "Use HTTPS and valid TLS certificates",
    icon: LockIcon,
    accent: "teal",
    description:
      "Encrypt traffic and make sure visitors can verify they are connecting to the right site. A certificate that has expired or does not cover the hostname creates avoidable warnings.",
    doThis: [
      "Redirect HTTP to HTTPS where appropriate.",
      "Renew certificates before they expire.",
      "Cover every hostname you actually serve.",
      "Watch for certificate errors after changes.",
    ],
  },
  {
    id: "configure-security-headers",
    number: "03",
    title: "Configure security headers",
    icon: CodeIcon,
    accent: "periwinkle",
    description:
      "Headers tell browsers how to handle your content and can limit some classes of browser-side attacks. Start with the policies that fit your application, then test before enforcing them.",
    doThis: [
      "Review HSTS, CSP, and frame protections.",
      "Set X-Content-Type-Options and Referrer-Policy.",
      "Use report-only mode where appropriate.",
      "Recheck headers after major frontend changes.",
    ],
  },
  {
    id: "protect-accounts-with-mfa",
    number: "04",
    title: "Protect accounts with strong passwords and MFA",
    icon: KeyIcon,
    accent: "amber",
    description:
      "Account takeover can bypass technical controls entirely. Administrative accounts, email, hosting, and DNS access deserve the strongest protections.",
    doThis: [
      "Use unique passwords stored in a password manager.",
      "Enable MFA on admin, email, DNS, and hosting accounts.",
      "Remove stale users and review roles.",
      "Avoid sharing administrative credentials.",
    ],
  },
  {
    id: "review-dns-and-email-records",
    number: "05",
    title: "Review DNS and email authentication records",
    icon: NetworkIcon,
    accent: "lime",
    description:
      "DNS and email records can drift as services change. Stale records and incomplete authentication make it harder for receivers to trust your domain.",
    doThis: [
      "Remove records for services you no longer use.",
      "Confirm SPF, DKIM, and DMARC are present.",
      "Start DMARC with monitoring before enforcing.",
      "Protect registrar and DNS account access.",
    ],
  },
  {
    id: "maintain-backups-and-monitoring",
    number: "06",
    title: "Maintain backups and monitor security issues",
    icon: DatabaseIcon,
    accent: "teal",
    description:
      "Backups and monitoring reduce the impact and duration of an incident. A backup is only useful when you know it can be restored, and monitoring only helps when someone reviews it.",
    doThis: [
      "Keep offline or immutable backups.",
      "Test restoration on a regular schedule.",
      "Monitor certificate expiry and DNS changes.",
      "Watch for unusual administrative activity.",
    ],
  },
];

const REVIEW_RHYTHM = [
  {
    label: "Monthly",
    description: "Apply updates and review who still has access.",
  },
  {
    label: "Quarterly",
    description: "Check certificates, DNS, headers, and email records.",
  },
  {
    label: "After changes",
    description: "Recheck affected signals and confirm backups can restore.",
  },
];

function PracticeCard({ practice }) {
  const accent = ACCENTS[practice.accent];
  const Icon = practice.icon;

  return (
    <article
      id={practice.id}
      className={`group flex h-full scroll-mt-28 flex-col rounded-[1.5rem] border border-[#E2E8F0] bg-white p-5 shadow-[inset_0_1px_0_#FFFFFF,0_14px_34px_-32px_rgba(16,26,24,0.32)] transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_#FFFFFF,0_20px_42px_-32px_rgba(16,26,24,0.38)] motion-reduce:transition-none sm:p-6 ${accent.card}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${accent.icon}`}
        >
          <Icon className="h-[18px] w-[18px]" />
        </span>
        <span
          className={`font-mono text-[10px] font-semibold tracking-[0.12em] ${accent.number}`}
        >
          {practice.number}
        </span>
      </div>

      <h4 className="mt-5 text-[1.02rem] font-semibold leading-[1.3] tracking-[-0.025em] text-[#101A18]">
        {practice.title}
      </h4>
      <p className="mt-2.5 text-[12.5px] leading-[1.7] text-[#475569]">
        {practice.description}
      </p>

      <div className="mt-4 border-t border-[#F1F5F9] pt-4">
        <p className="text-[8.5px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">
          Do this
        </p>
        <ul className="mt-2.5 space-y-2">
          {practice.doThis.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span
                className={`mt-0.5 flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full border ${accent.check}`}
              >
                <CheckIcon className="h-2.5 w-2.5" />
              </span>
              <span className="text-[11.5px] leading-[1.55] text-[#475569]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function SecurityBestPracticesContent() {
  return (
    <section
      id="best-practices"
      aria-labelledby="best-practices-heading"
      className="relative scroll-mt-28 border-t border-[#F1F5F9] bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ResourcesSectionHeading
          id="best-practices-heading"
          as="h3"
          size="md"
          eyebrow="Best Practices"
          title="Six habits that keep security from drifting."
          description="A concise set of recurring practices for the work that keeps a website's security posture from quietly degrading between reviews."
        />

        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {PRACTICES.map((practice) => (
            <PracticeCard key={practice.id} practice={practice} />
          ))}
        </div>

        <div className="mt-5 grid gap-5 rounded-[1.5rem] border border-[#E2E8F0] bg-[#F8FAFC] p-5 sm:p-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#059669]">
              A practical review rhythm
            </p>
            <h4 className="mt-2 text-[1.1rem] font-semibold leading-[1.3] tracking-[-0.025em] text-[#101A18]">
              Make the checks part of the work.
            </h4>
            <p className="mt-2 max-w-[30rem] text-[12px] leading-[1.65] text-[#64748B]">
              Security posture drifts when reviews only happen once. A simple
              rhythm is easier to sustain than a large annual cleanup.
            </p>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-3">
            {REVIEW_RHYTHM.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#E2E8F0] bg-white px-3.5 py-3"
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#059669]">
                  {item.label}
                </p>
                <p className="mt-1.5 text-[11px] leading-[1.55] text-[#475569]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-5 max-w-[52rem] text-[11px] leading-[1.7] text-[#64748B]">
          These practices are general guidance. Securelyze helps you review
          public website signals; it does not automatically apply changes, fix
          findings, or guarantee security.
        </p>
      </div>
    </section>
  );
}
