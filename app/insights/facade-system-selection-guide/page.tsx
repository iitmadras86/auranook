import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Façade System Selection Guide | Auranook',
  description: 'How to evaluate and select architectural exterior envelope systems for durability, weather resistance, and brand identity.',
  alternates: {
    canonical: 'https://auranook.netlify.app/insights/facade-system-selection-guide',
  }
};

export default function FacadeGuide() {
  return (
    <article className="bg-stone-50 min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary mb-6">
            <span>Façade Design</span><span>•</span><span>9 Min Read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">Façade System Selection Guide</h1>
          <div className="bg-white p-8 border-l-4 border-primary shadow-sm mb-12">
            <h3 className="text-xl font-bold mb-4">Direct Answer: Choosing a Façade</h3>
            <p className="text-lg text-foreground/80 leading-relaxed font-medium">
              Selecting a façade requires evaluating wind load resistance, UV stability, structural weight limitations, and the desired visual identity. High-performance uPVC and composite systems offer significant advantages over traditional heavy cladding.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
