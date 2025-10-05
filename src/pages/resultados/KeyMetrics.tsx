import { ResultsCharts } from "./ResultsCharts";
import { CaseStudies } from "./CaseStudies";
import { ClinicalImpact } from "./ClinicalImpact";
import { MetricsCardGrid } from "@/components/MetricsCardGrid";

export const KeyMetrics = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <MetricsCardGrid />
        <ResultsCharts />
        <CaseStudies />
        <ClinicalImpact />
      </div>
    </section>
  );
};
