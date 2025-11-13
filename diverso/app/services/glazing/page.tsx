import Header from "@/app/shared/components/Header";
import Footer from "@/app/shared/components/Footer";
import {
  Phone,
  Calendar,
  Users,
  Star,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import type { Metadata } from "next";

import SEO from "@/app/shared/components/Seo";
import StrapiService from "@/src/services/strapi.service";
import { getImageUrl, getImageAlt } from "@/app/shared/utils/image";

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

interface GlazingData {
  id: number;
  seo: SEOData;
  pageTitle: string;
  pageDescription: string;
  headerQuote: string;
  mainTitle: string;
  mainContent: string;
  features: Array<{
    id: number;
    text: string;
  }>;
  galleryImages: Array<{
    id: number;
    image: {
      url: string;
      alternativeText?: string;
    };
  }>;
  infoSectionTitle: string;
  infoSectionContent: string;
  ctaTitle: string;
  ctaSubtitle: string;
  phoneNumber: string;
  processSteps: Array<{
    id: number;
    stepNumber: string;
    title: string;
    description: string;
    icon: string;
    bgColor: string;
  }>;
  formTitle: string;
  formSubtitle: string;
  noticeText: string;
}

async function getGlazingData(): Promise<GlazingData | null> {
  try {
    const strapiService = new StrapiService();
    const response = await strapiService.getContent<GlazingData>(
      "diverso-glazing-service",
      {
        populate: {
          seo: {
            populate: {
              metaImage: "*",
            },
          },
          features: "*",
          galleryImages: {
            populate: {
              image: "*",
            },
          },
          processSteps: "*",
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching glazing data:", error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const glazingData = await getGlazingData();

  if (glazingData && glazingData.seo) {
    return {
      title: glazingData.seo.metaTitle,
      description: glazingData.seo.metaDescription,
    };
  }

  // Fallback metadata
  return {
    title: "Остъкляване | Diverso",
    description:
      "Професионално остъкляване за вашия дом или бизнес. Експертни майстори с над 20 години опит в Зутфен и региона.",
  };
}

// Image Slider Component
const GlazingSlider = ({
  images,
}: {
  images: GlazingData["galleryImages"];
}) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {images.map((imageData) => (
          <div key={imageData.id} className="relative h-64 bg-gray-200">
            <img
              src={getImageUrl(imageData.image)}
              alt={getImageAlt(imageData.image, "Остъкляване")}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default async function GlazingPage() {
  const glazingData = await getGlazingData();

  if (!glazingData) {
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

  const seo = glazingData.seo
    ? {
        metaTitle: glazingData.seo.metaTitle,
        metaDescription: glazingData.seo.metaDescription,
        metaImage: glazingData.seo.metaImage || { url: "" },
        metaKeywords: glazingData.seo.metaKeywords || "",
        metaRobots: glazingData.seo.metaRobots || "index, follow",
        metaUrl: glazingData.seo.metaUrl || "https://diverso.com",
      }
    : {
        metaTitle: "Остъкляване | Diverso",
        metaDescription: "Професионални услуги за остъкляване.",
        metaImage: { url: "" },
        metaKeywords: "",
        metaRobots: "index, follow",
        metaUrl: "https://diverso.com",
      };

  return (
    <>
      <SEO seo={seo} />
      <Header />

      {/* Red Header Quote */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <p className="text-white text-center text-lg md:text-xl font-medium italic">
            {glazingData.headerQuote}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-8">
                {glazingData.mainTitle}
              </h1>

              <div className="space-y-6 text-neutral-charcoal leading-relaxed">
                {glazingData.mainContent
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>

            {/* Right Column - Features Box */}
            <div className="lg:col-span-1">
              <div className="bg-secondary p-8 text-white sticky top-8">
                <ul className="space-y-4">
                  {glazingData.features.map((feature, index) => (
                    <li
                      key={feature.id}
                      className={`flex items-start gap-3 text-white ${
                        index < glazingData.features.length - 1
                          ? "border-b border-white/20 pb-4"
                          : ""
                      }`}
                    >
                      <CheckCircle size={20} className="mt-1 shrink-0" />
                      <span className="text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exterior Images Slider */}
      <GlazingSlider images={glazingData.galleryImages} />

      {/* Info Section */}
      <section className="py-16 bg-neutral-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
            {glazingData.infoSectionTitle}
          </h2>
          <div className="space-y-4 text-neutral-charcoal leading-relaxed max-w-5xl">
            {glazingData.infoSectionContent
              .split("\n\n")
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div>
              <p className="text-lg md:text-xl font-medium mb-2">
                {glazingData.ctaTitle}
              </p>
              <p className="text-lg">{glazingData.ctaSubtitle}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <div className="flex items-center gap-2 bg-white text-primary px-5 py-3 border-2 border-dashed border-white">
                <Phone size={20} />
                <a
                  href={`tel:${glazingData.phoneNumber.replace(/\s/g, "")}`}
                  className="font-bold text-lg hover:underline"
                >
                  {glazingData.phoneNumber}
                </a>
              </div>
              <button className="bg-secondary hover:bg-secondary-teal-dark text-white px-6 py-3 font-semibold transition-colors">
                СВЪРЖЕТЕ СЕ С НАС
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-neutral-gray-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {glazingData.processSteps.map((step, index) => {
              const isSecondary = step.bgColor === "secondary";
              const IconComponent =
                step.icon === "calendar"
                  ? Calendar
                  : step.icon === "users"
                    ? Users
                    : Star;

              return (
                <div key={step.id} className="relative">
                  <div
                    className={`${isSecondary ? "bg-secondary text-white" : "bg-white text-neutral-dark"} p-8 text-center relative`}
                  >
                    <div
                      className={`absolute top-0 left-0 w-3 h-3 ${isSecondary ? "bg-white" : "bg-primary"}`}
                    ></div>
                    <div
                      className={`absolute bottom-0 right-0 w-3 h-3 ${isSecondary ? "bg-white" : "bg-primary"}`}
                    ></div>
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div
                        className={`w-16 h-16 rounded-full border-2 border-dashed ${isSecondary ? "border-white bg-secondary" : "border-neutral-charcoal bg-white"} flex items-center justify-center`}
                      >
                        <span
                          className={`text-2xl font-bold ${isSecondary ? "text-white" : "text-neutral-dark"}`}
                        >
                          {step.stepNumber}
                        </span>
                      </div>
                    </div>
                    <div className="mt-8 mb-6 flex justify-center">
                      <IconComponent
                        size={48}
                        className={
                          isSecondary ? "text-white" : "text-neutral-dark"
                        }
                      />
                    </div>
                    {index < glazingData.processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <div className="text-neutral-gray text-4xl">→</div>
                      </div>
                    )}
                    <h3
                      className={`text-xl font-bold mb-4 ${isSecondary ? "text-white" : "text-neutral-dark"}`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${isSecondary ? "text-white" : "text-neutral-charcoal"}`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                  {glazingData.formTitle}
                </h2>
                <p className="text-neutral-charcoal mb-8">
                  {glazingData.formSubtitle}
                </p>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Пълно име *"
                      required
                      className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary"
                    />
                    <input
                      type="email"
                      placeholder="Имейл *"
                      required
                      className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary"
                    />
                    <input
                      type="tel"
                      placeholder="Телефонен номер *"
                      required
                      className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Име на улица и номер на къща *"
                      required
                      className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary"
                    />
                    <input
                      type="text"
                      placeholder="Място на пребиваване *"
                      required
                      className="border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary"
                    />
                  </div>
                  <textarea
                    placeholder="Всякакви коментари/пожелания"
                    rows={4}
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-primary resize-none"
                  ></textarea>
                </form>
              </div>

              <div className="lg:w-1/3 flex flex-col justify-between">
                <div className="border-2 border-dashed border-primary p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <MessageSquare
                      className="text-primary shrink-0 mt-1"
                      size={24}
                    />
                    <p className="text-primary font-bold text-lg">
                      ДИРЕКТЕН КОНТАКТ? ПОПИТАЙТЕ НИ!
                    </p>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-red-dark text-white px-8 py-4 font-bold text-lg transition-colors w-full"
                >
                  ИЗПРАТИ
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Notice */}
          <div className="bg-success text-white p-4 mt-8 flex items-start gap-3">
            <MessageSquare size={20} className="shrink-0 mt-1" />
            <p className="text-sm">
              <strong>{glazingData.noticeText}</strong>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
