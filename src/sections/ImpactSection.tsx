import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { businessData } from '../data/businessConfig';

export const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-20 lg:py-28 bg-[#14293A] text-white relative overflow-hidden border-y-2 border-[#8A1C36]/40">
      {/* Background Burgundy Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#8A1C36]/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Our Footprint & Standards"
          title="Stability, Safety, and Dignity in Practice"
          subtitle="Measurable commitments ensuring each resident experiences consistent security, comfort, and attentive coordination."
          inverted={true}
        />

        {/* 4 Stat Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-4 mb-16">
          {businessData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.05] border border-[#8A1C36]/30 backdrop-blur-sm text-center hover:border-[#8A1C36] transition-colors"
            >
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#E2B6C0] font-bold mb-2">
                {stat.value}
              </div>
              <div className="font-serif text-base sm:text-lg font-medium text-white mb-1">
                {stat.label}
              </div>
              <p className="text-xs text-white/65">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Editorial Credo Banner */}
        <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-white/[0.08] to-white/[0.02] border border-[#8A1C36]/40 text-center relative">
          <span className="text-4xl text-[#8A1C36] font-serif leading-none block mb-2">“</span>
          <blockquote className="font-serif text-lg sm:text-2xl text-white italic font-light leading-relaxed mb-4">
            A home is more than four walls and a roof. It is the steady ground beneath your feet, where you wake up with safety, rest in comfort, and step forward into each day with dignity.
          </blockquote>
          <div className="w-12 h-[2px] bg-[#8A1C36] mx-auto mb-3" />
          <p className="text-xs uppercase tracking-widest text-[#E2B6C0] font-semibold">
            Desert Oasis Housing Philosophy
          </p>
        </div>
      </div>
    </section>
  );
};
