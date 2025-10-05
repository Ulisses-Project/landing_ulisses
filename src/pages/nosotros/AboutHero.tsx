import { useI18n } from "@/lib/i18n";

export const AboutHero = () => {
  const { t } = useI18n();
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance text-foreground">
            {t("about.title")}
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {t("about.subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
};
