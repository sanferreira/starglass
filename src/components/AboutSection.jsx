import React from 'react';
import TeamImage from '../assets/starglass-clean2.png'; // substitua pelo caminho da imagem correta

const AboutSection = () => {
  return (
    <section id="conheca" className="bg-gradient-to-b from-[#053887] to-[#67c2fd] text-white py-10 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Conheça nossa história pioneira dentro do mercado
          </h2>
          <p className="text-[#B3D6F5] font-semibold mb-6">
            Operando no mercado a mais de 10 anos
          </p>

          <p className="mb-4">
            Somos mais do que uma empresa, <strong>pioneiros e líderes</strong> em serviços de limpeza de vidros no Brasil há mais de 10 anos. <br />
            Atuamos com excelência, oferecendo serviços especializados e seguros para fachadas, vitrines e superfícies envidraçadas.
          </p>

          <a
            href="#consultor"
            className="inline-block mt-6 bg-white text-[#003080] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            FALE COM UM CONSULTOR
          </a>
        </div>

        {/* Imagem com efeito visual */}
        <div className="relative w-full flex justify-center">
          <div className="bg-white p-2 rounded-[2rem] shadow-2xl overflow-hidden max-w-md ">
            <img
              src={TeamImage}
              alt="Equipe StarGlass"
              className="w-full h-auto object-cover rounded-[1.5rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
