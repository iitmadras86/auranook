import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Baffle Ceiling Design Guide | Auranook',
  description: 'Technical and aesthetic considerations for designing with acoustic baffle ceilings in modern commercial and educational spaces.',
  alternates: {
    canonical: 'https://auranook.netlify.app/insights/baffle-ceiling-design-guide',
  }
};

export default function BaffleGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Baffle Ceiling Design Guide",
    "description": "Technical and aesthetic considerations for designing with acoustic baffle ceilings in modern commercial and educational spaces.",
    "author": { "@type": "Organization", "name": "Auranook Technical Team" },
    "datePublished": "2026-06-22"
  };

  return (
    <article className="bg-stone-50 min-h-screen pt-24 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary mb-6">
            <span>Ceiling Systems</span><span>•</span><span>10 Min Read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">Baffle Ceiling Design Guide</h1>
          <div className="bg-white p-8 border-l-4 border-primary shadow-sm mb-12">
            <h3 className="text-xl font-bold mb-4">Direct Answer: How to design with Baffles?</h3>
            <p className="text-lg text-foreground/80 leading-relaxed font-medium">
              Baffle design hinges on three vectors: <strong>Spacing</strong> (which dictates NRC performance and sightline obscuration), <strong>Depth</strong> (which controls low-frequency absorption), and <strong>Orientation</strong> (linear vs cross-hatch for visual dynamics). Proper integration with MEP systems is critical.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-12 text-lg text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Technical Explanation: Spacing and Plenum Integration</h2>
            <p>The distance between baffles directly impacts both the aesthetic linearity of the space and the acoustic efficiency. Closer spacing increases the NRC but restricts access to the plenum above for maintenance. We generally recommend 150mm to 200mm centers for optimal balance.</p>
          </section>
        </div>
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-foreground text-background p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Need CAD Details?</h3>
            <Link href="/specification-support" className="block w-full py-4 bg-primary text-white text-center font-bold tracking-widest uppercase">Request CAD</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
