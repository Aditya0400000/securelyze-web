import AnnouncementBar from "@/components/AnnouncementBar";
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
     <HomeAboutSection />
     <WhyChooseUs />
   </main>
  );
}
