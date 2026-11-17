import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ConceptAndLocationSequence({ onOpenApartments }) {
  const stops = [
    { name: 'GAYA AIRPORT', time: '15 MIN', left: '8%' },
    { name: 'VISHNUPAD TEMPLE', time: '10 MIN', left: '22%' },
    { name: 'MAHABODHI TEMPLE', time: '20 MIN', left: '38%' },
    { name: 'ADVENTRA RESIDENCES', isEmblem: true, left: '50%' },
    { name: 'GAYA JUNCTION', time: '12 MIN', left: '64%' },
    { name: 'IIM BODH GAYA', time: '25 MIN', left: '78%' },
    { name: 'PATNA AIRPORT', time: '90 MIN', left: '92%' },
  ];

  return (
    <div className="relative w-full bg-[#f3f3ec] text-[#17233b] overflow-hidden">
      {/* ========================================================
          STAGE 1: THE CONCEPT (Linen Cream with Hanging Bougainvillea)
          (Exact replica of media_1794911222202.png & media_1794911251663.png)
      ======================================================== */}
      <section id="concept" className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 py-24 text-center overflow-hidden">
        {/* Top-Left Hanging Bougainvillea Alpha Video Loop */}
        <div className="absolute top-0 left-0 w-64 sm:w-96 md:w-[480px] pointer-events-none z-10 select-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-contain opacity-95 drop-shadow-lg"
          >
            <source src="/assets/flowers/bougainvillea_01.webm" type="video/webm" />
          </video>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#17233b]/60 mb-8 font-semibold">
            THE CONCEPT
          </span>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-6xl text-[#17233b] font-light leading-tight sm:leading-snug uppercase tracking-tight mb-8">
            ADVENTRA RESIDENCES IS A PREMIER LUXURY RESIDENTIAL COMMUNITY IN GAYA, DESIGNED AROUND PRIVACY, WELLBEING AND TIMELESS ARCHITECTURAL LIVING
          </h2>

          <p className="max-w-xl text-xs sm:text-sm text-[#17233b]/70 font-light leading-relaxed mb-12">
            Inspired by the spiritual sanctity of Gaya and contemporary Mediterranean sophistication, the project combines modern architecture with natural stone, expansive balconies, and thoughtfully curated greenery.
          </p>

          {/* Star Flower Emblem */}
          <div className="w-10 h-10 text-[#17233b]/80">
            <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
              <path d="M6.55 9.12C4.81 7.38 4.69 4.69 4.69 4.69C4.69 4.69 7.38 4.82 9.12 6.56C10.86 8.3 10.98 10.99 10.98 10.99C10.98 10.99 8.29 10.86 6.55 9.12Z" fill="currentColor"/>
              <path d="M20 0L16.16 8.12C15.59 9.31 15.59 10.69 16.16 11.88L18.5 16.83C17.77 17.18 17.19 17.78 16.85 18.51L11.88 16.16C10.69 15.59 9.31 15.59 8.12 16.16L0 20V19.18C0 18.35 0.42 17.58 1.12 17.14L7.64 13C9.08 12.08 10.92 12.08 12.36 13L14.11 14.11L13 12.36C12.08 10.92 12.08 9.08 13 7.64L17.14 1.12C17.58 0.42 18.35 0 19.18 0L20 0Z" fill="currentColor"/>
              <path d="M33.44 30.88C35.18 32.61 35.31 35.31 35.31 35.31C35.31 35.31 32.62 35.18 30.88 33.44C29.14 31.7 29.01 29.01 29.01 29.01C29.01 29.01 31.71 29.14 33.44 30.88Z" fill="currentColor"/>
              <path d="M20 40L23.84 31.88C24.41 30.69 24.41 29.31 23.84 28.12L21.5 23.17C22.23 22.82 22.81 22.22 23.15 21.49L28.12 23.84C29.31 24.41 30.69 24.41 31.88 23.84L40 20V20.82C40 21.65 39.58 22.42 38.88 22.86L32.36 27C30.92 27.92 29.08 27.92 27.64 27L25.89 25.89L27 27.64C27.92 29.08 27.92 30.92 27 32.36L22.86 38.88C22.42 39.58 21.65 40 20.82 40L20 40Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ========================================================
          STAGE 2: HORIZONTAL SLIDE TRANSITION (BIHAR / NEW GOLDEN MILE)
          (Exact replica of media_1794911284230.png - media_1794911313743.png)
      ======================================================== */}
      <section className="relative py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Typography */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#17233b]/60 mb-4 block">
              B I H A R &bull; I N D I A
            </span>

            <h3 className="font-editorial text-5xl sm:text-6xl md:text-7xl text-[#17233b] font-light leading-none uppercase tracking-tight mb-8">
              NEW <br />
              GOLDEN <br />
              LANDMARK
            </h3>

            <h4 className="font-editorial text-xl sm:text-2xl text-[#17233b] font-normal mb-3">
              Between AP Colony & Sita Kund Bypass
            </h4>

            <p className="text-xs sm:text-sm text-[#17233b]/75 font-light leading-relaxed max-w-md">
              Surrounded by sacred heritage, world-class golf and wellness, and rapid 4-lane bypass corridors, AdVentra Residences unites unmatched quietude with effortless everyday connectivity.
            </p>

            {/* Circular CTA Button (media_1794911313743.png) */}
            <div className="mt-10">
              <button
                onClick={onOpenApartments}
                className="group relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-[#17233b]/30 flex flex-col items-center justify-center p-4 hover:border-[#17233b] hover:bg-[#17233b] hover:text-white transition-all duration-500 shadow-sm"
              >
                <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase font-semibold text-center leading-tight">
                  VIEW AVAILABLE
                  <br />
                  APARTMENTS
                </span>
                <ArrowUpRight className="w-4 h-4 mt-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Column: Sunlit Terrace Photo */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[16/11] border border-[#17233b]/10 group">
              <img
                src="/assets/terrace_full.webp"
                alt="Sunlit Luxury Terrace at AdVentra"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute bottom-6 left-6 bg-[#17233b]/80 backdrop-blur-md px-4 py-2 rounded-full text-white text-[11px] font-mono tracking-wider">
                SUNLIT BALCONY SUITES
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          STAGE 3: THE ROUTE TIMELINE (THE LANDMARK YOU WANTED *yours* THIS YEAR)
          (Exact replica of media_1794911338522.png & media_1794911351604.png)
      ======================================================== */}
      <section id="location" className="relative pt-24 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">

        {/* Heading: THE LANDMARK YOU WANTED *yours* THIS YEAR */}
        <div className="text-center max-w-4xl mx-auto mb-16 relative z-10 px-4">
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#17233b] font-light uppercase tracking-tight leading-tight">
            THE LANDMARK YOU WANTED{' '}
            <span className="font-italic-accent a2 lowercase font-normal text-5xl sm:text-6xl md:text-7xl px-2">
              yours
            </span>{' '}
            THIS YEAR
          </h2>
        </div>

        {/* Wavy Coastline/Road SVG Track */}
        <div className="relative w-full max-w-5xl mx-auto my-12">
          {/* The authentic wavy SVG path */}
          <div className="w-full overflow-hidden flex items-center justify-center">
            <img
              src="/assets/loc_path.svg"
              alt="AdVentra Route Timeline"
              className="w-full h-auto object-contain stroke-[#17233b]"
            />
          </div>

          {/* Mobile view of route timeline stops */}
          <div className="sm:hidden flex overflow-x-auto gap-3 py-4 px-1 no-scrollbar snap-x">
            {stops.map((stop, idx) => (
              <div
                key={idx}
                className="shrink-0 snap-center flex flex-col items-center min-w-[130px] p-3 rounded-2xl bg-white/70 border border-[#17233b]/10 backdrop-blur-xs text-center"
              >
                <div className="w-2 h-2 rounded-full bg-[#17233b] mb-2 animate-pulse" />
                {stop.isEmblem ? (
                  <div className="w-6 h-6 text-[#17233b] mb-1">
                    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                      <path d="M6.55 9.12C4.81 7.38 4.69 4.69 4.69 4.69C4.69 4.69 7.38 4.82 9.12 6.56C10.86 8.3 10.98 10.99 10.98 10.99C10.98 10.99 8.29 10.86 6.55 9.12Z" fill="currentColor"/>
                      <path d="M20 0L16.16 8.12C15.59 9.31 15.59 10.69 16.16 11.88L18.5 16.83C17.77 17.18 17.19 17.78 16.85 18.51L11.88 16.16C10.69 15.59 9.31 15.59 8.12 16.16L0 20V19.18C0 18.35 0.42 17.58 1.12 17.14L7.64 13C9.08 12.08 10.92 12.08 12.36 13L14.11 14.11L13 12.36C12.08 10.92 12.08 9.08 13 7.64L17.14 1.12C17.58 0.42 18.35 0 19.18 0L20 0Z" fill="currentColor"/>
                      <path d="M33.44 30.88C35.18 32.61 35.31 35.31 35.31 35.31C35.31 35.31 32.62 35.18 30.88 33.44C29.14 31.7 29.01 29.01 29.01 29.01C29.01 29.01 31.71 29.14 33.44 30.88Z" fill="currentColor"/>
                      <path d="M20 40L23.84 31.88C24.41 30.69 24.41 29.31 23.84 28.12L21.5 23.17C22.23 22.82 22.81 22.22 23.15 21.49L28.12 23.84C29.31 24.41 30.69 24.41 31.88 23.84L40 20V20.82C40 21.65 39.58 22.42 38.88 22.86L32.36 27C30.92 27.92 29.08 27.92 27.64 27L25.89 25.89L27 27.64C27.92 29.08 27.92 30.92 27 32.36L22.86 38.88C22.42 39.58 21.65 40 20.82 40L20 40Z" fill="currentColor"/>
                    </svg>
                  </div>
                ) : null}
                <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-[#17233b]">
                  {stop.name}
                </span>
                {stop.time && (
                  <span className="font-mono text-[9px] text-[#17233b]/60 mt-0.5">
                    {stop.time}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Desktop/Tablet Stops overlay along the route */}
          <div className="hidden sm:grid grid-cols-7 gap-2 mt-4 text-center">
            {stops.map((stop, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#17233b] mb-2 animate-pulse" />
                {stop.isEmblem ? (
                  <div className="w-7 h-7 text-[#17233b] mb-1">
                    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                      <path d="M6.55 9.12C4.81 7.38 4.69 4.69 4.69 4.69C4.69 4.69 7.38 4.82 9.12 6.56C10.86 8.3 10.98 10.99 10.98 10.99C10.98 10.99 8.29 10.86 6.55 9.12Z" fill="currentColor"/>
                      <path d="M20 0L16.16 8.12C15.59 9.31 15.59 10.69 16.16 11.88L18.5 16.83C17.77 17.18 17.19 17.78 16.85 18.51L11.88 16.16C10.69 15.59 9.31 15.59 8.12 16.16L0 20V19.18C0 18.35 0.42 17.58 1.12 17.14L7.64 13C9.08 12.08 10.92 12.08 12.36 13L14.11 14.11L13 12.36C12.08 10.92 12.08 9.08 13 7.64L17.14 1.12C17.58 0.42 18.35 0 19.18 0L20 0Z" fill="currentColor"/>
                      <path d="M33.44 30.88C35.18 32.61 35.31 35.31 35.31 35.31C35.31 35.31 32.62 35.18 30.88 33.44C29.14 31.7 29.01 29.01 29.01 29.01C29.01 29.01 31.71 29.14 33.44 30.88Z" fill="currentColor"/>
                      <path d="M20 40L23.84 31.88C24.41 30.69 24.41 29.31 23.84 28.12L21.5 23.17C22.23 22.82 22.81 22.22 23.15 21.49L28.12 23.84C29.31 24.41 30.69 24.41 31.88 23.84L40 20V20.82C40 21.65 39.58 22.42 38.88 22.86L32.36 27C30.92 27.92 29.08 27.92 27.64 27L25.89 25.89L27 27.64C27.92 29.08 27.92 30.92 27 32.36L22.86 38.88C22.42 39.58 21.65 40 20.82 40L20 40Z" fill="currentColor"/>
                    </svg>
                  </div>
                ) : null}
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-[#17233b]">
                  {stop.name}
                </span>
                {stop.time && (
                  <span className="font-mono text-[10px] text-[#17233b]/60 mt-0.5">
                    {stop.time}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          STAGE 4: THE AERIAL PANORAMA WITH DRIFTING CLOUDS
          (Exact replica of media_1794911362786.png & media_1794911379335.jpg)
      ======================================================== */}
      <section className="relative w-full min-h-[90vh] md:min-h-[110vh] overflow-hidden flex flex-col justify-end">
        {/* Background Aerial Landscape Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/master_plan_aerial.webp"
            alt="Aerial Panorama of the Development Landscape"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#17233b]/40 via-transparent to-[#f3f3ec]/40" />
        </div>

        {/* Three Layers of Drifting Clouds (Marquee) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Cloud Layer 1 */}
          <div className="absolute top-10 left-0 w-[200%] h-48 opacity-80 animate-marquee flex">
            <img src="/assets/clouds_33.png" alt="" className="w-1/2 h-full object-contain" />
            <img src="/assets/clouds_33.png" alt="" className="w-1/2 h-full object-contain" />
          </div>

          {/* Cloud Layer 2 */}
          <div className="absolute top-24 left-0 w-[200%] h-56 opacity-60 animate-marquee-slow flex">
            <img src="/assets/clouds_47.png" alt="" className="w-1/2 h-full object-contain" />
            <img src="/assets/clouds_47.png" alt="" className="w-1/2 h-full object-contain" />
          </div>

          {/* Cloud Layer 3 */}
          <div className="absolute top-40 left-0 w-[200%] h-40 opacity-70 animate-marquee flex">
            <img src="/assets/clouds_02.png" alt="" className="w-1/2 h-full object-contain" />
            <img src="/assets/clouds_02.png" alt="" className="w-1/2 h-full object-contain" />
          </div>
        </div>

        {/* Location Pins Overlay on the Aerial View (media_1794911379335.jpg) */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-16 pb-20 flex justify-end">
          <div className="bg-[#17233b]/85 backdrop-blur-md p-6 sm:p-8 rounded-2xl text-white max-w-sm border border-white/10 shadow-2xl">
            <div className="w-[1px] h-8 bg-white/40 mb-3" />
            <div className="font-editorial text-xl sm:text-2xl font-light uppercase tracking-wide mb-1">
              BHAVA TOWER
            </div>
            <div className="font-mono text-xs text-white/70 tracking-wider uppercase mb-3">
              SITA KUND BYPASS &bull; GAYA
            </div>

            <div className="w-full h-[1px] bg-white/20 my-3" />

            <div className="font-editorial text-lg sm:text-xl font-light uppercase tracking-wide mb-1">
              NAWAL SHIV BHAVA TOWER
            </div>
            <div className="font-mono text-xs text-white/70 tracking-wider uppercase mb-4">
              AP COLONY &bull; GAYA
            </div>

            <button
              onClick={onOpenApartments}
              className="w-full py-2.5 rounded-full border border-white/30 hover:border-white hover:bg-white/15 text-[10px] uppercase font-mono tracking-widest text-white transition-all flex items-center justify-center gap-1.5"
            >
              <span>View Residences</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Powder-Blue Dome Arched Curve to transition smoothly */}
        <div className="relative w-full h-24 overflow-hidden -mb-1">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-[#b5cedb]">
            <path d="M0,120 Q600,0 1200,120 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>
    </div>
  );
}
