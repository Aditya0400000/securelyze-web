import { SparkIcon } from "../about/AboutIcons";
import SolutionsCta from "./SolutionsCta";

export default function SolutionsClosingCta() {
  return (
    <section
      id="solutions-closing"
      aria-labelledby="solutions-closing-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#050B18] py-16 font-sans selection:bg-[#C6F36A] selection:text-[#071D34] sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5D4BC8]/[0.12] blur-[130px]" />
        <div className="absolute bottom-[-12rem] left-1/2 h-[24rem] w-[42rem] -translate-x-1/2 rounded-full bg-[#C6F36A]/[0.045] blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_50%_50%,black,transparent_72%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#08192D_0%,#101335_52%,#0A1730_100%)] px-6 py-12 shadow-[0_45px_120px_-65px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)] sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-32 h-80 w-80 rounded-full bg-[#2A7AB8]/[0.16] blur-[100px]" />
            <div className="absolute -bottom-32 right-[-6rem] h-80 w-80 rounded-full bg-[#7567E8]/[0.14] blur-[100px]" />
            <div className="absolute left-1/2 top-1/2 h-[27rem] w-[27rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.045] sm:h-[35rem] sm:w-[35rem]" />
            <div className="absolute left-1/2 top-1/2 h-[21rem] w-[21rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.05] sm:h-[28rem] sm:w-[28rem]" />
            <div className="absolute left-[16%] top-[24%] hidden h-1.5 w-1.5 rounded-full bg-[#C6F36A]/70 shadow-[0_0_16px_rgba(198,243,106,0.55)] sm:block" />
            <div className="absolute bottom-[28%] right-[18%] hidden h-1 w-1 rounded-full bg-[#8FCCFF]/60 shadow-[0_0_14px_rgba(143,204,255,0.55)] sm:block" />
          </div>

          <div className="relative mx-auto max-w-[47rem] text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#C6F36A]/20 bg-[#C6F36A]/[0.06] px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.19em] text-[#D8FA93] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <SparkIcon className="h-3.5 w-3.5" />
              Next step
            </p>

            <h2
              id="solutions-closing-heading"
              className="mt-6 text-balance text-[2rem] font-semibold leading-[1.05] tracking-[-0.055em] text-white sm:text-[2.8rem] lg:text-[3.4rem]"
            >
              Take the Next Step Toward Better Website Security
            </h2>

            <p className="mx-auto mt-5 max-w-[36rem] text-pretty text-[14px] leading-[1.72] text-white/60 sm:text-[15px]">
              Start with a website check, or explore how Securelyze brings
              security context together for every team.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <SolutionsCta
                href="/platform#website-security-check"
                onDark
                className="w-full sm:w-auto"
              >
                Check Your Website
              </SolutionsCta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
