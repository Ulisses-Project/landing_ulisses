import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

export default function NotFoundPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <section className="flex-1 flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 dot-pattern opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-2xl text-center relative z-10">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-2xl mb-8 backdrop-blur-sm border border-primary/20 my-6">
            <AlertCircle className="w-6 h-6 text-primary" />
          </div>

          {/* Error code */}
          <div className="text-8xl md:text-9xl font-bold text-primary/20 mb-4 font-mono">
            404
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance text-foreground">
            {t("notFound.title")}
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 text-pretty leading-relaxed max-w-lg mx-auto">
            {t("notFound.description")}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Home className="mr-2 w-4 h-4" />
                {t("notFound.goHome")}
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-transparent"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              {t("notFound.goBack")}
            </Button>
          </div>

          {/* Additional help */}
          <div className="mt-16 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("notFound.help")}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
