import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Brain,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { TrustedCompanies } from "@/components/trusted-companies";
import { useState } from "react";
import { ContactModal } from "@/components/contact-modal";

import { CTA } from "@/components/CTA";
import { Roadmap } from "./Roadmap";
import { ImageComparison } from "./ImageComparison";
import { HeroHeading } from "./HeroHeading";
import { HighlightedFeatures } from "./HighligthedFeatures";
import { Features } from "./Features";

const scrollToFeatures = () => {
  const element = document.getElementById("features");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
const HomePage = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <HeroHeading
        onContactClick={() => setContactModalOpen(true)}
        onViewFeaturesClick={scrollToFeatures}
      />

      <HighlightedFeatures />

      <TrustedCompanies />

      <ImageComparison />

      <Features />

      <Roadmap />

      <CTA />

      <Footer />

      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </div>
  );
};

export default HomePage;
