import React, { useState } from 'react';
import { X, Calendar, Phone, MessageSquare, MapPin, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { DOCTOR_PROFILE, CONSULTATION_LOCATIONS } from '../data/doctorData';
import { AppointmentFormState } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialLocationId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialLocationId,
}) => {
  const [formData, setFormData] = useState<AppointmentFormState>({
    fullName: '',
    phone: '',
    locationId: initialLocationId || CONSULTATION_LOCATIONS[0].id,
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    reason: initialService || 'Pregnancy & Antenatal Care',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your full name and contact phone number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const selectedLoc = CONSULTATION_LOCATIONS.find((l) => l.id === formData.locationId) || CONSULTATION_LOCATIONS[0];

  const whatsappMessage = encodeURIComponent(
    `Hello Dr. Nidhi Singh's Clinic,\nI would like to schedule an appointment:\n- Patient: ${formData.fullName}\n- Phone: ${formData.phone}\n- Preferred Location: ${selectedLoc.name} (${selectedLoc.sector})\n- Date: ${formData.preferredDate || 'Next available slot'}\n- Time Slot: ${formData.preferredTime}\n- Reason: ${formData.reason}\n${formData.notes ? `- Notes: ${formData.notes}` : ''}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FAF8F5] text-[#0F1E36] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#EAE3D9] relative max-h-[92vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-200/60 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4 animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-[#E2E8E0] text-[#5E6D58] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#0F1E36]">
              Consultation Details Ready
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Details for <strong>{formData.fullName}</strong> at <strong>{selectedLoc.name}</strong> ({selectedLoc.sector}) are prepared.
            </p>

            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 text-left my-4">
              <span className="font-semibold block mb-0.5">Sales Demo Notification:</span>
              This is a live personalized demo by KK MARTECH. In the live website, this automatically synchronizes with Dr. Nidhi Singh’s WhatsApp or clinic management system.
            </div>

            <div className="flex flex-col gap-2.5 pt-2">
              <a
                href={`https://wa.me/${DOCTOR_PROFILE.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#5E6D58] hover:bg-[#4A5745] text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Transmit via WhatsApp</span>
              </a>

              <a
                href={`tel:${DOCTOR_PROFILE.phonePrimary}`}
                className="w-full py-3 bg-[#0F1E36] hover:bg-[#1E293B] text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition"
              >
                <Phone className="w-4 h-4" />
                <span>Call Clinic Reception ({DOCTOR_PROFILE.phoneDisplay})</span>
              </a>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="text-xs text-slate-500 hover:text-slate-800 underline block mx-auto pt-3"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="text-left mb-5">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#B87D70] block">
                Appointment Consultation
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#0F1E36]">
                {DOCTOR_PROFILE.name}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Consultant Gynecologist & Obstetrician • Dwarka
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#0F1E36] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Patient name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#D5CEC5] rounded-xl text-xs text-[#0F1E36] focus:outline-none focus:border-[#8A4B42]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#0F1E36] mb-1">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#D5CEC5] rounded-xl text-xs text-[#0F1E36] focus:outline-none focus:border-[#8A4B42]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#0F1E36] mb-1">
                  Preferred Location
                </label>
                <select
                  value={formData.locationId}
                  onChange={(e) => setFormData({ ...formData, locationId: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#D5CEC5] rounded-xl text-xs text-[#0F1E36] focus:outline-none focus:border-[#8A4B42]"
                >
                  {CONSULTATION_LOCATIONS.map((loc) => (
                    <option key={loc.id} value={loc.id}>
                      {loc.name} — {loc.sector}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#0F1E36] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#D5CEC5] rounded-xl text-xs text-[#0F1E36] focus:outline-none focus:border-[#8A4B42]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#0F1E36] mb-1">
                    Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#D5CEC5] rounded-xl text-xs text-[#0F1E36] focus:outline-none focus:border-[#8A4B42]"
                  >
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#0F1E36] mb-1">
                  Reason for Visit
                </label>
                <select
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#D5CEC5] rounded-xl text-xs text-[#0F1E36] focus:outline-none focus:border-[#8A4B42]"
                >
                  <option value="Pregnancy & Antenatal Care">Pregnancy & Antenatal Care</option>
                  <option value="High-Risk Pregnancy Care">High-Risk Pregnancy Care</option>
                  <option value="Gynecological Consultation">Gynecological Consultation</option>
                  <option value="PCOS / Menstrual Health">PCOS / Menstrual Health</option>
                  <option value="Cesarean Section Planning">Cesarean Section Planning</option>
                  <option value="Post-Delivery Care">Post-Delivery Care</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#0F1E36] hover:bg-[#1E293B] rounded-xl shadow-md transition cursor-pointer"
                >
                  Confirm Appointment Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
