import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import AssetDiscoveryTopicPage from "@/components/platform/AssetDiscoveryTopicPage";
import {
  PortServiceDiscoveryExamplePanel,
  PortServiceDiscoveryHeroVisual,
} from "@/components/platform/AssetDiscoveryVisuals";
import { PORT_SERVICE_DISCOVERY_CONTENT } from "@/components/platform/assetDiscoveryContent";

export const metadata = {
  title: "Port & Service Discovery | Asset Discovery | Securelyze",
  description:
    "Review available information about open ports and publicly accessible network services and understand what may be reachable from the internet.",
};

export default function PortServiceDiscoveryRoute() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <AssetDiscoveryTopicPage
        topic={PORT_SERVICE_DISCOVERY_CONTENT}
        heroVisual={<PortServiceDiscoveryHeroVisual />}
        examplePanel={<PortServiceDiscoveryExamplePanel />}
      />
      <FooterSection />
    </main>
  );
}
