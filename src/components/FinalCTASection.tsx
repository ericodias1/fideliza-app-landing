import { ArrowRight, CheckCircle } from "lucide-react";

const FinalCTASection = () => {
  const benefits = [
    "App personalizado com sua marca",
    "Publicação nas lojas de aplicativos", 
    "Dashboard completo com relatórios",
    "Suporte técnico dedicado",
    "Implementação em até 7 dias",
    "Sem taxas de setup"
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Fidelify%20e%20agendar%20uma%20demonstração", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-fidelify-dark/20 to-fidelify-primary/20"></div>
      <div className="absolute top-10 right-10 w-80 h-80 bg-fidelify-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-fidelify-light/10 rounded-full blur-2xl"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in-up">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Pronto para dar o{" "}
              <span className="gradient-accent-text">próximo passo</span>?
            </h2>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed">
              Leve seu negócio para o próximo nível com um app exclusivo e clientes mais fiéis.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 fade-in-up">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 text-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-6 h-6 text-fidelify-primary flex-shrink-0" />
                <span className="text-white/90 text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="fade-in-up">
            <button 
              onClick={handleWhatsAppClick}
              className="btn-hero group text-xl px-12 py-6 mb-8"
            >
              Fale conosco no WhatsApp
              <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-white/70 text-lg">
              💬 Resposta em até 30 minutos • 🚀 Demonstração gratuita
            </p>
          </div>

          {/* Urgency/Scarcity */}
          <div className="mt-16 p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 fade-in-up">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Oferta Especial de Lançamento
                </h3>
                <p className="text-white/90">
                  Primeiros 50 clientes ganham 3 meses de suporte premium grátis
                </p>
              </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-fidelify-primary">37</div>
                    <div className="text-white/70 text-sm">Vagas restantes</div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-fidelify-primary">⏰</div>
                    <div className="text-white/70 text-sm">Limitado</div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;