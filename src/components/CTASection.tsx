import { useFadeIn } from "@/hooks/useFadeIn";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  const ref = useFadeIn();

  return (
    <section className="py-24 bg-primary" ref={ref}>
      <div className="container max-w-4xl mx-auto px-4 text-center fade-section">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif text-primary-foreground">
          Pronto Para Ter o Jardim dos Seus Sonhos?
        </h2>
        <p className="text-primary-foreground/85 text-lg mb-10 max-w-2xl mx-auto">
          Entre em contato agora e receba um orçamento gratuito. Transformamos seu espaço em até 30 dias.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform">
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-primary-foreground text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/20">
            <Phone className="w-5 h-5 mr-2" />
            (11) 99999-9999
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
