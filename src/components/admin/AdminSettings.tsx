import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Settings,
  Shield,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Save,
  RotateCcw,
  Sparkles,
  Lock,
  Globe,
  Upload
} from 'lucide-react';

export const AdminSettings: React.FC = () => {
  const { settings, updateSettings, currency, setCurrency, resetToInitialData, showToast } = useApp();

  // Local state for settings form
  const [siteName, setSiteName] = useState(settings.siteName);
  const [siteTagline, setSiteTagline] = useState(settings.siteTagline);
  const [logoUrl, setLogoUrl] = useState(settings.logoUrl);
  const [whatsappNumber, setWhatsappNumber] = useState(settings.whatsappNumber || '+94710914522');
  const [whatsappGreeting, setWhatsappGreeting] = useState(settings.whatsappGreeting || "Hi Travel With Joja, I'm interested in booking a Sri Lanka tour.");
  const [contactPhone, setContactPhone] = useState(settings.contactPhone);
  const [contactEmail, setContactEmail] = useState(settings.contactEmail || 'travelwithjoja38@gmail.com');
  const [officeAddress, setOfficeAddress] = useState(settings.officeAddress);
  const [heroHeading, setHeroHeading] = useState(settings.heroHeading);
  const [heroSubheading, setHeroSubheading] = useState(settings.heroSubheading);

  // Admin password state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSaveGeneral = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings({
      siteName,
      siteTagline,
      logoUrl,
      whatsappNumber,
      whatsappGreeting,
      contactPhone,
      contactEmail,
      officeAddress,
      heroHeading,
      heroSubheading
    });
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoUrl(reader.result as string);
        showToast('Logo updated.');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 4) {
      showToast('Password must be at least 4 characters.', 'error');
      return;
    }
    if (newPassword !== confirmPassword) {
      showToast('New passwords do not match.', 'error');
      return;
    }

    updateSettings({ adminPassword: newPassword });
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    showToast('Admin password successfully updated!');
  };

  const handleResetData = () => {
    if (confirm('Are you sure you want to reset all destinations, packages, and bookings to default luxury sample data?')) {
      resetToInitialData();
    }
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h2 className="font-serif-luxury text-2xl font-bold text-white">System & Brand Configuration</h2>
        <p className="text-xs text-stone-400">Configure global website details, WhatsApp numbers, currency, and security</p>
      </div>

      {/* General Settings */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#121418] border border-stone-800 shadow-xl">
        <h3 className="font-serif-luxury text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#D4AF37]" />
          <span>Brand Identity & Public Headers</span>
        </h3>

        <form onSubmit={handleSaveGeneral} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                Website Name
              </label>
              <input
                type="text"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                Tagline
              </label>
              <input
                type="text"
                value={siteTagline}
                onChange={(e) => setSiteTagline(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
              />
            </div>
          </div>

          {/* Logo URL / File */}
          <div>
            <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
              Brand Logo URL or File
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={logoUrl}
                onChange={(e) => setLogoUrl(e.target.value)}
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
              />
              <label className="px-4 py-2 rounded-xl bg-[#181B20] border border-stone-700 text-stone-300 hover:text-white cursor-pointer flex items-center gap-1.5 flex-shrink-0">
                <Upload className="w-3.5 h-3.5" />
                <span>Upload</span>
                <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                Hero Heading Title
              </label>
              <input
                type="text"
                value={heroHeading}
                onChange={(e) => setHeroHeading(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                Hero Subheading
              </label>
              <input
                type="text"
                value={heroSubheading}
                onChange={(e) => setHeroSubheading(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
              />
            </div>
          </div>

          {/* Contact Details & WhatsApp */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div>
              <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                WhatsApp Floating Booking Number
              </label>
              <input
                type="text"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                placeholder="+94710914522"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                Display Concierge Phone
              </label>
              <input
                type="text"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                Inquiry Support Email
              </label>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
              WhatsApp Pre-filled Greeting Message
            </label>
            <input
              type="text"
              value={whatsappGreeting}
              onChange={(e) => setWhatsappGreeting(e.target.value)}
              placeholder="Hi Travel With Joja, I'm interested in booking a Sri Lanka tour."
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
              HQ Office Address
            </label>
            <input
              type="text"
              value={officeAddress}
              onChange={(e) => setOfficeAddress(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold uppercase tracking-wider hover:shadow-lg"
            >
              <Save className="w-4 h-4" />
              <span>Save General Settings</span>
            </button>
          </div>
        </form>
      </div>

      {/* Security & Password */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#121418] border border-stone-800 shadow-xl">
        <h3 className="font-serif-luxury text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Lock className="w-4 h-4 text-[#D4AF37]" />
          <span>Admin Access Credentials</span>
        </h3>

        <form onSubmit={handleChangePassword} className="space-y-4 text-xs max-w-md">
          <div>
            <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
              New Password
            </label>
            <input
              type="password"
              required
              placeholder="Enter new administrator password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              required
              placeholder="Repeat new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
            />
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#181B20] border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold uppercase tracking-wider transition-all"
          >
            <Lock className="w-4 h-4" />
            <span>Update Password</span>
          </button>
        </form>
      </div>

      {/* Database Maintenance & Reset */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#121418] border border-rose-900/40 shadow-xl">
        <h3 className="font-serif-luxury text-lg font-bold text-rose-300 mb-2 flex items-center gap-2">
          <RotateCcw className="w-4 h-4 text-rose-400" />
          <span>Reset Sample Database</span>
        </h3>
        <p className="text-xs text-stone-400 mb-4 leading-relaxed">
          Restore all Sigiriya, Ella, Galle, Yala, packages, gallery items, and luxury reviews to the pristine default curated catalog.
        </p>

        <button
          type="button"
          onClick={handleResetData}
          className="px-5 py-2.5 rounded-xl bg-rose-950/80 hover:bg-rose-900 text-rose-200 border border-rose-700 text-xs font-bold transition-all"
        >
          Reset All Records to Default
        </button>
      </div>
    </div>
  );
};
