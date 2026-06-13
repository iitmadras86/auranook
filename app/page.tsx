"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, MapPin, Users2, ShieldCheck } from "lucide-react";
import { products } from "@/data/products";
import { projects } from "@/data/projects";

// Shared Motion Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Architectural Hero */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Background Video/Image with Parallax or subtle scale */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
          <Image 
            src="/assets/external_downloads/external_asset_1.jpg" // Placeholder for hero
            alt="Architectural Surfaces"
            fill
            className="object-cover opacity-80"
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
            <motion.span variants={fadeInUp} className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              Auranook Ecosystem
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Architectural Surfaces <br className="hidden md:block"/> Engineered for Modern Spaces
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/80 font-medium max-w-2xl mb-10">
              Discover our enterprise-grade collections of Uniceil Systems, Polygranite Sheets, SPC Flooring, and 3D Wall Panels.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/uniceil" className="px-8 py-4 rounded-full bg-primary text-white font-bold tracking-wide hover:brightness-110 transition-all flex items-center justify-center gap-2 group">
                Explore Uniceil
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="px-8 py-4 rounded-full bg-white/10 text-white font-bold tracking-wide hover:bg-white/20 transition-all backdrop-blur-md flex items-center justify-center">
                Consult an Expert
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Product Ecosystem Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col items-center text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              Premium Product Ecosystem
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl">
              From timeless elegance to modern architectural statements, explore our curated categories designed for scale and performance.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.slice(0, 6).map((product) => (
              <motion.div key={product.slug} variants={fadeInUp} className="group relative rounded-2xl overflow-hidden bg-white shadow-md border border-border flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 w-full overflow-hidden bg-muted">
                  <Image 
                    src={product.images[0] || "/assets/external_downloads/external_asset_2.jpg"} 
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{product.title}</h3>
                  <p className="text-muted-foreground text-sm flex-1 mb-6">{product.shortDescription}</p>
                  <Link href={`/${product.category.toLowerCase() === 'uniceil' ? 'uniceil' : 'products'}#${product.slug}`} className="inline-flex items-center text-primary font-semibold text-sm group/link mt-auto">
                    View Specifications
                    <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Why Auranook (Metrics) */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center">
              <Building2 size={40} className="text-primary mb-4" />
              <h3 className="text-4xl md:text-5xl font-extrabold mb-2 text-white">500+</h3>
              <p className="text-white/70 text-sm md:text-base font-medium">Projects Delivered</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center">
              <Users2 size={40} className="text-primary mb-4" />
              <h3 className="text-4xl md:text-5xl font-extrabold mb-2 text-white">1.2K+</h3>
              <p className="text-white/70 text-sm md:text-base font-medium">Architects Served</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center">
              <MapPin size={40} className="text-primary mb-4" />
              <h3 className="text-4xl md:text-5xl font-extrabold mb-2 text-white">50+</h3>
              <p className="text-white/70 text-sm md:text-base font-medium">Cities Covered</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center">
              <ShieldCheck size={40} className="text-primary mb-4" />
              <h3 className="text-4xl md:text-5xl font-extrabold mb-2 text-white">100%</h3>
              <p className="text-white/70 text-sm md:text-base font-medium">Quality Assured</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Featured Projects */}
      <section className="py-24 bg-stone-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
                Featured Projects
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                See how top architects and designers leverage Auranook materials to build award-winning spaces.
              </p>
            </motion.div>
            <Link href="/projects" className="shrink-0 px-6 py-3 border-2 border-foreground rounded-full text-foreground font-bold hover:bg-foreground hover:text-background transition-colors flex items-center gap-2">
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, idx) => (
              <motion.div 
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image 
                  src={project.heroImage || "/assets/external_downloads/external_asset_3.jpg"} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-2">
                  <span className="text-primary font-bold tracking-wider text-xs uppercase">{project.clientSegment}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.materialsUsed.map(mat => (
                      <span key={mat} className="text-xs bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-md">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
