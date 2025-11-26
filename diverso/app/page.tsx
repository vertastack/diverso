import Header from "@/app/shared/components/Header";
import Footer from "@/app/shared/components/Footer";
import SEO from "@/app/shared/components/Seo";
import StrapiService from "@/src/services/strapi.service";
import { getImageUrl, getImageAlt } from "@/app/shared/utils/image";
import type { Metadata } from "next";

import Link from "next/link";
import {
  Phone,
  CheckCircle,
  Award,
  Calendar,
  Users,
  Star,
  MessageSquare,
} from "lucide-react";

// Interfaces for all sections
interface HeroSlide {
  id: number;
  image: {
    url: string;
    alternativeText?: string;
  };
  title: string;
  rating: string;
  description: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  image: {
    url: string;
    alternativeText?: string;
  };
  link: string;
}

interface Benefit {
  id: number;
  text: string;
}

interface ImageSlide {
  id: number;
  image: {
    url: string;
    alternativeText?: string;
  };
}

interface Testimonial {
  id: number;
  name: string;
  date: string;
  rating: number;
  review: string;
  avatar: {
    url: string;
    alternativeText?: string;
  };
  verified: boolean;
}

interface ProcessStep {
  id: number;
  number: string;
  icon: string;
  title: string;
  description: string;
}

interface Project {
  id: number;
  title: string;
  category: "exterior" | "interior";
  image: {
    url: string;
    alternativeText?: string;
  };
}

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

interface HomeData {
  id: number;
  seo: SEOData;
  // Hero Section
  heroSlides: HeroSlide[];
  heroBottomBarText: string;
  heroPhoneText: string;
  heroPhoneNumber: string;
  heroCtaButtonText: string;
  // Services Section
  servicesSubtitle: string;
  servicesTitle: string;
  servicesDescription: string;
  services: Service[];
  // About Section
  aboutSubtitle: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutTeamImage: {
    url: string;
    alternativeText?: string;
  };
  aboutReviewsCardTitle: string;
  aboutAverageRating: string;
  aboutRatingStars: number;
  aboutReviewsLinkText: string;
  aboutReviewsLinkUrl: string;
  aboutBenefits: Benefit[];
  aboutCtaButtonText: string;
  aboutCtaButtonUrl: string;
  // CTA Section
  ctaImages: ImageSlide[];
  ctaMainQuestion: string;
  ctaPhoneText: string;
  ctaPhoneNumber: string;
  ctaOrText: string;
  ctaButtonText: string;
  // Testimonials Section
  testimonialsSubtitle: string;
  testimonialsTitle: string;
  testimonialsDescription: string;
  testimonialsGoogleReviewsText: string;
  testimonialsGoogleReviewsUrl: string;
  testimonialsTrustpilotReviewsText: string;
  testimonialsTrustpilotReviewsUrl: string;
  testimonials: Testimonial[];
  // Process Contact Section
  processSteps: ProcessStep[];
  processFormTitle: string;
  processFormSubtitle: string;
  processFormDescription: string;
  processCtaBoxTitle: string;
  processSubmitButtonText: string;
  processNoticeText: string;
  // Gallery Section
  gallerySubtitle: string;
  galleryTitle: string;
  galleryDescription: string;
  galleryShowAllButtonText: string;
  galleryExteriorButtonText: string;
  galleryInteriorButtonText: string;
  galleryLoadMoreButtonText: string;
  galleryProjects: Project[];
}

async function getHomeData(): Promise<HomeData | null> {
  try {
    const strapiService = new StrapiService();
    const response = await strapiService.getContent<HomeData>("diverso-home", {
      populate: {
        seo: {
          populate: {
            metaImage: "*",
          },
        },
        heroSlides: {
          populate: {
            image: "*",
          },
        },
        services: {
          populate: {
            image: "*",
          },
        },
        aboutTeamImage: "*",
        aboutBenefits: "*",
        ctaImages: {
          populate: {
            image: "*",
          },
        },
        testimonials: {
          populate: {
            avatar: "*",
          },
        },
        processSteps: "*",
        galleryProjects: {
          populate: {
            image: "*",
          },
        },
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching home data:", error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const homeData = await getHomeData();

  if (homeData && homeData.seo) {
    return {
      title: homeData.seo.metaTitle,
      description: homeData.seo.metaDescription,
    };
  }

  // Fallback metadata
  return {
    title: "Welcome to Diverso",
    description: "Diverso Description",
  };
}

export default async function HomePage() {
  const homeData = await getHomeData();

  if (!homeData) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-gray-600">Geen gegevens om te laden.</p>
        </div>
        <Footer />
      </>
    );
  }

  const seo = homeData.seo
    ? {
        metaTitle: homeData.seo.metaTitle,
        metaDescription: homeData.seo.metaDescription,
        metaImage: homeData.seo.metaImage || { url: "" },
        metaKeywords: homeData.seo.metaKeywords || "",
        metaRobots: homeData.seo.metaRobots || "index, follow",
        metaUrl: homeData.seo.metaUrl || "https://diverso.com",
      }
    : {
        metaTitle: "Welcome to Diverso",
        metaDescription: "Diverso Description",
        metaImage: { url: "" },
        metaKeywords: "",
        metaRobots: "index, follow",
        metaUrl: "https://diverso.com",
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

  return (
    <>
      <SEO seo={seo} />
      <Header />

      {/* Hero Section */}
      {homeData.heroSlides && homeData.heroSlides.length > 0 && (
        <section className="relative">
          <div className="relative h-[600px] lg:h-[700px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${getImageUrl(homeData.heroSlides[0].image)})`,
                filter: "brightness(0.7)",
              }}
            />
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="max-w-3xl text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  {homeData.heroSlides[0].title}
                </h1>
                <p className="text-lg md:text-xl mb-6 opacity-90">
                  {homeData.heroSlides[0].rating}
                </p>
                <p className="text-base md:text-lg mb-8 leading-relaxed max-w-2xl">
                  {homeData.heroSlides[0].description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="bg-white text-neutral-dark px-6 py-4 inline-flex items-center gap-3 border-2 border-dashed border-neutral-charcoal">
                    <Phone size={24} className="text-neutral-dark" />
                    <div>
                      <p className="text-sm font-medium">
                        Neem direct contact met ons op
                      </p>
                      <a
                        href={`tel:${homeData.heroPhoneNumber.replace(/\s/g, "")}`}
                        className="text-xl font-bold hover:text-primary transition-colors"
                      >
                        {homeData.heroPhoneNumber}
                      </a>
                    </div>
                  </div>
                  <button className="bg-success hover:bg-success-dark text-white px-8 py-4 font-semibold text-lg transition-colors duration-300 inline-flex items-center justify-center">
                    {homeData.heroCtaButtonText} &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Red Bar */}
          <div className="bg-primary py-6">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
                <p className="text-lg md:text-xl font-medium text-center md:text-left">
                  {homeData.heroBottomBarText}
                </p>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-lg font-medium">
                    {homeData.heroPhoneText}
                  </span>
                  <div className="flex items-center gap-2 bg-white text-primary px-4 py-2">
                    <Phone size={20} />
                    <a
                      href={`tel:${homeData.heroPhoneNumber.replace(/\s/g, "")}`}
                      className="font-bold text-lg hover:underline"
                    >
                      {homeData.heroPhoneNumber}
                    </a>
                  </div>
                  <span className="text-lg">of</span>
                  <button className="bg-secondary hover:bg-secondary-teal-dark text-white px-6 py-2 font-semibold transition-colors">
                    neem contact met ons op.
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {homeData.services && (
        <section className="py-16 bg-neutral-gray-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <p className="text-primary text-sm font-semibold uppercase mb-4 tracking-wide">
                {homeData.servicesSubtitle}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
                {homeData.servicesTitle}
              </h2>
              <div
                className="space-y-4 text-neutral-charcoal"
                dangerouslySetInnerHTML={{
                  __html: homeData.servicesDescription,
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {homeData.services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white group hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={getImageUrl(service.image)}
                      alt={getImageAlt(service.image, service.title)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-dark mb-4">
                      {service.title}
                    </h3>
                    <p className="text-neutral-charcoal text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-primary font-semibold text-sm hover:text-primary-red-dark transition-colors group"
                    >
                      <span className="mr-2">■</span>
                      <span className="border-b-2 border-primary group-hover:border-primary-red-dark">
                        Lees meer
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[500px] w-full">
                <img
                  src={getImageUrl(homeData.aboutTeamImage)}
                  alt={getImageAlt(homeData.aboutTeamImage, "Diverso Team")}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 bg-success text-white p-6 max-w-sm shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-3 shrink-0">
                    <Award className="text-success" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {homeData.aboutReviewsCardTitle}
                    </h3>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(homeData.aboutRatingStars)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-sm font-medium">
                      {homeData.aboutAverageRating}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href={homeData.aboutReviewsLinkUrl}
                  className="text-neutral-charcoal hover:text-primary transition-colors text-sm"
                >
                  {homeData.aboutReviewsLinkText}
                </Link>
              </div>
            </div>

            <div>
              <div className="mb-8">
                <div className="w-16 h-1 bg-primary mb-4"></div>
                <p className="text-primary text-sm font-semibold uppercase mb-4 tracking-wide">
                  {homeData.aboutSubtitle}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
                  {homeData.aboutTitle}
                </h2>
                <div
                  className="text-neutral-charcoal leading-relaxed mb-6 space-y-4"
                  dangerouslySetInnerHTML={{
                    __html: homeData.aboutDescription,
                  }}
                />
              </div>

              <div className="space-y-4 mb-8">
                {homeData.aboutBenefits.map((benefit) => (
                  <div key={benefit.id} className="flex items-start gap-3">
                    <CheckCircle
                      className="text-primary shrink-0 mt-1"
                      size={20}
                    />
                    <p className="text-neutral-charcoal">{benefit.text}</p>
                  </div>
                ))}
              </div>

              <Link
                href={homeData.aboutCtaButtonUrl}
                className="inline-flex items-center border-2 border-dashed border-primary text-primary px-6 py-3 font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                <span className="mr-2">■</span>
                <span>{homeData.aboutCtaButtonText}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {homeData.ctaImages && (
        <section className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 h-[350px]">
            {homeData.ctaImages.slice(0, 3).map((slide) => (
              <div key={slide.id} className="relative">
                <img
                  src={getImageUrl(slide.image)}
                  alt={getImageAlt(slide.image, "CTA Image")}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="bg-primary py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center gap-6 text-white">
                <p className="text-lg md:text-xl text-center max-w-4xl leading-relaxed">
                  {homeData.ctaMainQuestion}
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-base font-medium">
                    {homeData.ctaPhoneText}
                  </span>
                  <div className="flex items-center gap-2 bg-white text-primary px-5 py-3 border-2 border-dashed border-white">
                    <Phone size={20} />
                    <a
                      href={`tel:${homeData.ctaPhoneNumber.replace(/\s/g, "")}`}
                      className="font-bold text-lg hover:underline"
                    >
                      {homeData.ctaPhoneNumber}
                    </a>
                  </div>
                  <span className="text-base">{homeData.ctaOrText}</span>
                  <button className="bg-transparent hover:bg-white hover:text-primary border-2 border-white text-white px-6 py-3 font-semibold transition-all duration-300 underline">
                    {homeData.ctaButtonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {homeData.testimonials && (
        <section className="py-16 bg-neutral-gray-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <p className="text-primary text-sm font-semibold uppercase mb-4 tracking-wide">
                  {homeData.testimonialsSubtitle}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
                  {homeData.testimonialsTitle}
                </h2>
                <p className="text-neutral-charcoal leading-relaxed mb-8">
                  {homeData.testimonialsDescription}
                </p>

                <div className="space-y-4">
                  <a
                    href={homeData.testimonialsGoogleReviewsUrl}
                    className="flex items-center justify-center gap-3 border-2 border-dashed border-neutral-charcoal text-neutral-dark px-6 py-3 font-semibold hover:bg-neutral-dark hover:text-white hover:border-neutral-dark transition-all duration-300"
                  >
                    <span>{homeData.testimonialsGoogleReviewsText}</span>
                    <span className="text-xl">G</span>
                  </a>
                  <a
                    href={homeData.testimonialsTrustpilotReviewsUrl}
                    className="flex items-center justify-center gap-3 border-2 border-dashed border-neutral-charcoal text-neutral-dark px-6 py-3 font-semibold hover:bg-neutral-dark hover:text-white hover:border-neutral-dark transition-all duration-300"
                  >
                    <span>{homeData.testimonialsTrustpilotReviewsText}</span>
                    <Star size={20} fill="currentColor" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {homeData.testimonials.slice(0, 4).map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-white p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
                            <img
                              src={getImageUrl(testimonial.avatar)}
                              alt={getImageAlt(
                                testimonial.avatar,
                                testimonial.name,
                              )}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {testimonial.verified && (
                            <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                              <CheckCircle
                                size={16}
                                className="text-white"
                                fill="white"
                              />
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold text-neutral-dark">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-neutral-charcoal">
                            {testimonial.date}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className="text-yellow-400"
                            fill="#fbbf24"
                          />
                        ))}
                        {testimonial.verified && (
                          <CheckCircle
                            size={16}
                            className="text-blue-500 ml-1"
                          />
                        )}
                      </div>

                      <p className="text-neutral-charcoal leading-relaxed">
                        {testimonial.review}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process Contact Section */}
      {homeData.processSteps && (
        <section className="py-16 bg-neutral-gray-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {homeData.processSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  <div className="bg-white p-8 text-center relative">
                    <div className="absolute top-0 left-0 w-3 h-3 bg-primary"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary"></div>

                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-neutral-charcoal bg-white flex items-center justify-center">
                        <span className="text-2xl font-bold text-neutral-dark">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    <div className="mt-8 mb-6 flex justify-center">
                      {getIconComponent(step.icon)}
                    </div>

                    {index < homeData.processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <div className="text-neutral-gray text-4xl">→</div>
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-neutral-dark mb-4">
                      {step.title}
                    </h3>
                    <p className="text-neutral-charcoal text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                    {homeData.processFormTitle}
                  </h2>
                  <p className="text-neutral-charcoal mb-2">
                    {homeData.processFormSubtitle}
                  </p>
                  <p className="text-neutral-charcoal mb-8">
                    {homeData.processFormDescription}
                  </p>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input
                        type="text"
                        placeholder="Volledige naam *"
                        required
                        className="border border-neutral-gray px-4 py-3 focus:outline-none focus:border-primary"
                      />
                      <input
                        type="email"
                        placeholder="E-mail *"
                        required
                        className="border border-neutral-gray px-4 py-3 focus:outline-none focus:border-primary"
                      />
                      <input
                        type="tel"
                        placeholder="Telefoonnummer *"
                        required
                        className="border border-neutral-gray px-4 py-3 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Straatnaam en huisnummer *"
                        required
                        className="border border-neutral-gray px-4 py-3 focus:outline-none focus:border-primary"
                      />
                      <input
                        type="text"
                        placeholder="Plaats *"
                        required
                        className="border border-neutral-gray px-4 py-3 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <textarea
                      placeholder="Eventuele opmerkingen/wensen"
                      rows={4}
                      className="w-full border border-neutral-gray px-4 py-3 focus:outline-none focus:border-primary resize-none"
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
                      <div>
                        <p className="text-primary font-bold text-lg mb-2">
                          {homeData.processCtaBoxTitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="bg-primary hover:bg-primary-red-dark text-white px-8 py-4 font-bold text-lg transition-colors w-full">
                    {homeData.processSubmitButtonText}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-success text-white p-4 mt-8 flex items-start gap-3">
              <MessageSquare size={20} className="shrink-0 mt-1" />
              <div
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: homeData.processNoticeText }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {homeData.galleryProjects && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
              <div className="lg:max-w-2xl">
                <p className="text-primary text-sm font-semibold uppercase mb-4 tracking-wide">
                  {homeData.gallerySubtitle}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                  {homeData.galleryTitle}
                </h2>
                <p className="text-neutral-charcoal leading-relaxed">
                  {homeData.galleryDescription}
                </p>
              </div>

              <div className="flex gap-2 border-2 border-dashed border-neutral-charcoal p-1">
                <button className="bg-primary text-white px-6 py-3 font-semibold transition-all">
                  {homeData.galleryShowAllButtonText}
                </button>
                <button className="bg-white text-neutral-dark hover:bg-neutral-gray-light px-6 py-3 font-semibold transition-all">
                  {homeData.galleryExteriorButtonText}
                </button>
                <button className="bg-white text-neutral-dark hover:bg-neutral-gray-light px-6 py-3 font-semibold transition-all">
                  {homeData.galleryInteriorButtonText}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {homeData.galleryProjects.slice(0, 6).map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden cursor-pointer"
                >
                  <div className="relative h-80 bg-neutral-gray-light">
                    <img
                      src={getImageUrl(project.image)}
                      alt={getImageAlt(project.image, project.title)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white p-6">
                        <h3 className="text-xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm">Bekijk het project</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="border-2 border-primary text-primary px-8 py-3 font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                {homeData.galleryLoadMoreButtonText}
              </button>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
