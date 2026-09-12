import React from 'react';
import { MessageCircle, Heart, Clock, Sparkles, Instagram } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/doctorData';

export const PatientExperienceSection: React.FC = () => {
  return (
    <section id="patient-care" className="py-16 md:py-24 bg-white border-t border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Editorial Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B87D70] mb-1 block">
              Patient-Centered Practice
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0F1E36] font-semibold tracking-tight">
              Care That Begins With Listening
            </h2>

            <div className="w-12 h-0.5 bg-[#D4A396]"></div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Many women delay seeking gynecological care due to discomfort, fear of judgment, or feeling rushed during consultations. Dr. Nidhi Singh has cultivated a practice where your questions are invited, your privacy is protected, and your feelings are treated with dignity.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Whether you are discussing irregular periods, navigating an unexpected symptom, or preparing for childbirth, consultations are designed as a two-way dialogue. Medical terms and ultrasound findings are explained in clear, approachable language so you can actively participate in decisions regarding your care.
            </p>

            {/* Experience touchpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE3D9]">
                <Clock className="w-4 h-4 text-[#8A4B42] mb-2" />
                <h3 className="text-xs font-semibold text-[#0F1E36] mb-1">Unhurried Time</h3>
                <p className="text-[11px] text-slate-500 leading-normal">
                  Sufficient appointment time allocated to discuss all your questions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE3D9]">
                <MessageCircle className="w-4 h-4 text-[#5E6D58] mb-2" />
                <h3 className="text-xs font-semibold text-[#0F1E36] mb-1">Clear Clarity</h3>
                <p className="text-[11px] text-slate-500 leading-normal">
                  Plain-language explanations of test results, sonograms, and next steps.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE3D9]">
                <Heart className="w-4 h-4 text-[#B87D70] mb-2" />
                <h3 className="text-xs font-semibold text-[#0F1E36] mb-1">Safe Space</h3>
                <p className="text-[11px] text-slate-500 leading-normal">
                  Empathetic care for sensitive menstrual and reproductive health concerns.
                </p>
              </div>

            </div>

            {/* Educational Instagram Content Callout */}
            <div className="pt-2">
              <a
                href={DOCTOR_PROFILE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#FAF8F5] via-[#FFF5F6] to-[#FAF8F5] border border-[#E7B8C1] hover:border-[#C13584] transition shadow-xs group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white shrink-0 shadow-2xs">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0F1E36] group-hover:text-[#8A4B42] transition-colors">
                      Doctor&apos;s Health Guidance on Instagram
                    </div>
                    <div className="text-[11px] text-slate-600">
                      Follow <strong>@drgynaesingh</strong> for reliable pregnancy tips, women&apos;s wellness advice, and informative reels.
                    </div>
                  </div>
                </div>
                <span className="hidden sm:inline-flex text-xs font-semibold text-[#8A4B42] group-hover:translate-x-1 transition-transform">
                  View Reels ↗
                </span>
              </a>
            </div>

          </div>

          {/* Authentic Supporting Healthcare Image */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="rounded-2xl overflow-hidden border border-[#EAE3D9] bg-white shadow-xl">
                <div className="aspect-[4/5] relative">
                  <img
                    src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                    alt="Authentic healthcare consultation and patient guidance"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/75 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-[#D4A396] block">
                      The Consultation Environment
                    </span>
                    <p className="text-sm font-serif font-medium text-slate-100 mt-0.5">
                      Thoughtful discussions, patient comfort, and clinical reassurance
                    </p>
                    <p className="text-[10px] text-slate-300 mt-1 italic">
                      *Authentic healthcare imagery representing patient consultation values
                    </p>
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
