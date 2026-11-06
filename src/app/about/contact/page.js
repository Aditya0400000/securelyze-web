import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ContactContent from "@/components/contact/ContactContent";
import { SUPPORT_EMAIL } from "@/lib/siteLinks";

export const metadata = {
  title: "Contact Securelyze | Questions, Feedback, and Support",
  description: `Contact Securelyze with questions about the platform, a website security check, or feedback. Send a message through your email app or write to ${SUPPORT_EMAIL}.`,
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="contact-content" className="bg-white font-sans text-charcoal">
        <ContactContent />
      </main>
      <FooterSection />
    </>
  );
}
