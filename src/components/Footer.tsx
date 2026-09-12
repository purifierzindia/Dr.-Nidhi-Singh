import React from 'react';
import { MapPin, Phone, MessageSquare, ShieldCheck, Heart, Instagram } from 'lucide-react';
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
              MBBS, MS – Obstetrics & Gynaecology • 11+ Years Experience
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-1">
              Providing personalized women’s healthcare, pregnancy guidance, high-risk obstetric monitoring, and empathetic gynecological care in Dwarka, New Delhi.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#D4A396]" />
              <span>Dwarka, New Delhi (Sector 8, Sector 6, Sector 10)</span>
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
              Consultation Contacts
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="p-3 rounded-xl bg-[#16253E] border border-[#24334A]">
                <div className="font-semibold text-white">Femme Med Hospital</div>
                <div className="text-[11px] text-slate-400">Sector 8 Dwarka (Primary OPD & 24/7 Maternity)</div>
                <a href="tel:+919266285111" className="text-[#D4A396] hover:underline block mt-1">
                  +91 92662 85111
                </a>
              </div>

              <div className="p-3 rounded-xl bg-[#16253E] border border-[#24334A]">
                <div className="font-semibold text-white">Aj Gynae & Healthcare Centre</div>
                <div className="text-[11px] text-slate-400">Sector 6 Dwarka (Evening OPD)</div>
                <a href="tel:+919205481438" className="text-[#D4A396] hover:underline block mt-1">
                  +91 92054 81438
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
