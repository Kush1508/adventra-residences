import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Building, Waves, Compass, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    num: '01',
    category: 'Architecture',
    title: 'Contemporary Presence',
    subtitle: 'Ground + 10 Elevation in Gaya',
    desc: 'Clean geometric lines, expansive double-height lobbies, and floor-to-ceiling glass façades engineered to capture maximum natural light.',
    image: '/assets/projects/bhava-tower.png',
    tag: 'Bhava Tower Landmark',
  },
  {
    num: '02',
    category: 'Sanctuary',
    title: 'Intimate Exclusivity',
    subtitle: '7-Floor Boutique Living',
    desc: 'Only 12 privileged families in the coveted AP Colony enclave. Unmatched privacy with zero corridor congestion and dedicated stilt parking.',
    image: '/assets/projects/nawal-shiv-tower.webp',
    tag: 'AP Colony Enclave',
  },
  {
    num: '03',
    category: 'Holistic Life',
    title: 'Temple & Resort Spa',
    subtitle: 'Daily Peace at Your Doorstep',
    desc: 'An authentic temple for spiritual solace, paired with a temperature-controlled saltwater pool, steam sauna, and jogging circuits.',
    image: '/assets/projects/pool.webp',
    tag: 'Signature Amenities',
  },
  {
    num: '04',
    category: 'Connectivity',
    title: 'Arterial Ring Road',
    subtitle: 'Sita Kund Bypass & City Center',
    desc: 'Seamless highway connectivity to Gaya International Airport (18 mins), Gaya Junction (12 mins), and historic Bodh Gaya (20 mins).',
    image: '/assets/projects/master-plan.webp',
    tag: 'Strategic Location',
  },
];

export default function HorizontalPanels({ onOpenInquiry, onOpenApartments }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // Check if on desktop
    const isDesktop = window.innerWidth >= 768;

    if (!isDesktop) {
      // Mobile uses touch horizontal swipe cleanly
      return;
    }

    const ctx = gsap.context(() => {
      const getScrollDistance = () => Math.max(0, track.scrollWidth - window.innerWidth + 120);

      const tween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: 'none',
        scrollTrigger: {
          id: 'projectsScrollTrigger',
          trigger: container,
          pin: true,
          scrub: 0.8,
          start: 'top top',
          end: () => `+=${getScrollDistance()}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const prog = self.progress;
            setScrollProgress(prog);
            const idx = Math.min(panels.length - 1, Math.round(prog * (panels.length - 1)));
            setActiveIdx(idx);
          },
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const scrollToPanel = (idx) => {
    setActiveIdx(idx);
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) {
      if (trackRef.current && trackRef.current.children[idx]) {
        trackRef.current.children[idx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    } else {
      // On desktop, scroll the window to the exact point in the pin
      const st = ScrollTrigger.getById('projectsScrollTrigger');
      if (st) {
        const targetProgress = idx / (panels.length - 1);
        const targetY = st.start + (st.end - st.start) * targetProgress;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      } else if (containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleMobileScroll = (e) => {
    if (window.innerWidth < 768) {
      const scrollLeft = e.target.scrollLeft;
      const cardWidth = e.target.offsetWidth * 0.85;
      if (cardWidth > 0) {
        const newIdx = Math.round(scrollLeft / cardWidth);
        setActiveIdx(Math.min(panels.length - 1, Math.max(0, newIdx)));
      }
    }
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full h-screen bg-[#121824] text-linen overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8 px-6 sm:px-10 md:px-14 select-none"
    >
      {/* Top Header Row with Panel Tracker and Navigation Buttons */}
      <div className="w-full flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#d4af37]">
            02 / The Residences
          </span>
          <div className="w-8 h-[1px] bg-white/20" />
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-white/50 hidden sm:inline">
            Flagship Landmark Collection
          </span>
        </div>

        {/* Interactive Progress & Arrow Controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={() => scrollToPanel(Math.max(0, activeIdx - 1))}
            disabled={activeIdx === 0}
            className="p-1 rounded-full text-white/60 hover:text-white disabled:opacity-20 transition-all hover:scale-110 cursor-pointer"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
          </button>

          <span className="text-xs font-mono text-white/80">
            0{activeIdx + 1} —————— 0{panels.length}
          </span>

          <button
            onClick={() => scrollToPanel(Math.min(panels.length - 1, activeIdx + 1))}
            disabled={activeIdx === panels.length - 1}
            className="p-1 rounded-full text-white/60 hover:text-white disabled:opacity-20 transition-all hover:scale-110 cursor-pointer"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 stroke-[1.5]" />
          </button>

          <div className="w-20 sm:w-28 h-[2px] bg-white/10 relative overflow-hidden rounded-full hidden sm:block">
            <div
              className="h-full bg-[#d4af37] transition-all duration-200 ease-out"
              style={{ width: `${((activeIdx + 1) / panels.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* 
        Horizontal Moving Track:
        Glides seamlessly from right to left across the screen as user scrolls down.
        Zero dead space — immediately followed by next section when complete.
      */}
      <div
        onScroll={handleMobileScroll}
        className="relative my-auto w-full overflow-x-auto md:overflow-visible py-2 no-scrollbar snap-x"
      >
        <div
          ref={trackRef}
          className="flex gap-6 sm:gap-8 md:gap-10 transition-transform duration-100 ease-out will-change-transform pl-1 sm:pl-2"
        >
          {panels.map((panel, idx) => (
            <div
              key={panel.num}
              className={`w-[84vw] sm:w-[62vw] md:w-[46vw] lg:w-[36vw] max-w-[480px] shrink-0 snap-center rounded-2xl bg-white/[0.05] backdrop-blur-md border p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 group shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${
                activeIdx === idx
                  ? 'border-[#d4af37]/60 shadow-[0_20px_60px_rgba(212,175,55,0.15)]'
                  : 'border-white/10 hover:border-[#d4af37]/40'
              }`}
            >
              {/* Panel Header & Titles */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-editorial text-3xl sm:text-4xl text-[#d4af37] font-light">
                    {panel.num}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest font-mono text-white/80">
                    {panel.category}
                  </span>
                </div>

                <h3 className="font-editorial text-xl sm:text-2xl md:text-3xl text-white font-light tracking-tight mb-1">
                  {panel.title}
                </h3>
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-linen/60 block mb-4">
                  {panel.subtitle}
                </span>

                {/* Image Frame */}
                <div className="relative h-40 sm:h-48 md:h-52 rounded-xl overflow-hidden mb-4 border border-white/10 bg-black/40">
                  <img
                    src={panel.image}
                    alt={panel.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-wider font-mono text-white/95 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                    {panel.tag}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-linen/70 leading-relaxed font-light line-clamp-3">
                  {panel.desc}
                </p>
              </div>

              {/* Panel Footer CTA */}
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => {
                    if (idx === 0 || idx === 1) {
                      if (onOpenApartments) onOpenApartments();
                      else onOpenInquiry();
                    } else {
                      onOpenInquiry();
                    }
                  }}
                  className="text-xs uppercase tracking-widest text-[#d4af37] hover:text-white flex items-center gap-1.5 transition-colors font-mono font-medium cursor-pointer"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] font-mono text-white/35 uppercase tracking-widest">
                  AdVentra Gaya
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="w-full flex items-center justify-between border-t border-white/10 pt-3 text-xs font-mono text-white/40">
        <span className="hidden sm:inline">Scroll down or click arrows to explore residences</span>
        <span className="sm:hidden">Swipe or tap arrows</span>
        <span className="uppercase tracking-widest text-[#d4af37] text-[11px]">
          Interactive Residences
        </span>
      </div>
    </section>
  );
}
