import React, { useEffect, useState } from 'react';

export default function CurtainPreloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // 'loading' | 'arch-reveal' | 'zoom-in' | 'done'

  useEffect(() => {
    // Check if user visited in this session
    const hasVisited = sessionStorage.getItem('adventra_has_visited');
    if (hasVisited) {
      setPhase('done');
      if (onComplete) onComplete();
      return;
    }

    // Smooth progress loading (approx 3.2 seconds total, matching ERA loaderEase)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 65 && prev < 75) {
          // Switch to Arch Portal view
          setPhase('arch-reveal');
        }
        if (prev >= 100) {
          clearInterval(interval);
          // Trigger Arch Zoom dive-in transition
          setTimeout(() => {
            setPhase('zoom-in');
            try {
              sessionStorage.setItem('adventra_has_visited', 'true');
            } catch (e) {}
            setTimeout(() => {
              setPhase('done');
              if (onComplete) onComplete();
            }, 1200);
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 28);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none select-none overflow-hidden">
      {/* 
        The Master Curtain Screen (Velvet Plum #340c24)
        Scales up massively from bottom center (50% 85%) during phase 'zoom-in'
      */}
      <div
        className={`absolute inset-0 bg-[#340c24] text-white flex flex-col justify-between p-8 sm:p-12 md:p-16 transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          phase === 'zoom-in'
            ? 'scale-[8] opacity-0 pointer-events-none'
            : 'scale-100 opacity-100'
        }`}
        style={{
          transformOrigin: '50% 80%',
        }}
      >
        {/* Architectural Corner Notched Hairline Frame */}
        <div className="absolute inset-4 sm:inset-6 md:inset-8 border border-white/15 rounded-2xl pointer-events-none">
          <div className="absolute -top-[1px] -left-[1px] w-5 h-5 border-t-2 border-l-2 border-white/50" />
          <div className="absolute -top-[1px] -right-[1px] w-5 h-5 border-t-2 border-r-2 border-white/50" />
          <div className="absolute -bottom-[1px] -left-[1px] w-5 h-5 border-b-2 border-l-2 border-white/50" />
          <div className="absolute -bottom-[1px] -right-[1px] w-5 h-5 border-b-2 border-r-2 border-white/50" />
        </div>

        {/* Giant Faint Cursive Watermark Script (matching ERA preloader_bg.svg) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.06]">
          <span
            className="font-italic-accent a2 text-[20vw] whitespace-nowrap text-white font-normal"
            style={{ transform: 'rotate(-4deg)' }}
          >
            AdVentra Residences
          </span>
        </div>

        {/* Top Header: 4-Petal Emblem Symbol */}
        <div className="relative z-10 w-full flex justify-center pt-2">
          <div className="w-10 h-10 md:w-12 md:h-12 text-white/90">
            <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
              <path
                d="M6.55 9.12C4.81 7.38 4.69 4.69 4.69 4.69C4.69 4.69 7.38 4.82 9.12 6.56C10.86 8.3 10.98 10.99 10.98 10.99C10.98 10.99 8.29 10.86 6.55 9.12Z"
                fill="currentColor"
              />
              <path
                d="M20 0L16.16 8.12C15.59 9.31 15.59 10.69 16.16 11.88L18.5 16.83C17.77 17.18 17.19 17.78 16.85 18.51L11.88 16.16C10.69 15.59 9.31 15.59 8.12 16.16L0 20V19.18C0 18.35 0.42 17.58 1.12 17.14L7.64 13C9.08 12.08 10.92 12.08 12.36 13L14.11 14.11L13 12.36C12.08 10.92 12.08 9.08 13 7.64L17.14 1.12C17.58 0.42 18.35 0 19.18 0L20 0Z"
                fill="currentColor"
              />
              <path
                d="M33.44 30.88C35.18 32.61 35.31 35.31 35.31 35.31C35.31 35.31 32.62 35.18 30.88 33.44C29.14 31.7 29.01 29.01 29.01 29.01C29.01 29.01 31.71 29.14 33.44 30.88Z"
                fill="currentColor"
              />
              <path
                d="M20 40L23.84 31.88C24.41 30.69 24.41 29.31 23.84 28.12L21.5 23.17C22.23 22.82 22.81 22.22 23.15 21.49L28.12 23.84C29.31 24.41 30.69 24.41 31.88 23.84L40 20V20.82C40 21.65 39.58 22.42 38.88 22.86L32.36 27C30.92 27.92 29.08 27.92 27.64 27L25.89 25.89L27 27.64C27.92 29.08 27.92 30.92 27 32.36L22.86 38.88C22.42 39.58 21.65 40 20.82 40L20 40Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* 
          Center Typography: Authentic ERA Hierarchy
          Left cursive: "Bihār" | Center: Roman Numeral "XXV" + "AdVentra Residences" + cursive "Gaya" | Right cursive: "Heritage"
        */}
        <div
          className={`relative z-10 max-w-6xl w-full mx-auto my-auto flex items-center justify-between transition-opacity duration-700 ${
            phase === 'arch-reveal' ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          {/* Left Watermark Script (matching "Costa" in media_1794910701501.png) */}
          <div className="w-1/4 hidden md:flex justify-start">
            <span className="font-italic-accent a2 text-4xl lg:text-5xl text-white/80">
              Bihār
            </span>
          </div>

          {/* Center Logo & Title */}
          <div className="w-full md:w-2/4 flex flex-col items-center justify-center text-center relative">
            <span className="font-editorial text-xs sm:text-sm tracking-[0.35em] text-white/60 mb-2 uppercase">
              XXV
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white font-light leading-[0.85] uppercase">
              AdVentra
              <br />
              Residences
            </h1>
            <div className="relative -mt-4 sm:-mt-8 pointer-events-none">
              <span
                className="font-italic-accent a2 text-4xl sm:text-6xl md:text-7xl text-white font-normal block lowercase capitalize drop-shadow-md"
                style={{ transform: 'rotate(-3deg)' }}
              >
                Gaya
              </span>
            </div>
          </div>

          {/* Right Watermark Script (matching "del Sol" in media_1794910701501.png) */}
          <div className="w-1/4 hidden md:flex justify-end">
            <span className="font-italic-accent a2 text-4xl lg:text-5xl text-white/80">
              Heritage
            </span>
          </div>
        </div>

        {/* 
          ARCH PORTAL WINDOW (Exact replica of media_1794910791332.png):
          A centered architectural arch cutout displaying the Day Hero image directly beneath!
        */}
        <div
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[34vw] min-w-[280px] max-w-[480px] h-[52vh] overflow-hidden rounded-t-[20rem] border-t-2 border-x-2 border-white/40 shadow-[0_0_60px_rgba(0,0,0,0.85)] transition-all duration-700 ease-out z-20 ${
            phase === 'arch-reveal' || phase === 'zoom-in'
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-24 scale-90'
          }`}
        >
          {/* Day Hero Image visible inside the Archway */}
          <img
            src="/assets/hero-day.webp"
            alt="AdVentra Architecture Preview"
            className="w-full h-full object-cover object-top scale-110"
          />
          {/* Nested Arch Outline for depth (preloader_bg_arch) */}
          <div className="absolute inset-1 rounded-t-[19.5rem] border border-white/25 pointer-events-none" />
        </div>

        {/* Bottom Hairline Progress Tracker & Tagline */}
        <div
          className={`relative z-10 w-full flex flex-col items-center justify-center pb-4 text-center transition-opacity duration-500 ${
            phase === 'arch-reveal' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* Hairline Tracker */}
          <div className="w-[1px] h-14 bg-white/20 relative overflow-hidden mb-5">
            <div
              className="w-full bg-white transition-all duration-100 ease-out"
              style={{ height: `${progress}%` }}
            />
          </div>

          <div className="space-y-1">
            <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-white/90 font-semibold">
              AdVentra Residences
            </p>
            <p className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.35em] text-white/60">
              A place to return to.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
