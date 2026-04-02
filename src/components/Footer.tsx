import { Leaf, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-foreground text-background py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6" />
              <span className="text-xl font-bold font-serif">Verde & Arte</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Transformando espaços em jardins dos sonhos há mais de 15 anos.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 font-serif">Contato</h4>
            <div className="space-y-3 text-background/70">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>contato@verdeearte.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 font-serif">Serviços</h4>
            <div className="space-y-2 text-background/70">
              <p>Paisagismo</p>
              <p>Manutenção de Jardins</p>
              <p>Poda e Topiaria</p>
              <p>Irrigação Automatizada</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/50 text-sm">
          © {new Date().getFullYear()} Verde & Arte Jardinagem. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
