"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Download, VolumeX, Shield, Scissors, Droplets, Leaf, Flame } from "lucide-react";

export default function UniceilBrandPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-background">
      {/* Hero */}
      <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />
          <Image 
            src="/assets/products/hero_luxury.png"
            alt="The Uniceil - Architectural Systems"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>
        <div className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col items-start mt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/30 text-primary font-bold tracking-widest uppercase text-xs mb-6">
              Official Distribution Partner for India
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-8">
              The Uniceil
            </h1>
            <p className="text-xl text-white/80 font-medium mb-10 leading-relaxed">
              World-class architectural ceilings, advanced wall systems, and exterior façades engineered for acoustic performance and enduring visual identity.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="px-8 py-4 bg-primary text-white font-bold hover:bg-white hover:text-primary transition-colors flex items-center gap-2">
                Project Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-extrabold mb-6">Pioneering Architectural Systems</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As the authorized specification partner for The Uniceil in India, Auranook provides architects and developers access to state-of-the-art building envelope and interior systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Every Uniceil system is designed to solve complex design challenges—from managing acoustic reverberation in open-plan offices to delivering weather-resistant, striking exterior façades for modern high-rises.
              </p>
              <ul className="space-y-3">
                {["Class-A Fire Ratings", "Unmatched NRC Acoustic Performance", "Rapid Installation Frameworks", "Sustainable & Recyclable Materials"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-foreground">
                    <CheckCircle2 className="text-primary w-5 h-5" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative aspect-square bg-muted">
              <Image src="/assets/projects/about_hero.png" alt="Uniceil Systems" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Systems Portfolio */}
      <section className="py-24 bg-stone-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Uniceil Systems Portfolio</h2>
            <p className="text-lg text-muted-foreground">Engineered solutions for every architectural requirement.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Baffle & Linear Ceilings", desc: "Linear architectural appearance with superior acoustic benefits.", img: "/assets/uniceil/portfolio_baffle.png" },
              { title: "Acoustic Ceilings", desc: "High NRC rating systems for demanding corporate and educational environments.", img: "/assets/uniceil/portfolio_acoustic.png" },
              { title: "Interior Wall Systems", desc: "Durable, high-impact cladding for high-traffic commercial zones.", img: "/assets/uniceil/portfolio_wall.png" },
              { title: "Exterior Façades", desc: "Weather-resistant, UV-stable building envelope solutions.", img: "/assets/uniceil/portfolio_facade.png" },
              { title: "Soffit Systems", desc: "Premium ceiling systems designed for balconies, verandahs, and overhangs.", img: "/assets/products/prod_facade.png" },
              { title: "WPE Systems", desc: "Wood Polymer Composite systems designed for resorts, villas, and hospitality exterior projects.", img: "/assets/uniceil/sector_luxury_res.png" },
              { title: "Decking Systems", desc: "High-performance outdoor decks resistant to moisture and environmental wear.", img: "/assets/uniceil/sector_hospitality.png" },
              { title: "Louvers", desc: "Elevation design and architectural screening solutions.", img: "/assets/uniceil/sector_commercial.png" },
              { title: "Railings", desc: "Premium architectural railings for walkways, resorts, and commercial projects.", img: "/assets/uniceil/sector_retail.png" }
            ].map((sys, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white group cursor-pointer border border-border"
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <Image src={sys.img} alt={sys.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{sys.title}</h3>
                  <p className="text-muted-foreground mb-6">{sys.desc}</p>
                  <span className="text-primary font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    View Specifications <ArrowRight size={18} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications & Benefits */}
      <section className="py-24 bg-foreground text-background overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">Technical Benefits</h2>
            <p className="text-lg text-white/70">Engineered performance advantages of The Uniceil architectural systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Acoustic Performance", desc: "Reduce reverberation and improve occupant comfort in commercial environments.", outcome: "Enhanced speech clarity and workplace productivity.", icon: <VolumeX size={32} /> },
              { title: "Durability", desc: "High impact resistance against daily wear in high-traffic zones.", outcome: "Extended lifecycle with zero structural degradation.", icon: <Shield size={32} /> },
              { title: "Design Flexibility", desc: "Available in custom profiles, woodgrain finishes, and exact RAL colors.", outcome: "Total architectural freedom for brand expression.", icon: <Scissors size={32} /> },
              { title: "Easy Maintenance", desc: "Non-porous, washable surfaces that resist dust accumulation.", outcome: "Significantly reduced facility maintenance costs.", icon: <Droplets size={32} /> },
              { title: "Sustainability", desc: "Manufactured from highly recyclable materials with low VOC emissions.", outcome: "Contributes to LEED and WELL building certifications.", icon: <Leaf size={32} /> },
              { title: "Fire Performance", desc: "Engineered to meet the most stringent international fire safety standards.", outcome: "Class A fire ratings for absolute building safety.", icon: <Flame size={32} /> }
            ].map((ben, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-colors overflow-hidden"
              >
                <div className="absolute -right-4 -top-8 text-white/5 text-[120px] font-extrabold leading-none pointer-events-none group-hover:scale-110 transition-transform duration-500">
                  0{i + 1}
                </div>
                <div className="text-primary mb-6">
                  {ben.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 relative z-10">{ben.title}</h4>
                <p className="text-white/70 mb-6 relative z-10">{ben.desc}</p>
                <div className="pt-6 border-t border-white/10 relative z-10">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">Key Outcome</span>
                  <p className="text-white font-medium">{ben.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads & Consultation */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 bg-stone-100 border border-border flex flex-col justify-center items-start">
              <FileText className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-3xl font-extrabold mb-4">Technical Resources</h3>
              <p className="text-muted-foreground mb-8">Download product catalogues, BIM objects, and detailed CAD installation drawings.</p>
              <Link href="/resources" className="px-6 py-3 border-2 border-foreground text-foreground font-bold hover:bg-foreground hover:text-white transition-colors flex items-center gap-2">
                <Download size={18} /> Access Downloads
              </Link>
            </div>
            <div className="p-12 bg-primary text-white flex flex-col justify-center items-start">
              <h3 className="text-3xl font-extrabold mb-4">Specify The Uniceil</h3>
              <p className="text-white/90 mb-8">Engage Auranook&apos;s technical team for BOQ generation, pricing, and site coordination.</p>
              <Link href="/contact" className="px-6 py-3 bg-white text-primary font-bold hover:bg-stone-100 transition-colors flex items-center gap-2">
                Request Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
