'use client';

import React, { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import Image from 'next/image';
import { Star, CheckCircle } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  date: string;
  rating: number;
  review: string;
  avatar: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Нина Де Ланге',
    date: '16 февруари 2024 г.',
    rating: 5,
    review: 'Те работят бързо и професионално. Привествани бояджии, които винаги мислят заедно с вас.',
    avatar: '/images/avatar-1.jpg',
    verified: true
  },
  {
    id: 2,
    name: 'Твери де Йонг ван Дуйнн',
    date: '16 януари 2024 г.',
    rating: 5,
    review: 'Отлична компания. Точни, спазват уговорките и имат експертен персонал. Накратко: изключително доволен съм, особено от Барт, който свърши работата.',
    avatar: '/images/avatar-2.jpg',
    verified: true
  },
  {
    id: 3,
    name: 'Марк Янсен',
    date: '5 март 2024 г.',
    rating: 5,
    review: 'Перфектна работа, много професионално изпълнение. Определено препоръчвам!',
    avatar: '/images/avatar-3.jpg',
    verified: true
  }
];

const TestimonialsSection: React.FC = () => {
  const splideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        type: 'loop',
        autoplay: true,
        interval: 5000,
        speed: 800,
        pauseOnHover: true,
        arrows: true,
        pagination: false,
        perPage: 2,
        gap: '2rem',
        breakpoints: {
          1024: {
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
    <section className="py-16 bg-neutral-gray-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Header */}
          <div className="lg:col-span-4">
            <p className="text-primary text-sm font-semibold uppercase mb-4 tracking-wide">
              ВИНАГИ СЕ СТРЕМИМ КЪМ 100% УДОВЛЕТВОРЕНОСТ НА КЛИЕНТИТЕ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
              ОТЗИВИ ОТ НАШИТЕ КЛИЕНТИ
            </h2>
            <p className="text-neutral-charcoal leading-relaxed mb-8">
              Отговаряне на очакванията на нашите клиенти: Ние сме доволни само когато и вие сте. 
              Научете повече за опита на предишните ни клиенти.
            </p>

            {/* Review Platform Buttons */}
            <div className="space-y-4">
              <a 
                href="#" 
                className="flex items-center justify-center gap-3 border-2 border-dashed border-neutral-charcoal text-neutral-dark px-6 py-3 font-semibold hover:bg-neutral-dark hover:text-white hover:border-neutral-dark transition-all duration-300"
              >
                <span>ВИЖТЕ ОТЗИВИ В GOOGLE</span>
                <span className="text-xl">G</span>
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center gap-3 border-2 border-dashed border-neutral-charcoal text-neutral-dark px-6 py-3 font-semibold hover:bg-neutral-dark hover:text-white hover:border-neutral-dark transition-all duration-300"
              >
                <span>ВИЖТЕ ОТЗИВИ В TRUSTPILOT</span>
                <Star size={20} fill="currentColor" />
              </a>
            </div>
          </div>

          {/* Right Column - Testimonials Slider */}
          <div className="lg:col-span-8">
            <div ref={splideRef} className="splide testimonials-slider">
              <div className="splide__track">
                <ul className="splide__list">
                  {testimonials.map((testimonial) => (
                    <li key={testimonial.id} className="splide__slide">
                      <div className="bg-white p-8 h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                        {/* Avatar and Name */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="relative">
                            <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
                              <Image
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                width={64}
                                height={64}
                                className="object-cover"
                              />
                            </div>
                            {testimonial.verified && (
                              <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                                <CheckCircle size={16} className="text-white" fill="white" />
                              </div>
                            )}
                          </div>
                          <div>
                            <h3 className="font-bold text-neutral-dark">{testimonial.name}</h3>
                            <p className="text-sm text-neutral-charcoal">{testimonial.date}</p>
                          </div>
                        </div>

                        {/* Rating Stars */}
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={20} 
                              className="text-yellow-400" 
                              fill="#fbbf24" 
                            />
                          ))}
                          {testimonial.verified && (
                            <CheckCircle size={16} className="text-blue-500 ml-1" />
                          )}
                        </div>

                        {/* Review Text */}
                        <p className="text-neutral-charcoal leading-relaxed">
                          {testimonial.review}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Splide Styles */}
      <style jsx global>{`
        .testimonials-slider .splide__arrow {
          background: rgba(26, 40, 50, 0.8);
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0;
        }

        .testimonials-slider .splide__arrow:hover {
          background: rgba(26, 40, 50, 1);
        }

        .testimonials-slider .splide__arrow svg {
          fill: white;
        }

        .testimonials-slider .splide__arrow--prev {
          left: -1rem;
        }

        .testimonials-slider .splide__arrow--next {
          right: -1rem;
        }

        @media (max-width: 1024px) {
          .testimonials-slider .splide__arrow--prev {
            left: 0;
          }

          .testimonials-slider .splide__arrow--next {
            right: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;