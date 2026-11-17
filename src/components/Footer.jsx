import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, MessageSquare, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenInquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink text-linen py-20 border-t border-linen/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Call to Action Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-16 border-b border-linen/10 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-linen/50 block mb-2">
              Begin Your Journey
            </span>
            <h3 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight">
              Experience Elevated Living in Gaya
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="https://wa.me/916207282057"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp</span>
            </a>
            <button
              onClick={onOpenInquiry}
              className="py-4 px-8 rounded-full bg-linen text-ink hover:bg-linen-light text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center transition-all shadow-md"
            >
              Request Brochure & Pricing
            </button>
          </div>
        </div>

        {/* Detailed Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-linen/10">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-bold tracking-widest uppercase font-sans text-white">
                AdVentra
              </span>
            </div>
            <p className="text-xs text-linen/70 leading-relaxed font-light mb-6">
              A pioneering real estate developer introducing architectural purity, holistic wellness, and community living to Gaya, Bihar.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>100% RERA Registered</span>
            </div>
          </div>

          {/* Development Sites */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-mono text-linen/50 mb-4">
              Featured Sites
            </h4>
            <div className="space-y-4 text-xs text-linen/80">
              <div>
                <strong className="block text-white text-sm">Bhava Tower</strong>
                <span className="text-linen/60 block">Sita Kund Bypass, Bhusunda More, Manpur, Gaya 823003</span>
                <span className="text-[10px] text-gold font-mono">G+10 Commercial & 3 BHK Flats</span>
              </div>
              <div>
                <strong className="block text-white text-sm">Nawal Shiv Bhava Tower</strong>
                <span className="text-linen/60 block">AP Colony, Gaya 823001</span>
                <span className="text-[10px] text-gold font-mono">7-Floor Boutique Residences</span>
              </div>
            </div>
          </div>

          {/* Direct Sales Desk */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-mono text-linen/50 mb-4">
              Inquiries & Visits
            </h4>
            <ul className="space-y-3 text-xs text-linen/80">
              <li>
                <a
                  href="tel:+916207282057"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <span>+91 6207282057</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:kushk1508@gmail.com"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <span>kushk1508@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-linen/65">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Sales Experience Gallery, Gaya, Bihar</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Navigation & Back to Top */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.25em] font-mono text-linen/50 mb-4">
                Explore
              </h4>
              <ul className="space-y-2 text-xs text-linen/70">
                <li><a href="#hero" className="hover:text-white transition-colors">Hero Overview</a></li>
                <li><a href="#concept" className="hover:text-white transition-colors">The Philosophy</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Residences Portfolio</a></li>
                <li><a href="#amenities" className="hover:text-white transition-colors">Wellness Amenities</a></li>
                <li><a href="#location" className="hover:text-white transition-colors">Location & Connectivity</a></li>
              </ul>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-linen/60 hover:text-white transition-colors font-mono"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-linen/50 font-mono gap-4">
          <p>© 2026 AdVentra Residences. All rights reserved.</p>
          <p>Designed to perfection with luxury architectural standards.</p>
        </div>
      </div>
    </footer>
  );
}
