/**
 * Image interface for consistent typing across components
 * Used for all image objects returned from Strapi CMS
 */
export interface ImageData {
  url: string;
  alternativeText?: string;
}

/**
 * Generic function to handle image URLs from Strapi CMS
 * Automatically prepends the Strapi base URL if the image URL is relative
 *
 * @param image - Image object with url and optional alternativeText
 * @returns Fully qualified image URL or empty string if no image
 *
 * @example
 * ```tsx
 * const imageUrl = getImageUrl(product.image);
 * // Returns: "http://localhost:1337/uploads/image.jpg" or "https://cdn.example.com/image.jpg"
 * ```
 */
export const getImageUrl = (image: ImageData | null | undefined): string => {
  if (!image?.url) return "";

  return image.url.startsWith("http")
    ? image.url
    : `${process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"}${image.url}`;
};

/**
 * Helper function for getting alt text with fallback
 * Returns the image's alternative text or a provided fallback string
 *
 * @param image - Image object with url and optional alternativeText
 * @param fallback - Fallback text if alternativeText is not available
 * @returns Alternative text string or fallback
 *
 * @example
 * ```tsx
 * const altText = getImageAlt(product.image, product.title);
 * // Returns: "Product description" or product.title if alternativeText is empty
 * ```
 */
export const getImageAlt = (
  image: ImageData | null | undefined,
  fallback: string = "",
): string => {
  return image?.alternativeText || fallback;
};
