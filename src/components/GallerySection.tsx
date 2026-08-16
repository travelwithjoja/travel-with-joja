import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/travelData';
import { GalleryItem } from '../types';
import { 
  Camera, 
  Sparkles, 
  MapPin, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import { getGeneralInquiryWhatsApp } from '../utils/whatsapp';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Heritage', 'Highlands', 'Coast', 'Wildlife', 'Villas'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenPhoto = (item: GalleryItem) => {
    setActivePhoto(item);
  };

  const handleNextPhoto = () => {
    if (!activePhoto) return;
    const currentIndex = GALLERY_ITEMS.findIndex((i) => i.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setActivePhoto(GALLERY_ITEMS[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!activePhoto) return;
    const currentIndex = GALLERY_ITEMS.findIndex((i) => i.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setActivePhoto(GALLERY_ITEMS[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 relative bg-[#051109] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-3 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            <span className="w-8 h-px bg-[#C5A059]"></span>
            <span>Visual Chronicles</span>
            <span className="w-8 h-px bg-[#C5A059]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Moments Captured <span className="text-[#C5A059] font-serif-luxury italic font-normal">in Paradise</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/60 font-sans-modern leading-relaxed">
            Glimpses of Sri Lanka’s raw wilderness, golden coastal shores, emerald mountain passes, and timeless colonial sanctuaries.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  id={`gallery-filter-${cat}`}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all cursor-pointer ${
                    active
                      ? 'bg-gold-gradient text-black font-bold shadow-md'
                      : 'bg-white/5 text-white/60 hover:text-white border border-white/10 hover:border-[#C5A059]/40'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => handleOpenPhoto(item)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-[#051109]/90 border border-white/10 cursor-pointer shadow-lg transition-all duration-300 hover:border-[#C5A059]/60"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#051109] via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Badge Icon */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-[#051109]/80 text-[#C5A059] border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Item Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="flex items-center gap-1.5 text-[10px] text-[#C5A059] font-semibold mb-1 uppercase tracking-wider">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#C5A059] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-white/60 line-clamp-2 mt-1 opacity-90 font-sans-modern">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div 
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#051109] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              id="lightbox-close-btn"
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#051109]/80 text-[#C5A059] hover:text-white border border-white/10 hover:bg-white/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Buttons */}
            <button
              id="lightbox-prev-btn"
              onClick={handlePrevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-[#051109]/80 text-[#C5A059] hover:text-white border border-white/10 hover:bg-white/10 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              id="lightbox-next-btn"
              onClick={handleNextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-[#051109]/80 text-[#C5A059] hover:text-white border border-white/10 hover:bg-white/10 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Large Image */}
            <div className="relative h-[55vh] sm:h-[65vh] w-full bg-black/40 overflow-hidden">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain object-center"
              />
            </div>

            {/* Details Footer */}
            <div className="p-6 bg-[#051109] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#C5A059] font-semibold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activePhoto.location}</span>
                  <span>•</span>
                  <span>{activePhoto.category}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white mt-1">
                  {activePhoto.title}
                </h3>
                <p className="text-xs text-white/60 mt-1">
                  {activePhoto.description}
                </p>
              </div>

              <a
                id="lightbox-whatsapp-cta"
                href={getGeneralInquiryWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-gold-gradient text-black font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-md whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Visit with Travel With Joja</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
