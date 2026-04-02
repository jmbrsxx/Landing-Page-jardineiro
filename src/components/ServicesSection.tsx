import { useFadeIn } from "@/hooks/useFadeIn";
import { Scissors, TreePine, Flower2, Droplets, Sun, Shovel } from "lucide-react";
import gardenService1 from "@/assets/garden-service1.jpg";
import gardenService2 from "@/assets/garden-service2.jpg";
import gardenService3 from "@/assets/garden-service3.jpg";

const services = [
  {
    icon: Scissors,
    title: "Poda e Topiaria",
    description: "Corte artístico e manutenção de arbustos e árvores para um jardim sempre impecável.",
    image: gardenService1,
  },
  {
    icon: TreePine,
    title: "Paisagismo",
    description: "Projetos personalizados que transformam qualquer espaço em um refúgio natural.",
    image: gardenService2,
  },
  {
    icon: Droplets,
    title: "Irrigação Automatizada",
    description: "Sistemas inteligentes de irrigação que economizam água e mantêm seu jardim saudável.",
    image: gardenService3,
  },
  {
    icon: Flower2,
    title: "Plantio e Cultivo",
    description: "Seleção e plantio das melhores espécies para o seu clima e estilo.",
  },
  {
    icon: Sun,
    title: "Manutenção Mensal",
    description: "Planos de manutenção regular para seu jardim estar sempre perfeito.",
  },
  {
    icon: Shovel,
    title: "Preparação de Solo",
    description: "Análise e preparo do solo com adubação para crescimento saudável das plantas.",
  },
];

const ServicesSection = () => {
  const ref = useFadeIn();

  return (
    <section id="servicos" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 fade-section">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">Nossos Serviços</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 font-serif text-foreground">
            Cuidado Completo Para Seu Jardim
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para manter e transformar seus espaços verdes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`fade-section stagger-${(i % 4) + 1} group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border`}
            >
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
