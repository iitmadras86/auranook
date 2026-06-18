export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export type BrandType = "The Uniceil" | "Polygranite";
export type SystemCategory = "Ceiling Systems" | "Wall Systems" | "Façade Systems" | "Soffit Systems" | "Surface Solutions" | "Flooring Systems" | "Landscape Systems" | "Urban Furniture";

export interface Product {
  slug: string;
  title: string;
  brand: BrandType;
  designIntent: string; // Kept for legacy
  systemCategory: SystemCategory;
  shortDescription: string;
  description: string;
  features: ProductFeature[];
  images: string[];
  applications: string[];
  specifications: Record<string, string>;
  status?: "Available" | "Coming Soon";
  // AI Search & GEO Readiness Fields
  definition?: string;
  limitations?: string[];
  faqs?: ProductFAQ[];
}

export const products: Product[] = [
  {
    slug: 'upvc-baffle-ceiling',
    title: 'Uniceil Acoustic Baffle Ceilings',
    brand: 'The Uniceil',
    designIntent: 'Acoustic Performance',
    systemCategory: 'Ceiling Systems',
    status: 'Available',
    shortDescription: 'Linear architectural appearance with superior acoustic benefits.',
    description: 'Transform spaces with our lightweight, durable uPVC baffle ceiling systems. Engineered for modern aesthetics and exceptional acoustic performance, perfect for managing reverberation in large open spaces.',
    definition: 'Acoustic baffle ceilings are vertically suspended panels designed to absorb sound, reduce reverberation, and provide linear architectural aesthetics in commercial spaces.',
    limitations: ['Not suitable for low-ceiling environments (< 2.5m).', 'Requires structural ceiling capable of supporting suspension cables.'],
    faqs: [
      { question: 'What is the NRC rating?', answer: 'Our baffle ceilings achieve an NRC rating of up to 0.85.' },
      { question: 'Are they waterproof?', answer: 'Yes, the uPVC material is 100% waterproof and suitable for humid environments.' }
    ],
    features: [
      { title: 'Lightweight Construction', description: 'Reduces structural load while maintaining architectural rigidity.' },
      { title: 'Acoustic Benefits', description: 'Exceptional noise reduction and NRC ratings for commercial environments.' },
      { title: 'Modern Aesthetics', description: 'Clean, linear architectural lines that elevate any design intent.' }
    ],
    images: [
      '/assets/systems/baffle-ceilings/sys_baffle_1.png',
      '/assets/systems/baffle-ceilings/sys_baffle_2.png',
      '/assets/systems/baffle-ceilings/sys_baffle_3.png',
      '/assets/systems/baffle-ceilings/sys_baffle_4.png',
      '/assets/systems/baffle-ceilings/sys_baffle_5.png',
      '/assets/systems/baffle-ceilings/sys_baffle_6.png',
      '/assets/systems/baffle-ceilings/sys_baffle_7.png',
      '/assets/systems/baffle-ceilings/sys_baffle_8.png'
    ],
    applications: ['Corporate Offices', 'Airports', 'Hospitality', 'Education'],
    specifications: {
      'Material': 'High-grade uPVC',
      'Fire Rating': 'Class A',
      'Moisture Resistance': '100% Waterproof'
    }
  },
  {
    slug: 'linear-metal-ceilings',
    title: 'Linear Metal Ceilings',
    brand: 'The Uniceil',
    designIntent: 'Acoustic Performance',
    systemCategory: 'Ceiling Systems',
    status: 'Available',
    shortDescription: 'Sleek, continuous linear ceiling systems.',
    description: 'Create striking, continuous architectural lines with our premium linear ceiling systems, designed for modern commercial interiors and exteriors.',
    definition: 'Linear ceilings are suspended ceiling systems consisting of parallel metal or wood-look panels, providing a continuous directional aesthetic.',
    limitations: ['May require specialized lighting integration.'],
    faqs: [
      { question: 'Can these be used outdoors?', answer: 'Yes, our aluminum linear ceilings are suitable for exterior soffits and canopies.' }
    ],
    features: [
      { title: 'Continuous Design', description: 'Creates visually expansive spaces.' },
      { title: 'Easy Access', description: 'Simple plenum access for maintenance.' }
    ],
    images: [
      '/assets/systems/linear-ceilings/sys_linear_1.png',
      '/assets/systems/linear-ceilings/sys_linear_2.png',
      '/assets/systems/linear-ceilings/sys_linear_3.png',
      '/assets/systems/linear-ceilings/sys_linear_4.png',
      '/assets/systems/linear-ceilings/sys_linear_5.png'
    ],
    applications: ['Commercial Offices', 'Retail Spaces', 'Transit Hubs'],
    specifications: {
      'Material': 'Aluminum',
      'Profile': 'Various Widths',
      'Finish': 'Wood-look / Powder Coated'
    }
  },
  {
    slug: 'uniceil-facade-system',
    title: 'Uniceil Architectural Facades',
    brand: 'The Uniceil',
    designIntent: 'Exterior Envelope',
    systemCategory: 'Façade Systems',
    status: 'Available',
    shortDescription: 'Premium exterior wall systems and architectural cladding.',
    description: 'Advanced wall and facade systems providing outstanding weather resistance, sustainability, and commercial-grade durability. Designed to protect the building envelope while delivering a striking visual presence.',
    definition: 'Architectural facades are exterior protective layers of a building that dictate visual identity while providing thermal insulation and weatherproofing.',
    limitations: ['Requires professional installation.', 'Structural load analysis required for retrofits.'],
    faqs: [
      { question: 'Can this be used on high-rise buildings?', answer: 'Yes, our facade systems are wind-load tested and suitable for high-rise commercial structures.' }
    ],
    features: [
      { title: 'Weather Resistance', description: 'Engineered to withstand harsh environmental conditions and UV exposure.' },
      { title: 'Sustainability', description: 'Eco-friendly materials offering high thermal insulation.' },
      { title: 'Architectural Cladding', description: 'Seamless installation for a striking modern exterior profile.' }
    ],
    images: [
      '/assets/systems/facade/sys_facade_1.png',
      '/assets/systems/facade/sys_facade_2.png',
      '/assets/systems/facade/sys_facade_3.png',
      '/assets/systems/facade/sys_facade_4.png',
      '/assets/systems/facade/sys_facade_5.png',
      '/assets/systems/facade/sys_facade_6.png',
      '/assets/systems/facade/sys_facade_7.png',
      '/assets/systems/facade/sys_facade_8.png'
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
    systemCategory: 'Surface Solutions',
    status: 'Available',
    shortDescription: 'The pinnacle of durability and elegance for interior walls.',
    description: 'Exquisite polygranite sheets offering the luxurious look of natural stone with the resilience, precision, and ease of modern specification materials.',
    definition: 'Polygranite decorative panels are engineered synthetic stone sheets designed to replicate the aesthetics of natural marble or granite without the associated weight or cost.',
    limitations: ['For interior use only.', 'Should not be exposed to direct, continuous UV radiation.'],
    faqs: [
      { question: 'How is it installed?', answer: 'Panels are adhered directly to flat wall surfaces using specialized structural adhesives.' }
    ],
    features: [
      { title: 'Marble Finish', description: 'Authentic stone texture and high-gloss polish without the weight.' },
      { title: 'Scratch Resistant', description: 'Highly durable surface that resists daily wear in high-traffic zones.' }
    ],
    images: [
      '/assets/systems/polygranite/sys_polygranite_1.png',
      '/assets/systems/polygranite/sys_polygranite_2.png',
      '/assets/systems/polygranite/sys_polygranite_3.png',
      '/assets/systems/polygranite/sys_polygranite_4.png',
      '/assets/systems/polygranite/sys_polygranite_5.png',
      '/assets/systems/polygranite/sys_polygranite_6.png',
      '/assets/systems/polygranite/sys_polygranite_7.png',
      '/assets/systems/polygranite/sys_polygranite_8.png'
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
    systemCategory: 'Flooring Systems',
    status: 'Available',
    shortDescription: 'Waterproof, resilient, and stunningly beautiful flooring.',
    description: 'Stone Plastic Composite flooring designed to deliver uncompromising durability with realistic wood and stone finishes, perfect for specification in demanding environments.',
    definition: 'Stone Plastic Composite (SPC) flooring is a highly durable, rigid core vinyl flooring known for its 100% waterproof properties and exceptional dent resistance.',
    limitations: ['Requires a perfectly level subfloor for installation.', 'Cannot be refinished like solid hardwood.'],
    faqs: [
      { question: 'Is SPC flooring waterproof?', answer: 'Yes, SPC is 100% waterproof and suitable for bathrooms and kitchens.' }
    ],
    features: [
      { title: '100% Waterproof', description: 'Perfect for retail environments, hospitality, and wet zones.' },
      { title: 'Click-Lock Installation', description: 'Fast, seamless, and glueless installation reduces project timelines.' }
    ],
    images: [
      '/assets/systems/flooring/sys_flooring_1.png',
      '/assets/products/hero_spc.png'
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
    systemCategory: 'Wall Systems',
    status: 'Available',
    shortDescription: 'Add depth, texture, and a modern artistic touch to your interiors.',
    description: 'Geometric 3D wall panels that create a stunning play of light and shadow, transforming flat walls into dynamic architectural features representing corporate identity.',
    definition: '3D wall panels are decorative wall surfacing materials featuring three-dimensional surface patterns, adding depth and architectural interest to interior spaces.',
    limitations: ['Dust may accumulate in deep textures.', 'Complex to install around curved surfaces.'],
    faqs: [
      { question: 'Can these panels be painted?', answer: 'Yes, our 3D panels are highly paintable to match any brand palette.' }
    ],
    features: [
      { title: 'Geometric Design', description: 'Contemporary patterns for feature walls and reception desks.' },
      { title: 'Paintable Surface', description: 'Customize the panels to match exact brand color palettes.' }
    ],
    images: [
      '/assets/products/prod_3d_wall.png',
      '/assets/products/hero_3d_panels.png'
    ],
    applications: ['Corporate Feature Walls', 'Reception Areas', 'Boutique Retail'],
    specifications: {
      'Material': 'Plant Fiber / PVC',
      'Dimensions': '500x500mm',
      'Paintable': 'Yes'
    }
  },
  // --- NEW STUBS (Coming Soon) ---
  {
    slug: 'wpc-decking-systems',
    title: 'Premium WPC Decking',
    brand: 'Polygranite',
    designIntent: 'Exterior Architecture',
    systemCategory: 'Landscape Systems',
    status: 'Coming Soon',
    shortDescription: 'Durable, weather-resistant outdoor decking.',
    description: 'Advanced WPC (Wood Plastic Composite) decking systems offering the natural look of wood with superior resistance to moisture, UV rays, and outdoor elements.',
    definition: 'WPC decking is a hybrid material composed of wood fibers and plastic, offering the aesthetic of wood but the durability and rot-resistance of plastic.',
    limitations: ['Can become hot under direct sunlight.', 'Heavier than traditional wood decking.'],
    faqs: [
      { question: 'Does WPC decking require oiling?', answer: 'No, our WPC decking is virtually maintenance-free and never requires staining or oiling.' }
    ],
    features: [
      { title: 'Weather Resistance', description: 'Withstands extreme temperatures and moisture.' },
      { title: 'Low Maintenance', description: 'No sanding, staining, or painting required.' }
    ],
    images: [
      '/assets/systems/decking/sys_decking_1.png',
      '/assets/systems/decking/sys_decking_2.png',
      '/assets/systems/decking/sys_decking_3.png'
    ],
    applications: ['Outdoor Decks', 'Pool Areas', 'Landscapes'],
    specifications: { 'Material': 'Wood Plastic Composite', 'Slip Resistance': 'High', 'Warranty': '10 Years' }
  },
  {
    slug: 'architectural-louvers',
    title: 'Architectural Louver Systems',
    brand: 'The Uniceil',
    designIntent: 'Exterior Envelope',
    systemCategory: 'Façade Systems',
    status: 'Coming Soon',
    shortDescription: 'Aesthetic and functional architectural screening.',
    description: 'Precision-engineered louver systems designed for optimal airflow, sun shading, and architectural screening while enhancing elevation design.',
    definition: 'Architectural louvers are angled slat systems installed on building exteriors to permit airflow or light penetration while keeping out rain, direct sunshine, and noise.',
    limitations: ['May restrict views from inside the building.', 'Requires periodic cleaning.'],
    faqs: [
      { question: 'Do louvers help with energy efficiency?', answer: 'Yes, by providing passive solar shading, they significantly reduce cooling loads.' }
    ],
    features: [
      { title: 'Sun Shading', description: 'Reduces solar heat gain and glare.' },
      { title: 'Architectural Screening', description: 'Hides HVAC and mechanical equipment elegantly.' }
    ],
    images: [
      '/assets/systems/louvers/sys_louvers_1.png',
      '/assets/systems/louvers/sys_louvers_2.png',
      '/assets/systems/louvers/sys_louvers_3.png'
    ],
    applications: ['Elevation Design', 'Architectural Screening', 'Commercial Buildings'],
    specifications: { 'Material': 'Aluminum/uPVC', 'Airflow': 'Optimized', 'Finish': 'Powder Coated' }
  },
  {
    slug: 'exterior-soffit-systems',
    title: 'Exterior Soffit Systems',
    brand: 'The Uniceil',
    designIntent: 'Exterior Envelope',
    systemCategory: 'Soffit Systems',
    status: 'Coming Soon',
    shortDescription: 'Seamless ceiling solutions for exterior overhangs.',
    description: 'High-performance soffit systems designed to provide a clean, finished look to balconies, verandahs, and building overhangs while ensuring proper ventilation.',
    definition: 'A soffit is an exterior architectural feature, generally the horizontal underside of any construction element like an overhanging eave or balcony.',
    limitations: ['Requires secure sub-framing.', 'Must accommodate roof ventilation requirements.'],
    faqs: [
      { question: 'Are ventilated options available?', answer: 'Yes, we offer both solid and perforated soffit profiles for optimal airflow.' }
    ],
    features: [
      { title: 'Weatherproof', description: 'Designed for exterior exposure.' },
      { title: 'Ventilated Options', description: 'Available with integrated ventilation profiles.' }
    ],
    images: [
      '/assets/systems/soffit/sys_soffit_1.png',
      '/assets/systems/soffit/sys_soffit_2.png',
      '/assets/systems/soffit/sys_soffit_3.png',
      '/assets/systems/soffit/sys_soffit_4.png',
      '/assets/systems/soffit/sys_soffit_5.png'
    ],
    applications: ['Balconies', 'Verandahs', 'Building Overhangs'],
    specifications: { 'Material': 'uPVC/Aluminum', 'Installation': 'Concealed Grid', 'Maintenance': 'Low' }
  },
  {
    slug: 'charcoal-wall-panels',
    title: 'Charcoal Wall Panels',
    brand: 'Polygranite',
    designIntent: 'Premium Interior Surfaces',
    systemCategory: 'Surface Solutions',
    status: 'Coming Soon',
    shortDescription: 'Luxury interior finishes with deep, rich textures.',
    description: 'Exclusive charcoal wall panels that bring sophisticated, dark-toned aesthetics to luxury interiors, commercial spaces, and decorative features.',
    definition: 'Charcoal wall panels are specialized composite interior cladding featuring deep, dark tones and structured textures for premium architectural aesthetics.',
    limitations: ['May make small spaces feel darker without proper lighting.', 'Not recommended for high-moisture exterior environments.'],
    faqs: [
      { question: 'Is it real charcoal?', answer: 'It is a high-density composite material designed to replicate the visual depth of natural charcoal without the fragility.' }
    ],
    features: [
      { title: 'Luxury Aesthetic', description: 'Deep textures and premium finishes.' },
      { title: 'High Durability', description: 'Resistant to impact and daily wear.' }
    ],
    images: [
      '/assets/systems/charcoal/sys_charcoal_1.png',
      '/assets/systems/charcoal/sys_charcoal_2.png',
      '/assets/systems/charcoal/sys_charcoal_3.png',
      '/assets/systems/charcoal/sys_charcoal_4.png',
      '/assets/systems/charcoal/sys_charcoal_5.png'
    ],
    applications: ['Luxury Interiors', 'Commercial Spaces', 'Decorative Features'],
    specifications: { 'Material': 'Charcoal Composite', 'Thickness': '12mm', 'Finish': 'Matte/Textured' }
  },
  {
    slug: 'pvc-wall-panels',
    title: 'PVC Wall Panels',
    brand: 'Polygranite',
    designIntent: 'Premium Interior Surfaces',
    systemCategory: 'Surface Solutions',
    status: 'Coming Soon',
    shortDescription: 'Cost-effective, hygienic, and highly durable wall protection.',
    description: 'Versatile PVC wall cladding systems offering exceptional moisture resistance, hygiene, and rapid installation for commercial and healthcare environments.',
    definition: 'PVC wall panels are lightweight, interlocking plastic cladding boards used primarily for interior wall finishing, especially in moisture-prone areas.',
    limitations: ['Susceptible to damage from sharp impacts.', 'Should be kept away from direct high-heat sources.'],
    faqs: [
      { question: 'Are they easy to clean?', answer: 'Yes, the non-porous surface can be easily wiped down with standard commercial cleaners.' }
    ],
    features: [
      { title: 'Hygienic Surface', description: 'Non-porous and antimicrobial.' },
      { title: 'Moisture Proof', description: '100% waterproof construction.' }
    ],
    images: [
      '/assets/systems/pvc-panels/sys_pvc_1.png',
      '/assets/systems/pvc-panels/sys_pvc_2.png',
      '/assets/systems/pvc-panels/sys_pvc_3.png',
      '/assets/systems/pvc-panels/sys_pvc_4.png',
      '/assets/systems/pvc-panels/sys_pvc_5.png'
    ],
    applications: ['Healthcare Facilities', 'Commercial Kitchens', 'Wet Zones'],
    specifications: { 'Material': 'Rigid PVC', 'Fire Rating': 'Class B', 'Maintenance': 'Wipe-clean' }
  },
  {
    slug: 'glass-aluminum-railings',
    title: 'Architectural Railing Systems',
    brand: 'The Uniceil',
    designIntent: 'Exterior Envelope',
    systemCategory: 'Landscape Systems',
    status: 'Coming Soon',
    shortDescription: 'Sleek, transparent safety barriers for modern architecture.',
    description: 'Premium glass and aluminum balustrade systems providing structural safety without compromising architectural views or aesthetic purity.',
    definition: 'Architectural railings are safety barriers installed on balconies, stairs, and terraces, designed to integrate seamlessly with the building facade.',
    limitations: ['Glass options require regular cleaning.', 'Must adhere strictly to local building codes for load bearing.'],
    faqs: [
      { question: 'What type of glass is used?', answer: 'We specify toughened, laminated safety glass for maximum structural integrity.' }
    ],
    features: [
      { title: 'Unobstructed Views', description: 'Frameless glass options available.' },
      { title: 'Structural Integrity', description: 'Engineered to meet stringent commercial load requirements.' }
    ],
    images: [
      '/assets/systems/railings/sys_railings_1.png'
    ],
    applications: ['Balconies', 'Terraces', 'Commercial Stairwells'],
    specifications: { 'Material': 'Aluminum/Glass', 'Load Capacity': 'Commercial Grade', 'Finish': 'Anodized' }
  },
  {
    slug: 'perimeter-fencing',
    title: 'Architectural Fencing Systems',
    brand: 'The Uniceil',
    designIntent: 'Exterior Envelope',
    systemCategory: 'Landscape Systems',
    status: 'Coming Soon',
    shortDescription: 'Secure, beautiful perimeter boundary solutions.',
    description: 'High-end boundary fencing systems that provide robust security while extending the architectural language of the main building out to the property edge.',
    definition: 'Architectural fencing refers to premium boundary enclosures that prioritize aesthetic design and structural longevity over utilitarian wire or chain-link.',
    limitations: ['Higher initial investment than standard fencing.', 'Requires professional footing installation.'],
    faqs: [
      { question: 'Do you offer automated gates?', answer: 'Yes, our fencing systems can integrate seamlessly with automated sliding and swing gates.' }
    ],
    features: [
      { title: 'Security', description: 'Robust anti-climb designs.' },
      { title: 'Durability', description: 'Corrosion-resistant finishes.' }
    ],
    images: [
      '/assets/systems/fencing/sys_fencing_1.png'
    ],
    applications: ['Corporate Campuses', 'Luxury Residential Boundaries', 'Resorts'],
    specifications: { 'Material': 'Powder Coated Steel/Aluminum', 'Height': 'Customizable', 'Warranty': '15 Years' }
  },
  {
    slug: 'urban-furniture',
    title: 'Urban & Landscape Furniture',
    brand: 'Polygranite',
    designIntent: 'Exterior Architecture',
    systemCategory: 'Urban Furniture',
    status: 'Coming Soon',
    shortDescription: 'Premium public seating and landscape elements.',
    description: 'Durable, ergonomically designed outdoor furniture created to complement modern commercial landscapes and public transit hubs.',
    definition: 'Urban furniture encompasses public seating, benches, and landscape amenities designed for high-traffic outdoor public and commercial spaces.',
    limitations: ['Fixed installations require concrete footings.', 'Vulnerable to extreme vandalism if not specified correctly.'],
    faqs: [
      { question: 'Is the furniture weather-resistant?', answer: 'Yes, we use marine-grade finishes and composite materials for maximum outdoor longevity.' }
    ],
    features: [
      { title: 'Ergonomic Design', description: 'Comfortable seating for public spaces.' },
      { title: 'Vandal Resistant', description: 'Heavy-duty construction and hidden fixings.' }
    ],
    images: [
      '/assets/systems/furniture/sys_furniture_1.png'
    ],
    applications: ['Public Parks', 'Corporate Courtyards', 'Transit Stations'],
    specifications: { 'Material': 'WPC/Aluminum', 'Fixing': 'Surface/Sub-surface mount', 'Maintenance': 'Low' }
  },
  {
    slug: 'architectural-gates',
    title: 'Architectural Gates',
    brand: 'The Uniceil',
    designIntent: 'Exterior Envelope',
    systemCategory: 'Landscape Systems',
    status: 'Coming Soon',
    shortDescription: 'Secure and visually striking entrance gates.',
    description: 'Custom-designed architectural gates that integrate perfectly with our perimeter fencing systems.',
    definition: 'Architectural gates provide secure vehicular and pedestrian access points while maintaining the premium aesthetic of the building perimeter.',
    limitations: ['Automation systems sold separately.', 'Requires robust pillar foundations.'],
    faqs: [
      { question: 'Are sliding options available?', answer: 'Yes, we offer both sliding and swing configurations.' }
    ],
    features: [
      { title: 'Seamless Integration', description: 'Matches our architectural fencing profiles.' },
      { title: 'Automated Ready', description: 'Pre-engineered for standard gate automation motors.' }
    ],
    images: [
      '/assets/systems/gates/sys_gates_1.png'
    ],
    applications: ['Corporate Entrances', 'Residential Estates', 'Secure Facilities'],
    specifications: { 'Material': 'Aluminum/Steel', 'Operation': 'Manual/Automated', 'Finish': 'Powder Coated' }
  },
  {
    slug: 'wpc-wall-panels',
    title: 'WPC Wall Panels',
    brand: 'Polygranite',
    designIntent: 'Premium Interior Surfaces',
    systemCategory: 'Surface Solutions',
    status: 'Coming Soon',
    shortDescription: 'Wood-look composite panels with advanced durability.',
    description: 'Wood Plastic Composite wall panels that deliver the warmth of natural timber with the structural resilience of modern polymers.',
    definition: 'WPC wall panels are engineered surfacing materials composed of wood fibers and thermoplastics, offering rot-resistant wood aesthetics.',
    limitations: ['Not suitable for load-bearing applications.', 'Exterior use requires UV-stabilized coating.'],
    faqs: [
      { question: 'Do they look like real wood?', answer: 'Yes, they feature high-definition wood grain embossing that is nearly indistinguishable from natural timber.' }
    ],
    features: [
      { title: 'Rot Resistant', description: 'Impervious to moisture and termites.' },
      { title: 'Easy Installation', description: 'Interlocking system for rapid deployment.' }
    ],
    images: [
      '/assets/systems/wpc-panels/sys_wpc_1.png'
    ],
    applications: ['Feature Walls', 'Exterior Accents', 'Commercial Interiors'],
    specifications: { 'Material': 'WPC', 'Thickness': 'Various', 'Texture': 'Embossed Wood Grain' }
  }
];


export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByBrand(brand: BrandType): Product[] {
  return products.filter(p => p.brand === brand);
}

export function getProductsBySystemCategory(category: SystemCategory): Product[] {
  return products.filter(p => p.systemCategory === category);
}

export function getProductsByDesignIntent(intent: string): Product[] {
  return products.filter(p => p.designIntent === intent);
}
