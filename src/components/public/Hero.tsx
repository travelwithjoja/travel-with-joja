import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, MapPin, Calendar, Users, Search, ArrowDown, Award, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'motion/react';

const HERO_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=2000&q=85',
    title: 'Sigiriya Ancient Sky Citadel',
    location: 'Cultural Triangle, Sri Lanka'
  },
  {
    url: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=2000&q=85',
    title: 'Nine Arch Viaduct & Highland Tea Valleys',
    location: 'Ella, Sri Lanka'
  },
  {
    url: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=2000&q=85',
    title: '17th-Century Dutch Ramparts & Ocean Mansions',
    location: 'Galle Fort, Sri Lanka'
  },
  {
    url: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=2000&q=85',
    title: 'Untamed Leopard Wilderness & Ocean Dunes',
    location: 'Yala National Park, Sri Lanka'
  }
];

export const Hero: React.FC = () => {
  const { openBookingModal, destinations, packages } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Quick Hero Search state
  const [searchDestination, setSearchDestination] = useState('');
  const [searchTravelers, setSearchTravelers] = useState('2');
  const [searchDate, setSearchDate] = useState('');

  // Slide cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openBookingModal({
      destination: searchDestination || 'Sigiriya & Hill Country',
      packageName: packages[0]?.title
    });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-24 pb-12">
      {/* Background Image Carousel with Cinematic Overlay */}
      {HERO_IMAGES.map((img, idx) => (
        <div
          key={img.url}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          } transform transition-transform duration-7000`}
        >
          <img
            src={img.url}
            alt={img.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Luxury Gradient Dark Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/65 to-[#090A0C]/80"></div>
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#090A0C]/40 to-[#090A0C]/90"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto text-center flex flex-col items-center">
        {/* Luxury Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121418]/90 border border-[#D4AF37]/40 shadow-xl backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37]">
            Sri Lanka's Premier Bespoke Travel House
          </span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-[#D4AF37]"></span>
          <span className="hidden sm:inline text-[11px] text-stone-300">
            Relais & Châteaux Partnerships
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.1] mb-6"
        >
          Crafting Extraordinary <br />
          <span className="text-gold-gradient font-black">Bespoke Ceylon Journeys</span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-base sm:text-xl text-stone-300 max-w-3xl font-light leading-relaxed mb-10"
        >
          Private helicopter transfers, secluded tea planter bungalows, wild leopard expeditions, and sunset catamaran charters curated exclusively for discerning voyagers.
        </motion.p>

        {/* Interactive Quick Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="w-full max-w-4xl"
        >
          <form
            onSubmit={handleHeroSearchSubmit}
            id="hero-quick-search-form"
            className="p-3 sm:p-4 rounded-2xl sm:rounded-full bg-[#121418]/90 border border-[#D4AF37]/35 shadow-2xl backdrop-blur-xl grid grid-cols-1 sm:grid-cols-4 gap-3 items-center text-left"
          >
            {/* Destination Input */}
            <div className="flex items-center gap-3 px-3 py-2 rounded-xl sm:rounded-full bg-black/40 border border-stone-800">
              <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
              <div className="flex flex-col flex-1 min-w-0">
                <label className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                  Destination
                </label>
                <select
                  value={searchDestination}
                  onChange={(e) => setSearchDestination(e.target.value)}
                  className="bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer truncate"
                >
                  <option value="" className="bg-[#121418] text-stone-300">All 8 Iconic Regions</option>
                  {destinations.map((d) => (
                    <option key={d.id} value={d.name} className="bg-[#121418] text-white">
                      {d.name} ({d.region})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Travel Date */}
            <div className="flex items-center gap-3 px-3 py-2 rounded-xl sm:rounded-full bg-black/40 border border-stone-800">
              <Calendar className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
              <div className="flex flex-col flex-1 min-w-0">
                <label className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                  Target Season / Date
                </label>
                <input
                  type="date"
                  value={searchDate}
                  onChange={(e) => setSearchDate(e.target.value)}
                  className="bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer"
                />
              </div>
            </div>

            {/* Travelers */}
            <div className="flex items-center gap-3 px-3 py-2 rounded-xl sm:rounded-full bg-black/40 border border-stone-800">
              <Users className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
              <div className="flex flex-col flex-1 min-w-0">
                <label className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                  Travelers
                </label>
                <select
                  value={searchTravelers}
                  onChange={(e) => setSearchTravelers(e.target.value)}
                  className="bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer"
                >
                  <option value="1" className="bg-[#121418] text-white">Solo Explorer</option>
                  <option value="2" className="bg-[#121418] text-white">2 Guests (Couple / VIP)</option>
                  <option value="4" className="bg-[#121418] text-white">4 Guests (Family / Friends)</option>
                  <option value="6" className="bg-[#121418] text-white">6+ Guests (Private Charter)</option>
                </select>
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              id="hero-plan-journey-btn"
              className="w-full h-full py-3.5 sm:py-3 px-6 rounded-xl sm:rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4 text-black" />
              <span>Tailor Trip</span>
            </button>
          </form>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-12 pt-6 border-t border-stone-800/80 max-w-4xl w-full"
        >
          <div className="flex items-center justify-center sm:justify-start gap-2.5 text-left">
            <Award className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">100% Bespoke</p>
              <p className="text-[11px] text-stone-400">Custom tailored itineraries</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2.5 text-left">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">VIP On-Ground Host</p>
              <p className="text-[11px] text-stone-400">24/7 Dedicated Concierge</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2.5 text-left">
            <Star className="w-5 h-5 text-[#D4AF37] flex-shrink-0 fill-[#D4AF37]" />
            <div>
              <p className="text-xs font-bold text-white">5.0 Star Rated</p>
              <p className="text-[11px] text-stone-400">Over 650+ VIP Clients</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2.5 text-left">
            <Sparkles className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Private Fleets</p>
              <p className="text-[11px] text-stone-400">Helicopters & Mercedes</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide Indicators & Scroll Prompt */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex items-center justify-between mt-8">
        {/* Caption */}
        <div className="hidden md:flex flex-col text-left">
          <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold">
            {HERO_IMAGES[currentSlide].location}
          </span>
          <span className="text-xs text-stone-300 font-serif-luxury">
            {HERO_IMAGES[currentSlide].title}
          </span>
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center gap-2 mx-auto md:mx-0">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === currentSlide ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-stone-700 hover:bg-stone-500'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <a
          href="#destinations"
          className="hidden md:flex items-center gap-2 text-xs text-stone-400 hover:text-[#D4AF37] transition-colors"
        >
          <span>Explore Destinations</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#D4AF37]" />
        </a>
      </div>
    </section>
  );
};
