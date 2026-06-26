import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, buildBreadcrumbJsonLd } from "@/lib/seo";

export default function BlogArticle({
  slug,
  title,
  description,
  date,
  children,
}: {
  slug: string;
  title: string;
  description: string;
  date: string;
  children: React.ReactNode;
}) {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: title, path: `/blog/${slug}` },
  ]);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    url: absoluteUrl(`/blog/${slug}`),
    author: { "@type": "Organization", name: "Namaste Desk" },
    publisher: { "@type": "Organization", name: "Namaste Desk" },
  };

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#F9FAFB" }}>
      <SiteNav />
      <main className="max-w-3xl mx-auto px-6 py-24">
        <p className="mb-4">
          <Link href="/blog" className="text-sm font-bold text-gray-500 hover:text-green-800">
            ← Back to Blog
          </Link>
        </p>
        <time dateTime={date} className="text-xs uppercase tracking-wider text-gray-400 font-bold">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-10 tracking-tight">
          {title}
        </h1>
        <article className="space-y-6 text-gray-700 leading-relaxed text-lg">{children}</article>
      </main>
      <SiteFooter />
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
    </div>
  );
}
