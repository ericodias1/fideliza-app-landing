import { ArrowRight } from "lucide-react";
import heroPhoneMockup from "@/assets/hero-phone-mockup.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Fidelify", "_blank");
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-fidelify-dark/20 to-fidelify-primary/20"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-fidelify-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-fidelify-light/10 rounded-full blur-2xl"></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <div className="text-white space-y-8 fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              O <span className="font-poppins-black font-black gradient-accent-text">Fidelify</span> transforma seus
              clientes em compradores recorrentes.
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
              Supermercados, farmácias e lojas podem criar seu próprio aplicativo 
              white-label para engajar clientes, enviar promoções e aumentar vendas.
            </p>
            
            <div className="pt-6">
                <button 
                onClick={handleWhatsAppClick}
                className="btn-hero group inline-flex items-center gap-3"
              >
                Fale conosco no WhatsApp
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-fidelify-primary">+40%</div>
                <div className="text-white/80">Recorrência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fidelify-primary">+25%</div>
                <div className="text-white/80">Ticket Médio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fidelify-primary">+60%</div>
                <div className="text-white/80">Engajamento</div>
              </div>
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div className="flex justify-center lg:justify-end fade-in-up">
            <div className="phone-mockup transform hover:scale-105 transition-transform duration-500">
              <div className="phone-frame">
                <img 
                  src={heroPhoneMockup} 
                  alt="Fidelify - App de fidelidade - Tela principal" 
                  className="phone-screen object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;