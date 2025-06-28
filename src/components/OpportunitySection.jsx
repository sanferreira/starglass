import React from 'react';
import PersonImage from '../assets/sg-clean5.jpg';
import { TrendingUp, Building2, BrushCleaning } from 'lucide-react';

const opportunities = [
  {
    icon: <TrendingUp className="text-white" size={28} />,
    title: 'Expansão do setor de limpeza',
    desc: 'O segmento de produtos de limpeza industrial e institucional no Brasil vem apresentando um crescimento anual de 5%, impulsionado pela demanda cada vez maior por serviços de limpeza com alto padrão de qualidade.',
    link: 'https://abipla.org.br/anuario-abipla-2024-setor-de-produtos-de-limpeza-cresce-56/'
  },
  {
    icon: <BrushCleaning className="text-white" size={28} />,
    title: 'Um dos setores que mais crescem no brasil',
    desc: 'O mercado de produtos de limpeza no Brasil movimentou R$ 38,1 bilhões em 2024. Em 2025, o setor de limpeza no Brasil está projetado para crescer, com expectativas de faturamento de R$ 51,3 bilhões',
    link: 'https://jornaldobras.com.br/noticia/50692/terceirizacao-de-limpeza-impulsiona-economia-brasileira-em-2025'
  },
  {
    icon: <Building2 className="text-white" size={28} />,
    title: 'Investimento em franquias de limpeza',
    desc: 'Investir em franquias de limpeza no Brasil tem se mostrado uma escolha vantajosa, com uma taxa de sucesso de 80%, graças ao modelo de negócios eficiente e à alta demanda por soluções de higienização de qualidade.',
    link: 'https://www.estadao.com.br/economia/franquia-limpeza-empreendedorismo/?srsltid=AfmBOooGbzZQpw5wDiiSoS-BqHloClhObFwHbIVWPceSNy6D9bbPTVhN'
  },


];

const OpportunitySection = () => {
  return (
    <section id="oportunidades" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A3D]">
            Oportunidades no Mercado de Limpeza no Brasil
          </h2>
          <p className="text-[#8CD211] font-semibold mt-2">
            Mercado que vem crescendo anualmente
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Texto com oportunidades */}
          <div className="flex-1 space-y-6">
            {opportunities.map((item, index) => (
              <a key={index}
                className="bg-gradient-to-b from-[#66BFFF] to-[#003080] rounded-xl p-6 text-white flex items-start gap-4" href={item.link} target='_blank' style={{ cursor: "pointer" }}>
                <div>{item.icon}</div>

                <div>
                  <h3 className="text-base font-bold mb-1">{item.title}</h3>
                  <p className="text-sm leading-snug">{item.desc}</p>
                </div>

              </a>

            ))}
          </div>

          {/* Imagem */}
          <div className="flex-1 max-w-md mx-auto lg:mx-0">
            <div className="bg-white p-2 rounded-[2rem] shadow-2xl overflow-hidden">
              <img
                src={PersonImage}
                alt="Equipe StarGlass"
                className="w-full h-[450px] object-cover rounded-[1.5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;
