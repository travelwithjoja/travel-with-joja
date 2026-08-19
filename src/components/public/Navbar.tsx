import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { CurrencySwitcher } from '../common/CurrencySwitcher';
import { Compass, Sparkles, Menu, X, Shield, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const { openBookingModal, settings } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Luxury Packages', href: '#packages' },
    { name: 'Bespoke Journeys', href: '#experiences' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] p-0.5 shadow-lg shadow-[#D4AF37]/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-[#0D0F12] flex items-center justify-center">
              <Compass className="w-5 h-5 text-[#D4AF37] group-hover:rotate-45 transition-transform duration-500" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-widest text-white group-hover:text-[#D4AF37] transition-colors">
              TRAVEL WITH <span className="text-gold-gradient font-black">JOJA</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]/80 font-medium">
              Sri Lanka Bespoke Luxury
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-wider font-semibold text-stone-300 hover:text-[#D4AF37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Currency Switcher */}
          <CurrencySwitcher variant="nav" />

          {/* Admin Portal Shortcut */}
          <Link
            to="/admin"
            id="nav-admin-link"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-800 bg-[#121418]/80 hover:border-[#D4AF37]/50 text-stone-300 hover:text-white text-xs font-semibold tracking-wider transition-all"
            title="Admin Management Dashboard"
          >
            <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="hidden md:inline">Admin</span>
          </Link>

          {/* Primary Action: Book Now */}
          <button
            id="nav-book-now-btn"
            type="button"
            onClick={() => openBookingModal()}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book A Journey</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <CurrencySwitcher variant="nav" />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#181B20] border border-stone-800 text-stone-200 hover:text-[#D4AF37]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pt-4 pb-6 bg-[#0E1014]/98 border-b border-[#D4AF37]/30 backdrop-blur-2xl shadow-2xl">
          <nav className="flex flex-col space-y-3 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wide text-stone-200 hover:text-[#D4AF37] py-2 border-b border-stone-800/80 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-500" />
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBookingModal();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              Book A Bespoke Journey
            </button>

            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl bg-[#181B20] border border-[#D4AF37]/30 text-center text-xs font-semibold text-white flex items-center justify-center gap-2"
              >
                <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                Admin Portal
              </Link>
              <a
                href={`tel:${settings.contactPhone.split('/')[0].trim()}`}
                className="py-2.5 px-3 rounded-xl bg-[#181B20] border border-stone-800 text-center text-xs font-semibold text-stone-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                Concierge Line
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
