import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { GalleryItem } from '../../types';
import { Image as ImageIcon, Sparkles, MapPin, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const GallerySection: React.FC = () => {
  const { gallery, openLightbox, lightboxItem, closeLightbox } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Heritage', 'Wildlife', 'Beaches', 'Tea Country', 'Luxury Stays'];

  const filteredGallery = gallery.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  // Lightbox navigation helper
  const handleLightboxNav = (direction: 'next' | 'prev') => {
    if (!lightboxItem) return;
    const currentIndex = gallery.findIndex((g) => g.id === lightboxItem.id);
    if (currentIndex === -1) return;

    if (direction === 'next') {
      const nextIdx = (currentIndex + 1) % gallery.length;
      openLightbox(gallery[nextIdx]);
    } else {
      const prevIdx = (currentIndex === 0 ? gallery.length - 1 : currentIndex - 1);
      openLightbox(gallery[prevIdx]);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#0D0F13] relative border-t border-b border-stone-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121418] border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold mb-3">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Visual Splendors of Serendib</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Luxury <span className="text-gold-gradient">Gallery</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Moments captured on our bespoke private expeditions across Sri Lanka's sacred ruins, pristine coastline, and wildlife sanctuaries.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black font-bold shadow-md shadow-[#D4AF37]/20'
                  : 'bg-[#181B20] text-stone-300 hover:text-white border border-stone-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredGallery.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => openLightbox(item)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer bg-[#181B20] border border-stone-800 hover:border-[#D4AF37]/60 shadow-lg transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Hover overlay content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold text-[#D4AF37] border border-[#D4AF37]/30">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-[#D4AF37] text-[11px] font-semibold mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                  <h4 className="font-serif-luxury text-base font-bold text-white leading-tight">
                    {item.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 p-3 rounded-full bg-[#181B20] border border-stone-700 hover:border-[#D4AF37] text-stone-300 hover:text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous */}
            <button
              onClick={() => handleLightboxNav('prev')}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[#181B20]/80 border border-stone-700 hover:border-[#D4AF37] text-white transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next */}
            <button
              onClick={() => handleLightboxNav('next')}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[#181B20]/80 border border-stone-700 hover:border-[#D4AF37] text-white transition-all hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image Content */}
            <div className="max-w-4xl w-full flex flex-col items-center">
              <div className="relative max-h-[70vh] rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-black">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  className="max-h-[70vh] w-auto object-contain mx-auto"
                />
              </div>

              {/* Caption Card */}
              <div className="mt-4 p-4 rounded-xl bg-[#121418] border border-stone-800 text-center max-w-xl w-full">
                <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#D4AF37] mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{lightboxItem.location} • {lightboxItem.category}</span>
                </div>
                <h3 className="font-serif-luxury text-xl font-bold text-white mb-1">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs text-stone-300">{lightboxItem.caption}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
