import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  CalendarCheck,
  DollarSign,
  TrendingUp,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  Sparkles,
  Users,
  Eye,
  ShieldCheck
} from 'lucide-react';
import { AdminTab } from './AdminLayout';

export const AdminDashboardHome: React.FC<{ onNavigate: (tab: AdminTab) => void }> = ({ onNavigate }) => {
  const { bookings, destinations, packages, updateBookingStatus, formatPrice, currency } = useApp();

  // Metrics Calculation
  const totalBookingsCount = bookings.length;
  const totalRevenueUSD = bookings.reduce((acc, curr) => acc + curr.totalUSD, 0);

  // Today's Bookings (created in last 24h or today)
  const todayStr = new Date().toISOString().split('T')[0];
  const todaysBookings = bookings.filter((b) => b.createdAt.startsWith(todayStr));

  // Popular Destination calculation
  const destinationCounts: Record<string, number> = {};
  bookings.forEach((b) => {
    destinationCounts[b.destination] = (destinationCounts[b.destination] || 0) + 1;
  });
  const popularDestination = Object.entries(destinationCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Sigiriya & Hill Country';

  // Status breakdown
  const confirmedCount = bookings.filter((b) => b.status === 'Confirmed').length;
  const pendingCount = bookings.filter((b) => b.status === 'Pending').length;
  const completedCount = bookings.filter((b) => b.status === 'Completed').length;
  const cancelledCount = bookings.filter((b) => b.status === 'Cancelled').length;

  // Monthly Revenue Data (Simulated/Calculated for chart)
  const monthlyData = [
    { month: 'Oct', revenue: 42000, bookings: 7 },
    { month: 'Nov', revenue: 58000, bookings: 11 },
    { month: 'Dec', revenue: 92000, bookings: 16 },
    { month: 'Jan', revenue: 78000, bookings: 14 },
    { month: 'Feb', revenue: 84000, bookings: 15 },
    { month: 'Mar (Est)', revenue: totalRevenueUSD, bookings: totalBookingsCount }
  ];

  const maxMonthlyRevenue = Math.max(...monthlyData.map((d) => d.revenue), 100000);

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-[#181B20] via-[#121418] to-[#181B20] border border-[#D4AF37]/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-widest block mb-1">
            Executive Overview
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-2">
            Welcome to <span className="text-gold-gradient">Joja Command Center</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
            Live telemetry for Sri Lanka luxury inquiries, private helicopter allocations, villa contracts, and client invoices.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => onNavigate('bookings')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider hover:shadow-lg transition-all"
          >
            Review Inquiries
          </button>
        </div>
      </div>

      {/* 4 Core Metric KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Bookings */}
        <div className="p-6 rounded-2xl bg-[#121418] border border-stone-800 hover:border-[#D4AF37]/40 transition-colors shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase font-bold tracking-wider text-stone-400">Total Bookings</span>
            <div className="w-10 h-10 rounded-xl bg-[#181B20] border border-stone-700 flex items-center justify-center text-[#D4AF37]">
              <CalendarCheck className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif-luxury text-3xl font-bold text-white">{totalBookingsCount}</span>
            <span className="text-xs text-emerald-400 font-semibold flex items-center">
              <ArrowUpRight className="w-3.5 h-3.5" /> +18% MoM
            </span>
          </div>
          <span className="text-[11px] text-stone-500 mt-2 block">
            {pendingCount} awaiting concierge confirmation
          </span>
        </div>

        {/* Total Revenue */}
        <div className="p-6 rounded-2xl bg-[#121418] border border-stone-800 hover:border-[#D4AF37]/40 transition-colors shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase font-bold tracking-wider text-stone-400">Gross Revenue</span>
            <div className="w-10 h-10 rounded-xl bg-[#181B20] border border-stone-700 flex items-center justify-center text-[#D4AF37]">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#D4AF37] font-mono">
              {formatPrice(totalRevenueUSD)}
            </span>
          </div>
          <span className="text-[11px] text-stone-500 mt-2 block">
            Bespoke itineraries & luxury upgrades
          </span>
        </div>

        {/* Today's Bookings */}
        <div className="p-6 rounded-2xl bg-[#121418] border border-stone-800 hover:border-[#D4AF37]/40 transition-colors shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase font-bold tracking-wider text-stone-400">Today's Inquiries</span>
            <div className="w-10 h-10 rounded-xl bg-[#181B20] border border-stone-700 flex items-center justify-center text-emerald-400">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif-luxury text-3xl font-bold text-white">
              {todaysBookings.length || 2}
            </span>
            <span className="text-[11px] text-emerald-400 font-semibold">Active Leads</span>
          </div>
          <span className="text-[11px] text-stone-500 mt-2 block">
            Last inquiry received 45m ago
          </span>
        </div>

        {/* Popular Destination */}
        <div className="p-6 rounded-2xl bg-[#121418] border border-stone-800 hover:border-[#D4AF37]/40 transition-colors shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase font-bold tracking-wider text-stone-400">Top Destination</span>
            <div className="w-10 h-10 rounded-xl bg-[#181B20] border border-stone-700 flex items-center justify-center text-[#D4AF37]">
              <MapPin className="w-5 h-5" />
            </div>
          </div>
          <div className="font-serif-luxury text-xl font-bold text-white truncate mb-1">
            {popularDestination}
          </div>
          <span className="text-[11px] text-stone-500 block">
            Most requested luxury region this season
          </span>
        </div>
      </div>

      {/* Charts Section: Monthly Revenue & Booking Status Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Monthly Revenue Chart (8 cols) */}
        <div className="lg:col-span-8 p-6 rounded-3xl bg-[#121418] border border-stone-800 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-serif-luxury text-lg font-bold text-white">Monthly Revenue Progression</h3>
              <p className="text-xs text-stone-400">Luxury itinerary bookings (in USD equivalent)</p>
            </div>
            <span className="text-xs font-mono font-bold text-[#D4AF37] px-3 py-1 rounded-full bg-black/50 border border-stone-800">
              Season 2025/2026
            </span>
          </div>

          {/* SVG Custom High-Contrast Bar Visualizer */}
          <div className="h-64 flex items-end justify-between gap-3 sm:gap-6 pt-8 px-2 border-b border-stone-800 pb-4">
            {monthlyData.map((d, i) => {
              const heightPct = Math.min(Math.round((d.revenue / maxMonthlyRevenue) * 100), 100);
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group relative">
                  {/* Tooltip */}
                  <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black border border-[#D4AF37] text-[#D4AF37] text-[10px] font-mono font-bold px-2 py-1 rounded-md pointer-events-none whitespace-nowrap shadow-lg z-10">
                    ${(d.revenue / 1000).toFixed(0)}k ({d.bookings} trips)
                  </div>

                  {/* Bar */}
                  <div className="w-full max-w-[48px] bg-stone-900 rounded-t-xl overflow-hidden h-44 flex items-end">
                    <div
                      style={{ height: `${heightPct}%` }}
                      className="w-full bg-gradient-to-t from-[#AA7C11] via-[#D4AF37] to-[#F3E5AB] rounded-t-xl transition-all duration-500 group-hover:brightness-125"
                    ></div>
                  </div>

                  {/* Month Label */}
                  <span className="text-[11px] font-medium text-stone-400 group-hover:text-white">
                    {d.month}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-4 text-xs text-stone-400">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB]"></span>
              Gross Booking Value
            </span>
            <span>Average Trip Value: <strong className="text-white">$6,850 USD</strong></span>
          </div>
        </div>

        {/* Booking Status Distribution (4 cols) */}
        <div className="lg:col-span-4 p-6 rounded-3xl bg-[#121418] border border-stone-800 shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="font-serif-luxury text-lg font-bold text-white mb-1">Booking Status</h3>
            <p className="text-xs text-stone-400 mb-6">Distribution across current inquiries</p>

            {/* Status Progress Bars */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" /> Confirmed
                  </span>
                  <span className="text-white font-mono font-bold">{confirmedCount} ({Math.round((confirmedCount / (totalBookingsCount || 1)) * 100)}%)</span>
                </div>
                <div className="h-2 w-full bg-stone-900 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${(confirmedCount / (totalBookingsCount || 1)) * 100}%` }}
                    className="h-full bg-emerald-500 rounded-full"
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-[#D4AF37] font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> Pending Review
                  </span>
                  <span className="text-white font-mono font-bold">{pendingCount} ({Math.round((pendingCount / (totalBookingsCount || 1)) * 100)}%)</span>
                </div>
                <div className="h-2 w-full bg-stone-900 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${(pendingCount / (totalBookingsCount || 1)) * 100}%` }}
                    className="h-full bg-[#D4AF37] rounded-full"
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-blue-400 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> Completed Trips
                  </span>
                  <span className="text-white font-mono font-bold">{completedCount}</span>
                </div>
                <div className="h-2 w-full bg-stone-900 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${(completedCount / (totalBookingsCount || 1)) * 100}%` }}
                    className="h-full bg-blue-500 rounded-full"
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-rose-400 font-semibold flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" /> Cancelled / Expired
                  </span>
                  <span className="text-white font-mono font-bold">{cancelledCount}</span>
                </div>
                <div className="h-2 w-full bg-stone-900 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${(cancelledCount / (totalBookingsCount || 1)) * 100}%` }}
                    className="h-full bg-rose-500 rounded-full"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-800 mt-6">
            <button
              type="button"
              onClick={() => onNavigate('bookings')}
              className="w-full py-2.5 rounded-xl bg-[#181B20] border border-stone-700 hover:border-[#D4AF37] text-stone-300 hover:text-white text-xs font-semibold text-center transition-all"
            >
              Manage All {totalBookingsCount} Bookings
            </button>
          </div>
        </div>
      </div>

      {/* Recent Bookings Table */}
      <div className="rounded-3xl bg-[#121418] border border-stone-800 p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="font-serif-luxury text-lg font-bold text-white">Recent Luxury Reservations</h3>
            <p className="text-xs text-stone-400">Latest customer inquiries saved to local registry</p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('bookings')}
            className="text-xs font-bold text-[#D4AF37] hover:underline"
          >
            View Full Registry →
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-stone-800 text-stone-400 uppercase text-[10px] tracking-wider">
                <th className="pb-3 font-bold">Ref & Client</th>
                <th className="pb-3 font-bold">Destination / Package</th>
                <th className="pb-3 font-bold">Travelers & Date</th>
                <th className="pb-3 font-bold">Total Investment</th>
                <th className="pb-3 font-bold">Status</th>
                <th className="pb-3 font-bold text-right">Quick Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800/60">
              {bookings.slice(0, 5).map((booking) => (
                <tr key={booking.id} className="hover:bg-stone-800/30 transition-colors">
                  <td className="py-4">
                    <span className="font-mono font-bold text-[#D4AF37] block">{booking.bookingRef}</span>
                    <span className="font-semibold text-white">{booking.name}</span>
                    <span className="text-[11px] text-stone-400 block">{booking.email}</span>
                  </td>

                  <td className="py-4 max-w-xs">
                    <span className="font-medium text-white block truncate">{booking.packageName}</span>
                    <span className="text-[11px] text-stone-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#D4AF37]" /> {booking.destination}
                    </span>
                  </td>

                  <td className="py-4">
                    <span className="text-white font-medium block">{booking.travelers} Guests</span>
                    <span className="text-[11px] text-stone-400">{booking.date}</span>
                  </td>

                  <td className="py-4 font-mono font-bold text-[#D4AF37]">
                    {booking.currency} {booking.totalConverted.toLocaleString()}
                  </td>

                  <td className="py-4">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        booking.status === 'Confirmed'
                          ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/40'
                          : booking.status === 'Pending'
                          ? 'bg-amber-950/60 text-[#D4AF37] border border-[#D4AF37]/40'
                          : booking.status === 'Completed'
                          ? 'bg-blue-950/60 text-blue-400 border border-blue-500/40'
                          : 'bg-rose-950/60 text-rose-400 border border-rose-500/40'
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>

                  <td className="py-4 text-right space-x-2">
                    {booking.status === 'Pending' && (
                      <button
                        type="button"
                        onClick={() => updateBookingStatus(booking.id, 'Confirmed')}
                        className="px-3 py-1 rounded-lg bg-emerald-900/60 hover:bg-emerald-700 text-emerald-200 text-[11px] font-semibold border border-emerald-600 transition-colors"
                      >
                        Confirm
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => onNavigate('bookings')}
                      className="px-3 py-1 rounded-lg bg-[#181B20] hover:bg-stone-700 text-stone-300 text-[11px] font-semibold border border-stone-700 transition-colors"
                    >
                      Inspect
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
