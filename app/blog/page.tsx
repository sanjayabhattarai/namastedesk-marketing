import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/seo";
import { blogPosts } from "@/lib/blog";

const title = "Blog — Hotel Management in Nepal | Namaste Desk";
const description =
  "Guides on choosing hotel management software, running an efficient hotel front desk, and why offline-first software matters for hotels in Nepal.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title, description, url: "/blog", type: "website" },
};

export default function BlogIndexPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#F9FAFB" }}>
      <SiteNav />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Hotel Management Resources for Nepal
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Practical guides on hotel front desk operations, choosing hotel software, and running
            a hotel or guesthouse in Nepal.
          </p>
        </header>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <time dateTime={post.date} className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-3">{post.title}</h2>
              <p className="text-gray-600 leading-relaxed">{post.description}</p>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
      <JsonLd data={breadcrumbJsonLd} />
    </div>
  );
}
