import React from 'react';
import { TourPackage } from '../types';
import { 
  X, 
  Clock, 
  Star, 
  MapPin, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  Plane, 
  Car
} from 'lucide-react';
import { getPackageWhatsApp } from '../utils/whatsapp';

interface PackageModalProps {
  packageData: TourPackage | null;
  onClose: () => void;
  currency: string;
}

export const PackageModal: React.FC<PackageModalProps> = ({
  packageData,
  onClose,
  currency
}) => {
  if (!packageData) return null;

  const currencyRates: Record<string, { rate: number; symbol: string }> = {
    USD: { rate: 1, symbol: '$' },
    EUR: { rate: 0.92, symbol: '€' },
    GBP: { rate: 0.79, symbol: '£' },
    AUD: { rate: 1.54, symbol: 'A$' }
  };

  const curr = currencyRates[currency] || currencyRates.USD;
  const convertedPrice = Math.round(packageData.pricePerPerson * curr.rate);

  return (
    <div 
      id="package-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="package-detail-modal-content"
        className="relative max-w-4xl w-full my-auto bg-[#051109] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="package-modal-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-[#051109]/80 text-[#C5A059] hover:text-white border border-white/10 hover:bg-white/10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Banner */}
        <div className="relative h-64 sm:h-80 w-full shrink-0 overflow-hidden bg-black">
          <img
            src={packageData.image}
            alt={packageData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051109] via-[#051109]/40 to-black/40" />

          <div className="absolute bottom-6 left-6 right-6 z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#051109]/85 text-[#C5A059] border border-white/10">
                {packageData.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#051109]/85 text-[#C5A059] border border-white/10 flex items-center gap-1 uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                {packageData.duration}
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {packageData.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#C5A059] font-serif-luxury italic mt-0.5">
              {packageData.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Rate & Fast Booking Header */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] text-white/50 uppercase tracking-wider block">All-Inclusive Bespoke Rate</span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-3xl font-bold text-[#C5A059]">
                  {curr.symbol}{convertedPrice.toLocaleString()}
                </span>
                <span className="text-xs text-white/50">per person (USD base)</span>
              </div>
            </div>

            <a
              id="package-modal-whatsapp-cta"
              href={getPackageWhatsApp(packageData)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Reserve via WhatsApp</span>
            </a>
          </div>

          {/* Full Day-by-Day Master Itinerary */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#C5A059] mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C5A059]" />
              Day-by-Day Master Expedition Itinerary
            </h3>

            <div className="space-y-4 relative before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#C5A059]/30">
              {packageData.itinerary.map((day) => (
                <div key={day.day} className="relative pl-8">
                  <div className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-[#C5A059] border-2 border-[#051109]"></div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white font-serif">
                        Day {day.day}: {day.title}
                      </span>
                      <span className="text-[10px] text-white/60 bg-white/5 px-2 py-0.5 rounded-full border border-white/10 uppercase tracking-wider">
                        {day.location}
                      </span>
                    </div>
                    <p className="text-xs text-white/70 mt-1.5 leading-relaxed font-sans-modern">
                      {day.description}
                    </p>
                    <div className="mt-2 text-[11px] text-[#C5A059] font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#C5A059]" />
                      <span>Signature Moment: {day.highlight}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions List */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="font-serif text-sm font-bold text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              Signature Royal Inclusions
            </h4>
            <div className="space-y-2">
              {packageData.inclusions.map((inc, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
