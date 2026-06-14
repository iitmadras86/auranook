import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Uniceil vs. Traditional Gypsum Ceilings | Auranook',
  description: 'A comprehensive comparison between uPVC architectural baffle systems and traditional flat gypsum board ceilings.',
};

export default function UniceilVsGypsum() {
  return (
    <article className="bg-stone-50 min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12 mb-16 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">The Uniceil vs. Traditional Gypsum Ceilings</h1>
        <div className="bg-white p-8 border-l-4 border-primary shadow-sm mb-12">
          <h3 className="text-xl font-bold mb-4">Direct Answer</h3>
          <p className="text-lg text-foreground/80 leading-relaxed font-medium">While gypsum provides a monolithic aesthetic, The Uniceil systems offer superior acoustic performance (higher NRC), faster installation, and instant access to the plenum space without destructive maintenance.</p>
        </div>
      </div>
    </article>
  );
}
