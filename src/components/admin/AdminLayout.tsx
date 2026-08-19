import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {
  LayoutDashboard,
  CalendarCheck,
  Package,
  MapPin,
  Image as ImageIcon,
  Star,
  CreditCard,
  Users,
  Settings,
  Compass,
  LogOut,
  ExternalLink,
  Menu,
  X,
  Bell,
  Clock,
  ShieldCheck,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

export type AdminTab =
  | 'dashboard'
  | 'bookings'
  | 'packages'
  | 'destinations'
  | 'gallery'
  | 'reviews'
  | 'payments'
  | 'users'
  | 'settings';

export const AdminLayout: React.FC<{
  activeTab: AdminTab;
  setActiveTab: (tab: AdminTab) => void;
  children: React.ReactNode;
}> = ({ activeTab, setActiveTab, children }) => {
  const { logoutAdmin, bookings, reviews, settings } = useApp();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [sriLankaTime, setSriLankaTime] = useState('');

  // Live Colombo Local Time (GMT+5:30)
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Colombo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setSriLankaTime(new Intl.DateTimeFormat([], options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const pendingBookingsCount = bookings.filter((b) => b.status === 'Pending').length;
  const pendingReviewsCount = reviews.filter((r) => !r.approved).length;

  const navItems = [
    { id: 'dashboard' as AdminTab, label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    {
      id: 'bookings' as AdminTab,
      label: 'Bookings',
      icon: <CalendarCheck className="w-4 h-4" />,
      badge: pendingBookingsCount > 0 ? pendingBookingsCount : undefined
    },
    { id: 'packages' as AdminTab, label: 'Packages', icon: <Package className="w-4 h-4" /> },
    { id: 'destinations' as AdminTab, label: 'Destinations', icon: <MapPin className="w-4 h-4" /> },
    { id: 'gallery' as AdminTab, label: 'Gallery', icon: <ImageIcon className="w-4 h-4" /> },
    {
      id: 'reviews' as AdminTab,
      label: 'Reviews',
      icon: <Star className="w-4 h-4" />,
      badge: pendingReviewsCount > 0 ? pendingReviewsCount : undefined
    },
    { id: 'payments' as AdminTab, label: 'Payments', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'users' as AdminTab, label: 'VIP Clients', icon: <Users className="w-4 h-4" /> },
    { id: 'settings' as AdminTab, label: 'Settings', icon: <Settings className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-[#090A0C] text-[#E8E6E3] flex flex-col lg:flex-row font-sans">
      {/* Desktop Luxury Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col bg-[#0D0F13] border-r border-[#D4AF37]/20 flex-shrink-0">
        {/* Brand Header */}
        <div className="p-6 border-b border-stone-800/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#AA7C11] p-0.5 shadow-md">
              <div className="w-full h-full rounded-full bg-[#0D0F12] flex items-center justify-center">
                <Compass className="w-4 h-4 text-[#D4AF37]" />
              </div>
            </div>
            <div>
              <h2 className="font-serif-luxury text-base font-bold tracking-wider text-white">
                TRAVEL WITH <span className="text-[#D4AF37]">JOJA</span>
              </h2>
              <p className="text-[9px] uppercase tracking-widest text-stone-400 font-semibold">
                Admin Management Portal
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#D4AF37]/20 to-transparent text-[#D4AF37] border-l-2 border-[#D4AF37] font-bold'
                    : 'text-stone-400 hover:text-white hover:bg-stone-800/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={isActive ? 'text-[#D4AF37]' : 'text-stone-400'}>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && (
                  <span className="px-2 py-0.5 rounded-full bg-[#D4AF37] text-black text-[10px] font-black">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-stone-800/80 space-y-2">
          <Link
            to="/"
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#181B20] border border-stone-700 hover:border-[#D4AF37] text-stone-300 hover:text-white text-xs font-semibold transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>View Public Website</span>
          </Link>

          <button
            type="button"
            onClick={logoutAdmin}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-transparent hover:bg-rose-950/40 text-stone-400 hover:text-rose-400 text-xs font-semibold transition-all"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header Bar */}
        <header className="h-16 px-4 sm:px-8 bg-[#0D0F13]/90 border-b border-stone-800 backdrop-blur-xl flex items-center justify-between sticky top-0 z-30">
          {/* Mobile Menu Trigger & Title */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#181B20] border border-stone-800 text-stone-300"
              aria-label="Toggle admin sidebar"
            >
              {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <h1 className="font-serif-luxury text-lg sm:text-xl font-bold text-white capitalize">
              {activeTab} Management
            </h1>
          </div>

          {/* Right Header Statuses */}
          <div className="flex items-center gap-4 text-xs">
            {/* Live Colombo Time */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181B20] border border-stone-800 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-mono text-[11px]">Colombo: {sriLankaTime}</span>
            </div>

            {/* Public site link */}
            <Link
              to="/"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black text-xs font-bold shadow-md hover:scale-105 transition-transform"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </header>

        {/* Mobile Drawer */}
        {mobileSidebarOpen && (
          <div className="lg:hidden bg-[#0D0F13] border-b border-[#D4AF37]/30 p-4 space-y-1 z-40">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold ${
                  activeTab === item.id
                    ? 'bg-[#D4AF37]/20 text-[#D4AF37] font-bold'
                    : 'text-stone-300 hover:bg-stone-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && (
                  <span className="px-2 py-0.5 rounded-full bg-[#D4AF37] text-black text-[10px] font-black">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}

            <div className="pt-4 flex gap-2">
              <Link
                to="/"
                className="flex-1 py-2 rounded-xl bg-[#181B20] text-center text-xs text-stone-300 font-semibold"
              >
                View Website
              </Link>
              <button
                onClick={logoutAdmin}
                className="py-2 px-4 rounded-xl bg-rose-950/40 text-rose-300 text-xs font-semibold"
              >
                Logout
              </button>
            </div>
          </div>
        )}

        {/* Tab Content Container */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
