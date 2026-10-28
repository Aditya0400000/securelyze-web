import AnnouncementBar from "@/components/AnnouncementBar";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import FeaturesSection from "@/components/FeaturesSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import HomeAboutSection from "@/components/HomeAboutSection";
import Navbar from "@/components/Navbar";
import SecurityMarquee from "@/components/SecurityMarquee";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
   <main className="min-h-screen bg-white">
     <AnnouncementBar />
     <Navbar />
     <HeroSection />
     <SecurityMarquee />
     <FeaturesSection />
     <CTASection />
     <HomeAboutSection />
     <WhyChooseUs />
     <FAQ />
     <FooterSection />
   </main>
  );
}
