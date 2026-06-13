"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Download, Users, MessageSquare, ChevronRight } from "lucide-react";

export default function StickyCTA() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show sticky CTA after scrolling down 300px
    setIsVisible(latest > 300);
  });

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end"
    >
      <div className="flex flex-col gap-2 bg-white/90 dark:bg-black/90 backdrop-blur-md p-2 rounded-2xl shadow-2xl border border-border">
        <Link 
          href="/catalogs" 
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors group"
        >
          <div className="bg-primary/10 text-primary p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
            <Download size={18} />
          </div>
          <span className="text-sm font-semibold text-foreground">Request Catalog</span>
        </Link>
        
        <Link 
          href="/distributorship" 
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors group"
        >
          <div className="bg-primary/10 text-primary p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
            <Users size={18} />
          </div>
          <span className="text-sm font-semibold text-foreground">Become Distributor</span>
        </Link>
        
        <Link 
          href="/contact" 
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground hover:brightness-110 transition-colors group"
        >
          <div className="p-1">
            <MessageSquare size={18} />
          </div>
          <span className="text-sm font-semibold">Talk to Expert</span>
          <ChevronRight size={16} className="ml-auto group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
