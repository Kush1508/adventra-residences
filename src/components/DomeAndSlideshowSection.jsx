import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'REAL-LIFE LOCATION',
    image: '/assets/section2_cam02.webp',
    alt: 'Real-Life Location in Gaya',
    desc: 'Nestled between sacred heritage, pristine landscape and modern ring-road connectivity, AdVentra Residences offers a rare balance of secluded peace with seamless access across Gaya and Bodh Gaya.',
  },
  {
    id: 2,
    title: 'BUILT TO STAY',
    image: '/assets/section2_terrace.webp',
    alt: 'Built to Stay Terrace',
    desc: "Drawing on the spirit of Gaya's heritage, the design blends modern architecture with natural materials, lush landscaping and thoughtfully crafted spaces.",
  },
  {
    id: 3,
    title: 'BOUTIQUE CONCEPT',
    image: '/assets/section2_garden.webp',
    alt: 'Boutique Garden Concept',
    desc: 'A boutique sanctuary in Gaya designed around privacy, wellbeing and timeless architectural living — featuring private solariums and expansive courtyards.',
  },
];

export default function DomeAndSlideshowSection() {
  const [activeSlide, setActiveSlide] = useState(1); // default to slide 2 (index 1: "BUILT TO STAY")

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const current = slides[activeSlide];

  return (
    <section className="relative w-full bg-[#b5cedb] text-[#17233b] overflow-hidden rounded-t-[14rem] sm:rounded-t-[35rem] md:rounded-t-[70rem] -mt-16 sm:-mt-24 md:-mt-36 z-20 shadow-[0_-25px_60px_rgba(0,0,0,0.35)]">
      {/* ========================================================
          1. THE HUGE POWDER-BLUE ARCHED DOME TRANSITION
          (Exact replica of media_1794911012408.png)
      ======================================================== */}
      <div className="pt-24 pb-16 md:pt-36 md:pb-20 max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        {/* Curved Arched Heading SVG */}
        <div className="w-full max-w-4xl h-36 sm:h-56 md:h-72 relative flex items-center justify-center">
          <svg viewBox="0 0 1200 400" className="w-full h-full overflow-visible">
            <defs>
              <path
                id="domeCurve"
                d="M 100,380 A 500,320 0 0 1 1100,380"
                fill="none"
              />
            </defs>
            <text
              className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl fill-[#17233b] uppercase tracking-[0.12em] font-light"
              textAnchor="middle"
            >
              <textPath href="#domeCurve" startOffset="50%">
                Three Reasons to Choose AdVentra
              </textPath>
            </text>
          </svg>
        </div>

        {/* Center Emblem: [BIHAR] [4-Petal Icon] [INDIA] */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 mt-2 sm:mt-4 text-[#17233b]">
          <span className="text-xs sm:text-sm font-editorial uppercase tracking-super-wide text-[#17233b]/70 font-semibold">
            B I H A R
          </span>

          {/* 4-Petal Emblem */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 text-[#17233b]">
            <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
              <path d="M6.55 9.12C4.81 7.38 4.69 4.69 4.69 4.69C4.69 4.69 7.38 4.82 9.12 6.56C10.86 8.3 10.98 10.99 10.98 10.99C10.98 10.99 8.29 10.86 6.55 9.12Z" fill="currentColor"/>
              <path d="M20 0L16.16 8.12C15.59 9.31 15.59 10.69 16.16 11.88L18.5 16.83C17.77 17.18 17.19 17.78 16.85 18.51L11.88 16.16C10.69 15.59 9.31 15.59 8.12 16.16L0 20V19.18C0 18.35 0.42 17.58 1.12 17.14L7.64 13C9.08 12.08 10.92 12.08 12.36 13L14.11 14.11L13 12.36C12.08 10.92 12.08 9.08 13 7.64L17.14 1.12C17.58 0.42 18.35 0 19.18 0L20 0Z" fill="currentColor"/>
              <path d="M33.44 30.88C35.18 32.61 35.31 35.31 35.31 35.31C35.31 35.31 32.62 35.18 30.88 33.44C29.14 31.7 29.01 29.01 29.01 29.01C29.01 29.01 31.71 29.14 33.44 30.88Z" fill="currentColor"/>
              <path d="M20 40L23.84 31.88C24.41 30.69 24.41 29.31 23.84 28.12L21.5 23.17C22.23 22.82 22.81 22.22 23.15 21.49L28.12 23.84C29.31 24.41 30.69 24.41 31.88 23.84L40 20V20.82C40 21.65 39.58 22.42 38.88 22.86L32.36 27C30.92 27.92 29.08 27.92 27.64 27L25.89 25.89L27 27.64C27.92 29.08 27.92 30.92 27 32.36L22.86 38.88C22.42 39.58 21.65 40 20.82 40L20 40Z" fill="currentColor"/>
            </svg>
          </div>

          <span className="text-xs sm:text-sm font-editorial uppercase tracking-super-wide text-[#17233b]/70 font-semibold">
            I N D I A
          </span>
        </div>

        {/* Vertical Hairline Divider */}
        <div className="w-[1px] h-14 sm:h-20 bg-[#17233b]/25 my-6 sm:my-8" />

        <p className="max-w-xl text-sm sm:text-base text-[#17233b]/80 font-light leading-relaxed font-sans">
          A place to live — to return year after year. Designed as an authentic community, not a generic residential complex.
        </p>
      </div>

      {/* ========================================================
          2. THE "BUILT TO STAY" SLIDESHOW
          (Exact replica of media_1794911129463.png)
      ======================================================== */}
      <div className="relative max-w-5xl mx-auto px-6 pb-20 flex flex-col items-center text-center">
        {/* Massive Serif Title */}
        <h2 className="font-editorial text-4xl sm:text-6xl md:text-8xl text-[#17233b] font-light tracking-tight mb-8 sm:mb-12 transition-all duration-700 uppercase">
          {current.title}
        </h2>

        {/* Center Architectural Image Card */}
        <div className="relative w-full max-w-2xl aspect-[16/10] overflow-hidden rounded-sm shadow-2xl bg-[#17233b]/5 border border-[#17233b]/10 group">
          <img
            key={current.id}
            src={current.image}
            alt={current.alt}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 animate-fade-in"
          />
        </div>

        {/* Slider Controls: < 2 —————— 3 > */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 select-none">
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="p-2 text-[#17233b]/70 hover:text-[#17233b] hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
          </button>

          <span className="font-mono text-sm sm:text-base font-medium text-[#17233b]">
            {activeSlide + 1}
          </span>

          {/* Progress bar hairline */}
          <div className="w-24 sm:w-36 h-[1.5px] bg-[#17233b]/20 relative overflow-hidden rounded-full">
            <div
              className="absolute top-0 bottom-0 left-0 bg-[#17233b] transition-all duration-500 ease-out"
              style={{
                width: `${((activeSlide + 1) / slides.length) * 100}%`,
              }}
            />
          </div>

          <span className="font-mono text-sm sm:text-base font-light text-[#17233b]/60">
            {slides.length}
          </span>

          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="p-2 text-[#17233b]/70 hover:text-[#17233b] hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
          </button>
        </div>

        {/* Architectural Description */}
        <p className="max-w-2xl text-xs sm:text-sm text-[#17233b]/80 font-light leading-relaxed font-sans mt-8 px-4">
          {current.desc}
        </p>

        {/* Manifesto Tag */}
        <div className="mt-8 pt-4">
          <span className="text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase text-[#17233b] font-semibold">
            DESIGNED AS A COMMUNITY, NOT A COMPLEX
          </span>
        </div>
      </div>

      {/* ========================================================
          3. SMOOTH FULL-BLEED EXPANSION & POOL PAN SEQUENCE
          (Exact replica of media_1794911166710.png & media_1794911185595.png)
      ======================================================== */}
      <div className="relative w-full">
        {/* Pinned Tag during scroll */}
        <div className="sticky top-6 z-20 text-center py-4 pointer-events-none">
          <span className="inline-block px-5 py-2 rounded-full bg-[#b5cedb]/80 backdrop-blur-md text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase text-[#17233b] font-semibold border border-[#17233b]/10 shadow-sm">
            DESIGNED AS A COMMUNITY, NOT A COMPLEX
          </span>
        </div>

        {/* Full-bleed Villa & Pool Pan Container */}
        <div className="relative w-full min-h-[140vh] md:min-h-[180vh] flex flex-col justify-end">
          {/* Panoramic Image filling the view */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src="/assets/pool_pan.webp"
              alt="AdVentra Luxury Villa and Pool"
              className="w-full h-full object-cover object-center scale-105"
            />
            {/* Soft gradient blend at top & bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#b5cedb] via-transparent to-transparent h-48" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17233b]/30 via-transparent to-transparent" />
          </div>

          {/* The Luxury Architecture Team Quote (media_1794911185595.png) */}
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-16 pb-16 sm:pb-24 flex justify-end">
            <div className="max-w-xl text-left bg-gradient-to-t from-[#17233b]/70 via-[#17233b]/40 to-transparent p-8 sm:p-10 rounded-2xl backdrop-blur-xs text-white">
              {/* Quotation Mark SVG */}
              <div className="w-10 h-10 text-white/90 mb-4">
                <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                  <path
                    d="M23.232 30.912C23.232 34.752 20.544 38.208 16.32 38.208C11.328 38.208 5.76 33.984 5.76 22.272C5.76 14.016 9.408 6.14399 19.392 6.14399C19.968 6.14399 23.616 6.336 23.616 7.488C23.616 7.87199 23.424 8.63999 22.656 8.63999C21.888 8.63999 20.928 8.256 19.008 8.256C11.904 8.256 8.64 14.4 8.64 20.928C8.64 23.808 9.984 25.536 12.096 25.536C14.016 25.536 14.592 23.808 17.472 23.808C20.736 23.808 23.232 26.88 23.232 30.912ZM43.2 30.912C43.2 34.752 40.512 38.208 36.096 38.208C31.296 38.208 25.536 33.984 25.536 22.272C25.536 14.016 29.376 6.14399 39.36 6.14399C39.936 6.14399 43.584 6.336 43.584 7.488C43.584 7.87199 43.392 8.63999 42.624 8.63999C41.664 8.63999 40.704 8.256 38.976 8.256C31.68 8.256 28.608 14.4 28.608 20.928C28.608 23.808 29.952 25.536 32.064 25.536C33.984 25.536 34.56 23.808 37.248 23.808C40.704 23.808 43.2 26.88 43.2 30.912Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Quote Headline */}
              <blockquote className="font-editorial text-2xl sm:text-3xl md:text-4xl text-white font-light uppercase tracking-wide leading-tight sm:leading-snug mb-6">
                INSTEAD OF CORRIDORS, WALKING PATHS CONNECT THE APARTMENTS — MAKING ADVENTRA RESIDENCE FEEL CLOSER TO A GROUP OF PRIVATE HOMES THAN A STANDARD COMPLEX
              </blockquote>

              {/* Author attribution */}
              <div className="border-t border-white/20 pt-4">
                <div className="font-mono text-xs uppercase tracking-widest text-white/90 font-semibold">
                  ARCHITECTURE TEAM
                </div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-white/60">
                  ADVENTRA RESIDENCES • GAYA, BIHAR
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
