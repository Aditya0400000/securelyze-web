import Navbar from "@/components/Navbar";

export default function DocsLayout({ children }) {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#C6F36A] selection:text-[#071D34]">
      <Navbar />
      {children}
    </main>
  );
}
