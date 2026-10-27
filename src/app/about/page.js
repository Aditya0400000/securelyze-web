import Navbar from "@/components/Navbar";
import AboutAudience from "@/components/about/AboutAudience";
import AboutEcosystem from "@/components/about/AboutEcosystem";
import AboutHero from "@/components/about/AboutHero";
import AboutSignals from "@/components/about/AboutSignals";
import AboutTools from "@/components/about/AboutTools";

export const metadata = {
  title: "About Securelyze | Web Security Analysis & Asset Discovery",
  description:
    "Learn how Securelyze brings public website security signals and internet-facing assets into a clearer, more connected view.",
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
    </main>
  );
}
