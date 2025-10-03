import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "./theme-provider";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={
                  theme === "dark"
                    ? "/assets/ulisses_dark.svg"
                    : "/assets/ulisses.svg"
                }
                alt="UlissesDS"
                className="h-16 sm:h-18 md:h-20 lg:h-25"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tecnología avanzada de IA para el análisis preciso de imágenes
              ecográficas médicas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Producto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Características
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Resultados
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Precios
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Documentación
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Equipo
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Inversores
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  pablo.valderrabano@salud.madrid.org
                </span>
              </li>
              {/* <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">+34 655 248 595 </span>
              </li> */}
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} UlissesDS. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
