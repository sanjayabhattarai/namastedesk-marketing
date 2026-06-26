export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-hotel-management-software-nepal",
    title: "How to Choose Hotel Management Software in Nepal",
    description:
      "A practical guide for Nepali hotel and guesthouse owners on what to look for in hotel management software, including offline reliability, cost, and support.",
    date: "2026-01-15",
  },
  {
    slug: "why-offline-first-hotel-software-matters-nepal",
    title: "Why Offline-First Hotel Software Matters in Nepal",
    description:
      "Why cloud-only hotel PMS platforms fail in areas with unreliable internet and load-shedding, and why offline-first software like Namaste Desk is built differently.",
    date: "2026-02-03",
  },
  {
    slug: "hotel-front-desk-operations-guide-nepal",
    title: "Hotel Front Desk Operations Guide for Nepal",
    description:
      "An overview of daily hotel front desk operations in Nepal — check-in, guest registration, billing, and room management — and how to run them efficiently.",
    date: "2026-02-20",
  },
];
