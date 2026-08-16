import React, { useState } from 'react';
import { Destination } from '../types';
import { 
  X, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Hotel, 
  Compass, 
  MessageCircle, 
  ChevronRight,
  ShieldCheck,
  Plane
} from 'lucide-react';
import { getDestinationWhatsApp } from '../utils/whatsapp';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onPlanTripToDestination: (destId: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onPlanTripToDestination
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!destination) return null;

  const allImages = [destination.heroImage, ...destination.gallery];

  return (
    <div 
      id="destination-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="destination-detail-modal-content"
        className="relative max-w-4xl w-full my-auto bg-[#051109] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="dest-modal-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-[#051109]/80 text-[#C5A059] hover:text-white border border-white/10 hover:bg-white/10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Gallery Carousel Header */}
        <div className="relative h-72 sm:h-96 w-full shrink-0 overflow-hidden bg-black">
          <img
            src={allImages[activeImageIndex]}
            alt={destination.name}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051109] via-transparent to-black/40" />

          {/* Title and Badges */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#051109]/85 text-[#C5A059] border border-white/10">
                {destination.tag}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-serif-luxury text-[#C5A059] bg-[#051109]/75 border border-white/10">
                {destination.sinhalaName}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              {destination.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#C5A059] font-serif-luxury italic mt-1">
              {destination.tagline}
            </p>
          </div>

          {/* Gallery Thumbnail Selector */}
          <div className="absolute top-4 left-4 z-20 flex gap-1.5 bg-[#051109]/70 p-1.5 rounded-xl backdrop-blur-md border border-white/10">
            {allImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`w-10 h-10 rounded-lg overflow-hidden border transition-all ${
                  activeImageIndex === idx ? 'border-[#C5A059] scale-105' : 'border-transparent opacity-60'
                }`}
              >
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Key Facts Pill Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs">
            <div>
              <span className="text-white/50 text-[10px] uppercase font-bold tracking-wider block">Region & Location</span>
              <span className="text-[#C5A059] font-medium">{destination.region}</span>
            </div>
            <div>
              <span className="text-white/50 text-[10px] uppercase font-bold tracking-wider block">Climate & Elevation</span>
              <span className="text-[#C5A059] font-medium">{destination.elevationOrClimate}</span>
            </div>
            <div>
              <span className="text-white/50 text-[10px] uppercase font-bold tracking-wider block">Ideal Visiting Window</span>
              <span className="text-[#C5A059] font-medium">{destination.bestSeason}</span>
            </div>
          </div>

          {/* Full Narrative */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#C5A059] mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#C5A059]" />
              The Essence of {destination.name}
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans-modern">
              {destination.fullStory}
            </p>
          </div>

          {/* Signature Joja Privileges */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="font-serif text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              Exclusive Joja VIP Inclusions in {destination.name}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {destination.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0"></span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Signature Stay & Curator's Note */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-white/50 font-bold flex items-center gap-1">
                <Hotel className="w-3.5 h-3.5 text-[#C5A059]" /> Recommended Sanctuary
              </span>
              <p className="font-serif text-sm font-bold text-white mt-1">
                {destination.signatureStay}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Curator’s Private Tip
              </span>
              <p className="text-xs text-[#C5A059] italic mt-1 font-serif-luxury">
                "{destination.curatorNote}"
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              id="dest-modal-plan-trip-btn"
              onClick={() => {
                onClose();
                onPlanTripToDestination(destination.id);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 shadow-lg cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Incorporate into My Itinerary</span>
            </button>

            <a
              id="dest-modal-whatsapp-btn"
              href={getDestinationWhatsApp(destination)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#C5A059]/10 hover:bg-[#C5A059] text-[#C5A059] hover:text-black border border-[#C5A059]/30 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
