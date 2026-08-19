import React from 'react';
import { useApp } from '../../context/AppContext';
import { CreditCard, DollarSign, ArrowUpRight, CheckCircle2, Clock, ShieldCheck, AlertCircle, Download } from 'lucide-react';

export const AdminPayments: React.FC = () => {
  const { bookings, updatePaymentStatus, formatPrice } = useApp();

  const totalCollectedUSD = bookings
    .filter((b) => b.paymentStatus === 'Paid')
    .reduce((acc, b) => acc + b.totalUSD, 0);

  const totalPendingUSD = bookings
    .filter((b) => b.paymentStatus === 'Pending' || b.paymentStatus === 'Deposit Paid')
    .reduce((acc, b) => acc + b.totalUSD, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif-luxury text-2xl font-bold text-white">Payments & Financial Ledger</h2>
          <p className="text-xs text-stone-400">Escrow transactions, VIP bank wires, and card settlements</p>
        </div>

        <button
          type="button"
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#181B20] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold"
        >
          <Download className="w-4 h-4" />
          <span>Export Financial Statement</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-6 rounded-2xl bg-[#121418] border border-stone-800">
          <span className="text-xs uppercase font-bold text-stone-400 block mb-1">Total Settled</span>
          <span className="font-serif-luxury text-3xl font-bold text-emerald-400 font-mono">
            {formatPrice(totalCollectedUSD)}
          </span>
          <span className="text-[11px] text-stone-500 block mt-2">Cleared into merchant bank account</span>
        </div>

        <div className="p-6 rounded-2xl bg-[#121418] border border-stone-800">
          <span className="text-xs uppercase font-bold text-stone-400 block mb-1">Pending Invoices</span>
          <span className="font-serif-luxury text-3xl font-bold text-[#D4AF37] font-mono">
            {formatPrice(totalPendingUSD)}
          </span>
          <span className="text-[11px] text-stone-500 block mt-2">Awaiting wire / credit card confirmation</span>
        </div>

        <div className="p-6 rounded-2xl bg-[#121418] border border-stone-800">
          <span className="text-xs uppercase font-bold text-stone-400 block mb-1">Payment Gateways</span>
          <div className="text-xs text-stone-300 font-semibold space-y-1 mt-1">
            <div>💳 Stripe / Visa / Mastercard VIP (Active)</div>
            <div>🏦 Commercial Bank of Ceylon SWIFT Wire</div>
            <div>📱 Direct WhatsApp Concierge Payment Link</div>
          </div>
        </div>
      </div>

      {/* Transaction Records Table */}
      <div className="rounded-3xl bg-[#121418] border border-stone-800 overflow-hidden shadow-xl">
        <div className="p-6 border-b border-stone-800">
          <h3 className="font-serif-luxury text-lg font-bold text-white">Transaction Logs</h3>
          <p className="text-xs text-stone-400">Payment statuses matched to client bookings</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-[#0D0F13] border-b border-stone-800 text-stone-400 uppercase text-[10px] tracking-wider">
                <th className="py-3 px-4 font-bold">Transaction Ref</th>
                <th className="py-3 px-4 font-bold">Client & Itinerary</th>
                <th className="py-3 px-4 font-bold">Amount</th>
                <th className="py-3 px-4 font-bold">Payment Method</th>
                <th className="py-3 px-4 font-bold">Status</th>
                <th className="py-3 px-4 font-bold text-right">Update Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800/60">
              {bookings.map((b) => (
                <tr key={b.id} className="hover:bg-stone-800/30">
                  <td className="py-4 px-4 font-mono text-[#D4AF37]">
                    TXN-{b.bookingRef.replace('TWJ-', '')}
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-semibold text-white block">{b.name}</span>
                    <span className="text-[11px] text-stone-400">{b.packageName}</span>
                  </td>
                  <td className="py-4 px-4 font-mono font-bold text-white">
                    {b.currency} {b.totalConverted.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-stone-300">
                    {b.paymentStatus === 'Paid' ? 'Wire Transfer / SWIFT' : 'Credit Card (Stripe)'}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        b.paymentStatus === 'Paid'
                          ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/40'
                          : b.paymentStatus === 'Deposit Paid'
                          ? 'bg-blue-950/80 text-blue-400 border border-blue-500/40'
                          : 'bg-amber-950/80 text-[#D4AF37] border border-[#D4AF37]/40'
                      }`}
                    >
                      {b.paymentStatus}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <select
                      value={b.paymentStatus}
                      onChange={(e) => updatePaymentStatus(b.id, e.target.value as any)}
                      className="px-2.5 py-1 rounded-lg bg-[#181B20] border border-stone-700 text-stone-200 text-xs focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Deposit Paid">Deposit Paid</option>
                      <option value="Paid">Paid (Settled)</option>
                      <option value="Refunded">Refunded</option>
                    </select>
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
