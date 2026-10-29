import Navbar from "@/components/Navbar";
import ResourcesCta from "@/components/resources/ResourcesCta";
import SecurityGuidesGrid from "@/components/resources/SecurityGuidesGrid";
import SecurityGuidesHero from "@/components/resources/SecurityGuidesHero";

export const metadata = {
  title: "Security Guides | Securelyze",
  description:
    "Practical, plain-language security guides covering SSL/TLS, DNS, HTTPS, security headers, email authentication, and reading website security signals.",
};

export default function SecurityGuidesPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <SecurityGuidesHero />
      <SecurityGuidesGrid />
      <ResourcesCta
        id="security-guides-closing-cta"
        eyebrow="Put it into practice"
        heading="See how these signals show up on your website."
        description="Use the Security Checker to review certificate, DNS, HTTPS, and header context in one connected view."
        primary={{
          label: "Check Website Security",
          href: "/platform#website-security-check",
        }}
        secondary={{
          label: "Back to Resources",
          href: "/resources",
        }}
      />
    </main>
  );
}
