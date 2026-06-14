export interface ProductFeature {
  title: string;
  description: string;
}

export type BrandType = "The Uniceil" | "Polygranite";
export type DesignIntent = "Acoustic Performance" | "Visual Identity" | "Exterior Envelope" | "Premium Interior Surfaces";

export interface Product {
  slug: string;
  title: string;
  brand: BrandType;
  designIntent: DesignIntent;
  shortDescription: string;
  description: string;
  features: ProductFeature[];
  images: string[];
  applications: string[];
  specifications: Record<string, string>;
}

export const products: Product[] = [
  {
    slug: 'upvc-baffle-ceiling',
    title: 'Uniceil Acoustic Baffle Ceilings',
    brand: 'The Uniceil',
    designIntent: 'Acoustic Performance',
    shortDescription: 'Linear architectural appearance with superior acoustic benefits.',
    description: 'Transform spaces with our lightweight, durable uPVC baffle ceiling systems. Engineered for modern aesthetics and exceptional acoustic performance, perfect for managing reverberation in large open spaces.',
    features: [
      { title: 'Lightweight Construction', description: 'Reduces structural load while maintaining architectural rigidity.' },
      { title: 'Acoustic Benefits', description: 'Exceptional noise reduction and NRC ratings for commercial environments.' },
      { title: 'Modern Aesthetics', description: 'Clean, linear architectural lines that elevate any design intent.' }
    ],
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2000&auto=format&fit=crop'
    ],
    applications: ['Corporate Offices', 'Retail Spaces', 'Airports', 'Educational Institutions'],
    specifications: {
      'Material': 'High-grade uPVC',
      'Fire Rating': 'Class A',
      'Moisture Resistance': '100% Waterproof'
    }
  },
  {
    slug: 'uniceil-facade-system',
    title: 'Uniceil Architectural Facades',
    brand: 'The Uniceil',
    designIntent: 'Exterior Envelope',
    shortDescription: 'Premium exterior wall systems and architectural cladding.',
    description: 'Advanced wall and facade systems providing outstanding weather resistance, sustainability, and commercial-grade durability. Designed to protect the building envelope while delivering a striking visual presence.',
    features: [
      { title: 'Weather Resistance', description: 'Engineered to withstand harsh environmental conditions and UV exposure.' },
      { title: 'Sustainability', description: 'Eco-friendly materials offering high thermal insulation.' },
      { title: 'Architectural Cladding', description: 'Seamless installation for a striking modern exterior profile.' }
    ],
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2000&auto=format&fit=crop'
    ],
    applications: ['Commercial Buildings', 'Residential Complexes', 'Hotels & Hospitality', 'Transit Hubs'],
    specifications: {
      'Material': 'Composite Cladding',
      'UV Resistance': 'High',
      'Maintenance': 'Self-cleaning / Low'
    }
  },
  {
    slug: 'polygranite-decorative-panels',
    title: 'Polygranite Decorative Panels',
    brand: 'Polygranite',
    designIntent: 'Premium Interior Surfaces',
    shortDescription: 'The pinnacle of durability and elegance for interior walls.',
    description: 'Exquisite polygranite sheets offering the luxurious look of natural stone with the resilience, precision, and ease of modern specification materials.',
    features: [
      { title: 'Marble Finish', description: 'Authentic stone texture and high-gloss polish without the weight.' },
      { title: 'Scratch Resistant', description: 'Highly durable surface that resists daily wear in high-traffic zones.' }
    ],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2000&auto=format&fit=crop'
    ],
    applications: ['Hospitality Lobbies', 'Luxury Bathrooms', 'Commercial Accent Walls'],
    specifications: {
      'Thickness': '3mm - 5mm',
      'Finish': 'High Gloss / Matte',
      'Installation': 'Adhesive / Rapid'
    }
  },
  {
    slug: 'spc-flooring',
    title: 'SPC Commercial Flooring',
    brand: 'Polygranite',
    designIntent: 'Premium Interior Surfaces',
    shortDescription: 'Waterproof, resilient, and stunningly beautiful flooring.',
    description: 'Stone Plastic Composite flooring designed to deliver uncompromising durability with realistic wood and stone finishes, perfect for specification in demanding environments.',
    features: [
      { title: '100% Waterproof', description: 'Perfect for retail environments, hospitality, and wet zones.' },
      { title: 'Click-Lock Installation', description: 'Fast, seamless, and glueless installation reduces project timelines.' }
    ],
    images: [
      'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop'
    ],
    applications: ['Retail Flooring', 'Commercial Spaces', 'Healthcare Corridors'],
    specifications: {
      'Core': 'Stone Plastic Composite',
      'Wear Layer': '0.5mm Commercial Grade',
      'Waterproof': 'Yes'
    }
  },
  {
    slug: '3d-wall-panels',
    title: 'Transformative 3D Wall Geometries',
    brand: 'Polygranite',
    designIntent: 'Visual Identity',
    shortDescription: 'Add depth, texture, and a modern artistic touch to your interiors.',
    description: 'Geometric 3D wall panels that create a stunning play of light and shadow, transforming flat walls into dynamic architectural features representing corporate identity.',
    features: [
      { title: 'Geometric Design', description: 'Contemporary patterns for feature walls and reception desks.' },
      { title: 'Paintable Surface', description: 'Customize the panels to match exact brand color palettes.' }
    ],
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?q=80&w=2000&auto=format&fit=crop'
    ],
    applications: ['Corporate Feature Walls', 'Reception Areas', 'Boutique Retail'],
    specifications: {
      'Material': 'Plant Fiber / PVC',
      'Dimensions': '500x500mm',
      'Paintable': 'Yes'
    }
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByBrand(brand: BrandType): Product[] {
  return products.filter(p => p.brand === brand);
}

export function getProductsByDesignIntent(intent: DesignIntent): Product[] {
  return products.filter(p => p.designIntent === intent);
}
