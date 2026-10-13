import React from 'react';
import { Shield, Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { DayInTheLifeWidget } from '../components/DayInTheLifeWidget';
import { businessData } from '../data/businessConfig';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Mission & Story"
          title="Fostering Autonomy, Respect, and Community in Every Home"
          subtitle="We believe that safe, high-standard housing is the cornerstone of personal peace, health, and independence."
        />

        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Editorial Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
              <img
                src="/images/about_home.jpg"
                alt="Exterior of a Desert Oasis residential community home in Phoenix"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14293A]/75 via-transparent to-transparent" />
              
              {/* Image Caption Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#14293A]/95 backdrop-blur-md border border-[#8A1C36]/40 text-white">
                <p className="text-xs uppercase tracking-wider text-[#E2B6C0] font-semibold">Residential Standard</p>
                <p className="font-serif text-sm sm:text-base font-normal">Authentic single-family homes in quiet suburban Phoenix neighborhoods.</p>
              </div>
            </div>

            {/* Decorative Burgundy Floating Accent */}
            <div className="hidden sm:block absolute -top-5 -left-5 w-24 h-24 border-2 border-[#8A1C36]/30 rounded-2xl -z-10" />
            <div className="hidden sm:block absolute -bottom-5 -right-5 w-32 h-32 bg-[#8A1C36]/10 rounded-2xl -z-10" />
          </div>

          {/* Column 2: Text Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-lg text-[#14293A]/85 leading-relaxed space-y-4">
              <p className="text-lg leading-relaxed font-normal">
                At <strong className="text-[#14293A] font-semibold">Desert Oasis Housing</strong>, our philosophy is simple: independent living should never feel cold, institutional, or uncertain. Everyone deserves a calm, beautiful space to call their own—a home where boundaries are respected, daily life is peaceful, and personal growth can flourish.
              </p>
              <p className="text-base text-[#14293A]/80 leading-relaxed">
                We manage single-family residential properties located in established neighborhoods throughout Phoenix, Mesa, Scottsdale, and Glendale. By deliberately maintaining small resident communities rather than large industrial complexes, we preserve the warmth, dignity, and personal space essential for lasting well-being.
              </p>
            </div>

            {/* 3 Trust Pillars */}
            <div className="pt-4 space-y-4">
              <h3 className="font-serif text-xl text-[#14293A] font-medium border-b border-[#8A1C36]/25 pb-2">
                Our Core Pillars of Service
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {businessData.trustPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#8A1C36]/20 hover:border-[#8A1C36] transition-colors shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#14293A] text-[#E2B6C0] flex items-center justify-center mb-3 shadow-sm">
                      {idx === 0 && <Shield className="w-4 h-4" />}
                      {idx === 1 && <Sparkles className="w-4 h-4" />}
                      {idx === 2 && <HeartHandshake className="w-4 h-4" />}
                    </div>
                    <h4 className="font-serif text-base font-semibold text-[#14293A] mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#14293A]/75 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Operational Standards */}
            <div className="p-4 rounded-xl bg-white border-l-4 border-[#8A1C36] shadow-sm flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#8A1C36] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-[#14293A]/80">
                <strong className="text-[#14293A]">Clean, Transparent Operations:</strong> All houses maintain active quiet hours, non-smoking interiors, zero-tolerance drug and alcohol safety policies, and direct communication lines with residents and families.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive "A Day at Desert Oasis" Experience Widget */}
        <DayInTheLifeWidget />
      </div>
    </section>
  );
};
