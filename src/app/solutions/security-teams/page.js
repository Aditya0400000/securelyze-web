import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import SecurityTeamsPage from "@/components/solutions/SecurityTeamsPage";

export const metadata = {
  title: "Security Teams | Solutions | Securelyze",
  description:
    "Understand external-facing assets and review website security configuration with Securelyze.",
};

export default function SecurityTeamsRoute() {
  return (
    <>
      <Navbar />
      <SecurityTeamsPage />
      <FooterSection/>
    </>
  );
}
