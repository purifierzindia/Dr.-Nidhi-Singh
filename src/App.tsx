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
        {/* 1. Editorial Hero with Doctor Photograph */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Minimal Verified Trust Strip */}
        <TrustStrip />

        {/* 3. Editorial About Dr. Nidhi Singh */}
        <AboutSection />

        {/* 4. Clinical Expertise */}
        <ExpertiseSection onSelectService={handleSelectService} />

        {/* 5. One Strong Clinic/Hospital Visual & Practice Centers */}
        <LocationsSection onSelectLocationForBooking={handleSelectLocation} />

        {/* 6. Patient Care (Experience & Personalized Pregnancy Journey) */}
        <PatientExperienceSection />
        <PregnancyCareFeature onOpenBooking={handleOpenBooking} />

        {/* 7. Practice Foundations & Verified Reviews */}
        <WhyChooseSection />
        <ReviewsSection />

        {/* 8. Appointment Scheduling */}
        <AppointmentSection
          selectedLocationId={selectedLocationId}
          selectedServiceTitle={selectedService}
        />

        {/* 9. Frequently Asked Questions */}
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
