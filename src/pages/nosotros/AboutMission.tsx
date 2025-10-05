import { useI18n } from "@/lib/i18n";

export const AboutMission = () => {
  const { t } = useI18n();
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance text-foreground">
              {t("about.mission.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t("about.mission.paragraph1")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.mission.paragraph2")}
            </p>
          </div>
          <div className="relative">
            <img
              src="/medical-team-doctors-collaborating-with-technology.jpg"
              alt={t("about.mission.alt")}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
