import React from 'react';

export default function DomeTransitionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#b5cedb] text-[#17233b] pt-16 pb-28 md:pb-40">
      {/* 
        The Huge Powder-Blue Arched Dome Transition 
        (Exact replica of media_1794911012408.png)
      */}
      <div className="relative max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        {/* Curved Arched Heading SVG */}
        <div className="w-full max-w-4xl h-44 sm:h-56 md:h-72 relative flex items-center justify-center">
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

        {/* Vertical Hairline Divider extending down */}
        <div className="w-[1px] h-16 sm:h-20 bg-[#17233b]/25 my-8" />

        {/* Intro Subtitle */}
        <p className="max-w-xl text-sm sm:text-base text-[#17233b]/80 font-light leading-relaxed font-sans">
          A place to live — to return year after year. Designed as an authentic community, not a generic residential complex.
        </p>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl w-full text-left">
          <div className="p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-[#17233b]/10 flex flex-col justify-between">
            <div>
              <span className="font-editorial text-3xl text-[#17233b] font-light block mb-3">01</span>
              <h3 className="font-editorial text-2xl text-[#17233b] font-medium mb-3">Real-Life Location</h3>
              <p className="text-xs sm:text-sm text-[#17233b]/75 leading-relaxed font-light">
                Positioned strategically between AP Colony and Sita Kund Bypass, offering a rare balance of quiet residential seclusion with seamless ring road access.
              </p>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#17233b]/50 mt-6 block">
              Connectivity & Ease
            </span>
          </div>

          <div className="p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-[#17233b]/10 flex flex-col justify-between">
            <div>
              <span className="font-editorial text-3xl text-[#17233b] font-light block mb-3">02</span>
              <h3 className="font-editorial text-2xl text-[#17233b] font-medium mb-3">Built to Stay</h3>
              <p className="text-xs sm:text-sm text-[#17233b]/75 leading-relaxed font-light">
                Drawing on timeless Mediterranean architectural durability with natural stone façades, double-height ceiling voids, and sun-drenched private balconies.
              </p>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#17233b]/50 mt-6 block">
              Architectural Permanence
            </span>
          </div>

          <div className="p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-[#17233b]/10 flex flex-col justify-between">
            <div>
              <span className="font-editorial text-3xl text-[#17233b] font-light block mb-3">03</span>
              <h3 className="font-editorial text-2xl text-[#17233b] font-medium mb-3">Boutique Concept</h3>
              <p className="text-xs sm:text-sm text-[#17233b]/75 leading-relaxed font-light">
                A community where daily spiritual peace at the in-house temple blends seamlessly with resort wellness, private saltwater swimming, and sauna suites.
              </p>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#17233b]/50 mt-6 block">
              Holistic Well-being
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
