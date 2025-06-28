import React from 'react';

const postConstructionServices = [
  {
    title: 'Resíduos em Vidros Pós-Obra',
    image: '/assets/pos-obra/vidros.jpg',
    desc: 'Eliminação segura de respingos de tinta, cola, silicone, cimento e poeira fina de superfícies envidraçadas sem danificar o material.'
  },
  {
    title: 'Limpeza Técnica Pós-Obra',
    image: '/assets/pos-obra/tecnica.jpg',
    desc: 'Higienização minuciosa de áreas internas recém-construídas ou reformadas, deixando os espaços prontos para o uso imediato.'
  },
  {
    title: 'Lavagem de Fachadas e Janelas',
    image: '/assets/pos-obra/fachadas.jpg',
    desc: 'Utilização de técnicas de acesso por corda ou andaime para limpar fachadas e esquadrias, removendo completamente sujidades típicas de obras.'
  }
];

const PostConstructionSection = () => {
  return (
    <section id="pos-obra" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A3D]">
          Contamos com soluções em pós-obra
        </h2>
        <p className="text-[#8CD211] font-semibold mt-2">
          Especialidades com profissionais de ponta
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {postConstructionServices.map((service, index) => (
            <div key={index} className="text-left">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-44 object-cover rounded-md mb-4"
              />
              <h3 className="text-md font-bold text-[#1A1A3D]">{service.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>

        <a
          href="#franquia"
          className="inline-block mt-10 bg-[#8CD211] text-black font-bold px-6 py-2 rounded-md text-sm hover:bg-lime-500 transition"
        >
          QUERO INICIAR MINHA FRANQUIA
        </a>
      </div>
    </section>
  );
};

export default PostConstructionSection;