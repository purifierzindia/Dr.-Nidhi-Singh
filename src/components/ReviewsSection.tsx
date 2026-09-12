import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { PATIENT_REVIEWS, DOCTOR_PROFILE } from '../data/doctorData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-white border-t border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B87D70] mb-2 block">
              Patient Feedback & Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0F1E36] font-semibold tracking-tight">
              Patient Experiences
            </h2>
            <div className="w-12 h-0.5 bg-[#D4A396] mt-3 mb-3"></div>
            <p className="text-sm sm:text-base text-slate-600 font-light">
              Excerpts from verified patient feedback submitted on healthcare portals following consultations and delivery care.
            </p>
          </div>

          {/* Rating Summary Badge */}
          <div className="py-2.5 px-4 rounded-xl bg-[#FAF8F5] border border-[#EAE3D9] flex items-center gap-3.5 self-start md:self-auto">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0F1E36]">
              {DOCTOR_PROFILE.rating.score}
            </div>
            <div>
              <div className="flex text-amber-500 text-xs sm:text-sm mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <div className="text-xs font-semibold text-[#0F1E36]">Verified Recommendations</div>
              <div className="text-[10px] text-slate-500">Practo & Google Reviews</div>
            </div>
          </div>
        </div>

        {/* Editorial Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {PATIENT_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-4 sm:p-5 rounded-xl bg-white border border-[#EAE3D9] hover:border-[#D4A396]/60 transition-colors text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-medium text-[#5E6D58] bg-[#E2E8E0] px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{rev.source}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif italic mb-4">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#EAE3D9]/60">
                <div>
                  <div className="text-xs font-semibold text-[#0F1E36]">
                    {rev.patientInitial}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {rev.reviewDate}
                  </div>
                </div>
                <span className="text-[10px] text-slate-600 bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EAE3D9]">
                  {rev.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification transparency disclaimer */}
        <p className="text-center text-[11px] text-slate-500 mt-8 italic">
          *Quotes are derived from public verified patient feedback. Individual clinical outcomes may vary. No medical guarantees are represented.
        </p>

      </div>
    </section>
  );
};
