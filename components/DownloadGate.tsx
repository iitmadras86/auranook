"use client";

import { useState } from "react";
import { trackEvent } from "@/utils/analytics";
import { Lock, FileDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DownloadGateProps {
  resourceName: string;
  resourceType: 'BIM' | 'CAD' | 'Catalogue' | 'Acoustic Report' | 'Fire Report' | 'Other';
  fileUrl: string;
  children: React.ReactNode;
}

export default function DownloadGate({ resourceName, resourceType, fileUrl, children }: DownloadGateProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    profession: "Architect",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track the form completion rate and capture lead
    trackEvent('resource_download', {
      resource_name: resourceName,
      resource_type: resourceType,
      profession: formData.profession
    });

    // In a real app, send lead data to an API here.
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setIsUnlocked(true);
    
    // Auto-trigger download
    window.open(fileUrl, '_blank');
  };

  return (
    <>
      <div onClick={() => !isUnlocked && setIsOpen(true)} className="cursor-pointer">
        {isUnlocked ? (
          <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="block">
             {children}
          </a>
        ) : (
          <div className="relative group">
            {children}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="flex items-center gap-2 bg-foreground text-background px-4 py-2 font-bold text-sm uppercase tracking-widest">
                <Lock size={16} /> Unlock
              </span>
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isOpen && !isUnlocked && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white max-w-md w-full relative overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X size={24} />
              </button>

              <div className="p-8">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <FileDown size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Unlock Premium Resource</h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  Please provide your details to download <strong>{resourceName}</strong> ({resourceType}).
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 block">Name</label>
                    <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-3 border border-border bg-stone-50 focus:border-primary focus:outline-none" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 block">Work Email</label>
                    <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-3 border border-border bg-stone-50 focus:border-primary focus:outline-none" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 block">Company</label>
                      <input required type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full p-3 border border-border bg-stone-50 focus:border-primary focus:outline-none" />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 block">Profession</label>
                      <select value={formData.profession} onChange={(e) => setFormData({...formData, profession: e.target.value})} className="w-full p-3 border border-border bg-stone-50 focus:border-primary focus:outline-none">
                        <option>Architect</option>
                        <option>Interior Designer</option>
                        <option>PMC</option>
                        <option>Contractor</option>
                        <option>Developer</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <button type="submit" disabled={isSubmitting} className="w-full py-4 mt-2 bg-foreground text-background font-bold tracking-widest uppercase hover:bg-primary transition-colors disabled:opacity-50">
                    {isSubmitting ? "Unlocking..." : "Unlock & Download"}
                  </button>
                  <p className="text-[10px] text-muted-foreground text-center mt-4">
                    By downloading this resource, you agree to receive technical updates from Auranook. We respect your inbox.
                  </p>
                  <div className="text-center mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground font-medium mb-1">Need technical support?</p>
                    <a href="tel:+919507054062" className="text-primary font-bold text-sm hover:underline">+91 95070 54062</a>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
