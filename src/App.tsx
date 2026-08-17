import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DestinationsSection } from './components/DestinationsSection';
import { PackagesSection } from './components/PackagesSection';
import { HotelsSection } from './components/HotelsSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { BespokeTripPlanner } from './components/BespokeTripPlanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DestinationModal } from './components/DestinationModal';
import { PackageModal } from './components/PackageModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { Destination, TourPackage } from './types';
import { DESTINATIONS, TOUR_PACKAGES } from './data/travelData';
import AdminDashboard from "./AdminDashboard";

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [currency, setCurrency] = useState('USD');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [destinationFilter, setDestinationFilter] = useState('all');
if (window.location.pathname.endsWith("/admin")) {
  return <AdminDashboard />;
}
  // Scroll Spy for active nav highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'destinations', 'packages', 'hotels', 'gallery', 'reviews', 'planner', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectQuickFilter = (destId: string) => {
    const matchedDest = DESTINATIONS.find((d) => d.id === destId);
    if (matchedDest) {
      setSelectedDestination(matchedDest);
    } else {
      handleNavigate('destinations');
    }
  };

  const handlePlanTripToDestination = (destId: string) => {
    setSelectedDestination(null);
    handleNavigate('planner');
  };

  return (
    <div className="min-h-screen bg-[#051109] text-white font-sans-modern antialiased selection:bg-[#C5A059]/30 selection:text-[#FFF5DF] relative overflow-x-hidden">
      {/* Sophisticated Dark Global Atmospheric Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 75% 25%, #C5A059 0%, transparent 45%), radial-gradient(circle at bottom left, #1A3C2A 0%, #051109 70%)'
          }}
        />
      </div>

      {/* Decorative Subtle Line Art Watermark from Design */}
      <div className="fixed top-20 right-20 opacity-10 transform -rotate-12 pointer-events-none z-0">
        <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      </div>

      <div className="fixed bottom-32 left-10 opacity-10 pointer-events-none z-0">
        <svg width="320" height="320" viewBox="0 0 100 100" fill="none">
          <path d="M50 10C50 10 70 40 70 70C70 85 60 95 50 95C40 95 30 85 30 70C30 40 50 10 50 10Z" stroke="#C5A059" strokeWidth="0.2"/>
        </svg>
      </div>

      <div className="relative z-10">
        {/* Top Floating Glassmorphic Navigation Bar */}
        <Navbar
          activeSection={activeSection}
          onNavigate={handleNavigate}
          currency={currency}
          onCurrencyChange={setCurrency}
          onOpenBespokePlanner={() => handleNavigate('planner')}
        />

        {/* Main Content Sections */}
        <main>
          {/* 1. Cinematic Hero Section with Sunset, Palms, Ocean & Flying Airplane */}
          <HeroSection
            onExploreDestinations={() => handleNavigate('destinations')}
            onExplorePackages={() => handleNavigate('packages')}
            onOpenBespokePlanner={() => handleNavigate('planner')}
            onSelectQuickFilter={handleSelectQuickFilter}
          />

          {/* 2. Signature 6 Key Destinations (Ella, Sigiriya, Mirissa, Galle, Yala, Nuwara Eliya) with 3D cards */}
          <DestinationsSection
            onSelectDestination={setSelectedDestination}
            activeFilter={destinationFilter}
          />

          {/* 3. Luxury Tour Packages */}
          <PackagesSection
            onSelectPackage={setSelectedPackage}
            currency={currency}
          />

          {/* 4. Handpicked 5-Star Sanctuaries & Relais & Châteaux Hotels */}
          <HotelsSection
            currency={currency}
          />

          {/* 5. Visual Chronicles Gallery with Lightbox */}
          <GallerySection />

          {/* 6. Customer Reviews & VIP Testimonials */}
          <ReviewsSection />

          {/* 7. Interactive Bespoke Trip Planner */}
          <BespokeTripPlanner />

          {/* 8. VIP Concierge Contact & FAQ */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer
          onNavigate={handleNavigate}
          onOpenPlanner={() => handleNavigate('planner')}
        />

        {/* Interactive Floating WhatsApp Concierge Button */}
        <WhatsAppFloatingButton />

        {/* Destination Detail Modal */}
        <DestinationModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
          onPlanTripToDestination={handlePlanTripToDestination}
        />

        {/* Tour Package Master Itinerary Modal */}
        <PackageModal
          packageData={selectedPackage}
          onClose={() => setSelectedPackage(null)}
          currency={currency}
        />
      </div>
    </div>
  );
}
