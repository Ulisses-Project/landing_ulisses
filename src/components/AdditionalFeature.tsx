import { type LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

export interface additionalFeature {
  badge: LucideIcon;
  title: string;
  description: string;
}

export const AdditionalFeature = ({
  badge,
  title,
  description,
}: additionalFeature) => {
  const BadgeIcon = badge;

  return (
    <Card className="p-6 bg-card backdrop-blur-sm border hover:border-primary/50 transition-all group">
      <BadgeIcon className="w-10 h-10 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
};
