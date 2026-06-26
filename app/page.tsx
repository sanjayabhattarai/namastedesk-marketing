import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo";

const title = "Hotel Management Software Nepal | Namaste Desk (Offline PMS)";
const description =
  "Namaste Desk is offline-first hotel front desk software for hotels and guesthouses in Nepal. Manage check-ins, billing, and room bookings with no internet required.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Home() {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Namaste Desk",
    description:
      "Namaste Desk is an offline-first hotel front desk management software (PMS) built for hotels and guesthouses in Nepal. It handles check-in/check-out, room booking timelines, guest history lookup by phone number, billing, and printable guest registration cards without requiring an internet connection.",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Hotel Management Software",
    operatingSystem: "Windows",
    url: SITE_URL,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    screenshot: [
      `${SITE_URL}/dashboardppt.png`,
      `${SITE_URL}/billingppt.png`,
      `${SITE_URL}/autocheckinppt.png`,
      `${SITE_URL}/guestchecinsheetppt.png`,
      `${SITE_URL}/installationppt.png`,
    ],
    author: { "@type": "Organization", name: "Namaste Desk" },
    publisher: { "@type": "Organization", name: "Namaste Desk" },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/pricing`,
      priceCurrency: "NPR",
      availability: "https://schema.org/InStock",
      description: "Custom pricing based on hotel size. Contact Namaste Desk for a quote.",
    },
    featureList: [
      "Offline-first operation, no internet required",
      "Visual room booking timeline",
      "Instant repeat guest check-in by phone number",
      "Itemized hotel billing and invoicing",
      "Automated printable guest registration cards",
      "Local data storage for guest privacy",
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  };

  return (
    <>
      <HomeClient />
      <JsonLd data={softwareJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
    </>
  );
}
