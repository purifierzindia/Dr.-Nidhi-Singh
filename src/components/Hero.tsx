import React, { useState } from 'react';
import { Calendar, Phone, MessageSquare, MapPin, Award, ShieldCheck, Star, Instagram, CheckCircle2, Stethoscope } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/doctorData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [imgSrc, setImgSrc] = useState('/Dr-Nidhi-Gynae.png');

  return (
    <section id="hero" className="relative pt-6 pb-14 md:pt-10 md:pb-20 overflow-hidden bg-[#FAF8F5]">
      {/* Soft warm background gradients */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#EBDAD5]/35 rounded-full blur-3xl -z-10 transform translate-x-1/4 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[26rem] h-[26rem] bg-[#E2E8E0]/45 rounded-full blur-3xl -z-10 transform -translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: On mobile we prioritize showing Dr. Nidhi Singh's photo and 5-second trust indicator right at the start */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Editorial Content Column */}
          <div className="lg:col-span-7 space-y-5 text-left order-2 lg:order-1">
            
            {/* Top Local Badging */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EBDAD5]/70 text-[#8A4B42] border border-[#D4A396]/50">
                <MapPin className="w-3.5 h-3.5" />
                <span>Dwarka, New Delhi</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E2E8E0] text-[#3B4D36] border border-[#8F9D88]/50">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Specialist Profile</span>
              </span>
            </div>

            {/* Doctor Identity Header */}
            <div>
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#735A52] mb-1">
                Consultant Gynecologist & Obstetrician
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#0F1E36] font-bold tracking-tight">
                {DOCTOR_PROFILE.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                MBBS, MS (Obs & Gynae), FMAS • 11+ Years Overall (6+ Years Specialist)
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0F1E36] leading-[1.18] font-bold tracking-tight">
              &ldquo;{DOCTOR_PROFILE.headline}&rdquo;
            </h1>

            {/* Supporting Bio Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-light">
              {DOCTOR_PROFILE.subheadline}
            </p>

            {/* Clinical Practice Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#5E6D58] shrink-0 mt-0.5" />
                <span>Individualized antenatal care & complicated pregnancy monitoring</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#5E6D58] shrink-0 mt-0.5" />
                <span>OPD at Femme Med Hospital (Sector 8) & Aj Gynae (Sector 6)</span>
              </div>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenBooking}
                id="hero-book-appointment-btn"
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#0F1E36] hover:bg-[#1E293B] rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#D4A396]" />
                <span>Book An Appointment</span>
              </button>

              <a
                href={`tel:${DOCTOR_PROFILE.phonePrimary}`}
                id="hero-call-clinic-btn"
                className="px-5 py-3.5 text-xs sm:text-sm font-medium text-[#0F1E36] bg-white border border-[#D5CEC5] hover:border-[#0F1E36] hover:bg-slate-50 rounded-full transition-all flex items-center gap-2 shadow-2xs"
              >
                <Phone className="w-4 h-4 text-[#B87D70]" />
                <span>Call Clinic</span>
              </a>

              <a
                href={`https://wa.me/${DOCTOR_PROFILE.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Dr. Nidhi Singh, I would like to schedule a consultation in Dwarka.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-xs sm:text-sm font-medium text-[#2E4A35] bg-[#E2E8E0] hover:bg-[#d5ded2] border border-[#8F9D88]/40 rounded-full transition-all flex items-center gap-2 shadow-2xs"
                title="Direct WhatsApp Consultation Request"
              >
                <MessageSquare className="w-4 h-4 text-[#4A5745]" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Instagram Social Integration Callout in Hero */}
            <div className="pt-2">
              <a
                href={DOCTOR_PROFILE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-[#E7B8C1] hover:border-[#C13584] text-xs font-medium text-slate-700 hover:text-[#0F1E36] transition shadow-2xs group"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white shrink-0">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
                <span>
                  Follow <strong className="text-[#8A4B42] group-hover:underline">@drgynaesingh</strong> on Instagram for women&apos;s health & pregnancy reels
                </span>
                <span className="text-[#C13584] font-semibold text-xs ml-1">→</span>
              </a>
            </div>

            {/* OPD & Emergency availability status */}
            <p className="text-[12px] text-slate-500 pt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse shrink-0" />
              <span>OPD consultations available at Sector 8 & Sector 6 Dwarka • 24/7 Maternity Emergency</span>
            </p>
          </div>

          {/* RIGHT: Doctor's Photo & 5-Second Trust Indicator (Order 1 on mobile for instant 5-second glimpse) */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Doctor's Photo Card Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#EAE3D9] bg-white shadow-xl">
                
                {/* Photo Header Pill */}
                <div className="bg-[#0F1E36] px-4 py-2.5 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="font-medium tracking-wide">Verified Senior Specialist</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#EBDAD5]">
                    <MapPin className="w-3 h-3 text-[#D4A396]" />
                    <span>Dwarka, New Delhi</span>
                  </div>
                </div>

                {/* Doctor's Authentic Portrait */}
                <div className="aspect-[4/4.6] sm:aspect-[4/4.8] relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] to-[#F2EDE6] flex items-center justify-center">
                  <img
                    src={imgSrc}
                    onError={() => setImgSrc('/dr_nidhi_portrait_clean.png')}
                    alt="Dr. Nidhi Singh - Consultant Gynecologist and Obstetrician in Dwarka, New Delhi"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-103"
                  />

                  {/* Name & Specialization Overlay Bar on bottom of photo */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F1E36] via-[#0F1E36]/80 to-transparent pt-12 pb-3 px-4 text-white">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold tracking-tight">
                          {DOCTOR_PROFILE.name}
                        </h3>
                        <p className="text-xs text-[#D4A396] font-medium mt-0.5">
                          MBBS, MS – Obstetrics & Gynaecology
                        </p>
                      </div>
                      <div className="flex items-center gap-1 bg-[#16253E] border border-[#2B3A52] px-2.5 py-1 rounded-full text-xs font-semibold">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>4.9</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5-SECOND TRUST INDICATOR: Grid placed directly below the photo */}
                <div className="p-4 sm:p-5 bg-white border-t border-[#EAE3D9]">
                  <div className="text-[11px] uppercase tracking-widest font-semibold text-[#8A4B42] mb-3 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#B87D70]" />
                    <span>Verified Professional Profile at a Glance</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-left">
                    
                    {/* Metric 1: Experience */}
                    <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#EAE3D9]">
                      <div className="text-lg sm:text-xl font-serif font-bold text-[#0F1E36] leading-tight">
                        11+ Years
                      </div>
                      <div className="text-[11px] text-slate-600 font-medium">
                        Overall Practice
                      </div>
                      <div className="text-[10px] text-slate-500">
                        6+ Yrs as Specialist
                      </div>
                    </div>

                    {/* Metric 2: Degree */}
                    <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#EAE3D9]">
                      <div className="text-base sm:text-lg font-serif font-bold text-[#0F1E36] leading-tight">
                        MBBS, MS, FMAS
                      </div>
                      <div className="text-[11px] text-slate-600 font-medium">
                        Obs & Gynae • Laparoscopy
                      </div>
                      <div className="text-[10px] text-slate-500">
                        Verified Credentials
                      </div>
                    </div>

                    {/* Metric 3: Rating */}
                    <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#EAE3D9]">
                      <div className="flex items-center gap-1 text-lg sm:text-xl font-serif font-bold text-[#0F1E36] leading-tight">
                        <span>4.9</span>
                        <div className="flex text-amber-400">
                          <Star className="w-3.5 h-3.5 fill-current" />
                        </div>
                      </div>
                      <div className="text-[11px] text-slate-600 font-medium">
                        Patient Rating
                      </div>
                      <div className="text-[10px] text-slate-500">
                        Practo & Google
                      </div>
                    </div>

                    {/* Metric 4: Dwarka Centers */}
                    <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#EAE3D9]">
                      <div className="text-lg sm:text-xl font-serif font-bold text-[#0F1E36] leading-tight">
                        Dwarka
                      </div>
                      <div className="text-[11px] text-slate-600 font-medium">
                        Sector 8 & Sector 6
                      </div>
                      <div className="text-[10px] text-slate-500">
                        Femme Med & Aj Gynae
                      </div>
                    </div>

                  </div>

                  {/* Instagram Quick Link Below Trust Strip */}
                  <div className="mt-3 pt-3 border-t border-[#EAE3D9]/70 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Instagram className="w-4 h-4 text-[#C13584]" />
                      <span className="font-semibold text-slate-800">@drgynaesingh</span>
                    </div>
                    <a
                      href={DOCTOR_PROFILE.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-[#8A4B42] hover:underline"
                    >
                      Open Instagram ↗
                    </a>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
