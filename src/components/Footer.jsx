import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import Logo from '../assets/logo-sg.png';
import LogoSF from '../assets/Logo SF.svg';

const FooterSection = () => {
  return (
    <footer className="bg-[#003080] text-white pt-12 pb-2 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <img src={Logo} alt="Logo StarGlass" className="mx-auto h-8 mb-6" />

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm mb-6">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+55 (14) 4439-1111</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>starglass@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Rua Glass, mendes costa, 24, ap33</span>
          </div>
        </div>

        <div className="flex justify-center gap-6 flex-wrap text-sm mb-4">
          <a href="#conheca" className="hover:underline">Conheça</a>
          <a href="#servicos" className="hover:underline">Serviços</a>
          <a href="#porque" className="hover:underline">Porque a Glass?</a>
          <a href="#investimento" className="hover:underline">Investimento</a>
        </div>

        <hr className="border-white/40 my-4" />

        <p className="text-xs text-white/80">
          ©2016-2025 <span className="font-bold text-white">Star Glass</span> - Todos os direitos reservados |{' '}
          <a href="#" className="underline">Política de Privacidade</a>

        </p>
        <p className="text-xs text-white/80">  <span>Desenvolvido por: </span>

          <a
            href="https://instagram.com/devserosan"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1"
          >
            <span className="font-bold text-white">@devserosan</span>
          </a>
        </p>
        <div className="w-full flex justify-center md:justify-end md:mt-0">
          <div className="flex flex-col items-center md:items-end text-center md:text-right text-xs text-white/80">

            <a
              href="https://instagram.com/devserosan"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1"
            >
              <img src={LogoSF} alt="@sanferreira" width={35} className="mx-auto md:mx-0" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
