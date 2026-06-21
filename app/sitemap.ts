import type { MetadataRoute } from "next";

import { siteUrl } from "@/config";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
};

export default sitemap;
