import { CheckIcon } from "./PricingIcons";

// Keep these lists in sync with the plan features shown in PricingHero.
const SILVER_FEATURES = [
  "Basic SSL/TLS certificate checks",
  "Basic domain/DNS checks",
  "Basic security-header checks",
  "Basic HTTPS status check",
  "Basic issue summary",
];

const CUSTOM_FEATURES = [
  "Higher or custom check limits",
  "Multiple users or team access",
  "Advanced security scanning",
  "Detailed reports and integrations",
  "Priority support",
];

const FEATURE_ROWS = [
  ...SILVER_FEATURES.map((feature) => ({
    feature,
    silver: true,
    custom: true,
  })),
  ...CUSTOM_FEATURES.map((feature) => ({
    feature,
    silver: false,
    custom: true,
  })),
];

const PLAN_TONES = {
  silver: {
    header: "bg-[#FFFDF8]",
    dot: "bg-[#C9A24E]",
    title: "text-[#2A210F]",
    badge: "border-[#DCC98F] bg-[#FBF2D8] text-[#7A5A12]",
    check: "border-[#D9C27E] bg-[#FBF2D8] text-[#8A6A1F]",
  },
  custom: {
    header: "bg-[#F8FCFE]",
    dot: "bg-[#7FAECB]",
    title: "text-[#0B3150]",
    badge: "border-[#C6DDEB] bg-[#F1F8FC] text-[#4E7692]",
    check: "border-[#B9D7E9] bg-[#EFF8FD] text-[#2A7AB8]",
  },
};

function FeatureCheck({ tone }) {
  const planTone = PLAN_TONES[tone];

  return (
    <span
      className={`mx-auto flex h-6 w-6 items-center justify-center rounded-full border shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] ${planTone.check}`}
    >
      <CheckIcon className="h-3.5 w-3.5" />
      <span className="sr-only">Included</span>
    </span>
  );
}

function FeatureNotListed() {
  return (
    <span className="mx-auto flex h-6 w-6 items-center justify-center text-[#A9B9C6]">
      <span aria-hidden="true" className="text-[13px]">
        &mdash;
      </span>
      <span className="sr-only">Not listed for this plan</span>
    </span>
  );
}

function PlanColumnHeader({ plan, badge, tone }) {
  const planTone = PLAN_TONES[tone];

  return (
    <th
      scope="col"
      aria-label={badge ? `${plan} plan, ${badge}` : `${plan} plan`}
      className={`w-[22%] border-l border-[#E8EFF5] px-2 py-5 text-center align-bottom sm:w-[18%] sm:px-4 ${planTone.header}`}
    >
      <span className="inline-flex flex-col items-center gap-1.5">
        <span className="inline-flex items-center gap-1.5">
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 rounded-full ${planTone.dot}`}
          />
          <span
            className={`text-[13px] font-bold tracking-[-0.02em] sm:text-[14px] ${planTone.title}`}
          >
            {plan}
          </span>
        </span>
        <span
          className={`hidden rounded-full border px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.12em] sm:inline-flex ${planTone.badge}`}
        >
          {badge}
        </span>
      </span>
    </th>
  );
}

export default function PricingComparison() {
  return (
    <section
      id="plans-features"
      aria-labelledby="plans-features-heading"
      aria-describedby="plans-features-note"
      className="relative scroll-mt-28 overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F9FC_100%)] py-16 font-sans sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-[52rem] -translate-x-1/2 rounded-full bg-[#DCE8F2]/55 blur-[110px]" />
        <div className="absolute -left-28 bottom-16 h-64 w-64 rounded-full border border-[#DCE7F1]" />
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full border border-dashed border-[#DCE7F1]/80" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(7,29,52,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(7,29,52,0.022)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_50%_18%,black,transparent_68%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[48rem] text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#D7E3EC] bg-white/70 px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#4E6A80] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-sm">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#C9A24E] shadow-[0_0_10px_rgba(201,162,78,0.55)]"
            />
            What&rsquo;s included
          </p>

          <h2
            id="plans-features-heading"
            className="mt-6 text-balance text-[2rem] font-bold leading-[1.04] tracking-[-0.055em] text-[#071D34] sm:text-[2.6rem] lg:text-[3rem]"
          >
            Plans &amp; Features Included
          </h2>

          <p className="mx-auto mt-5 max-w-[40rem] text-pretty text-[14px] leading-[1.72] text-[#526B7F] sm:text-[15px]">
            Compare the capabilities available across Silver and Custom at a
            glance.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[64rem] sm:mt-12">
          <div className="overflow-hidden rounded-[1.75rem] border border-[#D9E5EF] bg-white shadow-[0_30px_80px_-55px_rgba(7,29,52,0.5),0_8px_24px_-20px_rgba(7,29,52,0.12)]">
            <table className="w-full table-fixed border-collapse text-left">
              <caption className="sr-only">
                Comparison of features included in the Silver and Custom plans
              </caption>

              <thead>
                <tr className="border-b border-[#E3ECF3]">
                  <th
                    scope="col"
                    className="bg-[#FBFDFF] px-4 py-5 text-left sm:px-6"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#607386]">
                      Features
                    </span>
                  </th>
                  <PlanColumnHeader
                    plan="Silver"
                    badge="Most Popular"
                    tone="silver"
                  />
                  <PlanColumnHeader
                    plan="Custom"
                    badge="Proposed"
                    tone="custom"
                  />
                </tr>
              </thead>

              <tbody>
                {FEATURE_ROWS.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-[#EDF2F7] last:border-b-0 ${
                      index === SILVER_FEATURES.length
                        ? "border-t border-[#DCE7F1]"
                        : ""
                    }`}
                  >
                    <th
                      scope="row"
                      className="px-4 py-3.5 text-left text-[12.5px] font-medium leading-[1.5] text-[#36536C] sm:px-6 sm:py-4 sm:text-[13.5px]"
                    >
                      {row.feature}
                    </th>
                    <td className="border-l border-[#EDF2F7] bg-[#FFFDF8] px-2 py-3.5 text-center align-middle sm:px-4">
                      {row.silver ? (
                        <FeatureCheck tone="silver" />
                      ) : (
                        <FeatureNotListed />
                      )}
                    </td>
                    <td className="border-l border-[#EDF2F7] bg-[#F8FCFE] px-2 py-3.5 text-center align-middle sm:px-4">
                      {row.custom ? (
                        <FeatureCheck tone="custom" />
                      ) : (
                        <FeatureNotListed />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p
              id="plans-features-note"
              className="border-t border-[#E7EFF5] bg-[#FBFDFF] px-4 py-4 text-pretty text-[11px] leading-[1.65] text-[#647C8D] sm:px-6"
            >
              Silver includes the basic checks listed here. Custom includes
              every capability in this comparison; custom capabilities are
              proposed and subject to change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
