import React, { useState } from 'react';
import { DESTINATIONS } from '../data/travelData';
import { Destination } from '../types';
import { DestinationCard } from './DestinationCard';
import { Compass, Sparkles, MapPin, Filter } from 'lucide-react';

interface DestinationsSectionProps {
  onSelectDestination: (destination: Destination) => void;
  activeFilter?: string;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onSelectDestination,
  activeFilter = 'all'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(activeFilter);

  const categories = [
    { id: 'all', label: 'All 6 Key Wonders' },
    { id: 'highlands', label: 'Misty Highlands (Ella & Nuwara Eliya)' },
    { id: 'heritage', label: 'Heritage & Ancient (Sigiriya & Galle)' },
    { id: 'coast', label: 'Coastal & Ocean (Mirissa)' },
    { id: 'wildlife', label: 'Wildlife Kingdom (Yala)' },
  ];

  const filteredDestinations = DESTINATIONS.filter((dest) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'highlands') return dest.id === 'ella' || dest.id === 'nuwara-eliya';
    if (selectedCategory === 'heritage') return dest.id === 'sigiriya' || dest.id === 'galle';
    if (selectedCategory === 'coast') return dest.id === 'mirissa';
    if (selectedCategory === 'wildlife') return dest.id === 'yala';
    return true;
  });

  return (
    <section id="destinations" className="py-24 relative bg-[#051109] overflow-hidden">
      {/* Background Decorative Ambient Flares */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1A3C2A]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-3 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            <span className="w-8 h-px bg-[#C5A059]"></span>
            <span>Signature Destinations</span>
            <span className="w-8 h-px bg-[#C5A059]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Six Iconic <span className="text-[#C5A059] font-serif-luxury italic font-normal">Wonders of Ceylon</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/60 font-sans-modern leading-relaxed">
            From 5th-century sky palaces and emerald tea mountain viaducts to wild leopard habitats and UNESCO ocean citadels. Each journey is private, unhurried, and refined.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`filter-dest-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                    active
                      ? 'bg-gold-gradient text-black shadow-lg shadow-[#C5A059]/20 font-bold scale-105'
                      : 'bg-white/5 text-white/60 hover:text-white border border-white/10 hover:border-[#C5A059]/40'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Destination Cards Grid */}
        <div 
          id="destinations-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onSelect={onSelectDestination}
            />
          ))}
        </div>

        {/* Luxury Travel Curator Footnote */}
        <div className="mt-16 p-6 rounded-2xl bg-[#051109]/90 border border-white/10 backdrop-blur-xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-[#C5A059]/30 flex items-center justify-center shrink-0 text-[#C5A059]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-white">
                Looking to combine multiple destinations?
              </h4>
              <p className="text-xs text-white/60 mt-0.5">
                We craft multi-destination journeys connected via private helicopters and luxury executive SUVs.
              </p>
            </div>
          </div>
          <button
            id="destinations-customize-all-btn"
            onClick={() => {
              const el = document.getElementById('planner');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="whitespace-nowrap px-5 py-2.5 rounded-full bg-gold-gradient text-black font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all cursor-pointer shadow-md"
          >
            Build Multi-City Route
          </button>
        </div>

      </div>
    </section>
  );
};
