import { ArrowRightIcon, CompassIcon } from "../about/AboutIcons";
import { ArticleIcon, BookOpenIcon } from "./ResourcesIcons";
import SmoothAnchor from "./SmoothAnchor";

const RESOURCE_PATHS = [
  {
    label: "Learn",
    detail: "Guides & basics",
    href: "#learn",
    icon: BookOpenIcon,
    lightIcon: "border-[#D7E9B0] bg-[#F2FADF] text-[#5C8414]",
    darkIcon: "border-[#C6F36A]/20 bg-[#C6F36A]/10 text-[#D8FA93]",
    dot: "bg-[#C6F36A]",
  },
  {
    label: "Read",
    detail: "Articles & insights",
    href: "#read",
    icon: ArticleIcon,
    lightIcon: "border-[#EADCB8] bg-[#FDF8EC] text-[#8A6A1F]",
    darkIcon: "border-[#F2C94C]/20 bg-[#F2C94C]/10 text-[#F7E3B4]",
    dot: "bg-[#F2C94C]",
  },
  {
    label: "Explore",
    detail: "Tutorials & updates",
    href: "#explore",
    icon: CompassIcon,
    lightIcon: "border-[#D8DCF7] bg-[#F0F1FD] text-[#5B5BB0]",
    darkIcon: "border-[#B9C3FF]/20 bg-[#B9C3FF]/10 text-[#DCE2FF]",
    dot: "bg-[#B9C3FF]",
  },
];

function HeroVisual() {
  return (
    <figure className="relative mx-auto w-full max-w-[34rem] lg:max-w-[36rem]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle_at_55%_45%,rgba(125,211,216,0.15),transparent_68%)] blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[2rem] border border-[#0A2A46]/20 bg-[#071D34] p-1.5 shadow-[0_45px_110px_-48px_rgba(1,18,38,0.8),inset_0_1px_0_rgba(255,255,255,0.12)]">
        <div className="relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#081F36]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_6%,rgba(242,201,76,0.12),transparent_38%),radial-gradient(circle_at_12%_100%,rgba(198,243,106,0.08),transparent_36%)]"
          />

          <div className="relative flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF8A3D]/80" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#F2C94C]/55" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            </div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55">
              Resource library
            </span>
          </div>

          <div className="relative p-3.5 sm:p-5">
            <div className="relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/[0.035] px-4 py-6 text-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.07]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6F36A]/[0.045] blur-2xl"
              />

              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C6F36A]/25 bg-[#0B2E4D] text-[#C6F36A] shadow-[0_0_36px_-10px_rgba(198,243,106,0.4)]">
                <BookOpenIcon className="h-6 w-6" />
              </span>
              <p className="relative mt-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                A clearer starting point
              </p>
              <p className="relative mt-1.5 text-[17px] font-semibold tracking-[-0.025em] text-white">
                Learn. Read. Explore.
              </p>
              <p className="relative mx-auto mt-2 max-w-[18rem] text-[11.5px] leading-[1.6] text-white/55">
                Guidance, context, and answers for your next security question.
              </p>
            </div>

            <div className="mt-2.5 space-y-1.5">
              {RESOURCE_PATHS.map((category) => {
                const Icon = category.icon;

                return (
                  <div
                    key={category.label}
                    className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-2.5"
                  >
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border ${category.darkIcon}`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[11px] font-medium text-white/85">
                          {category.label}
                        </p>
                        <p className="mt-0.5 truncate text-[9px] font-medium uppercase tracking-[0.12em] text-white/40">
                          {category.detail}
                        </p>
                      </div>
                    </div>
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 shrink-0 rounded-full ${category.dot}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative flex flex-wrap items-center justify-between gap-2 border-t border-white/10 px-4 py-2.5 text-[9px] font-medium uppercase tracking-[0.14em] text-white/55 sm:px-5">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full border border-white/30" />
              Practical guidance
            </span>
            <span>Securelyze resources</span>
          </div>
        </div>
      </div>

      <figcaption className="mt-4 px-3 text-center text-[11px] leading-[1.6] text-[#647C8D]">
        A connected library of guidance, perspectives, and answers for the
        public side of your website.
      </figcaption>
    </figure>
  );
}

export default function ResourcesHero() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-hero-heading"
      className="relative isolate scroll-mt-24 overflow-hidden border-b border-[#DCE7F1] bg-[linear-gradient(180deg,#F7FAFC_0%,#FBFDFF_58%,#FFFFFF_100%)] font-sans selection:bg-[#C6F36A] selection:text-[#071D34]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[#E6F4F2]/70 blur-3xl" />
        <div className="absolute right-[-8rem] top-[-4rem] h-[26rem] w-[26rem] rounded-full bg-[#C6F36A]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(7,29,52,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(7,29,52,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_34%_0%,black,transparent_72%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-12 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#0B2B45]/10 bg-white/80 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4A6477] shadow-[0_8px_24px_-18px_rgba(7,29,52,0.35)] backdrop-blur-sm">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#6F9E13]"
            />
            Resources
          </p>

          <h1
            id="resources-hero-heading"
            className="mt-6 max-w-[43rem] text-balance text-[2.65rem] font-semibold leading-[1.01] tracking-[-0.055em] text-[#071D34] sm:text-[3.4rem] lg:text-[3.75rem]"
          >
            Security knowledge,{" "}
            <span className="relative inline-block">
              made practical.
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[linear-gradient(90deg,#C6F36A_0%,#8ED13C_60%,#6F9E13_100%)] sm:-bottom-1.5"
              />
            </span>
          </h1>

          <p className="mt-7 max-w-[38rem] text-pretty text-[15.5px] leading-[1.72] text-[#526B7F] sm:text-[16.5px]">
            A complete resource center for understanding website security, from
            the fundamentals to hands-on checks. Learn at your own pace, read
            what is coming next, and explore the signals that matter.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <SmoothAnchor
              href="#learn"
              className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-[#C6F36A] px-5 text-[13.5px] font-semibold tracking-[-0.005em] text-[#071D34] shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_14px_30px_-18px_rgba(96,133,28,0.9)] transition-[transform,background-color,box-shadow] duration-200 ease-out hover:bg-[#D2F77F] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_18px_36px_-18px_rgba(96,133,28,0.95)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#071D34] focus-visible:ring-offset-2 motion-safe:hover:-translate-y-px motion-reduce:transition-none"
            >
              Start with Learn
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </SmoothAnchor>

            <SmoothAnchor
              href="#explore"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#0B2B45]/15 bg-white/70 px-5 text-[13.5px] font-semibold tracking-[-0.005em] text-[#0B2B45] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-sm transition-colors duration-200 hover:border-[#0B2B45]/25 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#071D34] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              Jump to Explore
              <CompassIcon className="h-4 w-4" />
            </SmoothAnchor>
          </div>

          <nav
            aria-label="Resources sections"
            className="mt-8 border-t border-[#DCE7F1] pt-5"
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#7A8FA0]">
              Browse the page
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {RESOURCE_PATHS.map((category) => {
                const Icon = category.icon;

                return (
                  <SmoothAnchor
                    key={category.label}
                    href={category.href}
                    className="group flex items-center gap-2.5 rounded-xl border border-[#DCE7F1] bg-white/80 px-3 py-2.5 shadow-[inset_0_1px_0_#FFFFFF] transition-[border-color,background-color] duration-150 hover:border-[#C9DFA4] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17344E] focus-visible:ring-offset-2 motion-reduce:transition-none"
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${category.lightIcon}`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[11.5px] font-semibold text-[#10283E]">
                        {category.label}
                      </span>
                      <span className="mt-0.5 block truncate text-[8px] font-medium uppercase tracking-[0.08em] text-[#7A8FA0]">
                        {category.detail}
                      </span>
                    </span>
                    <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 text-[#8A9BAA] transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none" />
                  </SmoothAnchor>
                );
              })}
            </div>
          </nav>
        </div>

        <div className="min-w-0">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
