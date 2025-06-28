import React from 'react';
import { TrendingUp, Target, Presentation, Globe, Building2, Users, DollarSign, Coins } from 'lucide-react';

const items = [
  { icon: <TrendingUp size={28} className="text-white" />, title: 'Negócio escalável' },
  { icon: <Target size={28} className="text-white" />, title: 'Marketing completo' },
  { icon: <Presentation size={28} className="text-white" />, title: 'Completo know-how' },
  { icon: <Globe size={28} className="text-white" />, title: 'Geomarketing' },
  { icon: <Building2 size={28} className="text-white" />, title: 'Pioneira no nicho' },
  { icon: <Users size={28} className="text-white" />, title: 'Suporte completo' },
  { icon: <DollarSign size={28} className="text-white" />, title: 'Alta Lucratividade' },
  { icon: <Coins size={28} className="text-white" />, title: 'Baixo custo' },
];

const WhyChooseSection = () => {
  return (
    <section id="porque" className="bg-gradient-to-b from-[#053887] to-[#67c2fd] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Porque Escolher a STARGLASS?</h2>
        <p className="text-[#B3D6F5] font-medium mt-2">
          Vantagens que competem de frente com o mercado
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-[#0075FF] w-14 h-14 rounded-full flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <p className="text-sm font-medium leading-tight">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
