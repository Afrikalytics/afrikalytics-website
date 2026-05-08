import type { MetadataRoute } from "next";

const BASE_URL = "https://datatym.ai";
const API_URL = "https://web-production-ef657.up.railway.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/etudes`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/premium`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];

  let studyRoutes: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(`${API_URL}/api/studies/active`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const studies = (await res.json()) as Array<{ id: number }>;
      studyRoutes = studies.map((s) => ({
        url: `${BASE_URL}/etudes/${s.id}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
    }
  } catch {
    // silently skip dynamic routes if API is unavailable
  }

  return [...staticRoutes, ...studyRoutes];
}
