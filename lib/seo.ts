// Central SEO/site constants. Update SITE_URL once the production domain is live.
export const SITE_URL = "https://namastedesk.com";
export const SITE_NAME = "Namaste Desk";
export const SITE_TITLE_SUFFIX = " | Namaste Desk";
export const DEFAULT_TITLE =
  "Namaste Desk — Offline Hotel Management Software for Nepal";
export const DEFAULT_DESCRIPTION =
  "Namaste Desk is offline-first hotel front desk software (PMS) built for hotels and guesthouses in Nepal. Manage check-ins, billing, and room bookings without internet.";
export const DEFAULT_OG_IMAGE = "/dashboardppt.png";
export const CONTACT_EMAIL = "hello@namastedesk.com";
export const WHATSAPP_LINK = "https://wa.me/358407017910";

export const ORG_SOCIAL_LINKS = [WHATSAPP_LINK];

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function buildBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
