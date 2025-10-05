import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart,
} from "recharts";
import { Card } from "../ui/card";
import CustomTooltip from "./CustomTooltip";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/components/theme-provider";

const TiempoAnalisisChart = () => {
  const { t } = useI18n();
  const { theme } = useTheme();

  const color =
    theme === "dark"
      ? "oklch(0.831 0.135 211.67)"
      : "oklch(0.508 0.207 254.604)";

  const tiempoAnalisisData = [
    {
      category: t("results.charts.timeAnalysis.category1"),
      traditional: 12,
      ulissesds: 4,
    },
    {
      category: t("results.charts.timeAnalysis.category2"),
      traditional: 28,
      ulissesds: 10,
    },
    {
      category: t("results.charts.timeAnalysis.category3"),
      traditional: 8,
      ulissesds: 2,
    },
    {
      category: t("results.charts.timeAnalysis.category4"),
      traditional: 15,
      ulissesds: 5,
    },
  ];

  return (
    <Card className="p-6 bg-card backdrop-blur-sm border">
      <h3 className="text-xl font-bold mb-4 text-foreground">
        {t("results.charts.timeAnalysis.title")}
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        {t("results.charts.timeAnalysis.subtitle")}
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={tiempoAnalisisData}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
          <XAxis
            dataKey="category"
            className="stroke-muted-foreground"
            style={{ fontSize: "11px" }}
          />
          <YAxis
            className="stroke-muted-foreground"
            style={{ fontSize: "12px" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontSize: "12px" }}
            className="text-muted-foreground"
          />
          <Bar
            dataKey="traditional"
            name={t("results.charts.traditional")}
            fill="#64748b"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="ulissesds"
            name="UlissesDS"
            fill={color}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default TiempoAnalisisChart;
