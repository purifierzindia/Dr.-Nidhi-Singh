import React from 'react';
import { Calendar, Shield, Heart, Activity, CheckCircle2 } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/doctorData';

interface PregnancyCareFeatureProps {
  onOpenBooking: () => void;
}

export const PregnancyCareFeature: React.FC<PregnancyCareFeatureProps> = ({ onOpenBooking }) => {
  return (
    <section id="pregnancy-care" className="py-14 sm:py-20 md:py-24 bg-[#F5F0EA] border-t border-[#EAE3D9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Eyebrow & Title */}
        <div className="text-left mb-8 sm:mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B87D70] mb-2 block">
            Maternal & Obstetric Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#0F1E36] font-semibold tracking-tight">
            Personalized Pregnancy Care
          </h2>
          <div className="w-12 h-0.5 bg-[#D4A396] mt-3"></div>
        </div>

        {/* Lead Narrative */}
        <div className="space-y-4 text-left">
          <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
            Pregnancy is a deeply personal journey. Dr. Nidhi Singh provides dedicated antenatal consultations focusing on close clinical monitoring, empathetic listening, and individualized health planning for both mother and baby.
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every milestone—from initial confirmation and first-trimester scans through to delivery planning and postpartum recovery—is managed with medical rigor, patience, and transparent discussion regarding delivery options.
          </p>
        </div>

        {/* 3 Antenatal Focus Areas — Clean Editorial Dividers */}
        <div className="my-8 sm:my-10 py-6 sm:py-8 border-y border-[#EAE3D9] grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#EAE3D9] text-left">
          
          <div className="sm:pr-5">
            <h4 className="text-xs sm:text-sm font-semibold text-[#0F1E36] mb-1.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#8A4B42] shrink-0" />
              <span>Trimester Monitoring</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Scheduled blood panels, growth ultrasound reviews, maternal vitals, and nutritional guidance tailored to gestation.
            </p>
          </div>

          <div className="pt-6 sm:pt-0 sm:px-5">
            <h4 className="text-xs sm:text-sm font-semibold text-[#0F1E36] mb-1.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#5E6D58] shrink-0" />
              <span>High-Risk Surveillance</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Attentive clinical management for gestational diabetes, hypertension, thyroid fluctuations, or prior pregnancy history.
            </p>
          </div>

          <div className="pt-6 sm:pt-0 sm:pl-5">
            <h4 className="text-xs sm:text-sm font-semibold text-[#0F1E36] mb-1.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#8A4B42] shrink-0" />
              <span>Informed Delivery</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Transparent discussion on labor progression, normal delivery options, and cesarean indications without bias.
            </p>
          </div>

        </div>

        {/* 24/7 Delivery Reassurance & Action Strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-2.5 text-xs text-slate-600">
            <Shield className="w-4 h-4 text-[#5E6D58] shrink-0" />
            <span>24/7 emergency maternity backing at Femme Med Hospital, Dwarka Sector 8.</span>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0F1E36] hover:bg-[#1E293B] rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs shrink-0"
          >
            <Calendar className="w-4 h-4 text-[#D4A396]" />
            <span>Schedule Consultation</span>
          </button>
        </div>

      </div>
    </section>
  );
};

