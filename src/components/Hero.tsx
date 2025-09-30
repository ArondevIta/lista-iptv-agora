import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <img 
              src={logo} 
              alt="Lista Pronta IPTV" 
              className="w-32 h-32 md:w-40 md:h-40 mx-auto lg:mx-0 mb-8 drop-shadow-2xl"
            />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Teste grátis IPTV com{" "}
              <span className="text-primary">qualidade premium</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Filmes, séries e canais ao vivo liberados em instantes.
            </p>
            
            <Button 
              variant="cta" 
              size="xl"
              className="group animate-glow"
              asChild
            >
              <a 
                href="https://wa.me/5573988088147" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Gerar Teste Agora
              </a>
            </Button>
          </div>
          
          {/* Right content - visual grid */}
          <div className="flex-1 w-full max-w-md animate-slide-up">
            <div className="grid grid-cols-3 gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border shadow-2xl">
              {[
                { label: "HD", gradient: "from-primary/80 to-primary/60" },
                { label: "4K", gradient: "from-primary/70 to-primary/50" },
                { label: "LIVE", gradient: "from-primary/60 to-primary/40" },
                { label: "SPORT", gradient: "from-primary/80 to-primary/60" },
                { label: "NEWS", gradient: "from-primary/70 to-primary/50" },
                { label: "MOVIE", gradient: "from-primary/60 to-primary/40" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`aspect-square bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center font-bold text-sm md:text-base text-primary-foreground shadow-lg transition-transform hover:scale-105 duration-300`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {item.label}
                </div>
              ))}
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Canais IPTV</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">4K</div>
                <div className="text-sm text-muted-foreground">Ultra HD</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">4H</div>
                <div className="text-sm text-muted-foreground">Teste Grátis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
