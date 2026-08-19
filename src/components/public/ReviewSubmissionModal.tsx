import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Star, Send, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const ReviewSubmissionModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { addReview, packages } = useApp();

  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [tripTaken, setTripTaken] = useState(packages[0]?.title || 'The Signature 10-Day Ceylon Grand Odyssey');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !text || !title) return;

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

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-lg rounded-3xl bg-[#121418] border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#181B20] border border-stone-700 hover:border-[#D4AF37] text-stone-400 hover:text-white transition-colors"
          aria-label="Close review modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-1">
          <Sparkles className="w-4 h-4" />
          <span>Guest Journal</span>
        </div>
        <h3 className="font-serif-luxury text-2xl font-bold text-white mb-2">
          Share Your Travel Review
        </h3>
        <p className="text-xs text-stone-400 mb-6">
          Your feedback inspires fellow travelers and helps us continually refine our bespoke standards.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] uppercase font-bold text-stone-400 block mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Lady Clara Ravenscroft"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="text-[11px] uppercase font-bold text-stone-400 block mb-1">
                City / Country *
              </label>
              <input
                type="text"
                required
                placeholder="London, United Kingdom"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] uppercase font-bold text-stone-400 block mb-1">
              Bespoke Trip Taken
            </label>
            <select
              value={tripTaken}
              onChange={(e) => setTripTaken(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
            >
              {packages.map((p) => (
                <option key={p.id} value={p.title}>
                  {p.title}
                </option>
              ))}
              <option value="Custom Tailored Private Expedition">Custom Tailored Private Expedition</option>
            </select>
          </div>

          {/* Rating stars */}
          <div>
            <label className="text-[11px] uppercase font-bold text-stone-400 block mb-1">
              Overall Rating ({rating} / 5)
            </label>
            <div className="flex items-center gap-2 py-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="p-1 hover:scale-125 transition-transform"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= rating ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-stone-700'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-[11px] uppercase font-bold text-stone-400 block mb-1">
              Review Headline *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Unforgettable helicopter views and private tea planter villa..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="text-[11px] uppercase font-bold text-stone-400 block mb-1">
              Your Experience Story *
            </label>
            <textarea
              rows={4}
              required
              placeholder="Share the highlights of your journey, favorite properties, private guides..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0C] border border-stone-800 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#D4AF37]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold text-xs uppercase tracking-wider hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Submit For Concierge Approval</span>
          </button>
        </form>
      </motion.div>
    </div>
  );
};
