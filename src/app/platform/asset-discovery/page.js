import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import AssetDiscoveryTopicPage from "@/components/platform/AssetDiscoveryTopicPage";
import {
  AssetDiscoveryExamplePanel,
  AssetDiscoveryHeroVisual,
} from "@/components/platform/AssetDiscoveryVisuals";
import { ASSET_DISCOVERY_OVERVIEW_CONTENT } from "@/components/platform/assetDiscoveryContent";

export const metadata = {
  title: "Asset Discovery | Securelyze",
  description:
    "Understand what is exposed on the internet. Review publicly visible domains, subdomains, IP addresses, hosts, ports, and services with Securelyze Asset Discovery.",
};

export default function AssetDiscoveryOverviewRoute() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <AssetDiscoveryTopicPage
        topic={ASSET_DISCOVERY_OVERVIEW_CONTENT}
        heroVisual={<AssetDiscoveryHeroVisual />}
        examplePanel={<AssetDiscoveryExamplePanel />}
      />
      <FooterSection />
    </main>
  );
}
