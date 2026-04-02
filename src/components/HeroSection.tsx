import heroImage from "@/assets/hero-garden.jpg";
import { Button } from "@/components/ui/button";
import { Leaf, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Jardim profissional com gramado verde e flores coloridas"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary-foreground/20 px-4 py-2 mb-6 animate-fade-in backdrop-blur-sm">
          <Leaf className="w-4 h-4 text-primary-foreground" />
          <span className="text-sm font-medium text-primary-foreground">Jardinagem Profissional</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-slide-up font-serif">
          Transformamos Seu
          <span className="block mt-2" style={{ background: "var(--gold-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Espaço em Jardim
          </span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Há mais de 15 anos criando jardins deslumbrantes. Cuidamos do seu espaço verde com dedicação, técnica e amor pela natureza.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Solicitar Orçamento
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-primary-foreground/50 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm">
            <Phone className="w-5 h-5 mr-2" />
            Ligar Agora
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
