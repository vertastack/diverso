"use client";

import React, { useEffect, useRef, useState } from "react";
import Splide from "@splidejs/splide";
import Image from "next/image";
import { Star, CheckCircle } from "lucide-react";
import StrapiService from "@/src/services/strapi.service";

interface Testimonial {
  id: number;
  name: string;
  date: string;
  rating: number;
  review: string;
  avatar: {
    url: string;
    alternativeText?: string;
  };
  verified: boolean;
}

interface TestimonialsData {
  id: number;
  sectionSubtitle: string;
  sectionTitle: string;
  sectionDescription: string;
  googleReviewsText: string;
  googleReviewsUrl: string;
  trustpilotReviewsText: string;
  trustpilotReviewsUrl: string;
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC = () => {
  const splideRef = useRef<HTMLDivElement>(null);
  const [testimonialsData, setTestimonialsData] =
    useState<TestimonialsData | null>(null);

  useEffect(() => {
    const fetchTestimonialsData = async () => {
      try {
        const strapiService = new StrapiService();
        const response = await strapiService.getContent<TestimonialsData>(
          "diverso/testimonials",
          {
            populate: {
              testimonials: {
                populate: {
                  avatar: "*",
                },
              },
            },
          },
        );
        setTestimonialsData(response.data);
      } catch (error) {
        console.error("Error fetching testimonials data:", error);
      }
    };

    fetchTestimonialsData();
  }, []);

  useEffect(() => {
    if (splideRef.current && testimonialsData?.testimonials?.length) {
      const splide = new Splide(splideRef.current, {
        type: "loop",
        autoplay: true,
        interval: 5000,
        speed: 800,
        pauseOnHover: true,
        arrows: true,
        pagination: false,
        perPage: 2,
        gap: "2rem",
        breakpoints: {
          1024: {
            perPage: 1,
          },
        },
      });

      splide.mount();

      return () => {
        splide.destroy();
      };
    }
  }, [testimonialsData]);

  if (!testimonialsData) {
    return (
      <section className="py-16 bg-neutral-gray-light">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">Зареждане на отзивите...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-neutral-gray-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Header */}
          <div className="lg:col-span-4">
            <p className="text-primary text-sm font-semibold uppercase mb-4 tracking-wide">
              {testimonialsData.sectionSubtitle}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
              {testimonialsData.sectionTitle}
            </h2>
            <p className="text-neutral-charcoal leading-relaxed mb-8">
              {testimonialsData.sectionDescription}
            </p>

            {/* Review Platform Buttons */}
            <div className="space-y-4">
              <a
                href={testimonialsData.googleReviewsUrl}
                className="flex items-center justify-center gap-3 border-2 border-dashed border-neutral-charcoal text-neutral-dark px-6 py-3 font-semibold hover:bg-neutral-dark hover:text-white hover:border-neutral-dark transition-all duration-300"
              >
                <span>{testimonialsData.googleReviewsText}</span>
                <span className="text-xl">G</span>
              </a>
              <a
                href={testimonialsData.trustpilotReviewsUrl}
                className="flex items-center justify-center gap-3 border-2 border-dashed border-neutral-charcoal text-neutral-dark px-6 py-3 font-semibold hover:bg-neutral-dark hover:text-white hover:border-neutral-dark transition-all duration-300"
              >
                <span>{testimonialsData.trustpilotReviewsText}</span>
                <Star size={20} fill="currentColor" />
              </a>
            </div>
          </div>

          {/* Right Column - Testimonials Slider */}
          <div className="lg:col-span-8">
            <div ref={splideRef} className="splide testimonials-slider">
              <div className="splide__track">
                <ul className="splide__list">
                  {testimonialsData.testimonials.map((testimonial) => (
                    <li key={testimonial.id} className="splide__slide">
                      <div className="bg-white p-8 h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                        {/* Avatar and Name */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="relative">
                            <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
                              <Image
                                src={testimonial.avatar.url}
                                alt={
                                  testimonial.avatar.alternativeText ||
                                  testimonial.name
                                }
                                width={64}
                                height={64}
                                className="object-cover"
                              />
                            </div>
                            {testimonial.verified && (
                              <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                                <CheckCircle
                                  size={16}
                                  className="text-white"
                                  fill="white"
                                />
                              </div>
                            )}
                          </div>
                          <div>
                            <h3 className="font-bold text-neutral-dark">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-neutral-charcoal">
                              {testimonial.date}
                            </p>
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
                            <CheckCircle
                              size={16}
                              className="text-blue-500 ml-1"
                            />
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
