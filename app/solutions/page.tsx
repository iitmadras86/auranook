"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const solutions = [
  {
    id: "commercial",
    title: "Commercial Offices",
    challenge: "Modern open-plan offices require exceptional acoustic management, high-performance lighting integration, and corporate brand alignment without compromising on the architectural vision.",
    recommended: "Acoustic Baffle Systems & Interior Wall Cladding",
    brand: "The Uniceil & Polygranite",
    benefits: [
      "Significant NRC Reduction for focused work",
      "Seamless integration with HVAC and Lighting",
      "High-durability wall protection for high-traffic corridors"
    ],
    img: "/assets/uniceil/sector_commercial.png"
  },
  {
    id: "hospitality",
    title: "Hospitality",
    challenge: "Hotels and resorts demand luxurious, premium surface finishes that are capable of withstanding heavy guest traffic and rigorous cleaning protocols.",
    recommended: "Decorative Surface Sheets & Architectural Façades",
    brand: "Polygranite & The Uniceil",
    benefits: [
      "Zero-maintenance marble and stone aesthetics",
      "100% waterproof surfaces for premium wet zones",
      "Striking exterior building envelopes to attract guests"
    ],
    img: "/assets/uniceil/sector_hospitality.png"
  },
  {
    id: "retail",
    title: "Retail",
    challenge: "Boutiques and showrooms need to establish an immediate, compelling visual identity that highlights merchandise while enduring constant footfall.",
    recommended: "3D Geometric Panels & SPC Commercial Flooring",
    brand: "Polygranite",
    benefits: [
      "Unique geometric branding opportunities",
      "Commercial-grade wear layer for extreme foot traffic",
      "Rapid installation minimizing store downtime"
    ],
    img: "/assets/uniceil/sector_retail.png"
  },
  {
    id: "healthcare",
    title: "Healthcare",
    challenge: "Hospitals require hygienic, easy-to-clean surfaces that meet stringent infection control standards while maintaining a calming environment for patients.",
    recommended: "Hygienic Wall Systems & Linear Ceilings",
    brand: "The Uniceil & Polygranite",
    benefits: [
      "Non-porous, antimicrobial surface options",
      "Washable ceiling systems",
      "Class-A fire compliance"
    ],
    img: "/assets/uniceil/sector_healthcare.png"
  },
  {
    id: "education",
    title: "Education",
    challenge: "Schools and universities must prioritize speech intelligibility in lecture halls and extreme durability in public corridors.",
    recommended: "High-NRC Acoustic Ceilings & Impact-Resistant Surfaces",
    brand: "The Uniceil & Polygranite",
    benefits: [
      "Enhanced speech intelligibility for learning",
      "High impact resistance against daily wear",
      "Sustainable and safe material composition"
    ],
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "luxury-residential",
    title: "Luxury Residential",
    challenge: "High-end homes and residential developments require bespoke, opulent finishes that reflect the owner's status without the heavy maintenance of natural stone.",
    recommended: "Premium Interior Surfaces",
    brand: "Polygranite",
    benefits: [
      "Flawless high-gloss natural stone textures",
      "Moisture resistance for luxury coastal properties",
      "Substantial structural load reduction vs. real stone"
    ],
    img: "/assets/uniceil/sector_luxury_res.png"
  }
];

export default function SolutionsHub() {
  return (
    <div className="bg-background pt-24 pb-20">
      {/* Hero */}
      <div className="container mx-auto px-6 md:px-12 mb-20 text-center max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Industry Applications</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Sector-Specific <span className="text-primary">Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            Auranook provides specialized architectural systems engineered to meet the distinct challenges of commercial, hospitality, healthcare, and residential environments.
          </p>
        </motion.div>
      </div>

      {/* Solutions Sections */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {solutions.map((sol, idx) => (
            <motion.div 
              key={sol.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: (idx % 2) * 0.2 }}
              className="group relative flex flex-col bg-white border border-border overflow-hidden"
            >
              {/* Image Header with Hover Layer */}
              <div className="relative h-80 w-full overflow-hidden bg-muted">
                <Image src={sol.img} alt={`${sol.title} Architectural Solutions`} fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Overlay Text */}
                <div className="absolute bottom-6 left-8 right-8 z-10 flex justify-between items-end">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{sol.title}</h2>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500">
                    <ArrowRight className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">Industry Challenge</span>
                  <p className="text-base leading-relaxed text-foreground/80">{sol.challenge}</p>
                </div>

                <div className="p-6 bg-stone-50 border border-stone-200 mb-8 rounded-sm">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">Recommended Systems</span>
                      <h4 className="text-lg font-bold text-foreground">{sol.recommended}</h4>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">Applicable Brands</span>
                      <h4 className="text-lg font-bold text-foreground">{sol.brand}</h4>
                    </div>
                  </div>
                </div>

                <div className="mb-10 flex-grow">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-4">Design Benefits</span>
                  <ul className="space-y-3">
                    {sol.benefits.map((ben, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-medium text-foreground/90">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="leading-snug">{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 flex flex-wrap gap-4 border-t border-border mt-auto">
                  <Link href={`/projects?sector=${sol.id}`} className="px-6 py-3 bg-foreground text-background text-sm font-bold hover:bg-foreground/90 transition-colors flex items-center gap-2 w-full justify-center sm:w-auto">
                    Explore Solutions <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
