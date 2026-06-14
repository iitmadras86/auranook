"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, Filter } from "lucide-react";
import { projects } from "@/data/projects";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    industry: "All",
    brand: "All",
    designIntent: "All"
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = useMemo(() => ({
    industries: Array.from(new Set(projects.map(p => p.industry))),
    brands: Array.from(new Set(projects.map(p => p.productBrand))),
    designIntents: Array.from(new Set(projects.map(p => p.designIntent)))
  }), []);

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      let match = true;
      if (filters.industry !== 'All') match = match && p.industry === filters.industry;
      if (filters.brand !== 'All') match = match && p.productBrand === filters.brand;
      if (filters.designIntent !== 'All') match = match && p.designIntent === filters.designIntent;
      
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        match = match && (
          p.title.toLowerCase().includes(q) || 
          p.challenge.toLowerCase().includes(q) ||
          p.solution.toLowerCase().includes(q) ||
          p.industry.toLowerCase().includes(q)
        );
      }
      return match;
    });
  }, [filters, searchQuery]);

  const updateFilter = (key: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ industry: "All", brand: "All", designIntent: "All" });
    setSearchQuery("");
  };

  return (
    <div className="flex flex-col w-full bg-stone-50 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 pt-32 pb-20">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-4xl mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
            <span className="h-px w-8 bg-primary"></span>
            Case Studies
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">Architectural Project Stories</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Explore how Auranook enterprise systems have transformed commercial and residential spaces through innovative acoustic, façade, and interior surface solutions.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input 
              type="text" 
              placeholder="Search by keyword, client, or challenge..." 
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
            Filters {(filters.industry !== 'All' || filters.brand !== 'All' || filters.designIntent !== 'All') && "(Active)"}
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
              <div className="bg-white p-6 border border-border mb-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
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
                <div className="md:col-span-3 flex justify-end">
                  <button onClick={clearFilters} className="text-sm font-bold text-muted-foreground hover:text-foreground underline">
                    Clear All Filters
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center bg-white border border-border">
            <p className="text-muted-foreground mb-4">No projects found matching your criteria.</p>
            <button onClick={clearFilters} className="text-primary font-bold hover:underline">Clear Filters</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-16">
            {filteredProjects.map((project, idx) => (
              <motion.div 
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group bg-white grid grid-cols-1 lg:grid-cols-2 border border-border"
              >
                <div className={`relative h-[400px] lg:h-auto w-full overflow-hidden ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <Image src={project.heroImage} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-primary text-white text-xs font-bold px-4 py-2 uppercase tracking-widest z-10 flex gap-2">
                    <span>{project.productBrand}</span>
                    <span className="opacity-50">|</span>
                    <span>{project.industry}</span>
                  </div>
                </div>
                
                <div className={`p-8 md:p-16 flex flex-col justify-center ${idx % 2 !== 0 ? 'lg:order-1 lg:border-r border-border' : 'lg:border-l border-border'}`}>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-8 text-foreground">{project.title}</h3>
                  <div className="space-y-6 mb-10">
                    <div>
                      <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground block mb-2">Architectural Challenge</span>
                      <p className="text-foreground leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground block mb-2">Systems Specified</span>
                      <p className="text-foreground leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                  <Link href={`/projects`} className="mt-auto inline-flex items-center font-bold text-primary hover:text-foreground transition-colors gap-2 text-lg">
                    Read Full Specification Story <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
