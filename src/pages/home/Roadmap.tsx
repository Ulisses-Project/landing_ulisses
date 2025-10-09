import { useI18n } from "@/lib/i18n";

import {
  BadgeCheck,
  Map,
  Rocket,
  Sprout,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { RoadmapDesktop } from "./RoadmapDesktop";
import { RoadmapMobile } from "./RoadmapMobile";

export interface MilestoneItem {
  year: string;
  icon: LucideIcon;
  title: string;
  milestones: string[];
}

export const Roadmap = () => {
  const { t } = useI18n();
  const roadmap: MilestoneItem[] = [
    {
      year: "2025",
      icon: Sprout,
      title: t("home.roadmap.2025.title"),
      milestones: [
        t("home.roadmap.2025.item1"),
        t("home.roadmap.2025.item2"),
        t("home.roadmap.2025.item3"),
        t("home.roadmap.2025.item4"),
      ],
    },
    {
      year: "2026",
      icon: Wrench,
      title: t("home.roadmap.2026.title"),
      milestones: [
        t("home.roadmap.2026.item1"),
        t("home.roadmap.2026.item2"),
        t("home.roadmap.2026.item3"),
        t("home.roadmap.2026.item4"),
      ],
    },
    {
      year: "2027",
      icon: BadgeCheck,
      title: t("home.roadmap.2027.title"),
      milestones: [
        t("home.roadmap.2027.item1"),
        t("home.roadmap.2027.item2"),
        t("home.roadmap.2027.item3"),
        t("home.roadmap.2027.item4"),
      ],
    },
    {
      year: "2028",
      icon: Rocket,
      title: t("home.roadmap.2028.title"),
      milestones: [
        t("home.roadmap.2028.item1"),
        t("home.roadmap.2028.item2"),
        t("home.roadmap.2028.item3"),
        t("home.roadmap.2028.item4"),
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-32 px-4 relative">
      <div className="absolute inset-0 dot-pattern opacity-20"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Map className="w-4 h-4" />
            {t("home.roadmap.badge")}
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance text-foreground">
            {t("home.roadmap.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("home.roadmap.subtitle")}
          </p>
        </div>

        {/* Desktop: Horizontal timeline */}
        <RoadmapDesktop roadmap={roadmap} />

        {/* Mobile: Vertical timeline */}
        <RoadmapMobile roadmap={roadmap} />
      </div>
    </section>
  );
};
