import ConsultationWizard from "@/components/ConsultationWizard";
import { Wrench, CheckCircle2, ShieldCheck, Ruler } from "lucide-react";

export default function SpecificationSupportPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-stone-50">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/projects/about_hero.png')] opacity-10 bg-cover bg-center" />
        <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
            <span className="h-px w-8 bg-primary"></span>
            Technical Partnership
            <span className="h-px w-8 bg-primary"></span>
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mb-8">
            Need Help Specifying the Right Architectural System?
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-12">
            Collaborate with our technical specialists to identify the ideal ceiling, façade, wall, acoustic and decorative surface solution for your project.
          </p>
        </div>
      </section>

      {/* 2. Wizard & Services Layout */}
      <section className="py-20 -mt-20 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Consultation Wizard */}
            <div className="lg:col-span-8">
              <ConsultationWizard />
            </div>

            {/* Right: Technical Services Overview */}
            <div className="lg:col-span-4 space-y-8 bg-white p-8 md:p-10 border border-border shadow-sm">
              <h3 className="text-2xl font-extrabold mb-6">Our Services</h3>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-2 text-primary shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Product Specification</h4>
                    <p className="text-sm text-muted-foreground">Expert guidance on material selection based on aesthetic and performance requirements.</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-2 text-primary shrink-0">
                    <Ruler size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">BOQ & Estimation</h4>
                    <p className="text-sm text-muted-foreground">Accurate Bill of Quantities extraction and budgeting support.</p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-2 text-primary shrink-0">
                    <Wrench size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">CAD & BIM Support</h4>
                    <p className="text-sm text-muted-foreground">Provision of shop drawings, installation details, and Revit models.</p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-2 text-primary shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Site Coordination</h4>
                    <p className="text-sm text-muted-foreground">End-to-end integration with your on-site execution teams.</p>
                  </div>
                </li>
              </ul>

              <div className="pt-8 mt-8 border-t border-border">
                <h4 className="font-bold mb-4">Direct Contact</h4>
                <p className="text-sm text-muted-foreground mb-2">Prefer to speak directly with an expert?</p>
                <a href="mailto:specifications@auranook.com" className="text-primary font-bold hover:underline block mb-4">specifications@auranook.com</a>
                <p className="text-sm text-muted-foreground mb-2">Need immediate assistance?</p>
                <p className="text-sm text-muted-foreground">Call: <a href="tel:+919507054062" className="text-primary font-bold hover:underline">+91 95070 54062</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Social Proof */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">Trusted by Leading Architecture Practices</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
            <span className="text-xl font-bold font-serif">Studio Design</span>
            <span className="text-xl font-bold font-serif">Urban Construct</span>
            <span className="text-xl font-bold font-serif">Form & Function</span>
            <span className="text-xl font-bold font-serif">Apex Architects</span>
          </div>
        </div>
      </section>
    </div>
  );
}
