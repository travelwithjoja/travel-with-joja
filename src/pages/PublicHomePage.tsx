import React, { useState } from 'react';
import { Navbar } from '../components/public/Navbar';
import { Hero } from '../components/public/Hero';
import { DestinationsSection } from '../components/public/DestinationsSection';
import { PackagesSection } from '../components/public/PackagesSection';
import { LuxuryBespokeFeatures } from '../components/public/LuxuryBespokeFeatures';
import { ReviewsCarousel } from '../components/public/ReviewsCarousel';
import { GallerySection } from '../components/public/GallerySection';
import { FAQSection } from '../components/public/FAQSection';
import { ContactAndNewsletter } from '../components/public/ContactAndNewsletter';
import { Footer } from '../components/public/Footer';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { BookingModal } from '../components/public/BookingModal';
import { DestinationDetailModal } from '../components/public/DestinationDetailModal';
import { PackageDetailModal } from '../components/public/PackageDetailModal';
import { ReviewSubmissionModal } from '../components/public/ReviewSubmissionModal';
import { ToastContainer } from '../components/common/ToastContainer';

export const PublicHomePage: React.FC = () => {
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090A0C] text-[#E8E6E3] selection:bg-[#D4AF37] selection:text-black">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Hero with Full-screen Ceylon Carousel */}
      <Hero />

      {/* Search & Destinations Grid (Sigiriya, Ella, Galle, Mirissa, Yala, Nuwara Eliya, Kandy, Bentota) */}
      <DestinationsSection />

      {/* Luxury Bespoke Features & Private Services */}
      <LuxuryBespokeFeatures />

      {/* Premium Curated Packages with Pricing */}
      <PackagesSection />

      {/* Verified Guest Reviews Carousel */}
      <ReviewsCarousel onOpenReviewModal={() => setReviewModalOpen(true)} />

      {/* Luxury Gallery with Lightbox */}
      <GallerySection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact & Newsletter Subscription */}
      <ContactAndNewsletter />

      {/* Luxury Footer */}
      <Footer />

      {/* Floating Elements */}
      <WhatsAppButton />
      <ToastContainer />

      {/* Interactive Modals */}
      <BookingModal />
      <DestinationDetailModal />
      <PackageDetailModal />
      <ReviewSubmissionModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
      />
    </div>
  );
};
