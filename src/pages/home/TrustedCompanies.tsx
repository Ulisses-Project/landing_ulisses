import Marquee from "react-fast-marquee";
import companies from "@/assets/companies";
import { useI18n } from "@/lib/i18n";
import { Link } from "react-router-dom";

export function TrustedCompanies() {
  const { t } = useI18n();

  console.log(companies);

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
                className="mx-8 flex-shrink-0 flex items-center justify-center"
              >
                <Link
                  to={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={company.logo}
                    alt={company.name || `Investor ${i + 1}`}
                    className="h-20 lg:h-24 w-auto max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 dark:invert dark:hover:invert-0"
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
