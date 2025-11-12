"use client";

import React, { useEffect, useRef, useState } from "react";
import Splide from "@splidejs/splide";
import Image from "next/image";
import { Phone } from "lucide-react";
import StrapiService from "@/src/services/strapi.service";

interface ImageSlide {
  id: number;
  image: {
    url: string;
    alternativeText?: string;
  };
}

interface CTAData {
  id: number;
  images: ImageSlide[];
  mainQuestion: string;
  phoneText: string;
  phoneNumber: string;
  orText: string;
  ctaButtonText: string;
}

const ImageCTASlider: React.FC = () => {
  const splideRef = useRef<HTMLDivElement>(null);
  const [ctaData, setCTAData] = useState<CTAData | null>(null);

  useEffect(() => {
    const fetchCTAData = async () => {
      try {
        const strapiService = new StrapiService();
        const response = await strapiService.getContent<CTAData>(
          "diverso/cta-section",
          {
            populate: {
              images: {
                populate: {
                  image: "*",
                },
              },
            },
          },
        );
        setCTAData(response.data);
      } catch (error) {
        console.error("Error fetching CTA data:", error);
      }
    };

    fetchCTAData();
  }, []);

  useEffect(() => {
    if (splideRef.current && ctaData?.images?.length) {
      const splide = new Splide(splideRef.current, {
        type: "loop",
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
          },
        },
      });

      splide.mount();

      return () => {
        splide.destroy();
      };
    }
  }, [ctaData]);

  if (!ctaData) {
    return (
      <section className="relative">
        <div className="h-[350px] bg-gray-200 flex items-center justify-center">
          <p className="text-gray-600">Зареждане...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative">
      {/* Image Slider */}
      <div ref={splideRef} className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {ctaData.images.map((slide) => (
              <li key={slide.id} className="splide__slide">
                <div className="relative h-[350px]">
                  <Image
                    src={slide.image.url}
                    alt={slide.image.alternativeText || "CTA Image"}
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
              {ctaData.mainQuestion}
            </p>

            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-base font-medium">{ctaData.phoneText}</span>
              <div className="flex items-center gap-2 bg-white text-primary px-5 py-3 border-2 border-dashed border-white">
                <Phone size={20} />
                <a
                  href={`tel:${ctaData.phoneNumber.replace(/\s/g, "")}`}
                  className="font-bold text-lg hover:underline"
                >
                  {ctaData.phoneNumber}
                </a>
              </div>
              <span className="text-base">{ctaData.orText}</span>
              <button className="bg-transparent hover:bg-white hover:text-primary border-2 border-white text-white px-6 py-3 font-semibold transition-all duration-300 underline">
                {ctaData.ctaButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCTASlider;
