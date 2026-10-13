import React from 'react';
import { Home, Sparkles, Clock, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { businessData } from '../data/businessConfig';

interface ServicesSectionProps {
  onOpenIntake: (type?: 'availability' | 'referral', home?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenIntake }) => {
  const getIcon = (id: string, isPrimary?: boolean) => {
    const iconColor = isPrimary ? 'text-[#E2B6C0]' : 'text-[#8A1C36]';
    switch (id) {
      case 'independent-living':
        return <Home className={`w-6 h-6 ${iconColor}`} />;
      case 'recuperative-respite':
        return <Clock className={`w-6 h-6 ${iconColor}`} />;
      case 'transitional-living':
        return <Sparkles className={`w-6 h-6 ${iconColor}`} />;
      case 'daily-coordination':
        return <HeartHandshake className={`w-6 h-6 ${iconColor}`} />;
      default:
        return <Home className={`w-6 h-6 ${iconColor}`} />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Types of Housing & Support"
          title="Compassionate Residential Options"
          subtitle="Independent living is our primary service, supported by focused options for transitional stability and post-hospital recovery."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {businessData.services.map((service) => {
            const isPrimary = service.isPrimary;

            return (
              <div
                key={service.id}
                className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  isPrimary
                    ? 'bg-gradient-to-br from-[#14293A] to-[#1D3A52] text-white border-2 border-[#8A1C36] shadow-2xl relative overflow-hidden'
                    : 'bg-white text-[#14293A] border border-[#8A1C36]/25 shadow-md hover:border-[#8A1C36]'
                }`}
              >
                {/* Highlight Tag for Primary Service */}
                {isPrimary && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-[#8A1C36] text-white text-[11px] font-bold uppercase tracking-widest px-5 py-1.5 rounded-bl-2xl shadow-sm">
                      Primary Service Focus
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      isPrimary ? 'bg-white/10 border border-white/20' : 'bg-[#8A1C36]/10 border border-[#8A1C36]/25'
                    }`}>
                      {getIcon(service.id, isPrimary)}
                    </div>
                    <div>
                      <span className={`text-xs font-semibold uppercase tracking-wider ${
                        isPrimary ? 'text-[#E2B6C0]' : 'text-[#8A1C36]'
                      }`}>
                        {service.tag}
                      </span>
                      <h3 className={`font-serif text-2xl sm:text-2xl font-medium ${
                        isPrimary ? 'text-white' : 'text-[#14293A]'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className={`text-sm sm:text-base leading-relaxed mb-6 font-light ${
                    isPrimary ? 'text-white/85' : 'text-[#14293A]/80'
                  }`}>
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <p className={`text-xs uppercase font-semibold tracking-wider ${
                      isPrimary ? 'text-[#E2B6C0]' : 'text-[#14293A]'
                    }`}>
                      Key Elements:
                    </p>
                    <ul className="space-y-2">
                      {service.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isPrimary ? 'text-[#E2B6C0]' : 'text-[#8A1C36]'
                          }`} />
                          <span className={isPrimary ? 'text-white/90' : 'text-[#14293A]/85'}>
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-current/15 flex items-center justify-between">
                  <span className={`text-xs ${isPrimary ? 'text-white/70' : 'text-[#14293A]/60'}`}>
                    Available across Phoenix Metro homes
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenIntake(isPrimary ? 'availability' : 'referral')}
                    className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isPrimary
                        ? 'bg-[#8A1C36] text-white hover:bg-[#A02342] shadow-md'
                        : 'border border-[#14293A] text-[#14293A] hover:bg-[#14293A] hover:text-white'
                    }`}
                  >
                    {isPrimary ? 'Check Availability' : 'Inquire for Placement'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
