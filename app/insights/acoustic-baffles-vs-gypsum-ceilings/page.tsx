import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acoustic Baffles vs. Gypsum Ceilings | Auranook',
  description: 'Technical comparison of sound absorption and reverberation control in commercial architecture.',
};

export default function BafflesVsGypsum() {
  return (
    <article className="bg-stone-50 min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12 mb-16 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">Acoustic Baffles vs. Gypsum Ceilings</h1>
        <div className="bg-white p-8 border-l-4 border-primary shadow-sm mb-12">
          <h3 className="text-xl font-bold mb-4">Direct Answer</h3>
          <p className="text-lg text-foreground/80 leading-relaxed font-medium">For open-plan offices, gypsum ceilings reflect sound (NRC ~0.05), causing high reverberation. Acoustic baffles absorb sound from multiple angles, routinely achieving NRC ratings &gt;0.85, making them the superior choice for speech intelligibility.</p>
        </div>
      </div>
    </article>
  );
}
