import {
  CertificateIcon,
  CodeIcon,
  DeveloperIcon,
  NetworkIcon,
} from "../about/AboutIcons";
import { LockIcon } from "../pricing/PricingIcons";
import SolutionsCta from "./SolutionsCta";

const LAYERS = [
  {
    label: "TLS",
    detail: "Certificate context",
    icon: CertificateIcon,
    iconTone: "border-[#10B981]/20 bg-[#10B981]/[0.07] text-[#D1FAE5]",
  },
  {
    label: "DNS",
    detail: "Record details",
    icon: NetworkIcon,
    iconTone: "border-[#10B981]/20 bg-[#10B981]/[0.07] text-[#D1FAE5]",
  },
  {
    label: "HTTPS",
    detail: "Connection behavior",
    icon: LockIcon,
    iconTone: "border-[#10B981]/20 bg-[#10B981]/[0.07] text-[#D1FAE5]",
  },
  {
    label: "Headers",
    detail: "Browser policy",
    icon: CodeIcon,
    iconTone: "border-[#10B981]/20 bg-[#10B981]/[0.07] text-[#D1FAE5]",
  },
];

function DevelopersVisual() {
  return (
    <figure
      aria-labelledby="developers-visual-caption"
      className="relative mx-auto w-full max-w-[34rem]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(16,185,129,0.14),transparent_68%)] blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#183B32]/80 p-4 shadow-[0_35px_90px_-55px_rgba(0,0,0,0.9)] sm:p-5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_0%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(ellipse_at_100%_100%,rgba(16,185,129,0.06),transparent_42%)]"
        />

        <div className="relative flex items-center justify-between gap-3 border-b border-white/[0.08] pb-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#10B981]/20 bg-[#10B981]/10 text-[#D1FAE5]">
              <DeveloperIcon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/45">
                Developer view
              </p>
              <p className="mt-0.5 truncate text-[10.5px] font-medium text-white/75">
                Technical context
              </p>
            </div>
          </div>

          <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-white/50">
            Built for review
          </span>
        </div>

        <div className="relative mt-3 overflow-hidden rounded-xl border border-white/10 bg-[#183B32] p-3.5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-3 -top-8 font-mono text-[6rem] font-bold leading-none text-white/[0.025]"
          >
            {"</>"}
          </div>

          <div className="relative flex items-center justify-between gap-3 border-b border-white/[0.07] pb-2.5">
            <span className="font-mono text-[9px] text-white/45">
              technical-view
            </span>
            <span className="font-mono text-[9px] text-white/30">
              {"</>"}
            </span>
          </div>

          <div className="relative mt-3 space-y-2">
            {LAYERS.map((layer, index) => {
              const Icon = layer.icon;

              return (
                <div
                  key={layer.label}
                  className="group flex min-w-0 items-center gap-3 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2.5 transition duration-300 motion-safe:hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.05]"
                >
                  <span className="font-mono text-[8px] text-white/25">
                    0{index + 1}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border ${layer.iconTone}`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-semibold text-[#D1FAE5]">
                        {layer.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-px flex-1 bg-white/[0.06]"
                      />
                      <span className="truncate font-mono text-[8px] text-white/40">
                        {layer.detail}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.08] pt-3 text-[8.5px] font-medium tracking-[0.02em] text-white/40">
          <span>TLS &middot; DNS &middot; HTTPS &middot; Headers</span>
          <span className="inline-flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-[#10B981]"
            />
            Technical context
          </span>
        </div>
      </div>

      <figcaption id="developers-visual-caption" className="sr-only">
        Abstract illustration of four technical layers for developer review:
        TLS certificate context, DNS record details, HTTPS connection behavior,
        and HTTP security headers.
      </figcaption>
    </figure>
  );
}

export default function DevelopersSection() {
  return (
    <section
      id="developers"
      aria-labelledby="developers-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#101A18] py-16 font-sans text-white selection:bg-[#10B981] selection:text-[#101A18] sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-[30rem] w-[30rem] rounded-full bg-[#047857]/15 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#10B981]/[0.05] blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_55%_30%,black,transparent_75%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:px-8">
        <div className="min-w-0">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#10B981]">
            <span aria-hidden="true" className="h-px w-8 bg-[#10B981]/50" />
            Developers
          </p>

          <h2
            id="developers-heading"
            className="mt-4 max-w-[36rem] text-balance text-[2rem] font-bold leading-[1.06] tracking-[-0.045em] text-white sm:text-[2.35rem] lg:text-[2.75rem]"
          >
            Technical context for the configuration you ship.
          </h2>

          <p className="mt-5 max-w-[35rem] text-pretty text-[14.5px] leading-[1.75] text-white/65 sm:text-[15px]">
            Review the public details behind TLS, DNS, HTTPS, and HTTP security
            headers during development, debugging, and review.
          </p>

          <p className="mt-4 max-w-[35rem] text-pretty text-[14.5px] leading-[1.75] text-white/65 sm:text-[15px]">
            Technical context, without the noise.
          </p>

          <div className="mt-7">
            <SolutionsCta
              href="/platform#website-security-check"
              onDark
            >
              Run a Security Check
            </SolutionsCta>
          </div>
        </div>

        <div className="min-w-0">
          <DevelopersVisual />
        </div>
      </div>
    </section>
  );
}
