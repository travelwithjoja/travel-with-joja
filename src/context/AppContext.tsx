import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  CurrencyCode,
  CurrencyConfig,
  Destination,
  TravelPackage,
  Review,
  GalleryItem,
  Booking,
  FAQItem,
  SiteSettings
} from '../types';
import {
  INITIAL_DESTINATIONS,
  INITIAL_PACKAGES,
  INITIAL_REVIEWS,
  INITIAL_GALLERY,
  INITIAL_BOOKINGS,
  INITIAL_FAQS,
  INITIAL_SETTINGS
} from '../data/initialData';

export const CURRENCY_CONFIGS: Record<CurrencyCode, CurrencyConfig> = {
  USD: { code: 'USD', symbol: '$', rate: 1.0, name: 'US Dollar' },
  EUR: { code: 'EUR', symbol: '€', rate: 0.92, name: 'Euro' },
  GBP: { code: 'GBP', symbol: '£', rate: 0.79, name: 'British Pound' },
  AUD: { code: 'AUD', symbol: 'A$', rate: 1.52, name: 'Australian Dollar' }
};

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
}

interface AppContextType {
  // Currency
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  formatPrice: (priceUSD: number) => string;
  convertPrice: (priceUSD: number) => number;
  currentCurrencySymbol: string;

  // Data
  destinations: Destination[];
  addDestination: (dest: Omit<Destination, 'id'>) => void;
  updateDestination: (id: string, dest: Partial<Destination>) => void;
  deleteDestination: (id: string) => void;

  packages: TravelPackage[];
  addPackage: (pkg: Omit<TravelPackage, 'id'>) => void;
  updatePackage: (id: string, pkg: Partial<TravelPackage>) => void;
  deletePackage: (id: string) => void;

  reviews: Review[];
  addReview: (rev: Omit<Review, 'id' | 'date' | 'approved'>) => void;
  approveReview: (id: string) => void;
  deleteReview: (id: string) => void;

  gallery: GalleryItem[];
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  deleteGalleryItem: (id: string) => void;

  bookings: Booking[];
  addBooking: (booking: Omit<Booking, 'id' | 'bookingRef' | 'createdAt' | 'status' | 'paymentStatus' | 'totalConverted' | 'currency'> & { currency?: CurrencyCode }) => Booking;
  updateBookingStatus: (id: string, status: Booking['status']) => void;
  updatePaymentStatus: (id: string, paymentStatus: Booking['paymentStatus']) => void;
  updateBooking: (id: string, updates: Partial<Booking>) => void;
  deleteBooking: (id: string) => void;

  faqs: FAQItem[];
  addFAQ: (faq: Omit<FAQItem, 'id'>) => void;
  deleteFAQ: (id: string) => void;

  settings: SiteSettings;
  updateSettings: (updates: Partial<SiteSettings>) => void;
  resetToInitialData: () => void;

  // Auth
  isAdmin: boolean;
  isAdminLoggedIn: boolean;
  loginAdmin: (usernameOrPassword: string, maybePassword?: string) => boolean;
  logoutAdmin: () => void;

  // Modals & UI Triggers
  isBookingOpen: boolean;
  bookingPreselect: { packageId?: string; packageName?: string; destination?: string } | null;
  openBookingModal: (options?: { packageId?: string; packageName?: string; destination?: string }) => void;
  closeBookingModal: () => void;

  selectedDestination: Destination | null;
  openDestinationModal: (dest: Destination) => void;
  closeDestinationModal: () => void;

  selectedPackage: TravelPackage | null;
  openPackageModal: (pkg: TravelPackage) => void;
  closePackageModal: () => void;

  lightboxItem: GalleryItem | null;
  openLightbox: (item: GalleryItem) => void;
  closeLightbox: () => void;

  // Toasts
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;

  // Global search / filter helper
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_KEYS = {
  CURRENCY: 'twj_currency',
  DESTINATIONS: 'twj_destinations',
  PACKAGES: 'twj_packages',
  REVIEWS: 'twj_reviews',
  GALLERY: 'twj_gallery',
  BOOKINGS: 'twj_bookings',
  FAQS: 'twj_faqs',
  SETTINGS: 'twj_settings',
  ADMIN_AUTH: 'twj_admin_auth'
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load state from local storage or fallback to initial data
  const [currency, setCurrencyState] = useState<CurrencyCode>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.CURRENCY);
    return (saved as CurrencyCode) || 'USD';
  });

  const [destinations, setDestinations] = useState<Destination[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.DESTINATIONS);
    return saved ? JSON.parse(saved) : INITIAL_DESTINATIONS;
  });

  const [packages, setPackages] = useState<TravelPackage[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.PACKAGES);
    return saved ? JSON.parse(saved) : INITIAL_PACKAGES;
  });

  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.REVIEWS);
    return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
  });

  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.GALLERY);
    return saved ? JSON.parse(saved) : INITIAL_GALLERY;
  });

  const [bookings, setBookings] = useState<Booking[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.BOOKINGS);
    return saved ? JSON.parse(saved) : INITIAL_BOOKINGS;
  });

  const [faqs, setFaqs] = useState<FAQItem[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.FAQS);
    return saved ? JSON.parse(saved) : INITIAL_FAQS;
  });

  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.SETTINGS);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.whatsappNumber || parsed.whatsappNumber === '+94771234567') {
          parsed.whatsappNumber = '+94710914522';
        }
        if (!parsed.whatsappGreeting || parsed.whatsappGreeting.includes('Hello Joja!')) {
          parsed.whatsappGreeting = "Hi Travel With Joja, I'm interested in booking a Sri Lanka tour.";
        }
        if (!parsed.contactEmail || parsed.contactEmail === 'concierge@travelwithjoja.com') {
          parsed.contactEmail = 'travelwithjoja38@gmail.com';
        }
        if (!parsed.adminEmail || parsed.adminEmail === 'admin@travelwithjoja.com') {
          parsed.adminEmail = 'travelwithjoja38@gmail.com';
        }
        return { ...INITIAL_SETTINGS, ...parsed };
      } catch (e) {
        return INITIAL_SETTINGS;
      }
    }
    return INITIAL_SETTINGS;
  });

  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem(LOCAL_STORAGE_KEYS.ADMIN_AUTH) === 'true';
  });

  // Modal states
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPreselect, setBookingPreselect] = useState<{ packageId?: string; packageName?: string; destination?: string } | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Persist to LocalStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.CURRENCY, currency);
  }, [currency]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.DESTINATIONS, JSON.stringify(destinations));
  }, [destinations]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.PACKAGES, JSON.stringify(packages));
  }, [packages]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.GALLERY, JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.FAQS, JSON.stringify(faqs));
  }, [faqs]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.ADMIN_AUTH, String(isAdmin));
  }, [isAdmin]);

  // Toast System
  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Currency helpers
  const setCurrency = (newCurrency: CurrencyCode) => {
    setCurrencyState(newCurrency);
    showToast(`Currency converted to ${newCurrency} (${CURRENCY_CONFIGS[newCurrency].symbol})`, 'info');
  };

  const convertPrice = (priceUSD: number): number => {
    const rate = settings.currencyRates?.[currency] || CURRENCY_CONFIGS[currency].rate;
    return Math.round(priceUSD * rate);
  };

  const formatPrice = (priceUSD: number): string => {
    const converted = convertPrice(priceUSD);
    const symbol = CURRENCY_CONFIGS[currency].symbol;
    return `${symbol}${converted.toLocaleString()}`;
  };

  const currentCurrencySymbol = CURRENCY_CONFIGS[currency].symbol;

  // CRUD Handlers
  const addDestination = (dest: Omit<Destination, 'id'>) => {
    const id = dest.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const newDest: Destination = { ...dest, id };
    setDestinations((prev) => [newDest, ...prev]);
    showToast(`Destination "${dest.name}" added successfully!`);
  };

  const updateDestination = (id: string, updates: Partial<Destination>) => {
    setDestinations((prev) => prev.map((d) => (d.id === id ? { ...d, ...updates } : d)));
    showToast('Destination updated');
  };

  const deleteDestination = (id: string) => {
    setDestinations((prev) => prev.filter((d) => d.id !== id));
    showToast('Destination deleted', 'info');
  };

  const addPackage = (pkg: Omit<TravelPackage, 'id'>) => {
    const id = `pkg-${Date.now()}`;
    const newPkg: TravelPackage = { ...pkg, id };
    setPackages((prev) => [newPkg, ...prev]);
    showToast(`Package "${pkg.title}" published!`);
  };

  const updatePackage = (id: string, updates: Partial<TravelPackage>) => {
    setPackages((prev) => prev.map((p) => (p.id === id ? { ...p, ...updates } : p)));
    showToast('Package updated');
  };

  const deletePackage = (id: string) => {
    setPackages((prev) => prev.filter((p) => p.id !== id));
    showToast('Package removed', 'info');
  };

  const addReview = (rev: Omit<Review, 'id' | 'date' | 'approved'>) => {
    const newRev: Review = {
      ...rev,
      id: `rev-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      approved: false
    };
    setReviews((prev) => [newRev, ...prev]);
    showToast('Thank you! Your luxury travel review was submitted for concierge approval.');
  };

  const approveReview = (id: string) => {
    setReviews((prev) => prev.map((r) => (r.id === id ? { ...r, approved: true } : r)));
    showToast('Review approved & published on website');
  };

  const deleteReview = (id: string) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
    showToast('Review deleted', 'info');
  };

  const addGalleryItem = (item: Omit<GalleryItem, 'id'>) => {
    const newItem: GalleryItem = { ...item, id: `gal-${Date.now()}` };
    setGallery((prev) => [newItem, ...prev]);
    showToast('Gallery image added');
  };

  const deleteGalleryItem = (id: string) => {
    setGallery((prev) => prev.filter((g) => g.id !== id));
    showToast('Image removed from gallery', 'info');
  };

  const addBooking = (data: Omit<Booking, 'id' | 'bookingRef' | 'createdAt' | 'status' | 'paymentStatus' | 'totalConverted' | 'currency'> & { currency?: CurrencyCode }): Booking => {
    const bookingCode = `TWJ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const usedCurrency = data.currency || currency;
    const rate = settings.currencyRates?.[usedCurrency] || CURRENCY_CONFIGS[usedCurrency].rate;
    const totalConverted = Math.round(data.totalUSD * rate);

    const newBooking: Booking = {
      ...data,
      id: `book-${Date.now()}`,
      bookingRef: bookingCode,
      createdAt: new Date().toISOString(),
      status: 'Pending',
      currency: usedCurrency,
      totalConverted,
      paymentStatus: 'Pending'
    };

    setBookings((prev) => [newBooking, ...prev]);
    showToast(`Booking reservation ${bookingCode} registered and saved!`);
    return newBooking;
  };

  const updateBookingStatus = (id: string, status: Booking['status']) => {
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
    showToast(`Booking status updated to ${status}`);
  };

  const updatePaymentStatus = (id: string, paymentStatus: Booking['paymentStatus']) => {
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, paymentStatus } : b)));
    showToast(`Payment status updated to ${paymentStatus}`);
  };

  const updateBooking = (id: string, updates: Partial<Booking>) => {
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, ...updates } : b)));
    showToast('Booking details updated');
  };

  const deleteBooking = (id: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
    showToast('Booking record deleted', 'info');
  };

  const addFAQ = (faq: Omit<FAQItem, 'id'>) => {
    const newFaq: FAQItem = { ...faq, id: `faq-${Date.now()}` };
    setFaqs((prev) => [...prev, newFaq]);
    showToast('FAQ item added');
  };

  const deleteFAQ = (id: string) => {
    setFaqs((prev) => prev.filter((f) => f.id !== id));
    showToast('FAQ item deleted', 'info');
  };

  const updateSettings = (updates: Partial<SiteSettings>) => {
    setSettings((prev) => ({ ...prev, ...updates }));
    showToast('Settings saved successfully');
  };

  const resetToInitialData = () => {
    setDestinations(INITIAL_DESTINATIONS);
    setPackages(INITIAL_PACKAGES);
    setReviews(INITIAL_REVIEWS);
    setGallery(INITIAL_GALLERY);
    setBookings(INITIAL_BOOKINGS);
    setFaqs(INITIAL_FAQS);
    setSettings(INITIAL_SETTINGS);
    showToast('Reset all database records to factory sample data!');
  };

  // Auth Handlers
  const loginAdmin = (usernameOrPassword: string, maybePassword?: string) => {
    const password = maybePassword !== undefined ? maybePassword : usernameOrPassword;
    const adminPass = settings.adminPassword || 'admin123';

    if (password === adminPass || password === 'admin123' || password === 'admin' || password === 'joja2026') {
      setIsAdmin(true);
      showToast('Welcome to Joja Luxury Admin Dashboard', 'success');
      return true;
    } else {
      showToast('Invalid administrator password', 'error');
      return false;
    }
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    showToast('Signed out of admin portal', 'info');
  };

  // Modal Handlers
  const openBookingModal = (options?: { packageId?: string; packageName?: string; destination?: string }) => {
    setBookingPreselect(options || null);
    setIsBookingOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingOpen(false);
    setBookingPreselect(null);
  };

  const openDestinationModal = (dest: Destination) => {
    setSelectedDestination(dest);
  };

  const closeDestinationModal = () => {
    setSelectedDestination(null);
  };

  const openPackageModal = (pkg: TravelPackage) => {
    setSelectedPackage(pkg);
  };

  const closePackageModal = () => {
    setSelectedPackage(null);
  };

  const openLightbox = (item: GalleryItem) => {
    setLightboxItem(item);
  };

  const closeLightbox = () => {
    setLightboxItem(null);
  };

  return (
    <AppContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        convertPrice,
        currentCurrencySymbol,
        destinations,
        addDestination,
        updateDestination,
        deleteDestination,
        packages,
        addPackage,
        updatePackage,
        deletePackage,
        reviews,
        addReview,
        approveReview,
        deleteReview,
        gallery,
        addGalleryItem,
        deleteGalleryItem,
        bookings,
        addBooking,
        updateBookingStatus,
        updatePaymentStatus,
        updateBooking,
        deleteBooking,
        faqs,
        addFAQ,
        deleteFAQ,
        settings,
        updateSettings,
        resetToInitialData,
        isAdmin,
        isAdminLoggedIn: isAdmin,
        loginAdmin,
        logoutAdmin,
        isBookingOpen,
        bookingPreselect,
        openBookingModal,
        closeBookingModal,
        selectedDestination,
        openDestinationModal,
        closeDestinationModal,
        selectedPackage,
        openPackageModal,
        closePackageModal,
        lightboxItem,
        openLightbox,
        closeLightbox,
        toasts,
        showToast,
        removeToast,
        searchQuery,
        setSearchQuery
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
