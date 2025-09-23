import { Bell, Target, Gift, PieChart } from "lucide-react";
import pushNotificationMockup from "@/assets/push-notification-mockup.jpg";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Bell,
      title: "Notificações push segmentadas",
      subtitle: "fale direto com quem já compra",
      description: "Envie ofertas personalizadas diretamente para o celular dos seus clientes mais fiéis."
    },
    {
      icon: Target,
      title: "Ofertas personalizadas",
      subtitle: "aumente o ticket médio",
      description: "Crie promoções baseadas no histórico de compras de cada cliente."
    },
    {
      icon: Gift,
      title: "Cashback e recompensas",
      subtitle: "aumente a recorrência",
      description: "Sistema de pontos e cashback que incentiva os clientes a voltarem sempre."
    },
    {
      icon: PieChart,
      title: "Relatórios simples",
      subtitle: "conheça seus melhores clientes",
      description: "Dashboards intuitivos com dados valiosos sobre o comportamento dos seus clientes."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-6">
            A <span className="gradient-text">solução</span> que você precisa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforme os problemas do seu negócio em oportunidades de crescimento com tecnologia inteligente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Solutions list */}
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="flex items-start gap-6 fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <solution.icon className="w-7 h-7 text-dark-gray" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-1">
                    {solution.title}
                  </h3>
                  <p className="text-bright-blue font-medium mb-2">
                    → {solution.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual mockups */}
          <div className="space-y-8 fade-in-up">
            <div className="relative">
              <img 
                src={pushNotificationMockup}
                alt="Notificação push personalizada"
                className="rounded-2xl shadow-large w-full"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-neon-lime/20 rounded-full blur-xl"></div>
            </div>
            <div className="relative">
              <img 
                src={dashboardPreview}
                alt="Dashboard com relatórios"
                className="rounded-2xl shadow-large w-full"
              />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-bright-blue/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;