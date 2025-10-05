import { useI18n } from "@/lib/i18n";

export const ClinicalImpact = () => {
  const { t } = useI18n();
  return (
    <div className="bg-muted/30 border rounded-2xl p-8 lg:p-12">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
        {t("results.clinicalImpact.title")}
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="text-5xl font-bold text-primary mb-2">50K+</div>
          <div className="text-lg font-semibold mb-2 text-foreground">
            {t("results.clinicalImpact.feature1.title")}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t("results.clinicalImpact.feature1.description")}
          </p>
        </div>

        <div className="text-center">
          <div className="text-5xl font-bold text-primary mb-2">92%</div>
          <div className="text-lg font-semibold mb-2 text-foreground">
            {t("results.clinicalImpact.feature2.title")}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t("results.clinicalImpact.feature2.description")}
          </p>
        </div>

        <div className="text-center">
          <div className="text-5xl font-bold text-primary mb-2">4.5h</div>
          <div className="text-lg font-semibold mb-2 text-foreground">
            {t("results.clinicalImpact.feature3.title")}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t("results.clinicalImpact.feature3.description")}
          </p>
        </div>
      </div>
    </div>
  );
};
