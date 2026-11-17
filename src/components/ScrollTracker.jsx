import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

export default function ScrollTracker() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOverDark, setIsOverDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = Math.round((scrollY / totalScroll) * 100);
        setScrollProgress(Math.min(99, Math.max(0, currentProgress)));
      }

      // Check if we are over light or dark sections
      // Hero (0 - 1500px): Dark (sky/night)
      // Dome/Slideshow (1500 - 3200px): Light/Blue
      // Concept/Location (3200+): Linen cream / aerial dark
      const heroHeight = window.innerHeight * 1.8;
      if (scrollY < heroHeight) {
        setIsOverDark(true);
      } else {
        setIsOverDark(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formattedNum = scrollProgress < 10 ? `0${scrollProgress}` : `${scrollProgress}`;

  return (
    <div className="fixed left-[52px] sm:left-[68px] md:left-[88px] -translate-x-1/2 top-24 sm:top-28 z-40 hidden sm:flex flex-col items-center gap-2 pointer-events-none select-none transition-colors duration-500">
      {/* Dynamic 2-digit numeric indicator (matching 00 to 99 in all references) */}
      <span
        className={`text-[11px] font-mono tracking-widest font-semibold transition-colors duration-300 ${
          isOverDark ? 'text-white' : 'text-ink'
        }`}
      >
        {formattedNum}
      </span>

      {/* Vertical Hairline Track */}
      <div
        className={`w-[1px] h-20 relative overflow-hidden transition-colors duration-300 ${
          isOverDark ? 'bg-white/25' : 'bg-ink/20'
        }`}
      >
        <div
          className={`w-full transition-all duration-150 ease-out ${
            isOverDark ? 'bg-white' : 'bg-ink'
          }`}
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Vertical SCROLL label */}
      <span
        className={`text-[9px] uppercase tracking-[0.3em] font-mono transition-colors duration-300 ${
          isOverDark ? 'text-white/70' : 'text-ink/60'
        }`}
        style={{ writingMode: 'vertical-rl' }}
      >
        Scroll
      </span>

      <ArrowDown
        className={`w-3.5 h-3.5 animate-bounce mt-1 transition-colors duration-300 ${
          isOverDark ? 'text-white/60' : 'text-ink/50'
        }`}
      />
    </div>
  );
}
