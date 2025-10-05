import { useI18n } from "@/lib/i18n";
import { TrendingUp, Target, Users, Award } from "lucide-react";
import { type MetricCardProps, MetricCard } from "./MetricCard";

export const MetricsCardGrid = () => {
  const { t } = useI18n();

  const metricsCardsData: MetricCardProps[] = [
    {
      badge: TrendingUp,
      value: "98.5%",
      label: t("results.keyMetrics.metric1.label"),
      sublabel: t("results.keyMetrics.metric1.sublabel"),
    },
    {
      badge: Target,
      value: "65%",
      label: t("results.keyMetrics.metric2.label"),
      sublabel: t("results.keyMetrics.metric2.sublabel"),
    },
    {
      badge: Users,
      value: "200+",
      label: t("results.keyMetrics.metric3.label"),
      sublabel: t("results.keyMetrics.metric3.sublabel"),
    },
    {
      badge: Award,
      value: "99.2%",
      label: t("results.keyMetrics.metric4.label"),
      sublabel: t("results.keyMetrics.metric4.sublabel"),
    },
  ];
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
      {metricsCardsData.map((metric, i) => (
        <MetricCard key={i} {...metric} />
      ))}
    </div>
  );
};
