import { Brain, FileSearch, BarChart3 } from "lucide-react";
import { Feature } from "@/components/Feature";
import { useI18n } from "@/lib/i18n";

export const MainFeatures = () => {
  const { t } = useI18n();

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {
          <>
            <Feature
              badge={Brain}
              badge_str={t("features.mainFeatures.feature1.badge")}
              title={t("features.mainFeatures.feature1.title")}
              description={t("features.mainFeatures.feature1.description")}
              features={[
                t("features.mainFeatures.feature1.feature1"),
                t("features.mainFeatures.feature1.feature2"),
                t("features.mainFeatures.feature1.feature3"),
              ]}
              image={""}
              image_alt={t("features.mainFeatures.feature1.alt")}
            />

            <Feature
              badge={FileSearch}
              badge_str={t("features.mainFeatures.feature2.badge")}
              title={t("features.mainFeatures.feature2.title")}
              description={t("features.mainFeatures.feature2.description")}
              features={[
                t("features.mainFeatures.feature2.feature1"),
                t("features.mainFeatures.feature2.feature2"),
                t("features.mainFeatures.feature2.feature3"),
              ]}
              image={""}
              image_alt={t("features.mainFeatures.feature2.alt")}
              isReversed
            />

            <Feature
              badge={BarChart3}
              badge_str={t("features.mainFeatures.feature3.badge")}
              title={t("features.mainFeatures.feature3.title")}
              description={t("features.mainFeatures.feature3.description")}
              features={[
                t("features.mainFeatures.feature3.feature1"),
                t("features.mainFeatures.feature3.feature2"),
                t("features.mainFeatures.feature3.feature3"),
              ]}
              image={""}
              image_alt={t("features.mainFeatures.feature3.alt")}
            />
          </>
        }
      </div>
    </section>
  );
};
