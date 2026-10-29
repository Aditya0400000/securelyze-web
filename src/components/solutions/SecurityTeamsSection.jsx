import {
  AssetsIcon,
  GlobeIcon,
  NetworkIcon,
  RadarIcon,
  ShieldIcon,
} from "../about/AboutIcons";
import { EyeIcon, LayersIcon } from "../pricing/PricingIcons";
import SolutionsCta from "./SolutionsCta";

const CATEGORIES = [
  {
    label: "Domains",
    detail: "Primary web properties",
    icon: GlobeIcon,
    iconTone: "border-[#8FCCFF]/20 bg-[#8FCCFF]/[0.07] text-[#C4E7FF]",
  },
  {
    label: "Subdomains",
    detail: "Public hostnames",
    icon: NetworkIcon,
    iconTone: "border-[#B9C3FF]/20 bg-[#B9C3FF]/[0.07] text-[#DCE2FF]",
  },
  {
    label: "Services",
    detail: "Internet-facing endpoints",
    icon: AssetsIcon,
    iconTone: "border-[#C6F36A]/20 bg-[#C6F36A]/[0.07] text-[#D8FA93]",
  },
  {
    label: "DNS context",
    detail: "Routing and mail records",
    icon: RadarIcon,
    iconTone: "border-[#8FCCFF]/20 bg-[#8FCCFF]/[0.07] text-[#C4E7FF]",
  },
];

const ORBIT_ICONS = [
  {
    icon: ShieldIcon,
    position: "left-[4%] top-[12%]",
    tone: "border-[#C6F36A]/20 bg-[#0B2744]/90 text-[#D8FA93]",
  },
  {
    icon: NetworkIcon,
    position: "right-[4%] top-[12%]",
    tone: "border-[#8FCCFF]/20 bg-[#0B2744]/90 text-[#C4E7FF]",
  },
  {
    icon: AssetsIcon,
    position: "left-[4%] bottom-[12%]",
    tone: "border-[#B9C3FF]/20 bg-[#0B2744]/90 text-[#DCE2FF]",
  },
  {
    icon: RadarIcon,
    position: "right-[4%] bottom-[12%]",
    tone: "border-[#C6F36A]/20 bg-[#0B2744]/90 text-[#D8FA93]",
  },
];

const TEAM_BENEFITS = [
  {
    title: "Asset visibility",
    description: "See how public assets fit together.",
    icon: EyeIcon,
  },
  {
    title: "Posture context",
    description: "Connect asset context with available checks.",
    icon: LayersIcon,
  },
  {
    title: "Clear scope",
    description: "Focus on what matters most.",
    icon: ShieldIcon,
  },
];

function SecurityTeamsVisual() {
  return (
    <figure
      aria-labelledby="security-teams-visual-caption"
      className="relative mx-auto w-full max-w-[34rem]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(circle_at_55%_40%,rgba(143,204,255,0.16),transparent_68%)] blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#081A31]/80 p-4 shadow-[0_35px_90px_-55px_rgba(0,0,0,0.9)] sm:p-5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(143,204,255,0.08),transparent_40%),radial-gradient(ellipse_at_100%_100%,rgba(185,195,255,0.06),transparent_42%)]"
        />

        <div className="relative flex items-center justify-between gap-3 border-b border-white/[0.08] pb-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#B9C3FF]/20 bg-[#B9C3FF]/10 text-[#DCE2FF]">
              <AssetsIcon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/45">
                External footprint
              </p>
              <p className="mt-0.5 truncate text-[10.5px] font-medium text-white/75">
                Asset discovery
              </p>
            </div>
          </div>

          <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-white/50">
            For security teams
          </span>
        </div>

        <div className="relative mt-3 overflow-hidden rounded-xl border border-white/10 bg-[#06172A] px-4 pb-4 pt-5">
          <div className="relative mx-auto flex h-44 w-full items-center justify-center sm:h-52">
            <div
              aria-hidden="true"
              className="absolute h-40 w-40 rounded-full border border-dashed border-white/10 sm:h-48 sm:w-48"
            />
            <div
              aria-hidden="true"
              className="absolute h-24 w-24 rounded-full border border-[#C6F36A]/15 sm:h-28 sm:w-28"
            />
            <div
              aria-hidden="true"
              className="absolute h-16 w-16 rounded-full bg-[#C6F36A]/10 blur-xl"
            />

            <span className="relative flex h-20 w-20 items-center justify-center rounded-[1.4rem] border border-[#C6F36A]/25 bg-[#0B2E4D] text-[#C6F36A] shadow-[0_20px_50px_-24px_rgba(198,243,106,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] sm:h-24 sm:w-24">
              <GlobeIcon className="h-9 w-9 sm:h-10 sm:w-10" />
            </span>

            {ORBIT_ICONS.map(({ icon: Icon, position, tone }) => (
              <span
                key={position}
                aria-hidden="true"
                className={`absolute ${position} flex h-9 w-9 items-center justify-center rounded-xl border ${tone} shadow-[0_14px_30px_-18px_rgba(0,0,0,0.8)] backdrop-blur-sm`}
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>

          <div className="relative mt-3 grid grid-cols-2 gap-2">
            {CATEGORIES.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.label}
                  className="group rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 transition duration-300 motion-safe:hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.055]"
                >
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-lg border ${category.iconTone}`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <p className="mt-2 text-[10.5px] font-semibold text-white">
                    {category.label}
                  </p>
                  <p className="mt-0.5 text-[8.5px] leading-[1.5] text-white/45">
                    {category.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.08] pt-3 text-[8.5px] font-medium tracking-[0.02em] text-white/40">
          <span>Domains &middot; Subdomains &middot; Services &middot; DNS</span>
          <span className="inline-flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-[#8FCCFF]"
            />
            Built for security teams
          </span>
        </div>
      </div>

      <figcaption id="security-teams-visual-caption" className="sr-only">
        Abstract illustration of an external footprint with domains,
        subdomains, services, and DNS context arranged around a central globe.
      </figcaption>
    </figure>
  );
}

export default function SecurityTeamsSection() {
  return (
    <section
      id="security-teams"
      aria-labelledby="security-teams-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[linear-gradient(180deg,#FCFDFE_0%,#F1F5F9_52%,#F8FAFC_100%)] py-16 font-sans sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-[52rem] -translate-x-1/2 rounded-full bg-[#DCE8F2]/60 blur-[110px]" />
        <div className="absolute -left-28 bottom-10 h-64 w-64 rounded-full border border-[#DCE7F1]" />
        <div className="absolute -right-32 top-16 h-80 w-80 rounded-full border border-dashed border-[#DCE7F1]/80" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(7,29,52,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(7,29,52,0.022)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_50%_18%,black,transparent_68%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:px-8">
        <div className="order-2 min-w-0 lg:order-1">
          <SecurityTeamsVisual />
        </div>

        <div className="order-1 min-w-0 lg:order-2">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4F7410]">
            <span aria-hidden="true" className="h-px w-8 bg-[#4F7410]/45" />
            Security Teams
          </p>

          <h2
            id="security-teams-heading"
            className="mt-4 max-w-[36rem] text-balance text-[2rem] font-bold leading-[1.06] tracking-[-0.045em] text-[#071D34] sm:text-[2.35rem] lg:text-[2.75rem]"
          >
            A clearer view of your external footprint.
          </h2>

          <p className="mt-5 max-w-[35rem] text-pretty text-[14.5px] leading-[1.75] text-[#526B7F] sm:text-[15px]">
            Bring asset visibility and security context together to support
            scoping, review, and prioritization.
          </p>

          <p className="mt-4 max-w-[35rem] text-pretty text-[14.5px] leading-[1.75] text-[#526B7F] sm:text-[15px]">
            A practical view for the work that comes next.
          </p>

          <ul className="mt-6 space-y-2">
            {TEAM_BENEFITS.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <li
                  key={benefit.title}
                  className="flex items-start gap-3 rounded-xl border border-[#DCE7F1] bg-white/70 px-3 py-2.5 transition duration-300 motion-safe:hover:-translate-y-0.5 hover:border-[#C9DDF0] hover:bg-white"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#C9DDF0] bg-[#EEF7FE] text-[#286B96]">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10.5px] font-semibold text-[#071D34]">
                      {benefit.title}
                    </p>
                    <p className="mt-0.5 text-[10px] leading-[1.55] text-[#526B7F]">
                      {benefit.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-7">
            <SolutionsCta href="/platform#assets-discovery">
              Explore the Platform
            </SolutionsCta>
          </div>
        </div>
      </div>
    </section>
  );
}
