'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  WifiOff,
  ShieldCheck,
  Zap,
  CalendarDays,
  Users,
  Printer,
  ArrowRight,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

export default function HomeClient() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const showcaseSlides = [
    {
      title: "Installing Namaste Desk",
      description: "Get started in seconds. Download the Windows app, install it on your laptop, and you're ready to manage your hotel. No internet needed, no cloud dependency.",
      image: "/installationppt.png",
      alt: "Namaste Desk hotel software installation screen on Windows",
      points: ["One-click install", "No cloud required", "Works offline"]
    },
    {
      title: "Visual Room Management",
      description: "End the booking chaos. See your entire hotel's occupancy at a glance with our intuitive room timeline. Scroll through weeks of bookings in seconds.",
      image: "/dashboardppt.png",
      alt: "Namaste Desk hotel PMS room booking timeline dashboard",
      points: ["Real-time availability", "Drag & Drop timeline", "Works 100% offline"]
    },
    {
      title: "5-Second Repeat Check-ins",
      description: "Your loyal guests shouldn't have to wait. Type a phone number to instantly load history, identity details, and preferences from previous stays.",
      image: "/autocheckinppt.png",
      alt: "Namaste Desk hotel check-in software auto-filling returning guest details",
      points: ["Instant phone search", "Auto-fill ID details", "Save receptionist time"]
    },
    {
      title: "Error-Free Billing",
      description: "Generate professional receipts instantly. Add room charges, food, and services with one click. Manage discounts and advance payments accurately.",
      image: "/billingppt.png",
      alt: "Namaste Desk hotel billing software invoice screen",
      points: ["Itemized service tracking", "Automatic math", "Professional branded bills"]
    },
    {
      title: "Automated Guest Forms",
      description: "Professional guest entry cards generated automatically. Just click print, get a signature, and stay compliant without the handwriting headache.",
      image: "/guestchecinsheetppt.png",
      alt: "Namaste Desk auto-generated guest registration card for printing",
      points: ["Branded for your hotel", "Auto-generated forms", "Print-ready layout"]
    },
    {
      title: "Share the Success, Get Rewarded",
      description: "Know a fellow hotel or guesthouse owner? Refer them to Namaste Desk. When they sign up, you get a 20% discount on your next renewal!",
      image: "/referppt.png",
      alt: "Namaste Desk hotel software referral reward program screen",
      points: ["Easy referral sharing", "20% discount reward", "Help fellow hoteliers"]
    }
  ];

  const googleFormAction = 'https://docs.google.com/forms/d/e/1FAIpQLSenisFLdADWC-KpQtyCfgAxuSvZLdsa92V7la6vmo-dN9X2Sg/formResponse';

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  const handleIframeLoad = () => {
    if (!isSubmitting) {
      return;
    }

    setSubmitted(true);
    setIsSubmitting(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === showcaseSlides.length - 1 ? 0 : prev + 1));
    }, 4500); // Slides every 4.5 seconds
    return () => clearInterval(timer);
  }, [showcaseSlides.length]);

  const brandGreen = '#0F5953';

  return (
    <div className="min-h-screen font-sans selection:bg-green-100" style={{ backgroundColor: '#F9FAFB' }}>

      <SiteNav />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-8 animate-fade-in">
            <ShieldCheck size={16} /> Trusted by Hotels in Nepal &amp; Finland
          </div>

          {/* High-end promo badge (hero) */}
          <div className="absolute right-6 top-6 hidden md:block">
            <div className="relative inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#111827] font-extrabold shadow-2xl border border-white" aria-hidden>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="drop-shadow-sm">
                <path d="M12 2l2.9 6.26L21 9.27l-4.5 3.9L17.8 21 12 17.77 6.2 21l1.3-7.83L3 9.27l6.1-1.01L12 2z" fill="#fff" opacity="0.9" />
              </svg>
              <div className="text-left">
                <div className="text-xs uppercase leading-none">Referral offer</div>
                <div className="text-sm md:text-base leading-tight">Refer a hotel owner</div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.05] tracking-tight">
            Hotel Management Software for Nepal — Namaste Desk Works 100% Offline
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Namaste Desk is a lightweight hotel front desk software (PMS) for Windows laptops.
            Install once and run your hotel without internet — no load-shedding worries, no cloud
            dependency. Stop the booking chaos and check in repeat guests instantly with just
            their phone number, no need to ask for IDs again.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#demo"
               style={{ backgroundColor: brandGreen }}
               className="group text-white font-bold py-5 px-10 rounded-2xl transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3">
              Get Started Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#showcase" className="bg-white text-gray-700 border border-gray-200 font-bold py-5 px-10 rounded-2xl hover:bg-gray-50 transition-all flex items-center justify-center">
              Watch Demo
            </a>
          </div>
        </div>
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-green-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-yellow-300 blur-3xl" />
        </div>
      </section>

      {/* --- REFERRAL SECTION --- */}
      <section className="bg-gradient-to-r from-yellow-50 to-amber-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Share the Success, Get Rewarded</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            If you know a fellow hotel or guesthouse owner, refer them to Namaste Desk. When they sign up, you get a 20% discount on your next renewal!
          </p>
        </div>
      </section>

      {/* --- FEATURE GRID --- */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-100">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hotel PMS Features Built for Nepal</h2>
          <p className="text-gray-500 max-w-xl mx-auto italic">
            Everything a Nepali hotel front desk needs, nothing it doesn&apos;t. See the{' '}
            <Link href="/features" className="underline hover:text-green-800">full features list</Link>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <WifiOff size={32} />,
              title: "100% Offline Hotel Software",
              desc: "Don't let slow Wi-Fi or load-shedding stop your business. Check guests in and out even during power cuts or internet outages."
            },
            {
              icon: <Zap size={32} />,
              title: "Instant Check-ins",
              desc: "Load returning guest info by phone number. Complete hotel check-in in seconds, not minutes."
            },
            {
              icon: <CalendarDays size={32} />,
              title: "Visual Room Master",
              desc: "A beautiful timeline view to prevent double-bookings. See exactly which rooms are ready at a glance."
            },
            {
              icon: <Printer size={32} />,
              title: "Auto Guest Cards & Billing",
              desc: "Stop handwriting cards and bills. Generate and print guest entry forms and itemized invoices automatically."
            },
            {
              icon: <ShieldCheck size={32} />,
              title: "Local Data Privacy",
              desc: "Privacy-friendly by design. All sensitive guest details stay on your laptop, not on a foreign server."
            },
            {
              icon: <Users size={32} />,
              title: "Staff Empowerment",
              desc: "No technical skills required. We provide full training so your current team can manage the desk like experts."
            }
          ].map((feat, i) => (
            <div key={i} className="group bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-gray-50 group-hover:bg-green-50 transition-colors" style={{ color: brandGreen }}>
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feat.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- COMPARISON --- */}
      <section id="comparison" className="bg-gray-900 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-20">Paper Register vs. Namaste Desk Hotel Software</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <XCircle className="text-red-400" /> Traditional Registers
              </h3>
              <ul className="space-y-6 text-gray-400">
                <li className="flex items-center gap-3">Missing guest history for marketing</li>
                <li className="flex items-center gap-3">Slow, manual math leading to errors</li>
                <li className="flex items-center gap-3">Physical books can be lost or stolen</li>
                <li className="flex items-center gap-3">Unprofessional look for modern tourists</li>
              </ul>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-bl-full" />
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <CheckCircle2 style={{ color: brandGreen }} /> Namaste Desk
              </h3>
              <ul className="space-y-6 text-gray-700">
                <li className="flex items-center gap-3 font-medium"><CheckCircle2 size={18} style={{ color: brandGreen }} /> Search any guest name instantly</li>
                <li className="flex items-center gap-3 font-medium"><CheckCircle2 size={18} style={{ color: brandGreen }} /> Branded, error-free digital bills</li>
                <li className="flex items-center gap-3 font-medium"><CheckCircle2 size={18} style={{ color: brandGreen }} /> Encrypted local & cloud backups</li>
                <li className="flex items-center gap-3 font-medium"><CheckCircle2 size={18} style={{ color: brandGreen }} /> A modern, high-tech reception feel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SHOWCASE --- */}
      <section id="showcase" className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">A Digital Front Desk That Actually Works</h2>
            <p className="text-gray-500 text-lg">Watch how Namaste Desk transforms daily hotel reception work in Nepal.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* LEFT: THE AUTO-CHANGING IMAGE */}
            <div className="lg:col-span-7 relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#0F5953] to-[#E5B80B] rounded-[2.5rem] blur-xl opacity-10"></div>
              <div className="relative bg-gray-50 rounded-[2rem] overflow-hidden border border-gray-200 shadow-2xl h-[280px] sm:h-[360px] lg:h-[450px]">
                {showcaseSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      loading={index === 0 ? undefined : 'lazy'}
                      priority={index === 0}
                      className="object-contain p-4"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-5 lg:hidden rounded-2xl border border-gray-200 bg-white shadow-sm p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0F5953] mb-2">{showcaseSlides[currentSlide].title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{showcaseSlides[currentSlide].description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {showcaseSlides[currentSlide].points.map((point, pointIndex) => (
                    <span key={pointIndex} className="rounded-full bg-gray-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-700">
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: THE CONTENT & PROGRESS */}
            <div className="hidden lg:block lg:col-span-5 space-y-8">
              {showcaseSlides.map((slide, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`cursor-pointer p-6 rounded-2xl transition-all border-l-4 ${index === currentSlide ? 'bg-green-50 shadow-sm border-[#0F5953]' : 'bg-transparent border-transparent opacity-40 hover:opacity-60'}`}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{slide.title}</h3>

                  {index === currentSlide && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{slide.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {slide.points.map((p, i) => (
                          <span key={i} className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-green-800 bg-white px-2 py-1 rounded-md border border-green-100">
                            <CheckCircle2 size={10} /> {p}
                          </span>
                        ))}
                      </div>
                      {/* PROGRESS BAR */}
                      <div className="w-full bg-gray-200 h-1 mt-6 rounded-full overflow-hidden">
                        <div className="bg-[#0F5953] h-full animate-progress-fast" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- LINKS TO LANDING PAGES --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <Link href="/features" className="p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all bg-white">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Explore All Features</h3>
            <p className="text-gray-500 text-sm">See every hotel PMS feature Namaste Desk offers.</p>
          </Link>
          <Link href="/pricing" className="p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all bg-white">
            <h3 className="text-lg font-bold text-gray-900 mb-2">View Pricing</h3>
            <p className="text-gray-500 text-sm">Affordable hotel software pricing for Nepali properties.</p>
          </Link>
          <Link href="/faq" className="p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all bg-white">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Read the FAQ</h3>
            <p className="text-gray-500 text-sm">Answers to common questions about Namaste Desk.</p>
          </Link>
        </div>
      </section>

      {/* --- CONTACT FORM --- */}
      <section id="demo" className="max-w-4xl mx-auto px-6 py-24 mb-20 bg-white rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden">
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Go Digital?</h2>
          <p className="text-gray-600">Start your free trial today. We will call you to explain everything.</p>
        </div>

        <div className="relative z-10">
          {submitted ? (
            <div className="text-center py-10 bg-green-50 rounded-3xl border-2 border-green-200">
              <CheckCircle2 size={64} className="mx-auto mb-6" style={{ color: brandGreen }} />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Details Received!</h3>
              <p className="text-gray-600 px-10">We will reach out to you within 24 hours to help set up your hotel.</p>
              <button onClick={() => setSubmitted(false)} className="mt-8 text-sm font-bold underline hover:text-green-800">Submit another property</button>
            </div>
          ) : (
            <form action={googleFormAction} method="POST" target="hidden_iframe" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="space-y-6">
    <div>
      <label className="block text-sm font-bold text-gray-700 mb-2">Owner / Contact Name</label>
      <input type="text" name="entry.257876860" required placeholder="Full Name" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-green-500 transition-all outline-none border border-gray-100" />
    </div>
    <div>
      <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
      <input type="tel" name="entry.1182936361" required placeholder="+977 / +358" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-green-500 transition-all outline-none border border-gray-100" />
    </div>
    <div>
      <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
      <input type="email" name="entry.719615662" required placeholder="owner@hotel.com" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-green-500 transition-all outline-none border border-gray-100" />
    </div>
  </div>

  <div className="space-y-6">
    <div>
      <label className="block text-sm font-bold text-gray-700 mb-2">Hotel / Guesthouse Name</label>
      <input type="text" name="entry.1555551519" required placeholder="Property Name" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-green-500 transition-all outline-none border border-gray-100" />
    </div>
    <div>
      <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
      <input type="text" name="entry.1607636918" required placeholder="City (e.g. Pokhara, Helsinki)" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-green-500 transition-all outline-none border border-gray-100" />
    </div>
    <div>
      <label className="block text-sm font-bold text-gray-700 mb-2">Number of Rooms</label>
      <select name="entry.1533646303" required className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-green-500 transition-all outline-none appearance-none border border-gray-100">
        <option value="">Select Room Count</option>
        <option value="0-10">0-10 Rooms</option>
        <option value="11-20">11-20 Rooms</option>
        <option value="21-30">21-30 Rooms</option>
        <option value="31+">31+ Rooms</option>
      </select>
    </div>
  </div>

  <div className="md:col-span-2 mt-4">
    <button type="submit" style={{ backgroundColor: brandGreen }} className="w-full text-white font-bold py-5 rounded-2xl shadow-xl hover:scale-[1.01] active:scale-100 transition-all text-lg">
      Request My Personal Demo
    </button>
  </div>
</form>
          )}
        </div>
        <iframe name="hidden_iframe" className="hidden" onLoad={handleIframeLoad} title="form submission frame" />
      </section>

      <SiteFooter />
    </div>
  );
}
