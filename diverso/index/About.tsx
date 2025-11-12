"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Award } from "lucide-react";
import StrapiService from "@/src/services/strapi.service";

interface Benefit {
  id: number;
  text: string;
}

interface AboutData {
  id: number;
  sectionSubtitle: string;
  sectionTitle: string;
  sectionDescription: string;
  teamImage: {
    url: string;
    alternativeText?: string;
  };
  reviewsCardTitle: string;
  averageRating: string;
  ratingStars: number;
  reviewsLinkText: string;
  reviewsLinkUrl: string;
  benefits: Benefit[];
  ctaButtonText: string;
  ctaButtonUrl: string;
}

const AboutCompanySection: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const strapiService = new StrapiService();
        const response = await strapiService.getContent<AboutData>(
          "diverso/about-section",
          {
            populate: {
              teamImage: "*",
              benefits: "*",
            },
          },
        );
        setAboutData(response.data);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);

  if (!aboutData) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">Зареждане...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Reviews */}
          <div className="relative">
            {/* Main Team Image */}
            <div className="relative h-[500px] w-full">
              <Image
                src={aboutData.teamImage.url}
                alt={
                  aboutData.teamImage.alternativeText ||
                  "RS Schildersgroep BV Team"
                }
                fill
                className="object-cover"
              />
            </div>

            {/* Reviews Card Overlay */}
            <div className="absolute bottom-0 left-0 bg-success text-white p-6 max-w-sm shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-white rounded-full p-3 shrink-0">
                  <Award className="text-success" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {aboutData.reviewsCardTitle}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(aboutData.ratingStars)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-medium">
                    {aboutData.averageRating}
                  </p>
                </div>
              </div>
            </div>

            {/* Read Reviews Link */}
            <div className="mt-4">
              <Link
                href={aboutData.reviewsLinkUrl}
                className="text-neutral-charcoal hover:text-primary transition-colors text-sm"
              >
                {aboutData.reviewsLinkText}
              </Link>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            {/* Section Header */}
            <div className="mb-8">
              <div className="w-16 h-1 bg-primary mb-4"></div>
              <p className="text-primary text-sm font-semibold uppercase mb-4 tracking-wide">
                {aboutData.sectionSubtitle}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
                {aboutData.sectionTitle}
              </h2>
              <div className="text-neutral-charcoal leading-relaxed mb-6 space-y-4">
                {aboutData.sectionDescription
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {aboutData.benefits.map((benefit) => (
                <div key={benefit.id} className="flex items-start gap-3">
                  <CheckCircle
                    className="text-primary shrink-0 mt-1"
                    size={20}
                  />
                  <p className="text-neutral-charcoal">{benefit.text}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href={aboutData.ctaButtonUrl}
              className="inline-flex items-center border-2 border-dashed border-primary text-primary px-6 py-3 font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              <span className="mr-2">■</span>
              <span>{aboutData.ctaButtonText}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompanySection;
