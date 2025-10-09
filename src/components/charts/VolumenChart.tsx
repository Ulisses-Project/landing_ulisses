import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  AreaChart,
} from "recharts";
import { Card } from "@/components/ui/card";
import CustomTooltip from "./CustomTooltip";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/context/theme-provider";

const VolumenChart = () => {
  const { t } = useI18n();

  const { theme } = useTheme();

  const color =
    theme === "dark"
      ? "oklch(0.831 0.135 211.67)"
      : "oklch(0.508 0.207 254.604)";

  const volumenData = [
    { month: t("results.charts.january"), analysis: 3200 },
    { month: t("results.charts.february"), analysis: 3800 },
    { month: t("results.charts.march"), analysis: 4200 },
    { month: t("results.charts.april"), analysis: 4800 },
    { month: t("results.charts.may"), analysis: 5400 },
    { month: t("results.charts.june"), analysis: 6100 },
    { month: t("results.charts.july"), analysis: 6800 },
  ];
  return (
    <Card className="p-6 bg-card backdrop-blur-sm border">
      <h3 className="text-xl font-bold mb-4 text-foreground">
        {t("results.charts.volumen.title")}
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        {t("results.charts.volumen.subtitle")}
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={volumenData}>
          <defs>
            <linearGradient id="colorAnalisis" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
          <XAxis
            dataKey="month"
            className="stroke-muted-foreground"
            style={{ fontSize: "12px" }}
          />
          <YAxis
            className="stroke-muted-foreground"
            style={{ fontSize: "12px" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="analysis"
            name={t("results.charts.volumen.name")}
            stroke={color}
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorAnalisis)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default VolumenChart;
