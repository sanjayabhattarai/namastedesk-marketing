import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

const title = "FAQ — Namaste Desk Hotel Software Nepal";
const description =
  "Answers to common questions about Namaste Desk: what it is, whether it works offline, who it's for, how much it costs, and what features it includes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/faq" },
  openGraph: { title, description, url: "/faq", type: "website" },
};

const faqs = [
  {
    question: "What is Namaste Desk?",
    answer:
      "Namaste Desk is offline-first hotel front desk management software (a hotel PMS) built specifically for hotels and guesthouses in Nepal. It runs as a Windows application on a laptop and handles guest check-in and check-out, room booking timelines, billing, and printable guest registration cards.",
  },
  {
    question: "Does Namaste Desk work without internet?",
    answer:
      "Yes. Namaste Desk is designed to work 100% offline. All hotel operations — check-ins, room management, and billing — continue to work during internet outages or power cuts, because the software and guest data run locally on the hotel's own laptop rather than in the cloud.",
  },
  {
    question: "Is Namaste Desk suitable for small hotels and guesthouses in Nepal?",
    answer:
      "Yes. Namaste Desk was built for small and mid-size hotels and guesthouses in Nepal, including properties with as few as 10 rooms. It is lightweight, requires no IT staff to run, and includes full training so existing front desk staff can use it without prior technical experience.",
  },
  {
    question: "How much does Namaste Desk cost?",
    answer:
      "Namaste Desk uses custom pricing based on the size of the hotel, the number of rooms, and the support a property needs. There is no fixed public price list — contact Namaste Desk through the demo request form for a quote tailored to your property. See the pricing page for details.",
  },
  {
    question: "What features does Namaste Desk include?",
    answer:
      "Namaste Desk includes offline hotel check-in and check-out, a visual room booking timeline to prevent double-bookings, instant lookup of returning guests by phone number, itemized hotel billing and invoicing, automated printable guest registration cards, and local storage of guest data for privacy. See the features page for the full list.",
  },
  {
    question: "Is Namaste Desk a cloud-based hotel PMS?",
    answer:
      "No. Unlike most modern hotel PMS products, Namaste Desk is not cloud-based. It is installed directly on a hotel's laptop and stores guest data locally, which makes it reliable in areas of Nepal with unstable internet or frequent power outages, and keeps guest data under the hotel's own control.",
  },
  {
    question: "Does Namaste Desk support repeat guest check-in?",
    answer:
      "Yes. Namaste Desk can look up a returning guest by phone number and automatically fill in their identity details and stay history from previous visits, so receptionists do not need to ask for ID again or re-enter information.",
  },
  {
    question: "Can Namaste Desk print guest registration forms?",
    answer:
      "Yes. Namaste Desk automatically generates guest entry/registration cards branded for your property and ready to print, removing the need for handwritten registration forms.",
  },
  {
    question: "Does Namaste Desk support hotels outside Nepal?",
    answer:
      "Namaste Desk was built primarily for hotels and guesthouses in Nepal, but it is also used by small guesthouses and mökki (cottage) properties in Finland.",
  },
];

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
  ]);

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#F9FAFB" }}>
      <SiteNav />
      <main className="max-w-3xl mx-auto px-6 py-24">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Common questions about Namaste Desk, the offline hotel management software for Nepal.
          </p>
        </header>

        <div className="space-y-6 mb-16">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h2>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <section className="text-center">
          <p className="text-gray-600 mb-6">
            Still have questions? Read more on the{" "}
            <Link href="/about" className="underline hover:text-green-800">about page</Link> or{" "}
            <Link href="/features" className="underline hover:text-green-800">explore features</Link>.
          </p>
          <Link
            href="/#demo"
            style={{ backgroundColor: "#0F5953" }}
            className="inline-flex text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            Book a Free Demo
          </Link>
        </section>
      </main>
      <SiteFooter />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
    </div>
  );
}
