import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import {
  EmailSecurityExamplePanel,
  EmailSecurityHeroVisual,
} from "@/components/platform/SecurityCheckVisuals";
import WebsiteSecurityTopicPage from "@/components/platform/WebsiteSecurityTopicPage";
import { EMAIL_SECURITY_CONTENT } from "@/components/platform/securityCheckContent";

export const metadata = {
  title: "Email Security | Website Security Check | Securelyze",
  description:
    "Explore an illustrative preview of SPF, DKIM, and DMARC authentication context, alignment, and sender policy within the Securelyze Website Security Check.",
};

export default function EmailSecurityRoute() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <WebsiteSecurityTopicPage
        topic={EMAIL_SECURITY_CONTENT}
        heroVisual={<EmailSecurityHeroVisual />}
        examplePanel={<EmailSecurityExamplePanel />}
      />
      <FooterSection />
    </main>
  );
}
