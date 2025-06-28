import React from 'react';
import { User, Star, Briefcase, TrendingUp } from 'lucide-react';
import TeamImage from '../assets/rafael-original.jpg';

const FounderStorySection = () => {
  return (
    <section id="sobre" className="bg-gradient-to-b from-[#0057A3] to-[#002F6C] text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Card com imagem e bio do fundador */}
        <div className="flex justify-center">
          <div className="relative bg-white text-[#1A1A3D] rounded-2xl shadow-2xl p-6  flex flex-col items-center">
            <img
              src={TeamImage}
              alt="Fundador StarGlass"
              className=" object-cover rounded-2xl border-4 border-[#0057A3] shadow-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
              <User size={20} /> Rafael Silva
            </h3>
            <p className="text-md text-center text-[#555]">
              Fundador da Glass | 10+ anos transformando coragem em referência nacional.
            </p>

            <div className="flex gap-6 mt-6">
              <div className="flex flex-col items-center text-center">
                <Star size={22} className="text-[#FFD700]" />
                <span className="text-xs mt-1">Excelência</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Briefcase size={22} className="text-[#0075FF]" />
                <span className="text-xs mt-1">Visão</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <TrendingUp size={22} className="text-[#8CD211]" />
                <span className="text-xs mt-1">Crescimento</span>
              </div>
            </div>
          </div>
        </div>

        {/* Texto da história */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-4">
            De um recomeço corajoso à liderança no setor
          </h2>
          <p className="text-[#8CD211] text-base font-semibold mb-6">
            Uma história real que inspira novos empreendedores a acreditarem no próprio potencial
          </p>

          <div className="space-y-6 text-[16px] leading-relaxed text-white/90">
            <p>
              Em um momento de desemprego e incertezas, <strong>Rafael Silva</strong> descobriu na limpeza de vidros uma oportunidade para recomeçar.
              <strong> Sem experiência, recursos ou apoio externo</strong>, ele iniciou com coragem e <strong>fé</strong> sua trajetória empreendedora.
            </p>
            <p>
              Em <strong>2013</strong>, nascia a <strong>Glass</strong>. Sozinho, Rafael começou a conquistar clientes e formar as bases de um modelo sólido. Em 2015, com seu primeiro colaborador e veículo, deu início à expansão.
            </p>
            <p>
              Em <strong>2024</strong>, a empresa celebrou <strong>10 anos de atuação</strong>, consolidando-se como <strong>referência nacional</strong> em serviços de limpeza de vidros, fachadas e pós-obra. O lançamento do modelo de <strong>franquias</strong> levou a StarGlass a inspirar outros a trilharem o mesmo caminho.
            </p>
            <p>
              Hoje, a <strong>StarGlass</strong> representa <strong>resiliência, excelência e oportunidade</strong>. Um exemplo de que grandes resultados nascem de decisões corajosas.
            </p>

            <p className="text-lg font-semibold mt-8">
              <span className="text-[#8CD211]">Junte-se</span> a quem construiu sua própria história de sucesso e quer ajudar você a construir a sua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStorySection;
