import React from 'react';
import { LUXURY_HOTELS } from '../data/travelData';
import { Hotel } from '../types';
import { 
  Building2, 
  Sparkles, 
  Star, 
  MapPin, 
  Check, 
  ArrowRight, 
  MessageCircle,
  Wifi,
  Waves,
  Coffee
} from 'lucide-react';
import { getHotelWhatsApp } from '../utils/whatsapp';

interface HotelsSectionProps {
  onSelectHotel?: (hotel: Hotel) => void;
  currency: string;
}

export const HotelsSection: React.FC<HotelsSectionProps> = ({
  currency
}) => {
  const currencyRates: Record<string, { rate: number; symbol: string }> = {
    USD: { rate: 1, symbol: '$' },
    EUR: { rate: 0.92, symbol: '€' },
    GBP: { rate: 0.79, symbol: '£' },
    AUD: { rate: 1.54, symbol: 'A$' }
  };

  const curr = currencyRates[currency] || currencyRates.USD;

  return (
    <section id="hotels" className="py-24 relative bg-[#051109] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            <span className="w-8 h-px bg-[#C5A059]"></span>
            <span>Relais & Châteaux • Heritage Manors</span>
            <span className="w-8 h-px bg-[#C5A059]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Handpicked <span className="text-[#C5A059] font-serif-luxury italic font-normal">5-Star Sanctuaries</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/60 font-sans-modern leading-relaxed">
            Restored 19th-century colonial tea planter estates, ocean cliffhead pool villas, and architectural safari tents nestled in untamed wilderness.
          </p>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LUXURY_HOTELS.map((hotel) => {
            const convertedPrice = Math.round(hotel.pricePerNight * curr.rate);

            return (
              <div
                key={hotel.id}
                id={`hotel-card-${hotel.id}`}
                className="relative rounded-2xl overflow-hidden bg-[#051109]/90 border border-white/10 shadow-xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
              >
                <div>
                  {/* Hotel Image */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051109] via-transparent to-transparent" />
                    
                    {/* Location Badge */}
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-[#051109]/85 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider text-white/80 border border-white/10 backdrop-blur-md">
                      <MapPin className="w-3 h-3 text-[#C5A059]" />
                      <span>{hotel.location}</span>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-[#051109]/85 px-2.5 py-1 rounded-full text-xs text-[#C5A059] border border-white/10 backdrop-blur-md">
                      <Star className="w-3 h-3 fill-[#C5A059] text-[#C5A059]" />
                      <span className="font-bold">{hotel.rating}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-white/50 block">
                      {hotel.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#C5A059] transition-colors mt-0.5">
                      {hotel.name}
                    </h3>
                    <p className="text-xs text-[#C5A059] font-serif-luxury italic mt-0.5 mb-2.5">
                      "{hotel.tagline}"
                    </p>

                    <p className="text-xs text-white/60 font-sans-modern leading-relaxed line-clamp-3 mb-4">
                      {hotel.description}
                    </p>

                    {/* Amenities pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {hotel.amenities.slice(0, 4).map((amenity, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-full text-[10px] bg-white/5 text-white/70 border border-white/10"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer / Rates & WhatsApp */}
                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-white/50 uppercase tracking-wider block">From</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-xl font-bold text-[#C5A059]">
                          {curr.symbol}{convertedPrice}
                        </span>
                        <span className="text-[10px] text-white/50">/ night</span>
                      </div>
                    </div>

                    <a
                      id={`hotel-book-whatsapp-${hotel.id}`}
                      href={getHotelWhatsApp(hotel)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-[#C5A059]/10 hover:bg-[#C5A059] text-[#C5A059] hover:text-black border border-[#C5A059]/30 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Reserve</span>
                    </a>
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
