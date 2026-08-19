import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Review } from '../../types';
import { Star, CheckCircle, XCircle, Trash2, Plus, X, MessageSquare, ShieldCheck } from 'lucide-react';

export const AdminReviews: React.FC = () => {
  const { reviews, approveReview, deleteReview, addReview, showToast } = useApp();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [tripTaken, setTripTaken] = useState('10-Day Ceylon Grand Odyssey');

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !text) return;

    addReview({
      author,
      location: location || 'United Kingdom',
      avatar: `https://images.unsplash.com/photo-${1534528741775 + Math.floor(Math.random() * 1000)}?auto=format&fit=crop&w=200&q=80`,
      rating,
      title,
      text,
      tripTaken,
      verified: true
    });

    setIsModalOpen(false);
    showToast(`Added review by ${author}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif-luxury text-2xl font-bold text-white">Client Reviews & Testimonials</h2>
          <p className="text-xs text-stone-400">Moderate guest journals and featured public reviews</p>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black text-xs font-bold uppercase tracking-wider hover:shadow-lg transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add Client Review</span>
        </button>
      </div>

      {/* Reviews Table / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
              rev.approved
                ? 'bg-[#121418] border-stone-800'
                : 'bg-[#181510] border-[#D4AF37]/50 shadow-lg'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]/40"
                  />
                  <div>
                    <h4 className="font-serif-luxury text-sm font-bold text-white leading-tight">
                      {rev.author}
                    </h4>
                    <span className="text-[11px] text-stone-400">{rev.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < rev.rating ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-stone-700'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="text-xs font-mono text-[#D4AF37] mb-2 font-semibold">
                Trip: {rev.tripTaken}
              </div>

              <h5 className="text-xs font-bold text-white mb-1.5 font-serif-luxury">
                "{rev.title}"
              </h5>
              <p className="text-xs text-stone-300 leading-relaxed italic mb-4">
                "{rev.text}"
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-stone-800/80 text-xs">
              <span className="text-[11px] text-stone-500">{rev.date}</span>

              <div className="flex items-center gap-2">
                {!rev.approved ? (
                  <button
                    type="button"
                    onClick={() => approveReview(rev.id)}
                    className="px-3 py-1.5 rounded-lg bg-emerald-900/80 hover:bg-emerald-700 text-emerald-200 text-xs font-semibold flex items-center gap-1 border border-emerald-600 transition-colors"
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Approve</span>
                  </button>
                ) : (
                  <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Approved
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => {
                    if (confirm(`Delete review from ${rev.author}?`)) {
                      deleteReview(rev.id);
                    }
                  }}
                  className="p-1.5 rounded-lg bg-[#181B20] hover:bg-rose-950 text-stone-400 hover:text-rose-400 border border-stone-700"
                  title="Delete review"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Review Modal */}
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
              Add Verified Guest Review
            </h3>

            <form onSubmit={handleAddReview} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Author Name *</label>
                  <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Location *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Zurich, Switzerland"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Trip Taken</label>
                  <input
                    type="text"
                    value={tripTaken}
                    onChange={(e) => setTripTaken(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Rating</label>
                  <select
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                  >
                    <option value={5}>5 Stars (Exceptional)</option>
                    <option value={4}>4 Stars (Very Good)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Headline *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Beyond perfection: our private helicopter safari"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#090A0C] border border-stone-800 text-white focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-stone-400 block mb-1">Review Content *</label>
                <textarea
                  rows={4}
                  required
                  value={text}
                  onChange={(e) => setText(e.target.value)}
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
                  Publish Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
