import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { GalleryItem } from '../../types';
import { Plus, Trash2, Image as ImageIcon, Upload, X, MapPin } from 'lucide-react';

export const AdminGallery: React.FC = () => {
  const { gallery, addGalleryItem, deleteGalleryItem, showToast } = useApp();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('Sigiriya');
  const [category, setCategory] = useState<GalleryItem['category']>('Heritage');
  const [image, setImage] = useState('');
  const [caption, setCaption] = useState('');

  const handleOpenAdd = () => {
    setTitle('');
    setLocation('Sigiriya');
    setCategory('Heritage');
    setImage('https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80');
    setCaption('');
    setIsModalOpen(true);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        showToast('Image uploaded.');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !image) return;

    addGalleryItem({
      title,
      location,
      category,
      image,
      caption: caption || title
    });

    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif-luxury text-2xl font-bold text-white">Media & Gallery Assets</h2>
          <p className="text-xs text-stone-400">High-resolution photography displayed on public lightbox</p>
        </div>

        <button
          type="button"
          onClick={handleOpenAdd}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black text-xs font-bold uppercase tracking-wider hover:shadow-lg transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Upload Image</span>
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="group rounded-2xl bg-[#121418] border border-stone-800 hover:border-[#D4AF37]/50 overflow-hidden shadow-xl flex flex-col justify-between"
          >
            <div className="relative h-48">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] uppercase font-bold text-[#D4AF37] border border-[#D4AF37]/30">
                {item.category}
              </span>
            </div>

            <div className="p-4">
              <div className="flex items-center gap-1 text-[11px] text-[#D4AF37] mb-1 font-semibold">
                <MapPin className="w-3 h-3" /> {item.location}
              </div>
              <h4 className="font-serif-luxury text-sm font-bold text-white leading-snug mb-1">
                {item.title}
              </h4>
              <p className="text-[11px] text-stone-400 line-clamp-2">{item.caption}</p>
            </div>

            <div className="p-3 bg-[#090A0C] border-t border-stone-800 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  if (confirm(`Delete image "${item.title}"?`)) {
                    deleteGalleryItem(item.id);
                  }
                }}
                className="p-1.5 rounded-lg bg-[#181B20] hover:bg-rose-950 text-stone-400 hover:text-rose-400 border border-stone-700 transition-colors"
                title="Delete image"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#121418] border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#181B20] border border-stone-700 text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif-luxury text-xl font-bold text-white mb-4">
              Upload Gallery Artwork
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Image Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sunrise Over Sigiriya Citadel"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Location</label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as GalleryItem['category'])}
                    className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  >
                    <option value="Heritage">Heritage</option>
                    <option value="Wildlife">Wildlife</option>
                    <option value="Beaches">Beaches</option>
                    <option value="Tea Country">Tea Country</option>
                    <option value="Luxury Stays">Luxury Stays</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Image URL / File *</label>
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
                    <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                  </label>
                </div>
                {image && (
                  <img src={image} alt="Preview" className="h-28 w-full object-cover rounded-xl border border-stone-800" />
                )}
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Caption</label>
                <textarea
                  rows={2}
                  placeholder="Atmospheric caption for the lightbox modal..."
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                ></textarea>
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
                  Add To Gallery
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
