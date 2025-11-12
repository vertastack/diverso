"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import StrapiService from "@/src/services/strapi.service";

interface Service {
  id: number;
  title: string;
  description: string;
  image: {
    url: string;
    alternativeText?: string;
  };
  link: string;
}

interface ServicesData {
  id: number;
  sectionSubtitle: string;
  sectionTitle: string;
  sectionDescription: string;
  services: Service[];
}

const ServicesSection: React.FC = () => {
  const [servicesData, setServicesData] = useState<ServicesData | null>(null);

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const strapiService = new StrapiService();
        const response = await strapiService.getContent<ServicesData>(
          "diverso/services",
          {
            populate: {
              services: {
                populate: {
                  image: "*",
                },
              },
            },
          },
        );
        setServicesData(response.data);
      } catch (error) {
        console.error("Error fetching services data:", error);
      }
    };

    fetchServicesData();
  }, []);

  if (!servicesData) {
    return (
      <section className="py-16 bg-neutral-gray-light">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">Зареждане на услугите...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-neutral-gray-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-primary text-sm font-semibold uppercase mb-4 tracking-wide">
            {servicesData.sectionSubtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
            {servicesData.sectionTitle}
          </h2>
          <div className="space-y-4 text-neutral-charcoal">
            {servicesData.sectionDescription
              .split("\n\n")
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.services.map((service) => (
            <div
              key={service.id}
              className="bg-white group hover:shadow-xl transition-all duration-300"
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image.url}
                  alt={service.image.alternativeText || service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-dark mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-charcoal text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Read More Link */}
                <Link
                  href={service.link}
                  className="inline-flex items-center text-primary font-semibold text-sm hover:text-primary-red-dark transition-colors group"
                >
                  <span className="mr-2">■</span>
                  <span className="border-b-2 border-primary group-hover:border-primary-red-dark">
                    Прочетете още
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
