"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/utils/analytics";

type FormData = {
  profession: string;
  projectType: string;
  projectStage: string;
  designIntent: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  area: string;
  notes: string;
};

const INITIAL_DATA: FormData = {
  profession: "",
  projectType: "",
  projectStage: "",
  designIntent: "",
  name: "",
  email: "",
  phone: "",
  company: "",
  location: "",
  area: "",
  notes: "",
};

const PROFESSIONS = [
  "Architect", "Interior Designer", "PMC", "Contractor", "Developer", "Builder", "Distributor"
];

const PROJECT_TYPES = [
  "Commercial Office", "Hospitality", "Retail", "Healthcare", "Education", "Residential", "Mixed Use"
];

const PROJECT_STAGES = [
  "Concept Design", "Design Development", "Tender", "Procurement", "Construction"
];

const DESIGN_INTENTS = [
  "Acoustic Performance", "Visual Identity", "Exterior Envelope", "Premium Interior Surfaces", "Fire Compliance", "Sustainability", "Durability"
];

export default function ConsultationWizard() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateData = (fields: Partial<FormData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/specification-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        trackEvent('lead_funnel_completed', { 
          profession: data.profession, 
          project_type: data.projectType 
        });
      } else {
        alert("There was an issue submitting your request. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("There was an issue submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 md:p-12 text-center border border-border shadow-sm max-w-2xl mx-auto">
        <CheckCircle2 size={64} className="text-primary mx-auto mb-6" />
        <h3 className="text-3xl font-bold mb-4">Request Received</h3>
        <p className="text-muted-foreground mb-4 text-lg">
          Thank you for providing the details. A technical specification expert will review your requirements and reach out within 24 hours.
        </p>
        <p className="text-muted-foreground mb-8 text-lg">
          Need urgent assistance? Contact our team at <a href="tel:+919507054062" className="text-primary font-bold hover:underline">+91 95070 54062</a>
        </p>
        <button 
          onClick={() => {
            setIsSuccess(false);
            setStep(1);
            setData(INITIAL_DATA);
          }}
          className="px-8 py-4 bg-primary text-white font-bold hover:brightness-110 transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border shadow-sm max-w-3xl mx-auto overflow-hidden">
      {/* Progress Bar */}
      <div className="flex w-full h-2 bg-muted">
        <motion.div 
          className="bg-primary h-full"
          initial={{ width: 0 }}
          animate={{ width: `${(step / 5) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="p-8 md:p-12">
        <div className="mb-8">
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">Step {step} of 5</span>
          <h2 className="text-3xl font-bold">
            {step === 1 && "What is your profession?"}
            {step === 2 && "What is the project type?"}
            {step === 3 && "What is the project stage?"}
            {step === 4 && "Primary design intent?"}
            {step === 5 && "Project Details"}
          </h2>
        </div>

        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" variants={variants} initial="initial" animate="animate" exit="exit" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {PROFESSIONS.map((prof) => (
                  <button
                    key={prof}
                    onClick={() => { updateData({ profession: prof }); handleNext(); }}
                    className={`p-4 border text-left font-semibold transition-colors ${data.profession === prof ? 'border-primary bg-primary/5 text-primary' : 'border-border hover:border-foreground/30'}`}
                  >
                    {prof}
                  </button>
                ))}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" variants={variants} initial="initial" animate="animate" exit="exit" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => { updateData({ projectType: type }); handleNext(); }}
                    className={`p-4 border text-left font-semibold transition-colors ${data.projectType === type ? 'border-primary bg-primary/5 text-primary' : 'border-border hover:border-foreground/30'}`}
                  >
                    {type}
                  </button>
                ))}
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" variants={variants} initial="initial" animate="animate" exit="exit" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECT_STAGES.map((stage) => (
                  <button
                    key={stage}
                    onClick={() => { updateData({ projectStage: stage }); handleNext(); }}
                    className={`p-4 border text-left font-semibold transition-colors ${data.projectStage === stage ? 'border-primary bg-primary/5 text-primary' : 'border-border hover:border-foreground/30'}`}
                  >
                    {stage}
                  </button>
                ))}
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" variants={variants} initial="initial" animate="animate" exit="exit" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DESIGN_INTENTS.map((intent) => (
                  <button
                    key={intent}
                    onClick={() => { updateData({ designIntent: intent }); handleNext(); }}
                    className={`p-4 border text-left font-semibold transition-colors ${data.designIntent === intent ? 'border-primary bg-primary/5 text-primary' : 'border-border hover:border-foreground/30'}`}
                  >
                    {intent}
                  </button>
                ))}
              </motion.div>
            )}

            {step === 5 && (
              <motion.form key="step5" variants={variants} initial="initial" animate="animate" exit="exit" onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required type="text" placeholder="Your Name *" value={data.name} onChange={(e) => updateData({ name: e.target.value })} className="w-full p-4 border border-border bg-stone-50 focus:outline-none focus:border-primary" />
                  <input required type="email" placeholder="Email Address *" value={data.email} onChange={(e) => updateData({ email: e.target.value })} className="w-full p-4 border border-border bg-stone-50 focus:outline-none focus:border-primary" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required type="tel" placeholder="Phone Number *" value={data.phone} onChange={(e) => updateData({ phone: e.target.value })} className="w-full p-4 border border-border bg-stone-50 focus:outline-none focus:border-primary" />
                  <input required type="text" placeholder="Company / Firm Name *" value={data.company} onChange={(e) => updateData({ company: e.target.value })} className="w-full p-4 border border-border bg-stone-50 focus:outline-none focus:border-primary" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required type="text" placeholder="Project Location *" value={data.location} onChange={(e) => updateData({ location: e.target.value })} className="w-full p-4 border border-border bg-stone-50 focus:outline-none focus:border-primary" />
                  <input type="text" placeholder="Approximate Area (e.g., 10,000 sq ft)" value={data.area} onChange={(e) => updateData({ area: e.target.value })} className="w-full p-4 border border-border bg-stone-50 focus:outline-none focus:border-primary" />
                </div>
                <textarea rows={4} placeholder="Additional Notes or Specific Requirements..." value={data.notes} onChange={(e) => updateData({ notes: e.target.value })} className="w-full p-4 border border-border bg-stone-50 focus:outline-none focus:border-primary resize-none" />
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-foreground text-background font-bold uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Specification Request"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="mt-8 pt-6 border-t border-border flex justify-between">
          {step > 1 ? (
            <button onClick={handleBack} className="flex items-center gap-2 font-bold text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft size={18} /> Back
            </button>
          ) : <div />}
          
          {step < 5 && (
            <button 
              onClick={handleNext} 
              disabled={(step === 1 && !data.profession) || (step === 2 && !data.projectType) || (step === 3 && !data.projectStage) || (step === 4 && !data.designIntent)}
              className="flex items-center gap-2 font-bold text-primary hover:text-foreground transition-colors disabled:opacity-30 disabled:hover:text-primary"
            >
              Skip / Next <ArrowRight size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
