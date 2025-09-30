import { MessageCircle, Clock, Smartphone } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Clique no botão",
    description: "Entre em contato conosco pelo WhatsApp com apenas um clique"
  },
  {
    icon: Clock,
    number: "02",
    title: "Receba em segundos",
    description: "Sua lista IPTV será gerada e enviada instantaneamente"
  },
  {
    icon: Smartphone,
    number: "03",
    title: "Aproveite agora",
    description: "Assista no seu dispositivo favorito: TV, celular, tablet ou PC"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Como <span className="text-primary">funciona</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            É simples, rápido e totalmente automático. Veja como começar:
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-card border border-border rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Step number badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.number}
              </div>
              
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
