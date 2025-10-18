import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { KeyMetrics } from "./KeyMetrics";
import { CTA } from "@/components/CTA";
import { TrendingUp } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { HeroHeading } from "@/components/HeroHeading";

const ResultadosPage = () => {
  const { t } = useI18n();

  const resultsHeading = {
    badge: TrendingUp,
    badge_str: t("results.badge"),
    title: t("results.title"),
    subtitle: t("results.subtitle"),
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroHeading {...resultsHeading} />
      <KeyMetrics />
      <CTA />
      <Footer />
    </div>
  );
};

export default ResultadosPage;
