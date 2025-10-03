import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Brain,
  FileSearch,
  BarChart3,
  Database,
  Share2,
  Lock,
  Workflow,
  Sparkles,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function CaracteristicasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Plataforma completa de análisis
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance text-foreground">
              Características de la Plataforma
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Descubre cómo EcoAnalytics revoluciona el análisis de imágenes
              ecográficas con tecnología de vanguardia
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Feature 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Brain className="w-4 h-4" />
                Análisis con IA
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance text-foreground">
                Motor de Inteligencia Artificial
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Nuestro sistema utiliza redes neuronales convolucionales
                profundas entrenadas con más de 2 millones de imágenes
                ecográficas validadas por especialistas.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Detección automática de anomalías y patrones
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Clasificación de estructuras anatómicas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Mediciones automáticas precisas
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Card className="overflow-hidden bg-card backdrop-blur-sm border glow-accent">
                <img
                  src="/ai-neural-network-analyzing-medical-ultrasound.jpg"
                  alt="IA analizando ecografía"
                  className="w-full h-auto"
                />
              </Card>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1">
              <Card className="overflow-hidden bg-card backdrop-blur-sm border glow-accent">
                <img
                  src="/medical-image-processing-workflow-interface.jpg"
                  alt="Procesamiento de imágenes"
                  className="w-full h-auto"
                />
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                <FileSearch className="w-4 h-4" />
                Procesamiento
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance text-foreground">
                Procesamiento Avanzado de Imágenes
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Mejora automática de la calidad de imagen y optimización para
                análisis más precisos.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Reducción de ruido y artefactos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Mejora de contraste adaptativa
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Normalización automática
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                <BarChart3 className="w-4 h-4" />
                Informes
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance text-foreground">
                Informes Detallados y Visualización
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Genera informes completos con visualizaciones interactivas y
                métricas cuantitativas.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Informes personalizables en PDF
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Gráficos y comparativas temporales
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Anotaciones y marcadores
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Card className="overflow-hidden bg-card backdrop-blur-sm border glow-accent">
                <img
                  src="/medical-report-dashboard-with-charts-and-analytics.jpg"
                  alt="Dashboard de informes"
                  className="w-full h-auto"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 dot-pattern opacity-20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Más Características
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Funcionalidades adicionales diseñadas para optimizar tu flujo de
              trabajo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Database,
                title: "Base de Datos Centralizada",
                description:
                  "Almacenamiento seguro y acceso rápido a todo tu historial de análisis",
              },
              {
                icon: Share2,
                title: "Colaboración en Tiempo Real",
                description:
                  "Comparte casos y consulta con especialistas instantáneamente",
              },
              {
                icon: Lock,
                title: "Seguridad Certificada",
                description:
                  "Cumplimiento total con normativas HIPAA, GDPR y regulaciones locales",
              },
              {
                icon: Workflow,
                title: "Integración PACS/RIS",
                description:
                  "Conexión directa con tus sistemas hospitalarios existentes",
              },
              {
                icon: Sparkles,
                title: "Actualizaciones Automáticas",
                description:
                  "Mejoras continuas del modelo sin interrumpir tu trabajo",
              },
              {
                icon: Clock,
                title: "Historial Completo",
                description:
                  "Seguimiento temporal de pacientes y evolución de casos",
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="p-6 bg-card backdrop-blur-sm border hover:border-primary/50 transition-all group"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance text-foreground">
            Experimenta el poder de EcoAnalytics
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
            Solicita una demostración personalizada y descubre cómo podemos
            mejorar tu práctica
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-accent"
          >
            Solicitar Demo Gratuita
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
