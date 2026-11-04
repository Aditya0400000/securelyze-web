import AnnouncementBar from "@/components/AnnouncementBar";
import FAQ from "@/components/FAQ";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProcessMarquee from "@/components/ProcessMarquee";
import AnimatedSecurityOffice from "@/components/home/AnimatedSecurityOffice";
import HomeFinalCta from "@/components/home/HomeFinalCta";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ProductOverviewSection from "@/components/home/ProductOverviewSection";
import WhoItsFor from "@/components/home/WhoItsFor";

export default function Home() {
  return (
   <main className="min-h-screen bg-white">
     <AnnouncementBar />
     <Navbar />
     <HeroSection />
     <ProcessMarquee />
     <ProductOverviewSection />
     <AnimatedSecurityOffice />
     <HowItWorksSection />
     <WhoItsFor />
     <FAQ />
     <HomeFinalCta />
     <FooterSection />
   </main>
  );
}
