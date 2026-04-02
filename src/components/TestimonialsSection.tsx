import { useFadeIn } from "@/hooks/useFadeIn";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    text: "Transformaram meu quintal em um verdadeiro paraíso! Profissionais incríveis e resultado maravilhoso.",
    rating: 5,
    role: "Residencial - São Paulo",
  },
  {
    name: "Carlos Mendes",
    text: "Excelente serviço de manutenção mensal. Meu jardim nunca esteve tão bonito e saudável.",
    rating: 5,
    role: "Condomínio - Campinas",
  },
  {
    name: "Ana Oliveira",
    text: "O projeto de paisagismo superou todas as expectativas. Recomendo de olhos fechados!",
    rating: 5,
    role: "Residencial - Santos",
  },
];

const TestimonialsSection = () => {
  const ref = useFadeIn();

  return (
    <section id="depoimentos" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 fade-section">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">Depoimentos</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 font-serif text-foreground">
            O Que Nossos Clientes Dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`fade-section stagger-${i + 1} bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border`}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
