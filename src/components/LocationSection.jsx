import React from 'react';
import { MapPin, Navigation, Clock, Plane, Train, Landmark, School } from 'lucide-react';

const landmarks = [
  {
    icon: Landmark,
    title: 'Historic Bodh Gaya & Mahabodhi Temple',
    time: '20 Mins',
    desc: 'World Heritage spiritual center and international cultural destination.',
  },
  {
    icon: Plane,
    title: 'Gaya International Airport',
    time: '18 Mins',
    desc: 'Seamless domestic and international flight connectivity.',
  },
  {
    icon: Train,
    title: 'Gaya Junction Central Station',
    time: '12 Mins',
    desc: 'Grand trunk railway route connecting to Delhi, Kolkata, and Mumbai.',
  },
  {
    icon: School,
    title: 'AP Colony Elite Education & Hospitals',
    time: '5 Mins',
    desc: 'Top CBSE/ICSE institutions, super-specialty medical centers, and shopping avenues.',
  },
];

export default function LocationSection() {
  return (
    <section id="location" className="py-28 md:py-36 bg-linen-light relative overflow-hidden border-t border-ink/10">
      {/* Third Moving Bougainvillea Video Overlay (Bottom-Left Corner) */}
      <div className="absolute -bottom-16 -left-16 sm:-left-8 w-72 sm:w-96 md:w-[480px] pointer-events-none z-20 opacity-90">
        <video
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          disablePictureInPicture
          className="w-full h-auto object-contain"
        >
          <source src="/assets/flowers/bougainvillea_03.webm" type="video/webm" />
        </video>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[1px] bg-ink/30" />
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-ink/60">
              Strategic Placement
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl text-ink font-light tracking-tight">
            Gaya’s Most Prestigious Enclaves
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink/70 font-light leading-relaxed">
            Positioned in the twin epicenters of Gaya: the tranquil residential core of <strong>AP Colony</strong> and the high-growth arterial corridor of <strong>Sita Kund Bypass</strong>.
          </p>
        </div>

        {/* Master Location Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Master Plan / Visual Map Mockup */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-ink/10 shadow-lg group">
            <img
              src="/assets/projects/master-plan.webp"
              alt="Gaya Location Landscape"
              className="w-full h-[360px] sm:h-[420px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-white/70 block mb-1">
                  Arterial Highway & Quiet Luxury
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-light">
                  Direct Ring Road & City Center Access
                </h3>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs">
                <Navigation className="w-3.5 h-3.5 text-gold" />
                <span>Gaya, Bihar • 823001 & 823003</span>
              </div>
            </div>
          </div>

          {/* Right Travel Time Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {landmarks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white/80 border border-ink/10 hover:border-ink/20 transition-all duration-300 flex items-start gap-4 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-ink/5 text-ink flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-semibold text-ink">
                        {item.title}
                      </h4>
                      <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-xs text-ink/65 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
