import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ContactContent from "@/components/contact/ContactContent";

export const metadata = {
  title: "Contact Us | Securelyze",
  description:
    "Contact Securelyze with questions about the platform, security tools, your account, or a technical issue.",
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
