import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Mensal",
    price: "R$ 35,00",
    period: "/mês",
    totalPrice: "R$ 35,00/mês",
    popular: false,
    features: [
      "Acesso completo à lista",
      "Qualidade Full HD e 4K",
      "Filmes e séries atualizados",
      "Suporte via WhatsApp",
    ],
  },
  {
    name: "Semestral",
    price: "R$ 30,00",
    period: "/mês",
    totalPrice: "R$ 180,00 a cada 6 meses",
    popular: true,
    savings: "Economize R$ 30",
    features: [
      "Acesso completo à lista",
      "Qualidade Full HD e 4K",
      "Filmes e séries atualizados",
      "Suporte via WhatsApp",
      "Economize 14% ao ano",
    ],
  },
  {
    name: "Anual",
    price: "R$ 25,00",
    period: "/mês",
    totalPrice: "R$ 300,00 por ano",
    popular: false,
    savings: "Economize R$ 120",
    features: [
      "Acesso completo à lista",
      "Qualidade Full HD e 4K",
      "Filmes e séries atualizados",
      "Suporte via WhatsApp",
      "Melhor custo-benefício",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Escolha Seu Plano
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Assine agora e aproveite milhares de conteúdos com qualidade premium
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative animate-slide-up bg-card/50 backdrop-blur border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/20 md:-mt-4 md:mb-4"
                  : "border-border hover:border-primary/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                  Mais Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mt-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2 text-base">
                    {plan.totalPrice}
                  </CardDescription>
                  {plan.savings && (
                    <div className="mt-2 text-primary font-semibold text-sm">
                      {plan.savings}
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter>
                <Button
                  variant={plan.popular ? "cta" : "outline"}
                  size="lg"
                  className="w-full"
                  onClick={() => window.open("https://wa.me/5573988088147", "_blank")}
                >
                  Assinar Agora
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 text-sm">
          Todos os planos incluem teste grátis para você avaliar a qualidade
        </p>
      </div>
    </section>
  );
};

export default Pricing;
