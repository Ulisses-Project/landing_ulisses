import { Card } from "@/components/ui/card";
import { CheckCircle2, type LucideIcon } from "lucide-react";

interface FeatureProps {
  badge: LucideIcon;
  badge_str: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  image_alt: string;
  isReversed?: boolean;
}

export const Feature = ({
  badge,
  badge_str,
  title,
  description,
  features,
  image,
  image_alt,
  isReversed = false,
}: FeatureProps) => {
  const BadgeIcon = badge;

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
      {isReversed ? (
        <>
          <div className="relative">
            <Card className="overflow-hidden bg-card backdrop-blur-sm border glow-accent">
              <img src={image} alt={image_alt} className="w-full h-auto" />
            </Card>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              {<BadgeIcon className="w-4 h-4" />}
              {badge_str}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance text-foreground">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {description}
            </p>
            <ul className="space-y-3 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              {<BadgeIcon className="w-4 h-4" />}
              {badge_str}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance text-foreground">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {description}
            </p>
            <ul className="space-y-3 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Card className="overflow-hidden bg-card backdrop-blur-sm border glow-accent">
              <img src={image} alt={image_alt} className="w-full h-auto" />
            </Card>
          </div>
        </>
      )}
    </div>
  );
};
