import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/doctorData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#EAE3D9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B87D70] mb-2 block">
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#0F1E36] font-semibold tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-0.5 bg-[#D4A396] mx-auto mt-3 mb-4"></div>
          <p className="text-sm sm:text-base text-slate-600 font-light">
            Factual guidance regarding appointments, locations, and consultation preparation in Dwarka.
          </p>
        </div>

        {/* Clean Accordion */}
        <div className="space-y-3 text-left">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#B87D70]/60 shadow-xs'
                    : 'bg-white/80 border-[#EAE3D9] hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4 px-5 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-serif font-semibold text-[#0F1E36]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#0F1E36] text-white rotate-180'
                        : 'bg-[#FAF8F5] text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#EAE3D9]/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Informational Disclaimer */}
        <div className="mt-8 text-center text-[11px] text-slate-500">
          General practice information only. Individual health conditions require personal medical consultation.
        </div>

      </div>
    </section>
  );
};
