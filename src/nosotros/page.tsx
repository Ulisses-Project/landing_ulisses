import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance text-foreground">
              Sobre EcoAnalytics
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Pioneros en la aplicación de inteligencia artificial para el
              diagnóstico médico por imagen
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance text-foreground">
                Nuestra Misión
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Democratizar el acceso a diagnósticos médicos de alta precisión
                mediante tecnología de inteligencia artificial avanzada,
                mejorando la calidad de vida de millones de personas en todo el
                mundo.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Creemos que cada paciente merece el mejor diagnóstico posible,
                independientemente de su ubicación geográfica o recursos
                disponibles.
              </p>
            </div>
            <div className="relative">
              <img
                src="/medical-team-doctors-collaborating-with-technology.jpg"
                alt="Equipo médico"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Nuestros Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Los principios que guían cada decisión y desarrollo en
              EcoAnalytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center bg-card backdrop-blur-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Precisión
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Compromiso inquebrantable con la exactitud en cada análisis
              </p>
            </Card>

            <Card className="p-6 text-center bg-card backdrop-blur-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Empatía
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Tecnología centrada en el bienestar del paciente
              </p>
            </Card>

            <Card className="p-6 text-center bg-card backdrop-blur-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Innovación
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Investigación continua en IA y aprendizaje automático
              </p>
            </Card>

            <Card className="p-6 text-center bg-card backdrop-blur-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Colaboración
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Trabajo conjunto con la comunidad médica global
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Nuestra Historia
            </h2>
          </div>

          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                  2019
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Fundación
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Un equipo de médicos radiólogos e ingenieros en IA se unen con
                  la visión de revolucionar el diagnóstico por imagen. Comienza
                  el desarrollo del primer prototipo.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                  2020
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Primeros Ensayos Clínicos
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Colaboración con 5 hospitales universitarios para validar la
                  tecnología. Resultados prometedores con 96% de precisión en
                  detección de anomalías.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                  2021
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Certificación Médica
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Obtención de certificaciones CE y FDA. Lanzamiento comercial
                  en Europa. Primeros 50 centros médicos adoptan la plataforma.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                  2022
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Expansión Internacional
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Apertura de oficinas en América Latina y Asia. Más de 150
                  instituciones médicas utilizan EcoAnalytics. Ronda de
                  inversión Serie A exitosa.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                  2023
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Liderazgo en Innovación
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Más de 200 centros médicos en 15 países. Precisión del 98.5%.
                  Reconocimiento como una de las 10 startups de salud más
                  innovadoras de Europa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Equipo de Liderazgo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Expertos en medicina, inteligencia artificial y tecnología
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden bg-card backdrop-blur-sm border">
              <img
                src="/professional-male-doctor.png"
                alt="CEO"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-foreground">
                  Dr. Javier Fernández
                </h3>
                <p className="text-sm text-primary mb-2">CEO & Co-fundador</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Radiólogo con 15 años de experiencia. PhD en Imagen Médica por
                  la Universidad Complutense.
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden bg-card backdrop-blur-sm border">
              <img
                src="/professional-female-engineer.png"
                alt="CTO"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-foreground">
                  Laura Sánchez
                </h3>
                <p className="text-sm text-primary mb-2">CTO & Co-fundadora</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ingeniera en IA. Anteriormente investigadora en Google
                  DeepMind. PhD en Machine Learning.
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden bg-card backdrop-blur-sm border">
              <img
                src="/professional-male-scientist.png"
                alt="Chief Medical Officer"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-foreground">
                  Dr. Miguel Ángel Torres
                </h3>
                <p className="text-sm text-primary mb-2">
                  Chief Medical Officer
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Especialista en diagnóstico por imagen. 20 años en hospitales
                  universitarios de referencia.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Investors */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Respaldados por Líderes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Inversores que comparten nuestra visión de transformar la medicina
            </p>
          </div>

          <div className="bg-card backdrop-blur-sm border rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-muted-foreground">
                  HealthTech Ventures
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-muted-foreground">
                  MedAI Capital
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-muted-foreground">
                  Innovation Partners
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-muted-foreground">
                  Global Health Fund
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Serie A - €15M recaudados
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Financiación destinada a expansión internacional, investigación
                en nuevas modalidades de imagen y desarrollo de capacidades de
                IA multimodal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance text-foreground">
            ¿Quieres formar parte de nuestra historia?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
            Estamos buscando talento excepcional y socios estratégicos
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Ver Oportunidades de Carrera
            </Button>
            <Button size="lg" variant="outline">
              Contactar para Inversión
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
