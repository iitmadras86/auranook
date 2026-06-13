"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Filter, ImageIcon } from "lucide-react";

// Mock data leveraging recovered assets
const galleryItems = [
  { id: 1, src: "/assets/uniceil/hero_luxury.png", category: "Ceilings", title: "Corporate Baffle Installation" },
  { id: 2, src: "/assets/products/polygranite_sheet.png", category: "Surfaces", title: "Luxury Marble Finish" },
  { id: 3, src: "/assets/projects/about_hero.png", category: "Commercial", title: "Tech Hub Open Space" },
  { id: 4, src: "/assets/products/hero_spc.png", category: "Flooring", title: "SPC Glueless Flooring" },
  { id: 5, src: "/assets/products/hero_3d_panels.png", category: "Surfaces", title: "Geometric 3D Wall" },
  { id: 6, src: "/assets/products/hero_polygranite.png", category: "Residential", title: "Living Room Feature Wall" },
];

const categories = ["All", "Ceilings", "Surfaces", "Flooring", "Commercial", "Residential"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
              <ImageIcon className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Inspiration <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Browse our portfolio of completed architectural installations and high-fidelity product renders.
            </p>
          </motion.div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-hide">
          <Filter className="w-5 h-5 text-foreground/50 mr-2 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm tracking-wide whitespace-nowrap transition-all border ${
                activeCategory === cat 
                  ? "bg-primary border-primary text-primary-foreground shadow-lg" 
                  : "bg-card border-border text-foreground hover:border-primary/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry/Grid Gallery */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold tracking-widest uppercase w-max mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
