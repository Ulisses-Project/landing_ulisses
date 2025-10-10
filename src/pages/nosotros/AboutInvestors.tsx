import { useI18n } from "@/lib/i18n";
import companies from "@/assets/companies";
import { useTheme } from "@/context/theme-provider";
import { Link } from "react-router-dom";

const [healstart, , , itemas, mwc, aecc, isciii] = companies;

export const AboutInvestors = () => {
  const { t } = useI18n();

  const theme = useTheme();

  const isDark = theme.theme === "dark";

  const investors = [healstart, isciii, aecc, itemas, mwc];

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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {investors.map((company, index) => (
              <>
                {isDark && company.hasOwnProperty("logo_dark") ? (
                  <span
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all overflow-hidden"
                  >
                    <Link
                      to={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={
                          isDark && company.hasOwnProperty("logo_dark")
                            ? company.logo_dark
                            : company.logo || "/placeholder.svg"
                        }
                        alt={company.name}
                        className="h-20 lg:h-24 w-auto max-w-full object-contain transition-all duration-500 scale-100"
                      />
                    </Link>
                  </span>
                ) : (
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
                )}
              </>
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
