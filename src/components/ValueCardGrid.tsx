import { Target, Heart, Lightbulb, Users } from "lucide-react";
import { ValueCard, type ValueCardProps } from "./ValueCard";
import { useI18n } from "@/lib/i18n";

export const ValueCardGrid = () => {
  const { t } = useI18n();
  const values: ValueCardProps[] = [
    {
      badge: Target,
      title: t("about.values.value1.title"),
      description: t("about.values.value1.description"),
    },
    {
      badge: Heart,
      title: t("about.values.value2.title"),
      description: t("about.values.value2.description"),
    },
    {
      badge: Lightbulb,
      title: t("about.values.value3.title"),
      description: t("about.values.value3.description"),
    },
    {
      badge: Users,
      title: t("about.values.value4.title"),
      description: t("about.values.value4.description"),
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {values.map((value, index) => (
        <ValueCard key={index} {...value} />
      ))}
    </div>
  );
};
