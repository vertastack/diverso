import qs from "qs";

/**
 * Generic Strapi API response structure
 */
interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

/**
 * Options for content fetching
 */
interface ContentOptions {
  id?: number | string;
  populate?: string | object;
  sort?: string | string[];
  filters?: object;
  pagination?: {
    page?: number;
    pageSize?: number;
    withCount?: boolean;
  };
  fields?: string[];
  locale?: string;
}

/**
 * A service for fetching content from Strapi CMS
 */
class StrapiService {
  private baseUrl: string;
  private apiToken: string | undefined;
  private defaultHeaders: Record<string, string>;

  constructor() {
    this.baseUrl =
      process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
    this.apiToken = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    this.defaultHeaders = {
      "Content-Type": "application/json",
    };

    if (this.apiToken) {
      this.defaultHeaders["Authorization"] = `Bearer ${this.apiToken}`;
    }
  }

  /**
   * Build the API URL with optional query parameters
   * @param contentType - The content type to fetch
   * @param queryParams - Optional query parameters
   * @returns The complete URL
   */

  private buildUrl(
    contentType: string,
    queryParams: Record<string, any> = {}
  ): string {
    const queryString = qs.stringify(queryParams, {
      encodeValuesOnly: true, // Don't encode keys like pagination[page]
    });

    return `${this.baseUrl}/api/${contentType}?${queryString}`;
  }

  /**
   * Recursively flattens Strapi `data.attributes` into flat objects with `id`, including nested populated fields.
   */
  private deepFlatten(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map((item) => this.deepFlatten(item));
    }

    if (obj && typeof obj === "object") {
      // Case: { id, attributes } => flatten it
      if ("id" in obj && "attributes" in obj) {
        const flat = { id: obj.id, ...this.deepFlatten(obj.attributes) };
        return flat;
      }

      // Case: { data: { id, attributes } } or { data: [...] }
      if ("data" in obj) {
        return this.deepFlatten(obj.data);
      }

      // Regular object – flatten each prop
      const result: Record<string, any> = {};
      for (const key in obj) {
        result[key] = this.deepFlatten(obj[key]);
      }
      return result;
    }

    // Primitive – return as is
    return obj;
  }

  /**
   * Fetch content from Strapi
   * @param contentType - The content type to fetch
   * @param options - Options for the request
   * @returns The fetched data
   */
  async getContent<T>(
    contentType: string,
    options: ContentOptions = {}
  ): Promise<StrapiResponse<T>> {
    const {
      id = null,
      populate = "*",
      sort = null,
      filters = null,
      pagination = null,
      fields = null,
      locale = null,
    } = options;

    // Detect browser language if running in the browser and no locale is provided
    let detectedLocale = locale;
    // if (!locale && typeof window !== "undefined") {
    //   detectedLocale = navigator.language.split("-")[0] || "en"; // e.g., "en"
    // }

    // Build query parameters
    const queryParams: Record<string, any> = {};

    if (populate) queryParams.populate = populate;
    if (sort) queryParams.sort = sort;
    if (filters) queryParams.filters = filters;
    if (pagination) queryParams.pagination = pagination;
    if (fields) queryParams.fields = fields;
    if (locale) queryParams.locale = locale;
    if (detectedLocale) queryParams.locale = detectedLocale;

    // Build URL based on whether we're fetching a single item or collection
    let url: string;
    if (id) {
      url = this.buildUrl(`${contentType}/${id}`, queryParams);
    } else {
      url = this.buildUrl(contentType, queryParams);
    }

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: this.defaultHeaders,
      });

      if (!response.ok) {
        throw new Error(
          `Error fetching from Strapi: ${response.status} ${response.statusText}`
        );
      }
      const res = await response.json();

      const flattenedData = this.deepFlatten(res.data) as T;

      return {
        data: flattenedData,
        meta: res.meta,
      };
    } catch (error) {
      console.error("Strapi fetch error:", error);
      throw error;
    }
  }
}

export default StrapiService;
