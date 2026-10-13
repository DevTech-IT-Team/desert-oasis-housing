import React, { useState } from 'react';
import { MapPin, Bed, Check, Lock, ArrowUpRight, ShieldCheck, Eye } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { businessData } from '../data/businessConfig';

interface HomesSectionProps {
  onOpenIntake: (type?: 'availability' | 'referral', home?: string) => void;
  onPreviewPhoto?: (image: string, title: string, subtitle: string) => void;
}

export const HomesSection: React.FC<HomesSectionProps> = ({ onOpenIntake, onPreviewPhoto }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'east' | 'central' | 'west'>('all');

  const filteredHomes = businessData.homes.filter((home) => {
    if (selectedFilter === 'all') return true;
    return home.regionKey === selectedFilter;
  });

  return (
    <section id="homes" className="py-20 lg:py-28 bg-[#F4EFEB]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Residential Locations"
          title="Curated Homes Throughout Maricopa County"
          subtitle="Explore our peaceful, clean single-story residences situated across the East Valley, Central Phoenix, and West Valley."
        />

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          <button
            type="button"
            onClick={() => setSelectedFilter('all')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-[#14293A] text-white shadow-md'
                : 'bg-white text-[#14293A]/80 hover:bg-[#FAF8F5] border border-[#14293A]/15'
            }`}
          >
            All Homes ({businessData.homes.length})
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('east')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedFilter === 'east'
                ? 'bg-[#8A1C36] text-white shadow-md'
                : 'bg-white text-[#14293A]/80 hover:bg-[#FAF8F5] border border-[#14293A]/15'
            }`}
          >
            East Valley &middot; Mesa
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('central')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedFilter === 'central'
                ? 'bg-[#8A1C36] text-white shadow-md'
                : 'bg-white text-[#14293A]/80 hover:bg-[#FAF8F5] border border-[#14293A]/15'
            }`}
          >
            Central Phoenix &middot; Arcadia
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('west')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedFilter === 'west'
                ? 'bg-[#8A1C36] text-white shadow-md'
                : 'bg-white text-[#14293A]/80 hover:bg-[#FAF8F5] border border-[#14293A]/15'
            }`}
          >
            West Valley &middot; Glendale
          </button>
        </div>

        {/* Privacy Advisory Notice */}
        <div className="max-w-3xl mx-auto mb-12 p-4 rounded-xl bg-white border border-[#8A1C36]/30 flex items-start gap-3.5 shadow-sm">
          <div className="p-2 rounded-lg bg-[#8A1C36]/10 text-[#8A1C36] shrink-0">
            <Lock className="w-4 h-4" />
          </div>
          <div className="text-xs sm:text-sm text-[#14293A]/85 leading-relaxed">
            <strong className="text-[#14293A] font-semibold">Resident Privacy & Safety Commitment:</strong>{' '}
            To honor the safety and tranquility of our residents, exact street addresses are confidential. Precise neighborhood directions and personal walkthroughs are provided upon verified phone or email intake.
          </div>
        </div>

        {/* Varied Grid of Homes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHomes.map((home) => (
            <div
              key={home.id}
              className="rounded-3xl bg-white border border-[#8A1C36]/25 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Box */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={home.image}
                    alt={home.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14293A]/90 text-white text-xs font-semibold backdrop-blur-md border border-[#8A1C36]/40 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#E2B6C0]" />
                    <span>{home.status}</span>
                  </div>

                  {/* Click to Preview Photo Button */}
                  {onPreviewPhoto && (
                    <button
                      type="button"
                      onClick={() => onPreviewPhoto(home.image, home.name, `${home.city} • ${home.area}`)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-[#8A1C36] transition-colors backdrop-blur-md opacity-0 group-hover:opacity-100"
                      aria-label="Enlarge Home Photo"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  )}

                  {/* Bed Count Tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Bed className="w-4 h-4 text-[#E2B6C0]" />
                      <span>{home.totalBeds}</span>
                    </span>
                    <span className="text-white/80 font-light">Single-Level Residence</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#8A1C36] tracking-wider uppercase mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{home.city} &middot; {home.area}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#14293A] mb-1">
                    {home.name}
                  </h3>

                  <p className="text-xs text-[#14293A]/70 mb-4 italic">
                    {home.neighborhoodHighlight}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#14293A]/10">
                    {home.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#14293A]/85">
                        <Check className="w-3.5 h-3.5 text-[#8A1C36] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => onOpenIntake('availability', home.name)}
                  className="w-full py-3 rounded-xl bg-[#8A1C36] hover:bg-[#A02342] text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Inquire Availability</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
