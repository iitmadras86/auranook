"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Globe2, ShieldCheck, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Redefining <span className="text-primary">Architecture</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Auranook is a premium building materials enterprise specializing in advanced ceiling, wall, and facade systems. We engineer solutions that seamlessly blend structural integrity with modern aesthetics.
            </p>
          </motion.div>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/assets/projects/about_hero.png" 
              alt="Auranook Headquarters" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Journey</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">A Legacy of Innovation</h2>
              <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                Founded with a vision to transform the Indian architectural landscape, Auranook began as a specialized importer of premium surface finishes. Today, we stand as a comprehensive enterprise manufacturer of the highly acclaimed Uniceil systems.
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Our relentless focus on R&D has allowed us to develop uPVC and composite solutions that outlast and outperform traditional building materials, drastically reducing installation times and lifecycle costs.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Enterprise Pillars</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">The foundational principles that drive our engineering, manufacturing, and client relationships.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-card border border-border rounded-3xl text-center hover:border-primary/50 transition-colors shadow-sm hover:shadow-xl group">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Uncompromising Quality</h3>
              <p className="text-foreground/70">Stringent acoustic, thermal, and fire-safety testing at every manufacturing stage.</p>
            </div>
            
            <div className="p-8 bg-card border border-border rounded-3xl text-center hover:border-primary/50 transition-colors shadow-sm hover:shadow-xl group">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sustainable Engineering</h3>
              <p className="text-foreground/70">Developing 100% recyclable uPVC composites that reduce carbon footprints.</p>
            </div>
            
            <div className="p-8 bg-card border border-border rounded-3xl text-center hover:border-primary/50 transition-colors shadow-sm hover:shadow-xl group">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Architectural Partnership</h3>
              <p className="text-foreground/70">Collaborative design support from concept through structural execution.</p>
            </div>
          </div>
        </div>

        {/* Global Reach / Stats */}
        <div className="bg-foreground text-background rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/uniceil/hero_luxury.png')] opacity-10 bg-cover bg-center mix-blend-overlay" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Scale & Capability</h2>
              <p className="text-background/80 text-lg leading-relaxed">
                With a rapidly expanding national footprint and a robust distribution network, Auranook is equipped to handle mega-scale commercial projects with precise delivery timelines.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 w-full md:w-auto shrink-0">
              <div>
                <div className="text-5xl md:text-7xl font-black text-primary mb-2">50+</div>
                <div className="text-background/80 font-medium">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-5xl md:text-7xl font-black text-primary mb-2">1M+</div>
                <div className="text-background/80 font-medium">Sq.Ft Installed</div>
              </div>
              <div>
                <div className="text-5xl md:text-7xl font-black text-primary mb-2">15</div>
                <div className="text-background/80 font-medium">Indian States</div>
              </div>
              <div>
                <div className="text-5xl md:text-7xl font-black text-primary mb-2">100%</div>
                <div className="text-background/80 font-medium">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
