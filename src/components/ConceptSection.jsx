import React, { useRef } from 'react';
import { ShieldCheck, Compass, Sparkles, Building2 } from 'lucide-react';

export default function ConceptSection() {
  const videoRef = useRef(null);

  return (
    <section id="concept" className="relative bg-linen py-28 md:py-36 overflow-hidden">
      {/* Moving Transparent Bougainvillea Video Overlay (Top-Left Hanging) */}
      <div className="absolute -top-12 -left-12 sm:-left-6 w-72 sm:w-96 md:w-[480px] lg:w-[540px] pointer-events-none z-20 opacity-95">
        <video
          ref={videoRef}
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Pre-title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[1px] bg-ink/30" />
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-ink/60">
            The Philosophy • Gaya
          </span>
        </div>

        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Manifesto Headline */}
          <div className="lg:col-span-8">
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-ink leading-[1.05] tracking-tight">
              A private enclave crafted around{' '}
              <span className="font-italic-accent text-ink/80 font-normal">
                tranquility, modern luxury,
              </span>{' '}
              and timeless community.
            </h2>

            <p className="mt-8 text-base sm:text-lg text-ink/75 font-light leading-relaxed max-w-2xl">
              Inspired by the world’s most refined boutique residential architecture, AdVentra Residences
              introduces a new standard of living to Gaya, Bihar. Here, private sanctuaries seamlessly integrate
              with grand communal amenities — from our consecrated in-house temple and refreshing saltwater swimming pool
              to revitalizing saunas and family jogging tracks.
            </p>
          </div>

          {/* Architecture Details Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-8 pt-4 border-t lg:border-t-0 lg:border-l border-ink/15 lg:pl-10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-ink/50 block mb-2">
                Curated Architecture
              </span>
              <p className="text-sm text-ink/80 leading-relaxed">
                Generous ceiling heights, sun-drenched balconies, and intentional privacy barriers that ensure each home feels distinct and peaceful.
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-ink/50 block mb-2">
                RERA Certification
              </span>
              <div className="flex items-center gap-2 text-ink font-semibold text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Government & RERA Approved</span>
              </div>
              <p className="text-xs text-ink/60 mt-1">
                Complete transparency, clear titles, and structured construction timelines.
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-ink/50 block mb-2">
                Dual Flagship Sites
              </span>
              <p className="text-xs text-ink/70">
                • <strong>Bhava Tower:</strong> Sita Kund Bypass, Manpur (G+10)<br />
                • <strong>Nawal Shiv Bhava:</strong> AP Colony, Gaya (7 Floors)
              </p>
            </div>
          </div>
        </div>

        {/* Highlight Stats Strip */}
        <div className="mt-20 pt-12 border-t border-ink/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <span className="block font-editorial text-4xl sm:text-5xl text-ink font-light">
              2.77L+
            </span>
            <span className="text-[11px] uppercase tracking-widest text-ink/60 font-mono mt-1 block">
              Sq.Ft. Builtup Area
            </span>
          </div>

          <div>
            <span className="block font-editorial text-4xl sm:text-5xl text-ink font-light">
              165
            </span>
            <span className="text-[11px] uppercase tracking-widest text-ink/60 font-mono mt-1 block">
              Total Residences
            </span>
          </div>

          <div>
            <span className="block font-editorial text-4xl sm:text-5xl text-ink font-light">
              10+
            </span>
            <span className="text-[11px] uppercase tracking-widest text-ink/60 font-mono mt-1 block">
              Resort Amenities
            </span>
          </div>

          <div>
            <span className="block font-editorial text-4xl sm:text-5xl text-ink font-light">
              ₹55L+
            </span>
            <span className="text-[11px] uppercase tracking-widest text-ink/60 font-mono mt-1 block">
              Starting Price
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
