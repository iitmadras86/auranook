"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PackageSearch } from "lucide-react";
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function UniceilPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-background">
      {/* 1. Uniceil Hero (3D Inspired) */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-black pt-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-black to-black" />
          <Image 
            src="/assets/uniceil/hero_luxury.png" 
            alt="Uniceil Architectural Systems"
            fill
            className="object-cover opacity-60 mix-blend-overlay"
            priority
          />
        </motion.div>

        <div className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl flex flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="w-16 h-1 bg-primary mb-8" />
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              The Future of Architectural <br className="hidden md:block"/> Ceiling & Facade Systems
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/70 font-medium max-w-2xl mb-10">
              Uniceil engineered solutions redefine structural aesthetics. Lightweight, durable, and acoustically optimized for modern commercial and residential applications.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. uPVC Baffle Ceilings */}
      <section className="py-24 bg-card" id="baffle-ceilings">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image 
                src="/assets/uniceil/hero_luxury.png" 
                alt="uPVC Baffle Ceilings"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Ceiling Systems</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">uPVC Baffle Ceilings</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Transform spaces with our lightweight, durable uPVC baffle ceiling systems. Engineered for modern aesthetics and exceptional acoustic performance in high-traffic environments.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Lightweight Construction</h4>
                    <p className="text-sm text-muted-foreground">Significantly reduces structural load compared to metal baffles.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Seamless Installation</h4>
                    <p className="text-sm text-muted-foreground">Clip-on mechanisms allow for rapid deployment and easy maintenance access.</p>
                  </div>
                </li>
              </ul>
              <Link href="/products/upvc-baffle-ceiling" className="px-8 py-4 rounded-full bg-foreground text-background font-bold tracking-wide hover:bg-primary transition-all flex items-center gap-2">
                <PackageSearch className="w-5 h-5" />
                Explore Specifications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Wall Systems */}
      <section className="py-24 bg-background" id="wall-systems">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image 
                src="/assets/uniceil/hero_luxury.png" 
                alt="Decorative Wall Systems"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Interior Architecture</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">Decorative Wall Systems</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Elevate interior walls with precision-engineered uPVC cladding. Uniceil wall systems integrate perfectly with our ceiling profiles to create a cohesive architectural language.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Moisture & Termite Resistant</h4>
                    <p className="text-sm text-muted-foreground">100% waterproof construction ideal for all climates.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Acoustic Integration</h4>
                    <p className="text-sm text-muted-foreground">Micro-perforated options available for specialized sound dampening.</p>
                  </div>
                </li>
              </ul>
              <Link href="/products/wall-facade-system" className="px-8 py-4 rounded-full bg-foreground text-background font-bold tracking-wide hover:bg-primary transition-all flex items-center gap-2">
                <PackageSearch className="w-5 h-5" />
                Explore Specifications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Facade Systems & Acoustic Solutions */}
      <section className="py-24 bg-card" id="facade-acoustic">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Facade */}
            <div className="bg-background rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-500">
              <h3 className="text-2xl font-extrabold mb-4">Architectural Facade Systems</h3>
              <p className="text-muted-foreground mb-8">
                Exterior-grade uPVC profiles engineered for extreme weather resistance. High UV stability ensures vibrant colors for decades, while specialized mounting systems withstand high wind loads.
              </p>
              <div className="aspect-[16/9] relative rounded-xl overflow-hidden mb-8">
                <Image src="/assets/uniceil/hero_luxury.png" alt="Facade" fill className="object-cover" />
              </div>
              <ul className="space-y-2 mb-8">
                <li className="text-sm text-foreground font-medium flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Extreme Weather Durability</li>
                <li className="text-sm text-foreground font-medium flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> UV Protected Finishes</li>
                <li className="text-sm text-foreground font-medium flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Thermal Insulation</li>
              </ul>
            </div>
            
            {/* Acoustics */}
            <div className="bg-background rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-500">
              <h3 className="text-2xl font-extrabold mb-4">Acoustic Solutions</h3>
              <p className="text-muted-foreground mb-8">
                Custom-engineered noise reduction systems for airports, educational institutions, and corporate spaces. Our NRC-rated baffles and wall panels control reverberation beautifully.
              </p>
              <div className="aspect-[16/9] relative rounded-xl overflow-hidden mb-8">
                <Image src="/assets/projects/about_hero.png" alt="Acoustic Solutions" fill className="object-cover" />
              </div>
              <ul className="space-y-2 mb-8">
                <li className="text-sm text-foreground font-medium flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> NRC Ratings up to 0.85</li>
                <li className="text-sm text-foreground font-medium flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Micro-perforation Technology</li>
                <li className="text-sm text-foreground font-medium flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Sound Absorbing Core</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Technical Downloads */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Technical Resources</h2>
            <p className="text-background/80 text-lg mb-8">
              Access CAD details, BIM objects, installation manuals, and acoustic test reports for all Uniceil systems.
            </p>
            <Link href="/catalogs" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:brightness-110 transition-colors inline-flex">
              Access Download Center
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-background/10 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h4 className="font-bold text-xl text-white mb-2">AutoCAD</h4>
              <p className="text-sm text-white/60">.DWG Section Details</p>
            </div>
            <div className="p-6 bg-background/10 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h4 className="font-bold text-xl text-white mb-2">BIM / Revit</h4>
              <p className="text-sm text-white/60">.RVT Parametric Models</p>
            </div>
            <div className="p-6 bg-background/10 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h4 className="font-bold text-xl text-white mb-2">Test Reports</h4>
              <p className="text-sm text-white/60">Acoustic & Fire Safety</p>
            </div>
            <div className="p-6 bg-background/10 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h4 className="font-bold text-xl text-white mb-2">Manuals</h4>
              <p className="text-sm text-white/60">Installation Guides</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Become Distributor CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Join the Uniceil Network</h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-10">
            Partner with India&apos;s fastest growing architectural systems brand. Exclusive territories available for established building material distributors.
          </p>
          <Link href="/distributorship" className="px-8 py-4 rounded-full bg-foreground text-background font-bold tracking-wide shadow-xl hover:scale-105 transition-transform inline-flex">
            Apply for Distributorship
          </Link>
        </div>
      </section>
    </div>
  );
}
