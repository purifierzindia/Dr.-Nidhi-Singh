import React, { useState } from 'react';
import { DemoBanner } from './components/DemoBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { PregnancyCareFeature } from './components/PregnancyCareFeature';
import { PatientExperienceSection } from './components/PatientExperienceSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationsSection } from './components/LocationsSection';
import { AppointmentSection } from './components/AppointmentSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [selectedLocationId, setSelectedLocationId] = useState<string | undefined>(undefined);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsBookingModalOpen(true);
  };

  const handleSelectLocation = (locationId: string) => {
    setSelectedLocationId(locationId);
    // Smooth scroll down to appointment section
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1E36] font-sans antialiased flex flex-col selection:bg-[#EBDAD5] selection:text-[#8A4B42]">
      {/* KK MARTECH Sales Demo Banner */}
      <DemoBanner />

      {/* Main Sticky Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Editorial Hero */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Minimal Verified Trust Strip */}
        <TrustStrip />

        {/* About Dr. Nidhi Singh */}
        <AboutSection />

        {/* Areas of Expertise */}
        <ExpertiseSection onSelectService={handleSelectService} />

        {/* Dedicated Pregnancy Care Feature */}
        <PregnancyCareFeature onOpenBooking={handleOpenBooking} />

        {/* Patient Experience: Care That Begins With Listening */}
        <PatientExperienceSection />

        {/* Why Patients Choose the Practice */}
        <WhyChooseSection />

        {/* Verified Patient Reviews */}
        <ReviewsSection />

        {/* Consultation Locations in Dwarka (Femme Med Hospital, Sector 6, Sector 10) */}
        <LocationsSection onSelectLocationForBooking={handleSelectLocation} />

        {/* Final Conversion CTA & Appointment Form */}
        <AppointmentSection
          selectedLocationId={selectedLocationId}
          selectedServiceTitle={selectedService}
        />

        {/* Clean FAQs Accordion */}
        <FaqSection />
      </main>

      {/* Refined Footer */}
      <Footer />

      {/* Sticky Mobile Action Bar (CALL | WHATSAPP | APPOINTMENT) for 390px mobile */}
      <MobileActionBar onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialService={selectedService}
        initialLocationId={selectedLocationId}
      />
    </div>
  );
}
