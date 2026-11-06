import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import DevelopersPage from "@/components/solutions/DevelopersPage";

export const metadata = {
  title: "Developers | Solutions | Securelyze",
  description:
    "Review application security configurations and related internet-facing assets with Securelyze. Explore DNS, HTTPS, headers, subdomains, hosts, and available service information.",
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
