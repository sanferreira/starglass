import React from 'react';
import Image01 from '../assets/01.png';
import Image02 from '../assets/02.png';
import Image03 from '../assets/03.png';
import Image04 from '../assets/starglass-clean2.png';
import Image05 from '../assets/05.png';

const services = [
  {
    title: 'Limpeza de Vidros',
    image: Image01,
    desc: 'Utilizamos produtos de alta qualidade para garantir transparência e brilho. Ideal para comércios, empresas e residências que buscam fachadas impecáveis.',
  },
  {
    title: 'Limpeza de Vitrines',
    image: Image02,
    desc: 'Técnicas especializadas para eliminar manchas. Recomendado para lojas, shoppings, academias e clínicas com foco em atratividade.',
  },
  {
    title: 'Limpeza de Espelhos',
    image: Image04,
    desc: 'Produtos específicos para evitar riscos e manter o brilho. Ideal para residências, academias e clínicas que exigem perfeição.',
  },
  {
    title: 'Limpeza de Vidros Corporativos',
    image: Image03,
    desc: 'Limpeza profunda em fachadas corporativas. Perfeito para centros empresariais que buscam uma imagem sempre profissional.',
  },
  {
    title: 'Limpeza de Lustres',
    image: Image05,
    desc: 'Desmontagem parcial ou total, conforme a necessidade. Técnicas seguras e produtos ideais para lustres delicados.',
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A3D]">
          Alta Lucratividade com os Serviços
        </h2>
        <p className="text-[#8CD211] font-semibold mt-3 text-lg">
          Adaptável para cada necessidade
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-left hover:scale-[1.02] transition-transform">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-xl shadow-sm mb-5"
              />
              <h3 className="text-xl font-semibold text-[#1A1A3D]">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <a
            href="#franquia"
            className="inline-block bg-[#8CD211] text-black font-bold px-8 py-3 rounded-lg text-sm hover:bg-lime-500 transition duration-300"
          >
            QUERO INICIAR MINHA FRANQUIA
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
