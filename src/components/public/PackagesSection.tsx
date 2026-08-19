import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TravelPackage } from '../../types';
import { Sparkles, Clock, Users, Star, CheckCircle, ArrowRight, ShieldCheck, Plane, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export const PackagesSection: React.FC = () => {
  const { packages, openPackageModal, openBookingModal, formatPrice } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Signature', 'Wildlife Safari', 'Coastal & Marine', 'Wellness & Tea'];

  const filteredPackages = packages.filter((pkg) => {
    if (selectedCategory === 'All') return true;
    return pkg.category === selectedCategory;
  });

  return (
    <section id="packages" className="py-24 bg-[#0D0F13] relative border-t border-b border-stone-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121418] border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Sri Lanka Blueprints</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Signature <span className="text-gold-gradient">Luxury Packages</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Every bespoke package includes 5-star Relais & Châteaux accommodations, private luxury Mercedes chauffeurs, VIP fast-track monument permits, and 24/7 guest concierge.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-black font-bold shadow-lg shadow-[#D4AF37]/25'
                  : 'bg-[#181B20] text-stone-300 hover:text-white border border-stone-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-2xl overflow-hidden bg-[#121418] border transition-all duration-300 flex flex-col justify-between ${
                pkg.featured
                  ? 'border-[#D4AF37]/60 shadow-[0_0_35px_rgba(212,175,55,0.15)] relative'
                  : 'border-stone-800/90 hover:border-stone-700'
              }`}
            >
              {pkg.featured && (
                <div className="absolute top-0 right-0 z-20">
                  <span className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black text-[10px] font-black uppercase tracking-wider py-1 px-4 rounded-bl-xl shadow-md">
                    Featured Itinerary
                  </span>
                </div>
              )}

              <div>
                {/* Image & Quick Info */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-transparent"></div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-semibold text-[#D4AF37] border border-[#D4AF37]/30 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {pkg.duration}
                    </span>

                    <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-xs font-bold text-white border border-stone-700 flex items-center gap-1">
                      <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
                      {pkg.rating} ({pkg.reviewsCount})
                    </span>
                  </div>
                </div>

                {/* Package Details */}
                <div className="p-6">
                  <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider block mb-1">
                    {pkg.category}
                  </span>
                  <h3 className="font-serif-luxury text-xl font-bold text-white mb-2 line-clamp-1">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-stone-400 mb-5 leading-relaxed line-clamp-2">
                    {pkg.subtitle}
                  </p>

                  {/* Highlights / Inclusions Checklist */}
                  <div className="space-y-2 mb-6">
                    {pkg.inclusions.slice(0, 3).map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-300">
                        <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{inc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Transport Tag */}
                  <div className="p-2.5 rounded-xl bg-black/40 border border-stone-800 text-[11px] text-stone-400 flex items-center gap-2 mb-4">
                    <Plane className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                    <span className="truncate">{pkg.transportType}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Price & CTAs */}
              <div className="p-6 pt-0 border-t border-stone-800/80 mt-auto">
                <div className="flex items-baseline justify-between pt-4 mb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-500 font-medium block">
                      All-Inclusive Package
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#D4AF37] font-mono">
                        {formatPrice(pkg.priceUSD)}
                      </span>
                      <span className="text-[11px] text-stone-400">/ traveler</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => openPackageModal(pkg)}
                    className="text-xs text-stone-300 hover:text-[#D4AF37] flex items-center gap-1 font-semibold underline underline-offset-4"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Itinerary
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => openPackageModal(pkg)}
                    className="py-2.5 px-3 rounded-xl bg-[#181B20] border border-stone-700 hover:border-[#D4AF37] text-white text-xs font-semibold transition-all text-center"
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    onClick={() => openBookingModal({ packageId: pkg.id, packageName: pkg.title })}
                    className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] hover:from-[#F3E5AB] hover:to-[#D4AF37] text-black text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
