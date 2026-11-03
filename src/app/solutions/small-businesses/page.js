import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import SmallBusinessesPage from "@/components/solutions/SmallBusinessesPage";

export const metadata = {
  title: "Small Businesses | Solutions | Securelyze",
  description:
    "Practical website security for growing businesses. Explore website security checks and asset discovery with plain-language guidance from Securelyze.",
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
