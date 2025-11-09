import React from 'react';
import Link from 'next/link';
import { Phone, Mail, Facebook, Linkedin, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Contact Info */}
            <div className="flex items-center gap-6 text-sm">
              <a 
                href="tel:0575540147" 
                className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
              >
                <Phone size={16} className="text-primary" />
                <span>Обадете ни се на: 0575 - 540 147</span>
              </a>
              <a 
                href="mailto:info@rsschildersgroep.nl" 
                className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
              >
                <Mail size={16} className="text-primary" />
                <span>info@rsschildersgroep.nl</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="w-12 h-12 bg-primary rounded flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">RS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 leading-none">SCHILDERS</span>
                <span className="text-2xl font-bold text-gray-900 leading-none">GROEP</span>
              </div>
            </Link>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                🏠
              </Link>
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Услуги
              </Link>
              <Link 
                href="/trading" 
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Търговски
              </Link>
              <Link 
                href="/references" 
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Референции
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                За нас
              </Link>
              <Link 
                href="/free-place" 
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Свободно място
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Контакт
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-0">
              <button className="bg-secondary text-white px-6 py-3 font-medium hover:bg-secondary-teal-dark transition-colors">
                &gt;
              </button>
              <button className="bg-primary text-white px-6 py-3 font-medium hover:bg-primary-red-dark transition-colors">
                ЦИТАТ
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;