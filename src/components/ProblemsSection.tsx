import { TrendingDown, DollarSign, MessageCircleX, BarChart3 } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Clientes compram hoje, mas não voltam amanhã",
      description: "Sem um sistema de fidelização, os clientes não têm incentivo para retornar à sua loja."
    },
    {
      icon: DollarSign,
      title: "Promoções em panfletos e rádio custam caro e não trazem retorno",
      description: "Marketing tradicional tem custo alto e é difícil medir os resultados efetivos."
    },
    {
      icon: MessageCircleX,
      title: "Falta de comunicação direta com os clientes",
      description: "Você não consegue se comunicar diretamente com quem já compra na sua loja."
    },
    {
      icon: BarChart3,
      title: "Nenhum dado sobre o comportamento de compra",
      description: "Sem dados, é impossível entender quem são seus melhores clientes e o que eles preferem."
    }
  ];

  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-6">
            Você reconhece esses{" "}
            <span className="gradient-text">problemas</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A maioria dos negócios locais enfrenta os mesmos desafios quando se trata de fidelizar clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="card-problem fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <problem.icon className="w-8 h-8 text-dark-gray" />
                </div>
                <h3 className="text-lg font-semibold text-dark-gray mb-3 leading-tight">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;