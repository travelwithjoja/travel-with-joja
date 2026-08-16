import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  MessageCircle, 
  Sparkles, 
  Menu, 
  X, 
  PhoneCall, 
  ChevronRight,
  ShieldCheck,
  Globe2
} from 'lucide-react';
import { getGeneralInquiryWhatsApp } from '../utils/whatsapp';
import { WHATSAPP_DISPLAY } from '../data/travelData';
import { Logo } from './Logo';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  currency: string;
  onCurrencyChange: (currency: string) => void;
  onOpenBespokePlanner: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  currency,
  onCurrencyChange,
  onOpenBespokePlanner
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'packages', label: 'Luxury Packages' },
    { id: 'hotels', label: '5★ Sanctuaries' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'planner', label: 'Tailor-Made' },
    { id: 'contact', label: 'Contact' },
  ];

  const currencies = ['USD', 'EUR', 'GBP', 'AUD'];

  return (
    <header 
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-[#051109]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/60' 
          : 'py-5 bg-gradient-to-b from-[#051109]/90 to-transparent border-b border-white/5 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo - Travel With Joja Luxury Logo */}
        <div 
          id="brand-logo-button"
          onClick={() => onNavigate('hero')}
          className="flex items-center cursor-pointer group select-none"
        >
          <Logo imageSizeClass="w-10 h-10" />
        </div>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-1.5 text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer rounded-full ${
                  isActive
                    ? 'text-[#C5A059] bg-[#C5A059]/15 border border-[#C5A059]/30 font-semibold'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Area: Currency + WhatsApp + Custom Planner */}
        <div className="hidden md:flex items-center gap-3">
          
          {/* Currency Switcher */}
          <div className="relative group">
            <button 
              id="currency-selector-button"
              className="px-2.5 py-1.5 text-xs font-semibold rounded-full bg-white/5 text-[#C5A059] border border-white/10 hover:border-[#C5A059]/40 transition-all flex items-center gap-1.5 uppercase tracking-wider"
            >
              <Globe2 className="w-3 h-3 text-[#C5A059]" />
              <span>{currency}</span>
            </button>
            <div className="absolute right-0 mt-1 hidden group-hover:block w-24 py-1 bg-[#051109] border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl z-50">
              {currencies.map((c) => (
                <button
                  key={c}
                  id={`currency-option-${c}`}
                  onClick={() => onCurrencyChange(c)}
                  className={`w-full text-left px-3 py-1.5 text-xs transition-colors ${
                    currency === c ? 'text-[#C5A059] bg-[#C5A059]/15 font-bold' : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* WhatsApp Direct Header Link - Sophisticated Dark Style */}
          <a
            id="navbar-whatsapp-button"
            href={getGeneralInquiryWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] px-4 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-[#C5A059] hover:text-black transition-all flex items-center gap-2 group"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="font-medium">WhatsApp Booking</span>
          </a>

          {/* Bespoke Journey Planner CTA */}
          <button
            id="navbar-plan-journey-cta"
            onClick={onOpenBespokePlanner}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-[#DDC289] via-[#C5A059] to-[#A37F38] text-[#051109] text-xs font-bold uppercase tracking-widest hover:brightness-110 shadow-lg shadow-[#C5A059]/20 flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#051109]" />
            <span>Tailor Trip</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            id="mobile-nav-whatsapp-direct"
            href={getGeneralInquiryWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/30"
            aria-label="WhatsApp Concierge"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 text-[#C5A059] border border-white/10 hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="lg:hidden mt-3 px-4 pt-2 pb-6 bg-[#051109]/95 backdrop-blur-2xl border-b border-white/10 space-y-3"
        >
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 text-xs uppercase tracking-wider rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'bg-[#C5A059]/20 text-[#C5A059] font-bold border border-[#C5A059]/30'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs text-white/60 px-2 py-1">
              <span>Display Currency:</span>
              <div className="flex gap-2">
                {currencies.map((c) => (
                  <button
                    key={c}
                    onClick={() => onCurrencyChange(c)}
                    className={`px-2 py-0.5 rounded text-xs ${
                      currency === c ? 'bg-[#C5A059] text-black font-bold' : 'bg-white/5 text-[#C5A059]'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <button
              id="mobile-drawer-plan-cta"
              onClick={() => {
                onOpenBespokePlanner();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-gold-gradient text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              Design Bespoke Itinerary
            </button>

            <a
              id="mobile-drawer-whatsapp-cta"
              href={getGeneralInquiryWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Booking ({WHATSAPP_DISPLAY})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
