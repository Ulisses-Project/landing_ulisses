import { blazquezImage, seenImage, sellosImage } from "@/assets/case_studies";
import { CaseStudy } from "@/components/CaseStudy";
import { useI18n } from "@/lib/i18n";

export const CaseStudies = () => {
  const { t } = useI18n();

  const caseStudiesData = [
    {
      title: t("results.caseStudies.caseStudy1.title"),
      institution: t("results.caseStudies.caseStudy1.institution"),
      description: t("results.caseStudies.caseStudy1.description"),
      image: blazquezImage,
      image_alt: t("results.caseStudies.caseStudy1.alt"),
      name: t("results.caseStudies.caseStudy1.name"),
      role: t("results.caseStudies.caseStudy1.role"),
      insights: [
        {
          title: t("results.caseStudies.caseStudy1.insight1.title"),
          value: t("results.caseStudies.caseStudy1.insight1.value"),
        },
        {
          title: t("results.caseStudies.caseStudy1.insight2.title"),
          value: t("results.caseStudies.caseStudy1.insight2.value"),
        },
      ],
    },
    {
      title: t("results.caseStudies.caseStudy2.title"),
      institution: t("results.caseStudies.caseStudy2.institution"),
      description: t("results.caseStudies.caseStudy2.description"),
      image: seenImage,
      image_alt: t("results.caseStudies.caseStudy2.alt"),
      name: t("results.caseStudies.caseStudy2.name"),
      role: t("results.caseStudies.caseStudy2.role"),
      insights: [
        {
          title: t("results.caseStudies.caseStudy2.insight1.title"),
          value: t("results.caseStudies.caseStudy2.insight1.value"),
        },
        {
          title: t("results.caseStudies.caseStudy2.insight2.title"),
          value: t("results.caseStudies.caseStudy2.insight2.value"),
        },
      ],
    },
    {
      title: t("results.caseStudies.caseStudy3.title"),
      institution: t("results.caseStudies.caseStudy3.institution"),
      description: t("results.caseStudies.caseStudy3.description"),
      image: sellosImage,
      image_alt: t("results.caseStudies.caseStudy3.alt"),
      name: t("results.caseStudies.caseStudy3.name"),
      role: t("results.caseStudies.caseStudy3.role"),
      insights: [
        {
          title: t("results.caseStudies.caseStudy3.insight1.title"),
          value: t("results.caseStudies.caseStudy3.insight1.value"),
        },
        {
          title: t("results.caseStudies.caseStudy3.insight2.title"),
          value: t("results.caseStudies.caseStudy3.insight2.value"),
        },
      ],
    },
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
        {t("results.caseStudies.title")}
      </h2>

      <div className="space-y-12">
        {caseStudiesData.map((caseStudy, index) => (
          <CaseStudy key={index} {...caseStudy} />
        ))}
      </div>
    </div>
  );
};
