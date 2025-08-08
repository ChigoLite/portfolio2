import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["Googlebot", "Bingbot", "Baiduspider", "YandexBot"],
        allow: [
          "/",
          "/#home",
          "/#about",
          "/#skills",
          "/#experience",
          "/#projects",
          "/#contact",
        ],
        disallow: [
          "/api/*",
          "/cv.pdf", // Prevent indexing of sensitive CV file
          "/admin/*", // Example: block admin routes if they exist
          "/_next/*", // Block Next.js internal routes
        ],
      },
      {
        userAgent: "*", // All other crawlers
        allow: ["/"],
        disallow: [
          "/api/*",
          "/cv.pdf",
          "/admin/*",
          "/_next/*",
        ],
        crawlDelay: 10, // Reduce server load for less critical bots
      },
    ],
    sitemap: "https://chigolite.vercel.app/sitemap.xml",
    host: "chigolite.vercel.app", // Preferred domain
  };
}