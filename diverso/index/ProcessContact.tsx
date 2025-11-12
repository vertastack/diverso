"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Users, Star, MessageSquare } from "lucide-react";
import StrapiService from "@/src/services/strapi.service";

interface ProcessStep {
  id: number;
  number: string;
  icon: string;
  title: string;
  description: string;
}

interface ProcessContactData {
  id: number;
  processSteps: ProcessStep[];
  formTitle: string;
  formSubtitle: string;
  formDescription: string;
  ctaBoxTitle: string;
  submitButtonText: string;
  noticeText: string;
}

const ProcessContactSection: React.FC = () => {
  const [processContactData, setProcessContactData] =
    useState<ProcessContactData | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    street: "",
    city: "",
    comments: "",
  });

  useEffect(() => {
    const fetchProcessContactData = async () => {
      try {
        const strapiService = new StrapiService();
        const response = await strapiService.getContent<ProcessContactData>(
          "diverso/process-contact",
          {
            populate: {
              processSteps: "*",
            },
          },
        );
        setProcessContactData(response.data);
      } catch (error) {
        console.error("Error fetching process contact data:", error);
      }
    };

    fetchProcessContactData();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "calendar":
        return <Calendar size={48} className="text-neutral-dark" />;
      case "users":
        return <Users size={48} className="text-neutral-dark" />;
      case "star":
        return <Star size={48} className="text-neutral-dark" />;
      default:
        return <Calendar size={48} className="text-neutral-dark" />;
    }
  };

  if (!processContactData) {
    return (
      <section className="py-16 bg-neutral-gray-light">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">Зареждане...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-neutral-gray-light">
      <div className="container mx-auto px-4">
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {processContactData.processSteps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Card */}
              <div className="bg-white p-8 text-center relative">
                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-3 h-3 bg-primary"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary"></div>

                {/* Step Number */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-neutral-charcoal bg-white flex items-center justify-center">
                    <span className="text-2xl font-bold text-neutral-dark">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div className="mt-8 mb-6 flex justify-center">
                  {getIconComponent(step.icon)}
                </div>

                {/* Arrow (only between steps, not after last) */}
                {index < processContactData.processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="text-neutral-gray text-4xl">→</div>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-dark mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-charcoal text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Form Header */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                {processContactData.formTitle}
              </h2>
              <p className="text-neutral-charcoal mb-2">
                {processContactData.formSubtitle}
              </p>
              <p className="text-neutral-charcoal mb-8">
                {processContactData.formDescription}
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Пълно име *"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="border border-neutral-gray px-4 py-3 focus:outline-none focus:border-primary"
                  />
                  <input
                    type="email"
                    name="lastName"
                    placeholder="Имейл *"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="border border-neutral-gray px-4 py-3 focus:outline-none focus:border-primary"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Телефонен номер *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="border border-neutral-gray px-4 py-3 focus:outline-none focus:border-primary"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="street"
                    placeholder="Име на улица и номер на къща *"
                    value={formData.street}
                    onChange={handleInputChange}
                    required
                    className="border border-neutral-gray px-4 py-3 focus:outline-none focus:border-primary"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="Място на пребиваване *"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="border border-neutral-gray px-4 py-3 focus:outline-none focus:border-primary"
                  />
                </div>
                <textarea
                  name="comments"
                  placeholder="Всякакви коментари/пожелания"
                  value={formData.comments}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full border border-neutral-gray px-4 py-3 focus:outline-none focus:border-primary resize-none"
                ></textarea>
              </form>
            </div>

            {/* Right Side - CTA Box and Submit Button */}
            <div className="lg:w-1/3 flex flex-col justify-between">
              {/* Direct Contact CTA */}
              <div className="border-2 border-dashed border-primary p-6 mb-6">
                <div className="flex items-start gap-3">
                  <MessageSquare
                    className="text-primary shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <p className="text-primary font-bold text-lg mb-2">
                      {processContactData.ctaBoxTitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-primary hover:bg-primary-red-dark text-white px-8 py-4 font-bold text-lg transition-colors w-full"
              >
                {processContactData.submitButtonText}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Notice Bar */}
        <div className="bg-success text-white p-4 mt-8 flex items-start gap-3">
          <MessageSquare size={20} className="shrink-0 mt-1" />
          <p className="text-sm">
            <strong>{processContactData.noticeText}</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessContactSection;
