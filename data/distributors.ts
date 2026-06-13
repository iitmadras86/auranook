export interface DistributorFeature {
  title: string;
  description: string;
  icon: string;
}

export const distributorBenefits: DistributorFeature[] = [
  {
    title: 'Premium Product Portfolio',
    description: 'Access to high-margin, enterprise-grade architectural products including Uniceil baffle systems.',
    icon: 'Package'
  },
  {
    title: 'PAN India Opportunity',
    description: 'Exclusive territory rights and nationwide supply chain support.',
    icon: 'Map'
  },
  {
    title: 'Technical Support',
    description: 'Comprehensive installation training and architectural consulting support.',
    icon: 'Wrench'
  },
  {
    title: 'Marketing Support',
    description: 'Digital marketing leads, physical catalogs, and sample kits provided.',
    icon: 'Megaphone'
  },
  {
    title: 'Higher Margins',
    description: 'Lucrative partnership structure designed for sustainable business growth.',
    icon: 'TrendingUp'
  }
];

export const idealPartnerProfiles = [
  'Building Material Dealer',
  'Ceiling Contractor',
  'Interior Contractor',
  'Architect Network',
  'Facade Specialist'
];

export const processTimeline = [
  { step: 1, title: 'Apply', description: 'Submit your partnership application.' },
  { step: 2, title: 'Review', description: 'Our team evaluates your profile and territory.' },
  { step: 3, title: 'Discussion', description: 'Initial meeting to discuss mutual growth goals.' },
  { step: 4, title: 'Approval', description: 'Formal agreement and onboarding.' },
  { step: 5, title: 'Training', description: 'Product and technical installation training.' },
  { step: 6, title: 'Launch', description: 'Begin operations with marketing support.' }
];
