import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Understanding NRC Ratings for Architectural Ceilings | Auranook',
  description: 'A technical guide explaining Noise Reduction Coefficient (NRC) ratings, how they are calculated, and how to specify NRC requirements for commercial projects.',
  alternates: {
    canonical: 'https://auranook.netlify.app/insights/understanding-nrc-ratings',
  }
};

export default function NRCRatingsGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Understanding NRC Ratings for Architectural Ceilings",
    "description": "A technical guide explaining Noise Reduction Coefficient (NRC) ratings, how they are calculated, and how to specify NRC requirements for commercial projects.",
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
    "datePublished": "2026-06-20",
    "mainEntityOfPage": "https://auranook.netlify.app/insights/understanding-nrc-ratings"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an NRC rating?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NRC (Noise Reduction Coefficient) is a single-number rating representing the average sound absorption of a material across four key frequencies (250, 500, 1000, and 2000 Hz). It ranges from 0.0 (perfectly reflective) to 1.0+ (perfectly absorptive)."
        }
      }
    ]
  };

  return (
    <article className="bg-stone-50 min-h-screen pt-24 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary mb-6">
            <span>Acoustic Design</span>
            <span>•</span>
            <span>8 Min Read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
            Understanding NRC Ratings for Architectural Ceilings
          </h1>
          
          <div className="bg-white p-8 border-l-4 border-primary shadow-sm mb-12">
            <h3 className="text-xl font-bold mb-4">Direct Answer: What is NRC?</h3>
            <p className="text-lg text-foreground/80 leading-relaxed font-medium">
              The Noise Reduction Coefficient (NRC) is the industry-standard metric for determining how well a ceiling system absorbs sound. A rating of 0.85 means the material absorbs 85% of sound waves that strike it, reflecting only 15% back into the space. For open-plan commercial offices, an NRC of 0.70 or higher is strictly recommended.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-12 text-lg text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Technical Explanation: Calculation and Testing</h2>
            <p className="mb-4">
              NRC is derived via ASTM C423 testing in a reverberation room. It averages the absorption coefficients at mid-range frequencies where human speech typically falls. While it is highly effective for determining voice privacy and general reverberation reduction, it does not account for low-frequency rumbles (like HVAC systems) or high-frequency shrills.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Application Requirements by Industry</h2>
            <ul className="space-y-4">
              <li className="flex gap-4"><CheckCircle2 className="text-primary shrink-0 mt-1" /> <span><strong>Private Executive Offices:</strong> NRC 0.60 to 0.70 is usually sufficient.</span></li>
              <li className="flex gap-4"><CheckCircle2 className="text-primary shrink-0 mt-1" /> <span><strong>Open-Plan Workspaces:</strong> Require highly absorptive baffles (NRC 0.85+) to prevent the cocktail party effect.</span></li>
              <li className="flex gap-4"><CheckCircle2 className="text-primary shrink-0 mt-1" /> <span><strong>Healthcare Corridors:</strong> NRC 0.70+ is mandated for patient comfort and HIPAA speech privacy compliance.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Recommended Systems</h2>
            <p className="mb-6">The Uniceil&apos;s Acoustic Baffle configurations routinely achieve NRC ratings exceeding 0.85 when spaced appropriately, making them ideal for high-performance acoustic specifications.</p>
            <Link href="/brands/uniceil" className="inline-flex items-center text-primary font-bold gap-2 hover:underline">
              Explore The Uniceil <ArrowRight size={18} />
            </Link>
          </section>

          <section className="bg-white p-8 border border-border mt-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-xl mb-2">Can NRC exceed 1.0?</h4>
                <p className="text-base">Yes. Due to the way testing is calculated (taking the surface area of a 3D baffle into account), a highly efficient system can score above 1.0, effectively absorbing more sound than a flat surface of the same footprint.</p>
              </div>
            </div>
          </section>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="bg-foreground text-background p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Targeting a specific NRC?</h3>
            <p className="text-white/80 mb-6">Let our team calculate the exact spacing and quantity of baffles required for your space.</p>
            <Link href="/specification-support" className="block w-full py-4 bg-primary text-white text-center font-bold tracking-widest uppercase hover:brightness-110">
              Consult an Expert
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
