import React from 'react';
import { useApp } from '../../context/AppContext';
import { Plane, Crown, Shield, HeartHandshake, Compass, Sparkles, Coffee, Anchor } from 'lucide-react';
import { motion } from 'motion/react';

export const LuxuryBespokeFeatures: React.FC = () => {
  const { openBookingModal } = useApp();

  const features = [
    {
      icon: <Plane className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Private Helicopter Island-Hopping',
      description: 'Bypass road congestion with our chartered Airbus H125 helicopters connecting international terminals to coastal lagoons and private highland tea estates.'
    },
    {
      icon: <Crown className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Exclusive Relais & Châteaux Access',
      description: 'Stay in the finest luxury suites, colonial tea planter bungalows, and private oceanfront cliff villas with dedicated 24-hour butler service.'
    },
    {
      icon: <Compass className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Senior Wildlife & Heritage Naturalists',
      description: 'Explore UNESCO wonders and track leopards in Yala alongside Sri Lanka’s foremost archaeological historians and conservation naturalists.'
    },
    {
      icon: <Anchor className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Private Yacht & Catamaran Charters',
      description: 'Witness Indian Ocean Blue Whales in Mirissa and sail the historic Galle Fort coastlines on private luxury catamarans with fresh seafood and vintage champagne.'
    },
    {
      icon: <Coffee className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Rare Ceylon Tea Masterclasses',
      description: 'Private tastings of high-elevation Golden Needle and Silver Tip teas at private colonial tea factories dating back to 1867.'
    },
    {
      icon: <Shield className="w-6 h-6 text-[#D4AF37]" />,
      title: 'VIP Tarmac Fast-Track & Escort',
      description: 'From the moment your wheels touch down at Colombo Airport, enjoy executive VIP lounge access, baggage handling, and police protocol escort.'
    }
  ];

  return (
    <section id="experiences" className="py-24 bg-[#090A0C] relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121418] border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Joja Difference</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Uncompromising <span className="text-gold-gradient">Luxury & Precision</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            We don't offer standard tours. We design deeply personalized, once-in-a-lifetime Sri Lankan odysseys with flawless logistics.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-8 rounded-2xl bg-[#121418]/80 border border-stone-800/80 hover:border-[#D4AF37]/50 hover:bg-[#181B20] transition-all duration-300 shadow-xl group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#090A0C] border border-[#D4AF37]/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#D4AF37] transition-all shadow-md">
                {item.icon}
              </div>
              <h3 className="font-serif-luxury text-lg font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Custom Itinerary Invitation Banner */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#181B20] via-[#121418] to-[#181B20] border border-[#D4AF37]/40 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-left">
            <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-bold block mb-2">
              Have a bespoke vision in mind?
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-3">
              Design a Custom Private Itinerary
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Tell our Master Travel Designers your travel dates, preferred villas, and dream adventures. We will assemble a tailored itinerary within 24 hours.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openBookingModal()}
            className="flex-shrink-0 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-black text-xs sm:text-sm font-bold uppercase tracking-wider hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 transition-all"
          >
            Consult A Private Designer
          </button>
        </div>
      </div>
    </section>
  );
};
