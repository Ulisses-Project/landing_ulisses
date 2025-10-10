import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, User } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const { t } = useI18n();

  const team = [
    {
      name: "Dr. Pablo Valderrábano",
      role: t("contact.pablo_role"),
      email: "pablo.valderrabano@salud.madrid.org",
      linkedin_name: "pablo-valderrabano",
      linkedin: "pablovalderrabano",
    },
    {
      name: "Paula Quintana",
      role: t("contact.paula_role"),
      email: "pquintanaz@salud.madrid.org",
      linkedin_name: "paula-quintana",
      linkedin: "paula-quintana-zapata",
    },
    {
      name: "Alejandro García",
      role: t("contact.alejandro_role"),
      email: "alejandro.garcia.gallego@salud.madrid.org",
      linkedin: "alejandrogarciagallegolinkedn",
      linkedin_name: "alejandro-garcia",
    },
  ];
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-md sm:max-w-2xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-foreground">
            {t("contact.title")}
          </DialogTitle>
          <p className="text-sm sm:text-base text-muted-foreground">
            {t("contact.subtitle")}
          </p>
        </DialogHeader>

        <div className="overflow-y-auto max-h-[calc(100vh-180px)] mt-4 sm:mt-6 space-y-3 sm:space-y-4">
          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-4">
            {t("contact.team")}
          </h3>

          {team.map((member, i) => (
            <div
              key={i}
              className="p-2 sm:p-4 rounded-lg bg-accent/50 border border-border hover:border-primary/50 transition-all group"
            >
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground text-base sm:text-lg">
                    {member.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                    {member.role}
                  </p>

                  <div className="space-y-1 sm:space-y-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="truncate">{member.email}</span>
                    </a>

                    <a
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-primary" />
                      <span>{member.linkedin_name}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 pb-4 mt-4 sm:mt-6 flex justify-end">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="w-full sm:w-auto"
          >
            {t("contact.close")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
