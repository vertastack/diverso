import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'ИНТЕРИОРНО БОЯДИСВАНЕ',
    description: 'Имате нужда от боядисване на дограма, стени, врати, тавани или столби? RS Schildersgroep BV е опитният партньор за всички ваши нужди от интериорно боядисване.',
    image: '/images/interior-painting.jpg',
    link: '/services/interior-painting'
  },
  {
    id: 2,
    title: 'ВЪНШНО БОЯДИСВАНЕ',
    description: 'Домът ви се нуждае от ремонт (боядисване)? Или е време за нов, свеж облик? Тогава сте попаднали на правилното място!',
    image: '/images/exterior-painting.jpg',
    link: '/services/exterior-painting'
  },
  {
    id: 3,
    title: 'РЕМОНТ НА ГНИСЕЦА ДЪРВОРЕЗБА',
    description: 'Имате ли проблеми с гниене на дърворезбата в дома или (бизнес) си? Няма проблем, ние сме тук, за да ви помогнем. Нашите специалисти по (гниене на дърворезба) са готови да ви помогнат!',
    image: '/images/wood-repair.jpg',
    link: '/services/wood-repair'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-gray-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-primary text-sm font-semibold uppercase mb-4 tracking-wide">
            НИЕ ПРЕДЛАГАМЕ САМО НАЙ-ВИСОКО КАЧЕСТВО. ОТКРИЙТЕ НАШАТА ЕКСПЕРТИЗА.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
            ПЕРФЕКТНА КАРТИНА, ТОВА Е, КОЕТО ТИ ИЗБИРАШ, НАЛИ?
          </h2>
          <div className="space-y-4 text-neutral-charcoal">
            <p>
              Открийте нашите комплексни услуги за боядисване, поддръжка и остъкляване.
            </p>
            <p>
              Вашият проект е в ръцете на истински професионалисти: всеотдайни майстори с око 
              за детайлите и страст към работата си.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white group hover:shadow-xl transition-all duration-300"
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
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