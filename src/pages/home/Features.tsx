import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import {
  ArrowRight,
  Brain,
  Zap,
  BadgeCheck,
  Stethoscope,
  Radar,
  BrainCircuit,
} from "lucide-react";
import { Link } from "react-router-dom";

export const Features = () => {
  const { t } = useI18n();

  const features = [
    {
      icon: BrainCircuit,
      title: t("home.features.1.title"),
      description: t("home.features.1.description"),
    },
    {
      icon: Zap,
      title: t("home.features.2.title"),
      description: t("home.features.2.description"),
    },
    {
      icon: BadgeCheck,
      title: t("home.features.3.title"),
      description: t("home.features.3.description"),
    },
    {
      icon: Brain,
      title: t("home.features.4.title"),
      description: t("home.features.4.description"),
    },
    {
      icon: Stethoscope,
      title: t("home.features.5.title"),
      description: t("home.features.5.description"),
    },
    {
      icon: Radar,
      title: t("home.features.6.title"),
      description: t("home.features.6.description"),
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance text-foreground">
            {t("home.features.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("home.features.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Card
              key={i}
              className="p-6 bg-card backdrop-blur-sm border hover:border-primary/50 transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-left">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/">
            <Button size="lg" variant="outline" disabled>
              {t("home.features.viewAll")}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
