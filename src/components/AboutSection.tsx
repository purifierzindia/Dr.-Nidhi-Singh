import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, GraduationCap, Clock, Award, MapPin, Building2 } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/doctorData';

export const AboutSection: React.FC = () => {
  const [practiceImg, setPracticeImg] = useState('/ayushman-hospital.webp');
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B87D70] mb-2 block">
            About Dr. Nidhi Singh
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#0F1E36] font-semibold tracking-tight">
            {DOCTOR_PROFILE.aboutHeading}
          </h2>
          <div className="w-12 h-0.5 bg-[#D4A396] mt-3 mb-4"></div>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Professional Information & Ethos */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {DOCTOR_PROFILE.aboutPhilosophy}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Practicing in Dwarka, Delhi, Dr. Nidhi Singh currently serves as Consultant Gynecologist and Obstetrician at Femme Med Hospital (Sector 8) with additional consultation sessions in Sector 6 and Sector 10. Her clinical philosophy centers on transparent dialogue: ensuring every woman understands her diagnosis, routine tests, and available options before deciding on a treatment plan.
            </p>

            {/* Verified Qualifications & Highlights Strip */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-xl bg-white border border-[#EAE3D9] shadow-2xs">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <GraduationCap className="w-4 h-4 text-[#8A4B42]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0F1E36]">
                    Verified Qualifications
                  </span>
                </div>
                <div className="text-sm font-serif font-bold text-[#0F1E36]">MBBS</div>
                <div className="text-sm font-serif font-bold text-[#0F1E36]">MS – Obstetrics & Gynaecology</div>
                <div className="text-[11px] text-slate-500 mt-1">Medical Specialist Certification</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#EAE3D9] shadow-2xs">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Clock className="w-4 h-4 text-[#5E6D58]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0F1E36]">
                    Clinical Practice
                  </span>
                </div>
                <div className="text-sm font-serif font-bold text-[#0F1E36]">11+ Years Experience</div>
                <div className="text-sm font-serif font-bold text-[#0F1E36]">6+ Years as Specialist</div>
                <div className="text-[11px] text-slate-500 mt-1">Consultant Gynecologist & Obstetrician</div>
              </div>

            </div>

            {/* Core Professional Commitments */}
            <div className="pt-2 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#5E6D58] shrink-0 mt-0.5" />
                <span><strong>Patient-First Consultations:</strong> Dedicated, unhurried time to discuss symptoms and address concerns thoroughly.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#5E6D58] shrink-0 mt-0.5" />
                <span><strong>Evidence-Based Care:</strong> Practical, thoughtful medical guidance without prescribing unnecessary procedures or tests.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#5E6D58] shrink-0 mt-0.5" />
                <span><strong>Specialized Focus:</strong> Maternal & child care, high-risk pregnancy monitoring, cesarean section planning, and gynecological wellbeing.</span>
              </div>
            </div>

          </div>

          {/* Column 2: Authentic Consultation Practice Visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="rounded-2xl overflow-hidden border border-[#EAE3D9] bg-white shadow-lg group">
                <div className="aspect-[4/5] relative overflow-hidden bg-slate-100">
                  <img
                    src={practiceImg}
                    onError={() => setPracticeImg('/ayushman-hospital.jpg')}
                    alt="Ayushman Hospital & Health Services, Dwarka - Consultation Practice"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/90 via-[#0F1E36]/30 to-transparent" />
                  
                  {/* Top Badge on Card */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#0F1E36]/80 backdrop-blur-xs text-white border border-white/20">
                      <Building2 className="w-3 h-3 text-[#D4A396]" />
                      <span>Dwarka Healthcare Facility</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/90 text-white">
                      Active OPD
                    </span>
                  </div>
                  
                  {/* Consultation Practice Card Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4A396] block mb-1">
                      Consultation Practice
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight leading-snug">
                      Ayushman Hospital & Health Services
                    </h3>
                    <p className="text-xs text-[#EAE3D9] mt-0.5 font-medium flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#D4A396] shrink-0" />
                      <span>Sector 10, Dwarka, New Delhi</span>
                    </p>
                    <p className="text-[11px] text-slate-300 mt-2 font-light leading-relaxed">
                      Consultant in Obstetrics & Gynaecology providing outpatient evaluations, maternal wellness checks, and planned delivery support.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Association Strip below photo */}
              <div className="mt-3 p-3.5 bg-white rounded-xl border border-[#EAE3D9] flex items-center justify-between text-xs text-slate-600 shadow-2xs">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#B87D70] shrink-0" />
                  <div>
                    <span className="font-semibold text-[#0F1E36] block">Hospital Consultant OPD</span>
                    <span className="text-[11px] text-slate-500">Department of Obstetrics & Gynaecology</span>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-[#8A4B42] bg-[#EBDAD5]/50 px-2.5 py-1 rounded-full shrink-0">
                  Sector 10 Dwarka
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
