import Navbar from "@/components/Navbar";
import ResourcesCta from "@/components/resources/ResourcesCta";
import ResourcesExplore from "@/components/resources/ResourcesExplore";
import ResourcesHero from "@/components/resources/ResourcesHero";
import ResourcesLearn from "@/components/resources/ResourcesLearn";
import ResourcesRead from "@/components/resources/ResourcesRead";

export const metadata = {
  title: "Resources | Securelyze",
  description:
    "Learn website security fundamentals, read upcoming articles and insights, and explore practical tutorials and product updates from Securelyze.",
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <ResourcesHero />
      <ResourcesLearn />
      <ResourcesRead />
      <ResourcesExplore />
      <ResourcesCta
        id="resources-closing-cta"
        eyebrow="Keep learning"
        heading="A clearer security picture starts with one good question."
        description="Use the resources above to understand the signals, then review your own website's public configuration when you are ready."
        primary={{
          label: "Explore the Security Checker",
          href: "/platform#website-security-check",
        }}
        secondary={{
          label: "Review the checklist",
          href: "#security-checklist",
        }}
        note="Educational guidance only — not a substitute for a full security assessment."
      />
    </main>
  );
}
