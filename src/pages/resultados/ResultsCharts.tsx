import { useI18n } from "@/lib/i18n";

import {
  compressedCanonIntensity,
  compressedS8Intensity,
  compressedE10Intensity,
  compressedEpiq5gIntensity,
} from "@/data/compressed_pixel_intensity.data";

import {
  canonIntensity,
  e10Intensity,
  s8Intensity,
  epiq5gIntensity,
} from "@/data/raw_pixel_instensity.data";

import IntensityChart from "@/components/charts/IntensityChart";

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
        <IntensityChart
          title={t("results.charts.rawIntensity.title")}
          canonIntensity={canonIntensity}
          e10Intensity={e10Intensity}
          s8Intensity={s8Intensity}
          epiq5gIntensity={epiq5gIntensity}
        />
        <IntensityChart
          title={t("results.charts.compressedIntensity.title")}
          canonIntensity={compressedCanonIntensity}
          e10Intensity={compressedE10Intensity}
          s8Intensity={compressedS8Intensity}
          epiq5gIntensity={compressedEpiq5gIntensity}
        />
      </div>
    </div>
  );
};
