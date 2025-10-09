import { useI18n } from "@/lib/i18n";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  LineChart,
} from "recharts";
import { Card } from "../ui/card";
import CustomTooltip from "./CustomTooltip";
import { useTheme } from "../../context/theme-provider";

const PrecisionChart = () => {
  const { t } = useI18n();
  const { theme } = useTheme();

  const color =
    theme === "dark"
      ? "oklch(0.831 0.135 211.67)"
      : "oklch(0.508 0.207 254.604)";

  const precisionData = [
    {
      month: t("results.charts.january"),
      ulissesds: 96.2,
      traditional: 92.1,
    },
    {
      month: t("results.charts.february"),
      ulissesds: 96.8,
      traditional: 92.5,
    },
    {
      month: t("results.charts.march"),
      ulissesds: 97.1,
      traditional: 93.2,
    },
    {
      month: t("results.charts.april"),
      ulissesds: 97.5,
      traditional: 93.8,
    },
    {
      month: t("results.charts.may"),
      ulissesds: 97.9,
      traditional: 94.1,
    },
    {
      month: t("results.charts.june"),
      ulissesds: 98.2,
      traditional: 94.3,
    },
    {
      month: t("results.charts.july"),
      ulissesds: 98.5,
      traditional: 94.0,
    },
  ];

  return (
    <Card className="p-6 bg-card backdrop-blur-sm border">
      <h3 className="text-xl font-bold mb-4 text-foreground">
        {t("results.charts.precision.title")}
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        {t("results.charts.precision.subtitle")}
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={precisionData}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
          <XAxis
            dataKey="month"
            className="stroke-muted-foreground"
            style={{ fontSize: "12px" }}
          />
          <YAxis
            className="stroke-muted-foreground"
            style={{ fontSize: "12px" }}
            domain={[90, 100]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontSize: "12px" }}
            className="text-muted-foreground"
          />
          <Line
            type="monotone"
            dataKey="ulissesds"
            name="UlissesDS"
            stroke={color}
            strokeWidth={3}
            dot={{ fill: color, r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="traditional"
            name={t("results.charts.traditional")}
            stroke="#64748b"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: "#64748b", r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default PrecisionChart;
