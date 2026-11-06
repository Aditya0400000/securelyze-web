import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import AssetDiscoveryTopicPage from "@/components/platform/AssetDiscoveryTopicPage";
import {
  DomainDiscoveryExamplePanel,
  DomainDiscoveryHeroVisual,
} from "@/components/platform/AssetDiscoveryVisuals";
import { DOMAIN_DISCOVERY_CONTENT } from "@/components/platform/assetDiscoveryContent";

export const metadata = {
  title: "Domain Discovery | Asset Discovery | Securelyze",
  description:
    "Explore available domain information and related domains where supported, including DNS records, nameservers, and delegation context.",
};

export default function DomainDiscoveryRoute() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <AssetDiscoveryTopicPage
        topic={DOMAIN_DISCOVERY_CONTENT}
        heroVisual={<DomainDiscoveryHeroVisual />}
        examplePanel={<DomainDiscoveryExamplePanel />}
      />
      <FooterSection />
    </main>
  );
}
