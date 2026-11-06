import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import AssetDiscoveryTopicPage from "@/components/platform/AssetDiscoveryTopicPage";
import {
  SubdomainDiscoveryExamplePanel,
  SubdomainDiscoveryHeroVisual,
} from "@/components/platform/AssetDiscoveryVisuals";
import { SUBDOMAIN_DISCOVERY_CONTENT } from "@/components/platform/assetDiscoveryContent";

export const metadata = {
  title: "Subdomain Discovery | Asset Discovery | Securelyze",
  description:
    "Find publicly visible subdomains associated with your domain and understand the websites, applications, and services connected to it.",
};

export default function SubdomainDiscoveryRoute() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <AssetDiscoveryTopicPage
        topic={SUBDOMAIN_DISCOVERY_CONTENT}
        heroVisual={<SubdomainDiscoveryHeroVisual />}
        examplePanel={<SubdomainDiscoveryExamplePanel />}
      />
      <FooterSection />
    </main>
  );
}
