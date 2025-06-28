import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import HeroImg from '../assets/starglass-clean.png';

const HeroSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
        );
    }, []);

    return (
        <section id="hero" className="relative bg-gradient-to-r from-[#003080] to-[#0057A3] text-white overflow-hidden">
            {/* Imagem de fundo com sobreposição */}
            <div className="absolute inset-0 z-0">
                <img src={HeroImg} alt="StarGlass" className="w-full h-full object-cover object-top md:object-[center_30%]" />
                <div className="absolute inset-0 bg-[#003080]/60" />
            </div>

            <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 pb-16 pt-30 items-center px-4 md:px-0">
                {/* Texto */}
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold leading-snug">
                        Faturamento <span className="text-[#66CCFF]">Médio Mensal</span> <br />
                        de até <span className="text-[#66CCFF]">R$45.000,00</span>
                    </h1>
                    <p className="mt-6 text-lg">
                        Tenha sua própria <span className="font-semibold">franquia pioneira</span> em serviços<br className="hidden sm:block" />
                        especializado em limpeza de fachada, vitrines,<br className="hidden sm:block" /> e superfícies envidraçadas de alto padrão
                    </p>
                </div>

                {/* Formulário */}
                <div className="bg-white/10 p-6 rounded-xl border border-white/50 backdrop-blur-sm relative z-10">
                    <form className="space-y-4">
                        <input type="text" placeholder="Nome" className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 text-white placeholder-white focus:outline-none" />
                        <input type="email" placeholder="E-mail" className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 text-white placeholder-white focus:outline-none" />
                        <input type="text" placeholder="Whatsapp" className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 text-white placeholder-white focus:outline-none" />
                        <input type="text" placeholder="Valor do investimento" className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 text-white placeholder-white focus:outline-none" />
                        <input type="text" placeholder="Cidade" className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 text-white placeholder-white focus:outline-none" />
                        <input type="text" placeholder="Estado" className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 text-white placeholder-white focus:outline-none" />
                        <button
                            type="submit"
                            className="w-full bg-[#003F88] hover:bg-[#0057A3] text-white font-bold py-2 px-4 rounded-md transition"
                        >
                            QUERO RECEBER MAIS INFORMAÇÕES
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
