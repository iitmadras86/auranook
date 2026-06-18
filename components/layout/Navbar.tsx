"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Solutions", href: "/solutions" },
  { name: "Brands", href: "/brands" },
  { 
    name: "Architectural Systems", 
    href: "/products",
    dropdownGroups: [
      {
        title: "Interior Systems",
        links: [
          { name: "Ceiling Systems", href: "/products" },
          { name: "Wall Systems", href: "/products" },
          { name: "Surface Solutions", href: "/products" },
          { name: "Flooring Systems", href: "/products" },
        ]
      },
      {
        title: "Exterior Systems",
        links: [
          { name: "Façade Systems", href: "/products" },
          { name: "Soffit Systems", href: "/products" },
          { name: "Landscape Systems", href: "/products" },
          { name: "Urban Furniture", href: "/products" },
        ]
      }
    ]
  },
  { name: "Resources", href: "/resources" },
  { name: "Gallery", href: "/gallery" },
  { name: "Projects", href: "/projects" },
  { name: "Insights", href: "/insights" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
        isScrolled
          ? "bg-white/95 dark:bg-black/95 backdrop-blur-md border-border py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group z-50">
          <div className="text-primary transition-transform group-hover:scale-105 duration-300">
            {/* Auranook Logo SVG */}
            <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
            </svg>
          </div>
          <span className="text-lg font-extrabold tracking-tight text-foreground">AURANOOK</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <div 
              key={link.name}
              className="relative group"
              onMouseEnter={() => link.dropdownGroups && setActiveDropdown(link.name)}
              onMouseLeave={() => link.dropdownGroups && setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 text-sm font-semibold tracking-wide text-foreground/80 hover:text-primary transition-colors py-2"
              >
                {link.name}
                {link.dropdownGroups && <ChevronDown size={14} className="opacity-50" />}
              </Link>
              
              {/* Dropdown Menu */}
              {link.dropdownGroups && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[400px] bg-white dark:bg-stone-900 border border-border shadow-2xl rounded-xl overflow-hidden flex py-4 px-2"
                    >
                      {link.dropdownGroups.map(group => (
                        <div key={group.title} className="flex-1 px-4">
                          <h4 className="text-xs font-bold tracking-widest text-primary uppercase mb-3 border-b border-border/50 pb-2">
                            {group.title}
                          </h4>
                          <div className="flex flex-col gap-1">
                            {group.links.map(sublink => (
                              <Link 
                                key={sublink.name} 
                                href={sublink.href}
                                className="px-2 py-2 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-muted/50 transition-colors rounded-md"
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          
          <Link
            href="/contact"
            className="ml-2 px-5 py-2 rounded-full bg-primary text-primary-foreground font-bold text-sm tracking-wide hover:brightness-110 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden text-foreground p-2 z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="xl:hidden overflow-hidden bg-background border-b border-border absolute top-full left-0 w-full shadow-xl"
          >
            <div className="flex flex-col px-6 py-6 gap-2 max-h-[80vh] overflow-y-auto">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <Link
                    href={link.href}
                    onClick={() => !link.dropdownGroups && setIsOpen(false)}
                    className="text-lg font-medium py-3 border-b border-border/50 text-foreground/90 hover:text-primary transition-colors flex justify-between items-center"
                  >
                    {link.name}
                    {link.dropdownGroups && <ChevronDown size={18} />}
                  </Link>
                  {link.dropdownGroups && (
                    <div className="flex flex-col pl-4 py-3 gap-4 border-b border-border/50">
                      {link.dropdownGroups.map(group => (
                        <div key={group.title}>
                          <h4 className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
                            {group.title}
                          </h4>
                          <div className="flex flex-col gap-2 pl-2">
                            {group.links.map(sublink => (
                              <Link
                                key={sublink.name}
                                href={sublink.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium py-1 text-foreground/70 hover:text-primary transition-colors"
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-6 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-center hover:brightness-110 transition-all text-lg shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
