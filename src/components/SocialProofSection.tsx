import { Star, Quote } from "lucide-react";

const SocialProofSection = () => {
  const clients = [
    { name: "SuperMax", type: "Supermercado" },
    { name: "FarmaBem", type: "Farmácia" },
    { name: "MegaLoja", type: "Varejo" },
    { name: "FreshMarket", type: "Supermercado" },
    { name: "HealthPlus", type: "Farmácia" },
    { name: "TechStore", type: "Eletrônicos" }
  ];

  const testimonials = [
    {
      text: "Em 3 meses, nossos clientes aumentaram a frequência de compras em 45%. O app de fidelidade foi um divisor de águas para nosso negócio.",
      author: "Carlos Silva",
      position: "Proprietário do SuperMax",
      rating: 5
    },
    {
      text: "Antes gastávamos R$ 5.000 por mês em panfletos. Agora, com o app, gastamos metade disso e temos 3x mais retorno.",
      author: "Ana Oliveira", 
      position: "Gerente da FarmaBem",
      rating: 5
    },
    {
      text: "O melhor investimento que fizemos. Nossos clientes adoram o cashback e sempre voltam. Recomendo para qualquer loja.",
      author: "João Santos",
      position: "Dono da MegaLoja",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-light-gray to-white">
      <div className="container mx-auto px-6">
        {/* Client logos */}
        <div className="text-center mb-16 fade-in-up">
          <p className="text-lg text-muted-foreground mb-8">
            Já confiaram em nossa solução:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-accent rounded-xl mb-3 flex items-center justify-center">
                  <span className="text-2xl font-bold text-dark-gray">
                    {client.name.substring(0, 2)}
                  </span>
                </div>
                <h3 className="font-semibold text-dark-gray">{client.name}</h3>
                <p className="text-sm text-muted-foreground">{client.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-6">
              O que nossos{" "}
              <span className="gradient-text">clientes dizem</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="card-modern fade-in-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-fidelify-dark/20" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-fidelify-primary text-fidelify-primary" />
                  ))}
                </div>

                <p className="text-dark-gray leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray">{testimonial.author}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center fade-in-up">
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">150+</div>
            <div className="text-muted-foreground">Clientes Ativos</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">500K+</div>
            <div className="text-muted-foreground">Usuários Finais</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">24h</div>
            <div className="text-muted-foreground">Suporte</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;