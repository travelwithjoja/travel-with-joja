export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'AUD';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rate: number; // relative to USD (USD = 1)
  name: string;
}

export interface Destination {
  id: string;
  name: string;
  slug?: string;
  region: string;
  tagline: string;
  image: string;
  gallery?: string[];
  description: string;
  bestSeason: string;
  idealDuration: string;
  highlights: string[];
  priceFromUSD: number;
  rating: number;
  reviewsCount: number;
  popularFor?: string[];
  luxuryActivities: string[];
}

export interface PackageItineraryDay {
  day: number;
  title: string;
  description: string;
  stay: string;
  meals: string;
}

export interface TravelPackage {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  durationDays?: number;
  image: string;
  gallery?: string[];
  category: string;
  priceUSD: number;
  rating: number;
  reviewsCount: number;
  inclusions: string[];
  exclusions: string[];
  destinationsCovered: string[];
  itinerary: PackageItineraryDay[];
  featured?: boolean;
  maxTravelers?: number;
  transportType: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  text: string;
  tripTaken: string;
  approved: boolean;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  location: string;
  caption: string;
  aspect?: 'landscape' | 'portrait' | 'square';
}

export interface Booking {
  id: string;
  bookingRef: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  destination: string;
  packageId?: string;
  packageName: string;
  travelers: number;
  travelersDetails?: {
    adults: number;
    children: number;
  };
  date: string;
  returnDate?: string;
  specialRequests?: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  totalUSD: number;
  currency: CurrencyCode;
  totalConverted: number;
  paymentStatus: 'Pending' | 'Paid' | 'Deposit Paid' | 'Partially Paid' | 'Refunded';
  adminNotes?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SiteSettings {
  siteName: string;
  siteTagline?: string;
  tagline: string;
  logoUrl?: string;
  whatsappNumber: string;
  whatsappGreeting: string;
  contactEmail: string;
  contactPhone: string;
  officeAddress: string;
  defaultCurrency: CurrencyCode;
  adminEmail: string;
  adminPassword?: string;
  heroHeading?: string;
  heroSubheading?: string;
  currencyRates: Record<CurrencyCode, number>;
}
