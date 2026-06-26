import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

const title = "Hotel Software Pricing Nepal | Namaste Desk";
const description =
  "Namaste Desk hotel management software pricing is based on your hotel's size and needs. Request a custom quote for your hotel or guesthouse in Nepal.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pricing" },
  openGraph: { title, description, url: "/pricing", type: "website" },
};

const brandGreen = "#0F5953";

const included = [
  "Full offline hotel front desk software (PMS)",
  "Unlimited check-ins, bookings, and billing",
  "Guest history and repeat check-in lookup",
  "Printable guest registration cards",
  "Setup and onboarding for your front desk team",
  "Ongoing support",
];

export default function PricingPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
  ]);

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#F9FAFB" }}>
      <SiteNav />
      <main className="max-w-5xl mx-auto px-6 py-24">
        <header className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Hotel Software Pricing for Nepal
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Namaste Desk does not use a one-size-fits-all price list. Pricing depends on the
            number of rooms, the number of front desk staff, and the level of onboarding support
            your hotel or guesthouse needs. Tell us about your property and we will send you a
            custom quote — most hotels in Nepal hear back within 24 hours.
          </p>
        </header>

        <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {included.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 size={20} style={{ color: brandGreen }} className="mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Custom Pricing?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A 10-room guesthouse in Pokhara has different needs than a 40-room hotel in Kathmandu.
            Custom pricing means you only pay for what your property actually needs, instead of a
            fixed subscription built for hotels much larger or smaller than yours.
          </p>
        </section>

        <section className="text-center">
          <Link
            href="/#demo"
            style={{ backgroundColor: brandGreen }}
            className="inline-flex text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all mb-4"
          >
            Request a Custom Quote
          </Link>
          <p className="text-gray-500 text-sm">
            Have questions first? Read the{" "}
            <Link href="/faq" className="underline hover:text-green-800">FAQ</Link> or explore{" "}
            <Link href="/features" className="underline hover:text-green-800">all features</Link>.
          </p>
        </section>
      </main>
      <SiteFooter />
      <JsonLd data={breadcrumbJsonLd} />
    </div>
  );
}
