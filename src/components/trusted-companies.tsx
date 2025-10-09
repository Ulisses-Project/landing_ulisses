import Marquee from "react-fast-marquee";
import companies from "@/assets/companies";
import { useI18n } from "@/lib/i18n";
import { Link } from "react-router-dom";
import { useTheme } from "../context/theme-provider";

export function TrustedCompanies() {
  const { t } = useI18n();

  const theme = useTheme();

  const isDark = theme.theme === "dark";
  // Duplicamos el array para tener más contenido visible
  const extendedCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="py-20 relative border-y border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <h3 className="text-center text-sm font-medium text-muted-foreground mb-12">
          {t("trusted.title")}
        </h3>
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)]">
          <Marquee
            pauseOnHover={false}
            gradient={false}
            speed={50}
            style={{ minHeight: "6rem" }}
          >
            {extendedCompanies.map((company, i) => (
              <span
                key={i}
                className="mx-8 flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all overflow-hidden"
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
                    className="h-24 w-auto object-contain transition-all duration-500 scale-100 hover:scale-105"
                  />
                </Link>
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
