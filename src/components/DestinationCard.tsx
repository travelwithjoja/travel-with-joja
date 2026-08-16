import React, { useState, useRef } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Compass, 
  ArrowRight, 
  Calendar, 
  MessageCircle,
  Eye
} from 'lucide-react';
import { Destination } from '../types';
import { getDestinationWhatsApp } from '../utils/whatsapp';

interface DestinationCardProps {
  destination: Destination;
  onSelect: (destination: Destination) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onSelect
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate tilt angles (limit between -10 and 10 degrees for elegant luxury feel)
    const rX = ((mouseY / height) - 0.5) * -16;
    const rY = ((mouseX / width) - 0.5) * 16;
    
    setRotateX(rX);
    setRotateY(rY);
    setGlarePosition({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      id={`destination-card-wrapper-${destination.id}`}
      className="perspective-1000 w-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        id={`destination-card-${destination.id}`}
        style={{
          transform: isHovered 
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)` 
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
        className="relative rounded-2xl overflow-hidden bg-[#051109]/90 border border-white/10 shadow-xl transition-all duration-300 group cursor-pointer flex flex-col h-full select-none"
        onClick={() => onSelect(destination)}
      >
        {/* Dynamic 3D Glare Lighting Overlay */}
        <div 
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-2xl"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(197, 160, 89, 0.2) 0%, transparent 65%)`
          }}
        />

        {/* Large Destination Image Container */}
        <div className="relative h-72 sm:h-80 w-full overflow-hidden">
          <img
            src={destination.heroImage}
            alt={destination.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          {/* Luxury Gradient Vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#051109] via-[#051109]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

          {/* Region / Category Pill */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-[#051109]/85 text-[#C5A059] border border-white/10 backdrop-blur-md shadow-md">
              {destination.tag}
            </span>
          </div>

          {/* Sinhala Native Script Watermark Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className="px-2.5 py-1 rounded-full text-xs font-serif-luxury text-[#C5A059] bg-[#051109]/75 border border-white/10 backdrop-blur-md">
              {destination.sinhalaName}
            </span>
          </div>

          {/* Fast Information Overlay at bottom of image */}
          <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-xs text-white/80">
            <div className="flex items-center gap-1.5 bg-[#051109]/80 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-sm">
              <Calendar className="w-3 h-3 text-[#C5A059]" />
              <span className="text-[11px] font-medium">{destination.recommendedDuration}</span>
            </div>
            <div className="flex items-center gap-1 bg-[#051109]/80 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-sm text-[11px]">
              <MapPin className="w-3 h-3 text-[#C5A059]" />
              <span>{destination.region.split('/')[0]}</span>
            </div>
          </div>
        </div>

        {/* Card Body: Title, Description, Highlights */}
        <div className="p-6 flex flex-col flex-grow justify-between bg-[#051109]/90 border-t border-white/5">
          <div>
            {/* Destination Name */}
            <div className="flex items-baseline justify-between mb-1.5">
              <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#C5A059] transition-colors">
                {destination.name}
              </h3>
              <span className="text-xs text-white/50 font-serif-luxury italic">
                {destination.elevationOrClimate.split('•')[0]}
              </span>
            </div>

            {/* Tagline */}
            <p className="text-xs font-semibold text-[#C5A059] mb-3">
              {destination.tagline}
            </p>

            {/* Description */}
            <p className="text-xs text-white/60 font-sans-modern leading-relaxed line-clamp-3 mb-4">
              {destination.description}
            </p>

            {/* Top Curated Inclusions / Highlights */}
            <div className="space-y-1.5 mb-5 pt-3 border-t border-white/10">
              {destination.highlights.slice(0, 2).map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-[11px] text-white/80">
                  <Sparkles className="w-3 h-3 text-[#C5A059] shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="pt-2 flex items-center gap-2">
            <button
              id={`dest-view-details-${destination.id}`}
              onClick={(e) => {
                e.stopPropagation();
                onSelect(destination);
              }}
              className="flex-1 py-2.5 px-4 rounded-full bg-white/5 hover:bg-[#C5A059] text-[#C5A059] hover:text-black border border-[#C5A059]/30 text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-200"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Explore Wonder</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              id={`dest-whatsapp-inquire-${destination.id}`}
              href={getDestinationWhatsApp(destination)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2.5 rounded-full bg-[#C5A059]/10 hover:bg-[#C5A059] text-[#C5A059] hover:text-black border border-[#C5A059]/30 transition-colors"
              title="Inquire via WhatsApp"
              aria-label={`Inquire about ${destination.name} on WhatsApp`}
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
