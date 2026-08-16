export interface Destination {
  id: string;
  name: string;
  sinhalaName: string;
  region: string;
  tag: string;
  tagline: string;
  description: string;
  fullStory: string;
  heroImage: string;
  gallery: string[];
  highlights: string[];
  bestSeason: string;
  elevationOrClimate: string;
  recommendedDuration: string;
  topExperiences: string[];
  signatureStay: string;
  curatorNote: string;
}

export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  days: number;
  nights: number;
  pricePerPerson: number;
  category: 'Classic Luxury' | 'Wildlife & Nature' | 'Heritage & Culture' | 'Coastal Escape' | 'Honeymoon Exclusive';
  rating: number;
  reviewsCount: number;
  image: string;
  highlights: string[];
  destinationsCovered: string[];
  inclusions: string[];
  itinerary: {
    day: number;
    title: string;
    location: string;
    description: string;
    highlight: string;
  }[];
  isPopular?: boolean;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  category: string;
  rating: number;
  pricePerNight: number;
  image: string;
  tagline: string;
  description: string;
  amenities: string[];
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: 'Heritage' | 'Highlands' | 'Coast' | 'Wildlife' | 'Villas';
  image: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  city: string;
  country: string;
  rating: number;
  date: string;
  packageTitle: string;
  comment: string;
  verified: boolean;
  avatar: string;
}

export interface BespokePlan {
  destinations: string[];
  travelStyle: 'Ultra Luxury' | 'Bespoke Family' | 'Romantic Escape' | 'Wildlife Expedition';
  duration: string;
  travelers: number;
  month: string;
  specialRequests: string[];
  name: string;
  email: string;
  phoneOrWhatsApp: string;
  notes: string;
}
