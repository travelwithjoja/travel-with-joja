import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TravelPackage } from '../../types';
import {
  Plus,
  Edit,
  Trash2,
  Package as PackageIcon,
  Clock,
  DollarSign,
  Star,
  Image as ImageIcon,
  Check,
  X,
  Upload
} from 'lucide-react';

export const AdminPackages: React.FC = () => {
  const { packages, addPackage, updatePackage, deletePackage, formatPrice, showToast } = useApp();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPkg, setEditingPkg] = useState<TravelPackage | null>(null);

  // Form State
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState<string>('Cultural Luxury');
  const [duration, setDuration] = useState('7 Days / 6 Nights');
  const [priceUSD, setPriceUSD] = useState(3800);
  const [image, setImage] = useState('');
  const [destinationsCovered, setDestinationsCovered] = useState('Sigiriya, Kandy, Galle');
  const [transportType, setTransportType] = useState('Private Chauffeur & VIP Helicopter');
  const [inclusions, setInclusions] = useState('5-Star Luxury Stays, Private Chauffeur, VIP Fast-Track Entry');
  const [exclusions, setExclusions] = useState('International flights, Gratuities');
  const [featured, setFeatured] = useState(false);

  const handleOpenAdd = () => {
    setEditingPkg(null);
    setTitle('');
    setSubtitle('');
    setCategory('Cultural Luxury');
    setDuration('7 Days / 6 Nights');
    setPriceUSD(3800);
    setImage('https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80');
    setDestinationsCovered('Sigiriya, Kandy, Galle');
    setTransportType('Private Chauffeur & VIP Helicopter');
    setInclusions('5-Star Luxury Stays, Private Chauffeur, VIP Fast-Track Entry, Daily Champagne Breakfast');
    setExclusions('International flights, Personal purchases, Gratuities');
    setFeatured(false);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (pkg: TravelPackage) => {
    setEditingPkg(pkg);
    setTitle(pkg.title);
    setSubtitle(pkg.subtitle);
    setCategory(pkg.category);
    setDuration(pkg.duration);
    setPriceUSD(pkg.priceUSD);
    setImage(pkg.image);
    setDestinationsCovered(pkg.destinationsCovered.join(', '));
    setTransportType(pkg.transportType);
    setInclusions(pkg.inclusions.join(', '));
    setExclusions(pkg.exclusions.join(', '));
    setFeatured(Boolean(pkg.featured));
    setIsModalOpen(true);
  };

  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        showToast('Image uploaded successfully.');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !image) return;

    const inclusionsArr = inclusions.split(',').map((s) => s.trim()).filter(Boolean);
    const exclusionsArr = exclusions.split(',').map((s) => s.trim()).filter(Boolean);
    const destArr = destinationsCovered.split(',').map((s) => s.trim()).filter(Boolean);

    if (editingPkg) {
      updatePackage(editingPkg.id, {
        title,
        subtitle,
        category,
        duration,
        priceUSD: Number(priceUSD),
        image,
        destinationsCovered: destArr,
        transportType,
        inclusions: inclusionsArr,
        exclusions: exclusionsArr,
        featured
      });
    } else {
      addPackage({
        title,
        subtitle,
        category,
        duration,
        durationDays: 7,
        maxTravelers: 8,
        priceUSD: Number(priceUSD),
        image,
        gallery: [image],
        destinationsCovered: destArr,
        transportType,
        inclusions: inclusionsArr,
        exclusions: exclusionsArr,
        featured,
        rating: 5.0,
        reviewsCount: 1,
        itinerary: [
          {
            day: 1,
            title: 'VIP Arrival & Luxury Check-in',
            description: 'Private airport VIP lounge reception and direct chauffeur transfer to luxury villa.',
            stay: 'Boutique Luxury Villa',
            meals: 'Dinner'
          },
          {
            day: 2,
            title: 'Private Exploration',
            description: 'Exclusive guided tour with high tea and sundowner drinks.',
            stay: 'Boutique Luxury Villa',
            meals: 'Breakfast & Dinner'
          }
        ]
      });
    }

    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif-luxury text-2xl font-bold text-white">Bespoke Travel Packages</h2>
          <p className="text-xs text-stone-400">Configure curated itineraries, pricing tiers, and photo assets</p>
        </div>

        <button
          type="button"
          onClick={handleOpenAdd}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black text-xs font-bold uppercase tracking-wider hover:shadow-lg transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Package</span>
        </button>
      </div>

      {/* Package Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="rounded-2xl bg-[#121418] border border-stone-800 hover:border-[#D4AF37]/50 overflow-hidden flex flex-col justify-between shadow-xl transition-all"
          >
            <div>
              <div className="relative h-48">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] uppercase font-bold text-[#D4AF37] border border-[#D4AF37]/30">
                    {pkg.category}
                  </span>
                  {pkg.featured && (
                    <span className="px-2.5 py-1 rounded-full bg-[#D4AF37] text-black text-[10px] uppercase font-black">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
                  <span className="flex items-center gap-1 font-semibold text-stone-300">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> {pkg.duration}
                  </span>
                  <span className="font-mono font-bold text-[#D4AF37] text-sm">
                    {formatPrice(pkg.priceUSD)}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-base font-bold text-white mb-1.5 leading-snug">
                  {pkg.title}
                </h3>
                <p className="text-xs text-stone-400 line-clamp-2 mb-4 leading-relaxed">
                  {pkg.subtitle}
                </p>

                <div className="text-[11px] text-stone-500 space-y-1 border-t border-stone-800/80 pt-3">
                  <div><strong>Regions:</strong> {pkg.destinationsCovered.join(', ')}</div>
                  <div><strong>Transport:</strong> {pkg.transportType}</div>
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="p-4 bg-[#090A0C] border-t border-stone-800 flex justify-between items-center">
              <span className="text-[11px] text-stone-400">
                ⭐ {pkg.rating} ({pkg.reviewsCount} reviews)
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleOpenEdit(pkg)}
                  className="p-1.5 rounded-lg bg-[#181B20] hover:bg-stone-700 text-stone-300 hover:text-[#D4AF37] border border-stone-700 transition-colors"
                  title="Edit Package"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (confirm(`Are you sure you want to remove package "${pkg.title}"?`)) {
                      deletePackage(pkg.id);
                    }
                  }}
                  className="p-1.5 rounded-lg bg-[#181B20] hover:bg-rose-950 text-stone-400 hover:text-rose-400 border border-stone-700 transition-colors"
                  title="Delete Package"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#121418] border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#181B20] border border-stone-700 text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif-luxury text-xl font-bold text-white mb-4">
              {editingPkg ? 'Edit Luxury Package' : 'Create New Luxury Package'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                    Package Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Royal Ceylon Tea & Coast Private Expedition"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  >
                    <option value="Cultural Luxury">Cultural Luxury</option>
                    <option value="Wildlife & Safari">Wildlife & Safari</option>
                    <option value="Hill Country & Tea">Hill Country & Tea</option>
                    <option value="Coastal & Yacht">Coastal & Yacht</option>
                    <option value="Wellness & Ayurveda">Wellness & Ayurveda</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                  Tagline / Subtitle
                </label>
                <input
                  type="text"
                  placeholder="e.g. Relais & Châteaux Tea Trails, Private Leopard Safari, and Beach Sanctuary"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                    Duration
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 10 Days / 9 Nights"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                    Base Price (USD per person)
                  </label>
                  <input
                    type="number"
                    required
                    min={500}
                    value={priceUSD}
                    onChange={(e) => setPriceUSD(Number(e.target.value))}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Image URL & Upload */}
              <div>
                <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                  Cover Image URL or File Upload *
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="url"
                    required
                    placeholder="https://images.unsplash.com/..."
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="flex-1 px-3.5 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                  <label className="px-4 py-2 rounded-xl bg-[#181B20] border border-stone-700 hover:border-[#D4AF37] text-stone-300 hover:text-white cursor-pointer flex items-center gap-1.5 flex-shrink-0">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload</span>
                    <input type="file" accept="image/*" onChange={handleImageFileUpload} className="hidden" />
                  </label>
                </div>
                {image && (
                  <img src={image} alt="Preview" className="h-20 w-36 object-cover rounded-lg border border-stone-800" />
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                    Destinations Covered (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={destinationsCovered}
                    onChange={(e) => setDestinationsCovered(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                    Transport Type
                  </label>
                  <input
                    type="text"
                    value={transportType}
                    onChange={(e) => setTransportType(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                  Inclusions (comma-separated)
                </label>
                <textarea
                  rows={2}
                  value={inclusions}
                  onChange={(e) => setInclusions(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                ></textarea>
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                  Exclusions (comma-separated)
                </label>
                <input
                  type="text"
                  value={exclusions}
                  onChange={(e) => setExclusions(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="pkgFeatured"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="w-4 h-4 rounded border-stone-800 text-[#D4AF37] focus:ring-0"
                />
                <label htmlFor="pkgFeatured" className="text-xs text-white font-semibold cursor-pointer">
                  Feature this package on Public Homepage
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-stone-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#181B20] text-stone-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold"
                >
                  {editingPkg ? 'Update Package' : 'Publish Package'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
