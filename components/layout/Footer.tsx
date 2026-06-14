"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-stone-300 pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-primary transition-transform group-hover:scale-105 duration-300">
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
              </svg>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white">AURANOOK</span>
          </Link>
          <p className="text-sm text-stone-400 leading-relaxed max-w-sm mt-2">
            Enterprise-grade architectural surfaces, ceilings, and interior systems engineered for modern spaces.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-white mb-2 tracking-wide uppercase text-xs">Brands & Systems</h4>
          <Link href="/brands/uniceil" className="text-sm text-stone-400 hover:text-primary transition-colors">The Uniceil</Link>
          <Link href="/brands/polygranite" className="text-sm text-stone-400 hover:text-primary transition-colors">Polygranite</Link>
          <Link href="/solutions" className="text-sm text-stone-400 hover:text-primary transition-colors">Industry Solutions</Link>
          <Link href="/products" className="text-sm text-stone-400 hover:text-primary transition-colors">All Products</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-white mb-2 tracking-wide uppercase text-xs">Company</h4>
          <Link href="/why-auranook" className="text-sm text-stone-400 hover:text-primary transition-colors">Why Auranook</Link>
          <Link href="/projects" className="text-sm text-stone-400 hover:text-primary transition-colors">Project Stories</Link>
          <Link href="/resources" className="text-sm text-stone-400 hover:text-primary transition-colors">Technical Resources</Link>
          <Link href="/contact" className="text-sm text-stone-400 hover:text-primary transition-colors">Contact</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-white mb-2 tracking-wide uppercase text-xs">Contact Us</h4>
          <p className="text-sm text-stone-400">
            Auranook Headquarters<br />
            Sakri Road, Canara Bank<br />
            Muzaffarpur, Bihar - 843113<br />
            it is GSTIN number only<br />
            GSTIN: 10ACIFA9918P1ZZ
          </p>
          <p className="text-sm text-stone-400 mt-2">
            Email: <a href="mailto:info@auranook.com" className="hover:text-primary">info@auranook.com</a><br />
            Phone: <a href="tel:+919507054062" className="hover:text-primary">+91 95070 54062</a>
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-stone-500">&copy; {new Date().getFullYear()} Auranook Architectural Systems. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="text-stone-500 hover:text-white text-xs">Privacy Policy</Link>
          <Link href="#" className="text-stone-500 hover:text-white text-xs">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
