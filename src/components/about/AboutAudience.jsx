import {
  CompassIcon,
  DeveloperIcon,
  ShieldIcon,
  UserIcon,
} from "./AboutIcons";

const AUDIENCES = [
  {
    number: "01",
    overline: "Website owners",
    title: "See the public side of your site.",
    description:
      "Understand what your website shares with the public and which configuration details may be worth reviewing, without needing to become a security specialist first.",
    icon: UserIcon,
    iconClass: "border-[#D7E9B0] bg-[#F2FADF] text-[#5C8414]",
  },
  {
    number: "02",
    overline: "Developers",
    title: "Keep security context close to the work.",
    description:
      "Check certificate, DNS, and header context when you ship a change, debug an integration, or investigate unexpected behavior.",
    icon: DeveloperIcon,
    iconClass: "border-[#BFDDF6] bg-[#EAF4FD] text-[#286B96]",
  },
  {
    number: "03",
    overline: "Security professionals",
    title: "Start with a connected external view.",
    description:
      "Use visibility into public signals and related assets as a starting point for scoping, mapping, and the follow-up work that comes next.",
    icon: ShieldIcon,
    iconClass: "border-[#D8DCFF] bg-[#EEEFFF] text-[#5562B4]",
  },
];

export default function AboutAudience() {
  return (
    <section
      aria-labelledby="audience-heading"
      className="relative overflow-hidden bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-24 hidden h-[26rem] w-[26rem] rounded-full border border-[#DCE7F1] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-36 hidden h-[20rem] w-[20rem] rounded-full border border-dashed border-[#DCE7F1]/80 lg:block"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-5">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6F9E13]">
              <span aria-hidden="true" className="h-px w-8 bg-[#6F9E13]/45" />
              Who it helps
            </p>
            <h2
              id="audience-heading"
              className="mt-4 max-w-[32rem] text-balance text-[1.9rem] font-bold leading-[1.08] tracking-[-0.045em] text-[#071D34] sm:text-[2.35rem] lg:text-[2.7rem]"
            >
              Built for the people who keep the public web moving.
            </h2>
            <p className="mt-5 max-w-[31rem] text-pretty text-[14.5px] leading-[1.7] text-[#526B7F] sm:text-[15px]">
              Different roles ask different questions. Securelyze keeps the
              starting point shared: clear context about what a website exposes
              and where to look next.
            </p>

            <div className="mt-8 hidden max-w-[27rem] items-center gap-3 rounded-2xl border border-[#DCE7F1] bg-[#F8FBFD] px-4 py-3.5 lg:flex">
              <div className="flex -space-x-1.5">
                {[UserIcon, DeveloperIcon, ShieldIcon].map((Icon, index) => (
                  <span
                    key={index}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white bg-[#EAF2F8] text-[#42647D] shadow-sm"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                ))}
              </div>
              <p className="text-[11.5px] font-medium leading-[1.55] text-[#526B7F]">
                One connected view for owners, builders, and defenders.
              </p>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <div className="border-y border-[#DCE7F1]">
              {AUDIENCES.map((audience) => {
                const Icon = audience.icon;

                return (
                  <article
                    key={audience.overline}
                    className="grid gap-4 border-b border-[#DCE7F1] py-6 last:border-b-0 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:py-7"
                  >
                    <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${audience.iconClass}`}
                      >
                        <Icon className="h-[21px] w-[21px]" />
                      </span>
                      <span className="font-mono text-[9px] font-medium tracking-[0.08em] text-[#A2B3C0]">
                        {audience.number}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <p className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-[#5D7487]">
                        {audience.overline}
                      </p>
                      <h3 className="mt-2 text-pretty text-[17px] font-semibold leading-[1.35] tracking-[-0.025em] text-[#071D34] sm:text-[18px]">
                        {audience.title}
                      </h3>
                      <p className="mt-2 max-w-[38rem] text-pretty text-[13.5px] leading-[1.7] text-[#526B7F]">
                        {audience.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div
          id="mission"
          aria-labelledby="mission-heading"
          className="relative mt-14 scroll-mt-28 overflow-hidden rounded-[1.75rem] border border-[#D9E8B7] bg-[#F3FADE] p-6 shadow-[0_24px_60px_-48px_rgba(80,112,30,0.55)] sm:p-8 lg:mt-20 lg:p-10"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#C6F36A]/40"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-16 h-56 w-56 rounded-full border border-dashed border-[#A5C862]/40"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-8 top-8 h-20 w-20 rounded-full bg-[#C6F36A]/20 blur-2xl"
          />

          <div className="relative grid gap-6 lg:grid-cols-12 lg:items-start lg:gap-10">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#A5C862]/35 bg-white/65 text-[#5C8414]">
                  <CompassIcon className="h-4 w-4" />
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5C7C24]">
                  Our mission
                </p>
              </div>
              <h3
                id="mission-heading"
                className="mt-5 max-w-[35rem] text-balance text-[1.45rem] font-bold leading-[1.2] tracking-[-0.04em] text-[#071D34] sm:text-[1.8rem]"
              >
                Make public security signals easier to see, connect, and act on.
              </h3>
            </div>

            <div className="lg:col-span-6">
              <p className="max-w-[35rem] text-pretty text-[14px] leading-[1.7] text-[#4F6441] sm:text-[14.5px]">
                Security information is most useful when it is understandable
                and connected. We build Securelyze to help people move from
                scattered signals to a more useful starting point, without
                adding more noise.
              </p>
              <p className="mt-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#5C7C24]">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-[#6F9E13]"
                />
                Clarity before assumption
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
