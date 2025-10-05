import type { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

export interface MetricCardProps {
  badge: LucideIcon;
  value: string;
  label: string;
  sublabel: string;
}

export const MetricCard = ({
  badge,
  label,
  sublabel,
  value,
}: MetricCardProps) => {
  const BadgeIcon = badge;

  return (
    <Card className="p-8 text-center bg-card backdrop-blur-sm border hover:border-primary/50 transition-all">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <BadgeIcon className="w-6 h-6 text-primary" />
      </div>
      <div className="text-4xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm text-foreground mb-1">{label}</div>
      <div className="text-xs text-muted-foreground">{sublabel}</div>
    </Card>
  );
};
