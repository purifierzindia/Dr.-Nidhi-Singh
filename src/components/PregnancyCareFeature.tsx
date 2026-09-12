import React from 'react';
import { Calendar, Shield, Heart, Activity, CheckCircle } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/doctorData';

interface PregnancyCareFeatureProps {
  onOpenBooking: () => void;
}

export const PregnancyCareFeature: React.FC<PregnancyCareFeatureProps> = ({ onOpenBooking }) => {
  return (
    <section id="pregnancy-care" className="py-16 md:py-24 bg-[#F5F0EA] relative overflow-hidden">
      {/* Soft atmospheric glow */}
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-[#EBDAD5]/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column: Tasteful Maternal Care Photography */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg">
              <div className="rounded-2xl overflow-hidden border border-[#EAE3D9] bg-white shadow-xl">
                <div className="aspect-[4/3] sm:aspect-[16/11] relative">
                  <img
                    src="https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1200&q=80"
                    alt="Compassionate maternal pregnancy care"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/70 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs uppercase font-semibold tracking-wider text-[#EBDAD5]">
                      Maternal Wellbeing & Support
                    </div>
                    <p className="text-sm font-serif font-medium text-slate-100 mt-0.5">
                      Care tailored to you and your baby’s journey
                    </p>
                    <p className="text-[10px] text-slate-300 mt-1 italic">
                      *Tasteful photographic representation of prenatal care
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating reassurance card */}
              <div className="mt-4 p-4 rounded-xl bg-white/95 border border-[#EAE3D9] shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E2E8E0] flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-[#5E6D58]" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-semibold text-[#0F1E36]">24/7 Maternity Emergency Backing</h4>
                  <p className="text-[11px] text-slate-500">
                    Comprehensive labor & delivery facilities at Femme Med Hospital, Dwarka Sector 8.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B87D70] mb-1 block">
              Maternal & Obstetric Excellence
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0F1E36] font-semibold tracking-tight">
              Personalized Pregnancy Care
            </h2>

            <div className="w-12 h-0.5 bg-[#D4A396]"></div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-light">
              Pregnancy is a deeply personal journey. Dr. Nidhi Singh provides dedicated antenatal consultations focusing on close clinical monitoring, empathetic listening, and individualized health planning for both mother and child.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Every milestone—from initial confirmation and first-trimester scans through to delivery planning and postpartum recovery—is managed with medical rigor, patience, and transparent discussion regarding delivery options.
            </p>

            {/* Feature pillars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#8A4B42] shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#0F1E36]">Trimester-by-Trimester Monitoring</h4>
                  <p className="text-xs text-slate-600">
                    Scheduled blood tests, growth ultrasound reviews, maternal blood pressure checks, and nutritional adjustments tailored to your gestation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#8A4B42] shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#0F1E36]">High-Risk Surveillance & Safety</h4>
                  <p className="text-xs text-slate-600">
                    Attentive clinical protocols for gestational diabetes, hypertension, thyroid fluctuations, or previous pregnancy complications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#8A4B42] shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#0F1E36]">Informed Delivery Decisions</h4>
                  <p className="text-xs text-slate-600">
                    Thorough discussions of delivery preferences, normal labor progression, and cesarean indications without bias or false guarantees.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0F1E36] hover:bg-[#1E293B] rounded-full shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#D4A396]" />
                <span>Schedule Antenatal Consultation</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
