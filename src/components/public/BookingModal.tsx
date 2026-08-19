import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Sparkles, Calendar, Users, MapPin, Package, ShieldCheck, CheckCircle2, DollarSign, Download, Printer } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'motion/react';
import { Booking } from '../../types';

export const BookingModal: React.FC = () => {
  const {
    isBookingOpen,
    closeBookingModal,
    bookingPreselect,
    destinations,
    packages,
    currency,
    formatPrice,
    convertPrice,
    addBooking,
    showToast
  } = useApp();

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('United States');
  const [destination, setDestination] = useState('');
  const [packageId, setPackageId] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [date, setDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);

  // Prepopulate if opened with context
  useEffect(() => {
    if (bookingPreselect) {
      if (bookingPreselect.destination) {
        setDestination(bookingPreselect.destination);
      }
      if (bookingPreselect.packageId) {
        setPackageId(bookingPreselect.packageId);
      }
    }
  }, [bookingPreselect, isBookingOpen]);

  // Selected package details
  const selectedPkg = packages.find((p) => p.id === packageId);

  // Base price calculation
  const calculatedTotalUSD = selectedPkg
    ? selectedPkg.priceUSD * travelers
    : 1500 * travelers;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !date) {
      showToast('Please fill out all required personal and travel date fields.', 'error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const selectedPkgName = selectedPkg ? selectedPkg.title : 'Bespoke Custom Ceylon Itinerary';
      const selectedDestName = destination || (selectedPkg ? selectedPkg.destinationsCovered.join(', ') : 'Sigiriya & Cultural Triangle');

      const savedBooking = addBooking({
        name,
        email,
        phone,
        country,
        destination: selectedDestName,
        packageId: packageId || undefined,
        packageName: selectedPkgName,
        travelers: Number(travelers),
        travelersDetails: { adults: Number(travelers), children: 0 },
        date,
        returnDate: returnDate || undefined,
        specialRequests,
        totalUSD: calculatedTotalUSD,
        currency
      });

      setIsSubmitting(false);
      setConfirmedBooking(savedBooking);

      // Trigger Luxury Gold Confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F3E5AB', '#AA7C11', '#FFFFFF']
      });
    }, 800);
  };

  const handleClose = () => {
    setConfirmedBooking(null);
    closeBookingModal();
  };

  if (!isBookingOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl rounded-3xl bg-[#121418] border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-8 my-8 text-white max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#181B20] border border-stone-700 hover:border-[#D4AF37] text-stone-400 hover:text-white transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmedBooking ? (
          /* Confirmation Receipt View */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] flex items-center justify-center text-black mx-auto mb-4 shadow-lg shadow-[#D4AF37]/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">
              Bespoke Booking Inquired & Saved Locally
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-2">
              Journey Reservation Confirmed
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto mb-6">
              Thank you, {confirmedBooking.name}. Your booking inquiry reference has been registered and synced with our Admin Dashboard.
            </p>

            {/* Receipt Card */}
            <div className="p-5 rounded-2xl bg-[#090A0C] border border-stone-800 text-left space-y-3 mb-6 font-mono text-xs">
              <div className="flex justify-between border-b border-stone-800 pb-2">
                <span className="text-stone-400">Reference Number:</span>
                <span className="text-[#D4AF37] font-bold">{confirmedBooking.bookingRef}</span>
              </div>
              <div className="flex justify-between border-b border-stone-800 pb-2">
                <span className="text-stone-400">Package / Itinerary:</span>
                <span className="text-white text-right max-w-xs truncate">{confirmedBooking.packageName}</span>
              </div>
              <div className="flex justify-between border-b border-stone-800 pb-2">
                <span className="text-stone-400">Destination:</span>
                <span className="text-white">{confirmedBooking.destination}</span>
              </div>
              <div className="flex justify-between border-b border-stone-800 pb-2">
                <span className="text-stone-400">Travelers & Date:</span>
                <span className="text-white">{confirmedBooking.travelers} Guests • From {confirmedBooking.date}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-stone-400">Estimated Total:</span>
                <span className="text-lg font-bold text-[#D4AF37]">
                  {confirmedBooking.currency} {confirmedBooking.totalConverted.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => window.print()}
                className="py-3 px-6 rounded-full bg-[#181B20] border border-stone-700 hover:border-[#D4AF37] text-white text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" />
                Print Voucher
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="py-3 px-8 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black text-xs font-bold uppercase tracking-wider"
              >
                Return To Website
              </button>
            </div>
          </div>
        ) : (
          /* Main Booking Form */
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Bespoke Reservation Request</span>
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-2">
              Reserve Your <span className="text-gold-gradient">Sri Lanka Journey</span>
            </h2>
            <p className="text-xs text-stone-400 mb-6 leading-relaxed">
              Complete the inquiry details below. Our concierge will secure your VIP accommodations, private helicopter slots, and personalized itinerary.
            </p>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-bold text-stone-400 block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Harrison Sterling"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider font-bold text-stone-400 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sterling@luxurycapital.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Phone & Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-bold text-stone-400 block mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+44 7700 900821"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider font-bold text-stone-400 block mb-1">
                    Country of Residence
                  </label>
                  <input
                    type="text"
                    placeholder="United Kingdom / United States / Australia"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Destination & Package */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-bold text-stone-400 block mb-1">
                    Preferred Destination
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="">All-Island Bespoke Combination</option>
                    {destinations.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name} ({d.region})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider font-bold text-stone-400 block mb-1">
                    Curated Package (Optional)
                  </label>
                  <select
                    value={packageId}
                    onChange={(e) => setPackageId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="">Tailor Custom Itinerary from Scratch</option>
                    {packages.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title} ({p.duration})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Travelers & Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-bold text-stone-400 block mb-1">
                    Travelers *
                  </label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Traveler' : 'Travelers'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider font-bold text-stone-400 block mb-1">
                    Departure Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider font-bold text-stone-400 block mb-1">
                    Return Date (Optional)
                  </label>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="text-[11px] uppercase tracking-wider font-bold text-stone-400 block mb-1">
                  Special Requests, Villa Preferences & Celebrations
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Dietary preferences, private helicopter transfer request, anniversary celebration, high-floor ocean suite..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#D4AF37]"
                ></textarea>
              </div>

              {/* Live Price Estimation */}
              <div className="p-4 rounded-xl bg-[#090A0C] border border-stone-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-stone-400 block">
                    Estimated Journey Investment ({travelers} Travelers)
                  </span>
                  <span className="text-xl font-bold text-[#D4AF37] font-mono">
                    {formatPrice(calculatedTotalUSD)}
                  </span>
                  <span className="text-[10px] text-stone-400 ml-1.5">({currency})</span>
                </div>
                <span className="text-[10px] text-stone-400 text-right">
                  Includes 5-Star Villas, <br />
                  Chauffeur & VIP Permits
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Securing Reservation...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Confirm & Save Booking</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};
