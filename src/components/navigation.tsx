import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";

import { ContactModal } from "@/components/contact-modal";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/theme-provider";
import { useI18n } from "@/lib/i18n";
import { ulissesLogo, ulissesLogoDark } from "@/assets/logos";

export function Navigation() {
  const location = useLocation();
  const pathname = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const { t } = useI18n();

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/", label: t("nav.features") },
    { href: "/", label: t("nav.results") },
    { href: "/", label: t("nav.about") },
  ];

  const { theme } = useTheme();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src={theme === "dark" ? ulissesLogoDark : ulissesLogo}
                alt="UlissesDS"
                className="h-6 sm:h-8 md:h-10 lg:h-12"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative",
                    pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                  {/* {pathname === link.href && (
                    <span className="absolute -bottom-6 left-0 right-0 h-0.5 bg-primary"></span>
                  )} */}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-accent"
                onClick={() => setContactModalOpen(true)}
              >
                {t("nav.cta")}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
              <button
                className="p-2 text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary px-2 py-1",
                      "text-primary"
                      // pathname === link.href
                      //   ? "text-primary"
                      //   : "text-muted-foreground"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 pt-2">
                  <Button
                    size="sm"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => {
                      setContactModalOpen(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t("nav.cta")}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </>
  );
}
