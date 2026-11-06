import FooterSection from "@/components/FooterSection";
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
    "Explore Securelyze's Free plan, listed at $0, and learn about supported security configuration checks and internet-facing asset discovery.",
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
      <FooterSection/>
    </main>
  );
}
