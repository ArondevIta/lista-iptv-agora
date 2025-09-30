import { Tv, Film, Headphones, Zap } from "lucide-react";

const benefits = [
  {
    icon: Tv,
    title: "Qualidade Full HD e 4K",
    description: "Assista seus conteúdos favoritos com a melhor qualidade de imagem disponível no mercado."
  },
  {
    icon: Film,
    title: "Filmes e séries atualizados",
    description: "Acesso a um vasto catálogo sempre atualizado com os últimos lançamentos."
  },
  {
    icon: Headphones,
    title: "Suporte rápido via WhatsApp",
    description: "Nossa equipe está pronta para ajudar você a qualquer momento, rapidamente."
  },
  {
    icon: Zap,
    title: "Teste grátis imediato",
    description: "Receba seu acesso em segundos, sem burocracia. Teste agora mesmo!"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Por que escolher a <span className="text-primary">Lista Pronta IPTV</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos o melhor serviço de IPTV com qualidade superior e suporte incomparável
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card hover:bg-card/80 border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
