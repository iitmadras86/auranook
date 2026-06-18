"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, ShieldCheck, Wrench, Package, CheckCircle2 } from "lucide-react";
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

const architecturalPillars = [
  {
    title: "Interior Architectural Systems",
    items: ["Baffle Ceilings", "Linear Ceilings", "Acoustic Systems", "Decorative Surfaces"],
    img: "/assets/uniceil/portfolio_baffle.png"
  },
  {
    title: "Exterior Architectural Systems",
    items: ["Facades", "Louvers", "Soffits", "Cladding"],
    img: "/assets/uniceil/portfolio_facade.png"
  },
  {
    title: "Surface & Finishing Solutions",
    items: ["Polygranite Sheets", "PVC Panels", "WPC Panels", "Charcoal Panels"],
    img: "/assets/uniceil/portfolio_wall.png"
  },
  {
    title: "Landscape Architecture Solutions",
    items: ["Decking", "Railings", "Fencing", "Gates"],
    img: "/assets/uniceil/sector_hospitality.png"
  },
  {
    title: "Sustainable Building Systems",
    items: ["Recyclable Materials", "Low Maintenance Systems", "Long Lifecycle Products", "Eco-Friendly Composites"],
    img: "/assets/uniceil/sector_education.png"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Architectural Hero */}
      <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-black">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-10" />
          <Image 
            src="/assets/hero/home_hero.png"
            alt="Auranook Architectural Systems"
            fill
            className="object-cover opacity-70"
            priority
          />
        </motion.div>

        <div className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl flex flex-col items-center"
          >
            <motion.span variants={fadeInUp} className="text-primary font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
              <span className="h-px w-8 bg-primary"></span>
              Auranook Architectural Systems & Surface Solutions
              <span className="h-px w-8 bg-primary"></span>
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.05] mb-8">
              Architectural Systems. Surface Solutions. Built for Modern Design.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/80 font-medium max-w-2xl mb-12">
              Connecting architects, designers, developers and contractors with premium ceiling, façade, wall, surface and exterior architectural systems.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/contact" className="px-8 py-4 rounded-none bg-primary text-white font-bold tracking-wide hover:brightness-110 transition-all flex items-center justify-center gap-2 group">
                Request Consultation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/resources" className="px-8 py-4 rounded-none border-2 border-white/20 text-white font-bold tracking-wide hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center">
                Download Catalogues
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trusted Brand Partners */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col items-center text-center mb-20"
          >
            <motion.span variants={fadeInUp} className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Official Distribution Partner</motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight max-w-3xl">
              Representing Premium Architectural Brands
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* The Uniceil */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative bg-muted rounded-none overflow-hidden"
            >
              <div className="aspect-[4/3] relative">
                <Image src="/assets/products/prod_baffle_ceiling.png" alt="The Uniceil" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <h3 className="text-4xl font-extrabold text-white mb-2">The Uniceil</h3>
                  <p className="text-white/80 mb-6 max-w-md">Architectural Ceilings, Walls & Façades</p>
                  <ul className="space-y-2 mb-8">
                    {['Baffle Ceilings', 'Wall Systems', 'Facades', 'Soffit Systems'].map(item => (
                      <li key={item} className="text-white flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/brands/uniceil" className="inline-flex items-center text-white font-bold hover:text-primary transition-colors gap-2 w-fit">
                    Explore The Uniceil <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Polygranite */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-muted rounded-none overflow-hidden"
            >
              <div className="aspect-[4/3] relative">
                <Image src="/assets/products/prod_polygranite.png" alt="Polygranite" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <h3 className="text-4xl font-extrabold text-white mb-2">Polygranite</h3>
                  <p className="text-white/80 mb-6 max-w-md">Surface Solutions Hub</p>
                  <ul className="space-y-2 mb-8">
                    {['Polygranite Sheets', 'WPC Panels', 'Charcoal Panels', 'PVC Flooring'].map(item => (
                      <li key={item} className="text-white flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/brands/polygranite" className="inline-flex items-center text-white font-bold hover:text-primary transition-colors gap-2 w-fit">
                    Explore Polygranite <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Architectural Systems Sections */}
      <section className="py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Complete Ecosystem</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-background tracking-tight max-w-2xl">
                Integrated Architectural Systems
              </h2>
            </motion.div>
            <Link href="/products" className="shrink-0 px-8 py-4 border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors flex items-center gap-2">
              View All Systems
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {architecturalPillars.map((pillar, idx) => (
              <motion.div 
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-stone-900 border border-stone-800 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={pillar.img} alt={pillar.title} fill className="object-cover opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent" />
                </div>
                <div className="p-8 relative z-10 -mt-12">
                  <h4 className="text-white font-bold text-2xl mb-6">{pillar.title}</h4>
                  <ul className="space-y-3">
                    {pillar.items.map(item => (
                      <li key={item} className="text-stone-300 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Project Stories */}
      <section className="py-32 bg-stone-100">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col items-center text-center mb-20"
          >
            <motion.span variants={fadeInUp} className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Case Studies</motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Featured Project Stories
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.slice(0, 2).map((project, idx) => (
              <motion.div 
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group bg-white flex flex-col"
              >
                <div className="relative h-[300px] w-full overflow-hidden">
                  <Image src={project.heroImage} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-primary text-white text-xs font-bold px-4 py-2 uppercase tracking-widest">
                    {project.productBrand}
                  </div>
                </div>
                <div className="p-8 md:p-12 border border-t-0 border-border flex flex-col flex-1">
                  <h3 className="text-3xl font-bold mb-6">{project.title}</h3>
                  <div className="space-y-4 mb-8">
                    <div>
                      <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground block mb-1">Challenge</span>
                      <p className="text-foreground">{project.challenge}</p>
                    </div>
                    <div>
                      <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground block mb-1">Solution</span>
                      <p className="text-foreground">{project.solution}</p>
                    </div>
                  </div>
                  <Link href={`/projects`} className="mt-auto inline-flex items-center font-bold text-primary hover:text-foreground transition-colors gap-2">
                    Read Full Story <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <Link href="/projects" className="px-8 py-4 border-2 border-foreground text-foreground font-bold hover:bg-foreground hover:text-background transition-colors flex items-center gap-2">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Auranook */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Specification Partner</motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-8">
                Why Architects Choose Auranook
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-12">
                We are more than a material supplier. We are a technical distribution partner dedicated to helping architects, developers, and contractors specify the exact systems required for structural, acoustic, and aesthetic excellence.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: <Wrench size={32} className="text-primary mb-4" />, title: "Technical Expertise", desc: "Detailed consultation, CAD drawings support, and BOQ assistance." },
                  { icon: <ShieldCheck size={32} className="text-primary mb-4" />, title: "Trusted Brands", desc: "Authorized distributors for The Uniceil and Polygranite." },
                  { icon: <Building2 size={32} className="text-primary mb-4" />, title: "Project Support", desc: "End-to-end site coordination and vendor network integration." },
                  { icon: <Package size={32} className="text-primary mb-4" />, title: "Nationwide Supply", desc: "Seamless logistics ensuring timely material delivery." }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp}>
                    {item.icon}
                    <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div variants={fadeInUp} className="mt-12">
                <Link href="/why-auranook" className="inline-flex items-center text-primary font-bold hover:text-foreground transition-colors gap-2">
                  Learn About Our Partnership Model <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] bg-muted w-full max-w-lg mx-auto"
            >
               <Image src="/assets/hero/why_auranook.png" alt="Auranook Consultation" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-32 bg-primary relative overflow-hidden flex justify-center items-center">
        <div className="absolute inset-0 bg-[url('/assets/hero/cta_bg.png')] opacity-10 bg-cover bg-center mix-blend-multiply" />
        <div className="container relative z-10 mx-auto px-6 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Ready to Specify Your Next Project?</h2>
          <p className="text-xl text-white/90 max-w-2xl mb-10">Engage our technical team for product samples, BOQ generation, and architectural design support.</p>
          <Link href="/contact" className="px-10 py-5 bg-white text-primary font-extrabold tracking-widest uppercase hover:bg-stone-100 transition-colors">
            Book a Project Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
