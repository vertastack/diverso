'use client';

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    street: '',
    place: '',
    workType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const locations = [
    { city: 'Зютфен', company: 'РС Шилдърсгроеп БВ', phone: '0575 - 540 147' },
    { city: 'Ворден', company: 'Пейтърс Картини', phone: '0575 - 553 999' },
    { city: 'Лохем', company: 'Соер Картини', phone: '0573 - 258 801' },
    { city: 'Ворден', company: 'Картини на селски стол', phone: '0575 - 551 567' },
    { city: 'Еефде', company: 'Картини на Лиебранд', phone: '0575 - 540 147' },
    { city: 'Уорнсвелд', company: 'Училищни картини', phone: '0575 - 523 409' },
    { city: 'Предна част', company: 'Картини на Ван Бошейде', phone: '0575 - 501 406' },
    { city: 'Харло', company: 'Бояджийски работи Хасело', phone: '0545 - 261 246' },
  ];

  return (
    <>
      <Header />
      
      {/* Red Header Banner */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <p className="text-white text-center text-lg md:text-xl leading-relaxed">
            Вашият специалист по боядисване, реставрация, ремонт на гниеща дървесина, довършителни работи по стени и остъкляване. Един единствен, всеотдаен партньор и лице за контакт: да вървим напред заедно.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
            {/* Header with Title and Phone */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                  Свържете се с нас
                </h1>
                <p className="text-gray-600 leading-relaxed">
                  Любопитни ли сте за възможностите или искате да насрочите безплатна среща на място без обвързване? Оставете вашите данни и ние ще се свържем с вас.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="border-2 border-dashed border-primary px-6 py-4 inline-flex items-center gap-3">
                  <Phone size={24} className="text-primary" />
                  <div>
                    <p className="text-primary font-bold text-lg">ОБАДЕТЕ НИ СЕ:</p>
                    <a 
                      href="tel:0575540147" 
                      className="text-neutral-dark font-bold text-xl hover:text-primary transition-colors"
                    >
                      0575 - 540 147
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Пълно име *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Пълно име *"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Имейл *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Имейл *"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Телефонен номер *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Телефонен номер *"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-2">
                    Име на улица и номер на къща
                  </label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Име на улица и номер на къща"
                  />
                </div>
                <div>
                  <label htmlFor="place" className="block text-sm font-medium text-gray-700 mb-2">
                    Име на място
                  </label>
                  <input
                    type="text"
                    id="place"
                    name="place"
                    value={formData.place}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Име на място"
                  />
                </div>
              </div>

              {/* Row 3 - Work Type */}
              <div>
                <label htmlFor="workType" className="block text-sm font-medium text-gray-700 mb-2">
                  Type werkzaamheden
                </label>
                <select
                  id="workType"
                  name="workType"
                  value={formData.workType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
                >
                  <option value="">Изберете тип работа</option>
                  <option value="interior">Интериорно боядисване</option>
                  <option value="exterior">Външно боядисване</option>
                  <option value="restoration">Реставрация</option>
                  <option value="glass">Остъкляване</option>
                  <option value="other">Друго</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Съобщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Въведете съобщението си тук..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-red-dark text-white px-10 py-4 font-semibold text-lg transition-colors uppercase w-full md:w-auto"
                >
                  СВЪРЖЕТЕ СЕ С НАС
                </button>
                <p className="text-gray-600 text-sm">
                  Ще се свържем с вас в рамките на 24 часа.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Red Separator Banner */}
      <section className="bg-primary py-2"></section>

      {/* Locations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Left Column - Locations List */}
            <div className="lg:col-span-2">
              <p className="text-primary text-sm font-semibold uppercase mb-2">
                МНОЖЕСТВО РАБОТНИ ЗОНИ И ЕДНО ПОСТОЯННО ЛИЦЕ ЗА КОНТАКТ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6 uppercase">
                НАШИТЕ ЛОКАЦИИ
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Намерете нашите обслужвани райони и местоположения по-долу. RS Schildersgroep BV разшири обслужвания си район през годините чрез няколко придобивания на местоположенията, изброени по-долу. Екип от квалифицирани бояджии и единна точка за контакт. Продължаваме напред заедно.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <MapPin size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-bold text-neutral-dark text-lg mb-1">{location.city}</h3>
                      <p className="text-gray-600 text-sm mb-2">{location.company}</p>
                      <a 
                        href={`tel:${location.phone.replace(/\s/g, '')}`}
                        className="text-primary hover:text-primary-red-dark transition-colors font-medium"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image with CTA */}
            <div className="lg:col-span-1">
              <div className="relative h-full min-h-[500px] rounded-lg overflow-hidden">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(/images/contact-building.jpg)',
                    filter: 'brightness(0.7)'
                  }}
                />
                <div className="absolute inset-0 bg-black/40" />
                
                {/* CTA Box */}
                <div className="relative h-full flex items-end p-6">
                  <div className="bg-black/70 backdrop-blur-sm p-6 rounded-lg w-full">
                    <p className="text-white font-bold text-lg mb-4">
                      Нуждаете се от съвет или искате да си уговорите час без обвързване?
                    </p>
                    <p className="text-white mb-4">Обадете ни се на:</p>
                    <div className="border-2 border-dashed border-primary px-4 py-3 inline-flex items-center gap-3">
                      <Phone size={24} className="text-white" />
                      <a 
                        href="tel:0575540147" 
                        className="text-white font-bold text-2xl hover:underline"
                      >
                        0575 - 540 147
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

