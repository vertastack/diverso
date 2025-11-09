import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Award } from 'lucide-react';

interface Benefit {
  id: number;
  text: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    text: '100% гаранция за удовлетвореност, ние сме доволни само когато и вие сте.'
  },
  {
    id: 2,
    text: 'Изберете сигурност, вие се възползвате от кристално ясна гаранция;'
  },
  {
    id: 3,
    text: 'Отговор на вашата заявка за оферта в рамките на 24 часа;'
  },
  {
    id: 4,
    text: 'Екип от сертифицирани и опитни професионалисти;'
  },
  {
    id: 5,
    text: 'Активен от 2003 г.: повече от 20 години опит;'
  }
];

const AboutCompanySection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Reviews */}
          <div className="relative">
            {/* Main Team Image */}
            <div className="relative h-[500px] w-full">
              <Image
                src="/images/team-photo.jpg"
                alt="RS Schildersgroep BV Team"
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
                    Открийте<br />
                    нашите отзиви
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-sm font-medium">Средно 9,4 от 10</p>
                </div>
              </div>
            </div>

            {/* Read Reviews Link */}
            <div className="mt-4">
              <Link 
                href="/reviews" 
                className="text-neutral-charcoal hover:text-primary transition-colors text-sm"
              >
                Прочетете всички наши отзиви
              </Link>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            {/* Section Header */}
            <div className="mb-8">
              <div className="w-16 h-1 bg-primary mb-4"></div>
              <p className="text-primary text-sm font-semibold uppercase mb-4 tracking-wide">
                ВАШИЯТ НАДЕЖДЕН И МЕСТЕН ПАРТНЬОР ЗА ВСИЧКИ ВАШИ БОЯДЖИЙСКИ РАБОТИ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
                RS SCHILDERSGROEP BV ОТ ЗЮТФЕН
              </h2>
              <p className="text-neutral-charcoal leading-relaxed mb-6">
                С над 20 години опит, ние се превърнахме в модерен, експертен партньор в 
                боядисването. Доверието е от първостепенно значение: ние комуникираме прозрачно, 
                изслушваме вашите нужди и предоставяме честни и обосновани съвети. Ще получите 
                кристално ясна гаранция и най-добрите резултати, гарантирано. Ние изпълняваме 
                обещанията си и обичаме да ви изненадваме с положителен обрат. Обещанието си е 
                обещание, плюс нещо малко допълнително.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex items-start gap-3">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <p className="text-neutral-charcoal">{benefit.text}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link 
              href="/about"
              className="inline-flex items-center border-2 border-dashed border-primary text-primary px-6 py-3 font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              <span className="mr-2">■</span>
              <span>ПОВЕЧЕ ЗА РС ШИЛДЪРСГРОЕП</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompanySection;