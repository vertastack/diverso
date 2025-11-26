"use client";

import React, { useState } from "react";
import { Phone, CheckCircle, AlertCircle } from "lucide-react";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  description?: string;
  phoneText?: string;
  phoneNumber?: string;
  submitButtonText: string;
  showPhoneBox?: boolean;
  variant?: "default" | "compact";
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  street: string;
  place: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  title,
  subtitle,
  description,
  phoneText,
  phoneNumber,
  submitButtonText,
  showPhoneBox = false,
  variant = "default",
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    place: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Success
      setSubmitStatus({
        type: "success",
        message: "Bedankt! Uw bericht is verzonden. We nemen zo snel mogelijk contact met u op.",
      });

      // Clear form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        street: "",
        place: "",
        message: "",
      });
    } catch (error) {
      // Error
      setSubmitStatus({
        type: "error",
        message: "Er is een fout opgetreden. Probeer het later opnieuw of neem direct contact met ons op.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formClasses =
    variant === "compact"
      ? "space-y-4"
      : "space-y-6";

  return (
    <div className={variant === "compact" ? "" : "max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12"}>
      {/* Header with Title and Phone */}
      {title && (
        <div className={`flex flex-col ${showPhoneBox ? "md:flex-row md:items-start md:justify-between" : ""} gap-6 mb-8`}>
          <div className="flex-1">
            {subtitle && (
              <p className="text-primary text-sm font-semibold uppercase mb-2 tracking-wide">
                {subtitle}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              {title}
            </h2>
            {description && (
              <p className="text-gray-600 leading-relaxed">
                {description}
              </p>
            )}
          </div>
          {showPhoneBox && phoneText && phoneNumber && (
            <div className="flex-shrink-0">
              <div className="border-2 border-dashed border-primary px-6 py-4 inline-flex items-center gap-3">
                <Phone size={24} className="text-primary" />
                <div>
                  <p className="text-primary font-bold text-lg">
                    {phoneText}
                  </p>
                  <a
                    href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                    className="text-neutral-dark font-bold text-xl hover:text-primary transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Status Messages */}
      {submitStatus.type && (
        <div
          className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.type === "success" ? (
            <CheckCircle size={20} className="shrink-0 mt-0.5" />
          ) : (
            <AlertCircle size={20} className="shrink-0 mt-0.5" />
          )}
          <p className="text-sm">{submitStatus.message}</p>
        </div>
      )}

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className={formClasses}>
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Volledige naam *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Volledige naam *"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              E-mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="E-mail *"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Telefoonnummer *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Telefoonnummer *"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label
              htmlFor="street"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Straatnaam en huisnummer
            </label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Straatnaam en huisnummer"
            />
          </div>
          <div>
            <label
              htmlFor="place"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Plaats
            </label>
            <input
              type="text"
              id="place"
              name="place"
              value={formData.place}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Plaats"
            />
          </div>
        </div>

        {/* Message Textarea */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Bericht
          </label>
          <textarea
            id="message"
            name="message"
            rows={variant === "compact" ? 4 : 6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            placeholder="Voer hier uw bericht in..."
          />
        </div>

        {/* Submit Button */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary-red-dark text-white px-10 py-4 font-semibold text-lg transition-colors uppercase w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Verzenden..." : submitButtonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

