import PillNavigation from "@/components/PillNavigation";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import FlowSection from "@/components/FlowSection";
import StructureSection from "@/components/StructureSection";
import FutureSection from "@/components/FutureSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <PillNavigation />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <FeaturesSection />
        <FlowSection />
        <StructureSection />
        <FutureSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
