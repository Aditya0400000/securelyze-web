import Navbar from "@/components/Navbar";
import WebsiteOwnersPage from "@/components/solutions/WebsiteOwnersPage";
import FooterSection from "@/components/FooterSection";
export const metadata = {
  title: "Website Owners | Solutions | Securelyze",
  description:
    "Understand website security and public asset exposure with plain-language guidance for website owners from Securelyze.",
};

export default function WebsiteOwnersRoute() {
  return (
    <>
      <Navbar />
      <WebsiteOwnersPage />
      <FooterSection/>
    </>
  );
}
