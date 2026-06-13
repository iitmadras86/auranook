export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajesh Sharma',
    role: 'Principal Architect',
    company: 'Sharma & Associates',
    quote: 'The Uniceil Baffle Ceilings provided the perfect balance of aesthetic appeal and acoustic performance for our latest corporate project. Highly recommended.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Meera Patel',
    role: 'Interior Designer',
    company: 'Patel Designs',
    quote: 'Auranook\'s 3D Wall Panels are my go-to choice for creating stunning feature walls. The quality and finish are unmatched in the industry.',
    rating: 5
  }
];
