"use client";
// import Logo from "@/assets/logo.png";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 font-sans border-t border-slate-800">
      {/* Top Banner / CTA */}
      <div className="border-b border-slate-800 bg-slate-950/50">
        <div className="container mx-auto px-4 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl md:text-2xl  font-bold text-white">
              Ready to Upgrade Your Commercial Kitchen?
            </h3>
            <p className="text-sm text-slate-400">
              Speak with our kitchen equipment specialists or request a custom
              fabrication quote today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-900 bg-white rounded-md hover:bg-slate-100 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="tel:+18005550199"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white border border-slate-700 rounded-md hover:bg-slate-800 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Sales
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              {/* <Image src={Logo} alt="Richtec" className="w-50 h-50" /> */}
              <span className="text-2xl  font-bold text-white tracking-tight">
                RICHTEC
              </span>
              <span className="block text-xs uppercase tracking-widest text-slate-400 font-semibold">
                Professional Equipment Ltd.
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Premier manufacturer, distributor, and vendor of heavy-duty
              industrial kitchen equipment, custom stainless steel fabrication,
              and turnkey culinary installations.
            </p>

            {/* Newsletter Signup */}
            <div className="pt-2 space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-white">
                Subscribe to Catalog Updates
              </span>
              <form
                className="flex max-w-sm"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3.5 py-2 text-sm bg-slate-800 text-white placeholder-slate-500 rounded-l-md border border-slate-700 focus:outline-none focus:border-slate-500"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="bg-primary px-4 py-2 text-white rounded-r-md hover:opacity-90 transition-opacity bg-amber-600 flex items-center justify-center"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Equipment Categories */}
          <div className="space-y-3">
            <h4 className="text-sm  font-bold text-white uppercase tracking-wider">
              Equipment
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  href="/products/cooking"
                  className="hover:text-white transition-colors"
                >
                  Cooking & Ranges
                </Link>
              </li>
              <li>
                <Link
                  href="/products/refrigeration"
                  className="hover:text-white transition-colors"
                >
                  Commercial Refrigeration
                </Link>
              </li>
              <li>
                <Link
                  href="/products/stainless-steel"
                  className="hover:text-white transition-colors"
                >
                  Custom Stainless Steel
                </Link>
              </li>
              <li>
                <Link
                  href="/products/dishwashing"
                  className="hover:text-white transition-colors"
                >
                  Warewashing & Sanitation
                </Link>
              </li>
              <li>
                <Link
                  href="/products/food-prep"
                  className="hover:text-white transition-colors"
                >
                  Food Processing & Prep
                </Link>
              </li>
              <li>
                <Link
                  href="/products/ventilation"
                  className="hover:text-white transition-colors"
                >
                  Exhaust & Ventilation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm  font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  href="/services#fabrication"
                  className="hover:text-white transition-colors"
                >
                  Custom Steel Fabrication
                </Link>
              </li>
              <li>
                <Link
                  href="/services#installation"
                  className="hover:text-white transition-colors"
                >
                  Turnkey Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#consulting"
                  className="hover:text-white transition-colors"
                >
                  3D CAD Kitchen Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services#maintenance"
                  className="hover:text-white transition-colors"
                >
                  Preventative Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Richtec
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="hover:text-white transition-colors"
                >
                  Project Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-sm  font-bold text-white uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  102 Industrial Parkway, Suite 400, Chicago, IL 60611
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href="tel:2348108713152"
                  className="hover:text-white transition-colors"
                >
                  +234 810 8713 152
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href="mailto:info@richtec.com"
                  className="hover:text-white transition-colors"
                >
                  info@richtecafrica.com
                </a>
              </li>
              <li className="flex items-start space-x-2.5 pt-1 border-t border-slate-800">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-xs">
                  Mon – Fri: 8:00 AM – 6:00 PM
                  <br />
                  <span className="text-amber-500 font-semibold">
                    24/7 Customer Support Available
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-slate-800 bg-slate-950 text-xs text-slate-500">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Richtec Professional Equipment LTD. All
            rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link
              href="/privacy-policy"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/warranty"
              className="hover:text-slate-300 transition-colors"
            >
              Warranty & Returns
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-slate-300 transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
