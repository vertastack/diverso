'use client';

import React, { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import Image from 'next/image';
import { Phone } from 'lucide-react';

interface ImageSlide {
  id: number;
  image: string;
  alt: string;
}

const imageSlides: ImageSlide[] = [
  {
    id: 1,
    image: '/images/worker-ladder.jpg',
    alt: 'Работник на стълба'
  },
  {
    id: 2,
    image: '/images/worker-painting.jpg',
    alt: 'Работник боядисва'
  },
  {
    id: 3,
    image: '/images/scaffolding.jpg',
    alt: 'Скеле за работа'
  }
];

const ImageCTASlider: React.FC = () => {
  const splideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        type: 'loop',
        autoplay: true,
        interval: 4000,
        speed: 1000,
        pauseOnHover: false,
        arrows: false,
        pagination: false,
        perPage: 3,
        gap: 0,
        breakpoints: {
          1024: {
            perPage: 2,
          },
          768: {
            perPage: 1,
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
      {/* Image Slider */}
      <div ref={splideRef} className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {imageSlides.map((slide) => (
              <li key={slide.id} className="splide__slide">
                <div className="relative h-[350px]">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Bar */}
      <div className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 text-white">
            {/* Main Question */}
            <p className="text-lg md:text-xl text-center max-w-4xl leading-relaxed">
              Бихте ли искали да получите съвет относно (вътрешно) боядисване, ремонт на гниеща дърворезба или остъкляване?
            </p>
            
            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-base font-medium">Обадете ни се:</span>
              <div className="flex items-center gap-2 bg-white text-primary px-5 py-3 border-2 border-dashed border-white">
                <Phone size={20} />
                <a 
                  href="tel:0575540147" 
                  className="font-bold text-lg hover:underline"
                >
                  0575 - 540 147
                </a>
              </div>
              <span className="text-base">или</span>
              <button className="bg-transparent hover:bg-white hover:text-primary border-2 border-white text-white px-6 py-3 font-semibold transition-all duration-300 underline">
                свържете се с нас.
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCTASlider;