import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Architectural Material Specification Guide | Auranook',
  description: 'Mastering the art of material specification: A structured approach to evaluating durability, fire compliance, and visual identity for enterprise projects.',
  alternates: {
    canonical: 'https://auranook.netlify.app/insights/architectural-material-specification-guide',
  }
};

export default function SpecificationGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Architectural Material Specification Guide",
    "description": "Mastering the art of material specification: A structured approach to evaluating durability, fire compliance, and visual identity for enterprise projects.",
    "author": {
      "@type": "Organization",
      "name": "Auranook Technical Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Auranook",
      "logo": {
        "@type": "ImageObject",
        "url": "https://auranook.netlify.app/assets/logo.png"
      }
    },
    "datePublished": "2026-06-18",
    "mainEntityOfPage": "https://auranook.netlify.app/insights/architectural-material-specification-guide"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is architectural material specification?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Architectural material specification is the precise technical description and selection of building materials required to meet structural, acoustic, aesthetic, and regulatory compliance standards in a construction project."
        }
      },
      {
        "@type": "Question",
        "name": "Why is fire compliance critical in material specification?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fire compliance ensures that materials used in construction, especially interior surfaces and façades, do not contribute to the rapid spread of flames or emit toxic smoke, which is mandated by global safety codes."
        }
      }
    ]
  };

  return (
    <article className="bg-stone-50 min-h-screen pt-24 pb-20">
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary mb-6">
            <span>Technical Specification</span>
            <span>•</span>
            <span>15 Min Read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
            Architectural Material Specification Guide
          </h1>
          
          {/* Executive Summary & Direct Answer (GEO Friendly) */}
          <div className="bg-white p-8 border-l-4 border-primary shadow-sm mb-12">
            <h3 className="text-xl font-bold mb-4">Direct Answer: How to Specify Materials Effectively?</h3>
            <p className="text-lg text-foreground/80 leading-relaxed font-medium">
              Effective material specification requires a systematic evaluation of four critical pillars: <strong>Aesthetic Intent</strong> (visual identity), <strong>Performance Metrics</strong> (acoustics, durability), <strong>Regulatory Compliance</strong> (fire ratings, sustainability), and <strong>Procurement Viability</strong> (cost, lead times, supply chain). By aligning these factors early in the design phase, architects eliminate costly value-engineering risks down the line.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Article Body */}
        <div className="lg:col-span-8 space-y-12 text-lg text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Technical Explanation: The Specification Lifecycle</h2>
            <p className="mb-4">
              Material specification is the translation of an architectural vision into a legally binding document. It bridges the gap between design intent and physical execution. Modern construction demands more than just aesthetic choices; materials must perform under rigorous physical stresses and conform to ever-tightening sustainability and safety codes.
            </p>
            <p>
              When specifying systems like exterior façades or acoustic ceilings, the technical documentation must be unambiguous. This means clearly defining acceptable tolerances, referencing relevant ASTM or ISO standards, and providing definitive Bill of Quantities (BOQ) metrics to the contractor.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Key Evaluation Metrics</h2>
            <ul className="space-y-4">
              <li className="flex gap-4"><CheckCircle2 className="text-primary shrink-0 mt-1" /> <span><strong>Acoustic Ratings:</strong> NRC (Noise Reduction Coefficient) and CAC (Ceiling Attenuation Class) for interior ceilings.</span></li>
              <li className="flex gap-4"><CheckCircle2 className="text-primary shrink-0 mt-1" /> <span><strong>Fire Performance:</strong> Class A fire ratings, flame spread indices, and smoke developed indices.</span></li>
              <li className="flex gap-4"><CheckCircle2 className="text-primary shrink-0 mt-1" /> <span><strong>Environmental Impact:</strong> Recycled content, VOC emissions, and contributions to LEED or WELL building certifications.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Common Pitfalls & Limitations</h2>
            <div className="bg-white p-6 border border-border">
                <h3 className="font-bold text-xl mb-4 text-rose-700">Avoid These Specification Errors</h3>
                <ul className="list-disc pl-5 space-y-2 text-base">
                  <li><strong>Over-specifying:</strong> Demanding tolerances or material properties that exceed the actual needs of the project, driving up costs unnecessarily.</li>
                  <li><strong>Orphan Specifications:</strong> Specifying a product that is no longer manufactured or unavailable in the project&apos;s geographic region.</li>
                  <li><strong>Ignoring Substrates:</strong> Specifying heavy decorative panels without ensuring the underlying wall structure can support the dead load.</li>
                </ul>
              </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Recommended System Approaches</h2>
            <p className="mb-6">For premium interior wall cladding, we recommend specifying <strong>Polygranite Decorative Surfaces</strong>. They provide the visual gravity of natural marble but are lightweight, 100% waterproof, and highly durable—eliminating many of the structural limitations of traditional stone.</p>
            <Link href="/brands/polygranite" className="inline-flex items-center text-primary font-bold gap-2 hover:underline">
              Explore Polygranite Surfaces <ArrowRight size={18} />
            </Link>
          </section>

          <section className="bg-white p-8 border border-border mt-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-xl mb-2">What is architectural material specification?</h4>
                <p className="text-base">Architectural material specification is the precise technical description and selection of building materials required to meet structural, acoustic, aesthetic, and regulatory compliance standards in a construction project.</p>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Why is fire compliance critical in material specification?</h4>
                <p className="text-base">Fire compliance ensures that materials used in construction, especially interior surfaces and façades, do not contribute to the rapid spread of flames or emit toxic smoke, which is mandated by global safety codes.</p>
              </div>
            </div>
          </section>

        </div>

        {/* Sidebar / Related Content Engine */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-foreground text-background p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Need BOQ & CAD Support?</h3>
            <p className="text-white/80 mb-6">Our specification team assists architects in generating precise BOQs, CAD details, and technical submittals for tender.</p>
            <Link href="/specification-support" className="block w-full py-4 bg-primary text-white text-center font-bold tracking-widest uppercase hover:brightness-110">
              Request Support
            </Link>
          </div>

          <div className="bg-white border border-border p-8">
            <h3 className="font-bold uppercase tracking-widest text-sm mb-6 text-muted-foreground flex items-center gap-2"><FileText size={18}/> Related Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/resources" className="block font-bold hover:text-primary transition-colors text-base mb-1">Polygranite Material Safety Data Sheet</Link>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">PDF • 1.1 MB</span>
              </li>
              <li>
                <Link href="/resources" className="block font-bold hover:text-primary transition-colors text-base mb-1">Fire Safety Compliance Certificates</Link>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">PDF • 2.3 MB</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
