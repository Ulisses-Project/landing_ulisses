import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Award, Users, Target } from "lucide-react";
import { PrecisionChart, TiempoAnalisisChart, VolumenChart, RendimientoChart } from "@/components/results-charts";


export default function ResultadosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4" />
              Datos verificados y certificados
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance text-foreground">
              Resultados Comprobados
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Datos reales de instituciones médicas que confían en EcoAnalytics
              para mejorar sus diagnósticos
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: TrendingUp,
                value: "98.5%",
                label: "Precisión diagnóstica",
                sublabel: "vs 94% método tradicional",
              },
              {
                icon: Target,
                value: "65%",
                label: "Reducción de tiempo",
                sublabel: "en análisis de imágenes",
              },
              {
                icon: Users,
                value: "200+",
                label: "Centros médicos",
                sublabel: "en 15 países",
              },
              {
                icon: Award,
                value: "99.2%",
                label: "Satisfacción médica",
                sublabel: "según encuestas",
              },
            ].map((metric, i) => (
              <Card
                key={i}
                className="p-8 text-center bg-card backdrop-blur-sm border hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-foreground mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.sublabel}
                </div>
              </Card>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-foreground">
              Análisis de Datos en Tiempo Real
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Visualización de métricas clave que demuestran el impacto de
              EcoAnalytics en instituciones médicas
            </p>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <PrecisionChart />
              <TiempoAnalisisChart />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <VolumenChart />
              <RendimientoChart />
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
              Casos de Éxito
            </h2>

            <div className="space-y-12">
              {/* Case Study 1 */}
              <Card className="overflow-hidden bg-card backdrop-blur-sm border">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src="/modern-hospital-medical-center-exterior.jpg"
                      alt="Hospital Universitario"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="text-sm text-primary font-medium mb-2">
                      Hospital Universitario La Paz
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      Mejora del 45% en detección temprana
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "Desde la implementación de EcoAnalytics, hemos observado
                      una mejora significativa en la detección temprana de
                      anomalías. El sistema nos ha permitido reducir los tiempos
                      de diagnóstico y aumentar la confianza en nuestras
                      evaluaciones."
                    </p>
                    <div className="flex items-center gap-4 mb-4">
                      <div>
                        <div className="font-semibold text-foreground">
                          Dra. María González
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Jefa de Radiología
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          45%
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Mejora en detección
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          3,500+
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Análisis mensuales
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Case Study 2 */}
              <Card className="overflow-hidden bg-card backdrop-blur-sm border">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto order-2 lg:order-1">
                    <img
                      src="/private-medical-clinic-interior-modern.jpg"
                      alt="Clínica Privada"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-10 order-1 lg:order-2">
                    <div className="text-sm text-primary font-medium mb-2">
                      Clínica Diagnóstica Barcelona
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      Reducción de 60% en tiempo de análisis
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "La integración con nuestro sistema PACS fue perfecta.
                      Ahora procesamos el doble de pacientes sin comprometer la
                      calidad. La IA nos ayuda a priorizar casos urgentes
                      automáticamente."
                    </p>
                    <div className="flex items-center gap-4 mb-4">
                      <div>
                        <div className="font-semibold text-foreground">
                          Dr. Carlos Martínez
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Director Médico
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          60%
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Reducción de tiempo
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          2x
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Capacidad de pacientes
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Case Study 3 */}
              <Card className="overflow-hidden bg-card backdrop-blur-sm border">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src="/medical-research-laboratory-scientists.jpg"
                      alt="Centro de Investigación"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="text-sm text-primary font-medium mb-2">
                      Instituto de Investigación Médica
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      Avances en investigación clínica
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "EcoAnalytics nos ha permitido analizar grandes volúmenes
                      de datos para nuestros estudios clínicos. La consistencia
                      y precisión del análisis automatizado ha acelerado
                      significativamente nuestra investigación."
                    </p>
                    <div className="flex items-center gap-4 mb-4">
                      <div>
                        <div className="font-semibold text-foreground">
                          Dra. Ana Rodríguez
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Directora de Investigación
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          15K+
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Imágenes analizadas
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">8</div>
                        <div className="text-xs text-muted-foreground">
                          Estudios publicados
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Clinical Impact */}
          <div className="bg-muted/30 border rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
              Impacto Clínico Medible
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">50K+</div>
                <div className="text-lg font-semibold mb-2 text-foreground">
                  Análisis Realizados
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Más de 50,000 imágenes ecográficas procesadas con éxito
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">92%</div>
                <div className="text-lg font-semibold mb-2 text-foreground">
                  Reducción de Errores
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Disminución significativa en falsos negativos y positivos
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">4.5h</div>
                <div className="text-lg font-semibold mb-2 text-foreground">
                  Tiempo Ahorrado
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Promedio de horas ahorradas por médico semanalmente
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance text-primary-foreground">
            Únete a los líderes en diagnóstico médico
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 text-pretty leading-relaxed">
            Descubre cómo EcoAnalytics puede transformar los resultados de tu
            institución
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
          >
            Solicitar Estudio de Caso Personalizado
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
