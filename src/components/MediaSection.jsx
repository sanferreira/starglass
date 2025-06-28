import React, { useState } from 'react';
import { PlayCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

const videos = [
  { id: 1, url: 'https://www.youtube.com/watch?v=8U0xD856SJE', title: 'Acontece - Inauguração Glass Limpeza' },
  { id: 2, url: 'https://www.youtube.com/watch?v=8mfTW4fu2F0', title: 'LibaCast #15 Publi | A história da Star Glass' },
  { id: 3, url: 'https://www.youtube.com/watch?v=ifpU2N99DXo', title: 'Programa Tudo Up! 395 Glass Limpeza' },
  { id: 4, url: 'https://www.youtube.com/watch?v=V1KUhlDdElk', title: 'Curso de Especialização em Limpeza' },
  { id: 5, url: 'https://www.youtube.com/watch?v=pTaJVTrLwf4', title: 'Podcast Azul FM - ModoOn - 25/11/2024' },
  { id: 6, url: 'https://www.youtube.com/watch?v=fw-eiRpoy64', title: '#TBT de uma noite inesquecível! 🌟' },
];

const getYouTubeId = (url) => {
  const match = url.match(/v=([^&]+)/);
  return match ? match[1] : null;
};

const MediaSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const closeModal = () => setSelectedVideo(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [totalSlides, setTotalSlides] = useState(0);

  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 1.1, spacing: 12 },
      },
      '(max-width: 1024px)': {
        slides: { perView: 2, spacing: 12 },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created(s) {
      const perView = s.options.slides.perView;
      setSlidesPerView(perView);
      setTotalSlides(s.track.details.slides.length - perView + 1);
    },
  });

  return (
    <section id="midia" className="bg-gradient-to-b from-[#053887] to-[#67c2fd] text-white py-20 px-4 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          STARGLASS na mídia, como influenciamos?
        </h2>
        <p className="text-[#B3D6F5] font-medium mb-10">
          Somos embaixadores oficial da marca Barbarex
        </p>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {videos.map((video) => {
              const videoId = getYouTubeId(video.url);
              const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

              return (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(videoId)}
                  className="keen-slider__slide cursor-pointer group"
                >
                  <div className="relative w-full h-0 pb-[56.25%] rounded-md overflow-hidden">
                    <img
                      src={thumbnail}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <PlayCircle size={64} className="text-white group-hover:text-[#0075FF] transition" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Botões de navegação */}
          <button
            onClick={() => slider.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/40 backdrop-blur-sm hover:bg-white/70 text-[#053887] p-2 rounded-full z-10 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/40 backdrop-blur-sm hover:bg-white/70 text-[#053887] p-2 rounded-full z-10 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots de paginação */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => slider.current?.moveToIdx(i)}
              className={`w-3 h-3 rounded-full transition ${i === currentSlide ? 'bg-white' : 'bg-white/40'
                }`}
            />
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-3xl aspect-video bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video"
              className="w-full h-full rounded-lg"
              frameBorder="0"
              loading="lazy"
              controls="0"
              modestbranding="1"
              playsinline="1"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-[#053887] bg-opacity-50 rounded-full p-1 hover:bg-opacity-80"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MediaSection;
