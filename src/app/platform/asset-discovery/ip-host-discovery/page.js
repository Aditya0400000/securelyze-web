import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import AssetDiscoveryTopicPage from "@/components/platform/AssetDiscoveryTopicPage";
import {
  IpHostDiscoveryExamplePanel,
  IpHostDiscoveryHeroVisual,
} from "@/components/platform/AssetDiscoveryVisuals";
import { IP_HOST_DISCOVERY_CONTENT } from "@/components/platform/assetDiscoveryContent";

export const metadata = {
  title: "IP & Host Discovery | Asset Discovery | Securelyze",
  description:
    "Understand how IP & Host Discovery connects public hostnames to IPv4 and IPv6 addresses and shared infrastructure with clearly labelled illustrative examples.",
};

export default function IpHostDiscoveryRoute() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <AssetDiscoveryTopicPage
        topic={IP_HOST_DISCOVERY_CONTENT}
        heroVisual={<IpHostDiscoveryHeroVisual />}
        examplePanel={<IpHostDiscoveryExamplePanel />}
      />
      <FooterSection />
    </main>
  );
}
