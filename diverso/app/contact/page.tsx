"use client";

import Header from "@/app/shared/components/Header";
import Footer from "@/app/shared/components/Footer";
import { Phone, MapPin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import SEO from "../shared/components/Seo";
import StrapiService from "@/src/services/strapi.service";

interface SEOData {
  metaTitle: string;
  metaDescription: string;
  metaImage?: {
    url: string;
  };
  metaKeywords?: string;
  metaRobots?: string;
  metaUrl?: string;
}

interface ContactData {
  id: number;
  seo: SEOData;
  headerQuote: string;
  pageTitle: string;
  pageDescription: string;
  phoneText: string;
  phoneNumber: string;
  formTitle: string;
  formSubtitle: string;
  responseTime: string;
  locationSectionTitle: string;
  locationDescription: string;
  companyInfo: {
    city: string;
    company: string;
    phone: string;
    address: string;
    postalCode: string;
    email: string;
  };
  ctaText: string;
  ctaSubtext: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    place: "",
    workType: "",
    message: "",
  });

  const [contactData, setContactData] = useState<ContactData | null>(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const strapiService = new StrapiService();
        const response = await strapiService.getContent<ContactData>(
          "diverso-contact",
          {
            populate: {
              seo: {
                populate: {
                  metaImage: "*",
                },
              },
              companyInfo: "*",
            },
          },
        );
        setContactData(response.data);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchContactData();
  }, []);

  if (!contactData) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-gray-600">Няма данни за зареждане.</p>
        </div>
        <Footer />
      </>
    );
  }

  const seo = contactData.seo
    ? {
        metaTitle: contactData.seo.metaTitle,
        metaDescription: contactData.seo.metaDescription,
        metaImage: contactData.seo.metaImage || { url: "" },
        metaKeywords: contactData.seo.metaKeywords || "",
        metaRobots: contactData.seo.metaRobots || "index, follow",
        metaUrl: contactData.seo.metaUrl || "https://diverso.com",
      }
    : {
        metaTitle: "Контакти | Diverso",
        metaDescription:
          "Свържете се с нас за професионални боядисвани услуги.",
        metaImage: { url: "" },
        metaKeywords: "",
        metaRobots: "index, follow",
        metaUrl: "https://diverso.com",
      };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const location = contactData.companyInfo;

  return (
    <>
      <SEO seo={seo} />
      <Header />

      {/* Red Header Banner */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <p className="text-white text-center text-lg md:text-xl leading-relaxed">
            {contactData.headerQuote}
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
                  {contactData.pageTitle}
                </h1>
                <p className="text-gray-600 leading-relaxed">
                  {contactData.pageDescription}
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="border-2 border-dashed border-primary px-6 py-4 inline-flex items-center gap-3">
                  <Phone size={24} className="text-primary" />
                  <div>
                    <p className="text-primary font-bold text-lg">
                      {contactData.phoneText}
                    </p>
                    <a
                      href={`tel:${contactData.phoneNumber.replace(/\s/g, "")}`}
                      className="text-neutral-dark font-bold text-xl hover:text-primary transition-colors"
                    >
                      {contactData.phoneNumber}
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
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
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
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
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
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
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
                  <label
                    htmlFor="street"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
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
                  <label
                    htmlFor="place"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
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
                <label
                  htmlFor="workType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
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
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
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
                  {contactData.formTitle}
                </button>
                <p className="text-gray-600 text-sm">
                  {contactData.responseTime}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Red Separator Banner */}
      <section className="bg-primary py-2"></section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Location Info */}
            <div>
              <p className="text-primary text-sm font-semibold uppercase mb-2">
                ЕДНО ПОСТОЯННО ЛИЦЕ ЗА КОНТАКТ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6 uppercase">
                {contactData.locationSectionTitle}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                {contactData.locationDescription}
              </p>

              {/* Location Card */}
              <div className="bg-gray-50 border-2 border-primary/20 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-neutral-dark text-2xl mb-2">
                      {location.city}
                    </h3>
                    <p className="text-gray-600 text-lg mb-4">
                      {location.company}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={20}
                      className="text-primary flex-shrink-0 mt-1"
                    />
                    <div>
                      <p className="text-gray-700 font-medium">
                        {location.address}
                      </p>
                      <p className="text-gray-700">{location.postalCode}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-primary flex-shrink-0" />
                    <a
                      href={`tel:${location.phone.replace(/\s/g, "")}`}
                      className="text-primary hover:text-primary-red-dark transition-colors font-bold text-lg"
                    >
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-primary flex-shrink-0" />
                    <a
                      href={`mailto:${location.email}`}
                      className="text-primary hover:text-primary-red-dark transition-colors font-medium"
                    >
                      {location.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image with CTA */}
            <div>
              <div className="relative h-full min-h-[500px] rounded-lg overflow-hidden">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url(/images/contact-building.jpg)",
                    filter: "brightness(0.7)",
                  }}
                />
                <div className="absolute inset-0 bg-black/40" />

                {/* CTA Box */}
                <div className="relative h-full flex items-end p-6">
                  <div className="bg-black/70 backdrop-blur-sm p-6 rounded-lg w-full">
                    <p className="text-white font-bold text-lg mb-4">
                      {contactData.ctaText}
                    </p>
                    <p className="text-white mb-4">{contactData.ctaSubtext}</p>
                    <div className="border-2 border-dashed border-primary px-4 py-3 inline-flex items-center gap-3">
                      <Phone size={24} className="text-white" />
                      <a
                        href={`tel:${contactData.phoneNumber.replace(/\s/g, "")}`}
                        className="text-white font-bold text-2xl hover:underline"
                      >
                        {contactData.phoneNumber}
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
