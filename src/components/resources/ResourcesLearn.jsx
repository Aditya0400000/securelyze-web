import { ArrowRightIcon } from "../about/AboutIcons";
import ResourcesSectionHeading from "./ResourcesSectionHeading";
import SecurityBasicsContent from "./SecurityBasicsContent";
import SecurityBestPracticesContent from "./SecurityBestPracticesContent";
import SecurityGuidesContent from "./SecurityGuidesContent";
import SmoothAnchor from "./SmoothAnchor";

const LEARN_LINKS = [
  {
    label: "Security Guides",
    href: "#security-guides",
    number: "01",
  },
  {
    label: "Beginner's Basics",
    href: "#beginners-security-basics",
    number: "02",
  },
  {
    label: "Best Practices",
    href: "#best-practices",
    number: "03",
  },
];

export default function ResourcesLearn() {
  return (
    <section
      id="learn"
      aria-labelledby="learn-heading"
      className="relative scroll-mt-28 bg-white font-sans"
    >
      <div className="mx-auto w-full max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
        <ResourcesSectionHeading
          id="learn-heading"
          eyebrow="01 / Learn"
          title="Build a foundation you can actually use."
          description="Start with the fundamentals, then move into practical habits. Everything in this section is written to be understood, not just skimmed."
        />

        <nav
          aria-label="Learn sections"
          className="mt-7 flex flex-wrap gap-2 border-t border-[#F1F5F9] pt-5"
        >
          {LEARN_LINKS.map((link) => (
            <SmoothAnchor
              key={link.href}
              href={link.href}
              className="group inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-3.5 py-2 text-[11px] font-semibold text-[#475569] shadow-[inset_0_1px_0_#FFFFFF] transition-colors duration-150 hover:border-[#D1FAE5] hover:bg-[#ECFDF5] hover:text-[#183B32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#183B32] focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none"
            >
              <span className="font-mono text-[9px] font-semibold text-[#059669]">
                {link.number}
              </span>
              {link.label}
              <ArrowRightIcon className="h-3 w-3 text-[#94A3B8] transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </SmoothAnchor>
          ))}
        </nav>
      </div>

      <SecurityGuidesContent />
      <SecurityBasicsContent />
      <SecurityBestPracticesContent />
    </section>
  );
}
