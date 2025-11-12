import Header from "@/app/shared/components/Header";
import Footer from "@/app/shared/components/Footer";
import { Check, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import SEO from "../shared/components/Seo";
import StrapiService from "@/src/services/strapi.service";

interface TradingData {
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
  mainTitle: string;
  mainContent: string;
  organizationsList: Array<{
    id: number;
    name: string;
  }>;
  projects: Array<{
    id: number;
    title: string;
    service: string;
    description: string;
    image: {
      url: string;
      alternativeText?: string;
    };
    imagePosition: "left" | "right";
  }>;
  phoneNumber: string;
}

async function getTradingData(): Promise<TradingData | null> {
  try {
    const strapiService = new StrapiService();
    const response = await strapiService.getContent<TradingData>(
      "diverso/trading",
      {
        populate: {
          metaImage: "*",
          organizationsList: "*",
          projects: {
            populate: {
              image: "*",
            },
          },
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching trading data:", error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const tradingData = await getTradingData();

  if (tradingData) {
    return {
      title: tradingData.pageTitle,
      description: tradingData.pageDescription,
    };
  }

  // Fallback metadata
  return {
    title: "Търговски | RS Schildersgroep BV",
    description:
      "RS Schildersgroep BV е вашият постоянен партньор за боядисване на бизнес сгради, паметници и офиси. Научете повече за нашите услуги и предимства.",
  };
}

export default async function TradingPage() {
  const tradingData = await getTradingData();

  if (!tradingData) {
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
    metaTitle: tradingData.metaTitle,
    metaDescription: tradingData.metaDescription,
    metaImage: tradingData.metaImage || { url: "" },
    metaKeywords: tradingData.metaKeywords || "",
    metaRobots: tradingData.metaRobots || "index, follow",
    metaUrl: tradingData.metaUrl || "https://diverso.com",
  };

  return (
    <>
      <SEO seo={seo} />
      <Header />

      {/* Red Header Banner */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <p className="text-white text-center text-xl md:text-2xl font-medium">
            {tradingData.headerQuote}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6 uppercase leading-tight">
                {tradingData.mainTitle}
              </h1>
              <div className="space-y-6 text-neutral-charcoal leading-relaxed">
                {tradingData.mainContent
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>

            {/* Right Column - Organizations List */}
            <div className="bg-secondary p-8">
              <h2 className="text-xl font-bold text-white mb-6 uppercase">
                ОРГАНИЗАЦИИ КОИТО НИ СЕ ДОВЕРЯВАТ:
              </h2>
              <ul className="space-y-3">
                {tradingData.organizationsList.map((org) => (
                  <li
                    key={org.id}
                    className="flex items-center gap-3 text-white"
                  >
                    <Check size={20} className="shrink-0 text-white" />
                    <span className="text-sm">{org.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-neutral-gray-light">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {tradingData.projects.map((project, index) => (
              <div key={project.id} className="max-w-6xl mx-auto">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    project.imagePosition === "left"
                      ? "lg:grid-flow-col-dense"
                      : ""
                  }`}
                >
                  {/* Text Content */}
                  <div
                    className={
                      project.imagePosition === "left" ? "lg:col-start-2" : ""
                    }
                  >
                    <div className="bg-primary text-white px-3 py-1 text-xs font-bold inline-block mb-4 uppercase">
                      {project.service}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-6">
                      {project.title}
                    </h2>
                    <p className="text-neutral-charcoal leading-relaxed mb-8">
                      {project.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div
                    className={`relative h-80 bg-gray-200 rounded ${
                      project.imagePosition === "left" ? "lg:col-start-1" : ""
                    }`}
                  >
                    <img
                      src={project.image.url}
                      alt={project.image.alternativeText || project.title}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              ГОТОВИ СТЕ ЛИ ДА СЕ СВЪРЖЕТЕ С НАС?
            </h2>
            <p className="text-white text-lg mb-8 leading-relaxed">
              Свържете се с нас за безплатна консултация и персонализирана
              оферта за вашия проект.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3 bg-white text-primary px-6 py-4 border-2 border-dashed border-white">
                <Phone size={24} />
                <a
                  href={`tel:${tradingData.phoneNumber.replace(/\s/g, "")}`}
                  className="font-bold text-xl hover:underline"
                >
                  {tradingData.phoneNumber}
                </a>
              </div>
              <Link
                href="/contact"
                className="bg-secondary hover:bg-secondary-teal-dark text-white px-8 py-4 font-semibold transition-colors inline-flex items-center gap-2"
              >
                СВЪРЖЕТЕ СЕ С НАС
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
