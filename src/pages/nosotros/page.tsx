import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/Footer";
import { AboutMission } from "./AboutMission";
import { AboutValues } from "./AboutValues";
import { AboutStory } from "./AboutStory";
import { AboutTeam } from "./AboutTeam";
import { AboutInvestors } from "./AboutInvestors";
import { CTA } from "@/components/CTA";
import { HeroHeading } from "@/components/HeroHeading";
import { useI18n } from "@/lib/i18n";
import { Users } from "lucide-react";

export default function NosotrosPage() {
  const { t } = useI18n();

  const aboutHeading = {
    badge: Users,
    badge_str: t("about.badge"),
    title: t("about.title"),
    subtitle: t("about.subtitle"),
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroHeading {...aboutHeading} />
      <AboutMission />
      <AboutValues />
      <AboutStory />
      <AboutTeam />
      <AboutInvestors />
      <CTA />
      <Footer />
    </div>
  );
}
