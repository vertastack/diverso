"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import StrapiService from "@/src/services/strapi.service";

type ProjectCategory = "all" | "exterior" | "interior";

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  image: {
    url: string;
    alternativeText?: string;
  };
}

interface GalleryData {
  id: number;
  sectionSubtitle: string;
  sectionTitle: string;
  sectionDescription: string;
  showAllButtonText: string;
  exteriorButtonText: string;
  interiorButtonText: string;
  loadMoreButtonText: string;
  projects: Project[];
}

const PortfolioGallerySection: React.FC = () => {
  const [galleryData, setGalleryData] = useState<GalleryData | null>(null);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const strapiService = new StrapiService();
        const response = await strapiService.getContent<GalleryData>(
          "diverso/gallery",
          {
            populate: {
              projects: {
                populate: {
                  image: "*",
                },
              },
            },
          },
        );
        setGalleryData(response.data);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchGalleryData();
  }, []);

  if (!galleryData) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">Зареждане на галерията...</p>
        </div>
      </section>
    );
  }

  const filteredProjects =
    activeCategory === "all"
      ? galleryData.projects
      : galleryData.projects.filter(
          (project) => project.category === activeCategory,
        );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          {/* Left Side - Title and Description */}
          <div className="lg:max-w-2xl">
            <p className="text-primary text-sm font-semibold uppercase mb-4 tracking-wide">
              {galleryData.sectionSubtitle}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              {galleryData.sectionTitle}
            </h2>
            <p className="text-neutral-charcoal leading-relaxed">
              {galleryData.sectionDescription}
            </p>
          </div>

          {/* Right Side - Filter Tabs */}
          <div className="flex gap-2 border-2 border-dashed border-neutral-charcoal p-1">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-3 font-semibold transition-all ${
                activeCategory === "all"
                  ? "bg-primary text-white"
                  : "bg-white text-neutral-dark hover:bg-neutral-gray-light"
              }`}
            >
              {galleryData.showAllButtonText}
            </button>
            <button
              onClick={() => setActiveCategory("exterior")}
              className={`px-6 py-3 font-semibold transition-all ${
                activeCategory === "exterior"
                  ? "bg-primary text-white"
                  : "bg-white text-neutral-dark hover:bg-neutral-gray-light"
              }`}
            >
              {galleryData.exteriorButtonText}
            </button>
            <button
              onClick={() => setActiveCategory("interior")}
              className={`px-6 py-3 font-semibold transition-all ${
                activeCategory === "interior"
                  ? "bg-primary text-white"
                  : "bg-white text-neutral-dark hover:bg-neutral-gray-light"
              }`}
            >
              {galleryData.interiorButtonText}
            </button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-80 bg-neutral-gray-light">
                <Image
                  src={project.image.url}
                  alt={project.image.alternativeText || project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm">Вижте проекта</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button (Optional) */}
        <div className="text-center mt-12">
          <button className="border-2 border-primary text-primary px-8 py-3 font-semibold hover:bg-primary hover:text-white transition-all duration-300">
            {galleryData.loadMoreButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallerySection;
