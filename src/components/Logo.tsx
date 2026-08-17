import React from 'react';
import jojaLogo from '../assets/images/travel_with_joja_logo.png.png';

interface LogoProps {
  className?: string;
  imageSizeClass?: string;
  showText?: boolean;
  textClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  imageSizeClass = 'w-10 h-10',
  showText = true,
  textClassName = '',
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className={`relative ${imageSizeClass} rounded-full overflow-hidden border border-[#C5A059]/60 shadow-lg shadow-[#C5A059]/15 shrink-0 bg-[#051109]`}>
        <img
          src={jojaLogo}
          alt="Travel With Joja Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>
      {showText && (
        <div className={`flex flex-col ${textClassName}`}>
          <span className="text-base sm:text-lg font-light tracking-[0.2em] uppercase text-white group-hover:text-[#C5A059] transition-colors duration-300 flex items-center gap-2">
            TRAVEL WITH JOJA
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
          </span>
          <span className="text-[9px] tracking-[0.3em] text-[#C5A059]/80 uppercase font-sans-modern">
            Private Luxury Expeditions
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
