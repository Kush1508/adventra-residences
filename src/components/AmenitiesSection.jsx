import React from 'react';
import {
  Sparkles,
  Waves,
  Dumbbell,
  Flame,
  Users,
  Gamepad2,
  Trees,
  Briefcase,
  Zap,
} from 'lucide-react';

const amenities = [
  {
    icon: Sparkles,
    title: 'Sanctified Temple',
    desc: 'An exquisitely designed, peaceful temple located within the compound, offering daily solace and spiritual grace for families.',
    tag: 'Spiritual Well-being',
  },
  {
    icon: Waves,
    title: 'Saltwater Swimming Pool',
    desc: 'Crystal-clear pool with dedicated shallow zones for children, private sundecks, and poolside lounging under the open sky.',
    tag: 'Resort Living',
  },
  {
    icon: Dumbbell,
    title: 'Fitness & Cardio Studio',
    desc: 'Fully equipped gymnasium with state-of-the-art strength training and cardiovascular equipment designed for peak wellness.',
    tag: 'Health & Vitality',
  },
  {
    icon: Flame,
    title: 'Jacuzzi, Steam & Sauna',
    desc: 'Thermal therapy suites designed to detoxify, soothe tired muscles, and provide an authentic spa experience at your doorstep.',
    tag: 'Hydrotherapy Spa',
  },
  {
    icon: Users,
    title: 'Grand Community Centre',
    desc: 'An expansive, climate-controlled banquet hall for private family celebrations, festive gatherings, and cultural evenings.',
    tag: 'Social Life',
  },
  {
    icon: Gamepad2,
    title: 'Kids Adventure Play Park',
    desc: 'Secure, rubberized open-air play zones with modern equipment where children can explore, socialize, and play safely.',
    tag: 'Family Focused',
  },
  {
    icon: Trees,
    title: 'Landscaped Jogging Trail',
    desc: 'Tree-lined paved tracks winding through native flowering flora for refreshing morning walks and evening jogs.',
    tag: 'Green Living',
  },
  {
    icon: Briefcase,
    title: 'Executive Conference Hall',
    desc: 'High-speed internet-ready conference lounge with audio-visual presentation capabilities for hybrid and remote work.',
    tag: 'Business Suite',
  },
  {
    icon: Zap,
    title: '100% Dedicated EV Parking',
    desc: '1:1 allocated covered parking bays with pre-installation conduits for optional EV car charging infrastructure.',
    tag: 'Future Ready',
  },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-28 md:py-36 bg-linen relative overflow-hidden">
      {/* Moving Transparent Bougainvillea Video Overlay (Top-Right Framing) */}
      <div className="absolute -top-10 -right-16 sm:-right-8 w-72 sm:w-96 md:w-[480px] lg:w-[560px] pointer-events-none z-20 opacity-90">
        <video
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          disablePictureInPicture
          className="w-full h-auto object-contain"
        >
          <source src="/assets/flowers/bougainvillea_02.webm" type="video/webm" />
        </video>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[1px] bg-ink/30" />
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-ink/60">
              Curated Lifestyle
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl text-ink font-light tracking-tight">
            Wellness, Leisure & Community
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink/70 font-light leading-relaxed">
            Every amenity has been curated to transform everyday living into an unhurried, resort-inspired retreat.
          </p>
        </div>

        {/* Amenity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-white/70 hover:bg-white border border-ink/10 hover:border-ink/20 transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-ink/5 group-hover:bg-ink group-hover:text-linen text-ink flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-ink/40">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl text-ink font-medium mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink/70 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-ink/5 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-ink/40 font-mono">
                    Included with Residence
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
