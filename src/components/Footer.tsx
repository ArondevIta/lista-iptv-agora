import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center text-center gap-8">
          <img 
            src={logo} 
            alt="Lista Pronta IPTV" 
            className="w-24 h-24 drop-shadow-xl"
          />
          
          <div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">
              Lista Pronta IPTV
            </h3>
            <p className="text-muted-foreground">
              Teste grátis de IPTV com qualidade premium
            </p>
          </div>
          
          <Button 
            variant="cta" 
            size="xl"
            className="animate-glow"
            asChild
          >
            <a 
              href="https://wa.me/5573988088147" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Gerar Teste Agora no WhatsApp
            </a>
          </Button>
          
          <div className="text-sm text-muted-foreground pt-8 border-t border-border w-full">
            © 2025 Lista Pronta IPTV. Todos os direitos reservados.
          </div>
        </div>
      </div>
      
      {/* Fixed CTA button for mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden z-50">
        <Button 
          variant="cta" 
          size="lg"
          className="w-full"
          asChild
        >
          <a 
            href="https://wa.me/5573988088147" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
