import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, MessageSquarePlus, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ReviewsCarousel: React.FC<{ onOpenSubmitReview?: () => void }> = ({ onOpenSubmitReview }) => {
  const { reviews } = useApp();
  const [currentIndex, setCurrentIndex] = useState(0);

  const approvedReviews = reviews.filter((r) => r.approved);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? approvedReviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === approvedReviews.length - 1 ? 0 : prev + 1));
  };

  if (approvedReviews.length === 0) return null;

  const current = approvedReviews[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-[#090A0C] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121418] border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold mb-3">
            <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
            <span>Voices of Discerning Voyagers</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Guest <span className="text-gold-gradient">Testimonials</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Read stories from travelers, dignitaries, and honeymooners who trusted Travel With Joja for their unforgettable Sri Lanka luxury escapes.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative rounded-3xl bg-[#121418] border border-[#D4AF37]/30 p-8 sm:p-14 shadow-2xl overflow-hidden backdrop-blur-xl">
          <Quote className="absolute top-6 right-8 w-24 h-24 text-[#D4AF37]/10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center text-center max-w-3xl mx-auto"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < current.rating ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-stone-700'
                    }`}
                  />
                ))}
              </div>

              {/* Review Title */}
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white mb-4">
                "{current.title}"
              </h3>

              {/* Review Text */}
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed italic mb-8">
                "{current.text}"
              </p>

              {/* Trip Taken Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-stone-800 text-[11px] text-[#D4AF37] mb-6">
                <Sparkles className="w-3 h-3" />
                <span>Trip: {current.tripTaken}</span>
              </div>

              {/* Author & Avatar */}
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37]"
                />
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-serif-luxury text-base font-bold text-white">
                      {current.author}
                    </h4>
                    {current.verified && (
                      <CheckCircle className="w-4 h-4 text-[#D4AF37]" title="Verified Traveler" />
                    )}
                  </div>
                  <p className="text-xs text-stone-400">{current.location}</p>
                  <p className="text-[10px] text-stone-500">{current.date}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-stone-800">
            <button
              type="button"
              onClick={prevReview}
              className="p-3 rounded-full bg-[#181B20] border border-stone-800 hover:border-[#D4AF37] text-stone-300 hover:text-white transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {approvedReviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'w-6 bg-[#D4AF37]' : 'w-2 bg-stone-700'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextReview}
              className="p-3 rounded-full bg-[#181B20] border border-stone-800 hover:border-[#D4AF37] text-stone-300 hover:text-white transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Submit Review CTA */}
        {onOpenSubmitReview && (
          <div className="text-center mt-10">
            <button
              type="button"
              onClick={onOpenSubmitReview}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#181B20] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] hover:text-white text-xs font-semibold tracking-wider transition-all"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Traveled with us? Leave a Review</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
