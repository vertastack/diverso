'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, Facebook, Linkedin, MessageCircle, Menu, X, Home, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

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

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-0">
              <Link href="/contact" className="bg-secondary text-white px-6 py-3 font-medium hover:bg-secondary-teal-dark transition-colors inline-flex items-center justify-center">
                &gt;
              </Link>
              <Link href="/contact" className="bg-primary text-white px-6 py-3 font-medium hover:bg-primary-red-dark transition-colors inline-flex items-center justify-center">
                Оферта
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={closeMobileMenu}
        />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-neutral-dark shadow-xl overflow-y-auto transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={closeMobileMenu}
              className="p-2 text-white hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="px-6 py-4">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 text-white py-4 border-b border-white/10 hover:text-primary transition-colors"
            >
              <Home size={20} />
              <span>Начало</span>
            </Link>

            {/* Services with Dropdown */}
            <div className="border-b border-white/10">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full text-white py-4 hover:text-primary transition-colors"
              >
                <span>Услуги</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isServicesOpen && (
                <div className="pl-8 pb-4 space-y-2 animate-fadeIn">
                  <Link
                    href="/services/interior"
                    onClick={closeMobileMenu}
                    className="block text-white/80 hover:text-primary transition-colors py-2"
                  >
                    Интериорно боядисване
                  </Link>
                  <Link
                    href="/services/exterior"
                    onClick={closeMobileMenu}
                    className="block text-white/80 hover:text-primary transition-colors py-2"
                  >
                    Външно боядисване
                  </Link>
                  <Link
                    href="/services/glass"
                    onClick={closeMobileMenu}
                    className="block text-white/80 hover:text-primary transition-colors py-2"
                  >
                    Остъкляване
                  </Link>
                  <Link
                    href="/services/restoration"
                    onClick={closeMobileMenu}
                    className="block text-white/80 hover:text-primary transition-colors py-2"
                  >
                    Ремонт на гипсена дърворезба
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/trading"
              onClick={closeMobileMenu}
              className="block text-white py-4 border-b border-white/10 hover:text-primary transition-colors"
            >
              Търговски
            </Link>

            <Link
              href="/references"
              onClick={closeMobileMenu}
              className="block text-white py-4 border-b border-white/10 hover:text-primary transition-colors"
            >
              Референции
            </Link>

            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="block text-white py-4 border-b border-white/10 hover:text-primary transition-colors"
            >
              За нас
            </Link>

            <Link
              href="/free-place"
              onClick={closeMobileMenu}
              className="block text-white py-4 border-b border-white/10 hover:text-primary transition-colors"
            >
              Свободно място
            </Link>

            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="block text-white py-4 border-b border-white/10 hover:text-primary transition-colors"
            >
              Контакт
            </Link>
          </nav>

          {/* Contact Information */}
          <div className="px-6 py-8 mt-auto">
            <h3 className="text-white font-bold text-lg mb-4">Информация за контакт</h3>
            <div className="space-y-2 text-white/90 text-sm">
              <p>Extended Ooyerhoekseweg 16</p>
              <p>7207 BJ Zutphen</p>
              <a
                href="tel:0575540147"
                className="block hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                0575 - 540 147
              </a>
              <a
                href="mailto:info@rsschildersgroep.nl"
                className="block hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                info@rsschildersgroep.nl
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;