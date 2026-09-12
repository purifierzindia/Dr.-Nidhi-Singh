import React from 'react';
import { Star, ShieldCheck, MapPin, Award } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/doctorData';

export const TrustStrip: React.FC = () => {
  return (
    <section id="trust-strip" className="border-y border-[#EAE3D9] bg-white/70 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-[#EAE3D9]">
          
          {/* Stat 1: Experience */}
          <div className="pt-4 md:pt-0 md:px-4 text-center sm:text-left flex flex-col items-center sm:items-start">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-[#0F1E36]">11+</span>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#8A4B42]">Years</span>
            </div>
            <div className="text-xs font-semibold text-[#0F1E36] mt-0.5">Overall Experience</div>
            <div className="text-[11px] text-slate-500 font-normal">6+ Years as Specialist OB-GYN</div>
          </div>

          {/* Stat 2: Verified Qualifications */}
          <div className="pt-4 md:pt-0 md:px-6 text-center sm:text-left flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl font-serif font-bold text-[#0F1E36]">MBBS, MS, FMAS</span>
            </div>
            <div className="text-xs font-semibold text-[#0F1E36] mt-0.5">Obs & Gynae • Laparoscopy</div>
            <div className="text-[11px] text-slate-500 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#5E6D58]" />
              <span>Verified Medical Degrees</span>
            </div>
          </div>

          {/* Stat 3: Dwarka Practice Centers */}
          <div className="pt-4 md:pt-0 md:px-6 text-center sm:text-left flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#0F1E36]">Dwarka</span>
            </div>
            <div className="text-xs font-semibold text-[#0F1E36] mt-0.5">Sector 8, Sector 6, Sector 10</div>
            <div className="text-[11px] text-slate-500 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#B87D70]" />
              <span>Femme Med Hospital & OPDs</span>
            </div>
          </div>

          {/* Stat 4: Patient Rating */}
          <div className="pt-4 md:pt-0 md:px-6 text-center sm:text-left flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-1.5">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-[#0F1E36]">{DOCTOR_PROFILE.rating.score}</span>
              <div className="flex text-amber-500 text-xs">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
            </div>
            <div className="text-xs font-semibold text-[#0F1E36] mt-0.5">Verified Patient Rating</div>
            <div className="text-[11px] text-slate-500">Based on Practo & Google feedback</div>
          </div>

        </div>
      </div>
    </section>
  );
};
