import { Settings, Smartphone, TrendingUp } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Settings,
      number: "01",
      title: "Personalize cores, logo e campanhas no painel administrativo",
      description: "Configure seu app com as cores da sua marca, adicione seu logo e crie campanhas personalizadas em minutos."
    },
    {
      icon: Smartphone,
      number: "02", 
      title: "Publicamos seu app na App Store e Google Play",
      description: "Nós cuidamos de todo o processo técnico de publicação nas lojas de aplicativos. Seu app estará disponível em poucos dias."
    },
    {
      icon: TrendingUp,
      number: "03",
      title: "Comece a fidelizar e vender mais",
      description: "Seus clientes baixam o app e você começa a ver os resultados: mais vendas, clientes mais fiéis e dados valiosos."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-light-gray to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-6">
            Como funciona para a{" "}
            <span className="gradient-text">sua empresa</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Em apenas 3 passos simples, você terá seu próprio aplicativo de fidelidade funcionando.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-bright-blue to-soft-purple hidden md:block"></div>
              )}
              
              <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
                {/* Step number and icon */}
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-medium">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-neon-lime rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-dark-gray">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark-gray mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-12 fade-in-up">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-8 shadow-medium">
            <div className="text-4xl">🚀</div>
            <div>
              <h3 className="text-xl font-semibold text-dark-gray mb-2">
                Pronto para começar?
              </h3>
              <p className="text-muted-foreground">
                Entre em contato e tenha seu app em menos de uma semana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;