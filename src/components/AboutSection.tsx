import React from 'react';
import { GraduationCap, Clock, Award, ShieldCheck, HeartHandshake, Stethoscope } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/doctorData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Eyebrow & Title */}
        <div className="text-left mb-8 sm:mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B87D70] mb-2 block">
            About Dr. Nidhi Singh
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#0F1E36] font-semibold tracking-tight">
            {DOCTOR_PROFILE.aboutHeading}
          </h2>
          <div className="w-12 h-0.5 bg-[#D4A396] mt-3"></div>
        </div>

        {/* Lead Narrative */}
        <div className="space-y-4 text-left">
          <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
            {DOCTOR_PROFILE.aboutPhilosophy}
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Practicing across prominent medical centers in Dwarka, Delhi, Dr. Nidhi Singh serves as Consultant Gynecologist and Obstetrician at Femme Med Hospital (Sector 8) with outpatient sessions in Sector 6 and Sector 10. Her clinical philosophy is rooted in transparent, open dialogue: ensuring every woman thoroughly understands her symptoms, diagnostic reports, and all clinical options before finalizing any treatment pathway.
          </p>
        </div>

        {/* Editorial Credentials Strip with Subtle Hairline Dividers — No Bordered Cards */}
        <div className="my-8 sm:my-10 py-6 sm:py-8 border-y border-[#EAE3D9] grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#EAE3D9]">
          
          {/* Medical Qualifications Column */}
          <div className="text-left sm:pr-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-[#8A4B42]" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A4B42]">
                Verified Medical Credentials
              </span>
            </div>
            <div className="font-serif font-bold text-[#0F1E36] text-lg sm:text-xl">
              MBBS, MS (Obs & Gynae)
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#735A52] mt-0.5">
              FMAS • Fellowship in Minimal Access Surgery
            </div>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Certified Specialist in Maternal Health, High-Risk Obstetrics, Laparoscopic Procedures & Infertility Workup.
            </p>
          </div>

          {/* Clinical Experience Column */}
          <div className="pt-6 sm:pt-0 sm:pl-8 text-left">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-[#5E6D58]" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5E6D58]">
                Clinical Experience & OPD
              </span>
            </div>
            <div className="font-serif font-bold text-[#0F1E36] text-lg sm:text-xl">
              11+ Years Overall • 6+ Years Specialist
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#735A52] mt-0.5">
              Consultant Obstetrician & Gynecologist
            </div>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Active outpatient consultations across Dwarka: Femme Med Hospital (Sec 8), Aj Gynae (Sec 6), and Ayushman Hospital (Sec 10).
            </p>
          </div>

        </div>

        {/* Clinical Commitments — Clean Editorial Three-Pillar Layout */}
        <div className="text-left pt-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-4">
            Core Clinical Commitments
          </span>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            <div className="border-l-2 border-[#D4A396] pl-4 py-0.5">
              <div className="text-xs sm:text-sm font-semibold text-[#0F1E36]">
                Patient-First Consultations
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Dedicated, unhurried time to listen to your concerns and answer every question with empathy.
              </p>
            </div>

            <div className="border-l-2 border-[#5E6D58] pl-4 py-0.5">
              <div className="text-xs sm:text-sm font-semibold text-[#0F1E36]">
                Evidence-Based Practice
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Clear, rational medical decisions without prescribing unnecessary interventions or excessive tests.
              </p>
            </div>

            <div className="border-l-2 border-[#8A4B42] pl-4 py-0.5">
              <div className="text-xs sm:text-sm font-semibold text-[#0F1E36]">
                Non-Judgmental Space
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                A respectful, confidential atmosphere for sensitive discussions on menstrual and reproductive health.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

