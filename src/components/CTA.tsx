import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { ContactModal } from "./contact-modal";
import { useState } from "react";
import { Sparkles } from "lucide-react";

export const CTA = () => {
  const { t } = useI18n();
  const [contactModalOpen, setContactModalOpen] = useState(false);
  return (
    <>
      <section className="relative py-20 lg:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            {t("cta.badge")}
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance text-foreground">
            {t("cta.title")}
          </h2>
          <p className="text-lg mb-8 text-muted-foreground text-pretty leading-relaxed">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 glow-accent"
              onClick={() => setContactModalOpen(true)}
            >
              {t("cta.demo")}
            </Button>
          </div>
        </div>
      </section>
      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </>
  );
};
