import {
  AdditionalFeature,
  type additionalFeature,
} from "@/components/AdditionalFeature";
import { useI18n } from "@/lib/i18n";
import {
  Stethoscope,
  RefreshCcw,
  Server,
  ShieldCheck,
  LineChart,
  Equal,
  SlidersHorizontal,
  SearchCheck,
  ScanSearch,
  Network,
} from "lucide-react";

export const AdditionalFeatures = () => {
  const { t } = useI18n();

  const additionalFeatures: additionalFeature[] = [
    {
      badge: SlidersHorizontal,
      title: t("features.additionalFeatures.feature1.title"),
      description: t("features.additionalFeatures.feature1.description"),
    },
    {
      badge: ScanSearch,
      title: t("features.additionalFeatures.feature2.title"),
      description: t("features.additionalFeatures.feature2.description"),
    },
    {
      badge: ShieldCheck,
      title: t("features.additionalFeatures.feature3.title"),
      description: t("features.additionalFeatures.feature3.description"),
    },
    {
      badge: Network,
      title: t("features.additionalFeatures.feature4.title"),
      description: t("features.additionalFeatures.feature4.description"),
    },
    {
      badge: RefreshCcw,
      title: t("features.additionalFeatures.feature5.title"),
      description: t("features.additionalFeatures.feature5.description"),
    },
    {
      badge: Stethoscope,
      title: t("features.additionalFeatures.feature6.title"),
      description: t("features.additionalFeatures.feature6.description"),
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 dot-pattern opacity-20"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            {t("features.additionalFeatures.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("features.additionalFeatures.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, i) => (
            <AdditionalFeature key={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
