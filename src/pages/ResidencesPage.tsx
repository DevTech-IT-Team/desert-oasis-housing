import React, { useState } from 'react';
import { 
  MapPin, 
  Check, 
  CalendarCheck, 
  Phone, 
  Wifi, 
  Sparkles, 
  Lock, 
  Sun, 
  HeartHandshake,
  Maximize2
} from 'lucide-react';
import { businessData } from '../data/businessConfig';

interface ResidencesPageProps {
  onOpenIntake: (type?: 'availability' | 'referral', home?: string) => void;
  onPreviewPhoto: (image: string, title: string, subtitle: string) => void;
}

export const ResidencesPage: React.FC<ResidencesPageProps> = ({
  onOpenIntake,
  onPreviewPhoto,
}) => {
  const [selectedHomeId, setSelectedHomeId] = useState<string>(businessData.homes[0].id);
  const [selectedRoomTab, setSelectedRoomTab] = useState<'private' | 'semi'>('private');

  const activeHome = businessData.homes.find(h => h.id === selectedHomeId) || businessData.homes[0];

  // Residence photo library for thumbnail switching
  const residencePhotos: Record<string, string[]> = {
    'east-valley': [
      '/images/residence_east_valley.jpg',
      '/images/bedroom_private.jpg',
      '/images/kitchen_dining.jpg',
      '/images/desert_courtyard.jpg',
    ],
    'central-phoenix': [
      '/images/residence_central.jpg',
      '/images/bedroom_private.jpg',
      '/images/chef_dining.jpg',
      '/images/desert_courtyard.jpg',
    ],
    'west-valley': [
      '/images/residence_west_valley.jpg',
      '/images/bedroom_private.jpg',
      '/images/kitchen_dining.jpg',
      '/images/desert_courtyard.jpg',
    ],
  };

  const currentPhotos = residencePhotos[activeHome.id] || [activeHome.image];
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  return (
    <div className="animate-fade-in bg-[#FAF7F2] text-[#14293A]">
      {/* 1. EDITORIAL INTRO HEADER */}
      <section className="pt-32 pb-16 bg-[#14293A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#14293A]/90 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8A1C36]/30 border border-[#8A1C36]/50 text-[#F7E8EB] text-xs font-bold tracking-widest uppercase">
              <span>Maricopa County Portfolio</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.1]">
              Single-Story Residences <br />
              <span className="italic text-[#E2B6C0] font-serif">Curated for Serenity</span>.
            </h1>

            <p className="text-base sm:text-lg text-white/85 max-w-2xl font-light leading-relaxed">
              Explore our peaceful homes nestled in quiet, upscale residential neighborhoods across Mesa, Central Phoenix, and Glendale. Each property is strictly single-story with step-free entrances, shaded pergolas, and private bedrooms.
            </p>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE RESIDENCE SWITCHER BAR (NO CARDS) */}
      <section className="bg-white border-b border-[#14293A]/10 sticky top-[68px] z-20 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between overflow-x-auto no-scrollbar py-3 gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              {businessData.homes.map((home) => {
                const isActive = home.id === activeHome.id;
                return (
                  <button
                    key={home.id}
                    type="button"
                    onClick={() => {
                      setSelectedHomeId(home.id);
                      setSelectedPhotoIndex(0);
                    }}
                    className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#8A1C36] text-white shadow-md'
                        : 'bg-[#FAF7F2] text-[#14293A]/80 hover:bg-[#FAF7F2]/80 border border-[#14293A]/10'
                    }`}
                  >
                    <span>{home.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                      isActive ? 'bg-white/20 text-white' : 'bg-[#14293A]/10 text-[#14293A]'
                    }`}>
                      {home.city.split('/')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <span className="text-xs text-[#14293A]/70 font-medium">Need immediate intake?</span>
              <button
                type="button"
                onClick={() => onOpenIntake('availability', activeHome.name)}
                className="px-4 py-2 rounded-xl bg-[#14293A] text-white text-xs font-bold hover:bg-[#8A1C36] transition-colors cursor-pointer"
              >
                Check Bed Openings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MASTER ARCHITECTURAL STUDIO SHOWCASE (NO CARDS) */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Photographic Studio Viewport */}
            <div className="lg:col-span-7 space-y-4">
              {/* Main Panoramic Frame */}
              <div className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-[#14293A] shadow-xl border border-[#14293A]/10 group">
                <img
                  src={currentPhotos[selectedPhotoIndex] || activeHome.image}
                  alt={`${activeHome.name} view`}
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-102"
                />
                
                {/* Expand Lightbox Button */}
                <button
                  type="button"
                  onClick={() => onPreviewPhoto(
                    currentPhotos[selectedPhotoIndex] || activeHome.image,
                    activeHome.name,
                    activeHome.city
                  )}
                  className="absolute top-4 right-4 z-10 px-3.5 py-2 rounded-xl bg-black/60 hover:bg-[#8A1C36] text-white text-xs font-semibold backdrop-blur-md transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Full View</span>
                </button>

                {/* Status Overlay Badge */}
                <div className="absolute bottom-4 left-4 z-10">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-md ${
                    activeHome.status === 'Move-in Ready'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-amber-600 text-white'
                  }`}>
                    ● {activeHome.status}
                  </span>
                </div>
              </div>

              {/* Multi-Photo Thumbnail Strip */}
              <div className="grid grid-cols-4 gap-3">
                {currentPhotos.map((photoUrl, pIdx) => {
                  const isPhotoActive = pIdx === selectedPhotoIndex;
                  return (
                    <button
                      key={pIdx}
                      type="button"
                      onClick={() => setSelectedPhotoIndex(pIdx)}
                      className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        isPhotoActive 
                          ? 'border-[#8A1C36] shadow-md scale-102' 
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={photoUrl}
                        alt={`Photo angle ${pIdx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>

              {/* Key Architectural Specs Banner */}
              <div className="p-5 rounded-2xl bg-[#EFE9DF] border border-[#14293A]/10 grid grid-cols-3 gap-4 text-center">
                <div>
                  <span className="text-[11px] text-[#14293A]/70 uppercase tracking-wider font-semibold block">Architecture</span>
                  <span className="font-serif text-lg text-[#14293A] font-medium">{activeHome.type}</span>
                </div>
                <div className="border-x border-[#14293A]/15 px-2">
                  <span className="text-[11px] text-[#14293A]/70 uppercase tracking-wider font-semibold block">Bedrooms / Scale</span>
                  <span className="font-serif text-lg text-[#14293A] font-medium">{activeHome.totalBeds}</span>
                </div>
                <div>
                  <span className="text-[11px] text-[#14293A]/70 uppercase tracking-wider font-semibold block">Neighborhood</span>
                  <span className="font-serif text-lg text-[#14293A] font-medium">{activeHome.city}</span>
                </div>
              </div>
            </div>

            {/* Right Residence Details & Room Suite Visualizer */}
            <div className="lg:col-span-5 space-y-7">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8A1C36] mb-2">
                  <MapPin className="w-4 h-4 text-[#8A1C36]" />
                  <span>{activeHome.area}</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-[#14293A] mb-3">
                  {activeHome.name}
                </h2>

                <p className="text-sm sm:text-base text-[#14293A]/80 leading-relaxed font-light">
                  {activeHome.neighborhoodHighlight}. Situated on a quiet street surrounded by mature desert landscaping, walking paths, and peaceful neighbors.
                </p>
              </div>

              {/* Interactive Room Accommodations Tabs */}
              <div className="p-6 rounded-3xl bg-white border border-[#14293A]/10 shadow-sm space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#14293A]/10">
                  <h3 className="font-serif text-lg text-[#14293A]">Room Accommodations</h3>
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#FAF7F2] border border-[#14293A]/10">
                    <button
                      type="button"
                      onClick={() => setSelectedRoomTab('private')}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        selectedRoomTab === 'private'
                          ? 'bg-[#8A1C36] text-white shadow-sm'
                          : 'text-[#14293A]/70 hover:text-[#14293A]'
                      }`}
                    >
                      Private Suite
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedRoomTab('semi')}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        selectedRoomTab === 'semi'
                          ? 'bg-[#8A1C36] text-white shadow-sm'
                          : 'text-[#14293A]/70 hover:text-[#14293A]'
                      }`}
                    >
                      Semi-Private Suite
                    </button>
                  </div>
                </div>

                {selectedRoomTab === 'private' ? (
                  <div className="space-y-3.5 text-xs sm:text-sm">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#14293A] font-semibold">Total Personal Privacy:</strong> Individual keyed smart lock for maximum peace of mind.
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#14293A] font-semibold">Furnished Comfort:</strong> Plush memory-foam mattress, solid wood dresser, bedside charging & nightstand.
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#14293A] font-semibold">Climate Control:</strong> High-efficiency whisper-quiet A/C dedicated airflow.
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3.5 text-xs sm:text-sm">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#14293A] font-semibold">Spacious Shared Layout:</strong> Generous double room with privacy dividers and individual nightstands.
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#14293A] font-semibold">Cost-Effective Dignity:</strong> Ideal for budget stability without compromising on quality or hygiene.
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#14293A] font-semibold">Supportive Peer Living:</strong> Encourages companionship while honoring personal boundaries.
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-3 border-t border-[#14293A]/10 flex items-center justify-between">
                  <span className="text-xs text-[#14293A]/70">Availability for {activeHome.name}:</span>
                  <span className="text-xs font-bold text-[#8A1C36]">{activeHome.status}</span>
                </div>
              </div>

              {/* Residence Highlights List */}
              <div className="space-y-2.5">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#14293A]/80">Key Residence Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeHome.features.map((feature, fIdx) => (
                    <div key={fIdx} className="p-3 rounded-xl bg-white/70 border border-[#14293A]/10 flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#8A1C36] shrink-0 mt-0.5" />
                      <span className="text-[#14293A]/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Action Triggers */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenIntake('availability', activeHome.name)}
                  className="w-full sm:flex-1 py-4 rounded-xl bg-[#8A1C36] hover:bg-[#A02342] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Reserve Bed at {activeHome.name.replace('The ', '')}</span>
                </button>

                <a
                  href={businessData.phone}
                  className="w-full sm:w-auto px-5 py-4 rounded-xl bg-[#14293A] text-white font-semibold text-xs sm:text-sm hover:bg-[#1D3A52] transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#E2B6C0]" />
                  <span>Speak with Coordinator</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. WHAT EVERY RESIDENCE INCLUDES (Continuous Horizontal Architectural Ribbon) */}
      <section className="py-20 bg-[#EFE9DF] text-[#14293A] border-y border-[#14293A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8A1C36]">All-Inclusive Living</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#14293A]">
              Standard Inclusions in Every Home
            </h2>
            <p className="text-xs sm:text-sm text-[#14293A]/80 font-light max-w-xl mx-auto">
              No surprise utility bills, no hidden maintenance fees. Everything needed for a peaceful daily routine is included in one transparent monthly rate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#14293A]/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#8A1C36]/10 text-[#8A1C36] flex items-center justify-center">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#14293A]">All Utilities & Gigabit WiFi</h3>
              <p className="text-xs text-[#14293A]/75 leading-relaxed font-light">
                High-efficiency air conditioning, water, trash, gas, and ultra-high-speed fiber internet for all devices.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#14293A]/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#8A1C36]/10 text-[#8A1C36] flex items-center justify-center">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#14293A]">Private Desert Courtyards</h3>
              <p className="text-xs text-[#14293A]/75 leading-relaxed font-light">
                Shaded pergolas, outdoor seating, tranquil stone fountains, and flowering bougainvillea gardens.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#14293A]/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#8A1C36]/10 text-[#8A1C36] flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#14293A]">Security & Smart Access</h3>
              <p className="text-xs text-[#14293A]/75 leading-relaxed font-light">
                Keyless digital entry on exterior doors and individual bedroom doors for maximum personal autonomy.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#14293A]/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#8A1C36]/10 text-[#8A1C36] flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#14293A]">Household Coordination</h3>
              <p className="text-xs text-[#14293A]/75 leading-relaxed font-light">
                High-capacity on-site washer & dryer with detergent, regular common area cleaning, and fresh linens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RESIDENCE TOURS & INQUIRY */}
      <section className="py-16 bg-[#14293A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Schedule a Private Tour Today
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-xl mx-auto">
            Experience the calm ambiance for yourself or join a live video walkthrough with a residential coordinator.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onOpenIntake('availability', activeHome.name)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#8A1C36] hover:bg-[#A02342] text-white font-bold text-sm shadow-lg transition-all cursor-pointer"
            >
              Book In-Person Tour
            </button>
            <a
              href={businessData.phone}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#E2B6C0]" />
              <span>Call Intake: {businessData.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
