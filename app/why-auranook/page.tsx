"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PenTool, ClipboardList, Layers, HardHat, FileBadge } from "lucide-react";

const pillars = [
  {
    icon: <PenTool className="w-8 h-8 text-primary" />,
    title: "Technical Consultation",
    desc: "We don't just sell products; we solve design challenges. Our engineering team assists with acoustic calculations, load analyses, and custom profile detailing."
  },
  {
    icon: <Layers className="w-8 h-8 text-primary" />,
    title: "Product Selection Assistance",
    desc: "Navigating hundreds of finishes and systems can be daunting. We curate selections based strictly on your project's technical specifications and design intent."
  },
  {
    icon: <ClipboardList className="w-8 h-8 text-primary" />,
    title: "BOQ & Budget Estimation",
    desc: "Accurate Bill of Quantities (BOQ) generation ensures there are no surprises during procurement. We provide transparent, competitive pricing structures."
  },
  {
    icon: <FileBadge className="w-8 h-8 text-primary" />,
    title: "CAD & Detail Drawings",
    desc: "We supply comprehensive installation details, junction sections, and shop drawings to ensure the contractor executes your vision flawlessly."
  },
  {
    icon: <HardHat className="w-8 h-8 text-primary" />,
    title: "Site Coordination",
    desc: "From pre-installation site surveys to managing vendor networks, our project managers ensure materials are installed precisely to specification."
  }
];

export default function WhyAuranook() {
  return (
    <div className="bg-background pt-24 pb-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
          <Image 
            src="/assets/projects/about_hero.png"
            alt="Why Partner With Auranook"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="container relative z-20 mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">The Auranook Advantage</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
              More Than A Supplier. <br className="hidden md:block"/> A Specification Partner.
            </h1>
            <p className="text-xl text-white/80 font-medium mb-10 leading-relaxed">
              We empower architects, interior designers, and developers to execute ambitious visions by providing uncompromising technical support and world-class architectural systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-[1.1]">Elevating Architectural Execution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The gap between a beautiful architectural render and a flawless physical execution is closed through rigorous technical specification.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Unlike traditional material traders, Auranook acts as an extension of your design studio. From the initial concept stage to the final site handover, we ensure that every ceiling baffle, wall panel, and façade system performs exactly as intended.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="px-8 py-4 bg-primary text-white font-bold hover:brightness-110 transition-colors shadow-lg rounded-full flex items-center gap-2">
                  Partner With Us <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
               <motion.div 
                 initial={{ opacity: 0, y: 50 }} 
                 whileInView={{ opacity: 1, y: 0 }} 
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="aspect-[4/5] relative rounded-3xl overflow-hidden group shadow-2xl mt-12"
               >
                 <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" alt="Acoustic Ceiling Architecture" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                   <p className="text-white font-bold text-lg tracking-wide">Precision Engineering</p>
                 </div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, y: 50 }} 
                 whileInView={{ opacity: 1, y: 0 }} 
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 className="space-y-4 md:space-y-6"
               >
                 <div className="aspect-square relative rounded-3xl overflow-hidden group shadow-xl">
                   <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" alt="Premium Surfaces" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                     <p className="text-white font-bold text-lg tracking-wide">Material Mastery</p>
                   </div>
                 </div>
                 <div className="aspect-[4/3] relative rounded-3xl overflow-hidden group shadow-xl">
                   <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" alt="Facade Integration" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                     <p className="text-white font-bold text-lg tracking-wide">Flawless Integration</p>
                   </div>
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-24 bg-stone-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-6">How We Support Your Projects</h2>
            <p className="text-lg text-muted-foreground">Comprehensive technical services designed to mitigate risk and ensure structural and aesthetic perfection.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 border border-border shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
            
            {/* CTA Card in Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-foreground text-background p-8 border border-foreground shadow-sm flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Need Project Support?</h3>
              <p className="text-white/70 mb-6 leading-relaxed">Send us your floor plans or design intent, and our engineers will provide a customized specification strategy.</p>
              <div className="mb-8">
                <p className="text-white/70 text-sm mb-1">Speak directly with our Specification Team:</p>
                <a href="tel:+919507054062" className="text-primary font-bold hover:text-white transition-colors text-lg">+91 95070 54062</a>
              </div>
              <Link href="/contact" className="inline-flex items-center text-primary font-bold hover:text-white transition-colors gap-2 mt-auto">
                Submit Project Details <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By / Network */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-extrabold mb-12">Authorized Supply Network</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-muted-foreground font-bold text-xl uppercase tracking-widest">
            <span>The Uniceil</span>
            <span className="hidden md:block w-2 h-2 rounded-full bg-border" />
            <span>Polygranite</span>
            <span className="hidden md:block w-2 h-2 rounded-full bg-border" />
            <span>Hunter Douglas Compatible</span>
          </div>
        </div>
      </section>
    </div>
  );
}
