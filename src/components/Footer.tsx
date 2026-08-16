import React from 'react';
import { 
  Sparkles, 
  Compass, 
  MapPin, 
  PhoneCall, 
  Mail, 
  MessageCircle, 
  ShieldCheck, 
  ArrowUp,
  Award
} from 'lucide-react';
import { getGeneralInquiryWhatsApp } from '../utils/whatsapp';
import { WHATSAPP_DISPLAY, CONTACT_EMAIL } from '../data/travelData';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPlanner: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPlanner
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#051109] text-white/70 pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-32 bg-[#C5A059]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => onNavigate('hero')}
              className="flex items-center cursor-pointer select-none group"
            >
              <Logo imageSizeClass="w-11 h-11" />
            </div>

            <p className="text-xs text-white/60 leading-relaxed max-w-sm font-sans-modern">
              Specialists in private chauffeur-driven expeditions, helicopter transfers, Relais & Châteaux tea planter estates, and high-touch VIP concierge throughout Sri Lanka.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={getGeneralInquiryWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#C5A059]" />
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-xs font-bold text-[#C5A059] uppercase tracking-widest">
              Signature Wonders
            </h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li>
                <button onClick={() => onNavigate('destinations')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Sigiriya Sky Palace
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('destinations')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Ella Nine Arch Bridge
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('destinations')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Nuwara Eliya Tea Valleys
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('destinations')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Mirissa Ocean & Whales
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('destinations')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Galle Fort Dutch Ramparts
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('destinations')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Yala Leopard Kingdom
                </button>
              </li>
            </ul>
          </div>

          {/* Luxury Offerings */}
          <div className="space-y-3">
            <h4 className="font-serif text-xs font-bold text-[#C5A059] uppercase tracking-widest">
              Privileges & Stays
            </h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li>
                <button onClick={() => onNavigate('packages')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  The Royal Emerald Odyssey
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('hotels')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Ceylon Tea Trails Bungalows
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('hotels')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Cape Weligama Cliff Villas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('hotels')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Wild Coast Safari Lodge
                </button>
              </li>
              <li>
                <button onClick={onOpenPlanner} className="text-[#C5A059] font-semibold hover:underline cursor-pointer">
                  ★ Design Bespoke Itinerary
                </button>
              </li>
            </ul>
          </div>

          {/* Accreditations & Contact */}
          <div className="space-y-3">
            <h4 className="font-serif text-xs font-bold text-[#C5A059] uppercase tracking-widest">
              Concierge Contact
            </h4>
            <div className="space-y-2 text-xs text-white/60">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{CONTACT_EMAIL}</span>
              </p>
              <p className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{WHATSAPP_DISPLAY}</span>
              </p>
              <p className="flex items-start gap-2 mt-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Cinnamon Gardens, Colombo 07, Sri Lanka</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Travel With Joja. All rights reserved.</span>
            <span>•</span>
            <span>Sri Lanka Tourism Development Authority Registered</span>
          </div>

          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-[#C5A059] border border-white/10 hover:bg-white/10 uppercase tracking-wider text-[10px] transition-all cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
