import React from 'react';
import { FileSpreadsheet, Users, Home, ArrowRight, CheckCircle2, Phone, Mail, Download, ShieldCheck, Clock } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { businessData } from '../data/businessConfig';

interface ReferralSectionProps {
  onOpenIntake: (type?: 'availability' | 'referral', home?: string) => void;
}

export const ReferralSection: React.FC<ReferralSectionProps> = ({ onOpenIntake }) => {
  const getAudienceIcon = (icon: string) => {
    switch (icon) {
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-6 h-6 text-[#E2B6C0]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#E2B6C0]" />;
      case 'Home': return <Home className="w-6 h-6 text-[#E2B6C0]" />;
      default: return <Users className="w-6 h-6 text-[#E2B6C0]" />;
    }
  };

  const intakeChecklist = [
    { title: 'Independent in Daily Living (ADLs)', desc: 'Able to prepare meals, manage hygiene, and maintain personal schedule autonomously.' },
    { title: 'Drug- & Alcohol-Free Commitment', desc: 'Agrees to zero-tolerance sobriety policy for the safety and tranquility of all residents.' },
    { title: 'Harmonious Community Respect', desc: 'Committed to quiet hours, mutual courtesy, and keeping common areas tidy.' },
    { title: 'Confirmed Funding or Self-Pay', desc: 'Transparent all-inclusive monthly terms with zero hidden fees or unexpected utility hikes.' },
  ];

  return (
    <section id="referrals" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who We Serve & Referrals"
          title="A Clear, Welcoming Path for Every Referral"
          subtitle="Whether you are a hospital discharge planner, a concerned family member, or seeking a quiet room for yourself, we ensure an orderly and dignified transition."
        />

        {/* 3 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {businessData.referralAudiences.map((aud, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-[#8A1C36]/25 p-8 shadow-md flex flex-col justify-between hover:shadow-xl hover:border-[#8A1C36] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#14293A] flex items-center justify-center mb-6 shadow-sm">
                  {getAudienceIcon(aud.icon)}
                </div>

                <span className="text-xs uppercase tracking-wider text-[#8A1C36] font-semibold">
                  {aud.subtitle}
                </span>

                <h3 className="font-serif text-2xl text-[#14293A] mt-1 mb-3">
                  {aud.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#14293A]/75 leading-relaxed mb-6">
                  {aud.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#8A1C36]/20">
                  {aud.checklist.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2.5 text-xs text-[#14293A]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#8A1C36] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => onOpenIntake(idx === 0 ? 'referral' : 'availability')}
                  className="w-full py-3.5 rounded-xl bg-[#8A1C36] hover:bg-[#A02342] text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>{idx === 0 ? 'Submit Agency Referral' : 'Start Intake Process'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Discharge Criteria & Eligibility Checklist Card */}
        <div className="rounded-3xl bg-white border border-[#8A1C36]/25 p-7 sm:p-10 shadow-lg mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#14293A]/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14293A]/5 text-[#14293A] text-xs font-semibold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8A1C36]" />
                <span>Move-In Eligibility</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#14293A]">
                Resident Criteria & Admission Guidelines
              </h3>
              <p className="text-xs sm:text-sm text-[#14293A]/75 mt-1">
                We maintain clear, transparent criteria to ensure safety, mutual respect, and community harmony.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenIntake('referral')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#14293A] text-white text-xs sm:text-sm font-semibold hover:bg-[#1D3A52] transition-colors shrink-0 shadow-sm"
            >
              <Download className="w-4 h-4 text-[#E2B6C0]" />
              <span>Request Agency Intake Packet</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {intakeChecklist.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#14293A]/10">
                <div className="w-7 h-7 rounded-lg bg-[#8A1C36] text-white flex items-center justify-center text-xs font-bold mb-3">
                  0{idx + 1}
                </div>
                <h4 className="font-serif text-base text-[#14293A] font-semibold mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-[#14293A]/75 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Referral Process */}
        <div className="rounded-3xl bg-[#F4EFEB] border border-[#8A1C36]/25 p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8A1C36]">
              Simple 3-Step Journey
            </span>
            <h3 className="font-serif text-3xl text-[#14293A] mt-1">
              How the Intake & Move-In Works
            </h3>
            <p className="text-xs sm:text-sm text-[#14293A]/70 mt-2">
              We eliminate complicated red tape, prioritizing rapid bed confirmations and comfortable transitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {businessData.referralSteps.map((step, sIdx) => (
              <div key={sIdx} className="relative p-6 rounded-2xl bg-white border border-[#8A1C36]/20 shadow-sm">
                <div className="font-serif text-3xl font-bold text-[#8A1C36] mb-2">
                  {step.step}
                </div>
                <h4 className="font-serif text-lg font-semibold text-[#14293A] mb-2">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#14293A]/75 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Direct Agency Assistance Box */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#14293A] text-white border-2 border-[#8A1C36]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A1C36]/30 text-[#E2B6C0] text-xs font-semibold mb-2">
                <Clock className="w-3.5 h-3.5" />
                <span>2-Hour Rapid Placement Confirmation</span>
              </div>
              <h4 className="font-serif text-xl sm:text-2xl text-white mb-1">
                Need Immediate Bed Status for a Hospital Discharge?
              </h4>
              <p className="text-xs sm:text-sm text-white/80">
                Our residential intake coordinator can confirm open beds across Phoenix Metro within 2 hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={businessData.phone}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#8A1C36] text-white font-bold text-xs sm:text-sm hover:bg-[#A02342] transition-all shadow-md"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call {businessData.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${businessData.email}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 text-white font-medium text-xs sm:text-sm hover:bg-white/20 transition-all border border-white/20"
              >
                <Mail className="w-4 h-4 text-[#E2B6C0]" />
                <span>Email Intake Packet</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
