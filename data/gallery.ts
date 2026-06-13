export interface GalleryItem {
  id: string;
  category: 'Ceiling' | 'Wall' | 'Facade' | 'Commercial' | 'Residential' | 'Hospitality';
  imageUrl: string;
  altText: string;
  title?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    category: 'Commercial',
    imageUrl: '/assets/gallery/commercial-1.jpg',
    altText: 'Acoustic baffle ceilings in a modern commercial office'
  },
  {
    id: 'g2',
    category: 'Residential',
    imageUrl: '/assets/gallery/residential-1.jpg',
    altText: 'Luxury residence featuring polygranite accent wall'
  },
  {
    id: 'g3',
    category: 'Ceiling',
    imageUrl: '/assets/gallery/ceiling-1.jpg',
    altText: 'uPVC baffle ceiling installation'
  },
  {
    id: 'g4',
    category: 'Facade',
    imageUrl: '/assets/gallery/facade-1.jpg',
    altText: 'Modern building facade using Auranook cladding'
  }
];

export function getGalleryByCategory(category: string): GalleryItem[] {
  if (category === 'All') return galleryItems;
  return galleryItems.filter(item => item.category === category);
}
