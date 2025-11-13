# Image Utility Update Summary

This document summarizes the changes made to standardize image URL handling across all components in the Diverso project.

## What Was Updated

A centralized image utility system was implemented to handle all image URLs consistently throughout the application.

### New Utility File

**Location:** `diverso/app/shared/utils/image.ts`

**Functions:**
- `getImageUrl(image)` - Handles URL resolution for Strapi images
- `getImageAlt(image, fallback)` - Provides alt text with fallback support

### Updated Components

The following files were updated to use the new image utilities:

1. **Main Pages:**
   - `diverso/app/page.tsx` - Home page (hero slides, services, team image, CTA images, testimonials, projects)
   - `diverso/app/about/page.tsx` - About page (team images)
   - `diverso/app/trading/page.tsx` - Trading page (project images)

2. **Service Pages:**
   - `diverso/app/services/exterior/page.tsx` - Exterior painting service
   - `diverso/app/services/glazing/page.tsx` - Glazing service
   - `diverso/app/services/interior/page.tsx` - Interior painting service
   - `diverso/app/services/maintenance-plan/page.tsx` - Maintenance plan service
   - `diverso/app/services/wood-repair/page.tsx` - Wood repair service

3. **Shared Components:**
   - `diverso/app/shared/components/Seo.tsx` - SEO meta image handling

## How It Works

### Before (inconsistent):
```tsx
// Direct usage - no URL resolution
<img src={slide.image.url} alt={slide.image.alternativeText || "fallback"} />

// Next.js Image components with hostname restrictions
<Image src={slide.image.url} alt={slide.image.alternativeText || "fallback"} fill />

// Background images - no URL resolution
style={{ backgroundImage: `url(${heroData.heroSlides[0].image.url})` }}
```

### After (standardized):
```tsx
import { getImageUrl, getImageAlt } from "@/app/shared/utils/image";

// Consistent URL resolution and alt text with regular img tags
<img 
  src={getImageUrl(slide.image)} 
  alt={getImageAlt(slide.image, "fallback")}
  className="w-full h-full object-cover"
/>

// Background images with URL resolution
style={{ backgroundImage: `url(${getImageUrl(heroData.heroSlides[0].image)})` }}
```

## Benefits

1. **Consistent URL Handling** - All images now properly resolve relative URLs from Strapi
2. **Environment Flexibility** - Automatically uses `NEXT_PUBLIC_STRAPI_URL` or defaults to localhost
3. **Type Safety** - Proper TypeScript interfaces for image data
4. **Centralized Logic** - Single source of truth for image handling
5. **Better Error Handling** - Graceful fallbacks for missing images
6. **Maintainability** - Easy to update image handling logic in one place
7. **No Next.js Image Restrictions** - Uses regular `<img>` tags to avoid localhost/private IP limitations
8. **Simplified Configuration** - No need for complex Next.js image domain configurations

## Image Data Structure

All components now expect images in this standardized format:

```typescript
interface ImageData {
  url: string;
  alternativeText?: string;
}
```

This matches the Strapi CMS image object structure used throughout the application.

## Implementation Notes

### Why Regular `<img>` Tags Instead of Next.js `<Image>`?

We switched from Next.js `<Image>` components to regular `<img>` tags because:

1. **Localhost Restrictions**: Next.js Image component blocks requests to private/localhost IPs in production mode
2. **Simpler Configuration**: No need to configure image domains in `next.config.js`
3. **Direct Control**: Regular img tags give us full control over image loading and styling
4. **Consistency**: Same behavior across development and production environments

### Service Pages Pattern

All service pages now follow the same pattern as the about page:

```tsx
<div className="relative h-64 bg-gray-200">
  <img
    src={getImageUrl(imageData.image)}
    alt={getImageAlt(imageData.image, "Service Name")}
    className="w-full h-full object-cover"
  />
</div>
```

## Environment Configuration

Make sure your `.env.local` file includes:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
# or your production Strapi URL
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-instance.com
```

The utility functions will automatically handle both relative and absolute image URLs.