import React from 'react';
import { WHY_CHOOSE_POINTS } from '../data/doctorData';

export const WhyChooseSection: React.FC = () => {
  const romanNumerals = ['I', 'II', 'III', 'IV'];

  return (
    <section id="why-choose" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14 text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B87D70] mb-2 block">
            Practice Foundations
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#0F1E36] font-semibold tracking-tight">
            Why Patients Choose the Practice
          </h2>
          <div className="w-12 h-0.5 bg-[#D4A396] mt-3 mb-4"></div>
          <p className="text-sm sm:text-base text-slate-600 font-light">
            Founded on clinical competence, transparency, and accessible care across Dwarka’s prominent medical centers.
          </p>
        </div>

        {/* Typographic & Minimalist 4-Point Grid (No giant repetitive cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#EAE3D9]">
          {WHY_CHOOSE_POINTS.map((point, index) => (
            <div
              key={point.title}
              className={`pt-6 md:pt-0 ${index > 0 ? 'md:pl-8' : ''} text-left flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl font-bold text-[#8A4B42]/50">
                    {romanNumerals[index]}
                  </span>
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-white text-slate-600 border border-[#EAE3D9]">
                    {point.badge}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-semibold text-[#0F1E36] mb-2.5">
                  {point.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE3D9]/60">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider">
                  Dr. Nidhi Singh • Dwarka
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
