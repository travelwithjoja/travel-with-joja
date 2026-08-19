import React from 'react';
import { useApp } from '../../context/AppContext';
import { CurrencySwitcher } from '../common/CurrencySwitcher';
import { Compass, Sparkles, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube, Linkedin, Shield, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { destinations, packages, settings } = useApp();

  const targetEmail = 'travelwithjoja38@gmail.com';
  const mailSubject = 'Sri Lanka Tour Inquiry';
  const mailBody = "Hello Travel With Joja, I'm interested in...";
  const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  const cleanNumber = (settings.whatsappNumber || '+94710914522').replace(/[^0-9]/g, '');
  const messageText = settings.whatsappGreeting || "Hi Travel With Joja, I'm interested in booking a Sri Lanka tour.";
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(messageText)}`;

  return (
    <footer className="bg-[#060708] border-t border-stone-800/80 pt-16 pb-12 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#AA7C11] p-0.5">
                <div className="w-full h-full rounded-full bg-[#0D0F12] flex items-center justify-center">
                  <Compass className="w-5 h-5 text-[#D4AF37]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-xl font-bold tracking-widest text-white">
                  TRAVEL WITH <span className="text-gold-gradient">JOJA</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]">
                  Ceylon Bespoke Luxury
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              Sri Lanka's dedicated luxury travel house. Curating private helicopter transfers, secluded tea country bungalows, wildlife safaris, and oceanfront sanctuaries.
            </p>

            <div className="pt-2">
              <CurrencySwitcher variant="pill" />
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#121418] border border-stone-800 hover:border-[#D4AF37] flex items-center justify-center text-stone-400 hover:text-[#D4AF37] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#121418] border border-stone-800 hover:border-[#D4AF37] flex items-center justify-center text-stone-400 hover:text-[#D4AF37] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#121418] border border-stone-800 hover:border-[#D4AF37] flex items-center justify-center text-stone-400 hover:text-[#D4AF37] transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#121418] border border-stone-800 hover:border-[#D4AF37] flex items-center justify-center text-stone-400 hover:text-[#D4AF37] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Destinations Col */}
          <div>
            <h4 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              Iconic Destinations
            </h4>
            <ul className="space-y-2 text-xs">
              {destinations.slice(0, 6).map((d) => (
                <li key={d.id}>
                  <a href="#destinations" className="hover:text-[#D4AF37] transition-colors">
                    {d.name} ({d.region})
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages Col */}
          <div>
            <h4 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              Bespoke Packages
            </h4>
            <ul className="space-y-2 text-xs">
              {packages.slice(0, 4).map((p) => (
                <li key={p.id}>
                  <a href="#packages" className="hover:text-[#D4AF37] transition-colors line-clamp-1">
                    {p.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#experiences" className="text-[#D4AF37] hover:underline">
                  + Custom Itinerary Design
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Contact & Admin Link */}
          <div>
            <h4 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              Concierge Desk
            </h4>
            <div className="space-y-2.5 text-xs">
              <p className="text-stone-300 font-medium">Colombo Office: 24/7</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>+94 71 091 4522 (WhatsApp)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={mailtoUrl}
                className="flex items-center gap-1.5 text-stone-300 hover:text-[#D4AF37] transition-colors"
                title="Send inquiry email to travelwithjoja38@gmail.com"
              >
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>travelwithjoja38@gmail.com</span>
                <ExternalLink className="w-3 h-3 text-stone-500" />
              </a>
              <div className="pt-3">
                <Link
                  to="/admin"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121418] border border-[#D4AF37]/30 text-stone-300 hover:text-white text-xs font-semibold hover:border-[#D4AF37] transition-all"
                >
                  <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Admin Management</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Travel With Joja. All Rights Reserved. Bespoke Sri Lanka Luxury.</p>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-stone-300">Privacy Charter</a>
            <a href="#hero" className="hover:text-stone-300">Terms of Luxury Travel</a>
            <a href="#hero" className="hover:text-stone-300">VIP Protocol</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
