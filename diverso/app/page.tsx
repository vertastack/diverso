import Header from "@/app/shared/components/Header";
import Footer from "@/app/shared/components/Footer";
import SEO from "@/app/shared/components/Seo";
import HeroCarousel from "@/app/shared/components/HeroCarousel";
import ContactForm from "@/app/shared/components/ContactForm";
import Gallery from "@/app/shared/components/Gallery";
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
        <HeroCarousel
          slides={homeData.heroSlides}
          phoneNumber={homeData.heroPhoneNumber}
          ctaButtonText={homeData.heroCtaButtonText}
          bottomBarText={homeData.heroBottomBarText}
          phoneText={homeData.heroPhoneText}
          bottomBarButtonText="neem contact met ons op."
        />
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
              <div className="relative h-[400px] md:h-[500px] w-full">
                <img
                  src={getImageUrl(homeData.aboutTeamImage)}
                  alt={getImageAlt(homeData.aboutTeamImage, "Diverso Team")}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 bg-success text-white p-4 md:p-6 max-w-sm shadow-lg">
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
          <div className="grid grid-cols-1 md:grid-cols-3 h-[250px] md:h-[350px]">
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
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                  <span className="text-sm md:text-base font-medium">
                    {homeData.ctaPhoneText}
                  </span>
                  <div className="flex items-center gap-2 bg-white text-primary px-4 md:px-5 py-2 md:py-3 border-2 border-dashed border-white">
                    <Phone size={18} className="md:w-5 md:h-5" />
                    <a
                      href={`tel:${homeData.ctaPhoneNumber.replace(/\s/g, "")}`}
                      className="font-bold text-base md:text-lg hover:underline"
                    >
                      {homeData.ctaPhoneNumber}
                    </a>
                  </div>
                  <span className="text-sm md:text-base">{homeData.ctaOrText}</span>
                  <button className="bg-transparent hover:bg-white hover:text-primary border-2 border-white text-white px-4 md:px-6 py-2 md:py-3 font-semibold transition-all duration-300 underline text-sm md:text-base">
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
        <section className="pt-20 md:pt-24 pb-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6 md:mb-8 mt-4 md:mt-6">
                  {homeData.testimonialsTitle}
                </h2>
                <p className="text-neutral-charcoal leading-relaxed max-w-3xl mx-auto mb-8">
                  {homeData.testimonialsDescription}
                </p>
              </div>

              {/* Testimonials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {homeData.testimonials.slice(0, 4).map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-white border-2 border-gray-100 p-6 hover:border-primary hover:shadow-lg transition-all duration-300 rounded-lg"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                          <img
                            src={getImageUrl(testimonial.avatar)}
                            alt={getImageAlt(
                              testimonial.avatar,
                              testimonial.name
                            )}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {testimonial.verified && (
                          <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                            <CheckCircle
                              size={14}
                              className="text-white"
                              fill="white"
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-neutral-dark text-sm truncate">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs text-neutral-charcoal">
                          {testimonial.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-yellow-400"
                          fill="#fbbf24"
                        />
                      ))}
                    </div>

                    <p className="text-neutral-charcoal text-sm leading-relaxed line-clamp-4">
                      {testimonial.review}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process Contact Section */}
      {homeData.processSteps && (
        <section className="py-16 bg-neutral-gray-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              {homeData.processSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  <div className="bg-white p-6 md:p-8 text-center relative">
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
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
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
              <ContactForm
                title={homeData.processFormTitle}
                subtitle={homeData.processFormSubtitle}
                description={homeData.processFormDescription}
                submitButtonText={homeData.processSubmitButtonText}
                variant="compact"
              />
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
        <Gallery
          subtitle={homeData.gallerySubtitle}
          title={homeData.galleryTitle}
          description={homeData.galleryDescription}
          loadMoreButtonText={homeData.galleryLoadMoreButtonText}
          projects={homeData.galleryProjects}
        />
      )}

      <Footer />
    </>
  );
}
