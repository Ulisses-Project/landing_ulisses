import { useI18n } from "@/lib/i18n";
import companies from "@/assets/companies";
import { Link } from "react-router-dom";

const investors = companies.slice(1, 9);

export const AboutInvestors = () => {
  const { t } = useI18n();

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            {t("about.investors.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("about.investors.subtitle")}
          </p>
        </div>

        <div className="bg-card backdrop-blur-sm border rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center">
            {investors.map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                <Link
                  to={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={company.logo}
                    alt={company.name || `Investor ${index + 1}`}
                    className="h-20 lg:h-24 w-auto max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 dark:invert dark:hover:invert-0"
                  />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              {t("about.investors.badge")}
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("about.investors.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
