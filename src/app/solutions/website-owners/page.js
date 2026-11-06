import Navbar from "@/components/Navbar";
import WebsiteOwnersPage from "@/components/solutions/WebsiteOwnersPage";
import FooterSection from "@/components/FooterSection";
export const metadata = {
  title: "Website Owners | Solutions | Securelyze",
  description:
    "Review website security settings and related public assets with Securelyze. Understand domain records, HTTPS, email authentication, and HTTP security headers.",
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
