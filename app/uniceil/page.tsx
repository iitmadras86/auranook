"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PackageSearch } from "lucide-react";
import { getProductsByCategory } from "@/data/products";

// Motion Guidance
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
  const uniceilProducts = getProductsByCategory("Uniceil");

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
          {/* Placeholder for 3D or high-res render */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-black to-black" />
          <Image 
            src="/assets/external_downloads/external_asset_4.jpg" 
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
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              The Future of Architectural <br className="hidden md:block"/> Ceiling, Wall & Facade Systems
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/70 font-medium max-w-2xl mb-10">
              Uniceil engineered solutions redefine structural aesthetics. Lightweight, durable, and acoustically optimized for modern commercial and residential applications.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Product Categories */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-24"
          >
            {uniceilProducts.map((product, idx) => (
              <motion.div key={product.slug} variants={fadeInUp} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`} id={product.slug}>
                {/* Visual */}
                <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                  <Image 
                    src={product.images[0] || "/assets/external_downloads/external_asset_5.jpg"} 
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
                </div>
                
                {/* Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{product.title}</h2>
                  <p className="text-muted-foreground text-lg mb-8">{product.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
                    {product.features.map(feature => (
                      <div key={feature.title} className="bg-stone-100 dark:bg-stone-900 p-4 rounded-xl border border-border">
                        <h4 className="font-bold text-foreground text-sm mb-1">{feature.title}</h4>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link href={`/${product.slug}`} className="px-6 py-3 rounded-full bg-foreground text-background font-bold text-sm tracking-wide hover:bg-primary transition-colors flex items-center gap-2">
                      <PackageSearch size={16} />
                      View Details
                    </Link>
                    <Link href="/contact" className="px-6 py-3 rounded-full bg-stone-100 text-foreground font-bold text-sm tracking-wide border border-border hover:bg-stone-200 transition-colors flex items-center gap-2">
                      Get Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Custom Solutions CTA */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Need a Custom Architectural Solution?</h2>
          <p className="text-background/80 text-lg max-w-2xl mb-10">
            Our engineering team collaborates with architects to design, prototype, and manufacture custom ceiling and facade profiles for unique structural requirements.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:brightness-110 transition-colors">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
