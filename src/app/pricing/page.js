import Navbar from "@/components/Navbar";
import PricingCta from "@/components/pricing/PricingCta";
import PricingFaq from "@/components/pricing/PricingFaq";
import PricingHero from "@/components/pricing/PricingHero";
import PricingTools from "@/components/pricing/PricingTools";
import PricingTrust from "@/components/pricing/PricingTrust";

export const metadata = {
  title: "Pricing | Securelyze",
  description:
    "Explore Securelyze pricing: all currently offered security checker and asset discovery tools are free, with no subscription required and no paid tiers currently offered.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <PricingHero />
      <PricingTools />
      <PricingTrust />
      <PricingFaq />
      <PricingCta />
    </main>
  );
}
