"use client";

import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { getImageUrl } from "@/app/shared/utils/image";

interface HeroSlide {
  id: number;
  image: {
    url: string;
    alternativeText?: string;
  };
  title: string;
  rating: string;
  description: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  phoneNumber: string;
  ctaButtonText: string;
  bottomBarText: string;
  phoneText: string;
  bottomBarButtonText: string;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  slides,
  phoneNumber,
  ctaButtonText,
  bottomBarText,
  phoneText,
  bottomBarButtonText,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 20000); // 20 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  if (!slides || slides.length === 0) return null;

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative">
      <div className="relative h-[600px] lg:h-[700px] overflow-hidden">
        {/* Background Image with fade transition */}
        <div
          key={currentSlide}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 opacity-100"
          style={{
            backgroundImage: `url(${getImageUrl(currentSlideData.image)})`,
            filter: "brightness(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div
            key={`content-${currentSlide}`}
            className="max-w-3xl text-white animate-fadeIn"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {currentSlideData.title}
            </h1>
            <p className="text-lg md:text-xl mb-6 opacity-90">
              {currentSlideData.rating}
            </p>
            <p className="text-base md:text-lg mb-8 leading-relaxed max-w-2xl">
              {currentSlideData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white text-neutral-dark px-6 py-4 inline-flex items-center gap-3 border-2 border-dashed border-neutral-charcoal">
                <Phone size={24} className="text-neutral-dark" />
                <div>
                  <p className="text-sm font-medium">
                    Neem direct contact met ons op
                  </p>
                  <a
                    href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                    className="text-xl font-bold hover:text-primary transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>
              <button className="bg-success hover:bg-success-dark text-white px-8 py-4 font-semibold text-lg transition-colors duration-300 inline-flex items-center justify-center">
                {ctaButtonText} &gt;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Red Bar */}
      <div className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <p className="text-lg md:text-xl font-medium text-center md:text-left">
              {bottomBarText}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 shrink-0">
              <span className="text-base md:text-lg font-medium">
                {phoneText}
              </span>
              <div className="flex items-center gap-2 bg-white text-primary px-3 md:px-4 py-2">
                <Phone size={18} className="md:w-5 md:h-5" />
                <a
                  href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                  className="font-bold text-base md:text-lg hover:underline"
                >
                  {phoneNumber}
                </a>
              </div>
              <span className="text-base md:text-lg">of</span>
              <button className="bg-secondary hover:bg-secondary-teal-dark text-white px-4 md:px-6 py-2 font-semibold transition-colors text-sm md:text-base">
                {bottomBarButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;

