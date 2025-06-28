import React from 'react';

const plans = [
  {
    label: 'Plano Start',
    bgColor: '#003080',
    shadow: 'shadow-[0_4px_20px_#00308055]',
    price: 'R$ 24.990,00',
    model: 'Modelo Home Based',
    modelColor: '#0075FF',
    desc: 'Baixo investimento e operação a partir de casa.',
    operacao: 'Home office, sem necessidade de um lugar físico.',
    servicos: 'Limpeza de vidros residenciais e comerciais de pequeno porte.',
    payback: 'Retorno em até 3 meses.',
    investimento: 'R$ 24.990,00',
    faturamento: 'R$ 20.000 a R$ 25.000',
    royalties: 'R$ 2.800,00',
    taxa: 'R$ 350,00',
  },
  {
    label: 'Plano Loja',
    bgColor: '#0057A3',
    shadow: 'shadow-[0_4px_20px_#0057A355]',
    price: 'R$ 45.000,00',
    model: 'Modelo Loja Física',
    modelColor: '#1A1A3D',
    desc: 'Para quem busca um negócio robusto com potencial de alto faturamento.',
    operacao: 'Loja física em área de alto fluxo/Ponto comercial.',
    servicos: 'Todos os serviços da Star Glass, incluindo vendas de produtos de limpeza especializados.',
    payback: 'Retorno em até 4 meses.',
    investimento: 'R$ 45.000,00',
    faturamento: 'R$ 25.000 a R$ 30.000',
    royalties: 'R$ 2.300,00',
    taxa: 'R$ 350,00',
  },
  {
    label: 'Plano Office',
    bgColor: '#00A3FF',
    shadow: 'shadow-[0_4px_20px_#00A3FF55]',
    price: 'R$ 80.000,00',
    model: 'Modelo Office (Container)',
    modelColor: '#003080',
    desc: 'Estabeleça uma presença física sem os custos de uma loja completa.',
    operacao: 'Escritório comercial em local estratégico (Container).',
    servicos: 'Limpeza de vidros em edifícios comerciais, vitrines e fachadas.',
    payback: 'Retorno em até 6 meses.',
    investimento: 'R$ 80.000,00',
    faturamento: 'R$ 30.000 a R$ 45.000',
    royalties: 'R$ 1.800,00',
    taxa: 'R$ 350,00',
  },
];

const FranchisePlansSection = () => {
  return (
    <section id="investimento" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A3D]">
          Quanto Preciso para ter minha Franquia Completa?
        </h2>
        <p className="text-[#8CD211] font-semibold mt-2">
          Contamos com modelos sólidos com retorno rápido e baixo investimento
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden border border-gray-200 flex flex-col justify-between ${plan.shadow} transition-transform transform hover:scale-105`}
            >
              <div
                className="text-white text-center py-3 font-bold text-sm"
                style={{ backgroundColor: plan.bgColor }}
              >
                {plan.label}
              </div>
              <div className="p-6 text-left flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-center text-[#1A1A3D]">{plan.price}</h3>
                  <p className="font-bold text-sm mt-1 text-center" style={{ color: plan.bgColor }}>
                    {plan.model}
                  </p>
                  <p className="text-sm text-gray-700 mt-2 mb-4">{plan.desc}</p>

                  <p className="text-sm text-[#1A1A3D] font-semibold">Operação:</p>
                  <p className="text-sm text-gray-600 mb-2">{plan.operacao}</p>

                  <p className="text-sm text-[#1A1A3D] font-semibold">Serviços oferecidos:</p>
                  <p className="text-sm text-gray-600 mb-2">{plan.servicos}</p>

                  <p className="text-sm text-[#1A1A3D] font-semibold">Faturamento médio:</p>
                  <p className="text-sm text-gray-600 mb-2">{plan.faturamento}</p>

                  <p className="text-sm text-[#1A1A3D] font-semibold">Royalties:</p>
                  <p className="text-sm text-gray-600 mb-2">{plan.royalties}</p>

                  <p className="text-sm text-[#1A1A3D] font-semibold">Taxa mensal:</p>
                  <p className="text-sm text-gray-600 mb-2">{plan.taxa}</p>

                  <p className="text-sm text-[#1A1A3D] font-semibold">Payback:</p>
                  <p className="text-sm text-gray-600 mb-2">{plan.payback}</p>

                  <p className="text-sm text-[#1A1A3D] font-semibold">Investimento:</p>
                  <p className="text-sm text-gray-600">{plan.investimento}</p>
                </div>

                <a
                  href="#consultor"
                  className="mt-auto text-center bg-[#0057A3] hover:bg-[#004080] text-white font-semibold py-2 rounded-md transition text-sm"
                >
                  FALAR COM CONSULTOR ESPECIALIZADO
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FranchisePlansSection;
