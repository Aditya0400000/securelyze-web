import {
  CertificateIcon,
  CodeIcon,
  NetworkIcon,
  ShieldIcon,
} from "../about/AboutIcons";
import { LockIcon, MailIcon } from "../pricing/PricingIcons";

const DASHBOARD_SIGNALS = [
  {
    label: "SSL/TLS",
    detail: "Certificate context",
    icon: CertificateIcon,
    status: "Ready",
    tone: "lime",
  },
  {
    label: "DNS Analysis",
    detail: "Routing & mail records",
    icon: NetworkIcon,
    status: "Review",
    tone: "amber",
  },
  {
    label: "Security Headers",
    detail: "Browser policy",
    icon: CodeIcon,
    status: "Review",
    tone: "amber",
  },
  {
    label: "HTTPS Status",
    detail: "Secure connection",
    icon: LockIcon,
    status: "Ready",
    tone: "lime",
  },
  {
    label: "Email Authentication",
    detail: "SPF · DKIM · DMARC",
    icon: MailIcon,
    status: "Planned",
    tone: "slate",
  },
];

const STATUS_TONES = {
  lime: {
    badge: "border-[#C6F36A]/20 bg-[#C6F36A]/[0.08] text-[#D8FA93]",
    dot: "bg-[#C6F36A]",
  },
  amber: {
    badge: "border-[#FFB27A]/20 bg-[#FFB27A]/[0.08] text-[#FFD8BF]",
    dot: "bg-[#FFB27A]",
  },
  slate: {
    badge: "border-white/10 bg-white/[0.04] text-white/45",
    dot: "bg-white/30",
  },
};

function StatusRow({ signal }) {
  const Icon = signal.icon;
  const statusTone = STATUS_TONES[signal.tone];

  return (
    <div className="flex min-w-0 items-center justify-between gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2.5">
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#8FCCFF]/15 bg-[#8FCCFF]/[0.07] text-[#C4E7FF]">
          <Icon className="h-3.5 w-3.5" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[11px] font-semibold tracking-[-0.01em] text-white sm:text-[11.5px]">
            {signal.label}
          </p>
          <p className="truncate text-[8.5px] leading-[1.5] text-white/45 sm:text-[9px]">
            {signal.detail}
          </p>
        </div>
      </div>

      <span
        className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-1 text-[7.5px] font-semibold uppercase tracking-[0.1em] ${statusTone.badge}`}
      >
        <span
          aria-hidden="true"
          className={`h-1 w-1 rounded-full ${statusTone.dot}`}
        />
        {signal.status}
      </span>
    </div>
  );
}

export default function SecurityOverviewDashboard() {
  return (
    <figure
      aria-labelledby="security-overview-caption"
      className="mx-auto w-full min-w-0 max-w-[64rem]"
    >
      <div className="rounded-[1.75rem] border border-[#D3DEE9] bg-[#071D34] p-1.5 shadow-[0_35px_90px_-55px_rgba(7,29,52,0.65)] sm:p-2">
        <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0A223B]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_18%,rgba(198,243,106,0.06),transparent_38%),radial-gradient(ellipse_at_85%_0%,rgba(143,204,255,0.08),transparent_42%)]"
          />

          <div className="relative flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#C6F36A]/20 bg-[#C6F36A]/[0.07] text-[#C6F36A]">
                <ShieldIcon className="h-3.5 w-3.5" />
              </span>
              <span className="truncate text-[10px] font-semibold tracking-[-0.01em] text-white/80">
                Securelyze
              </span>
            </div>

            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-white/60">
              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-[#C6F36A]"
              />
              Illustrative
            </span>
          </div>

          <div className="relative p-3.5 sm:p-5 lg:p-6">
            <div className="grid gap-5 lg:grid-cols-12 lg:items-center lg:gap-6">
              <div className="min-w-0 lg:col-span-4">
                <div className="flex items-center justify-between gap-3 lg:block">
                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/45">
                      Security overview
                    </p>
                    <p className="mt-1.5 truncate text-[18px] font-semibold tracking-[-0.025em] text-white sm:text-[20px]">
                      example.com
                    </p>
                    <p className="mt-0.5 text-[9.5px] text-white/50">
                      Sample data · 5 checks
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full border border-[#8FCCFF]/20 bg-[#8FCCFF]/[0.08] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#C4E7FF] lg:mt-3 lg:inline-flex">
                    Sample site
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-4 lg:mt-5 lg:block">
                  <div className="relative flex h-28 w-28 shrink-0 items-center justify-center sm:h-32 sm:w-32">
                    <svg
                      viewBox="0 0 120 120"
                      className="h-full w-full -rotate-90"
                      aria-hidden="true"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="8"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="#C6F36A"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="314.159"
                        strokeDashoffset="56.55"
                      />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-[1.75rem] font-bold leading-none tracking-[-0.05em] text-white sm:text-[2rem]">
                        82
                      </span>
                      <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.14em] text-white/45">
                        Sample score
                      </span>
                    </div>
                  </div>

                  <div className="min-w-0 lg:mt-4">
                    <p className="text-[11px] font-semibold text-white/75">
                      Illustrative score
                    </p>
                    <p className="mt-1 text-[9.5px] leading-[1.55] text-white/45">
                      A sample presentation of how a score could be summarized.
                      Not a real assessment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="min-w-0 lg:col-span-8">
                <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] pb-2.5">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-white/45">
                    Check summary
                  </span>
                  <span className="text-[8px] font-medium uppercase tracking-[0.13em] text-white/35">
                    Sample statuses
                  </span>
                </div>

                <div className="mt-2.5 space-y-1.5">
                  {DASHBOARD_SIGNALS.map((signal) => (
                    <StatusRow key={signal.label} signal={signal} />
                  ))}
                </div>

                <div className="mt-3 flex items-start gap-2 rounded-xl border border-[#C6F36A]/15 bg-[#C6F36A]/[0.035] px-3 py-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C6F36A]"
                  />
                  <p className="text-[9px] leading-[1.55] text-white/55 sm:text-[9.5px]">
                    Illustrative preview only. Sample indicators are not
                    connected to a live scanner.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-wrap items-center justify-between gap-2 border-t border-white/10 px-4 py-2.5 text-[8px] font-medium tracking-[0.02em] text-white/45 sm:px-5">
            <span>Securelyze / Security overview</span>
            <span>Sample data</span>
          </div>
        </div>
      </div>

      <figcaption id="security-overview-caption" className="sr-only">
        Illustrative security overview dashboard for example.com using sample
        data, showing a sample score and five check categories. This is not a
        live scan.
      </figcaption>
    </figure>
  );
}
