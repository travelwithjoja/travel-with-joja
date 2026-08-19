import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Users, Mail, Phone, MapPin, DollarSign, Crown, Sparkles, Search } from 'lucide-react';

export const AdminUsers: React.FC = () => {
  const { bookings, formatPrice } = useApp();
  const [search, setSearch] = useState('');

  // Derive unique client records from bookings
  const clientMap: Record<
    string,
    {
      name: string;
      email: string;
      phone: string;
      country: string;
      totalSpendUSD: number;
      tripsCount: number;
      lastTrip: string;
    }
  > = {};

  bookings.forEach((b) => {
    const key = b.email.toLowerCase();
    if (!clientMap[key]) {
      clientMap[key] = {
        name: b.name,
        email: b.email,
        phone: b.phone,
        country: b.country,
        totalSpendUSD: b.totalUSD,
        tripsCount: 1,
        lastTrip: b.date
      };
    } else {
      clientMap[key].totalSpendUSD += b.totalUSD;
      clientMap[key].tripsCount += 1;
    }
  });

  const clients = Object.values(clientMap).filter((c) => {
    if (!search) return true;
    return (
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.country.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif-luxury text-2xl font-bold text-white">VIP Clients & Connoisseurs</h2>
          <p className="text-xs text-stone-400">Directory of registered high-net-worth travelers and booking history</p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search VIP clients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#121418] border border-stone-800 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#D4AF37]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#121418] border border-stone-800 hover:border-[#D4AF37]/50 shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#AA7C11] p-0.5 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#0D0F12] flex items-center justify-center font-serif-luxury font-bold text-[#D4AF37]">
                    {client.name.charAt(0)}
                  </div>
                </div>

                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#181B20] border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider">
                  <Crown className="w-3 h-3" />
                  <span>VIP Tier {client.totalSpendUSD > 10000 ? 'Gold' : 'Silver'}</span>
                </div>
              </div>

              <h3 className="font-serif-luxury text-lg font-bold text-white mb-1">{client.name}</h3>
              <div className="space-y-1.5 text-xs text-stone-400 mb-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{client.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{client.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{client.country}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs">
              <div>
                <span className="text-[10px] uppercase text-stone-500 block">Total Lifetime Value</span>
                <span className="font-mono font-bold text-[#D4AF37] text-sm">
                  {formatPrice(client.totalSpendUSD)}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase text-stone-500 block">Trips Booked</span>
                <span className="text-white font-bold">{client.tripsCount} Expeditions</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
