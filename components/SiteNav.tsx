import Link from "next/link";
import Image from "next/image";

const brandGreen = "#0F5953";

export default function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-inner">
            <Image
              src="/Namaste_desk_logo.jpg"
              alt="Namaste Desk logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Namaste Desk
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
          <Link href="/features" className="hover:text-green-800 transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-green-800 transition-colors">
            Pricing
          </Link>
          <Link href="/faq" className="hover:text-green-800 transition-colors">
            FAQ
          </Link>
          <Link href="/blog" className="hover:text-green-800 transition-colors">
            Blog
          </Link>
          <Link href="/about" className="hover:text-green-800 transition-colors">
            About
          </Link>
          <Link
            href="/#demo"
            style={{ backgroundColor: brandGreen }}
            className="text-white px-5 py-2.5 rounded-full hover:opacity-90 transition-all shadow-md"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
