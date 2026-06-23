"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, ClipboardCheck, Settings, Truck, CheckCircle } from "lucide-react";

const processSteps = [
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "Design Discovery",
    desc: "Collaborative analysis of your architectural intent, acoustic requirements, and visual objectives."
  },
  {
    icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
    title: "System Specification",
    desc: "Rigorous curation of ceiling, wall, and façade systems that meet engineering and aesthetic criteria."
  },
  {
    icon: <Settings className="w-8 h-8 text-primary" />,
    title: "Technical Coordination",
    desc: "Generation of detailed shop drawings, CAD details, and load calculations for seamless integration."
  },
  {
    icon: <Truck className="w-8 h-8 text-primary" />,
    title: "Procurement Support",
    desc: "Transparent BOQ generation and synchronized supply chain management to meet project timelines."
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
    title: "Project Execution",
    desc: "On-site technical support and contractor coordination to ensure flawless physical installation."
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
            src="/assets/systems/facade/sys_facade_5.png"
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
                 <Image src="/assets/systems/baffle-ceilings/sys_baffle_4.png" alt="Acoustic Ceiling Architecture" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
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
                   <Image src="/assets/systems/polygranite/sys_polygranite_4.png" alt="Premium Surfaces" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                     <p className="text-white font-bold text-lg tracking-wide">Material Mastery</p>
                   </div>
                 </div>
                 <div className="aspect-[4/3] relative rounded-3xl overflow-hidden group shadow-xl">
                   <Image src="/assets/systems/facade/sys_facade_6.png" alt="Facade Integration" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                     <p className="text-white font-bold text-lg tracking-wide">Flawless Integration</p>
                   </div>
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-stone-900 relative overflow-hidden">
        {/* Architectural blueprint background texture */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#ffffff44 1px, transparent 1px), linear-gradient(90deg, #ffffff44 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">From Design Intent to Project Delivery</h2>
            <p className="text-lg text-white/70">A seamless, technical-led specification methodology designed to mitigate execution risk and guarantee structural and aesthetic perfection.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row gap-6 relative">
            {/* Connecting Line for desktop */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-white/10 z-0">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>
            
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="flex-1 relative z-10"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl h-full shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/10 transition-colors group">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(184,159,93,0.3)]">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white font-serif">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-bold hover:brightness-110 transition-all shadow-[0_0_30px_-5px_rgba(184,159,93,0.4)] rounded-full gap-2 text-lg">
                Submit Project Details <ArrowRight size={20} />
              </Link>
              <p className="mt-6 text-white/50 text-sm">Speak directly with our Specification Team: <a href="tel:+919507054062" className="text-primary hover:underline">+91 95070 54062</a></p>
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
