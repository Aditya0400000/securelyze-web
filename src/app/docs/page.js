import DocsCategories from "@/components/docs/DocsCategories";
import DocsConcepts from "@/components/docs/DocsConcepts";
import DocsFirstRun from "@/components/docs/DocsFirstRun";
import DocsHero from "@/components/docs/DocsHero";
import ResourcesCta from "@/components/resources/ResourcesCta";

export const metadata = {
  title: "Documentation | Securelyze",
  description:
    "Explore Securelyze product guides for getting started, the dashboard, assets and asset discovery, findings, attack surface, AI analysis, scan settings, notifications, users and roles, and troubleshooting.",
};

export default function DocsPage() {
  return (
    <>
      <DocsHero />
      <DocsCategories />
      <DocsConcepts />
      <DocsFirstRun />
      <ResourcesCta
        id="docs-cta"
        eyebrow="Keep building context"
        heading="Start with the workflow in front of you."
        description="Begin with Getting Started, then move into the dashboard, findings, or the settings that keep scans running. Every guide is written around the product screens you will actually use."
        primary={{
          label: "Start with Getting Started",
          href: "/docs/getting-started",
        }}
        secondary={{ label: "Explore the Platform", href: "/platform" }}
        note="Product documentation for the Securelyze platform"
      />
    </>
  );
}
