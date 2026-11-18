import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// /contact is left out until its email backend is live (it is also marked noindex).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
