import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import SecurityTeamsPage from "@/components/solutions/SecurityTeamsPage";

export const metadata = {
  title: "Security Teams | Solutions | Securelyze",
  description:
    "Explore internet-facing domains, subdomains, hosts, exposed services, and security configurations with Securelyze to support scoping and further investigation.",
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
