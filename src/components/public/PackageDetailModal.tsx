import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Clock, Star, CheckCircle, XCircle, Plane, Sparkles, Calendar, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const PackageDetailModal: React.FC = () => {
  const { selectedPackage, closePackageModal, openBookingModal, formatPrice } = useApp();

  if (!selectedPackage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-4xl rounded-3xl bg-[#121418] border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-8 my-8 text-white max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closePackageModal}
          className="absolute top-5 right-5 z-10 p-2 rounded-full bg-[#181B20] border border-stone-700 hover:border-[#D4AF37] text-stone-400 hover:text-white transition-colors"
          aria-label="Close package modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Section */}
        <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-stone-800">
          <img
            src={selectedPackage.image}
            alt={selectedPackage.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-black/40 to-transparent"></div>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] uppercase font-bold text-[#D4AF37] border border-[#D4AF37]/30">
                {selectedPackage.category}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-xs font-semibold text-white border border-stone-700 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                {selectedPackage.duration}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-xs font-bold text-white border border-stone-700 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                {selectedPackage.rating} ({selectedPackage.reviewsCount})
              </span>
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white leading-tight">
              {selectedPackage.title}
            </h2>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-stone-300 mb-6 leading-relaxed">
          {selectedPackage.subtitle}
        </p>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#090A0C] border border-stone-800 mb-8 text-xs">
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
            <div>
              <span className="text-[10px] uppercase text-stone-500 font-bold block">Regions Covered</span>
              <span className="text-white font-medium truncate block max-w-[180px]">
                {selectedPackage.destinationsCovered.join(', ')}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Plane className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
            <div>
              <span className="text-[10px] uppercase text-stone-500 font-bold block">Private Transport</span>
              <span className="text-white font-medium truncate block max-w-[180px]">{selectedPackage.transportType}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
            <div>
              <span className="text-[10px] uppercase text-stone-500 font-bold block">All-Inclusive Per Person</span>
              <span className="text-[#D4AF37] font-bold font-mono text-sm">{formatPrice(selectedPackage.priceUSD)}</span>
            </div>
          </div>
        </div>

        {/* Day-by-Day Detailed Itinerary */}
        <div className="mb-8">
          <h3 className="font-serif-luxury text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            <span>Day-by-Day Bespoke Itinerary</span>
          </h3>

          <div className="space-y-4">
            {selectedPackage.itinerary.map((day) => (
              <div
                key={day.day}
                className="p-4 rounded-2xl bg-[#090A0C] border border-stone-800/90 relative pl-12"
              >
                <span className="absolute left-3 top-4 w-7 h-7 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] text-black text-xs font-black flex items-center justify-center">
                  {day.day}
                </span>

                <h4 className="font-serif-luxury text-sm font-bold text-white mb-1">
                  {day.title}
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed mb-2">
                  {day.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-[11px] text-stone-400 pt-2 border-t border-stone-800/60 font-mono">
                  <span>🏨 Stay: <strong className="text-[#D4AF37]">{day.stay}</strong></span>
                  <span>🍽️ Meals: <strong className="text-stone-300">{day.meals}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inclusions vs Exclusions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="p-5 rounded-2xl bg-[#090A0C] border border-stone-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" />
              <span>Package Inclusions</span>
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              {selectedPackage.inclusions.map((inc, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-0.5">•</span>
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-[#090A0C] border border-stone-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3 flex items-center gap-1.5">
              <XCircle className="w-4 h-4 text-stone-500" />
              <span>Exclusions</span>
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              {selectedPackage.exclusions.map((exc, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-stone-600 mt-0.5">•</span>
                  <span>{exc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-800">
          <div>
            <span className="text-[10px] uppercase font-bold text-stone-500 block">Package Price</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-[#D4AF37] font-mono">
                {formatPrice(selectedPackage.priceUSD)}
              </span>
              <span className="text-xs text-stone-400">/ per traveler</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              const pId = selectedPackage.id;
              const pTitle = selectedPackage.title;
              closePackageModal();
              openBookingModal({ packageId: pId, packageName: pTitle });
            }}
            className="w-full sm:w-auto py-3 px-8 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Reserve This Journey</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
