import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MessageCircle, X, Sparkles, Send, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const WhatsAppButton: React.FC = () => {
  const { settings, openBookingModal } = useApp();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const rawNumber = settings.whatsappNumber || '+94710914522';
  const cleanNumber = rawNumber.replace(/[^0-9]/g, '');
  const messageText = settings.whatsappGreeting || "Hi Travel With Joja, I'm interested in booking a Sri Lanka tour.";
  const encodedText = encodeURIComponent(messageText);
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedText}`;

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start font-sans">
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-80 sm:w-88 rounded-2xl bg-[#121418] border border-[#D4AF37]/50 shadow-2xl p-4 text-stone-200 backdrop-blur-xl relative"
          >
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-3 right-3 text-stone-400 hover:text-white p-1 rounded-lg hover:bg-stone-800 transition-colors"
              aria-label="Close WhatsApp chat card"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-3 border-b border-stone-800 pb-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] flex items-center justify-center text-black font-bold text-sm shadow-md">
                  TJ
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#121418]"></span>
              </div>
              <div>
                <h4 className="text-sm font-serif-luxury font-bold text-white tracking-wide">
                  Joja VIP Concierge
                </h4>
                <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online Now • +94 71 091 4522
                </p>
              </div>
            </div>

            <div className="bg-[#090A0C] p-3 rounded-xl border border-stone-800 mb-4 text-xs text-stone-300">
              <span className="text-[10px] uppercase font-bold text-[#D4AF37] block mb-1">Pre-filled Message:</span>
              <p className="italic text-stone-200">
                "{messageText}"
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsPopupOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white text-xs font-bold shadow-lg shadow-emerald-950/60 transition-all text-center group"
              >
                <MessageCircle className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>Open WhatsApp Chat (New Tab)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsPopupOpen(false);
                  openBookingModal();
                }}
                className="w-full py-2 px-4 rounded-xl bg-[#181B20] border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#D4AF37] hover:text-white text-xs font-semibold transition-all text-center flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Or Fill Online Inquiry Form</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3">
        {/* Floating WhatsApp Action Button */}
        <a
          id="whatsapp-floating-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#121418] border-2 border-[#D4AF37] shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Open WhatsApp conversation in new tab"
          title="Chat with Travel With Joja on WhatsApp (+94710914522)"
        >
          {/* Animated Gold Ring Glow */}
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#25D366] to-[#F3E5AB] opacity-40 blur group-hover:opacity-85 transition-opacity"></span>

          <div className="relative z-10 w-full h-full rounded-full bg-[#0D0F12] flex items-center justify-center">
            <MessageCircle className="w-7 h-7 text-[#D4AF37] group-hover:text-emerald-400 transition-colors" />
          </div>

          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 text-[9px] text-black font-bold items-center justify-center">
              1
            </span>
          </span>
        </a>

        {/* Floating Pill Tag */}
        <a
          id="whatsapp-concierge-pill"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#121418]/95 border border-[#D4AF37]/40 text-stone-200 hover:text-white text-xs font-semibold backdrop-blur-md cursor-pointer hover:border-[#D4AF37] hover:bg-[#181B20] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all"
          title="Open WhatsApp in new tab (+94710914522)"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Chat with Joja Concierge</span>
          <ExternalLink className="w-3 h-3 text-[#D4AF37]" />
        </a>

        {/* Quick toggle for expanded card on desktop */}
        <button
          type="button"
          onClick={() => setIsPopupOpen(!isPopupOpen)}
          className="sm:flex hidden p-1.5 rounded-full bg-[#121418] border border-stone-800 hover:border-stone-600 text-stone-400 hover:text-white text-[10px]"
          title="Toggle quick concierge card"
        >
          {isPopupOpen ? '▲' : '▼'}
        </button>
      </div>
    </div>
  );
};
