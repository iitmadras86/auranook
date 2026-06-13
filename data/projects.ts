export interface Project {
  slug: string;
  title: string;
  clientSegment: string;
  challenge: string;
  solution: string;
  materialsUsed: string[];
  heroImage: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: 'tech-hub-bengaluru',
    title: 'Tech Hub Corporate Office',
    clientSegment: 'Commercial Interior',
    challenge: 'The client required a premium, acoustically optimized open workspace without compromising on modern aesthetic appeal.',
    solution: 'We deployed our Uniceil uPVC Baffle Ceilings across the main floor to drastically reduce noise reverberation while adding a stunning linear architectural element.',
    materialsUsed: ['Uniceil Baffle Ceilings', 'SPC Flooring', '3D Wall Panels'],
    heroImage: '/assets/projects/about_hero.png',
    gallery: [
      '/assets/projects/about_hero.png'
    ]
  },
  {
    slug: 'luxury-residence-mumbai',
    title: 'Sea-Facing Luxury Residence',
    clientSegment: 'Residential',
    challenge: 'Creating a highly durable, moisture-resistant yet luxurious surface finish for living areas exposed to coastal humidity.',
    solution: 'Incorporated Polygranite Sheets in high-gloss marble finish to deliver the opulence of natural stone with zero maintenance and absolute moisture resistance.',
    materialsUsed: ['Polygranite Sheets'],
    heroImage: '/assets/projects/polygranite_sheet.png',
    gallery: [
      '/assets/projects/polygranite_sheet.png'
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
