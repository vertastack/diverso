import Header from "@/app/shared/components/Header";
import Footer from "@/app/shared/components/Footer";
import Hero from "@/index/Hero";
import Services from "@/index/Services";
import AboutCompanySection from "@/index/About";
import SEO from "@/app/shared/components/Seo";
import ImageCTASlider from "@/index/Cta";
import TestimonialsSection from "@/index/Testimonial";
import ProcessContactSection from "@/index/ProcessContact";
import PortfolioGallerySection from "@/index/Gallery";
import StrapiService from "@/src/services/strapi.service";
import type { Metadata } from "next";

interface HomeData {
  id: number;
  metaTitle: string;
  metaDescription: string;
  metaImage?: {
    url: string;
  };
  metaKeywords?: string;
  metaRobots?: string;
  metaUrl?: string;
}

async function getHomeData(): Promise<HomeData | null> {
  try {
    const strapiService = new StrapiService();
    const response = await strapiService.getContent<HomeData>("diverso/home", {
      populate: {
        metaImage: "*",
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

  if (homeData) {
    return {
      title: homeData.metaTitle,
      description: homeData.metaDescription,
    };
  }

  // Fallback metadata
  return {
    title: "Welcome to Diverso",
    description: "Diverso Description",
  };
}

export default async function Home() {
  const homeData = await getHomeData();

  if (!homeData) {
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
    metaTitle: homeData.metaTitle,
    metaDescription: homeData.metaDescription,
    metaImage: homeData.metaImage || { url: "" },
    metaKeywords: homeData.metaKeywords || "",
    metaRobots: homeData.metaRobots || "index, follow",
    metaUrl: homeData.metaUrl || "https://diverso.com",
  };

  return (
    <>
      <SEO seo={seo} />
      <Header />
      <Hero />
      <Services />
      <AboutCompanySection />
      <ImageCTASlider />
      <TestimonialsSection />
      <ProcessContactSection />
      <PortfolioGallerySection />
      <Footer />
    </>
  );
}
