import React from 'react';
import BackgroundImg from '../assets/sg-clean4.png';

const CallToActionSection = () => {
  return (
    <section
      id="lucros"
      className="relative overflow-hidden py-40 px-4 text-white"

    >
      <div className="absolute inset-0 z-0">
        <img
          src={BackgroundImg}
          alt="StarGlass - Lucros"
          className="w-full h-full object-cover object-top md:object-[center_30%]"
        />
        <div className="absolute inset-0 bg-[#003080]/60" />
      </div>

      <div className="bg-black/20 absolute inset-0" />

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Alcance Novos Altos Lucros com a Franquia Star Glass!
        </h2>
        <p className="text-[#66CCFF] font-semibold mt-2">
          Revolucionamos o mercado de limpeza
        </p>
        <p className="mt-4 text-sm md:text-base">
          Aproveite a oportunidade de se tornar um franqueado e comece a lucrar com um
          <strong> modelo de negócio testado e aprovado</strong> no mercado de limpeza de vidros.
        </p>

        <a
          href="#consultor"
          className="inline-block mt-8 bg-[#0057A3] hover:bg-[#004080] text-white font-semibold px-6 py-3 rounded-md transition"
        >
          FALAR COM CONSULTAR ESPECIALIZADO
        </a>
      </div>
    </section>
  );
};

export default CallToActionSection;