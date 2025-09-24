import { Bell, Target, Gift, PieChart } from "lucide-react";
import { useState, useEffect } from "react";
import notificationMockup from "@/assets/notification-mockup.png";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const SolutionsSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      src: notificationMockup,
      alt: "Notificação push de promoção Coca Cola no app de fidelidade"
    },
    {
      src: dashboardPreview,
      alt: "Ofertas exclusivas no aplicativo de fidelidade"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);
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
                  <p className="text-fidelify-dark font-medium mb-2">
                    → {solution.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual mockups - Auto-changing slider */}
          <div className="fade-in-up">
            <div className="relative overflow-hidden rounded-2xl shadow-large">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <img 
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className="w-full flex-shrink-0 object-cover"
                  />
                ))}
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-fidelify-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-fidelify-light/20 rounded-full blur-xl"></div>
              
              {/* Slider indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === index 
                        ? 'bg-fidelify-primary' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;