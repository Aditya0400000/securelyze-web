import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import {
  SecurityHeadersExamplePanel,
  SecurityHeadersHeroVisual,
} from "@/components/platform/SecurityCheckVisuals";
import WebsiteSecurityTopicPage from "@/components/platform/WebsiteSecurityTopicPage";
import { SECURITY_HEADERS_CONTENT } from "@/components/platform/securityCheckContent";

export const metadata = {
  title: "Security Headers | Website Security Check | Securelyze",
  description:
    "Explore an illustrative preview of browser-facing HTTP security headers, coverage, and policy context within the Securelyze Website Security Check.",
};

export default function SecurityHeadersRoute() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <WebsiteSecurityTopicPage
        topic={SECURITY_HEADERS_CONTENT}
        heroVisual={<SecurityHeadersHeroVisual />}
        examplePanel={<SecurityHeadersExamplePanel />}
      />
      <FooterSection />
    </main>
  );
}
