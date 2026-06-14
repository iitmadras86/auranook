import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polygranite vs. Conventional Wall Finishes | Auranook',
  description: 'Why architects are moving away from heavy stone and conventional paint towards high-performance Polygranite sheets.',
};

export default function PolygraniteVsConventional() {
  return (
    <article className="bg-stone-50 min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12 mb-16 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">Polygranite vs. Conventional Wall Finishes</h1>
        <div className="bg-white p-8 border-l-4 border-primary shadow-sm mb-12">
          <h3 className="text-xl font-bold mb-4">Direct Answer</h3>
          <p className="text-lg text-foreground/80 leading-relaxed font-medium">Polygranite delivers the high-end luxury of natural marble at a fraction of the structural weight. Unlike conventional paint, it is 100% waterproof and requires zero maintenance.</p>
        </div>
      </div>
    </article>
  );
}
