import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { ContactModal } from "./contact-modal";
import { useState } from "react";

export const CTA = () => {
  const { t } = useI18n();
  const [contactModalOpen, setContactModalOpen] = useState(false);
  return (
    <>
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance text-primary-foreground">
            {t("cta.title")}
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 text-pretty leading-relaxed">
            {t("cta.subtitle")}
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
            onClick={() => setContactModalOpen(true)}
          >
            {t("cta.button")}
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
