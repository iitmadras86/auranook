export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  author: string;
}

export const insightsData: InsightArticle[] = [
  {
    slug: 'ultimate-guide-to-acoustic-ceiling-systems',
    title: 'The Ultimate Guide to Acoustic Ceiling Systems',
    excerpt: 'A comprehensive technical deep-dive into acoustic ceiling systems, NRC ratings, and how to specify the right baffles for commercial environments.',
    category: 'Acoustic Design',
    tags: ['Acoustics', 'Ceiling Systems', 'Commercial Offices', 'NRC'],
    publishedAt: '2026-06-15',
    readTime: '12 min read',
    author: 'Auranook Technical Team'
  },
  {
    slug: 'architectural-material-specification-guide',
    title: 'Architectural Material Specification Guide',
    excerpt: 'Mastering the art of material specification: A structured approach to evaluating durability, fire compliance, and visual identity for enterprise projects.',
    category: 'Technical Specification',
    tags: ['Specification', 'Compliance', 'Materials', 'BIM'],
    publishedAt: '2026-06-18',
    readTime: '15 min read',
    author: 'Auranook Technical Team'
  },
  {
    slug: 'understanding-nrc-ratings',
    title: 'Understanding NRC Ratings for Architectural Ceilings',
    excerpt: 'A technical guide explaining Noise Reduction Coefficient (NRC) ratings, how they are calculated, and how to specify NRC requirements for commercial projects.',
    category: 'Acoustic Design',
    tags: ['NRC', 'Acoustics', 'Testing', 'Specification'],
    publishedAt: '2026-06-20',
    readTime: '8 min read',
    author: 'Auranook Technical Team'
  },
  {
    slug: 'baffle-ceiling-design-guide',
    title: 'Baffle Ceiling Design Guide',
    excerpt: 'Technical and aesthetic considerations for designing with acoustic baffle ceilings in modern commercial and educational spaces.',
    category: 'Ceiling Systems',
    tags: ['Design', 'Baffles', 'Commercial'],
    publishedAt: '2026-06-22',
    readTime: '10 min read',
    author: 'Auranook Technical Team'
  },
  {
    slug: 'facade-system-selection-guide',
    title: 'Façade System Selection Guide',
    excerpt: 'How to evaluate and select architectural exterior envelope systems for durability, weather resistance, and brand identity.',
    category: 'Façade Design',
    tags: ['Exterior', 'Façades', 'Durability'],
    publishedAt: '2026-06-25',
    readTime: '9 min read',
    author: 'Auranook Technical Team'
  },
  {
    slug: 'uniceil-vs-traditional-ceilings',
    title: 'The Uniceil vs. Traditional Gypsum Ceilings',
    excerpt: 'A comprehensive comparison between uPVC architectural baffle systems and traditional flat gypsum board ceilings.',
    category: 'Material Comparisons',
    tags: ['Comparison', 'Gypsum', 'uPVC'],
    publishedAt: '2026-06-28',
    readTime: '7 min read',
    author: 'Auranook Technical Team'
  },
  {
    slug: 'polygranite-vs-conventional-wall-finishes',
    title: 'Polygranite vs. Conventional Wall Finishes',
    excerpt: 'Why architects are moving away from heavy stone and conventional paint towards high-performance Polygranite sheets.',
    category: 'Material Comparisons',
    tags: ['Comparison', 'Surfaces', 'Polygranite'],
    publishedAt: '2026-06-30',
    readTime: '6 min read',
    author: 'Auranook Technical Team'
  },
  {
    slug: 'acoustic-baffles-vs-gypsum-ceilings',
    title: 'Acoustic Baffles vs. Gypsum Ceilings',
    excerpt: 'Technical comparison of sound absorption and reverberation control in commercial architecture.',
    category: 'Material Comparisons',
    tags: ['Comparison', 'Acoustics', 'Gypsum'],
    publishedAt: '2026-07-02',
    readTime: '5 min read',
    author: 'Auranook Technical Team'
  }
];

export const getInsightsByFilter = (category?: string, query?: string) => {
  return insightsData.filter(article => {
    let match = true;
    if (category && category !== 'All Categories') match = match && article.category === category;
    
    if (query) {
      const q = query.toLowerCase();
      match = match && (
        article.title.toLowerCase().includes(q) || 
        article.excerpt.toLowerCase().includes(q) ||
        article.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return match;
  });
};

export const getInsightCategories = () => {
  return Array.from(new Set(insightsData.map(a => a.category)));
};
