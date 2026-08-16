import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Sparkles, 
  Clock, 
  ChevronDown, 
  ChevronUp,
  ShieldCheck,
  Send
} from 'lucide-react';
import { FAQ_ITEMS, WHATSAPP_DISPLAY, CONTACT_EMAIL } from '../data/travelData';
import { getGeneralInquiryWhatsApp } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [sent, setSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#051109] overflow-hidden">
      {/* Background atmospheric radial glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#1A3C2A]/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
            <MessageCircle className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-[10px] font-semibold text-[#C5A059] tracking-widest uppercase">
              24/7 VIP Concierge
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Connect with Your <span className="text-gold-gradient font-serif-luxury italic font-normal">Private Concierge</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/60 font-sans-modern leading-relaxed">
            Whether planning a private helicopter arrival, luxury villa buyout, or bespoke multi-week expedition, our team is at your immediate service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct WhatsApp & Concierge Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* VIP WhatsApp Card */}
            <div className="rounded-3xl p-7 bg-white/5 border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-[#C5A059]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shadow-lg">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] block">
                    Instant Channel
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    Direct WhatsApp Concierge
                  </h3>
                </div>
              </div>

              <p className="text-xs text-white/70 leading-relaxed mb-6 font-sans-modern">
                Speak directly with Joja and senior luxury curators. We send live route options, villa photos, and customized quotes directly to your WhatsApp.
              </p>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-white/50 block">Direct Hotline</span>
                  <span className="font-serif text-base font-bold text-white">
                    {WHATSAPP_DISPLAY}
                  </span>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-[#C5A059] bg-white/5 border border-white/10 px-3 py-1 rounded-full font-medium uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-ping"></span>
                  Online Now
                </span>
              </div>

              <a
                id="contact-whatsapp-instant-btn"
                href={getGeneralInquiryWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-gold-gradient hover:brightness-110 text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start WhatsApp VIP Chat</span>
              </a>
            </div>

            {/* Email & Headquarters Card */}
            <div className="rounded-3xl p-7 bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 text-[#C5A059] border border-white/10">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white">
                    Bespoke Inquiries
                  </h4>
                  <p className="text-xs text-white/70 mt-0.5">{CONTACT_EMAIL}</p>
                  <span className="text-[10px] text-[#C5A059]">Guaranteed response within 2 hours</span>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="p-3 rounded-xl bg-white/5 text-[#C5A059] border border-white/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white">
                    Atelier Locations
                  </h4>
                  <p className="text-xs text-white/70 mt-0.5">
                    Colombo 07 (Cinnamon Gardens) • Galle Fort Ramparts, Sri Lanka
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: FAQ Accordion & Quick Inquiry Form */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* FAQ Accordion */}
            <div className="rounded-3xl p-7 sm:p-8 bg-white/5 border border-white/10 shadow-xl">
              <h3 className="font-serif text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C5A059]" />
                Frequently Addressed Inquiries
              </h3>

              <div className="space-y-3">
                {FAQ_ITEMS.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      id={`faq-item-${index}`}
                      className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-white hover:text-[#C5A059] cursor-pointer transition-colors"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-[#C5A059] shrink-0" /> : <ChevronDown className="w-4 h-4 text-white/50 shrink-0" />}
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs text-white/70 font-sans-modern leading-relaxed border-t border-white/10">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Note Box */}
            <div className="rounded-3xl p-6 bg-white/5 border border-white/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 text-[#C5A059] flex items-center justify-center shrink-0 border border-[#C5A059]/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs text-white/80">
                <strong className="text-white">Sri Lanka Tourism Development Authority (SLTDA) Certified</strong>
                <p className="text-[11px] text-white/50 mt-0.5">
                  All Travel With Joja journeys operate with fully licensed executive chauffeurs, certified wildlife naturalists, and luxury travel indemnity insurance.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
