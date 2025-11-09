import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import SEO from "@/components/shared/Seo";

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
      <Footer />
    </>
  );
}
