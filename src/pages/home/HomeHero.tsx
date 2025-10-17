import { appImage } from "@/assets/home";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";

interface HeroHeadingProps {
  onContactClick: () => void;
  onViewFeaturesClick: () => void;
}

export const HomeHero = ({
  onContactClick,
  onViewFeaturesClick,
}: HeroHeadingProps) => {
  const { t } = useI18n();

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-green"></span>
            {t("home.hero.badge")}
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 text-balance leading-tight text-foreground">
          {t("home.hero.title")}
          <span className="block bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent mt-2">
            {t("home.hero.titleHighlight")}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-10 text-pretty leading-relaxed">
          {t("home.hero.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 glow-accent"
            onClick={onContactClick}
          >
            {t("home.cta")}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto bg-transparent"
            onClick={onViewFeaturesClick}
          >
            {t("home.hero.viewFeatures")}
          </Button>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-primary/20 glow-accent">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
          <img
            src={appImage}
            alt="Dashboard de análisis ecográfico"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};
