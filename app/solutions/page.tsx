"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, Building2, Home, Landmark } from "lucide-react";

const solutions = [
  {
    id: "commercial-interiors",
    title: "Commercial Interiors",
    description: "High-performance ceiling and wall systems engineered for modern corporate environments, focusing on acoustics, aesthetics, and rapid installation.",
    icon: <Briefcase className="w-8 h-8" />,
    image: "/assets/projects/about_hero.png",
    features: ["NRC Rated Baffles", "Acoustic Wall Panels", "Integrated Lighting Profiles"]
  },
  {
    id: "hospitality",
    title: "Hospitality & Retail",
    description: "Luxurious surface finishes and striking architectural elements that create unforgettable brand experiences and customer journeys.",
    icon: <Landmark className="w-8 h-8" />,
    image: "/assets/uniceil/hero_luxury.png",
    features: ["Polygranite Feature Walls", "Custom 3D Geometries", "High-Traffic SPC Flooring"]
  },
  {
    id: "residential",
    title: "Premium Residential",
    description: "Durable, moisture-resistant, and aesthetically flawless solutions that bring enterprise-grade quality to high-end residential spaces.",
    icon: <Home className="w-8 h-8" />,
    image: "/assets/products/hero_polygranite.png",
    features: ["Waterproof Cladding", "Marble-Finish Surfaces", "Acoustic Home Theater Panels"]
  },
  {
    id: "institutional",
    title: "Institutional & Healthcare",
    description: "Hygienic, low-maintenance, and highly durable systems that meet strict institutional standards while maintaining visual appeal.",
    icon: <Building2 className="w-8 h-8" />,
    image: "/assets/products/hero_luxury.png",
    features: ["Anti-bacterial Finishes", "Class A Fire Ratings", "Easy Maintenance Access"]
  }
];

export default function SolutionsHub() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Industry <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Tailored architectural systems engineered to meet the specific functional and aesthetic demands of diverse industry sectors.
            </p>
          </motion.div>
        </div>

        {/* Solutions List */}
        <div className="space-y-32 mb-32">
          {solutions.map((solution, index) => (
            <motion.div 
              key={solution.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl group">
                <Image 
                  src={solution.image} 
                  alt={solution.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]" />
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 border border-primary/20 shadow-[0_0_30px_-5px_rgba(184,159,93,0.3)]">
                  {solution.icon}
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
                  {solution.title}
                </h2>
                <p className="text-foreground/80 leading-relaxed text-lg mb-10">
                  {solution.description}
                </p>
                
                <h4 className="font-bold text-foreground mb-4 uppercase tracking-widest text-sm">Key Advantages</h4>
                <ul className="space-y-4 mb-10">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-medium text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href={`/projects`} className="px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-bold tracking-wide hover:bg-secondary/80 transition-all border border-border w-max">
                  View Related Projects
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-foreground text-background rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/products/hero_luxury.png')] opacity-5 bg-cover bg-center mix-blend-overlay" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Need a Specialized Solution?</h2>
            <p className="text-background/80 text-lg leading-relaxed mb-10">
              Our engineering team collaborates closely with architects and developers to design bespoke systems for unique structural requirements.
            </p>
            <Link href="/contact" className="px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold tracking-wide shadow-xl hover:scale-105 transition-transform inline-flex items-center justify-center">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
