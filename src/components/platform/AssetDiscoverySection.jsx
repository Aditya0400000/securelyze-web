import { ArrowRightIcon, RadarIcon } from "../about/AboutIcons";

const PLANNED_GROUPS = ["Domains", "Subdomains", "Endpoints"];

function AssetFootprintPreview() {
  return (
    <figure
      aria-labelledby="asset-footprint-caption"
      className="mx-auto w-full min-w-0 max-w-[44rem]"
    >
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#081A31]/80 p-4 shadow-[0_35px_90px_-55px_rgba(0,0,0,0.9)] sm:p-5 lg:p-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(143,204,255,0.08),transparent_40%),radial-gradient(ellipse_at_100%_100%,rgba(185,195,255,0.06),transparent_42%)]"
        />

        <div className="relative flex items-center justify-between gap-3 border-b border-white/[0.08] pb-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#B9C3FF]/20 bg-[#B9C3FF]/10 text-[#DCE2FF]">
              <RadarIcon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/45">
                Public footprint view
              </p>
              <p className="mt-0.5 truncate text-[11px] font-medium text-white/80">
                Sample asset map
              </p>
            </div>
          </div>

          <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-white/50">
            Illustrative
          </span>
        </div>

        <svg
          aria-hidden="true"
          viewBox="0 0 440 280"
          fill="none"
          className="relative mt-2 h-auto w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle
            cx="220"
            cy="140"
            r="112"
            stroke="rgba(255,255,255,0.055)"
          />
          <circle
            cx="220"
            cy="140"
            r="76"
            stroke="rgba(255,255,255,0.05)"
            strokeDasharray="4 7"
          />
          <circle
            cx="220"
            cy="140"
            r="42"
            fill="rgba(198,243,106,0.045)"
            stroke="rgba(198,243,106,0.16)"
          />

          <path
            d="M220 140 80 70M220 140 360 70M220 140 72 220M220 140 368 220M220 140 220 30M220 140 220 250"
            stroke="rgba(185,195,255,0.22)"
          />
          <path
            d="M80 70 42 42M360 70 398 42M72 220 36 248M368 220 404 248"
            stroke="rgba(143,204,255,0.12)"
          />

          <circle cx="150" cy="105" r="2.5" fill="#8FCCFF" fillOpacity="0.6" />
          <circle cx="290" cy="105" r="2.5" fill="#B9C3FF" fillOpacity="0.55" />
          <circle cx="146" cy="180" r="2.2" fill="#8FCCFF" fillOpacity="0.45" />
          <circle cx="294" cy="180" r="2.2" fill="#B9C3FF" fillOpacity="0.45" />
          <circle cx="220" cy="30" r="3" fill="#C6F36A" fillOpacity="0.7" />
          <circle cx="220" cy="250" r="3" fill="#8FCCFF" fillOpacity="0.5" />
          <circle cx="42" cy="42" r="2" fill="#8FCCFF" fillOpacity="0.4" />
          <circle cx="398" cy="42" r="2" fill="#B9C3FF" fillOpacity="0.4" />
          <circle cx="36" cy="248" r="2" fill="#8FCCFF" fillOpacity="0.35" />
          <circle cx="404" cy="248" r="2" fill="#B9C3FF" fillOpacity="0.35" />

          <rect
            x="165"
            y="124"
            width="110"
            height="32"
            rx="9"
            fill="#C6F36A"
          />
          <text
            x="220"
            y="145"
            textAnchor="middle"
            fill="#071D34"
            fontSize="13"
            fontWeight="600"
          >
            example.com
          </text>

          <rect
            x="39"
            y="57"
            width="82"
            height="26"
            rx="7"
            fill="#0B223B"
            stroke="rgba(255,255,255,0.1)"
          />
          <text
            x="80"
            y="74"
            textAnchor="middle"
            fill="rgba(255,255,255,0.75)"
            fontSize="12"
            fontWeight="500"
          >
            www
          </text>

          <rect
            x="319"
            y="57"
            width="82"
            height="26"
            rx="7"
            fill="#0B223B"
            stroke="rgba(255,255,255,0.1)"
          />
          <text
            x="360"
            y="74"
            textAnchor="middle"
            fill="rgba(255,255,255,0.75)"
            fontSize="12"
            fontWeight="500"
          >
            api
          </text>

          <rect
            x="31"
            y="207"
            width="82"
            height="26"
            rx="7"
            fill="#0B223B"
            stroke="rgba(255,255,255,0.1)"
          />
          <text
            x="72"
            y="224"
            textAnchor="middle"
            fill="rgba(255,255,255,0.75)"
            fontSize="12"
            fontWeight="500"
          >
            cdn
          </text>

          <rect
            x="327"
            y="207"
            width="82"
            height="26"
            rx="7"
            fill="#0B223B"
            stroke="rgba(255,255,255,0.1)"
          />
          <text
            x="368"
            y="224"
            textAnchor="middle"
            fill="rgba(255,255,255,0.75)"
            fontSize="12"
            fontWeight="500"
          >
            mail
          </text>
        </svg>

        <div className="relative mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.08] pt-3 text-[8.5px] font-medium tracking-[0.02em] text-white/40">
          <span>Sample nodes · Not a live scan</span>
          <span className="inline-flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-[#C6F36A]"
            />
            Preview only
          </span>
        </div>
      </div>

      <figcaption id="asset-footprint-caption" className="sr-only">
        Illustrative asset map for example.com showing sample subdomains www,
        api, cdn, and mail. This is not a live scan.
      </figcaption>
    </figure>
  );
}

export default function AssetDiscoverySection() {
  return (
    <section
      id="assets-discovery"
      aria-labelledby="asset-discovery-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#07152B] py-16 font-sans text-white sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-[30rem] w-[30rem] rounded-full bg-[#2A7AB8]/15 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#C6F36A]/[0.05] blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_55%_30%,black,transparent_75%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14 xl:gap-20">
          <div className="min-w-0 lg:col-span-5">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C6F36A]">
              <span aria-hidden="true" className="h-px w-8 bg-[#C6F36A]/50" />
              Asset Discovery
            </p>

            <h2
              id="asset-discovery-heading"
              className="mt-4 max-w-[36rem] text-balance text-[2rem] font-bold leading-[1.06] tracking-[-0.045em] text-white sm:text-[2.25rem] lg:text-[2.75rem]"
            >
              Know What&rsquo;s Exposed on the Internet
            </h2>

            <p className="mt-5 max-w-[34rem] text-pretty text-[14.5px] leading-[1.75] text-white/65 sm:text-[15px]">
              Explore publicly discoverable subdomains, DNS information, and
              internet-facing assets to better understand your external attack
              surface.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {PLANNED_GROUPS.map((group) => (
                <span
                  key={group}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[10px] font-medium text-white/65"
                >
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-[#8FCCFF]/80"
                  />
                  {group}
                </span>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#8FCCFF]/25 bg-[#8FCCFF]/[0.08] px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-[#C4E7FF]">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-[#8FCCFF]"
                  />
                  In development
                </span>
                <span className="text-[11px] font-medium text-white/50">
                  No live scans yet
                </span>
              </div>

              <p
                id="asset-discovery-status"
                className="mt-3 max-w-[26rem] text-[12px] leading-[1.65] text-white/55"
              >
                Asset discovery is in development. No live scans are available
                yet.
              </p>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  disabled
                  title="Asset Discovery is coming soon"
                  aria-describedby="asset-discovery-status"
                  className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-5 text-[12px] font-semibold text-white/45 disabled:cursor-not-allowed sm:w-auto"
                >
                  Explore Asset Discovery
                </button>

                <a
                  href="#website-security-check"
                  className="group inline-flex items-center justify-center gap-2 text-[11.5px] font-semibold text-[#C6F36A] transition-colors duration-200 hover:text-[#E5FFD0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F36A] focus-visible:ring-offset-4 focus-visible:ring-offset-[#07152B] motion-reduce:transition-none"
                >
                  Preview the security checker
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
                </a>
              </div>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <AssetFootprintPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
