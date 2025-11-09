import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Services from "@/components/layout/Services";
import AboutCompanySection from "@/components/layout/About";
import SEO from "@/components/shared/Seo";
import ImageCTASlider from "@/components/layout/Cta";
import TestimonialsSection from "@/components/layout/Testimonial";
import ProcessContactSection from "@/components/layout/ProcessContact";
import PortfolioGallerySection from "@/components/layout/Gallery";

export default function Home() {
  const seo = {
    metaTitle: "Welcome to Diverso",
    metaDescription: "Diverso Description",
    metaImage: { url: "" },
    metaKeywords: "",
    metaRobots: "index, contact",
    metaUrl: "https://diverso.com",

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
