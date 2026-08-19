import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles, CheckCircle2, ShieldCheck, MessageCircle, ExternalLink } from 'lucide-react';

export const ContactAndNewsletter: React.FC = () => {
  const { settings, showToast } = useApp();

  const targetEmail = 'travelwithjoja38@gmail.com';
  const defaultMailSubject = 'Sri Lanka Tour Inquiry';
  const defaultMailBody = "Hello Travel With Joja, I'm interested in...";
  const standardMailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(defaultMailSubject)}&body=${encodeURIComponent(defaultMailBody)}`;

  const cleanNumber = (settings.whatsappNumber || '+94710914522').replace(/[^0-9]/g, '');
  const messageText = settings.whatsappGreeting || "Hi Travel With Joja, I'm interested in booking a Sri Lanka tour.";
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(messageText)}`;

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactDestination, setContactDestination] = useState('Sigiriya & Cultural Triangle');
  const [contactMessage, setContactMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [generatedMailto, setGeneratedMailto] = useState(standardMailtoUrl);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail) {
      showToast('Please provide your name and email.', 'error');
      return;
    }

    setIsSubmitting(true);

    const emailBody = `Hello Travel With Joja, I'm interested in booking a bespoke tour to ${contactDestination}.\n\nGuest Name: ${contactName}\nEmail: ${contactEmail}\nPhone / WhatsApp: ${contactPhone || 'Not provided'}\nRegion of Interest: ${contactDestination}\n\nVoyage Details & Special Requests:\n${contactMessage || 'Please share available bespoke packages and villa availability.'}`;
    const customMailto = `mailto:${targetEmail}?subject=${encodeURIComponent(defaultMailSubject)}&body=${encodeURIComponent(emailBody)}`;
    setGeneratedMailto(customMailto);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      showToast(`Thank you, ${contactName}! Opening your email client to dispatch to travelwithjoja38@gmail.com.`);
      // Launch mailto client
      window.location.href = customMailto;
    }, 600);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setNewsletterSubscribed(true);
    showToast(`Welcome to Joja Connoisseur Journal! We have registered ${newsletterEmail}.`);
    setNewsletterEmail('');
  };

  return (
    <section id="contact" className="py-24 bg-[#0D0F13] relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Office & Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121418] border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold mb-4">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Concierge & Private Offices</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Let Us Plan Your <br />
                <span className="text-gold-gradient">Sri Lankan Odyssey</span>
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed mb-8">
                Whether you envision secluded tea plantation bungalows, private aerial safaris, or romantic oceanfront villas, our travel architects are at your service.
              </p>

              {/* Direct Channels */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#181B20] border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-stone-400">Headquarters</h4>
                    <p className="text-sm font-medium text-white leading-snug">{settings.officeAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#181B20] border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-stone-400">Direct Concierge Lines</h4>
                    <p className="text-sm font-medium text-white">{settings.contactPhone}</p>
                    <p className="text-[11px] text-emerald-400">Available 24/7 (GMT+5:30)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#181B20] border border-emerald-500/40 flex items-center justify-center flex-shrink-0 text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-stone-400">Instant WhatsApp Booking</h4>
                    <p className="text-sm font-medium text-white">{settings.whatsappNumber || '+94 71 091 4522'}</p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-1 px-3 py-1 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/50 text-emerald-300 text-xs font-semibold transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp (+94710914522)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#181B20] border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-stone-400">Email Inquiries</h4>
                    <p className="text-sm font-medium text-white mb-1">travelwithjoja38@gmail.com</p>
                    <a
                      href={standardMailtoUrl}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#181B20] hover:bg-[#22262D] border border-[#D4AF37]/40 text-[#D4AF37] hover:text-[#F3E5AB] text-xs font-semibold transition-all"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email Concierge (mailto)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription Box */}
            <div className="p-6 rounded-2xl bg-[#121418] border border-[#D4AF37]/30 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Joja Connoisseur Journal</span>
              </div>
              <h4 className="font-serif-luxury text-base font-bold text-white mb-2">
                Curated Travel Intel & Private Villa Openings
              </h4>
              <p className="text-xs text-stone-400 mb-4 leading-relaxed">
                Receive our seasonal Sri Lanka dispatch: unlisted Relais & Châteaux releases, helicopter flight routes, and private wildlife reports.
              </p>

              {newsletterSubscribed ? (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-center gap-2 text-xs text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>You are subscribed to the private journal.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your private email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#F3E5AB] text-black text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Luxury Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#121418] border border-[#D4AF37]/40 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-800">
                <div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-white mb-1">
                    Bespoke Inquiry Form
                  </h3>
                  <p className="text-xs text-stone-400">
                    Receive a customized itinerary proposal with private villa allocations.
                  </p>
                </div>
                <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />
              </div>

              {isSent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-4 text-[#D4AF37]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif-luxury text-2xl font-bold text-white mb-2">
                    Inquiry Prepared & Dispatched
                  </h4>
                  <p className="text-sm text-stone-300 max-w-md mx-auto mb-6">
                    Your inquiry has been formulated. If your email app did not open automatically, click below to send to <strong className="text-[#D4AF37]">travelwithjoja38@gmail.com</strong>.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generatedMailto}
                      className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg hover:scale-105 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email App (mailto)</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsSent(false)}
                      className="px-6 py-2.5 rounded-full bg-[#181B20] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold hover:bg-[#22262D] transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider font-bold text-stone-400 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Lord Alexander Wright"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#090A0C] border border-stone-800 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] uppercase tracking-wider font-bold text-stone-400 block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alexander@domain.com"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#090A0C] border border-stone-800 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider font-bold text-stone-400 block mb-1.5">
                        Phone / WhatsApp (with country code)
                      </label>
                      <input
                        type="tel"
                        placeholder="+44 7700 900123"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#090A0C] border border-stone-800 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] uppercase tracking-wider font-bold text-stone-400 block mb-1.5">
                        Primary Region of Interest
                      </label>
                      <select
                        value={contactDestination}
                        onChange={(e) => setContactDestination(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#090A0C] border border-stone-800 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="All-Island Grand Tour">All-Island Grand Tour (10+ Days)</option>
                        <option value="Sigiriya & Cultural Triangle">Sigiriya & Cultural Triangle</option>
                        <option value="Ella & Ceylon Tea Trails">Ella & Ceylon Tea Trails</option>
                        <option value="Yala & Wildlife Safaris">Yala & Wildlife Safaris</option>
                        <option value="Galle & Southern Coast">Galle & Southern Coast</option>
                        <option value="VIP Helicopter Charter">VIP Helicopter Charter</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-bold text-stone-400 block mb-1.5">
                      Tell Us About Your Dream Voyage & Special Requests
                    </label>
                    <textarea
                      rows={4}
                      placeholder="e.g., We are 2 adults celebrating our 20th anniversary in November. We would love private helicopter transfers, tea estate bungalows, and a champagne catamaran cruise."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0C] border border-stone-800 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#D4AF37] leading-relaxed"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Transmitting to Concierge...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Bespoke Travel Inquiry</span>
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-center">
                    <a
                      href={standardMailtoUrl}
                      className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:text-[#F3E5AB] transition-colors underline decoration-[#D4AF37]/50"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Prefer your email app? Send direct mailto: travelwithjoja38@gmail.com</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-stone-500 text-center mt-3">
                    🔒 Strict client confidentiality assured. We never share personal contact records.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
