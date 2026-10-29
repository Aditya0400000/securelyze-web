import Navbar from "@/components/Navbar";
import DevelopersSection from "@/components/solutions/DevelopersSection";
import SecurityTeamsSection from "@/components/solutions/SecurityTeamsSection";
import SmallBusinessesSection from "@/components/solutions/SmallBusinessesSection";
import SolutionsClosingCta from "@/components/solutions/SolutionsClosingCta";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import WebsiteOwnersSection from "@/components/solutions/WebsiteOwnersSection";

export const metadata = {
  title: "Solutions | Securelyze",
  description:
    "Explore Securelyze solutions for website owners, small businesses, developers, and security teams.",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#C6F36A] selection:text-[#071D34]">
      <Navbar />
      <SolutionsHero />
      <WebsiteOwnersSection />
      <SmallBusinessesSection />
      <DevelopersSection />
      <SecurityTeamsSection />
      <SolutionsClosingCta />
    </main>
  );
}
