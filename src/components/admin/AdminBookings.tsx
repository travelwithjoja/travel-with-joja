import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { Booking } from '../../types';
import {
  Search,
  Filter,
  Download,
  Trash2,
  Edit,
  CheckCircle,
  XCircle,
  Eye,
  Calendar,
  Users,
  MapPin,
  Mail,
  Phone,
  FileText,
  DollarSign,
  Printer,
  X,
  Sparkles
} from 'lucide-react';

export const AdminBookings: React.FC = () => {
  const {
    bookings,
    updateBookingStatus,
    updatePaymentStatus,
    updateBooking,
    deleteBooking,
    showToast,
    formatPrice
  } = useApp();

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [editingBooking, setEditingBooking] = useState<Booking | null>(null);

  // Filtered bookings
  const filteredBookings = useMemo(() => {
    return bookings.filter((b) => {
      const matchStatus = statusFilter === 'All' || b.status === statusFilter;
      const matchSearch =
        search.trim() === '' ||
        b.bookingRef.toLowerCase().includes(search.toLowerCase()) ||
        b.name.toLowerCase().includes(search.toLowerCase()) ||
        b.email.toLowerCase().includes(search.toLowerCase()) ||
        b.destination.toLowerCase().includes(search.toLowerCase()) ||
        b.packageName.toLowerCase().includes(search.toLowerCase()) ||
        b.country.toLowerCase().includes(search.toLowerCase());
      return matchStatus && matchSearch;
    });
  }, [bookings, statusFilter, search]);

  // Export CSV Functionality
  const handleExportCSV = () => {
    if (bookings.length === 0) {
      showToast('No booking records to export.', 'info');
      return;
    }

    const headers = ['Booking Ref', 'Client Name', 'Email', 'Phone', 'Country', 'Destination', 'Package', 'Travelers', 'Departure Date', 'Status', 'Total USD', 'Currency', 'Payment Status', 'Created At'];
    const rows = filteredBookings.map((b) => [
      b.bookingRef,
      `"${b.name.replace(/"/g, '""')}"`,
      b.email,
      `"${b.phone}"`,
      b.country,
      `"${b.destination.replace(/"/g, '""')}"`,
      `"${b.packageName.replace(/"/g, '""')}"`,
      b.travelers,
      b.date,
      b.status,
      b.totalUSD,
      b.currency,
      b.paymentStatus,
      b.createdAt
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Travel_With_Joja_Bookings_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast(`Exported ${filteredBookings.length} booking records to CSV!`);
  };

  // Save Edit Booking
  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBooking) return;

    updateBooking(editingBooking.id, editingBooking);
    setEditingBooking(null);
    setSelectedBooking(editingBooking);
  };

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif-luxury text-2xl font-bold text-white">Client Reservations & Inquiries</h2>
          <p className="text-xs text-stone-400">Total {bookings.length} reservations recorded in local storage database</p>
        </div>

        <button
          type="button"
          onClick={handleExportCSV}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#181B20] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] hover:text-white text-xs font-semibold shadow-md transition-all"
        >
          <Download className="w-4 h-4" />
          <span>Export Bookings CSV</span>
        </button>
      </div>

      {/* Search and Filters Bar */}
      <div className="p-4 rounded-2xl bg-[#121418] border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by Ref, Name, Destination, Email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#D4AF37]"
          />
        </div>

        {/* Status Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          {['All', 'Pending', 'Confirmed', 'Completed', 'Cancelled'].map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                statusFilter === st
                  ? 'bg-[#D4AF37] text-black font-bold shadow-md'
                  : 'bg-[#181B20] text-stone-300 hover:text-white border border-stone-800'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Bookings Table */}
      <div className="rounded-3xl bg-[#121418] border border-stone-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-[#0D0F13] border-b border-stone-800 text-stone-400 uppercase text-[10px] tracking-wider">
                <th className="py-3.5 px-4 font-bold">Booking Ref</th>
                <th className="py-3.5 px-4 font-bold">Client Information</th>
                <th className="py-3.5 px-4 font-bold">Journey / Package</th>
                <th className="py-3.5 px-4 font-bold">Date & Pax</th>
                <th className="py-3.5 px-4 font-bold">Price & Payment</th>
                <th className="py-3.5 px-4 font-bold">Status</th>
                <th className="py-3.5 px-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800/60">
              {filteredBookings.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-stone-400">
                    No booking records found matching your filters.
                  </td>
                </tr>
              ) : (
                filteredBookings.map((b) => (
                  <tr key={b.id} className="hover:bg-stone-800/25 transition-colors">
                    {/* Booking Ref */}
                    <td className="py-4 px-4 font-mono font-bold text-[#D4AF37]">
                      {b.bookingRef}
                      <span className="text-[10px] text-stone-500 font-sans block mt-0.5">
                        {new Date(b.createdAt).toLocaleDateString()}
                      </span>
                    </td>

                    {/* Client Info */}
                    <td className="py-4 px-4">
                      <span className="font-semibold text-white block">{b.name}</span>
                      <span className="text-[11px] text-stone-400 block">{b.email}</span>
                      <span className="text-[10px] text-stone-500">{b.country} • {b.phone}</span>
                    </td>

                    {/* Journey */}
                    <td className="py-4 px-4 max-w-xs">
                      <span className="font-medium text-white block truncate">{b.packageName}</span>
                      <span className="text-[11px] text-[#D4AF37] flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {b.destination}
                      </span>
                    </td>

                    {/* Date & Travelers */}
                    <td className="py-4 px-4">
                      <span className="text-white font-medium block">{b.travelers} Guests</span>
                      <span className="text-[11px] text-stone-400">{b.date}</span>
                    </td>

                    {/* Price */}
                    <td className="py-4 px-4 font-mono">
                      <span className="font-bold text-[#D4AF37] block">
                        {b.currency} {b.totalConverted.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-stone-400">(${b.totalUSD} USD)</span>
                    </td>

                    {/* Status */}
                    <td className="py-4 px-4">
                      <select
                        value={b.status}
                        onChange={(e) => updateBookingStatus(b.id, e.target.value as Booking['status'])}
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border focus:outline-none cursor-pointer ${
                          b.status === 'Confirmed'
                            ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40'
                            : b.status === 'Pending'
                            ? 'bg-amber-950/80 text-[#D4AF37] border-[#D4AF37]/40'
                            : b.status === 'Completed'
                            ? 'bg-blue-950/80 text-blue-400 border-blue-500/40'
                            : 'bg-rose-950/80 text-rose-400 border-rose-500/40'
                        }`}
                      >
                        <option value="Pending" className="bg-[#121418] text-[#D4AF37]">Pending</option>
                        <option value="Confirmed" className="bg-[#121418] text-emerald-400">Confirmed</option>
                        <option value="Completed" className="bg-[#121418] text-blue-400">Completed</option>
                        <option value="Cancelled" className="bg-[#121418] text-rose-400">Cancelled</option>
                      </select>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-4 text-right space-x-1.5">
                      {b.status === 'Pending' && (
                        <button
                          type="button"
                          onClick={() => updateBookingStatus(b.id, 'Confirmed')}
                          className="px-2.5 py-1 rounded-lg bg-emerald-900/60 hover:bg-emerald-700 text-emerald-200 text-[11px] font-semibold border border-emerald-600 transition-colors"
                          title="Confirm this booking"
                        >
                          Confirm
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedBooking(b)}
                        className="p-1.5 rounded-lg bg-[#181B20] hover:bg-stone-700 text-stone-300 hover:text-white border border-stone-700 transition-colors"
                        title="View Full Booking Details / Voucher"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setEditingBooking(b)}
                        className="p-1.5 rounded-lg bg-[#181B20] hover:bg-stone-700 text-stone-300 hover:text-[#D4AF37] border border-stone-700 transition-colors"
                        title="Edit Booking"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (confirm(`Are you sure you want to delete reservation ${b.bookingRef}?`)) {
                            deleteBooking(b.id);
                          }
                        }}
                        className="p-1.5 rounded-lg bg-[#181B20] hover:bg-rose-950/80 text-stone-400 hover:text-rose-400 border border-stone-700 transition-colors"
                        title="Delete record"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Booking Details / Voucher Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#121418] border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedBooking(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#181B20] border border-stone-700 hover:border-[#D4AF37] text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-stone-800 pb-4 mb-6">
              <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-widest block mb-1">
                Travel With Joja • Official Guest Voucher
              </span>
              <div className="flex items-center justify-between">
                <h3 className="font-serif-luxury text-2xl font-bold text-white">
                  Reservation {selectedBooking.bookingRef}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    selectedBooking.status === 'Confirmed'
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-500'
                      : 'bg-amber-950 text-[#D4AF37] border border-[#D4AF37]'
                  }`}
                >
                  {selectedBooking.status}
                </span>
              </div>
            </div>

            {/* Voucher Grid Details */}
            <div className="grid grid-cols-2 gap-4 text-xs bg-[#090A0C] p-5 rounded-2xl border border-stone-800 mb-6 font-mono">
              <div>
                <span className="text-stone-400 block text-[10px]">Client Name:</span>
                <span className="text-white font-bold text-sm">{selectedBooking.name}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px]">Email Address:</span>
                <span className="text-white">{selectedBooking.email}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px]">Phone / WhatsApp:</span>
                <span className="text-white">{selectedBooking.phone}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px]">Country:</span>
                <span className="text-white">{selectedBooking.country}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px]">Destination:</span>
                <span className="text-[#D4AF37] font-bold">{selectedBooking.destination}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px]">Bespoke Package:</span>
                <span className="text-white">{selectedBooking.packageName}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px]">Travelers & Dates:</span>
                <span className="text-white">{selectedBooking.travelers} Guests • From {selectedBooking.date}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px]">Total Investment:</span>
                <span className="text-[#D4AF37] font-bold text-sm">
                  {selectedBooking.currency} {selectedBooking.totalConverted.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Special Requests */}
            {selectedBooking.specialRequests && (
              <div className="p-4 rounded-xl bg-[#090A0C] border border-stone-800 text-xs mb-6">
                <span className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                  Client Special Requests & Preferences:
                </span>
                <p className="text-stone-300 leading-relaxed italic">
                  "{selectedBooking.specialRequests}"
                </p>
              </div>
            )}

            {/* Admin Notes */}
            {selectedBooking.adminNotes && (
              <div className="p-4 rounded-xl bg-[#181B20] border border-[#D4AF37]/30 text-xs mb-6">
                <span className="text-[10px] uppercase font-bold text-[#D4AF37] block mb-1">
                  Concierge Operational Notes:
                </span>
                <p className="text-stone-300">{selectedBooking.adminNotes}</p>
              </div>
            )}

            <div className="flex justify-between items-center pt-4 border-t border-stone-800">
              <button
                type="button"
                onClick={() => window.print()}
                className="py-2.5 px-4 rounded-xl bg-[#181B20] border border-stone-700 hover:border-[#D4AF37] text-white text-xs font-semibold flex items-center gap-2"
              >
                <Printer className="w-4 h-4" />
                Print Voucher
              </button>

              <div className="flex gap-2">
                {selectedBooking.status === 'Pending' && (
                  <button
                    type="button"
                    onClick={() => {
                      updateBookingStatus(selectedBooking.id, 'Confirmed');
                      setSelectedBooking({ ...selectedBooking, status: 'Confirmed' });
                    }}
                    className="py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold"
                  >
                    Confirm Booking
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedBooking(null)}
                  className="py-2.5 px-5 rounded-xl bg-[#D4AF37] hover:bg-[#F3E5AB] text-black text-xs font-bold"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Booking Modal */}
      {editingBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-xl rounded-3xl bg-[#121418] border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setEditingBooking(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#181B20] border border-stone-700 text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif-luxury text-xl font-bold text-white mb-4">
              Edit Booking Record ({editingBooking.bookingRef})
            </h3>

            <form onSubmit={handleSaveEdit} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Client Name</label>
                  <input
                    type="text"
                    required
                    value={editingBooking.name}
                    onChange={(e) => setEditingBooking({ ...editingBooking, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={editingBooking.email}
                    onChange={(e) => setEditingBooking({ ...editingBooking, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Phone</label>
                  <input
                    type="text"
                    value={editingBooking.phone}
                    onChange={(e) => setEditingBooking({ ...editingBooking, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Country</label>
                  <input
                    type="text"
                    value={editingBooking.country}
                    onChange={(e) => setEditingBooking({ ...editingBooking, country: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Travelers</label>
                  <input
                    type="number"
                    min={1}
                    value={editingBooking.travelers}
                    onChange={(e) => setEditingBooking({ ...editingBooking, travelers: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Date</label>
                  <input
                    type="date"
                    value={editingBooking.date}
                    onChange={(e) => setEditingBooking({ ...editingBooking, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Total (USD)</label>
                  <input
                    type="number"
                    value={editingBooking.totalUSD}
                    onChange={(e) => setEditingBooking({ ...editingBooking, totalUSD: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Status</label>
                <select
                  value={editingBooking.status}
                  onChange={(e) => setEditingBooking({ ...editingBooking, status: e.target.value as Booking['status'] })}
                  className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                >
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Concierge Admin Notes</label>
                <textarea
                  rows={2}
                  value={editingBooking.adminNotes || ''}
                  onChange={(e) => setEditingBooking({ ...editingBooking, adminNotes: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-stone-800">
                <button
                  type="button"
                  onClick={() => setEditingBooking(null)}
                  className="px-4 py-2 rounded-xl bg-[#181B20] text-stone-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
