import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import SmallBusinessesPage from "@/components/solutions/SmallBusinessesPage";

export const metadata = {
  title: "Small Businesses | Solutions | Securelyze",
  description:
    "Understand your business's public-facing domains, services, and security settings. Explore website configuration, email authentication, and Asset Discovery with Securelyze.",
};

export default function SmallBusinessesRoute() {
  return (
    <>
      <Navbar />
      <SmallBusinessesPage />
      <FooterSection/>
    </>
  );
}
