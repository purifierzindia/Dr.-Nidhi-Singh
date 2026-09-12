import React from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, ArrowUpRight, Mail, MessageSquare } from 'lucide-react';
import { CONSULTATION_LOCATIONS, DOCTOR_PROFILE } from '../data/doctorData';
import { ConsultationLocation } from '../types';

interface LocationsSectionProps {
  onSelectLocationForBooking: (locationId: string) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onSelectLocationForBooking }) => {
  return (
    <section id="locations" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B87D70] mb-2 block">
            Dwarka Accessibility
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#0F1E36] font-semibold tracking-tight">
            Consultation Locations
          </h2>
          <div className="w-12 h-0.5 bg-[#D4A396] mt-3 mb-4"></div>
          <p className="text-sm sm:text-base text-slate-600 font-light">
            Dr. Nidhi Singh consults at verified medical institutions in Dwarka, New Delhi. Please note the respective OPD hours and hospital facilities below.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {CONSULTATION_LOCATIONS.map((loc) => {
            const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              loc.mapQuery
            )}`;

            return (
              <div
                key={loc.id}
                className="rounded-2xl bg-white border border-[#EAE3D9] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#B87D70]/60 transition-all flex flex-col justify-between text-left relative overflow-hidden"
              >
                <div>
                  {/* Facility Image Preview if available */}
                  {loc.imageUrl && (
                    <div className="mb-4 -mx-6 -mt-6 sm:-mx-7 sm:-mt-7 rounded-t-2xl overflow-hidden h-36 relative bg-slate-100 border-b border-[#EAE3D9]">
                      <img
                        src={loc.imageUrl}
                        alt={loc.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/70 via-transparent to-transparent" />
                      <span className="absolute bottom-2 left-3 text-[10px] uppercase font-semibold tracking-wider text-white bg-[#0F1E36]/80 px-2 py-0.5 rounded-sm">
                        Dwarka Center
                      </span>
                    </div>
                  )}

                  {/* Location Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#8A4B42] bg-[#EBDAD5]/50 px-2.5 py-0.5 rounded-full">
                      <MapPin className="w-3 h-3 text-[#8A4B42]" />
                      <span>{loc.sector}</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">Verified OPD</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#0F1E36] mb-1">
                    {loc.name}
                  </h3>

                  <p className="text-xs font-medium text-[#735A52] mb-4">
                    {loc.role}
                  </p>

                  <div className="space-y-3 pt-1 text-xs text-slate-600 border-t border-[#EAE3D9]/60">
                    {/* Address */}
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#B87D70] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-[#0F1E36]">Address:</span>
                        <div className="text-slate-600 mt-0.5">
                          {loc.address}, {loc.city}
                        </div>
                      </div>
                    </div>

                    {/* Timings */}
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#5E6D58] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-[#0F1E36]">Consultation Hours:</span>
                        <div className="text-slate-600 mt-0.5">{loc.timings}</div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-2.5">
                      <Phone className="w-4 h-4 text-[#0F1E36] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-[#0F1E36]">Contact Phone:</span>
                        <div className="mt-0.5 flex flex-wrap items-center gap-2">
                          <a
                            href={`tel:${loc.phone}`}
                            className="font-medium text-[#0F1E36] hover:text-[#8A4B42] underline underline-offset-2"
                          >
                            {loc.phoneDisplay}
                          </a>
                          {loc.secondaryPhone && (
                            <span className="text-slate-500 text-[11px]">
                              / {loc.secondaryPhone}
                            </span>
                          )}
                        </div>
                        {loc.email && (
                          <div className="mt-1 flex items-center gap-1.5 text-[11px] text-slate-600">
                            <Mail className="w-3 h-3 text-[#B87D70] shrink-0" />
                            <a href={`mailto:${loc.email}`} className="hover:underline text-slate-700 font-medium">
                              {loc.email}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Highlights / Facilities */}
                  <div className="mt-5 pt-3 border-t border-[#EAE3D9]/60">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 block mb-2">
                      Key Services & Amenities
                    </span>
                    <ul className="space-y-1.5">
                      {loc.features.map((feature, fIdx) => (
                        <li key={fIdx} className="text-[11px] text-slate-600 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-[#5E6D58]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions: Get Directions & Book at this location */}
                <div className="mt-6 pt-4 border-t border-[#EAE3D9] flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 text-center text-xs font-semibold text-[#0F1E36] bg-[#FAF8F5] hover:bg-[#F2ECE4] border border-[#D5CEC5] rounded-xl transition flex items-center justify-center gap-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#B87D70]" />
                    <span>GET DIRECTIONS</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>

                  <button
                    onClick={() => onSelectLocationForBooking(loc.id)}
                    className="flex-1 py-2.5 px-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#0F1E36] hover:bg-[#1E293B] rounded-xl transition cursor-pointer"
                  >
                    Select Location
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Notice */}
        <div className="mt-10 p-4 rounded-xl bg-[#EBDAD5]/30 border border-[#D4A396]/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#0F1E36]">
          <div>
            <strong className="font-semibold text-[#8A4B42]">Maternity Emergency Support:</strong> For urgent obstetric concerns or active labor, Femme Med Hospital (Sector 8 Dwarka) provides 24-hour medical access.
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
