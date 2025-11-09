'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type ProjectCategory = 'all' | 'exterior' | 'interior';

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Боядисване на къща със скеле',
    category: 'exterior',
    image: '/images/portfolio/project-1.jpg'
  },
  {
    id: 2,
    title: 'Многофамилна сграда',
    category: 'exterior',
    image: '/images/portfolio/project-2.jpg'
  },
  {
    id: 3,
    title: 'Модерна къща',
    category: 'exterior',
    image: '/images/portfolio/project-3.jpg'
  },
  {
    id: 4,
    title: 'Традиционна къща',
    category: 'exterior',
    image: '/images/portfolio/project-4.jpg'
  },
  {
    id: 5,
    title: 'Исторически сгради',
    category: 'exterior',
    image: '/images/portfolio/project-5.jpg'
  },
  {
    id: 6,
    title: 'Жълта къща',
    category: 'exterior',
    image: '/images/portfolio/project-6.jpg'
  }
];

const PortfolioGallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          {/* Left Side - Title and Description */}
          <div className="lg:max-w-2xl">
            <p className="text-primary text-sm font-semibold uppercase mb-4 tracking-wide">
              ВСЕКИ ПРОЕКТ Е НОВО ПРЕДИЗВИКАТЕЛСТВО ЗА НАС
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              КАРТИНИ, С КОИТО ДА СЕ ГОРДЕЕМ
            </h2>
            <p className="text-neutral-charcoal leading-relaxed">
              Предоставяне на майсторска изработка със 100% удовлетворение. Това е, към което се стремим. 
              Ще бъде ли скоро сред тях вашият дом или (бизнес) имот?
            </p>
          </div>

          {/* Right Side - Filter Tabs */}
          <div className="flex gap-2 border-2 border-dashed border-neutral-charcoal p-1">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-white text-neutral-dark hover:bg-neutral-gray-light'
              }`}
            >
              ПОКАЖИ ВСИЧКИ
            </button>
            <button
              onClick={() => setActiveCategory('exterior')}
              className={`px-6 py-3 font-semibold transition-all ${
                activeCategory === 'exterior'
                  ? 'bg-primary text-white'
                  : 'bg-white text-neutral-dark hover:bg-neutral-gray-light'
              }`}
            >
              ВЪНШНО БОЯДИСВАНЕ
            </button>
            <button
              onClick={() => setActiveCategory('interior')}
              className={`px-6 py-3 font-semibold transition-all ${
                activeCategory === 'interior'
                  ? 'bg-primary text-white'
                  : 'bg-white text-neutral-dark hover:bg-neutral-gray-light'
              }`}
            >
              ИНТЕРИОРНО БОЯДИСВАНЕ
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
                  src={project.image}
                  alt={project.title}
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
            ЗАРЕДИ ОЩЕ ПРОЕКТИ
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallerySection;