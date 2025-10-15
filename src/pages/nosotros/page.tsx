import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/Footer";
import { AboutHero } from "./AboutHero";
import { AboutMission } from "./AboutMission";
import { AboutValues } from "./AboutValues";
import { AboutStory } from "./AboutStory";
import { AboutTeam } from "./AboutTeam";
import { AboutInvestors } from "./AboutInvestors";
import { CTA } from "@/components/CTA";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
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
