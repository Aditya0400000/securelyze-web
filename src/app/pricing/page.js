import Navbar from "@/components/Navbar";
import PricingComparison from "@/components/pricing/PricingComparison";
import PricingCta from "@/components/pricing/PricingCta";
import PricingFaq from "@/components/pricing/PricingFaq";
import PricingHero from "@/components/pricing/PricingHero";
import PricingTools from "@/components/pricing/PricingTools";
import PricingTrust from "@/components/pricing/PricingTrust";

export const metadata = {
  title: "Pricing | Securelyze",
  description:
    "Explore Securelyze plans: Silver for essential security checks at $0/month, and a proposed Custom plan for tailored security needs.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <PricingHero />
      <PricingComparison />
      <PricingTools />
      <PricingTrust />
      <PricingFaq />
      <PricingCta />
    </main>
  );
}
