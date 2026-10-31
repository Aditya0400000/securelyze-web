import {
  CertificateIcon,
  CodeIcon,
  NetworkIcon,
  RadarIcon,
} from "../about/AboutIcons";
import { LockIcon, MailIcon } from "../pricing/PricingIcons";
import { BookOpenIcon } from "./ResourcesIcons";

const ACCENTS = {
  lime: {
    card: "hover:border-[#D1FAE5]",
    icon: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
    pill: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
    glow: "bg-[#10B981]/10",
    ring: "border-[#10B981]/25",
    label: "text-[#047857]",
  },
  sky: {
    card: "hover:border-[#D1FAE5]",
    icon: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
    pill: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
    glow: "bg-[#10B981]/10",
    ring: "border-[#10B981]/25",
    label: "text-[#047857]",
  },
  periwinkle: {
    card: "hover:border-[#D1FAE5]",
    icon: "border-[#D1FAE5] bg-[#ECFDF5] text-[#059669]",
    pill: "border-[#D1FAE5] bg-[#F8FAFC] text-[#059669]",
    glow: "bg-[#10B981]/10",
    ring: "border-[#10B981]/25",
    label: "text-[#059669]",
  },
};

const GUIDES = [
  {
    id: "ssl-tls-certificates",
    category: "Foundations",
    title: "Understanding SSL/TLS certificates",
    description:
      "What a certificate does, how to read connection context, and when a closer review is worth it.",
    icon: CertificateIcon,
    accent: ACCENTS.lime,
  },
  {
    id: "dns-records",
    category: "DNS",
    title: "A practical guide to DNS records",
    description:
      "The records that route traffic, support email, and shape how your domain is found.",
    icon: NetworkIcon,
    accent: ACCENTS.sky,
  },
  {
    id: "https-secure-connections",
    category: "HTTPS",
    title: "HTTPS and secure connections",
    description:
      "How HTTPS works, what it protects, and the configuration details worth checking.",
    icon: LockIcon,
    accent: ACCENTS.periwinkle,
  },
  {
    id: "security-headers",
    category: "Headers",
    title: "Security headers, explained",
    description:
      "Browser-facing policies that help define how your site is allowed to behave.",
    icon: CodeIcon,
    accent: ACCENTS.lime,
  },
  {
    id: "email-authentication",
    category: "Email",
    title: "Email authentication basics",
    description:
      "SPF, DKIM, and DMARC in plain language, and why they matter for your domain.",
    icon: MailIcon,
    accent: ACCENTS.sky,
  },
  {
    id: "reading-security-signals",
    category: "Workflow",
    title: "Reading your website security signals",
    description:
      "A simple way to turn public checks into a clear, prioritized next step.",
    icon: RadarIcon,
    accent: ACCENTS.periwinkle,
  },
];

export default function SecurityGuidesGrid() {
  return (
    <section
      id="guide-library"
      aria-labelledby="security-guides-library-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#F8FAFC] py-16 font-sans sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_50%_0%,rgba(209,250,229,0.62),transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-28 hidden h-[30rem] w-[30rem] rounded-full border border-[#E2E8F0] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-40 hidden h-[22rem] w-[22rem] rounded-full border border-dashed border-[#E2E8F0]/80 lg:block"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[45rem] text-center">
          <p className="flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#047857]">
            <span aria-hidden="true" className="h-px w-8 bg-[#047857]/45" />
            Guide library
            <span aria-hidden="true" className="h-px w-8 bg-[#047857]/45" />
          </p>
          <h2
            id="security-guides-library-heading"
            className="mt-4 text-balance text-[1.9rem] font-bold leading-[1.08] tracking-[-0.045em] text-[#101A18] sm:text-[2.35rem] lg:text-[2.7rem]"
          >
            Practical guides for the public side of your website.
          </h2>
          <p className="mx-auto mt-5 max-w-[39rem] text-pretty text-[14.5px] leading-[1.7] text-[#475569] sm:text-[15px]">
            Start with the foundations, then follow the signal that matters to
            you. Each guide is written to be clear, useful, and free of
            unnecessary jargon.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white/75 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#475569] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-sm">
              <BookOpenIcon className="h-3 w-3" />
              6 guide topics
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white/75 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#475569] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-sm">
              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-[#059669]"
              />
              Plain language
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5">
          {GUIDES.map((guide) => {
            const Icon = guide.icon;
            const accent = guide.accent;

            return (
              <article
                key={guide.id}
                id={guide.id}
                className={`group relative flex h-full min-w-0 scroll-mt-28 flex-col overflow-hidden rounded-[1.5rem] border border-[#E2E8F0] bg-[linear-gradient(160deg,#FFFFFF_0%,#FBFDFF_100%)] p-5 shadow-[0_24px_60px_-48px_rgba(16,26,24,0.55)] transition-[border-color,box-shadow] duration-200 ease-out hover:shadow-[0_30px_70px_-46px_rgba(16,26,24,0.62)] motion-reduce:transition-none sm:p-6 ${accent.card}`}
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full ${accent.glow} blur-2xl`}
                />
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-10 -top-14 h-32 w-32 rounded-full border ${accent.ring}`}
                />

                <div className="relative flex items-start justify-between gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border ${accent.icon}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.14em] ${accent.pill}`}
                  >
                    {guide.category}
                  </span>
                </div>

                <h3 className="relative mt-5 text-[1.1rem] font-bold leading-[1.25] tracking-[-0.03em] text-[#101A18] sm:text-[1.2rem]">
                  {guide.title}
                </h3>
                <p className="relative mt-2.5 text-[12.5px] leading-[1.65] text-[#475569]">
                  {guide.description}
                </p>

                <div className="relative mt-auto flex items-center justify-between gap-3 border-t border-[#F1F5F9] pt-4">
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                    <BookOpenIcon className="h-3.5 w-3.5" />
                    Guide
                  </span>
                  <span
                    className={`text-[9px] font-medium uppercase tracking-[0.14em] ${accent.label}`}
                  >
                    Library preview
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
