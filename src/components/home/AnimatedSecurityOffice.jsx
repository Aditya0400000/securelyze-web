import HomeSectionBadge from "./HomeSectionBadge";
import SecurityScanFlow from "./SecurityScanFlow";
import "./SecurityScanFlow.css";

export default function AnimatedSecurityOffice() {
  return (
    <section id="security-office" aria-labelledby="security-office-heading" className="home-security-flow relative isolate overflow-hidden bg-white py-16 font-sans text-charcoal sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <HomeSectionBadge>
          Inside Securelyze
        </HomeSectionBadge>
        <h2 id="security-office-heading" className="mt-5 max-w-4xl text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.045em] sm:text-[36px] lg:text-[44px]">
          A Closer Look at{" "}<span className="text-emerald-hover">Your Security</span>
        </h2>
        <p className="mt-5 max-w-2xl text-pretty text-[15px] leading-[1.75] text-text-secondary sm:text-base">
          From domain settings to internet-facing services, Securelyze brings
          useful security information together so you can see what deserves
          attention.
        </p>
        <SecurityScanFlow />
      </div>
    </section>
  );
}
