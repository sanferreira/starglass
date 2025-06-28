import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Quais são as opções de modelo de negócio disponíveis?',
    answer: 'Oferecemos os modelos Home Based, Loja Física e Office, cada um com características e investimentos diferentes para atender às suas necessidades.'
  },
  {
    question: 'Em quanto tempo posso recuperar meu investimento?',
    answer: 'O retorno pode variar entre 3 a 6 meses, dependendo do modelo de franquia escolhido e da performance local.'
  },
  {
    question: 'Qual é o suporte oferecido pela franqueadora?',
    answer: 'A StarGlass oferece suporte completo em treinamento, marketing, operação e expansão da franquia.'
  },
  {
    question: 'Preciso ter experiência prévia com limpeza ou gestão?',
    answer: 'Não. Nós oferecemos capacitação completa para que você possa operar com segurança e qualidade desde o início.'
  },
  {
    question: 'O que está incluso na taxa de franquia?',
    answer: 'Estão inclusos treinamentos, materiais operacionais, manuais, consultoria e direito de uso da marca.'
  },
  {
    question: 'Quais equipamentos e materiais recebo ao iniciar a operação?',
    answer: 'Você recebe os equipamentos e produtos necessários para começar a prestar os serviços de limpeza especializados da marca.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="duvidas" className="bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A3D] mb-8">Principais Dúvidas</h2>
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-md border ${isOpen ? 'bg-[#003080] text-white' : 'bg-white text-[#1A1A3D]'} overflow-hidden shadow-sm`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center px-4 py-3 font-medium"
                >
                  {faq.question}
                  <ChevronDown
                    className={`ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${isOpen ? 'text-white' : 'text-[#003080]'}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;