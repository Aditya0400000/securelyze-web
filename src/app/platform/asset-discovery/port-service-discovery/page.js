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
    "Understand how Port & Service Discovery organizes internet-facing ports, service context, and exposure patterns with clearly labelled illustrative examples.",
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
