import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenInquiry, onOpenApartments }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 60);
      setRotationAngle((prev) => prev + (currentScrollY - lastScrollY) * 0.4);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-linen/90 backdrop-blur-md py-3 border-b border-ink/10 shadow-sm text-ink'
            : 'bg-transparent py-5 sm:py-6 text-white'
        }`}
      >
        <div className="w-full px-6 sm:px-10 md:px-14 flex items-start justify-between">
          {/* Left Brand Mark & Location */}
          <div className="flex items-center gap-4">
            <a href="#hero" className="flex items-center gap-3 group">
              {/* Rotating Scroll Badge */}
              <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                <svg
                  viewBox="0 0 800 800"
                  className="w-full h-full transition-transform duration-100 ease-out"
                  style={{ transform: `rotate(${rotationAngle}deg)` }}
                >
                  <defs>
                    <path id="navTopArc" d="M 125,400 A 275,275 0 0 1 675,400" />
                    <path id="navBottomArc" d="M 675,400 A 275,275 0 0 1 125,400" />
                  </defs>
                  <circle cx="400" cy="400" r="390" fill="none" stroke="currentColor" strokeWidth="12" opacity="0.25" />
                  <g fill="currentColor" fontFamily="Arial, sans-serif" fontSize="52" fontWeight="600" letterSpacing="10">
                    <text textAnchor="middle"><textPath href="#navTopArc" startOffset="50%">ADVENTRA</textPath></text>
                    <text textAnchor="middle"><textPath href="#navBottomArc" startOffset="50%">RESIDENCES</textPath></text>
                  </g>
                </svg>

                {/* Center 8-Petal Luxury Rosette Motif (Matching ERA Residence Reference) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-5 h-5 fill-current">
                    <path d="M50 20 C52 35, 65 48, 80 50 C65 52, 52 65, 50 80 C48 65, 35 52, 20 50 C35 48, 48 35, 50 20 Z" opacity="0.9" />
                    <circle cx="50" cy="50" r="4" fill="currentColor" />
                  </svg>
                </div>
              </div>

              <div className={`flex flex-col transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <span className="text-base md:text-lg font-bold tracking-widest uppercase font-sans text-ink">
                  AdVentra
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase -mt-0.5 text-ink/60">
                  Gaya, Bihar
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links (shown only when scrolled down into content) */}
          <nav className={`hidden lg:flex items-center gap-8 pt-3 transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <a
              href="#concept"
              className="text-xs uppercase tracking-[0.2em] font-medium text-ink hover:text-ink/60 transition-colors"
            >
              The Concept
            </a>
            <a
              href="#projects"
              className="text-xs uppercase tracking-[0.2em] font-medium text-ink hover:text-ink/60 transition-colors"
            >
              Residences
            </a>
            <a
              href="#amenities"
              className="text-xs uppercase tracking-[0.2em] font-medium text-ink hover:text-ink/60 transition-colors"
            >
              Amenities
            </a>
            <a
              href="#location"
              className="text-xs uppercase tracking-[0.2em] font-medium text-ink hover:text-ink/60 transition-colors"
            >
              Location
            </a>
          </nav>

          {/* Right Action Links (Exact 1:1 replica of media_1794912431919.png) */}
          <div className="flex flex-col items-end text-right select-none pt-1">
            {/* SELECT / AN APARTMENT (Two-line Didone with hairline underline under AN APARTMENT) */}
            <button
              onClick={onOpenApartments}
              className={`group flex flex-col items-end font-editorial text-sm sm:text-base md:text-[18px] uppercase tracking-[0.08em] leading-[1.08] transition-all hover:opacity-80 ${
                scrolled ? 'text-ink' : 'text-white'
              }`}
            >
              <span>SELECT</span>
              <span className={`border-b pb-0.5 ${scrolled ? 'border-ink/60' : 'border-white'}`}>
                AN APARTMENT
              </span>
            </button>

            {/* BOOK A CALL */}
            <button
              onClick={onOpenInquiry}
              className={`text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] transition-colors mt-2 ${
                scrolled ? 'text-ink/70 hover:text-ink' : 'text-white/80 hover:text-white'
              }`}
            >
              BOOK A CALL
            </button>

            {/* CONTACT */}
            <a
              href="https://wa.me/916207282057?text=Hello%20AdVentra%20Residences%2C%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20projects%20in%20Gaya."
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] transition-colors mt-1 ${
                scrolled ? 'text-ink/70 hover:text-ink' : 'text-white/80 hover:text-white'
              }`}
            >
              CONTACT
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors mt-1 ${
              scrolled ? 'text-ink hover:bg-ink/5' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-linen flex flex-col justify-between p-8 pt-28 lg:hidden animate-in fade-in duration-300">
          <div className="flex flex-col gap-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-ink/40 font-mono">
              Navigation
            </span>
            <a
              href="#concept"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-editorial tracking-tight text-ink hover:text-ink/60"
            >
              The Concept
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-editorial tracking-tight text-ink hover:text-ink/60"
            >
              Featured Residences
            </a>
            <a
              href="#amenities"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-editorial tracking-tight text-ink hover:text-ink/60"
            >
              Wellness & Amenities
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-editorial tracking-tight text-ink hover:text-ink/60"
            >
              Prime Gaya Location
            </a>
          </div>

          <div className="flex flex-col gap-3 pt-8 border-t border-ink/10">
            <a
              href="https://wa.me/916207282057"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-emerald-600 text-white text-xs uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp (+91 6207282057)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3.5 rounded-full bg-ink text-linen text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
            >
              <span>Request Private Brochure</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
