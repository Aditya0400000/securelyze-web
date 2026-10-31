import {
  CodeIcon,
  GlobeIcon,
  NetworkIcon,
  ShieldIcon,
} from "../about/AboutIcons";
import { CheckIcon, LockIcon, MailIcon } from "../pricing/PricingIcons";

function VisualShell({ label, badge = "Illustrative", children }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-dark-green/80 p-4 shadow-[var(--shadow-card-dark)] sm:p-5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 -top-10 h-36 w-36 rounded-full bg-emerald/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-emerald/5 blur-3xl"
      />

      <div className="relative flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
        <p className="text-[8.5px] font-semibold uppercase tracking-[0.16em] text-white/60">
          {label}
        </p>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald/25 bg-emerald/10 px-2 py-1 text-[7.5px] font-semibold uppercase tracking-[0.12em] text-soft-green">
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-emerald" />
          {badge}
        </span>
      </div>

      <div className="relative mt-3">{children}</div>
    </div>
  );
}

const DNS_PATH_STEPS = [
  {
    label: "Browser",
    value: "Requests example.com",
    tag: "01",
    icon: GlobeIcon,
  },
  {
    label: "Resolver",
    value: "Follows the delegation",
    tag: "02",
    icon: NetworkIcon,
  },
  {
    label: "Authoritative NS",
    value: "Returns the record set",
    tag: "03",
    icon: ShieldIcon,
  },
];

const DNS_HERO_RECORDS = [
  { type: "A", value: "203.0.113.10" },
  { type: "AAAA", value: "2001:db8::10" },
  { type: "MX", value: "mail.example.com" },
  { type: "TXT", value: "v=spf1 include:example.net -all" },
  { type: "NS", value: "ns1.example.net" },
  { type: "CNAME", value: "www → example.com" },
];

export function DnsHeroVisual() {
  return (
    <VisualShell label="DNS resolution path">
      <div>
        {DNS_PATH_STEPS.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.label}>
              <div className="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-2.5 transition-colors duration-200 hover:border-emerald/30 hover:bg-white/10">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/10 text-soft-green">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/55">
                    {step.label}
                  </p>
                  <p className="mt-0.5 truncate text-[10.5px] font-medium text-white/90">
                    {step.value}
                  </p>
                </div>
                <span className="ml-auto shrink-0 font-mono text-[8.5px] text-emerald/70">
                  {step.tag}
                </span>
              </div>
              {index < DNS_PATH_STEPS.length - 1 ? (
                <div
                  aria-hidden="true"
                  className="ml-6 h-2.5 w-px bg-emerald/25"
                />
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-1.5">
        {DNS_HERO_RECORDS.map((record) => (
          <div
            key={record.type}
            className="group min-w-0 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 transition-colors duration-200 hover:border-emerald/30 hover:bg-white/10"
          >
            <p className="text-[7.5px] font-semibold uppercase tracking-[0.14em] text-emerald/80">
              {record.type}
            </p>
            <p className="mt-1 truncate font-mono text-[9px] text-white/80">
              {record.value}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-2.5 text-[8.5px] leading-[1.5] text-white/55">
        Sample values only. No live DNS lookup is run.
      </p>
    </VisualShell>
  );
}

const DNS_SAMPLE_RECORDS = [
  {
    type: "A",
    value: "203.0.113.10",
    note: "Sample IPv4 address for the apex domain.",
  },
  {
    type: "AAAA",
    value: "2001:db8::10",
    note: "Sample IPv6 address using documentation ranges.",
  },
  {
    type: "CNAME",
    value: "www → example.com",
    note: "Sample alias for the www hostname.",
  },
  {
    type: "MX",
    value: "mail.example.com · priority 10",
    note: "Sample mail exchanger for the domain.",
  },
  {
    type: "TXT",
    value: "v=spf1 include:example.net -all",
    note: "Sample sender-policy record.",
  },
  {
    type: "NS",
    value: "ns1.example.net · ns2.example.net",
    note: "Sample authoritative nameservers.",
  },
];

export function DnsExamplePanel() {
  return (
    <VisualShell
      label="Illustrative DNS snapshot"
      badge="Sample data only"
    >
      <div
        role="group"
        aria-label="Illustrative DNS records for example.com"
        className="space-y-2"
      >
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald/20 bg-emerald/10 text-soft-green">
            <NetworkIcon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/55">
              Sample domain
            </p>
            <p className="mt-0.5 text-[12.5px] font-semibold text-white">
              example.com
            </p>
          </div>
          <span className="ml-auto shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-white/65">
            6 record types
          </span>
        </div>

        {DNS_SAMPLE_RECORDS.map((record) => (
          <div
            key={record.type}
            className="group grid grid-cols-[3.5rem_minmax(0,1fr)] gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition-colors duration-200 hover:border-emerald/30 hover:bg-white/10"
          >
            <span className="flex h-7 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/10 font-mono text-[9px] font-semibold text-soft-green">
              {record.type}
            </span>
            <div className="min-w-0">
              <p className="break-words font-mono text-[10px] leading-[1.5] text-white/90">
                {record.value}
              </p>
              <p className="mt-1 text-[9.5px] leading-[1.55] text-white/60">
                {record.note}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3 border-t border-white/10 pt-3 text-[9px] leading-[1.6] text-white/60">
        Sample values for layout preview only. No live DNS lookup was performed.
      </p>
    </VisualShell>
  );
}

const HERO_HEADERS = [
  {
    name: "content-security-policy",
    value: "default-src 'self'",
  },
  {
    name: "strict-transport-security",
    value: "max-age=31536000",
  },
  {
    name: "x-content-type-options",
    value: "nosniff",
  },
  {
    name: "referrer-policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    name: "permissions-policy",
    value: "camera=(), microphone=()",
  },
];

export function SecurityHeadersHeroVisual() {
  return (
    <VisualShell label="Browser response headers">
      <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
        <span className="font-mono text-[10px] text-white/85">HTTP/2 200</span>
        <span className="truncate text-[9px] font-medium text-white/60">
          example.com
        </span>
      </div>

      <div className="mt-2 space-y-1">
        {HERO_HEADERS.map((header) => (
          <div
            key={header.name}
            className="group flex items-start gap-2 rounded-lg px-2.5 py-2 transition-colors duration-200 hover:bg-white/5"
          >
            <span
              aria-hidden="true"
              className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald"
            />
            <div className="min-w-0">
              <p className="truncate font-mono text-[8.5px] text-soft-green/80">
                {header.name}
              </p>
              <p className="mt-0.5 truncate font-mono text-[9px] text-white/70">
                {header.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3">
        <div className="flex items-center justify-between gap-3 text-[8.5px] font-semibold uppercase tracking-[0.12em] text-white/60">
          <span>Sample coverage</span>
          <span className="text-soft-green">5 of 6 headers</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[83%] rounded-full bg-emerald" />
        </div>
      </div>

      <p className="mt-2.5 text-[8.5px] leading-[1.5] text-white/55">
        Sample values only. No live header check is run.
      </p>
    </VisualShell>
  );
}

const SAMPLE_HEADERS = [
  {
    name: "content-security-policy",
    value: "default-src 'self'; frame-ancestors 'none'",
    present: true,
  },
  {
    name: "strict-transport-security",
    value: "max-age=31536000; includeSubDomains",
    present: true,
  },
  {
    name: "x-content-type-options",
    value: "nosniff",
    present: true,
  },
  {
    name: "referrer-policy",
    value: "strict-origin-when-cross-origin",
    present: true,
  },
  {
    name: "permissions-policy",
    value: "camera=(), microphone=()",
    present: true,
  },
  {
    name: "x-frame-options",
    value: "Not observed in the sample response",
    present: false,
  },
];

export function SecurityHeadersExamplePanel() {
  return (
    <VisualShell
      label="Illustrative header snapshot"
      badge="Sample data only"
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald/20 bg-emerald/10 text-soft-green">
            <CodeIcon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/55">
              Sample response
            </p>
            <p className="mt-0.5 text-[12.5px] font-semibold text-white">
              example.com
            </p>
          </div>
          <span className="ml-auto shrink-0 rounded-full border border-emerald/25 bg-emerald/10 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-soft-green">
            5 of 6 present
          </span>
        </div>

        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[83%] rounded-full bg-emerald" />
        </div>
      </div>

      <div
        role="group"
        aria-label="Illustrative HTTP response headers for example.com"
        className="mt-2 space-y-2"
      >
        {SAMPLE_HEADERS.map((header) => (
          <div
            key={header.name}
            className="group flex flex-col gap-1.5 rounded-xl border border-white/10 bg-white/5 p-3 transition-colors duration-200 hover:border-emerald/30 hover:bg-white/10 sm:flex-row sm:items-start sm:justify-between"
          >
            <div className="min-w-0">
              <p className="break-words font-mono text-[9.5px] text-soft-green/85">
                {header.name}
              </p>
              <p className="mt-1 break-words font-mono text-[10px] leading-[1.55] text-white/75">
                {header.value}
              </p>
            </div>
            <span
              className={`inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border px-2 py-1 text-[7.5px] font-semibold uppercase tracking-[0.12em] ${
                header.present
                  ? "border-emerald/25 bg-emerald/10 text-soft-green"
                  : "border-white/10 bg-white/5 text-white/60"
              }`}
            >
              <span
                aria-hidden="true"
                className={`h-1 w-1 rounded-full ${
                  header.present ? "bg-emerald" : "bg-white/35"
                }`}
              />
              {header.present ? "Present" : "Not observed"}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-3 border-t border-white/10 pt-3 text-[9px] leading-[1.6] text-white/60">
        Sample values for layout preview only. A present header does not
        guarantee a secure configuration.
      </p>
    </VisualShell>
  );
}

const EMAIL_PATH_STEPS = [
  {
    label: "Sender",
    value: "Claims example.com",
    tag: "01",
    icon: MailIcon,
    status: null,
  },
  {
    label: "SPF",
    value: "Authorized sending source?",
    tag: "02",
    icon: ShieldIcon,
    status: "Pass",
  },
  {
    label: "DKIM",
    value: "Signature valid?",
    tag: "03",
    icon: LockIcon,
    status: "Pass",
  },
  {
    label: "DMARC",
    value: "Aligned and policy applied?",
    tag: "04",
    icon: CheckIcon,
    status: "Pass",
  },
];

export function EmailSecurityHeroVisual() {
  return (
    <VisualShell label="Email authentication path">
      <div>
        {EMAIL_PATH_STEPS.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.label}>
              <div className="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-2.5 transition-colors duration-200 hover:border-emerald/30 hover:bg-white/10">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/10 text-soft-green">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/55">
                    {step.label}
                  </p>
                  <p className="mt-0.5 truncate text-[10.5px] font-medium text-white/90">
                    {step.value}
                  </p>
                </div>
                {step.status ? (
                  <span className="ml-auto shrink-0 rounded-full border border-emerald/25 bg-emerald/10 px-2 py-0.5 text-[7.5px] font-semibold uppercase tracking-[0.1em] text-soft-green">
                    {step.status}
                  </span>
                ) : (
                  <span className="ml-auto shrink-0 font-mono text-[8.5px] text-emerald/70">
                    {step.tag}
                  </span>
                )}
              </div>
              {index < EMAIL_PATH_STEPS.length - 1 ? (
                <div
                  aria-hidden="true"
                  className="ml-6 h-2.5 w-px bg-emerald/25"
                />
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="mt-3 space-y-1.5">
        {[
          { label: "SPF", value: "v=spf1 include:example.net -all" },
          { label: "DKIM", value: "selector1._domainkey" },
          { label: "DMARC", value: "v=DMARC1; p=quarantine" },
        ].map((record) => (
          <div
            key={record.label}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 transition-colors duration-200 hover:border-emerald/30 hover:bg-white/10"
          >
            <span className="w-10 shrink-0 font-mono text-[8px] font-semibold uppercase tracking-[0.1em] text-emerald/80">
              {record.label}
            </span>
            <span className="min-w-0 truncate font-mono text-[9px] text-white/75">
              {record.value}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-2.5 text-[8.5px] leading-[1.5] text-white/55">
        Sample values only. No live authentication check is run.
      </p>
    </VisualShell>
  );
}

const EMAIL_SAMPLE_RESULTS = [
  {
    label: "SPF",
    value: "Pass",
    description: "Sample sender authorized by SPF.",
  },
  {
    label: "DKIM",
    value: "Pass",
    description: "Sample signature validates with selector1.",
  },
  {
    label: "DMARC",
    value: "Pass",
    description: "Sample result is aligned with the From domain.",
  },
];

const EMAIL_SAMPLE_RECORDS = [
  {
    label: "SPF",
    value: "v=spf1 include:example.net -all",
  },
  {
    label: "DKIM",
    value: "selector1._domainkey.example.com",
  },
  {
    label: "DMARC",
    value: "v=DMARC1; p=quarantine; rua=mailto:dmarc@example.com",
  },
];

export function EmailSecurityExamplePanel() {
  return (
    <VisualShell
      label="Illustrative authentication snapshot"
      badge="Sample data only"
    >
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald/20 bg-emerald/10 text-soft-green">
          <MailIcon className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/55">
            Sample domain
          </p>
          <p className="mt-0.5 text-[12.5px] font-semibold text-white">
            example.com
          </p>
        </div>
        <span className="ml-auto shrink-0 rounded-full border border-emerald/25 bg-emerald/10 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-soft-green">
          3 of 3 sample checks
        </span>
      </div>

      <div
        role="group"
        aria-label="Illustrative email authentication results for example.com"
        className="mt-2 grid gap-2 sm:grid-cols-3"
      >
        {EMAIL_SAMPLE_RESULTS.map((result) => (
          <div
            key={result.label}
            className="rounded-2xl border border-emerald/20 bg-emerald/5 p-3 transition-colors duration-200 hover:border-emerald/35 hover:bg-emerald/10"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-soft-green/85">
                {result.label}
              </p>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald/25 bg-emerald/10 px-2 py-0.5 text-[7.5px] font-semibold uppercase tracking-[0.1em] text-soft-green">
                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-emerald"
                />
                {result.value}
              </span>
            </div>
            <p className="mt-2 text-[9.5px] leading-[1.55] text-white/65">
              {result.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-2 grid gap-2 sm:grid-cols-3">
        {[
          { label: "DMARC policy", value: "quarantine" },
          { label: "Alignment", value: "Aligned" },
          { label: "Reporting", value: "rua configured" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5"
          >
            <p className="text-[7.5px] font-semibold uppercase tracking-[0.12em] text-white/55">
              {item.label}
            </p>
            <p className="mt-1 font-mono text-[10px] text-white/85">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-2 space-y-1.5">
        {EMAIL_SAMPLE_RECORDS.map((record) => (
          <div
            key={record.label}
            className="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 transition-colors duration-200 hover:border-emerald/30 hover:bg-white/10 sm:flex-row sm:items-start sm:gap-3"
          >
            <span className="w-12 shrink-0 font-mono text-[8px] font-semibold uppercase tracking-[0.1em] text-emerald/80">
              {record.label}
            </span>
            <span className="min-w-0 break-words font-mono text-[9.5px] leading-[1.55] text-white/75">
              {record.value}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-3 border-t border-white/10 pt-3 text-[9px] leading-[1.6] text-white/60">
        Sample values for layout preview only. No live email authentication
        check was performed.
      </p>
    </VisualShell>
  );
}
