import React from 'react';

const Contato = () => {
    return (
        <section
            id="contato"
            className="bg-gradient-to-r from-[#5B4EE6] to-[#342F99] text-white py-20 px-6 md:px-0 text-center"
        >
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                    Entre em contato com a Dona Help Rio Barra
                </h2>
                <p className="text-base md:text-lg text-white/80 mb-10">
                    Não perca a oportunidade de simplificar <br className="hidden md:block" />
                    sua rotina com uma equipe de excelência
                </p>

                {/* Inputs lado a lado */}
                <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
                    <input
                        type="text"
                        placeholder="Nome Completo"
                        className="bg-transparent border border-white/70 rounded-md px-4 py-3 text-white placeholder-white/80 text-sm focus:outline-none w-full md:w-[200px]"
                    />
                    <input
                        type="text"
                        placeholder="Bairro"
                        className="bg-transparent border border-white/70 rounded-md px-4 py-3 text-white placeholder-white/80 text-sm focus:outline-none w-full md:w-[200px]"
                    />
                </div>

                {/* Botão */}
                <a
                    href="#cotacao"
                className="inline-block bg-white text-[#4A3DF4] px-6 py-3 rounded-full text-base font-semibold hover:bg-[#e1e1e1] transform hover:scale-[1.05] transition duration-300 ease-in-out"
                >
                    Solicitar Cotação
                </a>
            </div>
        </section>
    );
};

export default Contato;
