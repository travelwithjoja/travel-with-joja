import React, { useState, useRef, useEffect } from 'react';
import { useApp, CURRENCY_CONFIGS } from '../../context/AppContext';
import { CurrencyCode } from '../../types';
import { ChevronDown, Globe } from 'lucide-react';

export const CurrencySwitcher: React.FC<{ variant?: 'nav' | 'footer' | 'pill' }> = ({ variant = 'nav' }) => {
  const { currency, setCurrency } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currencies: { code: CurrencyCode; label: string; flag: string }[] = [
    { code: 'USD', label: 'USD ($)', flag: '🇺🇸' },
    { code: 'EUR', label: 'EUR (€)', flag: '🇪🇺' },
    { code: 'GBP', label: 'GBP (£)', flag: '🇬🇧' },
    { code: 'AUD', label: 'AUD (A$)', flag: '🇦🇺' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentInfo = currencies.find((c) => c.code === currency) || currencies[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        id="currency-switcher-btn"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all text-xs font-semibold tracking-wider ${
          variant === 'pill'
            ? 'bg-[#181B20] text-[#D4AF37] border-[#D4AF37]/40 hover:border-[#D4AF37]'
            : 'bg-black/40 text-stone-200 border-stone-700/60 hover:border-[#D4AF37]/60 hover:text-white'
        }`}
      >
        <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span>{currentInfo.flag} {currency}</span>
        <ChevronDown className={`w-3 h-3 text-stone-400 transition-transform ${isOpen ? 'rotate-180 text-[#D4AF37]' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl bg-[#121418] border border-[#D4AF37]/30 shadow-2xl z-50 py-1.5 overflow-hidden backdrop-blur-xl">
          <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-[#D4AF37]/70 tracking-wider border-b border-stone-800">
            Select Currency
          </div>
          {currencies.map((c) => {
            const isSelected = currency === c.code;
            return (
              <button
                key={c.code}
                type="button"
                onClick={() => {
                  setCurrency(c.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors ${
                  isSelected
                    ? 'bg-[#D4AF37]/15 text-[#D4AF37] font-semibold'
                    : 'text-stone-300 hover:bg-stone-800/80 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base">{c.flag}</span>
                  <span>{c.code}</span>
                </span>
                <span className="text-[11px] text-stone-400 font-mono">
                  {CURRENCY_CONFIGS[c.code].symbol}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
