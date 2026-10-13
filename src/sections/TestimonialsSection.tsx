import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { businessData } from '../data/businessConfig';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Community Voices"
          title="Trust Earned from Residents, Families & Case Managers"
          subtitle="Real experiences reflecting our dedication to human dignity, rapid coordination, and homelike stability."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessData.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-[#8A1C36]/20 p-8 shadow-md flex flex-col justify-between hover:shadow-xl hover:border-[#8A1C36] hover:-translate-y-1.5 transition-all duration-300 relative group"
            >
              <div>
                {/* Tag & Stars */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#8A1C36]/10 text-[#8A1C36]">
                    {t.tag}
                  </span>

                  <div className="flex items-center gap-1 text-[#C8A55A]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-[#8A1C36]/20 absolute -top-3 -left-2 -z-0" />
                  <p className="text-sm sm:text-base text-[#14293A]/85 italic leading-relaxed relative z-10 font-light">
                    “{t.quote}”
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#14293A]/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base text-[#14293A] font-medium">
                    {t.author}
                  </h4>
                  <p className="text-xs text-[#14293A]/65">{t.role} &middot; {t.city}</p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#8A1C36]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
