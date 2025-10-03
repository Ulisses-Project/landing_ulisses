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
      role: "Endocrinologist & Co-founder",
      email: "pablo.valderrabano@salud.madrid.org",
      linkedin_name: "pablo-valderrabano",
      linkedin: "pablovalderrabano",
    },
    {
      name: "Alejandro García",
      role: "Software Engineer & Co-founder",
      email: "alejandro.garcia.gallego@salud.madrid.org",
      linkedin: "alejandrogarciagallegolinkedn",
      linkedin_name: "alejandro-garcia",
    },
    {
      name: "Paula Quintana",
      role: "Biomedical Engineer & Co-founder",
      email: "pquintanaz@salud.madrid.org",
      linkedin_name: "paula-quintana",
      linkedin: "paula-quintana-zapata",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {t("contact.title")}
          </DialogTitle>
          <p className="text-muted-foreground">{t("contact.subtitle")}</p>
        </DialogHeader>

        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            {t("contact.team")}
          </h3>

          {team.map((member, i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-accent/50 border border-border hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <User className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground">
                    {member.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {member.role}
                  </p>

                  <div className="space-y-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{member.email}</span>
                    </a>

                    <a
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>{member.linkedin_name}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {t("contact.close")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
