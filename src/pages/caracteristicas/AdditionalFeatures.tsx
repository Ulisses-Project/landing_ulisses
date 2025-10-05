import {
  AdditionalFeature,
  type additionalFeature,
} from "@/components/AdditionalFeature";
import { useI18n } from "@/lib/i18n";
import {
  Clock,
  Database,
  Share2,
  Sparkles,
  Workflow,
  Lock,
} from "lucide-react";

export const AdditionalFeatures = () => {
  const { t } = useI18n();

  const additionalFeatures: additionalFeature[] = [
    {
      badge: Database,
      title: t("features.additionalFeatures.feature1.title"),
      description: t("features.additionalFeatures.feature1.description"),
    },
    {
      badge: Share2,
      title: t("features.additionalFeatures.feature2.title"),
      description: t("features.additionalFeatures.feature2.description"),
    },
    {
      badge: Lock,
      title: t("features.additionalFeatures.feature3.title"),
      description: t("features.additionalFeatures.feature3.description"),
    },
    {
      badge: Workflow,
      title: t("features.additionalFeatures.feature4.title"),
      description: t("features.additionalFeatures.feature4.description"),
    },
    {
      badge: Sparkles,
      title: t("features.additionalFeatures.feature5.title"),
      description: t("features.additionalFeatures.feature5.description"),
    },
    {
      badge: Clock,
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
