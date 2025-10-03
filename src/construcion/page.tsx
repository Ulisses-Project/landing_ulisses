import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Construction, Mail, ArrowRight, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { useEffect, useState } from "react";
import { ContactModal } from "@/components/contact-modal";

export default function UnderConstructionPage() {
  const { t } = useI18n();
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startDate = new Date("2025-10-01T00:00:00").getTime();
    const targetDate = new Date("2025-10-23T00:00:00").getTime();
    const totalDuration = targetDate - startDate;

    function update() {
      const now = new Date().getTime();

      // Countdown
      const diff = targetDate - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setProgress(100);
        return;
      }

      // Tiempo restante en días, horas, min y seg
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });

      // Barra de progreso en %
      const elapsed = now - startDate;
      const progressPercent = Math.min((elapsed / totalDuration) * 100, 100);
      setProgress(progressPercent);
    }

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>

        <div className="container mx-auto max-w-3xl text-center relative z-10 flex flex-col items-center justify-center">
          {/* Badge y Icono centrados */}
          <div className="flex flex-col items-center gap-4 mb-8 my-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              {t("construction.badge")}
              <Construction className="w-5 h-5 text-primary ml-2" />
            </div>
          </div>
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-foreground">
            {t("construction.title")}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 text-pretty leading-relaxed max-w-2xl mx-auto">
            {t("construction.description")}
          </p>

          {/* Features being worked on */}
          <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
            {[
              {
                title: t("construction.feature1"),
                icon: "🔬",
              },
              {
                title: t("construction.feature2"),
                icon: "🤖",
              },
              {
                title: t("construction.feature3"),
                icon: "📊",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all"
              >
                <div className="text-3xl mb-2">{feature.icon}</div>
                <p className="text-sm text-muted-foreground">{feature.title}</p>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 glow-accent"
              >
                {t("construction.goHome")}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-transparent"
              onClick={() => setContactModalOpen(true)}
            >
              <Mail className="mr-2 w-4 h-4" />
              {t("construction.contact")}
            </Button>
          </div>

          {/* Progress indicator */}
          <div className="p-10 rounded-2xl bg-card/50 backdrop-blur-sm border border-border max-w-lg mx-auto">
            <div className="flex items-center justify-between mb-3 text-sm font-medium text-foreground">
              <span>{t("construction.progress")}</span>
              <Rocket className="w-6 h-6 text-primary" />
            </div>

            <div className="w-full h-3 bg-muted rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="text-lg font-bold text-primary text-center mb-4">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
              {timeLeft.seconds}s
            </p>

            <p className="text-base text-muted-foreground text-center">
              {t("construction.estimate")}
            </p>
          </div>
        </div>
      </section>

      <Footer />

      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </div>
  );
}
