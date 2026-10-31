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
    "Understand how Domain Discovery presents domains, DNS records, nameservers, and related domain context with clearly labelled illustrative examples.",
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
