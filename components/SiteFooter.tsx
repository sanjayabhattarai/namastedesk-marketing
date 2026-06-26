import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/Namaste_desk_logo.jpg"
              alt="Namaste Desk logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-gray-900">Namaste Desk</span>
          </div>
          <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
            Namaste Desk is offline-first hotel front desk software (hotel
            management software / PMS) built for hotels, guesthouses, and
            mökki in Nepal and Finland — no cloud or internet required.
          </p>
          <div className="flex gap-4">
            <a
              href="https://wa.me/358407017910"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
              style={{ backgroundColor: "#25D366" }}
              className="p-3 rounded-full text-white hover:scale-110 transition-transform"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                <path d="M12.04 2C6.59 2 2.16 6.37 2.16 11.74c0 1.86.53 3.68 1.53 5.26L2 22l5.16-1.65a10.15 10.15 0 0 0 4.88 1.2h.01c5.45 0 9.88-4.37 9.88-9.74C22 6.37 17.48 2 12.04 2Zm0 17.8h-.01a8.4 8.4 0 0 1-4.26-1.17l-.3-.18-3.06.98.99-2.92-.19-.31a8.04 8.04 0 0 1-1.25-4.36c0-4.44 3.68-8.05 8.1-8.05 2.14 0 4.14.82 5.65 2.3a7.8 7.8 0 0 1 2.44 5.75c0 4.44-3.68 8.05-8.11 8.05Zm4.56-5.88c-.25-.12-1.47-.7-1.7-.79-.23-.08-.4-.12-.57.12-.17.25-.66.79-.8.95-.15.17-.3.19-.55.06-.25-.12-1.04-.38-1.98-1.2-.73-.65-1.22-1.46-1.36-1.71-.14-.25-.02-.39.1-.52.11-.11.25-.29.37-.43.13-.14.17-.24.25-.4.08-.17.04-.31-.02-.43-.07-.12-.57-1.36-.78-1.86-.21-.5-.42-.43-.57-.44l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.89.86-.89 2.1s.91 2.43 1.04 2.6c.13.17 1.79 2.73 4.35 3.83.61.26 1.08.42 1.45.54.61.2 1.17.17 1.61.1.49-.08 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.17-.48-.29Z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h5 className="font-bold mb-6">Product</h5>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li>
              <Link href="/features" className="hover:text-green-800 transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-green-800 transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-green-800 transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-800 transition-colors">
                About Namaste Desk
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-green-800 transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-6">Markets</h5>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li>Hotels in Nepal</li>
            <li>Guesthouses in Nepal</li>
            <li>Finland Majatalos</li>
            <li>Mökki Management</li>
          </ul>
          <h5 className="font-bold mb-4 mt-8">Contact</h5>
          <ul className="space-y-3 text-gray-500 text-sm">
            <li>
              <a href="mailto:hello@namastedesk.com" className="hover:text-green-800 transition-colors">
                hello@namastedesk.com
              </a>
            </li>
            <li>24/7 Support Active</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-400 text-xs tracking-widest uppercase">
        &copy; 2026 Namaste Desk. Made for the owners who keep the lights on.
      </div>
    </footer>
  );
}
