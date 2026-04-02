import { useFadeIn } from "@/hooks/useFadeIn";
import gardenerWork from "@/assets/gardener-work.jpg";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Mais de 15 anos de experiência",
  "Equipe treinada e dedicada",
  "Produtos ecológicos e sustentáveis",
  "Atendimento personalizado",
];

const AboutSection = () => {
  const ref = useFadeIn();

  return (
    <section id="sobre" className="py-24" ref={ref}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-section-left">
            <div className="relative">
              <img
                src={gardenerWork}
                alt="Jardineiro profissional trabalhando"
                loading="lazy"
                width={800}
                height={800}
                className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-bold font-serif">15+</div>
                <div className="text-sm opacity-90">Anos de Experiência</div>
              </div>
            </div>
          </div>

          <div className="fade-section-right">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">Sobre Nós</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 font-serif text-foreground">
              Paixão Pelo Verde, Dedicação ao Seu Espaço
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Somos especialistas em transformar espaços comuns em jardins extraordinários. Com uma equipe apaixonada e experiente, oferecemos soluções completas de jardinagem e paisagismo.
            </p>

            <div className="space-y-4">
              {highlights.map((item, i) => (
                <div key={i} className={`flex items-center gap-3 fade-section stagger-${i + 1}`}>
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
