import { Download, ShoppingCart, QrCode, Coins } from "lucide-react";
import { useState } from "react";
import qrScannerMockup from "@/assets/qr-scanner-mockup.jpg";
import heroPhoneMockup from "@/assets/hero-phone-mockup.jpg";

const CustomerJourneySection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Download,
      title: "Baixa o app da sua marca",
      description: "Cliente encontra seu app personalizado na App Store ou Google Play e faz o download.",
      image: heroPhoneMockup,
      color: "from-lime-dark to-neon-lime"
    },
    {
      icon: ShoppingCart,
      title: "Faz compras normalmente",
      description: "Cliente continua comprando como sempre, sem mudanças no processo de compra.",
      image: heroPhoneMockup,
      color: "from-neon-lime to-lime-bright"
    },
    {
      icon: QrCode,
      title: "Escaneia o QR Code da nota",
      description: "Após a compra, cliente escaneia o QR Code da nota fiscal para registrar a compra.",
      image: qrScannerMockup,
      color: "from-lime-deep to-lime-dark"
    },
    {
      icon: Coins,
      title: "Recebe cashback para usar na próxima compra",
      description: "Cliente acumula cashback automaticamente e pode usar em compras futuras.",
      image: heroPhoneMockup,
      color: "from-lime-bright to-neon-lime"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-6">
            A jornada do{" "}
            <span className="gradient-text">cliente final</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simples, intuitivo e eficaz. Veja como é fácil para seus clientes usarem o app.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps navigation */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 fade-in-up ${
                  activeStep === index 
                    ? 'bg-gradient-to-r ' + step.color + ' text-white shadow-large' 
                    : 'bg-light-gray hover:bg-gradient-to-r hover:' + step.color + ' hover:text-white'
                }`}
                onClick={() => setActiveStep(index)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeStep === index ? 'bg-white/20' : 'bg-lime-dark/10'
                    }`}>
                      <step.icon className={`w-6 h-6 ${
                        activeStep === index ? 'text-white' : 'text-lime-dark'
                      }`} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${
                      activeStep === index ? 'text-white' : 'text-dark-gray'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`leading-relaxed ${
                      activeStep === index ? 'text-white/90' : 'text-muted-foreground'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Phone mockup with active step */}
          <div className="flex justify-center fade-in-up">
            <div className="phone-mockup transform hover:scale-105 transition-all duration-500">
              <div className="phone-frame">
                <img 
                  src={steps[activeStep].image}
                  alt={`App - ${steps[activeStep].title}`}
                  className="phone-screen object-cover transition-opacity duration-300"
                />
              </div>
              {/* Decorative elements */}
              <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${steps[activeStep].color} opacity-20 rounded-full blur-xl`}></div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 fade-in-up">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">98%</div>
            <div className="text-muted-foreground">Taxa de Aprovação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">4.8★</div>
            <div className="text-muted-foreground">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">2 seg</div>
            <div className="text-muted-foreground">Tempo de Scan</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-muted-foreground">Disponibilidade</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerJourneySection;