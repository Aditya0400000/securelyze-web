import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import {
  DnsExamplePanel,
  DnsHeroVisual,
} from "@/components/platform/SecurityCheckVisuals";
import WebsiteSecurityTopicPage from "@/components/platform/WebsiteSecurityTopicPage";
import { DNS_SECURITY_CONTENT } from "@/components/platform/securityCheckContent";

export const metadata = {
  title: "DNS Security | Website Security Check | Securelyze",
  description:
    "Explore an illustrative preview of DNS record coverage, nameserver context, mail-related records, and resolution details within the Securelyze Website Security Check.",
};

export default function DnsSecurityRoute() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <WebsiteSecurityTopicPage
        topic={DNS_SECURITY_CONTENT}
        heroVisual={<DnsHeroVisual />}
        examplePanel={<DnsExamplePanel />}
      />
      <FooterSection />
    </main>
  );
}
