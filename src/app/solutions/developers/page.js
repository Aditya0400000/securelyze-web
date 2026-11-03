import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import DevelopersPage from "@/components/solutions/DevelopersPage";

export const metadata = {
  title: "Developers | Solutions | Securelyze",
  description:
    "Keep security closer to your development workflow with Securelyze website security checks and asset discovery context for domains, configurations, and exposed assets.",
};

export default function DevelopersRoute() {
  return (
    <>
      <Navbar />
      <DevelopersPage />
      <FooterSection/>
    </>
  );
}
