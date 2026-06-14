"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, FileBadge, Lock, Search, Filter } from "lucide-react";
import Link from "next/link";
import DownloadGate from "@/components/DownloadGate";
import { trackEvent } from "@/utils/analytics";

type Resource = {
  title: string;
  type: string;
  size: string;
  access: "public" | "partner";
  brand: string;
  application: string;
};

const resourcesData: Resource[] = [
  // The Uniceil Systems
  { title: "Uniceil Baffle Ceiling Master Catalogue 2026", type: "PDF", size: "12.4 MB", access: "public", brand: "The Uniceil", application: "Ceiling Systems" },
  { title: "Acoustic Performance Datasheets (NRC Ratings)", type: "PDF", size: "3.2 MB", access: "public", brand: "The Uniceil", application: "Acoustics" },
  { title: "Architectural Façade Installation Guide", type: "PDF", size: "8.1 MB", access: "public", brand: "The Uniceil", application: "Façade Systems" },
  { title: "Uniceil Standard AutoCAD Details (.dwg)", type: "ZIP", size: "45 MB", access: "partner", brand: "The Uniceil", application: "CAD Details" },
  
  // Polygranite Surfaces
  { title: "Polygranite Decorative Finishes Lookbook", type: "PDF", size: "18.5 MB", access: "public", brand: "Polygranite", application: "Interior Surfaces" },
  { title: "Material Safety Data Sheet (MSDS)", type: "PDF", size: "1.1 MB", access: "public", brand: "Polygranite", application: "Compliance" },
  { title: "Interior Cladding Installation Manual", type: "PDF", size: "5.4 MB", access: "public", brand: "Polygranite", application: "Interior Surfaces" },
  { title: "Polygranite BIM Objects (.RFA)", type: "ZIP", size: "112 MB", access: "partner", brand: "Polygranite", application: "BIM Models" },

  // Corporate & Compliance
  { title: "Auranook Corporate Profile", type: "PDF", size: "5.5 MB", access: "public", brand: "Auranook", application: "Corporate" },
  { title: "Fire Safety Compliance Certificates (Class A)", type: "PDF", size: "2.3 MB", access: "public", brand: "Auranook", application: "Compliance" },
  { title: "Sustainability & Green Building Contributions", type: "PDF", size: "4.0 MB", access: "public", brand: "Auranook", application: "Sustainability" },
];

export default function TechnicalResources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    brand: "All",
    application: "All"
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = useMemo(() => ({
    brands: Array.from(new Set(resourcesData.map(r => r.brand))),
    applications: Array.from(new Set(resourcesData.map(r => r.application)))
  }), []);

  const filteredResources = useMemo(() => {
    return resourcesData.filter(r => {
      let match = true;
      if (filters.brand !== 'All') match = match && r.brand === filters.brand;
      if (filters.application !== 'All') match = match && r.application === filters.application;
      
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        match = match && (
          r.title.toLowerCase().includes(q) || 
          r.type.toLowerCase().includes(q) ||
          r.application.toLowerCase().includes(q)
        );
      }
      return match;
    });
  }, [filters, searchQuery]);

  const updateFilter = (key: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ brand: "All", application: "All" });
    setSearchQuery("");
  };

  return (
    <div className="bg-background pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mb-12">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Architectural Documentation</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Technical <span className="text-primary">Resources</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            Search and download comprehensive product catalogues, technical datasheets, installation guides, BIM models, and CAD drawings.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input 
              type="text" 
              placeholder="Search by resource name, brand, or application..." 
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
            Filters {(filters.brand !== 'All' || filters.application !== 'All') && "(Active)"}
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
              <div className="bg-white p-6 border border-border mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">Brand</label>
                  <select value={filters.brand} onChange={(e) => updateFilter('brand', e.target.value)} className="w-full p-3 border border-border bg-stone-50 focus:outline-none focus:border-primary">
                    <option value="All">All Brands</option>
                    {categories.brands.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">Application / Resource Type</label>
                  <select value={filters.application} onChange={(e) => updateFilter('application', e.target.value)} className="w-full p-3 border border-border bg-stone-50 focus:outline-none focus:border-primary">
                    <option value="All">All Applications</option>
                    {categories.applications.map(a => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <button onClick={clearFilters} className="text-sm font-bold text-muted-foreground hover:text-foreground underline">
                    Clear All Filters
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        {filteredResources.length === 0 ? (
          <div className="py-20 text-center bg-white border border-border">
            <p className="text-muted-foreground mb-4">No resources found matching your criteria.</p>
            <button onClick={clearFilters} className="text-primary font-bold hover:underline">Clear Filters</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {filteredResources.map((item, i) => (
              <div key={i} className="group p-6 bg-card border border-border hover:border-primary transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-primary/5 flex items-center justify-center shrink-0">
                    {item.type === "PDF" ? <FileText className="w-6 h-6 text-primary" /> : <FileBadge className="w-6 h-6 text-primary" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-2">{item.title}</h4>
                    <div className="flex flex-wrap gap-3 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                      <span className="bg-stone-100 px-2 py-1">{item.brand}</span>
                      <span className="bg-stone-100 px-2 py-1">{item.application}</span>
                      <span className="bg-stone-100 px-2 py-1 text-primary">{item.type}</span>
                      <span className="bg-stone-100 px-2 py-1">{item.size}</span>
                    </div>
                  </div>
                </div>
                <div className="shrink-0 flex justify-end md:justify-center">
                  {item.access === "public" ? (
                    <button 
                      onClick={() => trackEvent('resource_download', { resource_name: item.title, resource_type: item.type })}
                      className="px-6 py-4 bg-secondary text-secondary-foreground font-bold hover:bg-primary hover:text-white transition-colors flex items-center gap-2"
                    >
                      <Download size={20} /> Download
                    </button>
                  ) : (
                    <DownloadGate 
                      resourceName={item.title} 
                      resourceType={item.type === 'ZIP' ? 'BIM' : 'Other'} 
                      fileUrl="#"
                    >
                      <button className="px-6 py-4 bg-foreground text-background font-bold hover:bg-primary transition-colors flex items-center gap-2">
                         <Lock size={20} /> Partner Access
                      </button>
                    </DownloadGate>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-32">
        <div className="p-12 bg-foreground text-background text-center flex flex-col items-center">
          <h3 className="text-3xl font-extrabold mb-4 text-white">Require Specific Documentation?</h3>
          <p className="text-white/70 max-w-2xl mb-8 leading-relaxed">
            If you need detailed acoustic test reports, specific RAL color codes, or custom CAD profile drawings for your tender, please contact our specification team.
          </p>
          <Link href="/specification-support" className="px-8 py-4 bg-primary text-white font-bold hover:brightness-110 transition-colors shadow-lg">
            Contact Specification Team
          </Link>
        </div>
      </div>
    </div>
  );
}
