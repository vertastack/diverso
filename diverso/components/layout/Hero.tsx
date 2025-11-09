'use client';

import React, { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import { Phone } from 'lucide-react';

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  rating: string;
  description: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: '/images/hero-1.jpg',
    title: 'ФИРМА ЗА БОЯДИСВАНЕ ОТ ЗЮТФЕН',
    rating: 'Средна оценка 8,4⭐⭐⭐⭐⭐',
    description: 'Вашият местен специалист за боядисване, реставрация, ремонт на гипсена дърворезба, остъкляване, довършителни работи по стените и мазилки. Един всеотдаен партньор и една точка за контакт: заедно напред.'
  },
  {
    id: 2,
    image: '/images/hero-2.jpg',
    title: 'ПРОФЕСИОНАЛНО БОЯДИСВАНЕ',
    rating: 'Средна оценка 8,4⭐⭐⭐⭐⭐',
    description: 'Високо качество и прецизност при всеки проект. Вашият надежден партньор за интериорно и екстериорно боядисване.'
  },
  {
    id: 3,
    image: '/images/hero-3.jpg',
    title: 'ЕКСПЕРТНИ РЕШЕНИЯ',
    rating: 'Средна оценка 8,4⭐⭐⭐⭐⭐',
    description: 'Над 20 години опит в боядисването и реставрацията. Доверете се на професионалистите за вашия дом или бизнес.'
  }
];

const HeroSlider: React.FC = () => {
  const splideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        type: 'loop',
        autoplay: true,
        interval: 5000,
        speed: 1000,
        pauseOnHover: true,
        pauseOnFocus: true,
        arrows: true,
        pagination: true,
        perPage: 1,
        gap: 0,
        breakpoints: {
          768: {
            arrows: false,
          }
        }
      });

      splide.mount();

      return () => {
        splide.destroy();
      };
    }
  }, []);

  return (
    <section className="relative">
      {/* Splide Slider */}
      <div ref={splideRef} className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {heroSlides.map((slide) => (
              <li key={slide.id} className="splide__slide">
                <div className="relative h-[600px] lg:h-[700px]">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                      filter: 'brightness(0.7)'
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Content */}
                  <div className="relative container mx-auto px-4 h-full flex items-center">
                    <div className="max-w-3xl text-white">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl mb-6 opacity-90">
                        {slide.rating}
                      </p>
                      <p className="text-base md:text-lg mb-8 leading-relaxed max-w-2xl">
                        {slide.description}
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Phone Card */}
                        <div className="bg-white text-neutral-dark px-6 py-4 inline-flex items-center gap-3 border-2 border-dashed border-neutral-charcoal">
                          <Phone size={24} className="text-neutral-dark" />
                          <div>
                            <p className="text-sm font-medium">Свържете се с нас директно</p>
                            <a 
                              href="tel:0575540147" 
                              className="text-xl font-bold hover:text-primary transition-colors"
                            >
                              0575 - 540 147
                            </a>
                          </div>
                        </div>

                        {/* Quote Button */}
                        <button className="bg-success hover:bg-success-dark text-white px-8 py-4 font-semibold text-lg transition-colors duration-300 inline-flex items-center justify-center">
                          ЗАЯВКА ЗА ОФЕРТА &gt;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Red Bar */}
      <div className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <p className="text-lg md:text-xl font-medium text-center md:text-left">
              Искате да освежите интериора на дома или сградата си с нов слой боя тази зима?
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-lg font-medium">Обадете ни се:</span>
              <div className="flex items-center gap-2 bg-white text-primary px-4 py-2">
                <Phone size={20} />
                <a 
                  href="tel:0575540147" 
                  className="font-bold text-lg hover:underline"
                >
                  0575 - 540 147
                </a>
              </div>
              <span className="text-lg">или</span>
              <button className="bg-secondary hover:bg-secondary-teal-dark text-white px-6 py-2 font-semibold transition-colors">
                свържете се с нас.
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Splide Styles */}
      <style jsx global>{`
        .splide__arrow {
          background: rgba(255, 255, 255, 0.9);
          width: 3rem;
          height: 3rem;
          border-radius: 0;
        }

        .splide__arrow:hover {
          background: rgba(255, 255, 255, 1);
        }

        .splide__arrow svg {
          fill: #1a2832;
        }

        .splide__pagination {
          bottom: 2rem;
        }

        .splide__pagination__page {
          background: rgba(255, 255, 255, 0.5);
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .splide__pagination__page.is-active {
          background: #c41e1e;
          transform: scale(1.2);
        }

        @media (max-width: 768px) {
          .splide__arrow {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;