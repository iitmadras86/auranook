"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { getInsightCategories, getInsightsByFilter } from "@/data/insights";

export default function InsightsHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const categories = useMemo(() => ["All Categories", ...getInsightCategories()], []);
  
  const filteredInsights = useMemo(() => {
    return getInsightsByFilter(activeCategory, searchQuery);
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-stone-50 min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Architect Knowledge Center</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Technical <span className="text-primary">Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Deep-dive technical guides, material comparisons, and specification best practices to build long-term authority and optimize architectural outcomes.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Sidebar / Filters */}
          <div className="lg:col-span-3 sticky top-24 space-y-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input 
                type="text" 
                placeholder="Search insights..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-border bg-white focus:outline-none focus:border-primary"
              />
            </div>
            
            <div className="bg-white border border-border p-6">
              <h3 className="font-bold uppercase tracking-widest text-sm mb-4 text-muted-foreground">Topics</h3>
              <ul className="space-y-2">
                {categories.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left w-full px-4 py-2 text-sm font-semibold transition-colors ${activeCategory === cat ? 'bg-primary/10 text-primary border-l-2 border-primary' : 'text-foreground hover:bg-stone-100 border-l-2 border-transparent'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Article Grid */}
          <div className="lg:col-span-9">
            {filteredInsights.length === 0 ? (
              <div className="py-20 text-center bg-white border border-border">
                <p className="text-muted-foreground">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredInsights.map((article, idx) => (
                  <motion.div 
                    key={article.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white border border-border group hover:border-primary transition-colors flex flex-col"
                  >
                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                        <span className="text-primary">{article.category}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      
                      <h2 className="text-2xl font-extrabold mb-4 group-hover:text-primary transition-colors">
                        <Link href={`/insights/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h2>
                      
                      <p className="text-muted-foreground mb-6 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                        <span className="text-sm font-semibold">{article.publishedAt}</span>
                        <Link href={`/insights/${article.slug}`} className="inline-flex items-center text-primary font-bold hover:text-foreground transition-colors gap-2">
                          Read Guide <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
