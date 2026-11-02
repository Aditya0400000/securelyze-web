import Navbar from "@/components/Navbar";
import SolutionsOverviewPage from "@/components/solutions/SolutionsOverviewPage";

export const metadata = {
  title: "Solutions | Securelyze",
  description:
    "Explore Securelyze solutions for website owners, developers, small businesses, and security teams.",
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <SolutionsOverviewPage />
    </>
  );
}
