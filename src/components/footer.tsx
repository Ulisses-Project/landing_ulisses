import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/theme-provider";
import { useI18n } from "@/lib/i18n";

import { ulissesLogo, ulissesLogoDark } from "@/assets/logos";

export function Footer() {
  const { theme } = useTheme();
  const { t } = useI18n();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={theme === "dark" ? ulissesLogoDark : ulissesLogo}
                alt="UlissesDS"
                className="h-16 sm:h-18 md:h-20 lg:h-25"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">
              {t("footer.heading.product")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("footer.product.features")}
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("footer.product.results")}
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("footer.product.pricing")}
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("footer.product.faq")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">
              {t("footer.heading.company")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("footer.company.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("footer.company.team")}
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("footer.company.investors")}
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("footer.company.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">
              {t("footer.heading.contact")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  pablo.valderrabano@salud.madrid.org
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  {t("footer.address")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} UlissesDS. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
