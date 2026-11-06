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
    "Identify publicly visible IP addresses and hosts associated with your targets and understand which systems may be reachable from the internet.",
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
