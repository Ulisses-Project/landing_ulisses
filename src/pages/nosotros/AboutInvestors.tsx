import { useI18n } from "@/lib/i18n";

export const AboutInvestors = () => {
  const { t } = useI18n();
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            {t("about.investors.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("about.investors.subtitle")}
          </p>
        </div>

        <div className="bg-card backdrop-blur-sm border rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-muted-foreground">
                HealthTech Ventures
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-muted-foreground">
                MedAI Capital
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-muted-foreground">
                Innovation Partners
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-muted-foreground">
                Global Health Fund
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              {t("about.investors.badge")}
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("about.investors.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
