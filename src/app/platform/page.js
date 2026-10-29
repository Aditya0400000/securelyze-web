import Navbar from "@/components/Navbar";
import AssetDiscoverySection from "@/components/platform/AssetDiscoverySection";
import PlatformOverview from "@/components/platform/PlatformOverview";
import SecurityOverviewSection from "@/components/platform/SecurityOverviewSection";
import WebsiteSecurityCheckSection from "@/components/platform/WebsiteSecurityCheckSection";

export const metadata = {
  title: "Platform | Securelyze",
  description:
    "Explore the Securelyze platform: website security checks, asset discovery, and an illustrative security overview in one connected experience.",
};

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <PlatformOverview />
      <AssetDiscoverySection />
      <WebsiteSecurityCheckSection />
      <SecurityOverviewSection />
    </main>
  );
}
