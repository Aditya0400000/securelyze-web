import SecurityOverviewDashboard from "./SecurityOverviewDashboard";

export default function SecurityOverviewSection() {
  return (
    <section
      id="security-overview"
      aria-labelledby="security-overview-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[linear-gradient(180deg,#FCFDFE_0%,#F1F5F9_52%,#F8FAFC_100%)] py-16 font-sans sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-[52rem] -translate-x-1/2 rounded-full bg-[#E2E8F0]/55 blur-[110px]" />
        <div className="absolute -left-28 bottom-20 h-64 w-64 rounded-full border border-[#E2E8F0]" />
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full border border-dashed border-[#E2E8F0]/80" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,26,24,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(16,26,24,0.022)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_50%_18%,black,transparent_68%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[46rem] text-center">
          <p className="flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#047857]">
            <span aria-hidden="true" className="h-px w-8 bg-[#047857]/45" />
            Security Overview
            <span aria-hidden="true" className="h-px w-8 bg-[#047857]/45" />
          </p>

          <h2
            id="security-overview-heading"
            className="mt-4 text-balance text-[2rem] font-bold leading-[1.06] tracking-[-0.045em] text-[#101A18] sm:text-[2.35rem] lg:text-[2.75rem]"
          >
            One overview. Clearer next steps.
          </h2>

          <p className="mx-auto mt-5 max-w-[41rem] text-pretty text-[15px] leading-[1.75] text-[#475569] sm:mt-6 sm:text-base">
            Bring website checks and asset context into one summary, with status
            indicators and a score presentation designed to make the next review
            easier.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D1FAE5] bg-[#ECFDF5] px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-[#059669]">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#10B981]"
              />
              Illustrative preview
            </span>
            <span className="text-[11.5px] leading-[1.6] text-[#64748B]">
              Sample data only
            </span>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <SecurityOverviewDashboard />
        </div>

        <p className="mx-auto mt-6 max-w-[42rem] text-center text-[11.5px] leading-[1.7] text-[#64748B]">
          The overview is a design preview. It uses sample data and does not run
          a live assessment or produce a real security score.
        </p>
      </div>
    </section>
  );
}
