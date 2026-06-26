import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

const title = "About Namaste Desk — Hotel Management Software for Nepal";
const description =
  "Namaste Desk is offline-first hotel management software built for hotels and guesthouses in Nepal. Learn what it is, who it's for, and what problem it solves.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about", type: "website" },
};

export default function AboutPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#F9FAFB" }}>
      <SiteNav />
      <main className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 tracking-tight">
          About Namaste Desk
        </h1>

        <article className="prose-like space-y-8 text-gray-700 leading-relaxed text-lg">
          <p>
            <strong>Namaste Desk</strong> is offline-first hotel front desk management software
            (a hotel property management system, or PMS) designed for hotels and guesthouses in
            Nepal. It is distributed as a desktop application built on Electron and installs
            directly on a Windows laptop, where it manages guest check-in and check-out, room
            booking, billing, and guest registration without requiring an internet connection.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">What Problem It Solves</h2>
          <p>
            Most hotel management software sold internationally is cloud-based, which assumes
            consistent broadband internet and ongoing subscription billing in foreign currency.
            Many hotels and guesthouses in Nepal, particularly outside Kathmandu and Pokhara,
            operate with unreliable internet connectivity and frequent power outages
            (load-shedding). Cloud-dependent software stops working in these conditions, forcing
            staff back to handwritten paper registers. Namaste Desk was built specifically to
            avoid this failure mode: because the application and its guest data run locally on
            the hotel&apos;s own laptop, front desk operations continue uninterrupted regardless of
            internet availability.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">Who It Is For</h2>
          <p>
            Namaste Desk is built for small to mid-size hotels and guesthouses in Nepal — typically
            properties with roughly 10 to 40 rooms — that currently rely on paper registers or
            spreadsheets and want a digital front desk without the cost, complexity, or internet
            dependency of large international hotel PMS platforms. It is also used by small
            guesthouses and seasonal cottage (mökki) properties in Finland.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">What Makes It Different</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Offline-first architecture:</strong> the application and guest database run
              on the hotel&apos;s own laptop, not on a remote server, so there is no dependency on
              internet connectivity to operate the front desk.
            </li>
            <li>
              <strong>Built for Nepali hotel operations:</strong> workflows such as guest
              registration cards, billing, and repeat guest recognition are designed around how
              front desks in Nepal actually operate, rather than adapted from a generic
              international template.
            </li>
            <li>
              <strong>Repeat guest recognition:</strong> returning guests can be checked in within
              seconds by phone number lookup, which retrieves saved identity details and stay
              history instead of requiring ID to be re-collected.
            </li>
            <li>
              <strong>Local data control:</strong> because guest data is stored on the property&apos;s
              own laptop rather than a third-party cloud server, hotel owners retain direct control
              over sensitive guest information.
            </li>
            <li>
              <strong>Low setup overhead:</strong> Namaste Desk is installed directly on a laptop
              with no server setup, and onboarding/training is provided so non-technical front
              desk staff can use it from day one.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">Product Summary</h2>
          <p>
            Namaste Desk is hotel management software, hotel front desk software, and a hotel
            billing system in one product. It is positioned as an offline alternative to
            cloud-based hotel PMS software for the Nepali hospitality market, where internet
            reliability and affordability are primary constraints for small hotel owners.
          </p>
        </article>

        <section className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Learn more on the{" "}
            <Link href="/features" className="underline hover:text-green-800">features page</Link>,
            check <Link href="/pricing" className="underline hover:text-green-800">pricing</Link>,
            or read the <Link href="/faq" className="underline hover:text-green-800">FAQ</Link>.
          </p>
        </section>
      </main>
      <SiteFooter />
      <JsonLd data={breadcrumbJsonLd} />
    </div>
  );
}
