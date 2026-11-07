import ResourcesProductUpdates from "./ResourcesProductUpdates";
import ResourcesQuickAnswers from "./ResourcesQuickAnswers";
import ResourcesSectionHeading from "./ResourcesSectionHeading";
import ResourcesTutorials from "./ResourcesTutorials";

export default function ResourcesExplore() {
  return (
    <section
      id="explore"
      aria-labelledby="explore-heading"
      className="relative scroll-mt-32 overflow-hidden border-b border-[#E2E8F0] bg-[#F8FAFC] py-16 font-sans sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[#10B981]/[0.08] blur-[100px]" />
        <div className="absolute bottom-[-10rem] left-[-8rem] h-[24rem] w-[24rem] rounded-full bg-[#10B981]/[0.08] blur-[100px]" />
        <div className="site-light-grid site-light-grid--right" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ResourcesSectionHeading
          id="explore-heading"
          eyebrow="EXPLORE"
          title="Explore Security Tools and Resources"
          description="Find tools and resources to review security configurations, discover internet-facing assets, and better understand your online infrastructure."
        />

        <div className="mt-10">
          <ResourcesTutorials />
          <ResourcesProductUpdates />
          <ResourcesQuickAnswers />
        </div>
      </div>
    </section>
  );
}
