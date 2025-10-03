
import { useI18n } from "@/lib/i18n";

export function TrustedCompanies() {
  const { t } = useI18n();

  const companies = [
    { name: "Hospital General", logo: "/hospital-logo.png" },
    { name: "MediCare", logo: "/medical-clinic-logo.png" },
    { name: "HealthTech", logo: "/health-technology-logo.jpg" },
    { name: "Clínica Central", logo: "/clinic-logo.jpg" },
  ];

  return (
    <section className="py-20 relative border-y border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <h3 className="text-center text-sm font-medium text-muted-foreground mb-12">
          {t("trusted.title")}
        </h3>

        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {companies.map((company, i) => (
              <li
                key={i}
                className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
              >
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  className="h-24 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            {companies.map((company, i) => (
              <li
                key={i}
                className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
              >
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  className="h-24 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
