import { EyeIcon, LayersIcon, WalletOffIcon } from "./PricingIcons";

const POINTS = [
  {
    title: "No subscription fees",
    description:
      "There is no recurring subscription charge for the tools currently offered.",
    icon: WalletOffIcon,
    iconClass: "border-[#D7E9B0] bg-[#F2FADF] text-[#5C8414]",
  },
  {
    title: "No paid tiers currently offered",
    description:
      "Securelyze does not currently offer paid plans or paid upgrades.",
    icon: LayersIcon,
    iconClass: "border-[#BFDDF6] bg-[#EAF4FD] text-[#286B96]",
  },
  {
    title: "Transparent access to the listed tools",
    description:
      "The included capabilities are presented together, with no upgrade path to decode.",
    icon: EyeIcon,
    iconClass: "border-[#D8DCFF] bg-[#EEEFFF] text-[#5562B4]",
  },
];

export default function PricingTrust() {
  return (
    <section
      aria-labelledby="pricing-trust-heading"
      className="relative overflow-hidden bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-1/2 hidden h-80 w-80 -translate-y-1/2 rounded-full border border-[#DCE7F1] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-1/2 hidden h-56 w-56 -translate-y-1/2 rounded-full border border-dashed border-[#DCE7F1]/80 lg:block"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#DCE7F1] bg-[linear-gradient(135deg,#F8FBF3_0%,#F6FAFD_52%,#FFFFFF_100%)] p-6 shadow-[0_28px_75px_-55px_rgba(7,29,52,0.5)] sm:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#C6F36A]/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(7,29,52,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(7,29,52,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_0%_50%,black,transparent_58%)]"
          />

          <div className="relative grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-12">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4F7410]">
                <span aria-hidden="true" className="h-px w-8 bg-[#4F7410]/45" />
                Trust &amp; transparency
              </p>
              <h2
                id="pricing-trust-heading"
                className="mt-4 max-w-[24rem] text-balance text-[1.7rem] font-bold leading-[1.12] tracking-[-0.045em] text-[#071D34] sm:text-[2rem] lg:text-[2.2rem]"
              >
                Free, without the fine print.
              </h2>
              <p className="mt-4 max-w-[25rem] text-pretty text-[13.5px] leading-[1.7] text-[#526B7F]">
                One plan, one price, and a clear statement of what is currently
                offered. No upgrade path to decode.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {POINTS.map((point) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.title}
                    className="rounded-2xl border border-[#DDE9F2] bg-white/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]"
                  >
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl border ${point.iconClass}`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="mt-4 text-[12.5px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#071D34]">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-[11.5px] leading-[1.6] text-[#526B7F]">
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
