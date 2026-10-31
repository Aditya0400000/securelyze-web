import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import AssetDiscoverySection from "@/components/platform/AssetDiscoverySection";
import PlatformNavigationCta from "@/components/platform/PlatformNavigationCta";
import PlatformOverview from "@/components/platform/PlatformOverview";
import WebsiteSecurityCheckSection from "@/components/platform/WebsiteSecurityCheckSection";

export const metadata = {
  title: "Platform | Securelyze",
  description:
    "Explore the Securelyze platform: website security checks and asset discovery, with clear previews of current and planned capabilities.",
};

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <PlatformOverview />
      <WebsiteSecurityCheckSection />
      <AssetDiscoverySection />
      <PlatformNavigationCta />
      <FooterSection />
    </main>
  );
}
