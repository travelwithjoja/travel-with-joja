import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Compass, Lock, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const AdminLoginModal: React.FC = () => {
  const { loginAdmin } = useApp();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginAdmin(username, password);
  };

  return (
    <div className="min-h-screen bg-[#060708] flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.15),rgba(255,255,255,0))]"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative max-w-md w-full rounded-3xl bg-[#0D0F13] border border-[#D4AF37]/40 shadow-2xl p-8 sm:p-10 text-white z-10"
      >
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#AA7C11] p-0.5 mx-auto mb-4 shadow-xl shadow-[#D4AF37]/20">
            <div className="w-full h-full rounded-full bg-[#0D0F12] flex items-center justify-center">
              <Compass className="w-7 h-7 text-[#D4AF37]" />
            </div>
          </div>
          <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-[0.25em] block mb-1">
            Ceylon Bespoke Portal
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Admin Management
          </h2>
          <p className="text-xs text-stone-400 mt-1">
            Access Travel With Joja reservations & dispatch console
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
              Username
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div className="p-3 rounded-xl bg-[#121418] border border-stone-800 text-[11px] text-stone-400">
            Default credentials pre-filled for direct review: <br />
            <strong className="text-[#D4AF37]">admin</strong> / <strong className="text-[#D4AF37]">admin123</strong>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-black font-bold uppercase tracking-wider text-xs hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4" />
            <span>Enter Administration Portal</span>
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-stone-800 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-[#D4AF37] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Public Website</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
