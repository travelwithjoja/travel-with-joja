import React, { useState } from 'react';
import { TOUR_PACKAGES } from '../data/travelData';
import { TourPackage } from '../types';
import { 
  Sparkles, 
  Clock, 
  Star, 
  ShieldCheck, 
  MapPin, 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  Plane, 
  Car, 
  Hotel,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { getPackageWhatsApp } from '../utils/whatsapp';

interface PackagesSectionProps {
  onSelectPackage: (pkg: TourPackage) => void;
  currency: string;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  onSelectPackage,
  currency
}) => {
  const [expandedPackageId, setExpandedPackageId] = useState<string | null>(TOUR_PACKAGES[0].id);

  // Simple currency conversion rates for display
  const currencyRates: Record<string, { rate: number; symbol: string }> = {
    USD: { rate: 1, symbol: '$' },
    EUR: { rate: 0.92, symbol: '€' },
    GBP: { rate: 0.79, symbol: '£' },
    AUD: { rate: 1.54, symbol: 'A$' }
  };

  const curr = currencyRates[currency] || currencyRates.USD;

  const toggleExpand = (id: string) => {
    setExpandedPackageId(expandedPackageId === id ? null : id);
  };

  return (
    <section id="packages" className="py-24 relative bg-[#051109] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#1A3C2A]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            <span className="w-8 h-px bg-[#C5A059]"></span>
            <span>Bespoke Private Expeditions</span>
            <span className="w-8 h-px bg-[#C5A059]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Luxury Tour <span className="text-[#C5A059] font-serif-luxury italic font-normal">Master Packages</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/60 font-sans-modern leading-relaxed">
            Every itinerary includes dedicated private executive chauffeurs, curated 5-star Relais & Châteaux villas, VIP fast-track airport concierge, and 100% bespoke flexibility.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TOUR_PACKAGES.map((pkg) => {
            const isExpanded = expandedPackageId === pkg.id;
            const convertedPrice = Math.round(pkg.pricePerPerson * curr.rate);

            return (
              <div
                key={pkg.id}
                id={`package-card-${pkg.id}`}
                className="relative rounded-3xl overflow-hidden bg-[#051109]/90 border border-white/10 shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Popularity Badge */}
                {pkg.isPopular && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-gold-gradient text-black shadow-lg">
                      ★ Joja Signature Choice
                    </span>
                  </div>
                )}

                {/* Card Top: Image + Key Info */}
                <div>
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051109] via-[#051109]/40 to-transparent" />
                    
                    {/* Duration & Category Pills */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#051109]/85 text-[#C5A059] border border-white/10 backdrop-blur-md flex items-center gap-1.5 uppercase tracking-wider">
                        <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                        {pkg.duration}
                      </span>

                      <div className="flex items-center gap-1 bg-[#051109]/85 px-2.5 py-1 rounded-full border border-white/10 text-xs text-[#C5A059]">
                        <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                        <span className="font-bold">{pkg.rating}</span>
                        <span className="text-[10px] text-white/50">({pkg.reviewsCount})</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="p-6 sm:p-7">
                    <div className="flex flex-col mb-3">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
                        {pkg.category}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#C5A059] transition-colors mt-0.5">
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-[#C5A059] font-serif-luxury italic mt-1">
                        {pkg.subtitle}
                      </p>
                    </div>

                    {/* Route Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {pkg.destinationsCovered.map((dest, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-white/5 text-white/80 border border-white/10"
                        >
                          {dest}
                        </span>
                      ))}
                    </div>

                    {/* Key Luxury Inclusions */}
                    <div className="space-y-2 mb-6">
                      {pkg.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-white/80">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Day-by-day Itinerary Accordion Dropdown */}
                    <div className="pt-3 border-t border-white/10 mb-4">
                      <button
                        id={`toggle-itinerary-btn-${pkg.id}`}
                        onClick={() => toggleExpand(pkg.id)}
                        className="w-full flex items-center justify-between text-xs font-semibold text-[#C5A059] hover:text-white py-1 cursor-pointer uppercase tracking-wider"
                      >
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                          {isExpanded ? 'Hide Day-by-Day Journey Plan' : `View Full ${pkg.days}-Day Itinerary Outline`}
                        </span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      {isExpanded && (
                        <div className="mt-3 space-y-2.5 pl-3 border-l-2 border-[#C5A059]/40 text-xs">
                          {pkg.itinerary.map((day) => (
                            <div key={day.day} className="pb-1.5">
                              <p className="font-bold text-white">
                                Day {day.day}: {day.title} ({day.location})
                              </p>
                              <p className="text-[11px] text-white/60 mt-0.5">{day.description}</p>
                              <p className="text-[11px] text-[#C5A059] italic mt-0.5">✨ {day.highlight}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Pricing & Booking Actions */}
                <div className="p-6 pt-0 sm:p-7 sm:pt-0">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-white/50 block uppercase tracking-wider">All-Inclusive Luxury Rate</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C5A059]">
                          {curr.symbol}{convertedPrice.toLocaleString()}
                        </span>
                        <span className="text-xs text-white/50">/ person</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        id={`view-full-itinerary-btn-${pkg.id}`}
                        onClick={() => onSelectPackage(pkg)}
                        className="flex-1 sm:flex-none px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                      >
                        Details & Map
                      </button>

                      <a
                        id={`book-whatsapp-pkg-${pkg.id}`}
                        href={getPackageWhatsApp(pkg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none px-4 py-2.5 rounded-full bg-[#C5A059]/10 hover:bg-[#C5A059] text-[#C5A059] hover:text-black border border-[#C5A059]/30 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp Booking</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
