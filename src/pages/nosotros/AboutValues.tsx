import { ValueCardGrid } from "@/components/ValueCardGrid";
import { useI18n } from "@/lib/i18n";

export const AboutValues = () => {
  const { t } = useI18n();
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            {t("about.values.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("about.values.subtitle")}
          </p>
          <ValueCardGrid />
        </div>
      </div>
    </section>
  );
};
