import React from "react";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral text-white">
      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h4 className="text-lg font-bold mb-4 border-b-2 border-primary inline-block pb-1">
                Diverso
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Бояджийска компания, базирана в Зутфен, предлагаща боядисване,
                реставрация, ремонт на гипсена дърворезба, шпакловане,
                довършителни работи по стените и остъкляване. Повече от 20
                години, нашият доверен партньор и лице за контакт за най-добрите
                бояджийски услуги: продължаваме напред заедно.
              </p>
            </div>

            {/* Menu */}
            <div>
              <h4 className="text-lg font-bold mb-4 border-b-2 border-primary inline-block pb-1">
                МЕНЮ
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    ☑ Начало
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/maintenance-plan"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    ☑ Многогодишен план за поддръжка
                  </Link>
                </li>
                <li>
                  <Link
                    href="/references"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    ☑ Референции
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trading"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    ☑ Търговски
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    ☑ За нас
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
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
                  <Link
                    href="/services/interior"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    ☑ Интериорно боядисване
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/exterior"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    ☑ Външно боядисване
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/glazing"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    ☑ Остъкляване
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/wood-repair"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
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
                  Extended Ooyerhoekseweg 16
                  <br />
                  7207 BJ Zutphen
                </p>
                <p className="text-white/70">
                  Тел.:{" "}
                  <a
                    href="tel:0575540147"
                    className="hover:text-white transition-colors"
                  >
                    0575 - 540 147
                  </a>
                </p>
                <p className="text-white/70">
                  Поща:{" "}
                  <a
                    href="mailto:info@rsschildersgroep.nl"
                    className="hover:text-white transition-colors"
                  >
                    info@rsschildersgroep.nl
                  </a>
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
