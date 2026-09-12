import React, { useState, useEffect } from 'react';
import { Calendar, Phone, MessageSquare, Clock, MapPin, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { DOCTOR_PROFILE, CONSULTATION_LOCATIONS, AREAS_OF_EXPERTISE } from '../data/doctorData';
import { AppointmentFormState } from '../types';

interface AppointmentSectionProps {
  selectedLocationId?: string;
  selectedServiceTitle?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  selectedLocationId,
  selectedServiceTitle,
}) => {
  const [formData, setFormData] = useState<AppointmentFormState>({
    fullName: '',
    phone: '',
    locationId: selectedLocationId || CONSULTATION_LOCATIONS[0].id,
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    reason: selectedServiceTitle || 'General Gynecological Consultation',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (selectedLocationId) {
      setFormData((prev) => ({ ...prev, locationId: selectedLocationId }));
    }
  }, [selectedLocationId]);

  useEffect(() => {
    if (selectedServiceTitle) {
      setFormData((prev) => ({ ...prev, reason: selectedServiceTitle }));
    }
  }, [selectedServiceTitle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your name and contact phone number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const selectedLoc = CONSULTATION_LOCATIONS.find((l) => l.id === formData.locationId) || CONSULTATION_LOCATIONS[0];

  const whatsappMessage = encodeURIComponent(
    `Hello Dr. Nidhi Singh's Clinic,\nI would like to request an appointment:\n- Patient: ${formData.fullName}\n- Phone: ${formData.phone}\n- Preferred Location: ${selectedLoc.name} (${selectedLoc.sector})\n- Date: ${formData.preferredDate || 'Earliest available'}\n- Time Slot: ${formData.preferredTime}\n- Reason: ${formData.reason}\n${formData.notes ? `- Notes: ${formData.notes}` : ''}`
  );

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-[#EAE3D9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B87D70] mb-2 block">
            Schedule a Visit
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0F1E36] font-semibold tracking-tight">
            Book Your Consultation
          </h2>
          <div className="w-12 h-0.5 bg-[#D4A396] mx-auto mt-3 mb-4"></div>
          <p className="text-base sm:text-lg text-slate-600 font-light max-w-xl mx-auto">
            Take the next step towards personalized women’s healthcare.
          </p>

          {/* Secondary Immediate Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${DOCTOR_PROFILE.phonePrimary}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-[#0F1E36] bg-[#FAF8F5] border border-[#D5CEC5] hover:border-[#0F1E36] rounded-full transition shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#B87D70]" />
              <span>Call Clinic: {DOCTOR_PROFILE.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${DOCTOR_PROFILE.whatsappNumber}?text=${encodeURIComponent(
                'Hello Dr. Nidhi Singh, I would like to book a consultation in Dwarka.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-[#2E4A35] bg-[#E2E8E0] hover:bg-[#d5ded2] border border-[#8F9D88]/40 rounded-full transition shadow-2xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#4A5745]" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>

        {/* Booking Card & Form */}
        <div className="max-w-2xl mx-auto bg-[#FAF8F5] border border-[#EAE3D9] rounded-2xl p-6 sm:p-10 shadow-lg text-left">
          
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-[#E2E8E0] text-[#5E6D58] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0F1E36]">
                Consultation Request Prepared
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#0F1E36]">{formData.fullName}</strong>. Your consultation details for <strong>{selectedLoc.name}</strong> are formatted and ready.
              </p>

              {/* Demo Notice Disclaimer */}
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 text-left my-4">
                <strong className="font-semibold block mb-0.5">Sales Demo Notification:</strong>
                This is a live concept demonstration designed by KK MARTECH for Dr. Nidhi Singh. To complete actual booking with the clinic team, choose an option below:
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href={`https://wa.me/${DOCTOR_PROFILE.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#5E6D58] hover:bg-[#4A5745] text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>
                <a
                  href={`tel:${DOCTOR_PROFILE.phonePrimary}`}
                  className="px-6 py-3 bg-[#0F1E36] hover:bg-[#1E293B] text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Confirm</span>
                </a>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-slate-500 hover:text-slate-800 underline block mx-auto pt-4"
              >
                ← Edit appointment details
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {errorMsg && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="apt-fullname" className="block text-xs font-semibold uppercase tracking-wider text-[#0F1E36] mb-1.5">
                    Patient Name *
                  </label>
                  <input
                    id="apt-fullname"
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5CEC5] rounded-xl text-xs sm:text-sm text-[#0F1E36] focus:outline-none focus:border-[#8A4B42] focus:ring-1 focus:ring-[#8A4B42]"
                  />
                </div>

                <div>
                  <label htmlFor="apt-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#0F1E36] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    id="apt-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5CEC5] rounded-xl text-xs sm:text-sm text-[#0F1E36] focus:outline-none focus:border-[#8A4B42] focus:ring-1 focus:ring-[#8A4B42]"
                  />
                </div>
              </div>

              {/* Preferred Location */}
              <div>
                <label htmlFor="apt-location" className="block text-xs font-semibold uppercase tracking-wider text-[#0F1E36] mb-1.5">
                  Consultation Location *
                </label>
                <select
                  id="apt-location"
                  value={formData.locationId}
                  onChange={(e) => setFormData({ ...formData, locationId: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D5CEC5] rounded-xl text-xs sm:text-sm text-[#0F1E36] focus:outline-none focus:border-[#8A4B42] focus:ring-1 focus:ring-[#8A4B42]"
                >
                  {CONSULTATION_LOCATIONS.map((loc) => (
                    <option key={loc.id} value={loc.id}>
                      {loc.name} — {loc.sector} ({loc.timings.slice(0, 35)}...)
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="apt-date" className="block text-xs font-semibold uppercase tracking-wider text-[#0F1E36] mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    id="apt-date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5CEC5] rounded-xl text-xs sm:text-sm text-[#0F1E36] focus:outline-none focus:border-[#8A4B42] focus:ring-1 focus:ring-[#8A4B42]"
                  />
                </div>

                <div>
                  <label htmlFor="apt-timeslot" className="block text-xs font-semibold uppercase tracking-wider text-[#0F1E36] mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    id="apt-timeslot"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5CEC5] rounded-xl text-xs sm:text-sm text-[#0F1E36] focus:outline-none focus:border-[#8A4B42] focus:ring-1 focus:ring-[#8A4B42]"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:30 PM)">Afternoon (1:00 PM – 4:30 PM)</option>
                    <option value="Evening (5:00 PM - 8:30 PM)">Evening (5:00 PM – 8:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Reason for Visit */}
              <div>
                <label htmlFor="apt-reason" className="block text-xs font-semibold uppercase tracking-wider text-[#0F1E36] mb-1.5">
                  Reason for Visit
                </label>
                <select
                  id="apt-reason"
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D5CEC5] rounded-xl text-xs sm:text-sm text-[#0F1E36] focus:outline-none focus:border-[#8A4B42] focus:ring-1 focus:ring-[#8A4B42]"
                >
                  <option value="Pregnancy & Antenatal Care">Pregnancy & Antenatal Care</option>
                  <option value="High-Risk Pregnancy Care">High-Risk Pregnancy Evaluation</option>
                  <option value="Gynecological Consultation">General Gynecological Consultation</option>
                  <option value="Menstrual Health / Irregular Periods">Menstrual Health / Irregular Periods</option>
                  <option value="PCOS / PCOD Management">PCOS / PCOD Management</option>
                  <option value="Cesarean Section / Delivery Discussion">Cesarean Section / Delivery Planning</option>
                  <option value="Postnatal / Post-Delivery Followup">Postnatal / Post-Delivery Followup</option>
                  <option value="Other Consultation">Other Consultation</option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="apt-notes" className="block text-xs font-semibold uppercase tracking-wider text-[#0F1E36] mb-1.5">
                  Optional Notes or Symptoms (Confidential)
                </label>
                <textarea
                  id="apt-notes"
                  rows={2}
                  placeholder="Briefly describe your symptoms or specific request..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 bg-white border border-[#D5CEC5] rounded-xl text-xs sm:text-sm text-[#0F1E36] focus:outline-none focus:border-[#8A4B42] focus:ring-1 focus:ring-[#8A4B42]"
                ></textarea>
              </div>

              {/* Demo notice tag */}
              <div className="text-[11px] text-slate-500 bg-white/70 p-2.5 rounded-lg border border-[#EAE3D9] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B87D70] shrink-0" />
                <span>
                  Demo notice: Submitting prepares a direct consultation message for Dr. Nidhi Singh’s clinic reception.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="submit-appointment-btn"
                className="w-full py-3.5 px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#0F1E36] hover:bg-[#1E293B] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#D4A396]" />
                <span>REQUEST APPOINTMENT</span>
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
