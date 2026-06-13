"use client";

import { motion } from "framer-motion";
import { Download, FileText, CheckCircle2 } from "lucide-react";

export default function CatalogsPage() {
  const catalogs = [
    { title: "Uniceil Technical Manual 2024", size: "12.5 MB", type: "PDF" },
    { title: "Polygranite Surfaces Catalog", size: "8.2 MB", type: "PDF" },
    { title: "SPC Flooring Collections", size: "15.1 MB", type: "PDF" },
    { title: "Acoustics & Baffles Specifications", size: "5.4 MB", type: "PDF" },
    { title: "Facade Systems Installation Guide", size: "18.9 MB", type: "PDF" },
    { title: "Auranook Full Product Portfolio", size: "24.0 MB", type: "PDF" }
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-background min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Download Center</h1>
          <p className="text-muted-foreground text-lg">Access our complete library of technical manuals, product catalogs, and installation guides. For architects, contractors, and partners.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalogs.map((catalog, idx) => (
            <motion.div 
              key={catalog.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                  <FileText size={24} />
                </div>
                <span className="text-xs font-bold text-muted-foreground bg-stone-100 px-2 py-1 rounded">
                  {catalog.type} • {catalog.size}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-6 flex-1">{catalog.title}</h3>
              <button className="w-full py-3 rounded-xl bg-stone-100 hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 font-semibold text-sm group">
                <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
                Download File
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-primary/10 rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Need physical samples?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">We provide physical sample kits to architects and certified contractors. Request your kit today.</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold hover:brightness-110 transition-all">
            <CheckCircle2 size={18} />
            Request Sample Kit
          </a>
        </motion.div>
      </div>
    </div>
  );
}
