import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  WifiOff,
  Zap,
  CalendarDays,
  Printer,
  ShieldCheck,
  Users,
  Receipt,
  History,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

const title = "Hotel Front Desk Software Features | Namaste Desk Nepal";
const description =
  "See every feature of Namaste Desk: offline hotel PMS, instant check-in, room booking timeline, billing, and printable guest cards — built for hotels in Nepal.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/features" },
  openGraph: { title, description, url: "/features", type: "website" },
};

const brandGreen = "#0F5953";

const features = [
  {
    icon: <WifiOff size={28} />,
    title: "Offline Hotel Software",
    description:
      "Namaste Desk runs entirely on your laptop. Hotel check-in, billing, and room management keep working during internet outages or load-shedding, with no cloud dependency.",
  },
  {
    icon: <Zap size={28} />,
    title: "Hotel Check-in Software",
    description:
      "Search a returning guest by phone number and auto-fill their ID and history in seconds. New guest check-in takes under a minute.",
  },
  {
    icon: <CalendarDays size={28} />,
    title: "Visual Room Booking Timeline",
    description:
      "A drag-and-drop calendar view of every room shows occupancy at a glance, preventing double-bookings across your property.",
  },
  {
    icon: <Receipt size={28} />,
    title: "Hotel Billing Software",
    description:
      "Generate itemized, branded invoices for room charges, food, and services. Discounts and advance payments are calculated automatically — no manual math errors.",
  },
  {
    icon: <Printer size={28} />,
    title: "Automated Guest Registration Cards",
    description:
      "Print compliant guest entry forms automatically instead of handwriting them, with your hotel's branding included.",
  },
  {
    icon: <History size={28} />,
    title: "Guest History & Repeat Stays",
    description:
      "Every past stay, preference, and ID detail is saved locally, so repeat guests are recognized instantly the next time they check in.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Local Data Privacy",
    description:
      "Guest data is stored on your own laptop, not on a third-party server, giving small hotels and guesthouses in Nepal full control over sensitive information.",
  },
  {
    icon: <Users size={28} />,
    title: "Easy for Any Staff to Use",
    description:
      "No technical background needed. Namaste Desk includes full training so your existing front desk team can use it confidently from day one.",
  },
];

export default function FeaturesPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
  ]);

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#F9FAFB" }}>
      <SiteNav />
      <main className="max-w-7xl mx-auto px-6 py-24">
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Hotel Front Desk Software Features for Nepal
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Namaste Desk is hotel management software (PMS) built specifically for hotels and
            guesthouses in Nepal. Every feature below works fully offline, so your front desk
            never stops running — even without internet.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {features.map((feat, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div
                className="mb-5 inline-flex p-3 rounded-xl bg-gray-50"
                style={{ color: brandGreen }}
              >
                {feat.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{feat.title}</h2>
              <p className="text-gray-600 leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>

        <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10 mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">See It in Action</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-100">
              <Image
                src="/dashboardppt.png"
                alt="Namaste Desk hotel PMS room booking timeline dashboard"
                fill
                loading="lazy"
                className="object-contain p-3"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-100">
              <Image
                src="/billingppt.png"
                alt="Namaste Desk hotel billing software invoice screen"
                fill
                loading="lazy"
                className="object-contain p-3"
              />
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to See Pricing?</h2>
          <p className="text-gray-600 mb-8">
            Check the <Link href="/pricing" className="underline hover:text-green-800">pricing page</Link>{" "}
            or read the <Link href="/faq" className="underline hover:text-green-800">FAQ</Link> for
            answers about setup and support.
          </p>
          <Link
            href="/#demo"
            style={{ backgroundColor: brandGreen }}
            className="inline-flex text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            Book a Free Demo
          </Link>
        </section>
      </main>
      <SiteFooter />
      <JsonLd data={breadcrumbJsonLd} />
    </div>
  );
}
