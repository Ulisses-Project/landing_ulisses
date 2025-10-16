// MainFeatures.tsx
import { Feature } from "@/components/Feature";
import { useI18n } from "@/lib/i18n";
import { useMemo } from "react";
import {
  Brain,
  FileSearch,
  BarChart3,
  Cpu,
  SearchCheck,
  FileText,
} from "lucide-react";
import {
  appReportImage,
  appSimilarityImage,
  demoAppThumbnail,
  demoAppVideo,
} from "@/assets/features";

export const MainFeatures = () => {
  const { t } = useI18n();

  // Memoizar el array de features con traducciones
  const featuresData = useMemo(
    () => [
      {
        id: "feature-1",
        mediaType: "video" as const,
        video: demoAppVideo,
        video_poster: demoAppThumbnail,
        autoplay: false,
        loop: true,
        muted: true,
        badge: Cpu,
        badge_str: t("features.mainFeatures.feature1.badge"),
        title: t("features.mainFeatures.feature1.title"),
        description: t("features.mainFeatures.feature1.description"),
        features: [
          t("features.mainFeatures.feature1.feature1"),
          t("features.mainFeatures.feature1.feature2"),
          t("features.mainFeatures.feature1.feature3"),
        ],
        isReversed: true,
      },
      {
        id: "feature-2",
        mediaType: "image" as const,
        image: appSimilarityImage,
        image_alt: t("features.mainFeatures.feature2.alt"),
        badge: SearchCheck,
        badge_str: t("features.mainFeatures.feature2.badge"),
        title: t("features.mainFeatures.feature2.title"),
        description: t("features.mainFeatures.feature2.description"),
        features: [
          t("features.mainFeatures.feature2.feature1"),
          t("features.mainFeatures.feature2.feature2"),
          t("features.mainFeatures.feature2.feature3"),
        ],
        isReversed: false,
      },
      {
        id: "feature-3",
        mediaType: "image" as const,
        image: appReportImage,
        image_alt: t("features.mainFeatures.feature3.alt"),
        badge: FileText,
        badge_str: t("features.mainFeatures.feature3.badge"),
        title: t("features.mainFeatures.feature3.title"),
        description: t("features.mainFeatures.feature3.description"),
        features: [
          t("features.mainFeatures.feature3.feature1"),
          t("features.mainFeatures.feature3.feature2"),
          t("features.mainFeatures.feature3.feature3"),
        ],
        isReversed: true,
      },
    ],
    [t]
  );

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {featuresData.map((feature) => (
          <Feature key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};
