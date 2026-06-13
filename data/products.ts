export interface ProductFeature {
  title: string;
  description: string;
}

export interface Product {
  slug: string;
  title: string;
  category: string;
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
    title: 'uPVC Baffle Ceiling Systems',
    category: 'Uniceil',
    shortDescription: 'Linear architectural appearance with superior acoustic benefits.',
    description: 'Transform spaces with our lightweight, durable uPVC baffle ceiling systems. Engineered for modern aesthetics and exceptional acoustic performance.',
    features: [
      { title: 'Lightweight Construction', description: 'Reduces structural load while maintaining rigidity.' },
      { title: 'Acoustic Benefits', description: 'Exceptional noise reduction for commercial environments.' },
      { title: 'Modern Aesthetics', description: 'Clean, linear architectural lines that elevate any space.' }
    ],
    images: ['/assets/products/baffle-1.jpg', '/assets/products/baffle-2.jpg'],
    applications: ['Corporate Offices', 'Retail Spaces', 'Airports', 'Educational Institutions'],
    specifications: {
      'Material': 'High-grade uPVC',
      'Fire Rating': 'Class A',
      'Moisture Resistance': '100% Waterproof'
    }
  },
  {
    slug: 'wall-facade-system',
    title: 'Wall & Facade Systems',
    category: 'Uniceil',
    shortDescription: 'Premium decorative walls and architectural cladding.',
    description: 'Our advanced wall and facade systems provide outstanding weather resistance, sustainability, and commercial-grade durability.',
    features: [
      { title: 'Weather Resistance', description: 'Engineered to withstand harsh environmental conditions.' },
      { title: 'Sustainability', description: 'Eco-friendly materials with high energy efficiency ratings.' },
      { title: 'Architectural Cladding', description: 'Seamless installation for a striking modern exterior.' }
    ],
    images: ['/assets/products/facade-1.jpg', '/assets/products/facade-2.jpg'],
    applications: ['Commercial Buildings', 'Residential Complexes', 'Hotels & Hospitality'],
    specifications: {
      'Material': 'Composite Cladding',
      'UV Resistance': 'High',
      'Maintenance': 'Low'
    }
  },
  {
    slug: 'polygranite-sheets',
    title: 'Polygranite Sheets',
    category: 'Surfaces',
    shortDescription: 'The pinnacle of durability and elegance for walls and surfaces.',
    description: 'Exquisite polygranite sheets offering the luxurious look of natural stone with the resilience and ease of modern materials.',
    features: [
      { title: 'Marble Finish', description: 'Authentic stone texture and high-gloss polish.' },
      { title: 'Scratch Resistant', description: 'Highly durable surface that resists daily wear.' }
    ],
    images: ['/assets/products/polygranite-1.jpg'],
    applications: ['Living Rooms', 'Bathrooms', 'Accent Walls'],
    specifications: {
      'Thickness': '3mm - 5mm',
      'Finish': 'High Gloss',
      'Installation': 'Adhesive'
    }
  },
  {
    slug: 'spc-flooring',
    title: 'Superior SPC Flooring',
    category: 'Flooring',
    shortDescription: 'Waterproof, resilient, and stunningly beautiful flooring.',
    description: 'Stone Plastic Composite flooring designed to deliver uncompromising durability with realistic wood and stone finishes.',
    features: [
      { title: '100% Waterproof', description: 'Perfect for kitchens, bathrooms, and commercial areas.' },
      { title: 'Click-Lock Installation', description: 'Fast, seamless, and glueless installation.' }
    ],
    images: ['/assets/products/spc-1.jpg'],
    applications: ['Residential Flooring', 'Commercial Spaces', 'High-traffic areas'],
    specifications: {
      'Core': 'Stone Plastic Composite',
      'Wear Layer': '0.5mm',
      'Waterproof': 'Yes'
    }
  },
  {
    slug: '3d-wall-panels',
    title: 'Transformative 3D Wall Panels',
    category: 'Surfaces',
    shortDescription: 'Add depth, texture, and a modern artistic touch to your interiors.',
    description: 'Geometric 3D wall panels that create a stunning play of light and shadow, transforming flat walls into dynamic architectural features.',
    features: [
      { title: 'Geometric Design', description: 'Contemporary patterns for feature walls.' },
      { title: 'Paintable Surface', description: 'Customize the panels to match any color palette.' }
    ],
    images: ['/assets/products/3d-panel-1.jpg'],
    applications: ['Feature Walls', 'Reception Areas', 'Bedrooms'],
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

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
}
