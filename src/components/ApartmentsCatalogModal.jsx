import React, { useState } from 'react';
import { X, ArrowRight, Check, SlidersHorizontal, ArrowUpRight } from 'lucide-react';

const units = [
  {
    id: 'unit-01',
    development: 'Bhava Tower',
    typology: '3 BHK Luxury Flat',
    bedrooms: '3 Bedrooms',
    size: '1,650 Sq. Ft.',
    completion: '4Q 2026',
    price: '₹55 Lacs Onwards',
    floor: 'Floors 4 – 10',
    features: ['Vastu Compliant', 'Double Balconies', 'Park View'],
    svgPlan: (
      <svg viewBox="0 0 400 240" className="w-full h-full stroke-ink/70 fill-none" strokeWidth="1.2">
        <rect x="20" y="20" width="360" height="200" strokeDasharray="3 3" opacity="0.3" />
        {/* Living room */}
        <rect x="30" y="30" width="160" height="110" />
        <text x="110" y="85" textAnchor="middle" className="text-[10px] font-mono fill-ink/60 stroke-none">LIVING & DINING</text>
        {/* Master Bedroom */}
        <rect x="200" y="30" width="170" height="90" />
        <text x="285" y="75" textAnchor="middle" className="text-[10px] font-mono fill-ink/60 stroke-none">MASTER BEDROOM</text>
        {/* Bedroom 2 */}
        <rect x="200" y="130" width="170" height="90" />
        <text x="285" y="175" textAnchor="middle" className="text-[10px] font-mono fill-ink/60 stroke-none">BEDROOM 2</text>
        {/* Balcony */}
        <rect x="30" y="150" width="80" height="70" />
        <text x="70" y="185" textAnchor="middle" className="text-[9px] font-mono fill-ink/60 stroke-none">BALCONY</text>
        {/* Kitchen */}
        <rect x="120" y="150" width="70" height="70" />
        <text x="155" y="185" textAnchor="middle" className="text-[9px] font-mono fill-ink/60 stroke-none">KITCHEN</text>
      </svg>
    ),
  },
  {
    id: 'unit-02',
    development: 'Nawal Shiv Bhava Tower',
    typology: 'Boutique AP Colony Residence',
    bedrooms: '3 Bedrooms',
    size: '2,250 Sq. Ft.',
    completion: 'Ready / 2026',
    price: '₹65 Lacs Onwards',
    floor: 'Exclusive Low-Density',
    features: ['Private Foyer', 'Temple View', '12 Families Only'],
    svgPlan: (
      <svg viewBox="0 0 400 240" className="w-full h-full stroke-ink/70 fill-none" strokeWidth="1.2">
        <rect x="20" y="20" width="360" height="200" strokeDasharray="3 3" opacity="0.3" />
        {/* Grand Hall */}
        <rect x="30" y="30" width="180" height="130" />
        <text x="120" y="95" textAnchor="middle" className="text-[10px] font-mono fill-ink/60 stroke-none">GRAND LIVING SUITE</text>
        {/* Private Master Suite */}
        <rect x="220" y="30" width="150" height="110" />
        <text x="295" y="85" textAnchor="middle" className="text-[10px] font-mono fill-ink/60 stroke-none">MASTER SUITE</text>
        {/* Bed 2 & 3 */}
        <rect x="220" y="150" width="150" height="70" />
        <text x="295" y="185" textAnchor="middle" className="text-[9px] font-mono fill-ink/60 stroke-none">GUEST BEDROOM</text>
        {/* Private Solarium Terrace */}
        <rect x="30" y="170" width="180" height="50" />
        <text x="120" y="195" textAnchor="middle" className="text-[9px] font-mono fill-ink/60 stroke-none">SOLARIUM TERRACE</text>
      </svg>
    ),
  },
  {
    id: 'unit-03',
    development: 'Bhava Tower',
    typology: 'Commercial Retail / Corporate Office',
    bedrooms: 'Open Commercial Space',
    size: '2,500 – 10,000 Sq. Ft.',
    completion: '4Q 2026',
    price: 'On Request',
    floor: 'Floors 2 & 3',
    features: ['Bypass Frontage', 'Dedicated Elevators', 'High Footfall'],
    svgPlan: (
      <svg viewBox="0 0 400 240" className="w-full h-full stroke-ink/70 fill-none" strokeWidth="1.2">
        <rect x="20" y="20" width="360" height="200" strokeDasharray="3 3" opacity="0.3" />
        {/* Open Commercial Hall */}
        <rect x="30" y="30" width="340" height="140" />
        <text x="200" y="105" textAnchor="middle" className="text-[11px] font-mono fill-ink/60 stroke-none">OPEN-PLAN COMMERCIAL FLOOR</text>
        {/* Restrooms & Service Core */}
        <rect x="30" y="180" width="160" height="40" />
        <text x="110" y="202" textAnchor="middle" className="text-[9px] font-mono fill-ink/60 stroke-none">ELEVATORS & FOYER</text>
        <rect x="210" y="180" width="160" height="40" />
        <text x="290" y="202" textAnchor="middle" className="text-[9px] font-mono fill-ink/60 stroke-none">EXECUTIVE RESTROOMS</text>
      </svg>
    ),
  },
];

export default function ApartmentsCatalogModal({ isOpen, onClose, onSelectUnit }) {
  const [selectedTypology, setSelectedTypology] = useState('ALL');
  const [selectedDev, setSelectedDev] = useState('ALL');

  if (!isOpen) return null;

  const filteredUnits = units.filter((u) => {
    if (selectedTypology !== 'ALL' && !u.typology.includes(selectedTypology)) return false;
    if (selectedDev !== 'ALL' && u.development !== selectedDev) return false;
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-linen text-ink select-none animate-in fade-in duration-300">
      {/* 
        Top Right Hanging Bougainvillea Vine 
        (Exact visual from media_1794910944344.png)
      */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-[420px] pointer-events-none z-10 opacity-95">
        <video
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          disablePictureInPicture
          className="w-full h-auto object-contain"
        >
          <source src="/assets/flowers/bougainvillea_01.webm" type="video/webm" />
        </video>
      </div>

      {/* Top Header Row with Rotating Seal and Close */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 pt-8 flex items-center justify-between relative z-20">
        {/* Left Circular Badge */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 relative flex items-center justify-center">
            <svg viewBox="0 0 120 120" className="w-full h-full animate-spin-slow text-ink">
              <defs>
                <path id="catTopArc" d="M 20,60 A 40,40 0 0 1 100,60" />
                <path id="catBottomArc" d="M 100,60 A 40,40 0 0 1 20,60" />
              </defs>
              <g fill="currentColor" fontSize="10.5" fontFamily="Arial, sans-serif" fontWeight="600" letterSpacing="4">
                <text textAnchor="middle"><textPath href="#catTopArc" startOffset="50%">ADVENTRA</textPath></text>
                <text textAnchor="middle"><textPath href="#catBottomArc" startOffset="50%">RESIDENCES</textPath></text>
              </g>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-ink pointer-events-none">
              <svg viewBox="0 0 40 40" fill="none" className="w-4 h-4">
                <path d="M6.55 9.12C4.81 7.38 4.69 4.69 4.69 4.69C4.69 4.69 7.38 4.82 9.12 6.56C10.86 8.3 10.98 10.99 10.98 10.99C10.98 10.99 8.29 10.86 6.55 9.12Z" fill="currentColor"/>
                <path d="M20 0L16.16 8.12C15.59 9.31 15.59 10.69 16.16 11.88L18.5 16.83C17.77 17.18 17.19 17.78 16.85 18.51L11.88 16.16C10.69 15.59 9.31 15.59 8.12 16.16L0 20V19.18C0 18.35 0.42 17.58 1.12 17.14L7.64 13C9.08 12.08 10.92 12.08 12.36 13L14.11 14.11L13 12.36C12.08 10.92 12.08 9.08 13 7.64L17.14 1.12C17.58 0.42 18.35 0 19.18 0L20 0Z" fill="currentColor"/>
                <path d="M33.44 30.88C35.18 32.61 35.31 35.31 35.31 35.31C35.31 35.31 32.62 35.18 30.88 33.44C29.14 31.7 29.01 29.01 29.01 29.01C29.01 29.01 31.71 29.14 33.44 30.88Z" fill="currentColor"/>
                <path d="M20 40L23.84 31.88C24.41 30.69 24.41 29.31 23.84 28.12L21.5 23.17C22.23 22.82 22.81 22.22 23.15 21.49L28.12 23.84C29.31 24.41 30.69 24.41 31.88 23.84L40 20V20.82C40 21.65 39.58 22.42 38.88 22.86L32.36 27C30.92 27.92 29.08 27.92 27.64 27L25.89 25.89L27 27.64C27.92 29.08 27.92 30.92 27 32.36L22.86 38.88C22.42 39.58 21.65 40 20.82 40L20 40Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-ink/60">
            AdVentra Residences
          </span>
        </div>

        {/* Right Close Button */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-ink/20 hover:border-ink text-xs uppercase tracking-widest font-mono transition-colors"
        >
          <span>Return Home</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Title Row: [APARTMENTS] on left, [165] on right */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 pt-12 pb-8 flex items-baseline justify-between border-b border-ink/10 relative z-20">
        <div>
          <h1 className="font-editorial text-6xl sm:text-8xl md:text-9xl font-light tracking-tight uppercase leading-none">
            Apartments
          </h1>
        </div>

        <div>
          <span className="font-editorial text-6xl sm:text-8xl md:text-9xl font-light tracking-tight text-ink/90">
            165
          </span>
        </div>
      </div>

      {/* Filter Ribbon Bar (Beveled Architectural Box from screenshot) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 py-6 relative z-20">
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-ink/10 shadow-sm flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider">
          {/* Typology Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-ink/50">Typology:</span>
            <select
              value={selectedTypology}
              onChange={(e) => setSelectedTypology(e.target.value)}
              className="bg-transparent text-ink font-semibold focus:outline-none cursor-pointer"
            >
              <option value="ALL">All Typologies</option>
              <option value="3 BHK">3 BHK Luxury</option>
              <option value="Boutique">Boutique Residence</option>
              <option value="Commercial">Commercial Hub</option>
            </select>
          </div>

          {/* Development Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-ink/50">Development:</span>
            <select
              value={selectedDev}
              onChange={(e) => setSelectedDev(e.target.value)}
              className="bg-transparent text-ink font-semibold focus:outline-none cursor-pointer"
            >
              <option value="ALL">All Developments</option>
              <option value="Bhava Tower">Bhava Tower (G+10)</option>
              <option value="Nawal Shiv Bhava Tower">Nawal Shiv Bhava (AP Colony)</option>
            </select>
          </div>

          {/* Reset Filters */}
          <button
            onClick={() => {
              setSelectedTypology('ALL');
              setSelectedDev('ALL');
            }}
            className="text-ink/40 hover:text-ink transition-colors"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Floor Plan Blueprint Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 pb-28 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUnits.map((unit) => (
            <div
              key={unit.id}
              className="p-8 rounded-3xl bg-white border border-ink/10 hover:border-ink/30 transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Card Header */}
                <div className="border-b border-ink/10 pb-4 mb-6">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-ink/50 mb-1">
                    <span>{unit.development}</span>
                    <span>{unit.completion}</span>
                  </div>
                  <h3 className="font-editorial text-2xl text-ink font-semibold">
                    {unit.typology}
                  </h3>
                </div>

                {/* 2D Architectural Floor Plan Drawing */}
                <div className="h-48 sm:h-56 bg-linen/50 rounded-2xl p-4 border border-ink/5 flex items-center justify-center mb-6 overflow-hidden group-hover:bg-linen/70 transition-colors">
                  {unit.svgPlan}
                </div>

                {/* Specs List */}
                <div className="grid grid-cols-2 gap-3 py-3 border-y border-ink/5 text-xs font-mono mb-6">
                  <div>
                    <span className="text-[10px] text-ink/40 block">Super Area</span>
                    <strong className="text-ink font-semibold">{unit.size}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-ink/40 block">Price</span>
                    <strong className="text-emerald-700 font-semibold">{unit.price}</strong>
                  </div>
                </div>

                {/* Highlight Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {unit.features.map((f, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full bg-ink/5 text-[10px] font-mono text-ink/70"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Inquire for this unit */}
              <button
                onClick={() => {
                  onClose();
                  if (onSelectUnit) onSelectUnit(unit);
                }}
                className="w-full py-3.5 rounded-full bg-ink hover:bg-ink/90 text-linen text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span>Inquire for Unit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
