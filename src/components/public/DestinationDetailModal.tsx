import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, MapPin, Star, Calendar, Clock, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const DestinationDetailModal: React.FC = () => {
  const { selectedDestination, closeDestinationModal, openBookingModal, formatPrice } = useApp();

  if (!selectedDestination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-3xl rounded-3xl bg-[#121418] border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-8 my-8 text-white max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closeDestinationModal}
          className="absolute top-5 right-5 z-10 p-2 rounded-full bg-[#181B20] border border-stone-700 hover:border-[#D4AF37] text-stone-400 hover:text-white transition-colors"
          aria-label="Close destination modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-stone-800">
          <img
            src={selectedDestination.image}
            alt={selectedDestination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-black/30 to-transparent"></div>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] uppercase font-bold text-[#D4AF37] border border-[#D4AF37]/30">
                {selectedDestination.region}
              </span>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-xs font-bold text-white border border-stone-700">
                <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                <span>{selectedDestination.rating} ({selectedDestination.reviewsCount} reviews)</span>
              </div>
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-white">
              {selectedDestination.name}
            </h2>
          </div>
        </div>

        {/* Tagline & Description */}
        <div className="mb-6">
          <p className="text-sm font-serif-luxury text-[#D4AF37] italic mb-3">
            "{selectedDestination.tagline}"
          </p>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            {selectedDestination.description}
          </p>
        </div>

        {/* Info Grid: Season, Duration, Price */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#090A0C] border border-stone-800 mb-6 text-xs">
          <div className="flex items-center gap-3">
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            <div>
              <span className="text-[10px] uppercase text-stone-500 font-bold block">Best Season</span>
              <span className="text-white font-medium">{selectedDestination.bestSeason}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-[#D4AF37]" />
            <div>
              <span className="text-[10px] uppercase text-stone-500 font-bold block">Ideal Duration</span>
              <span className="text-white font-medium">{selectedDestination.idealDuration}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <div>
              <span className="text-[10px] uppercase text-stone-500 font-bold block">Pricing From</span>
              <span className="text-[#D4AF37] font-bold font-mono">{formatPrice(selectedDestination.priceFromUSD)}</span>
            </div>
          </div>
        </div>

        {/* Curated Highlights */}
        <div className="mb-6">
          <h4 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider mb-3">
            Curated Bespoke Highlights
          </h4>
          <div className="space-y-2">
            {selectedDestination.highlights.map((hl, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Luxury Activities */}
        <div className="mb-8">
          <h4 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider mb-3">
            VIP Exclusives
          </h4>
          <div className="flex flex-wrap gap-2">
            {selectedDestination.luxuryActivities.map((act, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-xl bg-[#181B20] border border-[#D4AF37]/30 text-stone-200 text-xs font-medium"
              >
                ✨ {act}
              </span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-800">
          <div>
            <span className="text-[10px] uppercase font-bold text-stone-500 block">Experience Starting From</span>
            <span className="text-xl font-bold text-[#D4AF37] font-mono">
              {formatPrice(selectedDestination.priceFromUSD)}
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              const destName = selectedDestination.name;
              closeDestinationModal();
              openBookingModal({ destination: destName });
            }}
            className="w-full sm:w-auto py-3 px-8 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span>Plan Journey to {selectedDestination.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
