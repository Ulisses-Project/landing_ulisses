import { images } from "@/assets/image_comparison";
import ImageComparisonWidget from "@/components/ImageComparisonWidget";
import { useImageComparison } from "@/hooks/useImageComparison";
import { useI18n } from "@/lib/i18n";

export const ImageComparison = () => {
  const comparison = useImageComparison();
  const { t } = useI18n();
  return (
    <section className="py-20 lg:py-32 px-4 relative">
      <div className="absolute inset-0 dot-pattern opacity-20"></div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance text-foreground">
            {t("home.comparison.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("home.comparison.subtitle")}
          </p>
        </div>

        {images.map((image, i) => (
          <ImageComparisonWidget
            key={i}
            beforeImage={image.before}
            afterImage={image.after}
            beforeLabel={t("home.comparison.beforeImage")}
            afterLabel={t("home.comparison.afterImage")}
            sliderPosition={comparison.sliderPosition}
            containerRef={comparison.setRef(i)}
            onMouseDown={() => comparison.handleMouseDown(i)}
            isFirst={i === 0}
            isLast={i === images.length - 1}
          />
        ))}
      </div>
    </section>
  );
};
