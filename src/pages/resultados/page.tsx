import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/Footer";
import { KeyMetrics } from "./KeyMetrics";
import { CTA } from "@/components/CTA";
import { ResultsHero } from "./ResultsHero";

const ResultadosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ResultsHero />
      <KeyMetrics />
      <CTA />
      <Footer />
    </div>
  );
};

export default ResultadosPage;
