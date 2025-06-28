import React from 'react';
import {
  ClipboardList,
  UserCircle,
  Video,
  MessageSquareMore,
  FileSignature,
  Users,
  Building2
} from 'lucide-react';

const steps = [
  { icon: ClipboardList, label: 'Formulário de pré-qualificação' },
  { icon: UserCircle, label: 'Circular de oferta de Franquia' },
  { icon: Video, label: 'Apresentação de modelo de negócio' },
  { icon: MessageSquareMore, label: 'Conversa com especialista de Expansão' },
  { icon: FileSignature, label: 'Assinatura do Contrato de Franquia' },
  { icon: Users, label: 'Alinhamento para novos franqueados' },
  { icon: Building2, label: 'Abertura de sua Unidade' },
];

const FranchiseStepsSection = () => {
  return (
    <section id="etapas" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A3D]">
          O que precisa para se tornar uma franqueado?
        </h2>
        <p className="text-[#8CD211] font-semibold mt-2">
          Fácil e rápido de alcançar o sucesso!
        </p>

        {/* Mobile - Empilhado em 2 colunas, último centralizado */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 mt-12 md:hidden">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLastOddItem = steps.length % 2 !== 0 && index === steps.length - 1;

            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center px-2 ${isLastOddItem ? 'col-span-2 justify-center' : ''}`}
              >
                <div className="bg-[#0075FF] w-14 h-14 rounded-full flex items-center justify-center shadow-md mb-2">
                  <Icon size={24} className="text-white" />
                </div>
                <p className="text-xs text-[#1A1A3D] font-semibold">{step.label}</p>
              </div>
            );
          })}
        </div>

        {/* Desktop - Zigue-zague */}
        <div className="mt-16 overflow-x-auto hidden md:block">
          <div className="relative flex flex-wrap justify-center gap-x-10 gap-y-24 md:gap-y-16 min-w-[1000px] md:min-w-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center relative z-10 md:mt-0 ${isEven ? 'mt-0' : 'mt-8 md:mt-56'}`}
                >
                  {isEven && (
                    <p className="text-sm text-[#1A1A3D] font-semibold mb-2 w-32">{step.label}</p>
                  )}

                  <div className="relative z-10">
                    <div className="absolute inset-0 scale-100 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 ease-in-out rounded-full bg-[#0075FF] shadow-lg" />
                    <div className="relative bg-[#0075FF] w-16 h-16 rounded-full flex items-center justify-center shadow-md transition-transform">
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>

                  {!isEven && (
                    <p className="text-sm text-[#1A1A3D] font-semibold mt-2 w-32">{step.label}</p>
                  )}

                  {index < steps.length - 1 && (
                    <div
                      className="hidden md:block absolute top-1/2 right-[-175px] w-[235px] h-[2px] rotate-[-35deg] origin-left border-t-2 border-dotted border-[#0075FF] z-0"
                      style={{ transform: isEven ? 'rotate(85deg)' : 'rotate(-15deg)', top: isEven ? '20%' : '30%' }}
                    ></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <a
          href="#franquia"
          className="mt-16 inline-block bg-[#8CD211] text-black font-bold px-6 py-2 rounded-md text-sm hover:bg-lime-500 transition"
        >
          QUERO INICIAR MINHA FRANQUIA
        </a>
      </div>
    </section>
  );
};

export default FranchiseStepsSection;
