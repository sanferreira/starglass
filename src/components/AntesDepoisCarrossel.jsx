import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1Antes from '../assets/1-antes.jpg';
import Image1Depois from '../assets/1-depois.jpg';
import Image2Antes from '../assets/2-antes.jpg';
import Image2Depois from '../assets/2-depois.jpg';
import Image3Antes from '../assets/3-antes.jpg';
import Image3Depois from '../assets/3-depois.jpg';
import Image4Antes from '../assets/4-antes.jpg';
import Image4Depois from '../assets/4-depois.jpg';
import Image5Antes from '../assets/5-antes.jpg';
import Image5Depois from '../assets/5-depois.jpg';
import Image6Antes from '../assets/6-antes.jpg';
import Image6Depois from '../assets/6-depois.jpg';
import ImagemDecorativa from './ImagemDecorativa';

const Comparador = ({ antes, depois }) => {
    const containerRef = useRef(null);
    const [divider, setDivider] = useState(50);

    const handleMove = (e) => {
        const bounds = containerRef.current.getBoundingClientRect();
        const x = e.clientX || e.touches?.[0]?.clientX;
        const offset = ((x - bounds.left) / bounds.width) * 100;
        if (offset >= 0 && offset <= 100) setDivider(offset);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[500px] overflow-hidden rounded-xl select-none touch-none"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
        >
            {/* Imagem antes (com clip) */}

            <img
                src={antes}
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt="Antes"
                draggable={false}
            />
            {/* Imagem depois (fundo completo) */}
            <img
                src={depois}
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt="Depois"
                  style={{
                    clipPath: `inset(0 0 0 ${divider}%)`,
                }}
                draggable={false}
            />

            {/* Linha e círculo central */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-[#4A3DF4] shadow-lg"
                style={{
                    left: `${divider}%`,
                    transform: 'translateX(-50%)',
                }}
            >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#4A3DF4] text-white flex items-center justify-center text-sm font-bold shadow-md border">
                        ↔️
                    </div>
                </div>
            </div>
        </div>
    );
};

const AntesDepoisCarrossel = () => {
    const imagens = [
        { antes: Image1Antes, depois: Image1Depois },
        { antes: Image2Antes, depois: Image2Depois },
        { antes: Image3Antes, depois: Image3Depois },
        { antes: Image4Antes, depois: Image4Depois },
        { antes: Image5Antes, depois: Image5Depois },
        { antes: Image6Antes, depois: Image6Depois },
    ];

    const sliderRef = useRef(null);

    const bloquearSwipe = (status) => {
        if (sliderRef.current) {
            sliderRef.current.slickSetOption('swipe', status, true);
        }
    };
    const CustomPrevArrow = ({ className, onClick }) => (
        <div
            className={`${className} z-10 left-0`}
            onClick={onClick}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: '#4A3DF4',
                borderRadius: '9999px',
                color: '#fff',
            }}
        >
            ‹
        </div>
    );

    const CustomNextArrow = ({ className, onClick }) => (
        <div
            className={`${className} z-10 right-0`}
            onClick={onClick}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: '#4A3DF4',
                borderRadius: '9999px',
                color: '#fff',
            }}
        >
            ›
        </div>
    );
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipe: true,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <section className="bg-white  px-6 md:px-0">
            <div className="max-w-6xl mx-auto">
                <ImagemDecorativa />
                <div className=" mb-10 text-[#1A1A3D]">
                    <h2 className="text-4xl font-extrabold mb-2">Eficiência Comprovada</h2>
                    <p className="text-lg opacity-90">Antes e Depois</p>
                </div>

                <Slider ref={sliderRef} {...settings} className="max-w-7xl mx-auto">
                    {imagens.map((img, idx) => (
                        <div key={idx} className="px-2">
                            <Comparador
                                antes={img.antes}
                                depois={img.depois}
                                bloquearSwipe={bloquearSwipe}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default AntesDepoisCarrossel;
