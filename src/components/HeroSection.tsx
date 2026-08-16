import React, { useState } from 'react';
import { 
  Plane, 
  Sparkles, 
  Compass, 
  ShieldCheck, 
  Star, 
  ArrowRight, 
  MapPin, 
  Calendar, 
  Users, 
  ChevronDown,
  MessageCircle,
  Play,
  Award
} from 'lucide-react';
import { getGeneralInquiryWhatsApp } from '../utils/whatsapp';
import jojaLogo from '../assets/images/travel_joja_logo_1786922454921.jpg';

interface HeroSectionProps {
  onExploreDestinations: () => void;
  onExplorePackages: () => void;
  onOpenBespokePlanner: () => void;
  onSelectQuickFilter: (destinationId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreDestinations,
  onExplorePackages,
  onOpenBespokePlanner,
  onSelectQuickFilter
}) => {
  const [selectedDest, setSelectedDest] = useState('all');
  const [selectedStyle, setSelectedStyle] = useState('Ultra Luxury');
  const [selectedMonth, setSelectedMonth] = useState('Next 3 Months');

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDest !== 'all') {
      onSelectQuickFilter(selectedDest);
    } else {
      onExplorePackages();
    }
  };

  return (
    <section 
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-16 overflow-hidden select-none"
    >
      {/* Cinematic Background with Sunset, Palms, Ocean & Dark Emerald Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Rich Background Image: Sri Lanka Sunset & Tropical Ocean Palms */}
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-10000 ease-out"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=2000&q=90')`
          }}
        />
        
        {/* Multi-layered luxury gradient masks for dark green & gold atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#051109] via-[#051109]/80 to-[#051109]/70" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#051109]/60 to-[#051109]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#051109]/85 via-transparent to-[#051109]/85" />
        
        {/* Atmospheric Radial Gradient from Design Theme */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C5A059]/10 rounded-full blur-[140px] pointer-events-none animate-gold-pulse" />
      </div>

      {/* FLYING AIRPLANE ANIMATION WITH VAPOR TRAIL ACROSS THE SUNSET SKY */}
      <div className="absolute top-20 left-0 w-full pointer-events-none z-10 overflow-hidden h-44">
        <div className="relative w-full h-full">
          {/* Animated Airplane Container */}
          <div className="animate-flight absolute flex items-center gap-3">
            {/* Vapor Trail Effect */}
            <div className="w-48 sm:w-72 h-[2px] bg-gradient-to-r from-transparent via-[#FFF5DF]/40 to-[#C5A059]/80 rounded-full blur-[0.5px]"></div>
            
            {/* Luxury Airplane Icon in Gold Shimmer */}
            <div className="relative p-2 rounded-full bg-[#051109]/80 backdrop-blur-md border border-[#C5A059]/40 shadow-lg shadow-[#C5A059]/30 text-[#C5A059]">
              <Plane className="w-6 h-6 transform rotate-45 text-[#C5A059]" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#C5A059] rounded-full animate-ping"></div>
            </div>
            
            <div className="hidden sm:flex flex-col text-[9px] tracking-[0.25em] text-[#C5A059] font-sans-modern uppercase bg-[#051109]/80 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
              <span>JOJA VIP AIR • CEYLON EXPEDITIONS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Center Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        
        {/* Travel With Joja Luxury Brand Emblem */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#051109]/90 border border-[#C5A059]/40 backdrop-blur-md shadow-xl shadow-[#C5A059]/10">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-[#C5A059]/60 shrink-0 bg-[#051109]">
              <img 
                src={jojaLogo} 
                alt="Travel With Joja Luxury Logo" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-serif font-bold tracking-[0.25em] text-white uppercase">
                Travel With Joja
              </span>
              <span className="text-[8px] uppercase tracking-[0.3em] text-[#C5A059] font-sans-modern">
                Private Luxury Atelier
              </span>
            </div>
          </div>
        </div>

        {/* Eyebrow from Sophisticated Dark Theme */}
        <div className="inline-flex items-center gap-3 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
          <span className="w-8 h-px bg-[#C5A059]"></span>
          <span>Private Luxury Tours</span>
          <span className="w-8 h-px bg-[#C5A059]"></span>
        </div>

        {/* Large Heading Required */}
        <h1 
          id="hero-main-heading"
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] max-w-5xl mx-auto drop-shadow-2xl"
        >
          Discover Sri Lanka <br />
          <span className="text-[#C5A059] font-serif-luxury italic font-normal">Like Never Before</span>
        </h1>

        {/* Subheading */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-white/60 max-w-2xl mx-auto font-sans-modern font-light leading-relaxed drop-shadow-md">
          Experience the pearl of the Indian Ocean through a curated lens of high-end hospitality, private aviation, and exclusive cultural heritage.
        </p>

        {/* Feature Cards from Design Theme */}
        <div className="flex flex-wrap justify-center gap-4 max-w-xl mx-auto my-7">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex-1 min-w-[180px] text-left">
            <div className="text-xl font-serif text-[#C5A059] mb-0.5">Luxury Tours</div>
            <div className="text-[10px] uppercase tracking-wider text-white/40">Custom Itineraries</div>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex-1 min-w-[180px] text-left">
            <div className="text-xl font-serif text-[#C5A059] mb-0.5">5-Star Stays</div>
            <div className="text-[10px] uppercase tracking-wider text-white/40">Curated Hotels</div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            id="hero-explore-destinations-btn"
            onClick={onExploreDestinations}
            className="px-6 py-3.5 rounded-full bg-gold-gradient text-black font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#C5A059]/20 hover:scale-105 hover:brightness-110 transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            Explore Destinations
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="hero-plan-custom-journey-btn"
            onClick={onOpenBespokePlanner}
            className="px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-[#C5A059] font-semibold text-xs uppercase tracking-widest hover:bg-white/10 hover:border-[#C5A059]/40 hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            Tailor-Made Itinerary
          </button>

          <a
            id="hero-whatsapp-vip-direct"
            href={getGeneralInquiryWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] font-semibold text-xs uppercase tracking-widest hover:bg-[#C5A059] hover:text-black transition-all duration-300 flex items-center gap-2 shadow-md hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Booking</span>
          </a>
        </div>

        {/* Interactive Fast Filter Capsule */}
        <form 
          id="hero-fast-booking-capsule"
          onSubmit={handleQuickSearch}
          className="mt-10 max-w-4xl mx-auto bg-[#051109]/90 border border-white/10 backdrop-blur-xl p-3 sm:p-4 rounded-2xl sm:rounded-full shadow-2xl text-left"
        >
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-2 items-center">
            
            {/* Destination Selection */}
            <div className="px-4 py-2 rounded-xl sm:rounded-full bg-white/5 border border-white/5">
              <label className="text-[9px] uppercase font-semibold text-white/50 tracking-widest block flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#C5A059]" /> Destination
              </label>
              <select
                id="hero-select-destination"
                value={selectedDest}
                onChange={(e) => setSelectedDest(e.target.value)}
                aria-label="Select destination"
                className="w-full bg-transparent text-xs font-semibold text-[#C5A059] focus:outline-none cursor-pointer mt-0.5"
              >
                <option value="all" className="bg-[#051109] text-white">All 6 Signature Wonders</option>
                <option value="sigiriya" className="bg-[#051109] text-white">Sigiriya Sky Palace</option>
                <option value="ella" className="bg-[#051109] text-white">Ella Mountain Retreat</option>
                <option value="nuwara-eliya" className="bg-[#051109] text-white">Nuwara Eliya Tea Country</option>
                <option value="mirissa" className="bg-[#051109] text-white">Mirissa Golden Coast</option>
                <option value="galle" className="bg-[#051109] text-white">Galle Colonial Fort</option>
                <option value="yala" className="bg-[#051109] text-white">Yala Leopard Safari</option>
              </select>
            </div>

            {/* Travel Style */}
            <div className="px-4 py-2 rounded-xl sm:rounded-full bg-white/5 border border-white/5">
              <label className="text-[9px] uppercase font-semibold text-white/50 tracking-widest block flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#C5A059]" /> Travel Style
              </label>
              <select
                id="hero-select-style"
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                aria-label="Select travel style"
                className="w-full bg-transparent text-xs font-semibold text-[#C5A059] focus:outline-none cursor-pointer mt-0.5"
              >
                <option value="Ultra Luxury" className="bg-[#051109] text-white">Ultra Luxury & Villas</option>
                <option value="Wildlife Safari" className="bg-[#051109] text-white">Wildlife & Nature</option>
                <option value="Highland Romance" className="bg-[#051109] text-white">Honeymoon & Romance</option>
                <option value="Heritage" className="bg-[#051109] text-white">Heritage & Culture</option>
              </select>
            </div>

            {/* Preferred Timing */}
            <div className="px-4 py-2 rounded-xl sm:rounded-full bg-white/5 border border-white/5">
              <label className="text-[9px] uppercase font-semibold text-white/50 tracking-widest block flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#C5A059]" /> Season
              </label>
              <select
                id="hero-select-month"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                aria-label="Select travel timing"
                className="w-full bg-transparent text-xs font-semibold text-[#C5A059] focus:outline-none cursor-pointer mt-0.5"
              >
                <option value="Next 3 Months" className="bg-[#051109] text-white">Next 3 Months</option>
                <option value="Winter Season (Nov-Feb)" className="bg-[#051109] text-white">Winter Season (Nov-Feb)</option>
                <option value="Spring (Mar-May)" className="bg-[#051109] text-white">Spring (Mar-May)</option>
                <option value="Summer (Jun-Aug)" className="bg-[#051109] text-white">Summer (Jun-Aug)</option>
                <option value="Autumn / Festive" className="bg-[#051109] text-white">Festive & Holidays</option>
              </select>
            </div>

            {/* Submit Action */}
            <button
              id="hero-search-submit-btn"
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl sm:rounded-full bg-gold-gradient hover:brightness-110 text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all duration-300"
            >
              <span>Search Journeys</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>

        {/* VIP Trust Indicators */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10 text-left">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/5 text-[#C5A059] border border-white/10">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">100% Private & Bespoke</p>
              <p className="text-[11px] text-white/50">Exclusive private parties</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/5 text-[#C5A059] border border-white/10">
              <Star className="w-5 h-5 fill-[#C5A059]" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">5.0★ Excellence</p>
              <p className="text-[11px] text-white/50">Reviewed by global VIPs</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/5 text-[#C5A059] border border-white/10">
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Aviation & Chauffeur</p>
              <p className="text-[11px] text-white/50">Mercedes & Helicopter</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/5 text-[#C5A059] border border-white/10">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">24/7 Joja Concierge</p>
              <p className="text-[11px] text-white/50">Direct WhatsApp support</p>
            </div>
          </div>
        </div>

      </div>

      {/* Down Arrow / Scroll Prompt */}
      <div className="relative z-10 mt-6 flex justify-center">
        <button
          id="hero-scroll-down-btn"
          onClick={onExploreDestinations}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#C5A059] border border-white/10 transition-all hover:scale-110 cursor-pointer animate-bounce"
          aria-label="Scroll to destinations"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
