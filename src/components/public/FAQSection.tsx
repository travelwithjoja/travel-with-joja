import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FAQSection: React.FC = () => {
  const { faqs } = useApp();
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Planning & Visas', 'Luxury Transport', 'Weather & Packing', 'Booking & Payments'];

  const filteredFaqs = faqs.filter((f) => {
    if (selectedCategory === 'All') return true;
    return f.category === selectedCategory;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#090A0C] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121418] border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Voyage Advisory & Essentials</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Everything you need to know about preparing for your luxury expedition, VIP visas, private air travel, and customized villa arrangements.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black font-bold shadow-md shadow-[#D4AF37]/20'
                  : 'bg-[#181B20] text-stone-300 hover:text-white border border-stone-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#121418] border-[#D4AF37]/50 shadow-xl'
                    : 'bg-[#121418]/60 border-stone-800 hover:border-stone-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-luxury text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#D4AF37] text-black rotate-180'
                        : 'bg-[#181B20] text-stone-400 border border-stone-700'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-stone-300 text-xs sm:text-sm leading-relaxed border-t border-stone-800/80">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#121418]/40 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-serif-luxury font-bold text-white">Have a specific bespoke question?</h4>
            <p className="text-xs text-stone-400">Our senior concierge team in Colombo is available 24/7.</p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-[#181B20] border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all text-xs font-semibold uppercase tracking-wider"
          >
            Direct Inquiry
          </a>
        </div>
      </div>
    </section>
  );
};
