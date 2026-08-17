import React, { useState } from 'react';
import { BespokePlan } from '../types';
import { DESTINATIONS } from '../data/travelData';
import { getBespokeWhatsApp } from '../utils/whatsapp';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  MapPin, 
  Compass, 
  Calendar, 
  Users, 
  Plane, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Award,
  Crown
} from 'lucide-react';

interface BespokeTripPlannerProps {
  initialDestinationId?: string;
  onClose?: () => void;
}

export const BespokeTripPlanner: React.FC<BespokeTripPlannerProps> = ({
  initialDestinationId,
  onClose
}) => {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(
    initialDestinationId ? [initialDestinationId] : ['sigiriya', 'ella', 'galle']
  );
  const [travelStyle, setTravelStyle] = useState<'Ultra Luxury' | 'Bespoke Family' | 'Romantic Escape' | 'Wildlife Expedition'>('Ultra Luxury');
  const [duration, setDuration] = useState('8 - 10 Days');
  const [travelers, setTravelers] = useState(2);
  const [month, setMonth] = useState('Upcoming High Season');
  const [specialRequests, setSpecialRequests] = useState<string[]>([
    'Executive Mercedes Chauffeur',
    'Helicopter Aerial Transfer'
  ]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneOrWhatsApp, setPhoneOrWhatsApp] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const availableSpecialRequests = [
    'Executive Mercedes Chauffeur',
    'Helicopter Aerial Transfer',
    'Private Chartered Whale Yacht',
    'Vintage First-Class Train Saloon',
    'Personal Gourmet Master Chef',
    'Exclusive Gemstone Vault Access',
    'Professional Sunset Photographer',
    'Hot Air Balloon Sunrise Flight'
  ];

  const toggleDestination = (id: string) => {
    if (selectedDestinations.includes(id)) {
      if (selectedDestinations.length > 1) {
        setSelectedDestinations(selectedDestinations.filter((d) => d !== id));
      }
    } else {
      setSelectedDestinations([...selectedDestinations, id]);
    }
  };

  const toggleSpecialRequest = (req: string) => {
    if (specialRequests.includes(req)) {
      setSpecialRequests(specialRequests.filter((r) => r !== req));
    } else {
      setSpecialRequests([...specialRequests, req]);
    }
  };

  const getFullPlan = (): BespokePlan => ({
    destinations: selectedDestinations.map(
      (id) => DESTINATIONS.find((d) => d.id === id)?.name || id
    ),
    travelStyle,
    duration,
    travelers,
    month,
    specialRequests,
    name,
    email,
    phoneOrWhatsApp,
    notes
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const plan = getFullPlan();
  const link = getBespokeWhatsApp(plan);
    await fetch("https://script.google.com/macros/s/AKfycbzssY4a1_U3S9jDYnRPWgm1QJartPXkqIdETmM0PUtJi7tXJedArTHANpafx9Twio1NzQ/exec", {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name,
    email,
    phone: phoneOrWhatsApp,
    destination: plan.destinations.join(", "),
    travelers: plan.travelers,
    month: plan.month,
    travelStyle: plan.travelStyle,
    specialRequests: plan.specialRequests.join(", "),
    notes,
  }),
});

  try {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F3E5AB', '#22C55E', '#EDE8D0']
    });
  } catch {}

  setSubmitted(true);
  window.open(link, '_blank');
};

  const handleOpenWhatsAppDirect = async () => {
  const plan = getFullPlan();
  const link = getBespokeWhatsApp(plan);

  await fetch("https://script.google.com/macros/s/AKfycbzssY4a1_U3S9jDYnRPWgm1QJartPXkqIdETmM0PUtJi7tXJedArTHANpafx9Twio1NzQ/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      phone: phoneOrWhatsApp,
      destination: plan.destinations.join(", "),
      travelers: plan.travelers,
      month: plan.month,
      travelStyle: plan.travelStyle,
      specialRequests: plan.specialRequests.join(", "),
      notes,
    }),
  });

  window.open(link, "_blank");
};

  return (
    <section id="planner" className="py-24 relative bg-[#061510] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-4 border border-[#D4AF37]/30">
            <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs font-cinzel font-semibold text-[#F3E5AB] tracking-widest uppercase">
              Bespoke Journey Atelier
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Design Your Tailor-Made <span className="text-gold-gradient font-serif-luxury italic font-normal">Ceylon Odyssey</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#B8CCC2] font-sans-modern leading-relaxed">
            Select your preferred wonders, traveling pace, and signature privileges. Joja’s private concierge will craft a customized master proposal within 2 hours.
          </p>
        </div>

        {submitted ? (
          <div 
            id="planner-success-box"
            className="glass-panel-gold rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto border border-[#D4AF37]/50 shadow-2xl"
          >
            <div className="w-16 h-16 rounded-full bg-[#0D382A] border-2 border-[#22C55E] text-[#22C55E] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#22C55E]/20">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-2">
              Proposal Request Received
            </h3>

            <p className="text-sm text-[#D1E0D9] leading-relaxed mb-6 font-sans-modern">
              Thank you{name ? `, ${name}` : ''}. Your bespoke Sri Lanka travel portfolio is currently being prepared with private chauffeur routing, villa reservations, and luxury privileges.
            </p>

            <div className="p-4 rounded-2xl bg-[#04100C]/80 border border-[#D4AF37]/20 text-left mb-6 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[#A6C4B8]">Selected Wonders:</span>
                <span className="font-bold text-[#F3E5AB]">
                  {selectedDestinations.map(id => DESTINATIONS.find(d => d.id === id)?.name).join(', ')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A6C4B8]">Travel Style:</span>
                <span className="font-bold text-[#F3E5AB]">{travelStyle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A6C4B8]">Duration & Guests:</span>
                <span className="font-bold text-[#F3E5AB]">{duration} • {travelers} Guests</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                id="planner-instant-whatsapp-btn"
                onClick={handleOpenWhatsAppDirect}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open Instant WhatsApp Summary</span>
              </button>

              <button
                id="planner-reset-btn"
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#071C15] text-[#F3E5AB] border border-[#D4AF37]/30 text-xs font-semibold hover:bg-[#0D382A]"
              >
                Create Another Itinerary
              </button>
            </div>
          </div>
        ) : (
          <form 
            id="bespoke-trip-form"
            onSubmit={handleSubmit}
            className="glass-panel-gold rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/30 shadow-2xl space-y-8"
          >
            {/* Step 1: Select Key Wonders */}
            <div>
              <label className="text-sm font-cinzel font-bold text-[#F3E5AB] uppercase tracking-wider flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                1. Select Desired Destinations (Choose 1 or more)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                {DESTINATIONS.map((dest) => {
                  const isSelected = selectedDestinations.includes(dest.id);
                  return (
                    <button
                      type="button"
                      key={dest.id}
                      id={`planner-dest-toggle-${dest.id}`}
                      onClick={() => toggleDestination(dest.id)}
                      className={`p-3 rounded-2xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between h-24 ${
                        isSelected
                          ? 'bg-[#0E3528] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/15 ring-1 ring-[#D4AF37]'
                          : 'bg-[#061510]/80 border-[#D4AF37]/20 text-[#A6C4B8] hover:border-[#D4AF37]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-[#A6C4B8] font-cinzel">{dest.sinhalaName}</span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />}
                      </div>
                      <span className={`text-xs font-bold font-cinzel ${isSelected ? 'text-[#F3E5AB]' : 'text-white'}`}>
                        {dest.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Travel Style & Duration */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-cinzel font-bold text-[#F3E5AB] uppercase tracking-wider block mb-2">
                  2. Travel Style
                </label>
                <select
                  id="planner-style-select"
                  value={travelStyle}
                  onChange={(e) => setTravelStyle(e.target.value as any)}
                  className="w-full px-4 py-3 rounded-xl bg-[#061510] border border-[#D4AF37]/30 text-xs font-semibold text-[#F3E5AB] focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="Ultra Luxury">Ultra Luxury & Relais & Châteaux</option>
                  <option value="Romantic Escape">Honeymoon & Romantic Sanctuary</option>
                  <option value="Wildlife Expedition">Wildlife, Leopard & Whale Safari</option>
                  <option value="Bespoke Family">Bespoke Family Multi-Generation</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-cinzel font-bold text-[#F3E5AB] uppercase tracking-wider block mb-2">
                  3. Approximate Duration
                </label>
                <select
                  id="planner-duration-select"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#061510] border border-[#D4AF37]/30 text-xs font-semibold text-[#F3E5AB] focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="5 - 7 Days (Highlights Expedition)">5 - 7 Days (Highlights)</option>
                  <option value="8 - 10 Days (Comprehensive Odyssey)">8 - 10 Days (Comprehensive)</option>
                  <option value="12 - 14 Days (Grand Island Immersion)">12 - 14 Days (Grand Immersion)</option>
                  <option value="15+ Days (Extended Private Estate)">15+ Days (Extended Private)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-cinzel font-bold text-[#F3E5AB] uppercase tracking-wider block mb-2">
                  4. Number of Guests
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 4, 6, 8].map((num) => (
                    <button
                      type="button"
                      key={num}
                      id={`planner-guests-${num}`}
                      onClick={() => setTravelers(num)}
                      className={`flex-1 py-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        travelers === num
                          ? 'bg-gold-gradient text-[#061510] border-[#D4AF37]'
                          : 'bg-[#061510] text-[#C0D1C8] border-[#D4AF37]/20 hover:border-[#D4AF37]/40'
                      }`}
                    >
                      {num === 8 ? '8+' : num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: VIP Privileges & Special Requests */}
            <div>
              <label className="text-xs font-cinzel font-bold text-[#F3E5AB] uppercase tracking-wider flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                5. Select Desired VIP Privileges & Experiences
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {availableSpecialRequests.map((req) => {
                  const active = specialRequests.includes(req);
                  return (
                    <button
                      type="button"
                      key={req}
                      id={`planner-privilege-${req.replace(/\s+/g, '-').toLowerCase()}`}
                      onClick={() => toggleSpecialRequest(req)}
                      className={`p-2.5 rounded-xl text-left text-[11px] font-medium border transition-all cursor-pointer flex items-center gap-2 ${
                        active
                          ? 'bg-[#0D382A] text-[#F3E5AB] border-[#D4AF37] ring-1 ring-[#D4AF37]/40'
                          : 'bg-[#061510]/60 text-[#A6C4B8] border-[#D4AF37]/15 hover:border-[#D4AF37]/30'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${active ? 'bg-[#D4AF37]' : 'bg-white/20'}`} />
                      <span className="line-clamp-1">{req}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Guest Contact Details */}
            <div className="pt-4 border-t border-[#D4AF37]/15">
              <label className="text-xs font-cinzel font-bold text-[#F3E5AB] uppercase tracking-wider block mb-3">
                6. Your Contact & Concierge Dispatch
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  id="planner-input-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-[#061510] border border-[#D4AF37]/30 text-xs text-white placeholder:text-[#648074] focus:outline-none focus:border-[#D4AF37]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  id="planner-input-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-[#061510] border border-[#D4AF37]/30 text-xs text-white placeholder:text-[#648074] focus:outline-none focus:border-[#D4AF37]"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp or Mobile (with country code)"
                  id="planner-input-phone"
                  value={phoneOrWhatsApp}
                  onChange={(e) => setPhoneOrWhatsApp(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-[#061510] border border-[#D4AF37]/30 text-xs text-white placeholder:text-[#648074] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
  <input
    type="date"
    id="planner-input-arrival"
    className="px-4 py-3 rounded-xl bg-[#061510] border border-[#D4AF37]/30 text-xs text-white"
  />

  <input
    type="number"
    min="1"
    placeholder="Guests"
    id="planner-input-guests"
    className="px-4 py-3 rounded-xl bg-[#061510] border border-[#D4AF37]/30 text-xs text-white placeholder:text-[#648074]"
  />
</div>

              <textarea
                placeholder="Any special celebrations (Anniversary, Honeymoon, Dietary, specific dates or requests)..."
                id="planner-input-notes"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#061510] border border-[#D4AF37]/30 text-xs text-white placeholder:text-[#648074] focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {/* Submit Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] text-[#A6C4B8] flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                Zero commitment • Instant bespoke quote within 2 hours
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  id="planner-direct-whatsapp-chat"
                  onClick={handleOpenWhatsAppDirect}
                  className="px-5 py-3 rounded-xl bg-[#0D382A] hover:bg-[#134D3A] text-[#86EFAC] border border-[#22C55E]/40 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#22C55E]" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  id="planner-submit-proposal-btn"
                  className="flex-1 sm:flex-none px-7 py-3 rounded-xl bg-gold-gradient hover:brightness-110 text-[#061510] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Bespoke Proposal</span>
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
