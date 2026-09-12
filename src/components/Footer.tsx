import React from 'react';
import { MapPin, Phone, MessageSquare, ShieldCheck, Heart, Instagram, Mail } from 'lucide-react';
import { DOCTOR_PROFILE, CONSULTATION_LOCATIONS } from '../data/doctorData';

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Patient Care', href: '#patient-care' },
    { label: 'Locations', href: '#locations' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Book Appointment', href: '#contact' },
  ];

  return (
    <footer id="footer" className="bg-[#0F1E36] text-[#FAF8F5] pt-14 pb-24 md:pb-14 border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#24334A] text-left">
          
          {/* Col 1: Doctor Identity & Qualifications */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
              {DOCTOR_PROFILE.name}
            </h3>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#D4A396]">
              {DOCTOR_PROFILE.roleTitle}
            </div>
            <p className="text-xs text-slate-300 font-medium">
              MBBS, MS (Obs & Gynae), FMAS • 11+ Years Experience
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-1">
              Providing personalized women’s healthcare, pregnancy guidance, high-risk obstetric monitoring, IVF guidance, and laparoscopic care in Dwarka, New Delhi.
            </p>

            <div className="pt-2 space-y-1 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4A396] shrink-0" />
                <span>Dwarka, New Delhi (Sector 8, Sector 6, Sector 10)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4A396] shrink-0" />
                <a href={`mailto:${DOCTOR_PROFILE.email}`} className="text-[#D4A396] hover:underline">
                  {DOCTOR_PROFILE.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#D4A396] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={DOCTOR_PROFILE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4A396] transition-colors flex items-center gap-1.5 text-[#E7B8C1]"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram (@drgynaesingh)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Consultation Contacts */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Direct Clinic Contacts
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="p-3 rounded-xl bg-[#16253E] border border-[#24334A] space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">Femme Med Hospital</span>
                  <span className="text-[10px] text-emerald-400 font-medium bg-emerald-950/60 px-2 py-0.5 rounded-sm">24/7 Maternity</span>
                </div>
                <div className="text-[11px] text-slate-400">Sector 8 Dwarka (Primary OPD)</div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-0.5">
                  <a href={`tel:${DOCTOR_PROFILE.phonePrimary}`} className="text-[#D4A396] hover:underline font-medium inline-flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    <span>Call: {DOCTOR_PROFILE.phoneDisplay}</span>
                  </a>
                  <a
                    href={`https://wa.me/${DOCTOR_PROFILE.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline font-medium inline-flex items-center gap-1"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>WhatsApp: {DOCTOR_PROFILE.whatsappDisplay}</span>
                  </a>
                </div>
                <div className="pt-0.5 text-[11px]">
                  <a href={`mailto:${DOCTOR_PROFILE.email}`} className="text-slate-300 hover:text-white inline-flex items-center gap-1">
                    <Mail className="w-3 h-3 text-[#D4A396]" />
                    <span>{DOCTOR_PROFILE.email}</span>
                  </a>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#16253E] border border-[#24334A]">
                <div className="font-semibold text-white">Aj Gynae & Healthcare Centre</div>
                <div className="text-[11px] text-slate-400">Sector 6 Dwarka (Evening OPD up to 9 PM)</div>
                <a href="tel:+919205481438" className="text-[#D4A396] hover:underline block mt-1 font-medium inline-flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  <span>+91 92054 81438</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Subtle KK MARTECH credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {DOCTOR_PROFILE.name}. All verified clinical information.
          </div>

          {/* Subtly added KK MARTECH concept credit */}
          <div className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition text-[11px]">
            <span>Website concept by</span>
            <span className="font-semibold text-[#D4A396]">KK MARTECH</span>
            <span>• Personalized Medical Demo</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
