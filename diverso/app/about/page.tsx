import Header from "@/app/shared/components/Header";
import Footer from "@/app/shared/components/Footer";
import { Check } from "lucide-react";
import type { Metadata } from "next";
import SEO from "../shared/components/Seo";
import StrapiService from "@/src/services/strapi.service";

interface AboutData {
  id: number;
  metaTitle: string;
  metaDescription: string;
  metaImage?: {
    url: string;
  };
  metaKeywords?: string;
  metaRobots?: string;
  metaUrl?: string;
  pageTitle: string;
  pageDescription: string;
  headerQuote: string;
  storyTitle: string;
  storyContent: string;
  features: Array<{
    id: number;
    text: string;
  }>;
  teamImages: Array<{
    id: number;
    image: {
      url: string;
      alternativeText?: string;
    };
    caption?: string;
  }>;
  teamCaption?: string;
}

async function getAboutData(): Promise<AboutData | null> {
  try {
    const strapiService = new StrapiService();
    const response = await strapiService.getContent<AboutData>(
      "diverso/about",
      {
        populate: {
          metaImage: "*",
          features: "*",
          teamImages: {
            populate: {
              image: "*",
            },
          },
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching about data:", error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const aboutData = await getAboutData();

  if (aboutData) {
    return {
      title: aboutData.pageTitle,
      description: aboutData.pageDescription,
    };
  }

  // Fallback metadata
  return {
    title: "За нас | RS Schildersgroep BV",
    description:
      "Историята зад RS Schildersgroep BV - бояджийска компания с над 20 години опит в Зутфен и региона. Познайте нашия екип и нашата мисия.",
  };
}

export default async function AboutPage() {
  const aboutData = await getAboutData();

  if (!aboutData) {
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

  const seo = {
    metaTitle: aboutData.metaTitle || "Welcome to Diverso",
    metaDescription: aboutData.metaDescription || "Diverso Description",
    metaImage: aboutData.metaImage || { url: "" },
    metaKeywords: aboutData.metaKeywords || "",
    metaRobots: aboutData.metaRobots || "index, contact",
    metaUrl: aboutData.metaUrl || "https://diverso.com",
  };

  return (
    <>
      <SEO seo={seo} />
      <Header />

      {/* Red Header Section */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <p className="text-white text-center text-xl md:text-2xl font-medium">
            {aboutData.headerQuote}
          </p>
        </div>
      </section>

      {/* Story and Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Story */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
                {aboutData.storyTitle}
              </h1>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                {aboutData.storyContent
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="bg-secondary-teal p-8">
              <ul className="space-y-4">
                {aboutData.features.map((feature, index) => (
                  <li
                    key={feature.id}
                    className={`flex items-start gap-3 text-white ${
                      index < aboutData.features.length - 1
                        ? "border-b border-white/20 pb-4"
                        : ""
                    }`}
                  >
                    <Check size={20} className="mt-1 flex-shrink-0" />
                    <span className="text-sm">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Images Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutData.teamImages.length > 0 && (
              <>
                {/* First Image - Team Photo (spans 2 columns) */}
                <div className="md:col-span-2">
                  <div className="relative h-[400px] md:h-[500px] bg-gray-200 rounded overflow-hidden">
                    <img
                      src={aboutData.teamImages[0].image.url}
                      alt={
                        aboutData.teamImages[0].image.alternativeText ||
                        "Team Photo"
                      }
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Second Image - Worker in Action (spans 1 column) */}
                {aboutData.teamImages[1] && (
                  <div className="md:col-span-1">
                    <div className="relative h-[400px] md:h-[500px] bg-gray-200 rounded overflow-hidden">
                      <img
                        src={aboutData.teamImages[1].image.url}
                        alt={
                          aboutData.teamImages[1].image.alternativeText ||
                          "Worker in Action"
                        }
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          {aboutData.teamCaption && (
            <p className="text-center text-gray-600 mt-4 text-sm">
              {aboutData.teamCaption}
            </p>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
