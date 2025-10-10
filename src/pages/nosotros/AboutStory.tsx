import { StoryCard } from "@/components/StoryCard";
import { useI18n } from "@/lib/i18n";

export const AboutStory = () => {
  const { t } = useI18n();
  const stories = [
    {
      year: "2019",
      title: t("about.story.year1.title"),
      description: t("about.story.year1.description"),
    },
    {
      year: "2020",
      title: t("about.story.year2.title"),
      description: t("about.story.year2.description"),
    },
    {
      year: "2021",
      title: t("about.story.year3.title"),
      description: t("about.story.year3.description"),
    },
    {
      year: "2022",
      title: t("about.story.year4.title"),
      description: t("about.story.year4.description"),
    },
    {
      year: "2023",
      title: t("about.story.year5.title"),
      description: t("about.story.year5.description"),
    },
    {
      year: "2024",
      title: t("about.story.year6.title"),
      description: t("about.story.year6.description"),
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            {t("about.story.title")}
          </h2>
        </div>

        <div className="space-y-12">
          {stories.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
};
