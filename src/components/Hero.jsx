import React, { useState, useEffect, useRef } from 'react';
import { X, Sparkles } from 'lucide-react';

const hotspots = [
  {
    id: 'building-craft',
    title: 'Architectural Excellence',
    tag: 'The Architecture',
    desc: 'Crafted with natural stone façades, earthquake-resistant RCC engineering, and expansive sunlit terraces. Every AdVentra residence harmonizes modern Mediterranean elegance with enduring structural integrity and Vastu principles.',
    x: 20,
    y: 19,
  },
  {
    id: 'white-glove-service',
    title: 'Bespoke Hospitality',
    tag: 'How We Serve',
    desc: 'Uncompromising attention to every resident. Enjoy dedicated 24/7 concierge, private poolside service, valet assistance, and discrete housekeeping tailored to your family’s daily comfort.',
    x: 80,
    y: 22,
  },
  {
    id: 'resort-pool-luxury',
    title: 'Resort Living & Pool Luxury',
    tag: 'Poolside Oasis',
    desc: 'A crystal-clear temperature-controlled saltwater swimming pool framed by private cabanas, sundecks, and hydrotherapy saunas — bringing five-star resort indulgence into your everyday life in Gaya.',
    x: 28,
    y: 56,
  },
];

export default function Hero({ onOpenInquiry, onOpenApartments }) {
  const [ambientMode, setAmbientMode] = useState('day'); // Default to day
  const [activeTip, setActiveTip] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  // Fade headline and baseline smoothly over first 45% of viewport scroll
  const heroFade = Math.max(0, 1 - scrollY / (viewportHeight * 0.45));
  const headlineTranslate = scrollY * 0.25;

  return (
    <section
      id="hero"
      className="relative w-full min-h-[165vh] sm:min-h-[180vh] bg-[#121824] select-none overflow-hidden"
    >
      {/* 
        Full-bleed Continuous Background Image:
        Covers the entire height of the hero seamlessly from Sky at top to Pool at bottom.
        Zero dead space — follows the natural flow of the image.
      */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Day Background Image */}
        <img
          src="/assets/hero-day.webp"
          alt="AdVentra Residences - Day"
          className={`w-full h-full object-cover object-top transition-opacity duration-1000 ${
            ambientMode === 'day' ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Night Background Image */}
        <img
          src="/assets/hero-night.webp"
          alt="AdVentra Residences - Night"
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ${
            ambientMode === 'night' ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Ambient Contrast Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25 pointer-events-none" />
      </div>

      {/* 
        STAGE 1: TOP SKY & MONUMENTAL HEADLINE
        Occupies the initial 100vh viewport.
      */}
      <div className="relative z-20 h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 pb-10 px-6 sm:px-12 md:px-16">
        {/* Center Headline & Overlaid Cursive Script */}
        <div
          className="my-auto flex flex-col items-center justify-center text-center px-4 transition-all duration-150 will-change-transform"
          style={{
            opacity: heroFade,
            transform: `translate3d(0, -${headlineTranslate}px, 0)`,
            pointerEvents: heroFade < 0.1 ? 'none' : 'auto',
          }}
        >
          <div className="relative flex flex-col items-center justify-center select-none">
            <h1 className="font-editorial text-5xl sm:text-7xl md:text-9xl lg:text-[12.5rem] font-light text-white tracking-tight uppercase leading-[0.84] text-center drop-shadow-md">
              AdVentra
              <br />
              Residences
            </h1>

            {/* Overlaid Spencerian Script (matches "Estepona" in reference) */}
            <div className="relative -mt-4 sm:-mt-8 md:-mt-16 lg:-mt-24 pointer-events-none z-10">
              <span
                className="font-italic-accent a2 text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] text-white font-normal block lowercase capitalize drop-shadow-2xl"
                style={{
                  transform: 'rotate(-3.5deg)',
                }}
              >
                Gaya
              </span>
            </div>
          </div>
        </div>

        {/* 
          Bottom Horizontal Baseline:
          "A PLACE" ——— "BY DAY / BY NIGHT" ——— "TO RETURN TO"
        */}
        <div
          className="w-full flex items-center justify-between text-white font-editorial tracking-wider transition-opacity duration-300"
          style={{
            opacity: heroFade,
            pointerEvents: heroFade < 0.1 ? 'none' : 'auto',
          }}
        >
          {/* Left Phrase */}
          <div className="w-1/3 text-left">
            <span className="text-sm sm:text-2xl md:text-3xl font-light tracking-[0.12em] sm:tracking-[0.15em] uppercase text-white/95">
              A Place
            </span>
          </div>

          {/* Center Day / Night Mood Switcher */}
          <div className="w-1/3 flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs md:text-sm font-mono tracking-[0.15em] sm:tracking-[0.2em] uppercase">
            <button
              onClick={() => setAmbientMode('day')}
              className={`transition-colors duration-300 ${
                ambientMode === 'day' ? 'text-white font-bold' : 'text-white/40 hover:text-white'
              }`}
            >
              By Day
            </button>
            <div className="w-6 sm:w-16 h-[1px] bg-white/40" />
            <button
              onClick={() => setAmbientMode('night')}
              className={`transition-colors duration-300 ${
                ambientMode === 'night' ? 'text-white font-bold' : 'text-white/40 hover:text-white'
              }`}
            >
              By Night
            </button>
          </div>

          {/* Right Phrase */}
          <div className="w-1/3 text-right">
            <span className="text-sm sm:text-2xl md:text-3xl font-light tracking-[0.12em] sm:tracking-[0.15em] uppercase text-white/95">
              To Return To
            </span>
          </div>
        </div>
      </div>

      {/* 
        STAGE 2: POOL VIEW, HOTSPOT PINS & CIRCULAR CTA
        Flows directly from the balconies down to the pool without any artificial gap.
      */}
      <div className="relative z-20 min-h-[65vh] sm:min-h-[80vh] w-full flex flex-col justify-end pb-28 sm:pb-36 px-6 sm:px-12">
        {/* Interactive Pulsing Hotspot Pins */}
        {hotspots.map((pin) => (
          <div
            key={pin.id}
            className={`absolute pointer-events-auto transition-transform ${
              activeTip === pin.id ? 'z-50' : 'z-40'
            }`}
            style={{
              left: `${pin.x}%`,
              top: `${pin.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Outer Pulsing Concentric Rings */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveTip(activeTip === pin.id ? null : pin.id);
              }}
              className="group relative w-12 h-12 flex items-center justify-center cursor-pointer focus:outline-none"
              aria-label={pin.title}
            >
              <span className="absolute w-12 h-12 rounded-full border border-white/40 animate-ping opacity-75 pointer-events-none" />
              <span className="absolute w-9 h-9 rounded-full border border-white/60 group-hover:scale-125 transition-transform pointer-events-none" />
              <span className="w-4 h-4 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,1)] pointer-events-none" />
            </button>

            {/* Floating Tooltip Card */}
            {activeTip === pin.id && (
              <div
                className={`absolute w-72 sm:w-80 p-5 rounded-2xl bg-black/95 backdrop-blur-md border border-white/20 text-white shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200 ${
                  pin.y < 45 ? 'top-14' : 'bottom-14'
                } ${
                  pin.x > 65
                    ? 'right-0 sm:-right-4'
                    : pin.x < 35
                    ? 'left-0 sm:-left-4'
                    : 'left-1/2 -translate-x-1/2'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#d4af37] block mb-0.5 font-semibold">
                      {pin.tag}
                    </span>
                    <h4 className="font-editorial text-lg text-white font-semibold leading-tight">
                      {pin.title}
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTip(null);
                    }}
                    className="p-1 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors ml-2 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs text-white/80 leading-relaxed font-light mt-1">
                  {pin.desc}
                </p>
              </div>
            )}
          </div>
        ))}

        {/* Center Circular CTA Over Pool: "VIEW AVAILABLE APARTMENTS" */}
        <div className="relative z-20 flex justify-center pb-4 pointer-events-none">
          <button
            onClick={onOpenApartments || onOpenInquiry}
            className="group relative w-36 h-36 rounded-full border border-white/30 flex items-center justify-center p-4 text-center transition-all duration-500 hover:scale-110 hover:border-white hover:bg-white/15 backdrop-blur-md pointer-events-auto cursor-pointer"
          >
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="text-white/40 group-hover:text-white transition-colors"
                strokeDasharray="301"
                strokeDashoffset="120"
              />
            </svg>
            <div className="flex flex-col items-center">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-white font-medium leading-tight">
                View Available
                <br />
                Apartments
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
