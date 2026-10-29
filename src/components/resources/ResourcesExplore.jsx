import ResourcesProductUpdates from "./ResourcesProductUpdates";
import ResourcesQuickAnswers from "./ResourcesQuickAnswers";
import ResourcesSectionHeading from "./ResourcesSectionHeading";
import ResourcesTutorials from "./ResourcesTutorials";

export default function ResourcesExplore() {
  return (
    <section
      id="explore"
      aria-labelledby="explore-heading"
      className="relative scroll-mt-32 overflow-hidden border-b border-[#DCE7F1] bg-[#F7FAFC] py-16 font-sans sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[#C6F36A]/[0.08] blur-[100px]" />
        <div className="absolute bottom-[-10rem] left-[-8rem] h-[24rem] w-[24rem] rounded-full bg-[#B9C3FF]/[0.08] blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(7,29,52,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(7,29,52,0.025)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ResourcesSectionHeading
          id="explore-heading"
          eyebrow="03 / Explore"
          title="Try it yourself, then keep up with what changes."
          description="Practical tutorials for checking the signals yourself, plus a place for product updates when there are verified changes to share."
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
