import React, { useState } from 'react';
import { Building, MapPin, Car, Shield, CheckCircle2, ArrowRight, Layers, Maximize2 } from 'lucide-react';

const projects = [
  {
    id: 'bhava-tower',
    badge: 'Flagship Landmark',
    name: 'Bhava Tower',
    tagline: 'Mixed-Use G+10 Architectural Monument',
    location: 'Sita Kund Bypass, Bhusunda More, Manpur, Gaya (823003)',
    price: '₹55 Lacs Onwards',
    floors: 'Ground + 10 Floors',
    totalFlats: '153 Luxury 3 BHK Flats',
    commercial: 'Floor 2 & 3 Dedicated Commercial Hub',
    plotArea: '50,000 Sq. Ft. Plot',
    superBuiltup: '2,50,000 Sq. Ft.',
    parking: '153 Covered Dedicated Parking',
    rera: 'RERA Approved',
    image: '/assets/projects/bhava-tower.png',
    secondaryImage: '/assets/projects/pool.webp',
    description:
      'A majestic 10-story mixed-use development positioned prominently along the Sita Kund Bypass. Combining bustling commercial and retail spaces on the lower levels with serene 3 BHK residences above, topped with world-class wellness facilities including a private pool, steam sauna, and jogging circuits.',
    highlights: [
      'G+10 Elevation with Grand Double-Height Entrance Lobby',
      'Floor 2 & 3 dedicated to premium offices and boutique retail',
      '153 dedicated parking spaces with seamless drive-through access',
      'Expansive 50,000 sq.ft. plot with comprehensive landscaped amenities',
    ],
  },
  {
    id: 'nawal-shiv-tower',
    badge: 'Exclusive Boutique',
    name: 'Nawal Shiv Bhava Tower',
    tagline: 'Ultra-Private 7-Floor Living in AP Colony',
    location: 'AP Colony, Gaya (823001)',
    price: '₹65 Lacs Onwards',
    floors: '7 Floors (Boutique Low-Density)',
    totalFlats: '12 Exclusive Private Residences',
    commercial: '100% Pure Private Residential',
    plotArea: '8,700 Sq. Ft. Plot',
    superBuiltup: '27,000 Sq. Ft.',
    parking: '12 Dedicated Stilt / Covered Parking',
    rera: 'RERA Approved',
    image: '/assets/projects/nawal-shiv-tower.webp',
    secondaryImage: '/assets/projects/terrace.webp',
    description:
      'An intimate sanctuary crafted for only 12 privileged families in the heart of AP Colony. Designed for unmatched privacy and distinction, complete with an in-house temple, shimmering swimming pool, rejuvenating jacuzzi & sauna suite, and family community hall.',
    highlights: [
      'Boutique privacy with only 12 exclusive residences',
      'Prime residential prestige in Gaya’s most coveted neighborhood: AP Colony',
      'Private swimming pool, steam/sauna, and community hall for residents',
      'Dedicated temple on premises creating daily peace and spiritual elevation',
    ],
  },
];

export default function PortfolioSection({ onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState('bhava-tower');
  const project = projects.find((p) => p.id === activeTab) || projects[0];

  return (
    <section id="projects" className="py-28 md:py-36 bg-linen-light border-y border-ink/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[1px] bg-ink/30" />
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-ink/60">
                The Portfolio
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl text-ink font-light tracking-tight">
              Featured Residences
            </h2>
          </div>

          {/* Interactive Project Switcher Tabs */}
          <div className="flex items-center p-1.5 rounded-full bg-ink/5 border border-ink/10">
            {projects.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-5 sm:px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                  activeTab === p.id
                    ? 'bg-ink text-linen shadow-md scale-[1.02]'
                    : 'text-ink/60 hover:text-ink'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Project Card Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Media Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden bg-ink/5 border border-ink/10 shadow-lg group">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-[400px] sm:h-[480px] md:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-ink/80 backdrop-blur-md text-white text-[11px] uppercase tracking-widest font-mono">
                {project.badge}
              </div>
              <div className="absolute bottom-4 right-4 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md text-ink text-xs font-semibold shadow-md flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>{project.rera}</span>
              </div>
            </div>

            {/* Thumbnail preview */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden h-28 border border-ink/10">
                <img
                  src={project.secondaryImage}
                  alt="Amenity Preview"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 text-[10px] uppercase tracking-wider text-white bg-ink/70 px-2 py-0.5 rounded">
                  Resort Amenity
                </span>
              </div>
              <div className="relative rounded-xl overflow-hidden h-28 border border-ink/10 bg-ink/5 flex items-center justify-center p-4 text-center">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-ink/50 font-mono block">
                    Starting From
                  </span>
                  <span className="font-editorial text-2xl text-ink font-semibold">
                    {project.price}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Specifications */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-ink/50 block mb-2">
                {project.tagline}
              </span>
              <h3 className="font-editorial text-4xl sm:text-5xl text-ink font-light tracking-tight mb-4">
                {project.name}
              </h3>

              <div className="flex items-center gap-2 text-xs text-ink/70 font-medium mb-6">
                <MapPin className="w-4 h-4 text-ink/50 shrink-0" />
                <span>{project.location}</span>
              </div>

              <p className="text-sm text-ink/75 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-ink/10 mb-8">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-mono text-ink/50 block mb-1">
                    Floors & Layout
                  </span>
                  <span className="text-sm font-semibold text-ink">
                    {project.floors}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest font-mono text-ink/50 block mb-1">
                    Inventory
                  </span>
                  <span className="text-sm font-semibold text-ink">
                    {project.totalFlats}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest font-mono text-ink/50 block mb-1">
                    Super Builtup Area
                  </span>
                  <span className="text-sm font-semibold text-ink">
                    {project.superBuiltup}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest font-mono text-ink/50 block mb-1">
                    Plot Dimensions
                  </span>
                  <span className="text-sm font-semibold text-ink">
                    {project.plotArea}
                  </span>
                </div>
              </div>

              {/* Key Highlights Bullet points */}
              <div className="space-y-2.5 mb-8">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-ink/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenInquiry}
                className="flex-1 py-3.5 px-6 rounded-full bg-ink text-linen text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-all hover:bg-ink/90 active:scale-95 shadow-sm"
              >
                <span>Book Private Viewing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`https://wa.me/916207282057?text=Hello%2C%20I%20am%20interested%20in%20receiving%20the%20complete%20brochure%20and%20floor%20plans%20for%20${encodeURIComponent(
                  project.name
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-full border border-ink/20 hover:border-ink text-ink text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center transition-colors"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
