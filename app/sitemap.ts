import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1.0, lastModified: "2026-02-20" },
    { url: `${SITE_URL}/features`, changeFrequency: "monthly", priority: 0.9, lastModified: "2026-02-20" },
    { url: `${SITE_URL}/pricing`, changeFrequency: "monthly", priority: 0.9, lastModified: "2026-02-20" },
    { url: `${SITE_URL}/faq`, changeFrequency: "monthly", priority: 0.8, lastModified: "2026-02-20" },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.8, lastModified: "2026-02-20" },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.7, lastModified: "2026-02-20" },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
    lastModified: post.date,
  }));

  return [...staticPages, ...blogPages];
}
