import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  ShieldCheck 
} from 'lucide-react';
import { businessData } from '../data/businessConfig';

interface LivingOptionsPageProps {
  onOpenIntake: (type?: 'availability' | 'referral', home?: string) => void;
  onNavigate: (page: string) => void;
}

export const LivingOptionsPage: React.FC<LivingOptionsPageProps> = ({
  onOpenIntake,
  onNavigate,
}) => {
  const [activePathwayId, setActivePathwayId] = useState<string>(businessData.services[0].id);

  // Interactive Fit Assessment State
  const [surveyTimeline, setSurveyTimeline] = useState<'immediate' | 'month' | 'respite'>('immediate');
  const [surveyRoom, setSurveyRoom] = useState<'private' | 'semi'>('private');
  const [surveySupport, setSurveySupport] = useState<'autonomous' | 'coordination'>('autonomous');

  const activeService = businessData.services.find(s => s.id === activePathwayId) || businessData.services[0];

  return (
    <div className="animate-fade-in bg-[#FAF7F2] text-[#14293A]">
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-32 pb-16 bg-[#14293A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#14293A]/90 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8A1C36]/30 border border-[#8A1C36]/50 text-[#F7E8EB] text-xs font-bold tracking-widest uppercase">
              <span>Personalized Pathways</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.1]">
              Support Tailored to You. <br />
              <span className="italic text-[#E2B6C0] font-serif">Autonomy Always Protected</span>.
            </h1>

            <p className="text-base sm:text-lg text-white/85 max-w-2xl font-light leading-relaxed">
              We reject the one-size-fits-all institutional model. Whether you are seeking stable long-term independent living, a 60-day post-hospitalization respite sanctuary, or community transition support, our homes provide the right balance of privacy and assistance.
            </p>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE LIVING PATHWAY EXPLORER (NO CARDS) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#14293A]/10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8A1C36]">Care Spectrum</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#14293A]">
                Explore Our Living Pathways
              </h2>
            </div>
            <span className="text-xs sm:text-sm text-[#14293A]/70">
              Select a pathway below to view detailed inclusions & routines
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Pathway Selector Track */}
            <div className="lg:col-span-4 space-y-3">
              {businessData.services.map((service, sIdx) => {
                const isActive = service.id === activePathwayId;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActivePathwayId(service.id)}
                    className={`w-full text-left p-5 rounded-2xl transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-[#8A1C36] text-white border-transparent shadow-xl translate-x-1'
                        : 'bg-white hover:bg-[#FAF7F2] text-[#14293A] border-[#14293A]/10 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-[11px] font-bold uppercase tracking-wider ${isActive ? 'text-white/80' : 'text-[#8A1C36]'}`}>
                        Pathway 0{sIdx + 1} &middot; {service.tag}
                      </span>
                    </div>
                    <h3 className={`font-serif text-lg sm:text-xl mb-1 ${isActive ? 'text-white' : 'text-[#14293A]'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-xs line-clamp-2 ${isActive ? 'text-white/80' : 'text-[#14293A]/70'}`}>
                      {service.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Master Pathway Canvas */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-[#14293A]/10 shadow-sm space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#14293A]/10 gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#8A1C36]">Selected Model</span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#14293A] mt-1">
                    {activeService.title}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8A1C36]/10 text-[#8A1C36] text-xs font-semibold self-start sm:self-auto">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Dignity-Protected Standard</span>
                </span>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#14293A]/70">Core Purpose & Overview</h4>
                <p className="text-sm sm:text-base text-[#14293A]/85 leading-relaxed font-light">
                  {activeService.description}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#14293A]/70">Standard Inclusions & Guarantees</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="p-4 rounded-xl bg-[#FAF7F2] border border-[#14293A]/10 flex items-start gap-3">
                      <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#14293A]/90 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pathway Action Banner */}
              <div className="p-6 rounded-2xl bg-[#EFE9DF] border border-[#14293A]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="font-serif text-lg text-[#14293A] block">Ready to discuss this pathway?</span>
                  <span className="text-xs text-[#14293A]/75">Our intake team can verify eligibility and bed dates within 2 hours.</span>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenIntake('availability', activeService.title)}
                  className="px-6 py-3 rounded-xl bg-[#8A1C36] text-white text-xs sm:text-sm font-bold hover:bg-[#A02342] transition-colors cursor-pointer whitespace-nowrap shadow-md"
                >
                  Inquire for {activeService.title.split(' ')[0]}
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE "FIND YOUR IDEAL FIT" CALCULATOR / WIDGET */}
      <section className="py-20 bg-[#EFE9DF] text-[#14293A] border-y border-[#14293A]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8A1C36]">Self-Assessment Tool</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#14293A]">
              Find Your Ideal Living Fit
            </h2>
            <p className="text-xs sm:text-sm text-[#14293A]/80 font-light">
              Select your requirements below to see which residence type and support level matches best.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#14293A]/10 shadow-sm space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Question 1: Timeline */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#14293A] block">
                  1. Desired Duration
                </label>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setSurveyTimeline('immediate')}
                    className={`w-full text-left p-3.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                      surveyTimeline === 'immediate'
                        ? 'bg-[#8A1C36] text-white border-transparent'
                        : 'bg-[#FAF7F2] text-[#14293A] border-[#14293A]/10 hover:bg-[#FAF7F2]/80'
                    }`}
                  >
                    Long-Term Permanent Home
                  </button>
                  <button
                    type="button"
                    onClick={() => setSurveyTimeline('respite')}
                    className={`w-full text-left p-3.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                      surveyTimeline === 'respite'
                        ? 'bg-[#8A1C36] text-white border-transparent'
                        : 'bg-[#FAF7F2] text-[#14293A] border-[#14293A]/10 hover:bg-[#FAF7F2]/80'
                    }`}
                  >
                    30–90 Day Recuperation / Respite
                  </button>
                  <button
                    type="button"
                    onClick={() => setSurveyTimeline('month')}
                    className={`w-full text-left p-3.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                      surveyTimeline === 'month'
                        ? 'bg-[#8A1C36] text-white border-transparent'
                        : 'bg-[#FAF7F2] text-[#14293A] border-[#14293A]/10 hover:bg-[#FAF7F2]/80'
                    }`}
                  >
                    Transitional Re-entry Bridge
                  </button>
                </div>
              </div>

              {/* Question 2: Room Style */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#14293A] block">
                  2. Room Accommodation
                </label>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setSurveyRoom('private')}
                    className={`w-full text-left p-3.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                      surveyRoom === 'private'
                        ? 'bg-[#8A1C36] text-white border-transparent'
                        : 'bg-[#FAF7F2] text-[#14293A] border-[#14293A]/10 hover:bg-[#FAF7F2]/80'
                    }`}
                  >
                    Private Bedroom (Keyed Lock)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSurveyRoom('semi')}
                    className={`w-full text-left p-3.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                      surveyRoom === 'semi'
                        ? 'bg-[#8A1C36] text-white border-transparent'
                        : 'bg-[#FAF7F2] text-[#14293A] border-[#14293A]/10 hover:bg-[#FAF7F2]/80'
                    }`}
                  >
                    Semi-Private Companion Suite
                  </button>
                </div>
              </div>

              {/* Question 3: Support Level */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#14293A] block">
                  3. Everyday Assistance
                </label>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setSurveySupport('autonomous')}
                    className={`w-full text-left p-3.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                      surveySupport === 'autonomous'
                        ? 'bg-[#8A1C36] text-white border-transparent'
                        : 'bg-[#FAF7F2] text-[#14293A] border-[#14293A]/10 hover:bg-[#FAF7F2]/80'
                    }`}
                  >
                    Fully Independent Adult
                  </button>
                  <button
                    type="button"
                    onClick={() => setSurveySupport('coordination')}
                    className={`w-full text-left p-3.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                      surveySupport === 'coordination'
                        ? 'bg-[#8A1C36] text-white border-transparent'
                        : 'bg-[#FAF7F2] text-[#14293A] border-[#14293A]/10 hover:bg-[#FAF7F2]/80'
                    }`}
                  >
                    Coordination & Meal Assistance
                  </button>
                </div>
              </div>

            </div>

            {/* Recommendation Result Banner */}
            <div className="p-6 rounded-2xl bg-[#14293A] text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E2B6C0]">Your Recommended Pathway</span>
                <h4 className="font-serif text-2xl text-white">
                  {surveyTimeline === 'respite' 
                    ? 'Post-Hospitalization & Respite Recuperation'
                    : surveyTimeline === 'month'
                    ? 'Transitional Community Re-entry Living'
                    : 'Standard Independent Residential Living'}
                </h4>
                <p className="text-xs text-white/80 font-light">
                  {surveyRoom === 'private' ? 'Private suite with dedicated keyed lock' : 'Furnished companion suite'} with {surveySupport === 'autonomous' ? 'full autonomous independence' : 'daily meal & coordinate assistance'}.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenIntake('availability', surveyRoom === 'private' ? 'Private Suite' : 'Semi-Private Room')}
                className="px-6 py-3.5 rounded-xl bg-[#8A1C36] hover:bg-[#A02342] text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-lg cursor-pointer"
              >
                Inquire With These Preferences
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 4. THE NON-INSTITUTIONAL RESIDENT CHARTER */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t-2 border-[#8A1C36] pt-12">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#14293A] mb-8 text-center">
              Our Non-Institutional Promise to Every Resident
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs sm:text-sm">
              <div className="space-y-2">
                <span className="font-serif text-xl text-[#8A1C36] block">01. Unconditional Respect</span>
                <p className="text-[#14293A]/80 leading-relaxed font-light">
                  Residents are sovereign adults. You are greeted with kindness, addressed with dignity, and never treated as a number or a case file.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-serif text-xl text-[#8A1C36] block">02. Predictable Financial Peace</span>
                <p className="text-[#14293A]/80 leading-relaxed font-light">
                  No surprising extra charges for air conditioning in July, no linen fees, and no laundry coin machines. One clear rate covers your entire sanctuary.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-serif text-xl text-[#8A1C36] block">03. Peaceful Neighborhoods</span>
                <p className="text-[#14293A]/80 leading-relaxed font-light">
                  Every home is located in a quiet, low-traffic suburban residential street with palm trees, shaded sidewalks, and respectful house culture.
                </p>
              </div>
            </div>

            <div className="pt-10 text-center">
              <button
                type="button"
                onClick={() => onNavigate('residences')}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#14293A] hover:bg-[#8A1C36] text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer shadow-md"
              >
                <span>View Corresponding Residential Homes</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
