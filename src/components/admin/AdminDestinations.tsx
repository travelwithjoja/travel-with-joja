import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Destination } from '../../types';
import { Plus, Edit, Trash2, MapPin, Calendar, Clock, DollarSign, Sparkles, Upload, X } from 'lucide-react';

export const AdminDestinations: React.FC = () => {
  const { destinations, addDestination, updateDestination, deleteDestination, formatPrice, showToast } = useApp();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDest, setEditingDest] = useState<Destination | null>(null);

  // Form
  const [name, setName] = useState('');
  const [region, setRegion] = useState('Cultural Triangle');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [highlights, setHighlights] = useState('Private Archaeological Expert, Sunrise Ascent');
  const [luxuryActivities, setLuxuryActivities] = useState('Helicopter Transfer, Champagne High Tea');
  const [bestSeason, setBestSeason] = useState('December to April');
  const [idealDuration, setIdealDuration] = useState('2 - 3 Days');
  const [priceFromUSD, setPriceFromUSD] = useState(1400);

  const handleOpenAdd = () => {
    setEditingDest(null);
    setName('');
    setRegion('Cultural Triangle');
    setTagline('');
    setDescription('');
    setImage('https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80');
    setHighlights('Private VIP Access, Royal History Tour, 5-Star Bungalow Stay');
    setLuxuryActivities('Helicopter Flight, Private Sommelier Tasting');
    setBestSeason('December to April');
    setIdealDuration('2 - 3 Days');
    setPriceFromUSD(1400);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (dest: Destination) => {
    setEditingDest(dest);
    setName(dest.name);
    setRegion(dest.region);
    setTagline(dest.tagline);
    setDescription(dest.description);
    setImage(dest.image);
    setHighlights(dest.highlights.join(', '));
    setLuxuryActivities(dest.luxuryActivities.join(', '));
    setBestSeason(dest.bestSeason);
    setIdealDuration(dest.idealDuration);
    setPriceFromUSD(dest.priceFromUSD);
    setIsModalOpen(true);
  };

  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        showToast('Image file loaded.');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !image) return;

    const hlArr = highlights.split(',').map((s) => s.trim()).filter(Boolean);
    const actArr = luxuryActivities.split(',').map((s) => s.trim()).filter(Boolean);

    if (editingDest) {
      updateDestination(editingDest.id, {
        name,
        region,
        tagline,
        description,
        image,
        highlights: hlArr,
        luxuryActivities: actArr,
        bestSeason,
        idealDuration,
        priceFromUSD: Number(priceFromUSD)
      });
    } else {
      addDestination({
        name,
        region,
        tagline,
        description,
        image,
        highlights: hlArr,
        luxuryActivities: actArr,
        bestSeason,
        idealDuration,
        priceFromUSD: Number(priceFromUSD),
        rating: 4.9,
        reviewsCount: 1
      });
    }

    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif-luxury text-2xl font-bold text-white">Destinations & Sanctuaries</h2>
          <p className="text-xs text-stone-400">Manage Sri Lanka luxury regions, bespoke highlights, and rates</p>
        </div>

        <button
          type="button"
          onClick={handleOpenAdd}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black text-xs font-bold uppercase tracking-wider hover:shadow-lg transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add Destination</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {destinations.map((d) => (
          <div
            key={d.id}
            className="rounded-2xl bg-[#121418] border border-stone-800 hover:border-[#D4AF37]/50 overflow-hidden flex flex-col justify-between shadow-xl transition-all"
          >
            <div>
              <div className="relative h-44">
                <img src={d.image} alt={d.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] uppercase font-bold text-[#D4AF37] border border-[#D4AF37]/30">
                  {d.region}
                </span>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between text-xs mb-1">
                  <h3 className="font-serif-luxury text-base font-bold text-white">{d.name}</h3>
                  <span className="font-mono font-bold text-[#D4AF37]">
                    {formatPrice(d.priceFromUSD)}
                  </span>
                </div>
                <p className="text-xs text-stone-400 italic mb-3 line-clamp-1">"{d.tagline}"</p>
                <div className="text-[11px] text-stone-500 space-y-1">
                  <div><strong>Best Season:</strong> {d.bestSeason}</div>
                  <div><strong>Duration:</strong> {d.idealDuration}</div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#090A0C] border-t border-stone-800 flex justify-between items-center">
              <span className="text-[10px] text-stone-400">⭐ {d.rating}</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleOpenEdit(d)}
                  className="p-1.5 rounded-lg bg-[#181B20] hover:bg-stone-700 text-stone-300 hover:text-[#D4AF37] border border-stone-700"
                  title="Edit Destination"
                >
                  <Edit className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (confirm(`Remove destination ${d.name}?`)) {
                      deleteDestination(d.id);
                    }
                  }}
                  className="p-1.5 rounded-lg bg-[#181B20] hover:bg-rose-950 text-stone-400 hover:text-rose-400 border border-stone-700"
                  title="Delete Destination"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-xl rounded-3xl bg-[#121418] border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#181B20] border border-stone-700 text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif-luxury text-xl font-bold text-white mb-4">
              {editingDest ? 'Edit Destination' : 'Add Destination Sanctuary'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Destination Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Region Category</label>
                  <input
                    type="text"
                    required
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Tagline</label>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Description</label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                ></textarea>
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Cover Image URL / Upload *</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="url"
                    required
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                  <label className="px-3 py-2 rounded-xl bg-[#181B20] border border-stone-700 text-stone-300 cursor-pointer flex items-center gap-1">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload</span>
                    <input type="file" accept="image/*" onChange={handleImageFileUpload} className="hidden" />
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Best Season</label>
                  <input
                    type="text"
                    value={bestSeason}
                    onChange={(e) => setBestSeason(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Ideal Duration</label>
                  <input
                    type="text"
                    value={idealDuration}
                    onChange={(e) => setIdealDuration(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Starting Price ($)</label>
                  <input
                    type="number"
                    value={priceFromUSD}
                    onChange={(e) => setPriceFromUSD(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Highlights (comma-separated)</label>
                <input
                  type="text"
                  value={highlights}
                  onChange={(e) => setHighlights(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-stone-800">
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
                  Save Destination
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
