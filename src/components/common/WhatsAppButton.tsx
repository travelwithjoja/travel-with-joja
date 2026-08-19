import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const WhatsAppButton: React.FC = () => {
  const { settings, openBookingModal } = useApp();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const cleanNumber = settings.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(settings.whatsappGreeting || 'Hello Joja! I would like to inquire about booking a bespoke luxury tour to Sri Lanka.');
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedText}`;

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start">
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 15 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-80 rounded-2xl bg-[#121418] border border-[#D4AF37]/40 shadow-2xl p-4 text-stone-200 backdrop-blur-xl relative"
          >
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-3 right-3 text-stone-400 hover:text-white p-1"
              aria-label="Close WhatsApp chat card"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-3 border-b border-stone-800 pb-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] flex items-center justify-center text-black font-bold text-sm">
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
                  Online • Sri Lanka Local Time
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-300 mb-4 leading-relaxed bg-black/40 p-3 rounded-xl border border-stone-800">
              "Ayubowan! Ready to plan your dream Sri Lanka bespoke itinerary with private helicopter hops and luxury villas? Chat with our private travel designer."
            </p>

            <div className="flex flex-col gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-xs font-bold shadow-lg shadow-emerald-950/50 transition-all text-center"
              >
                <MessageCircle className="w-4 h-4" />
                Start Instant WhatsApp Chat
              </a>
              <button
                type="button"
                onClick={() => {
                  setIsPopupOpen(false);
                  openBookingModal();
                }}
                className="w-full py-2 px-4 rounded-xl bg-[#181B20] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] hover:text-white text-xs font-semibold transition-all text-center flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Or Open Booking Inquiry Form
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3">
        <button
          id="whatsapp-floating-btn"
          type="button"
          onClick={() => setIsPopupOpen(!isPopupOpen)}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#121418] border-2 border-[#D4AF37] shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Open WhatsApp luxury travel chat"
        >
          {/* Animated Gold Ring Glow */}
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] opacity-30 blur group-hover:opacity-75 transition-opacity"></span>

          <div className="relative z-10 w-full h-full rounded-full bg-[#0D0F12] flex items-center justify-center">
            <MessageCircle className="w-7 h-7 text-[#D4AF37] group-hover:text-emerald-400 transition-colors" />
          </div>

          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 text-[9px] text-black font-bold items-center justify-center">
              1
            </span>
          </span>
        </button>

        {!isPopupOpen && (
          <div
            onClick={() => setIsPopupOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121418]/90 border border-[#D4AF37]/30 text-stone-200 text-xs font-medium backdrop-blur-md cursor-pointer hover:border-[#D4AF37] transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Chat with Joja Concierge</span>
          </div>
        )}
      </div>
    </div>
  );
};
