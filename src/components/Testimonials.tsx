import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    location: "São Paulo, SP",
    rating: 5,
    text: "Excelente serviço! A qualidade é impecável e o suporte é super rápido. Recomendo muito!"
  },
  {
    name: "Maria Santos",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Melhor IPTV que já usei. Filmes e séries sempre atualizados, nunca trava. Muito satisfeita!"
  },
  {
    name: "João Oliveira",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "O teste grátis me convenceu na hora. Qualidade 4K perfeita e preço justo. Vale muito a pena!"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            O que dizem nossos <span className="text-primary">clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Confira a experiência de quem já está aproveitando nossa IPTV
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border pt-4">
                <div className="font-bold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
