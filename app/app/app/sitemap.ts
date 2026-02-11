import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://study-productivity-site.vercel.app/",
      lastModified: new Date(),
    },
  ];
}
