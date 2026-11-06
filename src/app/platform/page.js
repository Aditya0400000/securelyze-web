import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import AssetDiscoverySection from "@/components/platform/AssetDiscoverySection";
import PlatformNavigationCta from "@/components/platform/PlatformNavigationCta";
import PlatformOverview from "@/components/platform/PlatformOverview";
import WebsiteSecurityCheckSection from "@/components/platform/WebsiteSecurityCheckSection";

export const metadata = {
  title: "Platform | Securelyze",
  description:
    "Review website security configurations and discover publicly visible assets with Securelyze. Explore clearly labeled previews of both platform capabilities.",
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
