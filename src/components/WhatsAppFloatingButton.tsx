import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Plane, Compass, ArrowRight } from 'lucide-react';
import { getGeneralInquiryWhatsApp } from '../utils/whatsapp';
import { WHATSAPP_DISPLAY } from '../data/travelData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    { label: '👑 Ask for Custom Itinerary', msg: 'Hello Joja! I would like to design a bespoke private tour in Sri Lanka.' },
    { label: '🚁 Inquire about Helicopter Charters', msg: 'Hello Joja! I am interested in private helicopter transfers between Sigiriya, Highlands, and Colombo.' },
    { label: '🏨 5-Star Tea Trails & Villas', msg: 'Hello Joja! Please advise on luxury villa availability for upcoming dates.' },
    { label: '🐆 Yala Leopard Safari Booking', msg: 'Hello Joja! I want to arrange a private leopard safari in Yala with a dedicated naturalist.' },
  ];

  const handleOpenPrompt = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/94771234567?text=${encoded}`, '_blank');
  };

  return (
    <div 
      id="whatsapp-floating-container"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end select-none"
    >
      {/* Quick Chat Popup Menu */}
      {isOpen && (
        <div 
          id="whatsapp-quick-popup"
          className="mb-3 w-80 sm:w-96 rounded-3xl p-5 bg-[#051109]/95 backdrop-blur-2xl border border-white/10 shadow-2xl animate-fade-in text-left"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/5 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-xs font-bold text-white">
                  Joja VIP Travel Concierge
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-[#C5A059]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-ping"></span>
                  <span>Instant Response • WhatsApp</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/50 hover:text-white hover:bg-white/5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-white/60 my-3 font-sans-modern leading-relaxed">
            Welcome to Travel With Joja. Select a direct VIP inquiry topic or chat directly:
          </p>

          {/* Quick Prompts */}
          <div className="space-y-2 mb-3">
            {quickPrompts.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleOpenPrompt(item.msg)}
                className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-medium text-white/80 transition-all flex items-center justify-between group cursor-pointer"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>

          <a
            href={getGeneralInquiryWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-full bg-gold-gradient text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:brightness-110 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Open WhatsApp ({WHATSAPP_DISPLAY})</span>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        id="whatsapp-floating-trigger-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 pl-3.5 pr-4 py-2.5 rounded-full bg-[#051109] border border-white/10 shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
        aria-label="Open WhatsApp Concierge"
      >
        <div className="relative w-8 h-8 rounded-full bg-white/5 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shadow-md">
          <MessageCircle className="w-4 h-4" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#C5A059] ring-2 ring-[#051109] animate-pulse"></span>
        </div>

        <div className="flex flex-col text-left">
          <span className="font-serif text-xs font-bold text-white group-hover:text-[#C5A059]">
            WhatsApp VIP
          </span>
          <span className="text-[9px] uppercase tracking-wider text-[#C5A059] font-sans-modern leading-none">
            Online with Joja
          </span>
        </div>
      </button>
    </div>
  );
};
