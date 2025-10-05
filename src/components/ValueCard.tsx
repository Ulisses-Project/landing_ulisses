import { type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

export interface ValueCardProps {
  badge: LucideIcon;
  title: string;
  description: string;
}

export const ValueCard = ({ badge, title, description }: ValueCardProps) => {
  const BadgeIcon = badge;

  return (
    <Card className="p-6 text-center bg-card backdrop-blur-sm border">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <BadgeIcon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
};
