"use client";

import React, { useState } from "react";
import { getImageUrl, getImageAlt } from "@/app/shared/utils/image";

interface Project {
  id: number;
  title: string;
  category?: "exterior" | "interior";
  image: {
    url: string;
    alternativeText?: string;
  };
}

interface GalleryProps {
  subtitle: string;
  title: string;
  description: string;
  loadMoreButtonText: string;
  projects: Project[];
}

const Gallery: React.FC<GalleryProps> = ({
  subtitle,
  title,
  description,
  loadMoreButtonText,
  projects,
}) => {
  const [showAll, setShowAll] = useState(false);

  // Show 3 projects initially, all when showAll is true
  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  const hasMoreProjects = projects.length > 3;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="lg:max-w-2xl">
            <p className="text-primary text-sm font-semibold uppercase mb-4 tracking-wide">
              {subtitle}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              {title}
            </h2>
            <p className="text-neutral-charcoal leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden"
            >
              <div className="relative h-64 md:h-80 bg-neutral-gray-light">
                <img
                  src={getImageUrl(project.image)}
                  alt={getImageAlt(project.image, project.title)}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {hasMoreProjects && !showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="border-2 border-primary text-primary px-8 py-3 font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              {loadMoreButtonText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

