import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import SslTlsAnalysisPage from "@/components/platform/SslTlsAnalysisPage";

export const metadata = {
  title: "SSL/TLS Analysis | Website Security Check | Securelyze",
  description:
    "Explore an illustrative preview of SSL/TLS certificate information, validity, issuer details, HTTPS status, and TLS configuration within the Securelyze Website Security Check.",
};

export default function SslTlsAnalysisRoute() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <SslTlsAnalysisPage />
      <FooterSection />
    </main>
  );
}
