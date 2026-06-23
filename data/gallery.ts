export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description: string;
  industry: string;
  brand: string;
  designIntent: string;
  systemCategory: string;
  projectType: string;
  altText: string;
}

export const galleryData: GalleryImage[] = [
  // ---------------------------------------------------------
  // Existing Base Images (7)
  // ---------------------------------------------------------
  {
    id: "gal-001",
    src: "/assets/systems/baffle-ceilings/sys_baffle_1.png",
    title: "Tech Hub Linear Baffles",
    description: "Continuous linear baffle ceiling installation designed to reduce reverberation in a high-traffic open-plan tech office.",
    industry: "Commercial Office",
    brand: "The Uniceil",
    designIntent: "Acoustic Performance",
    systemCategory: "Ceiling",
    projectType: "Corporate HQ",
    altText: "Acoustic baffle ceiling installation in a commercial office using The Uniceil ceiling system."
  },
  {
    id: "gal-002",
    src: "/assets/systems/linear-ceilings/sys_linear_1.png",
    title: "Executive Boardroom Aesthetics",
    description: "Premium acoustic ceiling tiles seamlessly integrated with architectural lighting for executive privacy.",
    industry: "Commercial Office",
    brand: "The Uniceil",
    designIntent: "Visual Identity",
    systemCategory: "Ceiling",
    projectType: "Corporate HQ",
    altText: "Executive boardroom featuring luxury acoustic ceiling systems by The Uniceil."
  },
  {
    id: "gal-003",
    src: "/assets/systems/polygranite/sys_polygranite_1.png",
    title: "Reception Area Cladding",
    description: "High-gloss decorative Polygranite surface applied to the main reception desk and backdrop.",
    industry: "Commercial Office",
    brand: "Polygranite",
    designIntent: "Premium Interior Surfaces",
    systemCategory: "Surface",
    projectType: "Lobby",
    altText: "Premium Polygranite decorative sheets used as reception wall cladding in a commercial office."
  },
  {
    id: "gal-004",
    src: "/assets/systems/facade/sys_facade_1.png",
    title: "Hotel Atrium Facade",
    description: "Durable exterior facade system providing both weather resistance and a striking visual identity for a luxury hotel.",
    industry: "Hospitality",
    brand: "The Uniceil",
    designIntent: "Exterior Envelope",
    systemCategory: "Façade",
    projectType: "Hotel",
    altText: "Exterior facade system by The Uniceil installed on a modern luxury hotel building."
  },
  {
    id: "gal-005",
    src: "/assets/systems/polygranite/sys_polygranite_2.png",
    title: "Luxury Suite Walls",
    description: "Polygranite wall panels delivering zero-maintenance luxury to hotel suite interiors.",
    industry: "Hospitality",
    brand: "Polygranite",
    designIntent: "Premium Interior Surfaces",
    systemCategory: "Wall",
    projectType: "Suite",
    altText: "Luxury hotel suite interior featuring Polygranite premium decorative surface wall panels."
  },
  {
    id: "gal-006",
    src: "/assets/systems/baffle-ceilings/sys_baffle_2.png",
    title: "Hospital Corridor Acoustics",
    description: "Acoustic wall and ceiling treatments ensuring a quiet healing environment and meeting strict hygiene standards.",
    industry: "Healthcare",
    brand: "The Uniceil",
    designIntent: "Acoustic Performance",
    systemCategory: "Ceiling",
    projectType: "Hospital",
    altText: "Healthcare acoustic ceiling installation by The Uniceil in a hospital corridor."
  },
  {
    id: "gal-007",
    src: "/assets/systems/baffle-ceilings/sys_baffle_3.png",
    title: "Retail Flagship Display",
    description: "Custom ceiling and wall system configurations for a premium retail flagship store.",
    industry: "Retail",
    brand: "The Uniceil",
    designIntent: "Visual Identity",
    systemCategory: "Ceiling",
    projectType: "Flagship Store",
    altText: "Custom architectural ceiling installation by The Uniceil in a retail flagship store."
  },

  // ---------------------------------------------------------
  // NEW: Acoustic Performance Expansion (5)
  // ---------------------------------------------------------
  {
    id: "gal-ap-01",
    src: "/assets/systems/baffle-ceilings/sys_baffle_4.png",
    title: "Open-Plan Acoustic Baffles",
    description: "Extensive linear baffle system installed across a modern open-plan office to minimize speech transmission.",
    industry: "Commercial Office",
    brand: "The Uniceil",
    designIntent: "Acoustic Performance",
    systemCategory: "Ceiling",
    projectType: "Workspace",
    altText: "Open plan office with acoustic baffles"
  },
  {
    id: "gal-ap-02",
    src: "/assets/systems/baffle-ceilings/sys_baffle_5.png",
    title: "University Auditorium Acoustics",
    description: "High-NRC ceiling panels configured specifically for a large-scale educational auditorium.",
    industry: "Education",
    brand: "The Uniceil",
    designIntent: "Acoustic Performance",
    systemCategory: "Ceiling",
    projectType: "Auditorium",
    altText: "Educational auditorium with acoustic ceiling"
  },
  {
    id: "gal-ap-03",
    src: "/assets/systems/linear-ceilings/sys_linear_2.png",
    title: "Executive Conference Acoustics",
    description: "Sound-dampening ceiling tiles in a glass-walled conference room ensuring complete privacy.",
    industry: "Commercial Office",
    brand: "The Uniceil",
    designIntent: "Acoustic Performance",
    systemCategory: "Ceiling",
    projectType: "Conference Room",
    altText: "Conference room acoustic ceiling"
  },
  {
    id: "gal-ap-04",
    src: "/assets/systems/baffle-ceilings/sys_baffle_6.png",
    title: "Collaborative Zone Sound Control",
    description: "Suspended acoustic clouds positioned over collaborative zones to contain localized noise.",
    industry: "Commercial Office",
    brand: "The Uniceil",
    designIntent: "Acoustic Performance",
    systemCategory: "Ceiling",
    projectType: "Innovation Hub",
    altText: "Acoustic clouds over collaboration zone"
  },
  {
    id: "gal-ap-05",
    src: "/assets/systems/linear-ceilings/sys_linear_3.png",
    title: "Library Quiet Zones",
    description: "Seamless acoustic ceiling integration in a university library ensuring a distraction-free environment.",
    industry: "Education",
    brand: "The Uniceil",
    designIntent: "Acoustic Performance",
    systemCategory: "Ceiling",
    projectType: "Library",
    altText: "University library with acoustic ceiling"
  },

  // ---------------------------------------------------------
  // NEW: Visual Identity Expansion (5)
  // ---------------------------------------------------------
  {
    id: "gal-vi-01",
    src: "/assets/systems/baffle-ceilings/sys_baffle_7.png",
    title: "Corporate Reception Statement",
    description: "A sweeping architectural ceiling feature establishing an immediate premium brand identity.",
    industry: "Commercial Office",
    brand: "The Uniceil",
    designIntent: "Visual Identity",
    systemCategory: "Ceiling",
    projectType: "Lobby",
    altText: "Corporate reception with statement ceiling"
  },
  {
    id: "gal-vi-02",
    src: "/assets/systems/charcoal/sys_charcoal_1.png",
    title: "Feature Wall Geometry",
    description: "3D architectural wall panels creating dynamic shadows and a contemporary focal point.",
    industry: "Retail",
    brand: "Polygranite",
    designIntent: "Visual Identity",
    systemCategory: "Wall",
    projectType: "Showroom",
    altText: "3D feature wall in retail showroom"
  },
  {
    id: "gal-vi-03",
    src: "/assets/systems/linear-ceilings/sys_linear_4.png",
    title: "Branded Atrium Space",
    description: "Custom-colored woodgrain baffles complementing the corporate brand palette in a central atrium.",
    industry: "Commercial Office",
    brand: "The Uniceil",
    designIntent: "Visual Identity",
    systemCategory: "Ceiling",
    projectType: "Atrium",
    altText: "Branded atrium with woodgrain baffles"
  },
  {
    id: "gal-vi-04",
    src: "/assets/systems/polygranite/sys_polygranite_3.png",
    title: "Luxury Boutique Cladding",
    description: "High-contrast decorative surfaces framing a high-end luxury boutique entrance.",
    industry: "Retail",
    brand: "Polygranite",
    designIntent: "Visual Identity",
    systemCategory: "Surface",
    projectType: "Boutique",
    altText: "Luxury boutique with decorative surface cladding"
  },
  {
    id: "gal-vi-05",
    src: "/assets/systems/linear-ceilings/sys_linear_5.png",
    title: "Architectural Stairwell",
    description: "Continuous linear ceilings flowing smoothly down a monumental architectural stairwell.",
    industry: "Commercial Office",
    brand: "The Uniceil",
    designIntent: "Visual Identity",
    systemCategory: "Ceiling",
    projectType: "Headquarters",
    altText: "Monumental stairwell with linear ceilings"
  },

  // ---------------------------------------------------------
  // NEW: Exterior Envelope Expansion (5)
  // ---------------------------------------------------------
  {
    id: "gal-ee-01",
    src: "/assets/systems/facade/sys_facade_2.png",
    title: "Modern Commercial Tower Façade",
    description: "Weather-resistant, UV-stable exterior cladding system on a high-rise commercial tower.",
    industry: "Commercial Office",
    brand: "The Uniceil",
    designIntent: "Exterior Envelope",
    systemCategory: "Façade",
    projectType: "High-Rise",
    altText: "Modern commercial tower facade"
  },
  {
    id: "gal-ee-02",
    src: "/assets/systems/facade/sys_facade_3.png",
    title: "Institutional Building Envelope",
    description: "Durable architectural cladding protecting a modern educational institution building.",
    industry: "Education",
    brand: "The Uniceil",
    designIntent: "Exterior Envelope",
    systemCategory: "Façade",
    projectType: "Campus Building",
    altText: "Institutional building exterior envelope"
  },
  {
    id: "gal-ee-03",
    src: "/assets/systems/facade/sys_facade_4.png",
    title: "Hospitality Resort Exterior",
    description: "Premium exterior façade systems that withstand coastal weather conditions for luxury resorts.",
    industry: "Hospitality",
    brand: "The Uniceil",
    designIntent: "Exterior Envelope",
    systemCategory: "Façade",
    projectType: "Resort",
    altText: "Hospitality resort exterior facade"
  },
  {
    id: "gal-ee-04",
    src: "/assets/systems/facade/sys_facade_5.png",
    title: "Geometric Façade Detailing",
    description: "Complex geometric exterior cladding showcasing the precision and flexibility of the system.",
    industry: "Commercial Office",
    brand: "The Uniceil",
    designIntent: "Exterior Envelope",
    systemCategory: "Façade",
    projectType: "Corporate HQ",
    altText: "Geometric exterior facade detailing"
  },
  {
    id: "gal-ee-05",
    src: "/assets/systems/facade/sys_facade_6.png",
    title: "Transit Hub Weather Shield",
    description: "Robust exterior envelope system applied to a high-traffic metropolitan transit hub.",
    industry: "Airports & Transit Hubs",
    brand: "The Uniceil",
    designIntent: "Exterior Envelope",
    systemCategory: "Façade",
    projectType: "Transit Center",
    altText: "Transit hub exterior weather shield facade"
  },

  // ---------------------------------------------------------
  // NEW: Premium Interior Surfaces Expansion (5)
  // ---------------------------------------------------------
  {
    id: "gal-pis-01",
    src: "/assets/systems/polygranite/sys_polygranite_4.png",
    title: "Luxury Hotel Lobby Finishes",
    description: "Extensive marble-finish Polygranite application delivering absolute opulence without the weight of natural stone.",
    industry: "Hospitality",
    brand: "Polygranite",
    designIntent: "Premium Interior Surfaces",
    systemCategory: "Surface",
    projectType: "Lobby",
    altText: "Luxury hotel lobby with premium interior surfaces"
  },
  {
    id: "gal-pis-02",
    src: "/assets/systems/polygranite/sys_polygranite_5.png",
    title: "High-End Residential Masterpiece",
    description: "Flawless interior wall treatments in a luxury sea-facing residence.",
    industry: "Luxury Residential",
    brand: "Polygranite",
    designIntent: "Premium Interior Surfaces",
    systemCategory: "Wall",
    projectType: "Private Villa",
    altText: "Luxury residential interior with premium surfaces"
  },
  {
    id: "gal-pis-03",
    src: "/assets/systems/pvc-panels/sys_pvc_1.png",
    title: "Executive Washroom Upgrades",
    description: "100% moisture-resistant, hyper-hygienic premium surfaces for corporate executive washrooms.",
    industry: "Commercial Office",
    brand: "Polygranite",
    designIntent: "Premium Interior Surfaces",
    systemCategory: "Surface",
    projectType: "Executive Floor",
    altText: "Executive washroom with premium moisture-resistant surfaces"
  },
  {
    id: "gal-pis-04",
    src: "/assets/systems/wpc-panels/sys_wpc_1.png",
    title: "Spa & Wellness Retreat Cladding",
    description: "Warm, woodgrain-finish decorative surfaces creating a calming, organic environment in a luxury spa.",
    industry: "Hospitality",
    brand: "Polygranite",
    designIntent: "Premium Interior Surfaces",
    systemCategory: "Wall",
    projectType: "Spa Facility",
    altText: "Spa retreat with premium woodgrain interior cladding"
  },
  {
    id: "gal-pis-05",
    src: "/assets/systems/polygranite/sys_polygranite_6.png",
    title: "Corporate Corridor Aesthetics",
    description: "High-impact resistant, visually stunning wall panels lining the primary circulation routes of a global HQ.",
    industry: "Commercial Office",
    brand: "Polygranite",
    designIntent: "Premium Interior Surfaces",
    systemCategory: "Wall",
    projectType: "Corridor",
    altText: "Corporate corridor with premium impact-resistant wall surfaces"
  }
];

export const getGalleryByFilter = (industry?: string, brand?: string, intent?: string, systemCategory?: string, query?: string) => {
  return galleryData.filter(img => {
    let match = true;
    if (industry && industry !== 'All') match = match && img.industry === industry;
    if (brand && brand !== 'All') match = match && img.brand === brand;
    if (intent && intent !== 'All') match = match && img.designIntent === intent;
    if (systemCategory && systemCategory !== 'All') match = match && img.systemCategory === systemCategory;
    if (query) {
      const q = query.toLowerCase();
      match = match && (
        img.title.toLowerCase().includes(q) || 
        img.description.toLowerCase().includes(q) ||
        img.industry.toLowerCase().includes(q) ||
        img.brand.toLowerCase().includes(q) ||
        img.designIntent.toLowerCase().includes(q) ||
        img.systemCategory.toLowerCase().includes(q)
      );
    }
    return match;
  });
};

export const getUniqueCategories = () => {
  return {
    industries: Array.from(new Set(galleryData.map(d => d.industry))),
    brands: Array.from(new Set(galleryData.map(d => d.brand))),
    designIntents: Array.from(new Set(galleryData.map(d => d.designIntent))),
    systemCategories: Array.from(new Set(galleryData.map(d => d.systemCategory))),
  };
};
