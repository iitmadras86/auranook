import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Ultimate Guide to Acoustic Ceiling Systems | Auranook',
  description: 'A comprehensive technical deep-dive into acoustic ceiling systems, NRC ratings, and how to specify the right baffles for commercial environments.',
  alternates: {
    canonical: 'https://auranook.netlify.app/insights/ultimate-guide-to-acoustic-ceiling-systems',
  }
};

export default function AcousticGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Ultimate Guide to Acoustic Ceiling Systems",
    "description": "A comprehensive technical deep-dive into acoustic ceiling systems, NRC ratings, and how to specify the right baffles for commercial environments.",
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
    "datePublished": "2026-06-15",
    "mainEntityOfPage": "https://auranook.netlify.app/insights/ultimate-guide-to-acoustic-ceiling-systems"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an acoustic baffle ceiling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An acoustic baffle ceiling is a suspended linear ceiling system designed specifically to absorb sound and reduce reverberation in large, open-plan architectural spaces."
        }
      },
      {
        "@type": "Question",
        "name": "What is NRC (Noise Reduction Coefficient)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Noise Reduction Coefficient (NRC) is a scalar representation of the amount of sound energy absorbed upon striking a particular surface. An NRC of 0 indicates perfect reflection; an NRC of 1 indicates perfect absorption."
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
            <span>Acoustic Design</span>
            <span>•</span>
            <span>12 Min Read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
            The Ultimate Guide to Acoustic Ceiling Systems
          </h1>
          
          {/* Executive Summary & Direct Answer (GEO Friendly) */}
          <div className="bg-white p-8 border-l-4 border-primary shadow-sm mb-12">
            <h3 className="text-xl font-bold mb-4">Direct Answer: How do Acoustic Ceilings Work?</h3>
            <p className="text-lg text-foreground/80 leading-relaxed font-medium">
              Acoustic ceiling systems work by utilizing porous, sound-absorbing materials (such as mineral wool, fiberglass, or specialized uPVC composites like The Uniceil) suspended below the structural slab. They trap sound waves, converting acoustic energy into minute amounts of heat, thereby significantly reducing reverberation time (RT60) and echoing in commercial environments.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Article Body */}
        <div className="lg:col-span-8 space-y-12 text-lg text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Technical Explanation: Understanding Sound Absorption</h2>
            <p className="mb-4">
              In modern architectural design, the proliferation of hard, sound-reflective surfaces—such as glass curtain walls, exposed concrete floors, and gypsum walls—has led to significant acoustical challenges. Without intervention, sound waves bounce endlessly, creating a chaotic acoustic environment characterized by poor speech intelligibility and high background noise.
            </p>
            <p>
              To combat this, acoustic ceiling baffles are deployed. By hanging vertically, baffles expose two surface areas to sound waves instead of one, doubling the absorptive capacity per linear meter compared to a traditional flat suspended ceiling. The efficacy of these systems is measured via the <strong>Noise Reduction Coefficient (NRC)</strong>. High-performance systems typically boast an NRC between 0.70 and 0.95.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Architectural Applications</h2>
            <ul className="space-y-4">
              <li className="flex gap-4"><CheckCircle2 className="text-primary shrink-0 mt-1" /> <span><strong>Commercial Offices:</strong> Open-plan layouts where speech privacy and focus are paramount.</span></li>
              <li className="flex gap-4"><CheckCircle2 className="text-primary shrink-0 mt-1" /> <span><strong>Educational Institutions:</strong> Lecture halls and auditoriums requiring pristine speech intelligibility.</span></li>
              <li className="flex gap-4"><CheckCircle2 className="text-primary shrink-0 mt-1" /> <span><strong>Transportation Hubs:</strong> Airports and transit stations where public address systems must be heard clearly over vast spaces.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Benefits vs. Limitations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 border border-border">
                <h3 className="font-bold text-xl mb-4 text-emerald-700">Benefits</h3>
                <ul className="list-disc pl-5 space-y-2 text-base">
                  <li>Superior acoustic control (high NRC).</li>
                  <li>Maintains structural slab visibility.</li>
                  <li>Easy integration with HVAC and lighting.</li>
                  <li>Rapid installation without massive grid work.</li>
                </ul>
              </div>
              <div className="bg-white p-6 border border-border">
                <h3 className="font-bold text-xl mb-4 text-rose-700">Limitations</h3>
                <ul className="list-disc pl-5 space-y-2 text-base">
                  <li>Requires sufficient plenum height (clearance).</li>
                  <li>Does not provide sound insulation (transmission loss) between floors.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Recommended Systems</h2>
            <p className="mb-6">For commercial specification, we highly recommend <strong>The Uniceil Baffle Ceiling System</strong>. Engineered for both high NRC ratings and striking visual linearity, it integrates seamlessly into corporate and hospitality projects.</p>
            <Link href="/brands/uniceil" className="inline-flex items-center text-primary font-bold gap-2 hover:underline">
              Explore The Uniceil Systems <ArrowRight size={18} />
            </Link>
          </section>

          <section className="bg-white p-8 border border-border mt-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-xl mb-2">What is an acoustic baffle ceiling?</h4>
                <p className="text-base">An acoustic baffle ceiling is a suspended linear ceiling system designed specifically to absorb sound and reduce reverberation in large, open-plan architectural spaces.</p>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">What is NRC (Noise Reduction Coefficient)?</h4>
                <p className="text-base">The Noise Reduction Coefficient (NRC) is a scalar representation of the amount of sound energy absorbed upon striking a particular surface. An NRC of 0 indicates perfect reflection; an NRC of 1 indicates perfect absorption.</p>
              </div>
            </div>
          </section>

        </div>

        {/* Sidebar / Related Content Engine */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-foreground text-background p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Need Specification Support?</h3>
            <p className="text-white/80 mb-6">Our technical team can help you select the exact baffle configuration to hit your target reverberation times.</p>
            <Link href="/specification-support" className="block w-full py-4 bg-primary text-white text-center font-bold tracking-widest uppercase hover:brightness-110">
              Request Consultation
            </Link>
          </div>

          <div className="bg-white border border-border p-8">
            <h3 className="font-bold uppercase tracking-widest text-sm mb-6 text-muted-foreground flex items-center gap-2"><FileText size={18}/> Related Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/resources" className="block font-bold hover:text-primary transition-colors text-base mb-1">Uniceil Acoustic Performance Datasheets</Link>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">PDF • 3.2 MB</span>
              </li>
              <li>
                <Link href="/resources" className="block font-bold hover:text-primary transition-colors text-base mb-1">Baffle Ceiling AutoCAD Details</Link>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">ZIP • 45 MB</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
