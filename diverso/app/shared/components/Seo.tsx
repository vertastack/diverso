import Head from "next/head";
import { getImageUrl } from "@/app/shared/utils/image";

interface SeoProps {
  metaTitle: string;
  metaDescription: string;
  metaImage?: {
    url: string;
  };
  metaKeywords?: string;
  metaRobots?: string;
  metaUrl?: string; // Optional: canonical URL
  twitterCardType?: string; // e.g., 'summary_large_image'
}

interface SEOComponentProps {
  seo: SeoProps;
}

const SEO: React.FC<SEOComponentProps> = ({ seo }) => {
  const title = seo?.metaTitle || "Fortus Lab";
  const description = seo?.metaDescription || "Fortus Lab";
  const image = getImageUrl(seo?.metaImage);
  const robots = seo?.metaRobots || "index, contact";
  const keywords = seo?.metaKeywords || "";
  const url = seo?.metaUrl || "";
  const twitterCardType = seo?.twitterCardType || "summary_large_image";

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta name="keywords" content={keywords} />
      {url && <link rel="canonical" href={url} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCardType} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Head>
  );
};

export default SEO;
