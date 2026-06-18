"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Droplet, Shield, Sparkles, Layers } from "lucide-react";

export default function PolygraniteBrandPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-background">
      {/* Hero */}
      <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />
          <Image 
            src="/assets/products/polygranite_sheet.png"
            alt="Polygranite - Premium Surface Solutions"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>
        <div className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col items-start mt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/30 text-primary font-bold tracking-widest uppercase text-xs mb-6">
              Premium Surface Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-8">
              Polygranite
            </h1>
            <p className="text-xl text-white/80 font-medium mb-10 leading-relaxed">
              Exquisite decorative surfaces and interior cladding that deliver the uncompromising luxury of natural stone with the resilience of modern engineering.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-primary font-bold hover:bg-stone-200 transition-colors flex items-center gap-2">
                Request a Sample <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Possibilities & Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Design Possibilities</h2>
            <p className="text-lg text-muted-foreground">Polygranite sheets offer unprecedented design flexibility for high-end interiors, dramatically reducing structural load while elevating visual impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Sparkles className="w-8 h-8" />, title: "Marble Aesthetics", desc: "Flawless, high-gloss natural stone textures." },
              { icon: <Shield className="w-8 h-8" />, title: "High Durability", desc: "Scratch-resistant surfaces for high traffic areas." },
              { icon: <Droplet className="w-8 h-8" />, title: "100% Waterproof", desc: "Ideal for luxury bathrooms and wet zones." },
              { icon: <Layers className="w-8 h-8" />, title: "Rapid Installation", desc: "Adhesive-based application saves weeks of labor." }
            ].map((feat, i) => (
              <div key={i} className="p-8 border border-border bg-stone-50 hover:border-primary transition-colors text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                  {feat.icon}
                </div>
                <h4 className="font-bold text-xl mb-3">{feat.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Collections */}
      <section className="py-24 bg-stone-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-extrabold mb-12">Product Collections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Polygranite Sheets", intent: "Surface Solutions", img: "/assets/products/polygranite_sheet.png", applications: "Walls, Countertops, Decorative Surfaces, Cladding" },
              { title: "PVC Wall Panels", intent: "Surface Solutions", img: "/assets/products/hero_polygranite.png", applications: "Commercial Interiors, Residential Interiors, Hospitality" },
              { title: "WPC Panels", intent: "Surface Solutions", img: "/assets/uniceil/sector_hospitality.png", applications: "Moisture-Prone Areas, Exterior Applications" },
              { title: "3D Wall Panels", intent: "Surface Solutions", img: "/assets/products/hero_3d_panels.png", applications: "Feature Walls, Reception Areas, Retail Spaces" },
              { title: "Charcoal Panels", intent: "Surface Solutions", img: "/assets/uniceil/sector_luxury_res.png", applications: "Luxury Interiors, Commercial Spaces, Decorative Features" },
              { title: "PVC Flooring", intent: "Flooring Systems", img: "/assets/products/hero_spc.png", applications: "Offices, Retail, Commercial Interiors" },
            ].map((col, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-72 overflow-hidden bg-muted mb-6">
                  <Image src={col.img} alt={col.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">{col.intent}</span>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors mb-2">{col.title}</h3>
                  <p className="text-sm text-muted-foreground"><span className="font-bold">Applications:</span> {col.applications}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] bg-muted">
               <Image src="/assets/projects/polygranite_sheet.png" alt="Polygranite Applications" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-extrabold mb-6 text-white">Ideal Application Areas</h2>
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                Auranook specifies Polygranite for projects demanding premium aesthetics with zero maintenance overhead.
              </p>
              
              <div className="space-y-6">
                {[
                  "Hospitality & Hotel Lobbies",
                  "Luxury Residential Living Areas",
                  "Corporate Reception Feature Walls",
                  "Premium Bathroom Surfaces",
                  "Retail Showroom Interiors"
                ].map((app, i) => (
                  <div key={i} className="flex items-center gap-4 border-b border-white/10 pb-4">
                    <ArrowRight className="text-primary shrink-0" />
                    <span className="text-xl font-bold text-white">{app}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <Link href="/projects" className="text-primary font-bold hover:text-white transition-colors flex items-center gap-2">
                  View Polygranite Project Stories <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Request CTA */}
      <section className="py-24 bg-background text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6">Experience the Quality</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Architects and designers can request a physical sample box containing our full range of Polygranite finishes.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-primary text-white font-bold hover:brightness-110 transition-colors shadow-lg">
              Request Physical Sample
            </Link>
            <Link href="/resources" className="px-8 py-4 border-2 border-foreground text-foreground font-bold hover:bg-foreground hover:text-white transition-colors flex items-center gap-2">
              <Download size={18} /> Digital Catalogue
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
