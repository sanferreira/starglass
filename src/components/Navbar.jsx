import React, { useState } from 'react';
import Logo from '../assets/logo-sg.png'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#003080] fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo + Nome */}
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo StarGlass" className="w-40" />
          </div>

          {/* Botão hamburguer (mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-10 text-white font-semibold text-sm">
            <a href="#conheca" className="hover:text-[#66CCFF] transition">Conheça</a>
            <a href="#servicos" className="hover:text-[#66CCFF] transition">Serviços</a>
            <a href="#porque" className="hover:text-[#66CCFF] transition">Por que a StarGlass?</a>
            <a href="#investimento" className="hover:text-[#66CCFF] transition">Investimento</a>
          </nav>

          {/* Botão Desktop */}
          <div className="hidden md:flex">
            <a
              href="#franquia"
              className="border border-white text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-white hover:text-[#003080] transition"
            >
              SEJA UM FRANQUEADO
            </a>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-[#003080] px-6 pb-6 shadow-md">
          <nav className="flex flex-col space-y-4 mt-4 text-white font-semibold">
            <a href="#conheca" onClick={() => setMenuOpen(false)} className="hover:text-[#66CCFF]">Conheça</a>
            <a href="#servicos" onClick={() => setMenuOpen(false)} className="hover:text-[#66CCFF]">Serviços</a>
            <a href="#porque" onClick={() => setMenuOpen(false)} className="hover:text-[#66CCFF]">Por que a StarGlass?</a>
            <a href="#investimento" onClick={() => setMenuOpen(false)} className="hover:text-[#66CCFF]">Investimento</a>
            <a
              href="#franquia"
              onClick={() => setMenuOpen(false)}
              className="mt-4 border border-white text-white px-4 py-2 rounded-md text-sm font-bold text-center hover:bg-white hover:text-[#003080] transition"
            >
              SEJA UM FRANQUEADO
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;