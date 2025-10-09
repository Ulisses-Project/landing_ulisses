import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  Radar,
} from "recharts";
import { Card } from "../ui/card";
import CustomTooltip from "./CustomTooltip";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/context/theme-provider";

const RendimientoChart = () => {
  const { t } = useI18n();
  const { theme } = useTheme();

  const rendimientoData = [
    { metric: t("results.charts.rendimiento.metric1"), value: 98.5 },
    { metric: t("results.charts.rendimiento.metric2"), value: 95.0 },
    { metric: t("results.charts.rendimiento.metric3"), value: 97.2 },
    { metric: t("results.charts.rendimiento.metric4"), value: 96.8 },
    { metric: t("results.charts.rendimiento.metric5"), value: 99.1 },
  ];

  const color =
    theme === "dark"
      ? "oklch(0.831 0.135 211.67)"
      : "oklch(0.508 0.207 254.604)";
  return (
    <Card className="p-6 bg-card backdrop-blur-sm border">
      <h3 className="text-xl font-bold mb-4 text-foreground">
        {t("results.charts.rendimiento.title")}
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        {t("results.charts.rendimiento.subtitle")}
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart data={rendimientoData}>
          <PolarGrid className="stroke-border" />
          <PolarAngleAxis
            dataKey="metric"
            className="stroke-muted-foreground"
            style={{ fontSize: "12px" }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            className="stroke-muted-foreground"
            style={{ fontSize: "10px" }}
          />
          <Radar
            name={t("results.charts.rendimiento.name")}
            dataKey="value"
            stroke={color}
            fill={color}
            fillOpacity={0.5}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default RendimientoChart;
