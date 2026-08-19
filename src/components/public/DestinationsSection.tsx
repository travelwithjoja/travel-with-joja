import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { Destination } from '../../types';
import { MapPin, Star, Sparkles, ArrowRight, Compass, Filter, Search, Calendar, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export const DestinationsSection: React.FC = () => {
  const { destinations, openDestinationModal, openBookingModal, formatPrice } = useApp();
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [localSearch, setLocalSearch] = useState<string>('');

  const regions = ['All', 'Cultural Triangle', 'Hill Country', 'Southern Coast', 'Wildlife & Nature', 'West Coast'];

  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      const matchRegion = selectedRegion === 'All' || dest.region === selectedRegion;
      const matchSearch =
        localSearch.trim() === '' ||
        dest.name.toLowerCase().includes(localSearch.toLowerCase()) ||
        dest.tagline.toLowerCase().includes(localSearch.toLowerCase()) ||
        dest.popularFor.some((tag) => tag.toLowerCase().includes(localSearch.toLowerCase()));
      return matchRegion && matchSearch;
    });
  }, [destinations, selectedRegion, localSearch]);

  return (
    <section id="destinations" className="py-24 bg-[#090A0C] relative">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121418] border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Sri Lanka's 8 Jewel Regions</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Iconic <span className="text-gold-gradient">Destinations</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            From monumental fifth-century sky citadels to misty Ceylon tea hills and leopard-dense coastal wilderness. Explore our hand-curated regions.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-[#121418]/80 p-3 sm:p-4 rounded-2xl border border-stone-800 backdrop-blur-md">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {regions.map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedRegion === region
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black shadow-md shadow-[#D4AF37]/20 font-bold'
                    : 'bg-[#181B20] text-stone-300 hover:text-white hover:border-stone-600 border border-transparent'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Sigiriya, Yala, Ella..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#0D0F12] border border-stone-800 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
            {localSearch && (
              <button
                onClick={() => setLocalSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-white"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Destination Cards Grid */}
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-16 bg-[#121418]/50 rounded-2xl border border-stone-800 p-8">
            <MapPin className="w-12 h-12 text-[#D4AF37]/40 mx-auto mb-3" />
            <h3 className="text-lg font-serif-luxury text-white mb-2">No Destinations Found</h3>
            <p className="text-sm text-stone-400 mb-4">Try clearing your search query or selecting "All" regions.</p>
            <button
              onClick={() => {
                setSelectedRegion('All');
                setLocalSearch('');
              }}
              className="px-4 py-2 rounded-full bg-[#181B20] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDestinations.map((dest, idx) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative rounded-2xl overflow-hidden bg-[#121418] border border-stone-800/80 hover:border-[#D4AF37]/60 transition-all duration-500 shadow-xl hover:shadow-[0_12px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.15)] flex flex-col justify-between"
              >
                {/* Image Container with Zoom on Hover */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-[#121418]/20 to-transparent"></div>

                  {/* Region Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold text-[#D4AF37] border border-[#D4AF37]/30">
                      {dest.region}
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-xs font-bold text-white border border-stone-700">
                    <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
                    <span>{dest.rating}</span>
                  </div>

                  {/* Quick Details Hover Trigger */}
                  <button
                    type="button"
                    onClick={() => openDestinationModal(dest)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300"
                    aria-label={`View details of ${dest.name}`}
                  >
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#121418]/90 border border-[#D4AF37] text-[#D4AF37] text-xs font-bold shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      View Luxury Guide
                    </span>
                  </button>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-1">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed mb-4">
                      {dest.tagline}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {dest.popularFor.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-[#181B20] text-stone-300 border border-stone-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action footer */}
                  <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-stone-500 font-medium block">
                        Experiences From
                      </span>
                      <span className="text-sm font-bold text-[#D4AF37] font-mono">
                        {formatPrice(dest.priceFromUSD)}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => openBookingModal({ destination: dest.name })}
                      className="p-2.5 rounded-full bg-[#181B20] hover:bg-[#D4AF37] text-stone-300 hover:text-black border border-stone-700 hover:border-[#D4AF37] transition-all group-hover:scale-105"
                      title={`Plan Bespoke Journey to ${dest.name}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
