export interface Project {
  slug: string;
  title: string;
  industry: string;
  challenge: string;
  recommendedProduct: string;
  productBrand: string;
  solution: string;
  outcome: string;
  benefitsDelivered: string[];
  designIntent: string;
  heroImage: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: 'tech-hub-bengaluru',
    title: 'Tech Hub Corporate Office',
    industry: 'Commercial',
    challenge: 'The client required acoustic control and a strong visual identity in a large, high-traffic open office without compromising the modern aesthetic appeal.',
    recommendedProduct: 'Uniceil Acoustic Baffle Ceilings',
    productBrand: 'The Uniceil',
    solution: 'We specified and coordinated the installation of a custom baffle configuration engineered to reduce reverberation while maintaining continuous linear sightlines.',
    outcome: 'Improved acoustic comfort, seamless integration with lighting fixtures, and a premium visual identity that reflects the tech brand.',
    benefitsDelivered: [
      'Acoustic Performance (NRC 0.85)',
      'Contemporary Linear Design',
      'Rapid Installation Capability'
    ],
    designIntent: 'Acoustic Performance',
    heroImage: '/assets/uniceil/portfolio_baffle.png',
    gallery: [
      '/assets/uniceil/portfolio_baffle.png'
    ]
  },
  {
    slug: 'luxury-residence-mumbai',
    title: 'Sea-Facing Luxury Residence',
    industry: 'Residential',
    challenge: 'Creating a highly durable, moisture-resistant yet luxurious surface finish for living areas exposed to coastal humidity and saline air.',
    recommendedProduct: 'Polygranite Decorative Panels',
    productBrand: 'Polygranite',
    solution: 'Specified Polygranite Sheets in a high-gloss marble finish to deliver the opulence of natural stone without the weight and vulnerability of traditional marble.',
    outcome: 'A stunning, zero-maintenance interior surface that completely resists moisture penetration while elevating the luxury quotient of the residence.',
    benefitsDelivered: [
      'Absolute Moisture Resistance',
      'Zero-Maintenance Luxury',
      'Structural Load Reduction'
    ],
    designIntent: 'Premium Interior Surfaces',
    heroImage: '/assets/products/prod_facade.png',
    gallery: [
      '/assets/uniceil/sector_hospitality.png'
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
