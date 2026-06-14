"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { galleryData, getUniqueCategories } from "@/data/gallery";
import { trackEvent } from "@/utils/analytics";

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function GalleryPage() {
  const [index, setIndex] = useState(-1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    industry: "All",
    brand: "All",
    designIntent: "All",
    systemType: "All"
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = useMemo(() => getUniqueCategories(), []);

  const filteredImages = useMemo(() => {
    return galleryData.filter(img => {
      let match = true;
      if (filters.industry !== 'All') match = match && img.industry === filters.industry;
      if (filters.brand !== 'All') match = match && img.brand === filters.brand;
      if (filters.designIntent !== 'All') match = match && img.designIntent === filters.designIntent;
      if (filters.systemType !== 'All') match = match && img.systemType === filters.systemType;
      
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        match = match && (
          img.title.toLowerCase().includes(q) || 
          img.description.toLowerCase().includes(q) ||
          img.altText.toLowerCase().includes(q)
        );
      }
      return match;
    });
  }, [filters, searchQuery]);

  const updateFilter = (key: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    trackEvent('gallery_filter_used', { filter_type: key, filter_value: value });
  };

  const clearFilters = () => {
    setFilters({ industry: "All", brand: "All", designIntent: "All", systemType: "All" });
    setSearchQuery("");
  };

  return (
    <div className="bg-stone-50 min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Visual Inspiration</span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Architectural Gallery
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-10">
          Explore real-world applications of our premium ceilings, acoustic solutions, façades, and decorative surfaces.
        </p>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input 
              type="text" 
              placeholder="Search by keywords, tags, or projects..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-border bg-white focus:outline-none focus:border-primary"
            />
          </div>
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="px-6 py-4 border border-border bg-white font-bold flex items-center justify-center gap-2 hover:bg-stone-100 transition-colors shrink-0"
          >
            <Filter size={20} />
            Filters {(filters.industry !== 'All' || filters.brand !== 'All' || filters.designIntent !== 'All' || filters.systemType !== 'All') && "(Active)"}
          </button>
        </div>

        <AnimatePresence>
          {isFilterOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-white p-6 border border-border mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">Industry</label>
                  <select value={filters.industry} onChange={(e) => updateFilter('industry', e.target.value)} className="w-full p-3 border border-border bg-stone-50 focus:outline-none focus:border-primary">
                    <option value="All">All Industries</option>
                    {categories.industries.map(i => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">Brand</label>
                  <select value={filters.brand} onChange={(e) => updateFilter('brand', e.target.value)} className="w-full p-3 border border-border bg-stone-50 focus:outline-none focus:border-primary">
                    <option value="All">All Brands</option>
                    {categories.brands.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">Design Intent</label>
                  <select value={filters.designIntent} onChange={(e) => updateFilter('designIntent', e.target.value)} className="w-full p-3 border border-border bg-stone-50 focus:outline-none focus:border-primary">
                    <option value="All">All Intents</option>
                    {categories.designIntents.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">System Type</label>
                  <select value={filters.systemType} onChange={(e) => updateFilter('systemType', e.target.value)} className="w-full p-3 border border-border bg-stone-50 focus:outline-none focus:border-primary">
                    <option value="All">All Systems</option>
                    {categories.systemTypes.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="md:col-span-4 flex justify-end">
                  <button onClick={clearFilters} className="text-sm font-bold text-muted-foreground hover:text-foreground underline">
                    Clear All Filters
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Masonry Grid */}
      <div className="container mx-auto px-6 md:px-12">
        {filteredImages.length === 0 ? (
          <div className="py-20 text-center bg-white border border-border">
            <p className="text-muted-foreground mb-4">No gallery images found matching your criteria.</p>
            <button onClick={clearFilters} className="text-primary font-bold hover:underline">Clear Filters</button>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((img, idx) => (
              <motion.div 
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (idx % 10) * 0.05 }}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden bg-muted"
                onClick={() => {
                  trackEvent('gallery_interaction', { image_id: img.id, action: 'open_lightbox' });
                  setIndex(idx);
                }}
              >
                <div className="relative w-full pb-[100%] sm:pb-[120%] lg:pb-auto h-auto">
                   <Image 
                     src={img.src} 
                     alt={img.altText} 
                     width={800}
                     height={800}
                     className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                   />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-primary/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1">{img.brand}</span>
                      <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1">{img.industry}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{img.title}</h3>
                    <p className="text-white/80 text-sm line-clamp-2">{img.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={filteredImages.map(img => ({ src: img.src, alt: img.altText, description: img.description }))}
        plugins={[Zoom, Fullscreen, Thumbnails]}
      />
    </div>
  );
}
