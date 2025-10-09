import { useI18n } from "@/lib/i18n";

export const HighlightedFeatures = () => {
  const { t } = useI18n();

  const stats = [
    { value: "200-300%", label: t("home.stats.variability") },
    { value: "<7%", label: t("home.stats.rawData") },
    { value: "91%", label: t("home.stats.accuracy") },
    // { value: "24/7", label: t("home.stats.") },
  ];

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 dot-pattern opacity-20"></div>
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-xl bg-card backdrop-blur-sm border border-border hover:border-primary/50 transition-all"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
