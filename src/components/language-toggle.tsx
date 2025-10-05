import { Button } from "@/components/ui/button";

import { useI18n } from "@/lib/i18n";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useI18n();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="gap-2"
    >
      <Languages className="w-4 h-4" />
      <span className="text-xs font-medium uppercase">{language}</span>
    </Button>
  );
}
