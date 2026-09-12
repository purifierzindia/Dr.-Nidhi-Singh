import React from 'react';
import { MessageCircle, Heart, Clock, Instagram, ArrowUpRight } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data/doctorData';

export const PatientExperienceSection: React.FC = () => {
  return (
    <section id="patient-care" className="py-14 sm:py-20 md:py-24 bg-white border-t border-[#EAE3D9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-8 sm:mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B87D70] mb-2 block">
            Patient-Centered Approach
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#0F1E36] font-semibold tracking-tight">
            Care That Begins With Listening
          </h2>
          <div className="w-12 h-0.5 bg-[#D4A396] mt-3 mb-4"></div>
        </div>

        {/* Narrative */}
        <div className="space-y-4 text-left">
          <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
            Many women delay seeking gynecological advice due to discomfort, anxiety, or feeling rushed during consultations. Dr. Nidhi Singh has cultivated a practice where questions are welcomed, privacy is safeguarded, and every symptom is evaluated with dignity.
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Whether you are addressing irregular cycles, discussing a high-risk pregnancy ultrasound, or planning a safe delivery, consultations are structured as an open dialogue. Clinical findings are explained in clear, approachable language so you remain an active, confident partner in your healthcare decisions.
          </p>
        </div>

        {/* Experience Touchpoints — Clean Editorial 3-Column Strip with Subtle Dividers */}
        <div className="my-8 sm:my-10 py-6 sm:py-8 border-y border-[#EAE3D9] grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#EAE3D9] text-left">
          
          <div className="sm:pr-4">
            <div className="flex items-center gap-2 mb-1.5">
              <Clock className="w-4 h-4 text-[#8A4B42]" />
              <span className="text-xs font-semibold text-[#0F1E36]">Unhurried Consultations</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Dedicated time to discuss symptoms, review test reports, and answer concerns without feeling rushed.
            </p>
          </div>

          <div className="pt-5 sm:pt-0 sm:px-5">
            <div className="flex items-center gap-2 mb-1.5">
              <MessageCircle className="w-4 h-4 text-[#5E6D58]" />
              <span className="text-xs font-semibold text-[#0F1E36]">Plain-Language Clarity</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Clear, transparent explanations of diagnostic reports, ultrasounds, and recommended therapies.
            </p>
          </div>

          <div className="pt-5 sm:pt-0 sm:pl-5">
            <div className="flex items-center gap-2 mb-1.5">
              <Heart className="w-4 h-4 text-[#B87D70]" />
              <span className="text-xs font-semibold text-[#0F1E36]">Safe & Respectful Space</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              A private, non-judgmental environment for sensitive discussions on menstrual, fertility, and maternal health.
            </p>
          </div>

        </div>

        {/* Doctor Instagram Guidance — Clean minimal card */}
        <div className="text-left">
          <a
            href={DOCTOR_PROFILE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE3D9] hover:border-[#B87D70] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white shrink-0">
                <Instagram className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#0F1E36]">
                  Dr. Nidhi Singh on Instagram
                </div>
                <div className="text-[11px] text-slate-500">
                  Follow <strong className="text-slate-700">@drgynaesingh</strong> for reliable pregnancy tips and women&apos;s wellness advice.
                </div>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-xs font-medium text-[#8A4B42]">
              <span>Follow</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

