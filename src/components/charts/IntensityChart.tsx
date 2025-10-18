import { useI18n } from "@/lib/i18n";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Line,
  LineChart,
  ErrorBar,
} from "recharts";
import { Card } from "../ui/card";
import { useTheme } from "../../context/theme-provider";
import type { intensityData } from "@/data/compressed_pixel_intensity.data";

interface RawInstensityChartProps {
  title: string;
  canonIntensity: intensityData[];
  e10Intensity: intensityData[];
  s8Intensity: intensityData[];
  epiq5gIntensity: intensityData[];
}

const IntensityChart = ({
  title,
  canonIntensity,
  e10Intensity,
  s8Intensity,
  epiq5gIntensity,
}: RawInstensityChartProps) => {
  const { t } = useI18n();
  const { theme } = useTheme();

  const pointRadius = 4;
  const lineStroke = 2;

  const epiq5gColor = theme === "dark" ? "#1F77B4" : "#64A8FF";

  const s8Color = theme === "dark" ? "#FF7F0E" : "#FF9D5C";

  const e10Color = theme === "dark" ? "#009E73" : "#2DD4BF";

  const canonColor = theme === "dark" ? "#9467BD" : "#C39AF5";

  const allDrValues = [
    ...new Set([
      ...canonIntensity.map((d) => d.dr),
      ...e10Intensity.map((d) => d.dr),
      ...s8Intensity.map((d) => d.dr),
      ...epiq5gIntensity.map((d) => d.dr),
    ]),
  ].sort((a, b) => a - b);

  const combinedData = allDrValues.map((dr) => {
    const canonPoint = canonIntensity.find((d) => d.dr === dr);
    const e10Point = e10Intensity.find((d) => d.dr === dr);
    const s8Point = s8Intensity.find((d) => d.dr === dr);
    const epiq5gPoint = epiq5gIntensity.find((d) => d.dr === dr);

    return {
      dr,
      canon: canonPoint?.mean ?? null,
      canonError: canonPoint?.std ?? 0,
      e10: e10Point?.mean ?? null,
      e10Error: e10Point?.std ?? 0,
      s8: s8Point?.mean ?? null,
      s8Error: s8Point?.std ?? 0,
      epiq5g: epiq5gPoint?.mean ?? null,
      epiq5gError: epiq5gPoint?.std ?? 0,
    };
  });

  return (
    <Card className="p-6 bg-card backdrop-blur-sm border">
      <h3 className="text-xl font-bold text-foreground text-center">{title}</h3>
      <ResponsiveContainer width="100%" height={450}>
        <LineChart
          data={combinedData}
          margin={{ top: 0, right: 30, left: -15, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
          <XAxis
            dataKey="dr"
            label={{
              value: t("results.charts.intensity.xLabel"),
              offset: -5,
              position: "insideBottom",
            }}
            className="stroke-muted-foreground"
            style={{ fontSize: "12px" }}
          />
          <YAxis
            domain={[-20, 180]}
            label={{
              value: t("results.charts.intensity.yLabel"),
              angle: -90,
            }}
            className="stroke-muted-foreground"
            style={{ fontSize: "12px" }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            wrapperStyle={{ fontSize: "12px", paddingBottom: "10px" }}
            className="text-muted-foreground"
          />

          {/* Canon */}
          <Line
            type="monotone"
            dataKey="canon"
            name="Canon"
            stroke={canonColor}
            strokeWidth={lineStroke}
            dot={{ fill: canonColor, r: pointRadius }}
            activeDot={false}
            connectNulls
          >
            <ErrorBar
              dataKey="canonError"
              width={8}
              strokeWidth={1.5}
              stroke={canonColor}
            />
          </Line>

          {/* E10 */}
          <Line
            type="monotone"
            dataKey="e10"
            name="E10"
            stroke={e10Color}
            strokeWidth={lineStroke}
            dot={{ fill: e10Color, r: pointRadius }}
            activeDot={false}
            connectNulls
          >
            <ErrorBar
              dataKey="e10Error"
              width={8}
              strokeWidth={1.5}
              stroke={e10Color}
            />
          </Line>

          {/* S8 */}
          <Line
            type="monotone"
            dataKey="s8"
            name="S8"
            stroke={s8Color}
            strokeWidth={lineStroke}
            dot={{ fill: s8Color, r: pointRadius }}
            activeDot={false}
            connectNulls
          >
            <ErrorBar
              dataKey="s8Error"
              width={8}
              strokeWidth={1.5}
              stroke={s8Color}
            />
          </Line>

          {/* Epiq 5G */}
          <Line
            type="monotone"
            dataKey="epiq5g"
            name="Epiq 5G"
            stroke={epiq5gColor}
            strokeWidth={lineStroke}
            dot={{ fill: epiq5gColor, r: pointRadius }}
            activeDot={false}
            connectNulls
          >
            <ErrorBar
              dataKey="epiq5gError"
              width={8}
              strokeWidth={1.5}
              stroke={epiq5gColor}
            />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IntensityChart;
