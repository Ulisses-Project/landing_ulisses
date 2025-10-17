import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/Footer";
import { Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { MainFeatures } from "./MainFeatures";
import { AdditionalFeatures } from "./AdditionalFeatures";
import { CTA } from "@/components/CTA";
import { HeroHeading } from "@/components/HeroHeading";

const CaracteristicasPage = () => {
  const { t } = useI18n();

  const featuresHeading = {
    badge: Sparkles,
    badge_str: t("features.badge"),
    title: t("features.title"),
    subtitle: t("features.subtitle"),
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroHeading {...featuresHeading} />
      <MainFeatures />
      <AdditionalFeatures />
      <CTA />
      <Footer />
    </div>
  );
};

export default CaracteristicasPage;
