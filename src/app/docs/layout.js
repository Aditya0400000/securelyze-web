import Navbar from "@/components/Navbar";

export default function DocsLayout({ children }) {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#10B981] selection:text-[#101A18]">
      <Navbar />
      {children}
    </main>
  );
}
