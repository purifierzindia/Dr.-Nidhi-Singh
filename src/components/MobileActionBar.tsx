import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/doctorData';

interface MobileActionBarProps {
  onOpenBooking: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenBooking }) => {
  return (
    <div
      id="mobile-action-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#EAE3D9] p-2.5 px-3 shadow-[0_-4px_12px_rgba(0,0,0,0.06)]"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Button 1: Call */}
        <a
          href={`tel:${DOCTOR_PROFILE.phonePrimary}`}
          id="mobile-call-btn"
          className="h-11 px-2 flex items-center justify-center gap-1.5 rounded-xl bg-white border border-[#D5CEC5] text-[#0F1E36] font-semibold text-xs active:bg-slate-100 transition shadow-2xs"
          title="Call Clinic"
        >
          <Phone className="w-3.5 h-3.5 text-[#B87D70] shrink-0" />
          <span className="truncate">CALL</span>
        </a>

        {/* Button 2: WhatsApp */}
        <a
          href={`https://wa.me/${DOCTOR_PROFILE.whatsappNumber}?text=${encodeURIComponent(
            'Hello Dr. Nidhi Singh, I would like to book a consultation in Dwarka.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-whatsapp-btn"
          className="h-11 px-2 flex items-center justify-center gap-1.5 rounded-xl bg-[#E2E8E0] border border-[#8F9D88]/40 text-[#2E4A35] font-semibold text-xs active:bg-[#d5ded2] transition shadow-2xs"
          title="WhatsApp Message"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#4A5745] shrink-0" />
          <span className="truncate">WHATSAPP</span>
        </a>

        {/* Button 3: Book Appointment */}
        <button
          onClick={onOpenBooking}
          id="mobile-book-btn"
          className="h-11 px-2 flex items-center justify-center gap-1.5 rounded-xl bg-[#0F1E36] text-white font-semibold text-xs uppercase tracking-wider active:bg-[#1E293B] transition shadow-xs cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-[#D4A396] shrink-0" />
          <span className="truncate">BOOK</span>
        </button>
      </div>
    </div>
  );
};
