import { EyeIcon, LayersIcon, WalletOffIcon } from "./PricingIcons";

const POINTS = [
  {
    title: "Silver is free",
    description:
      "The Silver plan is presented at $0/month for essential website security checks.",
    icon: WalletOffIcon,
    iconClass: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
  },
  {
    title: "Custom is proposed",
    description:
      "Custom pricing and advanced capabilities are shown for planning and are not yet available online.",
    icon: LayersIcon,
    iconClass: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
  },
  {
    title: "Proposed details are labeled",
    description:
      "Check limits and custom features are marked as proposed and may change.",
    icon: EyeIcon,
    iconClass: "border-[#D1FAE5] bg-[#ECFDF5] text-[#059669]",
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
        className="pointer-events-none absolute -left-28 top-1/2 hidden h-80 w-80 -translate-y-1/2 rounded-full border border-[#E2E8F0] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-1/2 hidden h-56 w-56 -translate-y-1/2 rounded-full border border-dashed border-[#E2E8F0]/80 lg:block"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-[linear-gradient(135deg,#F8FBF3_0%,#F6FAFD_52%,#FFFFFF_100%)] p-6 shadow-[0_28px_75px_-55px_rgba(16,26,24,0.5)] sm:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#10B981]/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(16,26,24,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(16,26,24,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_0%_50%,black,transparent_58%)]"
          />

          <div className="relative grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-12">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#047857]">
                <span aria-hidden="true" className="h-px w-8 bg-[#047857]/45" />
                Trust &amp; transparency
              </p>
              <h2
                id="pricing-trust-heading"
                className="mt-4 max-w-[24rem] text-balance text-[1.7rem] font-bold leading-[1.12] tracking-[-0.045em] text-[#101A18] sm:text-[2rem] lg:text-[2.2rem]"
              >
                Clear plans, without the fine print.
              </h2>
              <p className="mt-4 max-w-[25rem] text-pretty text-[13.5px] leading-[1.7] text-[#475569]">
                Silver is free for essential checks. Custom pricing is scoped to
                your team, with advanced capabilities still proposed.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {POINTS.map((point) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.title}
                    className="rounded-2xl border border-[#E2E8F0] bg-white/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]"
                  >
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl border ${point.iconClass}`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="mt-4 text-[12.5px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#101A18]">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-[11.5px] leading-[1.6] text-[#475569]">
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
