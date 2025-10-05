import { useI18n } from "@/lib/i18n";
import { TeamCard } from "./TeamCard";

export const TeamCardGrid = () => {
  const { t } = useI18n();
  const team = [
    {
      name: "Dr. Pablo Valderrabano",
      role: t("about.team.pablo.role"),
      image: "/professional-male-doctor.png",
      alt: t("about.team.pablo.alt"),
      description: t("about.team.pablo.description"),
    },
    {
      name: "Paula Quitana",
      role: t("about.team.paula.role"),
      image: "/professional-female-engineer.png",
      alt: t("about.team.paula.alt"),
      description: t("about.team.paula.description"),
    },
    {
      name: "Alejandro García",
      role: t("about.team.alejandro.role"),
      image: "/professional-male-scientist.png",
      alt: t("about.team.alejandro.alt"),
      description: t("about.team.alejandro.description"),
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {team.map((teamMember, index) => (
        <TeamCard key={index} {...teamMember} />
      ))}
    </div>
  );
};
