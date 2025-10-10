import { useI18n } from "@/lib/i18n";
import { TeamCard } from "./TeamCard";
import {
  alejandroImage,
  davidImage,
  marinaImage,
  pabloImage,
  paulaImage,
} from "@/assets/team";

export const TeamCardGrid = () => {
  const { t } = useI18n();
  const team = [
    {
      name: "Dr. Pablo Valderrábano",
      role: t("about.team.pablo.role"),
      image: pabloImage,
      alt: t("about.team.pablo.alt"),
      description: t("about.team.pablo.description"),
    },
    {
      name: "Paula Quintana",
      role: t("about.team.paula.role"),
      image: paulaImage,
      alt: t("about.team.paula.alt"),
      description: t("about.team.paula.description"),
    },
    {
      name: "Alejandro García",
      role: t("about.team.alejandro.role"),
      image: alejandroImage,
      alt: t("about.team.alejandro.alt"),
      description: t("about.team.alejandro.description"),
    },
    {
      name: "David Santamaría",
      role: t("about.team.david.role"),
      image: davidImage,
      alt: t("about.team.david.alt"),
      description: t("about.team.david.description"),
    },
    {
      name: "Marina de Diego",
      role: t("about.team.marina.role"),
      image: marinaImage,
      alt: t("about.team.marina.alt"),
      description: t("about.team.marina.description"),
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {team.map((teamMember, index) => (
        <div
          key={index}
          className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]"
        >
          <TeamCard {...teamMember} />
        </div>
      ))}
    </div>
  );
};
