import React, { useState } from 'react';
import CurtainPreloader from './components/CurtainPreloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollTracker from './components/ScrollTracker';
import DomeAndSlideshowSection from './components/DomeAndSlideshowSection';
import ConceptAndLocationSequence from './components/ConceptAndLocationSequence';
import HorizontalPanels from './components/HorizontalPanels';
import AmenitiesSection from './components/AmenitiesSection';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';
import ApartmentsCatalogModal from './components/ApartmentsCatalogModal';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isApartmentsOpen, setIsApartmentsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-linen text-ink overflow-x-clip selection:bg-powder selection:text-ink">
      {/* 1. First-Visit Velvet Plum Landing Screen with Arched Cutout & Portal Transition */}
      <CurtainPreloader />

      {/* 2. Floating Left Vertical Scroll Bar (ERA Residence style 00 to 99) */}
      <ScrollTracker />

      {/* 3. Floating Luxury Header with Rotating AdVentra Badge & Select An Apartment */}
      <Navbar
        onOpenInquiry={() => setIsInquiryOpen(true)}
        onOpenApartments={() => setIsApartmentsOpen(true)}
      />

      <main>
        {/* 4. Fullscreen Panoramic Hero with Day/Night Switch, Pool Pan & Hotspot Pins */}
        <Hero
          onOpenInquiry={() => setIsInquiryOpen(true)}
          onOpenApartments={() => setIsApartmentsOpen(true)}
        />

        {/* 5. Powder-Blue Dome Arch + "BUILT TO STAY" Slideshow + Pool Expansion Quote */}
        <DomeAndSlideshowSection />

        {/* 6. Linen Cream Concept + Horizontal New Golden Mile Slide + Wavy Route Timeline + Aerial Clouds */}
        <ConceptAndLocationSequence
          onOpenApartments={() => setIsApartmentsOpen(true)}
        />

        {/* 7. Horizontal Showcase Panels for Bhava Tower & Nawal Shiv Bhava Tower */}
        <HorizontalPanels
          onOpenInquiry={() => setIsInquiryOpen(true)}
          onOpenApartments={() => setIsApartmentsOpen(true)}
        />

        {/* 8. Luxury Amenities Grid (Saltwater Pool, Sauna, Spiritual Temple, Gym) */}
        <AmenitiesSection />
      </main>

      {/* 10. Footer */}
      <Footer onOpenInquiry={() => setIsInquiryOpen(true)} />

      {/* 11. Fullscreen Interactive Apartments Catalog Modal */}
      <ApartmentsCatalogModal
        isOpen={isApartmentsOpen}
        onClose={() => setIsApartmentsOpen(false)}
        onOpenInquiry={() => {
          setIsApartmentsOpen(false);
          setIsInquiryOpen(true);
        }}
      />

      {/* 12. VIP Inquiry Modal with Instant WhatsApp Dispatch */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />

      {/* 13. Floating Quick WhatsApp Action */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/916207282057?text=Hello%20AdVentra%2C%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20residences%20in%20Gaya."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full" />
          </div>
          <span className="text-xs uppercase tracking-wider font-semibold pr-1">
            Chat on WhatsApp
          </span>
        </a>
      </aside>
    </div>
  );
}
