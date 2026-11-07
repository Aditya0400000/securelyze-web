import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import ResourcesCta from "@/components/resources/ResourcesCta";
import ResourcesExplore from "@/components/resources/ResourcesExplore";
import ResourcesHero from "@/components/resources/ResourcesHero";
import ResourcesLearn from "@/components/resources/ResourcesLearn";
import ResourcesRead from "@/components/resources/ResourcesRead";

export const metadata = {
  title: "Resources | Securelyze",
  description:
    "Learn security concepts, read existing guides, and explore configuration walkthroughs and tool overviews for Securelyze's internet-facing security analysis and Asset Discovery platform.",
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
        badgeEyebrow
        eyebrow="Keep learning"
        heading="Explore the settings and assets behind your domain."
        description="Use the platform overview to explore supported security checks and Asset Discovery, or revisit the checklist for a practical review."
        primary={{
          label: "Explore Platform Tools",
          href: "/platform#website-security-check",
        }}
        secondary={{
          label: "Review the checklist",
          href: "#security-checklist",
        }}
        note="Educational guidance only — not a substitute for a full security assessment."
      />
      <FooterSection/>
    </main>
  );
}
