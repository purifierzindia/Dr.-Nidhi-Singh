import React, { useState } from 'react';
import { AREAS_OF_EXPERTISE } from '../data/doctorData';
import { Baby, Sparkles, HeartPulse, ChevronRight, Check } from 'lucide-react';

interface ExpertiseSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ onSelectService }) => {
  const [filter, setFilter] = useState<'all' | 'obstetrics' | 'gynecology'>('all');

  const filteredItems = AREAS_OF_EXPERTISE.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="expertise" className="py-16 md:py-24 bg-white border-t border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B87D70] mb-2 block">
              Clinical Specializations
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0F1E36] font-semibold tracking-tight">
              Women’s Health & Pregnancy Care
            </h2>
            <div className="w-12 h-0.5 bg-[#D4A396] mt-3 mb-3"></div>
            <p className="text-sm sm:text-base text-slate-600 font-light">
              Verified clinical expertise and individualized care provided by Dr. Nidhi Singh across antenatal, maternal, and gynecological concerns.
            </p>
          </div>

          {/* Clean Segmented Filter (obstetrics / gynecology) */}
          <div className="flex items-center p-1 bg-[#FAF8F5] rounded-full border border-[#EAE3D9] self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#0F1E36] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0F1E36]'
              }`}
            >
              All Care Areas ({AREAS_OF_EXPERTISE.length})
            </button>
            <button
              onClick={() => setFilter('obstetrics')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                filter === 'obstetrics'
                  ? 'bg-[#0F1E36] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0F1E36]'
              }`}
            >
              Pregnancy & Delivery
            </button>
            <button
              onClick={() => setFilter('gynecology')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                filter === 'gynecology'
                  ? 'bg-[#0F1E36] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0F1E36]'
              }`}
            >
              Gynecology & PCOS
            </button>
          </div>
        </div>

        {/* Clean Editorial Grid — Lightweight visual treatment without heavy shadows/borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group p-4 sm:p-5 rounded-xl bg-white border border-[#EAE3D9]/80 hover:border-[#B87D70]/60 transition-colors flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">
                    0{index + 1}
                  </span>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      item.category === 'obstetrics'
                        ? 'bg-[#EBDAD5]/70 text-[#8A4B42]'
                        : 'bg-[#E2E8E0] text-[#4A5745]'
                    }`}
                  >
                    {item.category === 'obstetrics' ? 'Obstetric Care' : 'Gynecology'}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-serif font-semibold text-[#0F1E36] mb-1.5 group-hover:text-[#8A4B42] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {item.summary}
                </p>

                {/* Sub-points */}
                <ul className="space-y-1 mb-3">
                  {item.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="text-[11px] text-slate-500 flex items-start gap-1.5">
                      <Check className="w-3 h-3 text-[#5E6D58] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation trigger link */}
              <button
                onClick={() => onSelectService(item.title)}
                className="text-xs font-medium text-[#0F1E36] group-hover:text-[#8A4B42] flex items-center gap-1 pt-2.5 border-t border-[#EAE3D9]/60 cursor-pointer"
              >
                <span>Consult on this area</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Clean editorial footnote with subtle divider — NOT a boxed card */}
        <div className="mt-8 pt-4 border-t border-[#EAE3D9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-500 text-left">
          <p>
            <strong className="text-[#0F1E36] font-medium">Medical Integrity:</strong> Consultations are structured around individualized clinical history, evidence-based guidelines, and patient dialogue.
          </p>
          <span className="text-[11px] text-[#735A52] shrink-0">Dwarka Sector 8, Sector 6, Sector 10</span>
        </div>

      </div>
    </section>
  );
};
