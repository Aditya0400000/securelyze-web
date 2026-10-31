import {
  CertificateIcon,
  CodeIcon,
  NetworkIcon,
  RadarIcon,
  ShieldIcon,
} from "./AboutIcons";

const SIGNALS = [
  {
    number: "01",
    overline: "Connection context",
    title: "SSL / TLS",
    description:
      "Review certificate presence and context, including details exposed during a connection.",
    icon: CertificateIcon,
    iconClass:
      "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
    ruleClass: "bg-[linear-gradient(90deg,#10B981,#34D399)]",
  },
  {
    number: "02",
    overline: "Routing & services",
    title: "DNS",
    description:
      "See how records route traffic and support services such as email and domain verification.",
    icon: NetworkIcon,
    iconClass:
      "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
    ruleClass: "bg-[linear-gradient(90deg,#10B981,#059669)]",
  },
  {
    number: "03",
    overline: "Browser policy",
    title: "HTTP security headers",
    description:
      "Understand which browser-facing policies are advertised, and where the configuration may deserve a closer look.",
    icon: CodeIcon,
    iconClass:
      "border-[#D1FAE5] bg-[#ECFDF5] text-[#059669]",
    ruleClass: "bg-[linear-gradient(90deg,#10B981,#10B981)]",
  },
  {
    number: "04",
    overline: "External footprint",
    title: "Internet-facing assets",
    description:
      "Map public-facing domains, subdomains, and related endpoints that make up a broader footprint.",
    icon: RadarIcon,
    iconClass:
      "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
    ruleClass: "bg-[linear-gradient(90deg,#34D399,#10B981)]",
  },
];

export default function AboutSignals() {
  return (
    <section
      aria-labelledby="signals-heading"
      className="relative overflow-hidden border-y border-[#E2E8F0] bg-[#F8FAFC] py-16 font-sans sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#D1FAE5]/55 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_8%,rgba(16,185,129,0.1),transparent_32%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#059669]">
              <span aria-hidden="true" className="h-px w-8 bg-[#059669]/45" />
              What you can understand
            </p>
            <h2
              id="signals-heading"
              className="mt-4 max-w-[39rem] text-balance text-[1.9rem] font-bold leading-[1.08] tracking-[-0.045em] text-[#101A18] sm:text-[2.35rem] lg:text-[2.7rem]"
            >
              The public signals behind a clearer security picture.
            </h2>
          </div>

          <p className="max-w-[34rem] text-pretty text-[14.5px] leading-[1.7] text-[#475569] sm:text-[15px] lg:col-span-5 lg:justify-self-end">
            Securelyze focuses on what a website makes visible to the public.
            Used together, these signals help you ask better questions about
            configuration and exposure.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {SIGNALS.map((signal) => {
            const Icon = signal.icon;

            return (
              <article
                key={signal.title}
                className="flex h-full min-w-0 flex-col rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_18px_45px_-38px_rgba(16,26,24,0.5)] sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border ${signal.iconClass}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="pt-1 font-mono text-[10px] font-medium tracking-[0.08em] text-[#94A3B8]">
                    {signal.number}
                  </span>
                </div>

                <span
                  aria-hidden="true"
                  className={`mt-6 h-1 w-8 rounded-full ${signal.ruleClass}`}
                />

                <p className="mt-4 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                  {signal.overline}
                </p>
                <h3 className="mt-2 text-pretty text-[16px] font-semibold leading-[1.35] tracking-[-0.025em] text-[#101A18]">
                  {signal.title}
                </h3>
                <p className="mt-2.5 text-pretty text-[13px] leading-[1.7] text-[#475569]">
                  {signal.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col gap-2.5 rounded-xl border border-[#E2E8F0] bg-white/65 px-4 py-3.5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 text-[#047857]">
            <ShieldIcon className="h-4 w-4 shrink-0" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.13em]">
              Signals, not guarantees
            </span>
          </div>
          <p className="text-[11.5px] leading-[1.6] text-[#64748B] sm:ml-2">
            These signals are context for review, not a substitute for a full
            security assessment.
          </p>
        </div>
      </div>
    </section>
  );
}
