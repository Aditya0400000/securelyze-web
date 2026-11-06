import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import AboutAudience from "@/components/about/AboutAudience";
import AboutEcosystem from "@/components/about/AboutEcosystem";
import AboutHero from "@/components/about/AboutHero";
import AboutSignals from "@/components/about/AboutSignals";
import AboutTools from "@/components/about/AboutTools";

export const metadata = {
  title: "About Securelyze | Internet-Facing Security Analysis & Asset Discovery",
  description:
    "Learn about Securelyze, an internet-facing security analysis and Asset Discovery platform for security configurations, public domains, hosts, and services.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <AboutHero />
      <AboutEcosystem />
      <AboutSignals />
      <AboutAudience />
      <AboutTools />
      <FooterSection/>
    </main>
  );
}
