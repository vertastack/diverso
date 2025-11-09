import React from 'react';
import Link from 'next/link';
import { Phone, Facebook, Linkedin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral text-white">
      {/* CTA Section */}
      <div className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold mb-1">Любопитни ли сте за възможностите?</h3>
              <p className="text-white/90">Не се колебайте да се свържете с нас.</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:0575540147" 
                className="flex items-center gap-2 bg-white text-primary px-6 py-3 font-semibold border-2 border-white hover:bg-transparent hover:text-white transition-colors"
              >
                <Phone size={20} />
                <span>0575 - 540 147</span>
              </a>
              <button className="bg-secondary text-white px-8 py-3 font-semibold hover:bg-secondary-teal-dark transition-colors">
                СВЪРЖЕТЕ СЕ С НАС
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h4 className="text-lg font-bold mb-4 border-b-2 border-primary inline-block pb-1">
                РС ШИЛДЪРСГРОЕП БВ
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Бояджийска компания, базирана в Зутфен, предлагаща боядисване, реставрация, 
                ремонт на гипсена дърворезба, шпакловане, довършителни работи по стените и 
                остъкляване. Повече от 20 години, нашият доверен партньор и лице за контакт 
                за най-добрите бояджийски услуги: продължаваме напред заедно.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary-teal-dark transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary-teal-dark transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary-teal-dark transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Menu */}
            <div>
              <h4 className="text-lg font-bold mb-4 border-b-2 border-primary inline-block pb-1">
                МЕНЮ
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm">
                    ☑ Дом
                  </Link>
                </li>
                <li>
                  <Link href="/multi-year-plan" className="text-white/70 hover:text-white transition-colors text-sm">
                    ☑ Многогодишен план за поддръжка
                  </Link>
                </li>
                <li>
                  <Link href="/references" className="text-white/70 hover:text-white transition-colors text-sm">
                    ☑ Референции
                  </Link>
                </li>
                <li>
                  <Link href="/trading" className="text-white/70 hover:text-white transition-colors text-sm">
                    ☑ Търговски
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/70 hover:text-white transition-colors text-sm">
                    ☑ За нас
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/70 hover:text-white transition-colors text-sm">
                    ☑ Контакт
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-4 border-b-2 border-primary inline-block pb-1">
                НАШИТЕ УСЛУГИ
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/interior" className="text-white/70 hover:text-white transition-colors text-sm">
                    ☑ Интериорно боядисване
                  </Link>
                </li>
                <li>
                  <Link href="/services/exterior" className="text-white/70 hover:text-white transition-colors text-sm">
                    ☑ Външно боядисване
                  </Link>
                </li>
                <li>
                  <Link href="/services/glass" className="text-white/70 hover:text-white transition-colors text-sm">
                    ☑ Остъкляване
                  </Link>
                </li>
                <li>
                  <Link href="/services/restoration" className="text-white/70 hover:text-white transition-colors text-sm">
                    ☑ Ремонт на гипсена дърворезба
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4 border-b-2 border-primary inline-block pb-1">
                ДАННИ ЗА КОНТАКТ
              </h4>
              <div className="space-y-3 text-sm">
                <p className="text-white/90">
                  <strong>RS Painting Group</strong>
                </p>
                <p className="text-white/70">
                  Extended Ooyerhoekseweg 16<br />
                  7207 BJ Zutphen
                </p>
                <p className="text-white/70">
                  Тел.: <a href="tel:0575540147" className="hover:text-white transition-colors">0575 - 540 147</a>
                </p>
                <p className="text-white/70">
                  Поща: <a href="mailto:info@rsschildersgroep.nl" className="hover:text-white transition-colors">info@rsschildersgroep.nl</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-4 text-sm text-white/60">
            <span>© Авторско право</span>
            <span>■</span>
            <span>РС Шилдърсгроеп БВ- Реализация от■ Ефективен</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;