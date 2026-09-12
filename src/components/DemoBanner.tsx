import React, { useState } from 'react';
import { Sparkles, CheckCircle2, X, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';

export const DemoBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 z-40 bg-[#0F1E36] text-[#FAF8F5] text-xs px-3 py-1.5 rounded-full shadow-lg border border-[#D4A396]/40 hover:bg-[#1E293B] transition flex items-center gap-1.5"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#D4A396]" />
        <span>KK MARTECH Demo Note</span>
      </button>
    );
  }

  return (
    <>
      <div className="bg-[#0F1E36] text-[#FAF8F5] border-b border-[#2A374A] py-2 px-3 sm:px-6 text-xs transition-all relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-[#D4A396]/20 text-[#D4A396] border border-[#D4A396]/30 uppercase tracking-wider">
              Sales Demo
            </span>
            <p className="text-slate-300">
              Personalized practice website concept for <strong className="text-white font-medium">Dr. Nidhi Singh</strong> (Dwarka, New Delhi) by <span className="text-[#D4A396] font-medium">KK MARTECH</span>
            </p>
          </div>

          <div className="flex items-center gap-3 ml-auto sm:ml-0">
            <button
              onClick={() => setIsOpen(true)}
              className="text-[#EBDAD5] hover:text-white underline underline-offset-2 flex items-center gap-1 font-medium transition cursor-pointer"
            >
              <span>Why an Independent Website?</span>
              <ArrowRight className="w-3 h-3" />
            </button>
            <button
              onClick={() => setIsDismissed(true)}
              className="text-slate-400 hover:text-white p-0.5 rounded transition"
              title="Minimize banner"
              aria-label="Dismiss banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Proposal Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#FAF8F5] text-[#0F1E36] rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#EAE3D9] relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-1.5 text-slate-500 hover:text-slate-800 rounded-full hover:bg-slate-200/50 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B87D70] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Personalized Proposal by KK MARTECH</span>
            </div>

            <h3 className="text-2xl font-serif text-[#0F1E36] font-semibold mb-3">
              Tailored Practice Web Concept for Dr. Nidhi Singh
            </h3>

            <p className="text-sm text-slate-600 mb-5 leading-relaxed">
              Dr. Singh, third-party aggregators often capture your patients and charge recurring fees or promote competing doctors next to your name. A dedicated, high-prestige website elevates your personal brand as Dwarka’s trusted specialist.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#EAE3D9]">
                <ShieldCheck className="w-5 h-5 text-[#5E6D58] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#0F1E36]">100% Direct Patient Ownership</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Patients book directly via your WhatsApp or phone without paying aggregator commissions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#EAE3D9]">
                <CheckCircle2 className="w-5 h-5 text-[#B87D70] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#0F1E36]">Dominance in Dwarka Local Search</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Optimized for <em>"Gynecologist Dwarka Sector 8"</em>, <em>"Obstetrician Dwarka"</em>, and <em>"Femme Med Hospital"</em>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#EAE3D9]">
                <CheckCircle2 className="w-5 h-5 text-[#0F1E36] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#0F1E36]">Multi-Location Clarity</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Clear guidance for your patients across Femme Med Hospital (Sector 8), Sector 6, and Sector 10.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#EBDAD5]/30 rounded-xl border border-[#D4A396]/30 mb-6 text-xs text-slate-700">
              <span className="font-semibold text-[#8A4B42]">Verified Information Notice:</span> This demo uses verified qualifications (MBBS, MS), 11+ years experience, and your current Dwarka locations. No false claims or medical guarantees are made.
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-center justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#0F1E36] text-white text-xs font-medium hover:bg-[#1E293B] transition"
              >
                Explore Doctor Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
