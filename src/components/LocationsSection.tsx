import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, ArrowUpRight, Mail, Building2, ShieldCheck } from 'lucide-react';
import { CONSULTATION_LOCATIONS, DOCTOR_PROFILE } from '../data/doctorData';

interface LocationsSectionProps {
  onSelectLocationForBooking: (locationId: string) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onSelectLocationForBooking }) => {
  const [hospitalImg, setHospitalImg] = useState('/ayushman-hospital.webp');

  return (
    <section id="locations" className="py-14 sm:py-20 md:py-24 bg-[#FAF8F5] border-t border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B87D70] mb-2 block">
            Dwarka Healthcare Network
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#0F1E36] font-semibold tracking-tight">
            Consultation Practice & Hospital Facilities
          </h2>
          <div className="w-12 h-0.5 bg-[#D4A396] mt-3 mb-4"></div>
          <p className="text-sm sm:text-base text-slate-600 font-light">
            Dr. Nidhi Singh consults at verified medical facilities in Dwarka, New Delhi, providing outpatient appointments, high-risk obstetric monitoring, and 24/7 delivery services.
          </p>
        </div>

        {/* ONE STRONG CLINIC / HOSPITAL VISUAL — Authentic Dwarka Healthcare Facility Anchor */}
        <div className="mb-10 sm:mb-12 rounded-2xl overflow-hidden border border-[#EAE3D9] bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* The Authentic Hospital Image */}
            <div className="lg:col-span-7 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-96 relative overflow-hidden bg-slate-100">
              <img
                src={hospitalImg}
                onError={() => setHospitalImg('/ayushman-hospital.jpg')}
                alt="Ayushman Hospital & Health Services, Dwarka - Consultation Practice"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/80 via-transparent to-transparent lg:hidden" />
              
              <div className="absolute bottom-3 left-4 right-4 lg:hidden text-white">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D4A396] block">
                  Hospital Consultation Center
                </span>
                <span className="text-base font-serif font-bold">
                  Ayushman Hospital & Health Services
                </span>
              </div>
            </div>

            {/* Hospital Editorial Context & Verification Badge */}
            <div className="lg:col-span-5 p-6 sm:p-8 text-left space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#FAF8F5] text-[#0F1E36] border border-[#EAE3D9]">
                <Building2 className="w-3.5 h-3.5 text-[#B87D70]" />
                <span>Dwarka Hospital Affiliations</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0F1E36] leading-snug">
                Modern Clinical Facilities in Dwarka
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Hospital OPD consultations and planned obstetric admissions take place at established healthcare centers across Dwarka (Sector 8, Sector 6, and Sector 10), supported by state-of-the-art diagnostic labs, ultrasound suites, labor rooms, and advanced laparoscopic surgical infrastructure.
              </p>

              <div className="pt-2 border-t border-[#EAE3D9] space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#5E6D58] shrink-0" />
                  <span><strong>24/7 Maternity Access:</strong> Femme Med Hospital, Sector 8 Dwarka</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#5E6D58] shrink-0" />
                  <span><strong>Hospital Consultant OPD:</strong> Ayushman Hospital, Sector 10 Dwarka</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#5E6D58] shrink-0" />
                  <span><strong>Evening Clinic Sessions:</strong> Aj Gynae, Sector 6 Dwarka</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Locations Grid — Simplified, Reduced Inner Padding, No Duplicate Image Crops */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {CONSULTATION_LOCATIONS.map((loc) => {
            const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              loc.mapQuery
            )}`;

            return (
              <div
                key={loc.id}
                className="rounded-xl bg-white border border-[#EAE3D9] p-4 sm:p-5 hover:border-[#B87D70]/60 transition-colors flex flex-col justify-between text-left relative"
              >
                <div>
                  {/* Location Tag */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#8A4B42] bg-[#EBDAD5]/50 px-2 py-0.5 rounded-md">
                      <MapPin className="w-3 h-3 text-[#8A4B42]" />
                      <span>{loc.sector}</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">Verified Center</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#0F1E36] mb-0.5">
                    {loc.name}
                  </h3>

                  <p className="text-xs font-medium text-[#735A52] mb-3">
                    {loc.role}
                  </p>

                  <div className="space-y-2.5 pt-2 text-xs text-slate-600 border-t border-[#EAE3D9]/60">
                    {/* Address */}
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#B87D70] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-[#0F1E36]">Address: </span>
                        <span>{loc.address}, {loc.city}</span>
                      </div>
                    </div>

                    {/* Timings */}
                    <div className="flex items-start gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#5E6D58] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-[#0F1E36]">OPD Timings: </span>
                        <span>{loc.timings}</span>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#0F1E36] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-[#0F1E36]">Phone: </span>
                        <a
                          href={`tel:${loc.phone}`}
                          className="font-medium text-[#0F1E36] hover:text-[#8A4B42] underline"
                        >
                          {loc.phoneDisplay}
                        </a>
                        {loc.secondaryPhone && (
                          <span className="text-slate-500 text-[11px]"> / {loc.secondaryPhone}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mt-3 pt-2.5 border-t border-[#EAE3D9]/60">
                    <ul className="space-y-1">
                      {loc.features.slice(0, 2).map((feature, fIdx) => (
                        <li key={fIdx} className="text-[11px] text-slate-500 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-[#5E6D58]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions: Directions & Book */}
                <div className="mt-4 pt-3 border-t border-[#EAE3D9] flex gap-2">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-2.5 text-center text-xs font-semibold text-[#0F1E36] bg-[#FAF8F5] hover:bg-[#F2ECE4] border border-[#D5CEC5] rounded-lg transition flex items-center justify-center gap-1"
                  >
                    <Navigation className="w-3 h-3 text-[#B87D70]" />
                    <span>DIRECTIONS</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>

                  <button
                    onClick={() => onSelectLocationForBooking(loc.id)}
                    className="flex-1 py-2 px-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#0F1E36] hover:bg-[#1E293B] rounded-lg transition cursor-pointer"
                  >
                    Select Location
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Notice */}
        <div className="mt-8 p-3.5 rounded-xl bg-[#EBDAD5]/30 border border-[#D4A396]/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#0F1E36]">
          <div>
            <strong className="font-semibold text-[#8A4B42]">Maternity Emergency Support:</strong> For active labor or urgent obstetric concerns, Femme Med Hospital (Sector 8 Dwarka) offers 24-hour medical access.
          </div>
          <a
            href={`tel:${DOCTOR_PROFILE.phonePrimary}`}
            className="px-3.5 py-1.5 bg-[#0F1E36] text-white rounded-lg text-xs font-medium hover:bg-[#1E293B] shrink-0"
          >
            Emergency Call: {DOCTOR_PROFILE.phoneDisplay}
          </a>
        </div>

      </div>
    </section>
  );
};

