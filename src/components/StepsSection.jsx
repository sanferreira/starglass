import React from 'react';
import { DollarSign, Store, Building2 } from 'lucide-react';

const StepsSection = () => {
  const steps = [
    {
      icon: <DollarSign size={36} className="text-white" />,
      title: 'Cotação Inicial Gratuita',
      desc: 'Desenvolva uma franquia personalizada e aos mais altos padrões de excelência.',
    },
    {
      icon: <Store size={36} className="text-white" />,
      title: 'Escolha sua Franquia',
      desc: 'Estruturamos um modelo ideal de franquia com a característica necessária para seu negócio render.',
    },
    {
      icon: <Building2 size={36} className="text-white" />,
      title: 'Implantação StarGlass',
      desc: 'Elaboramos um plano estratégico para o sucesso da sua unidade.',
    },
  ];

  return (
    <section id="passos" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A3D]">
          Em 3 passos sua franquia em suas mãos
        </h2>
        <p className="text-[#8CD211] font-semibold mt-2">
          Rápido, prático e inovador
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-[#0075FF] w-20 h-20 rounded-full flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1A1A3D]">{step.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;