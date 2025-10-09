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
  Sparkles,
  Rocket,
  Globe,
  Network,
  Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { TrustedCompanies } from "@/components/trusted-companies";
import { useState } from "react";
import { ContactModal } from "@/components/contact-modal";
import { ImageComparison } from "@/components/image-comparison";
import { images } from "../../assets/image_comparison";
import { appImage } from "@/assets/home";
import { useImageComparison } from "@/hooks/useImageComparison";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  const { t } = useI18n();
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const comparison = useImageComparison();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-green"></span>
              {t("home.hero.badge")}
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 text-balance leading-tight text-foreground">
            {t("home.hero.title")}
            <span className="block bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent mt-2">
              {t("home.hero.titleHighlight")}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-10 text-pretty leading-relaxed">
            {t("home.hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 glow-accent"
              onClick={() => setContactModalOpen(true)}
            >
              {t("home.cta")}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-transparent"
            >
              {t("hero.viewFeatures")}
            </Button>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-primary/20 glow-accent">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
            <img
              src={appImage}
              alt="Dashboard de análisis ecográfico"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 dot-pattern opacity-20"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "98.5%", label: t("stats.accuracy") },
              { value: "50K+", label: t("stats.analyses") },
              { value: "200+", label: t("stats.centers") },
              { value: "24/7", label: t("stats.availability") },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-xl bg-card backdrop-blur-sm border border-border hover:border-primary/50 transition-all"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustedCompanies />

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
            <ImageComparison
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

      <section className="py-20 lg:py-32 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance text-foreground">
              {t("features.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              {t("features.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: t("features.ai.title"),
                description: t("features.ai.desc"),
              },
              {
                icon: Zap,
                title: t("features.speed.title"),
                description: t("features.speed.desc"),
              },
              {
                icon: Shield,
                title: t("features.security.title"),
                description: t("features.security.desc"),
              },
              {
                icon: TrendingUp,
                title: t("features.improvement.title"),
                description: t("features.improvement.desc"),
              },
              {
                icon: Users,
                title: t("features.collaboration.title"),
                description: t("features.collaboration.desc"),
              },
              {
                icon: Award,
                title: t("features.certified.title"),
                description: t("features.certified.desc"),
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="p-6 bg-card backdrop-blur-sm border hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/caracteristicas">
              <Button size="lg" variant="outline">
                {t("features.viewAll")}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 px-4 relative">
        <div className="absolute inset-0 dot-pattern opacity-20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Rocket className="w-4 h-4" />
              {t("roadmap.badge")}
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance text-foreground">
              {t("roadmap.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              {t("roadmap.subtitle")}
            </p>
          </div>

          {/* Desktop: Horizontal timeline */}
          <div className="hidden lg:block relative">
            {/* Connecting line */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20"></div>

            <div className="grid grid-cols-4 gap-6">
              {[
                {
                  year: "2025",
                  quarter: "Q1-Q4",
                  icon: Rocket,
                  title: t("roadmap.2025.title"),
                  items: [
                    t("roadmap.2025.item1"),
                    t("roadmap.2025.item2"),
                    t("roadmap.2025.item3"),
                    t("roadmap.2025.item4"),
                  ],
                },
                {
                  year: "2026",
                  quarter: "Q1-Q4",
                  icon: Globe,
                  title: t("roadmap.2026.title"),
                  items: [
                    t("roadmap.2026.item1"),
                    t("roadmap.2026.item2"),
                    t("roadmap.2026.item3"),
                    t("roadmap.2026.item4"),
                  ],
                },
                {
                  year: "2027",
                  quarter: "Q1-Q4",
                  icon: Network,
                  title: t("roadmap.2027.title"),
                  items: [
                    t("roadmap.2027.item1"),
                    t("roadmap.2027.item2"),
                    t("roadmap.2027.item3"),
                    t("roadmap.2027.item4"),
                  ],
                },
                {
                  year: "2028",
                  quarter: "Q1-Q4",
                  icon: Cpu,
                  title: t("roadmap.2028.title"),
                  items: [
                    t("roadmap.2028.item1"),
                    t("roadmap.2028.item2"),
                    t("roadmap.2028.item3"),
                    t("roadmap.2028.item4"),
                  ],
                },
              ].map((milestone, i) => (
                <div key={i} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-lg shadow-primary/50"></div>
                  </div>

                  <Card className="p-6 bg-card backdrop-blur-sm border hover:border-primary/50 transition-all group mt-32">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <milestone.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-primary">
                        {milestone.year}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {milestone.quarter}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {milestone.title}
                    </h3>
                    <ul className="space-y-2">
                      {milestone.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical timeline */}
          <div className="lg:hidden relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20"></div>

            <div className="space-y-8">
              {[
                {
                  year: "2025",
                  quarter: "Q1-Q4",
                  icon: Rocket,
                  title: t("roadmap.2025.title"),
                  items: [
                    t("roadmap.2025.item1"),
                    t("roadmap.2025.item2"),
                    t("roadmap.2025.item3"),
                    t("roadmap.2025.item4"),
                  ],
                },
                {
                  year: "2026",
                  quarter: "Q1-Q4",
                  icon: Globe,
                  title: t("roadmap.2026.title"),
                  items: [
                    t("roadmap.2026.item1"),
                    t("roadmap.2026.item2"),
                    t("roadmap.2026.item3"),
                    t("roadmap.2026.item4"),
                  ],
                },
                {
                  year: "2027",
                  quarter: "Q1-Q4",
                  icon: Network,
                  title: t("roadmap.2027.title"),
                  items: [
                    t("roadmap.2027.item1"),
                    t("roadmap.2027.item2"),
                    t("roadmap.2027.item3"),
                    t("roadmap.2027.item4"),
                  ],
                },
                {
                  year: "2028",
                  quarter: "Q1-Q4",
                  icon: Cpu,
                  title: t("roadmap.2028.title"),
                  items: [
                    t("roadmap.2028.item1"),
                    t("roadmap.2028.item2"),
                    t("roadmap.2028.item3"),
                    t("roadmap.2028.item4"),
                  ],
                },
              ].map((milestone, i) => (
                <div key={i} className="relative pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 -translate-x-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-lg shadow-primary/50"></div>
                  </div>

                  <Card className="p-6 bg-card backdrop-blur-sm border hover:border-primary/50 transition-all">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <milestone.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-primary">
                        {milestone.year}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {milestone.quarter}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {milestone.title}
                    </h3>
                    <ul className="space-y-2">
                      {milestone.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />

      <Footer />

      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </div>
  );
}
