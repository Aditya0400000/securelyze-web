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
    "Explore the Securelyze Asset Discovery overview, including subdomain, domain, IP and host, and port and service discovery, with clearly labelled illustrative examples.",
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
