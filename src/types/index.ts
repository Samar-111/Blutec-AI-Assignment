export interface MediaItem {
  id: string;
  url: string;
  kind: 'image' | 'video';
  width?: number;
  height?: number;
  alt?: string;
  caption?: string;
  focalX?: number;
  focalY?: number;
  color?: string;
  blurDataUrl?: string | null;
  durationS?: number | null;
  poster?: any;
}

export interface Breed {
  slug: string;
  name: string;
}

export interface Origin {
  slug: string;
  name: string;
}

export interface Puppy {
  id: string;
  slug: string;
  name: string;
  displayName?: string;
  breed: string;
  gender: string;
  genderLabel: string;
  age: string;
  colour?: string;
  description?: string;
  records?: any[];
  status: 'available' | 'reserved' | 'adopted';
  featured?: boolean;
  seoDescription?: string;
  cover?: MediaItem | null;
  media: MediaItem[];
  origin: Origin;
  collections?: any[];
  breeds: Breed[];
  published?: boolean;
  price?: string;
}

export interface Ticket {
  slug: string;
  name: string;
  breed: string;
  location: string;
  image: string;
  raw_texts?: string[];
}

export interface HappyFamilyPhoto {
  id: string;
  url: string;
  kind: string;
  width?: number;
  height?: number;
  alt?: string;
  caption?: string;
  focalX?: number;
  focalY?: number;
  color?: string;
  blurDataUrl?: string | null;
  durationS?: number | null;
  poster?: any;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
