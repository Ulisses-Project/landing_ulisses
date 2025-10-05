import PrecisionChart from "@/components/charts/PrecisionChart";
import RendimientoChart from "@/components/charts/RendimientoChart";
import TiempoAnalisisChart from "@/components/charts/TiempoAnalisis";
import VolumenChart from "@/components/charts/VolumenChart";
import { useI18n } from "@/lib/i18n";

export const ResultsCharts = () => {
  const { t } = useI18n();
  return (
    <div className="mb-20">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-foreground">
        {t("results.charts.title")}
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        {t("results.charts.subtitle")}
      </p>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <PrecisionChart />
        <TiempoAnalisisChart />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <VolumenChart />
        <RendimientoChart />
      </div>
    </div>
  );
};
