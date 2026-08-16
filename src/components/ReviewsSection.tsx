import React from 'react';
import { REVIEWS } from '../data/travelData';
import { 
  Star, 
  Quote, 
  ShieldCheck, 
  Sparkles, 
  Award,
  Heart
} from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 relative bg-[#051109] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            <span className="w-8 h-px bg-[#C5A059]"></span>
            <span>Endorsements & Testimonials</span>
            <span className="w-8 h-px bg-[#C5A059]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Loved by Discerning <span className="text-[#C5A059] font-serif-luxury italic font-normal">Global Voyagers</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/60 font-sans-modern leading-relaxed">
            Real reflections from royalty, diplomats, honeymooners, and luxury adventurers who explored Sri Lanka under our private guidance.
          </p>

          {/* Rating Summary Capsule */}
          <div className="mt-8 inline-flex items-center gap-6 px-6 py-3 rounded-full bg-white/5 border border-white/10 shadow-xl">
            <div className="flex items-center gap-1.5 text-xl font-bold text-[#C5A059]">
              <Star className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" />
              <span>5.0</span>
            </div>
            <div className="h-6 w-px bg-white/10"></div>
            <div className="text-left">
              <span className="text-xs font-bold text-white block uppercase tracking-wider">100% 5-Star Satisfaction</span>
              <span className="text-[10px] text-white/50">Over 480+ bespoke journeys curated</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="relative rounded-3xl p-7 sm:p-8 bg-[#051109]/90 border border-white/10 shadow-2xl flex flex-col justify-between transition-all duration-300 hover:border-[#C5A059]/40 group"
            >
              <div>
                {/* Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-[#C5A059]/20 group-hover:text-[#C5A059]/40 transition-colors" />
                </div>

                {/* Package Tag */}
                <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/5 text-[#C5A059] border border-[#C5A059]/20 mb-4">
                  {review.packageTitle}
                </span>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-white/80 font-sans-modern leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#C5A059]/40"
                  />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-white">
                      {review.author}
                    </h4>
                    <p className="text-[11px] text-white/50">
                      {review.city}, {review.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full border border-[#C5A059]/30 uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="font-semibold">Verified VIP Guest</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
