import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { ContactModal } from "./contact-modal";
import { useState } from "react";

export const CTA = () => {
  const { t } = useI18n();
  const [contactModalOpen, setContactModalOpen] = useState(false);
  return (
    <>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance text-foreground">
            {t("features.cta.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
            {t("features.cta.subtitle")}
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-accent"
            onClick={() => setContactModalOpen(true)}
          >
            {t("features.cta.button")}
          </Button>
        </div>
      </section>
      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </>
  );
};
