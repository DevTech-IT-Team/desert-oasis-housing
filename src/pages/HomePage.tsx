import React, { useState } from 'react';
import { 
  CalendarCheck, 
  ArrowRight, 
  Phone, 
  Sparkles, 
  Check, 
  Eye, 
  HeartHandshake, 
  Quote,
  Compass
} from 'lucide-react';
import { businessData } from '../data/businessConfig';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenIntake: (type?: 'availability' | 'referral', home?: string) => void;
  onPreviewPhoto: (image: string, title: string, subtitle: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenIntake,
  onPreviewPhoto,
}) => {
  const [activeResidenceIndex, setActiveResidenceIndex] = useState(0);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const activeHome = businessData.homes[activeResidenceIndex];
  const activeTestimonial = businessData.testimonials[activeTestimonialIndex];

  return (
    <div className="animate-fade-in">
      {/* 1. HERO SECTION: Editorial Luxury & Warm Sanctuary */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#0F1C2E]">
        {/* Full-Bleed Architectural Backdrop with Ambient Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_residence.jpg"
            alt="Warm sunlit Southwestern living room at Desert Oasis Housing"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C2E] via-[#0F1C2E]/85 to-[#0F1C2E]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-transparent to-black/40" />
          {/* Ambient Warm Rose Glow */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#8A1C36]/25 blur-[160px] rounded-full pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
              {/* Live Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium shadow-xl">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-300 font-semibold">Immediate Bed Openings</span>
                <span className="text-white/40">•</span>
                <span className="text-white/90">East Valley, Central Phoenix & Glendale</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[4.3rem] text-white font-normal leading-[1.08] tracking-tight">
                Not a Facility. <br />
                <span className="italic text-[#E2B6C0] font-serif">A True Sanctuary</span> to Call Home.
              </h1>

              {/* Supporting Editorial Copy */}
              <p className="text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed font-light max-w-2xl">
                Desert Oasis Housing provides dignified, community-centered residential living across the Phoenix Metropolitan area. Single-story homes, private suites, and compassionate support tailored for peace and autonomy.
              </p>

              {/* Action Ribbon */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-center lg:justify-start pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('residences')}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#8A1C36] via-[#A02342] to-[#8A1C36] text-white font-bold text-base shadow-xl shadow-black/40 hover:shadow-2xl hover:brightness-110 active:scale-95 transition-all cursor-pointer group"
                >
                  <Compass className="w-5 h-5 text-white" />
                  <span>Explore Our Residences</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenIntake('availability')}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/25 backdrop-blur-md transition-all shadow-sm cursor-pointer"
                >
                  <CalendarCheck className="w-5 h-5 text-[#E2B6C0]" />
                  <span>Check Bed Availability</span>
                </button>
              </div>

              {/* Trust Metric Counters */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/15 max-w-xl text-left">
                <div>
                  <div className="font-serif text-2xl sm:text-3xl text-[#E2B6C0] font-normal">100%</div>
                  <div className="text-[11px] sm:text-xs text-white/70 uppercase tracking-wider font-medium mt-1">Single-Story Homes</div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl text-white font-normal">24/7</div>
                  <div className="text-[11px] sm:text-xs text-white/70 uppercase tracking-wider font-medium mt-1">Coordination Support</div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl text-white font-normal">Maricopa</div>
                  <div className="text-[11px] sm:text-xs text-white/70 uppercase tracking-wider font-medium mt-1">Valley-Wide Presence</div>
                </div>
              </div>
            </div>

            {/* Right Interactive Quick Finder Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-white">
                <div className="flex items-center justify-between border-b border-white/15 pb-4">
                  <div>
                    <span className="text-[11px] font-semibold tracking-widest text-[#E2B6C0] uppercase">Direct Intake Portal</span>
                    <h3 className="font-serif text-xl sm:text-2xl text-white">Find Your Fit in Phoenix</h3>
                  </div>
                  <div className="p-2.5 rounded-full bg-[#8A1C36]/40 text-[#E2B6C0]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  Whether you are seeking independent residency or coordinating a hospital discharge, our coordinators respond within 2 hours.
                </p>

                <div className="space-y-3">
                  <div 
                    onClick={() => onNavigate('residences')}
                    className="p-3.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                      <div>
                        <div className="text-sm font-semibold text-white">The Saguaro House &middot; Mesa</div>
                        <div className="text-xs text-white/70">East Valley &middot; Private Master & Semi-Private</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                  </div>

                  <div 
                    onClick={() => onNavigate('residences')}
                    className="p-3.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div>
                        <div className="text-sm font-semibold text-white">The Arcadia Vista &middot; Central Phoenix</div>
                        <div className="text-xs text-white/70">Central Corridor &middot; Camelback Mountain Views</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                  </div>

                  <div 
                    onClick={() => onNavigate('residences')}
                    className="p-3.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-400"></div>
                      <div>
                        <div className="text-sm font-semibold text-white">The Citrus Grove &middot; Glendale</div>
                        <div className="text-xs text-white/70">West Valley &middot; Shaded Courtyard & Citrus Trees</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={() => onOpenIntake('referral')}
                    className="w-full py-3 rounded-xl bg-white text-[#14293A] font-bold text-xs sm:text-sm hover:bg-[#FAF8F5] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <HeartHandshake className="w-4 h-4 text-[#8A1C36]" />
                    <span>Case Manager / Agency Placement</span>
                  </button>

                  <a
                    href={businessData.phone}
                    className="w-full py-2.5 text-center text-xs text-white/80 hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E2B6C0]" />
                    <span>Or call 24/7 intake: {businessData.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE SANCTUARY MANIFESTO (Asymmetric Editorial Spread - NO CARDS) */}
      <section className="py-24 bg-[#FAF7F2] text-[#14293A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Editorial Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A1C36]/10 text-[#8A1C36] text-xs font-bold tracking-widest uppercase">
                <span>The Desert Sanctuary Standard</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] text-[#14293A]">
                Why Traditional Facilities Fail — And Why <span className="italic text-[#8A1C36]">Homes Heal</span>.
              </h2>

              <p className="text-base text-[#14293A]/80 leading-relaxed font-normal">
                Clinical institutions feel sterile, noisy, and regimented. We believe adults thrive best when they have a private room, an open kitchen, birds singing in the courtyard garden, and the freedom to live with self-respect.
              </p>

              <div className="border-l-2 border-[#8A1C36] pl-5 py-1 my-4">
                <p className="font-serif italic text-lg sm:text-xl text-[#14293A]/90 leading-snug">
                  &ldquo;A warm house, quiet evenings, and real neighbors. That is the simple dignity every adult deserves.&rdquo;
                </p>
                <span className="block text-xs font-semibold text-[#8A1C36] uppercase tracking-wider mt-2">
                  — Desert Oasis Housing Philosophy
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#8A1C36] hover:text-[#A02342] group cursor-pointer"
                >
                  <span>Read our full story & standards</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Side-by-Side Comparison Matrix (Editorial Format - NOT Generic Cards) */}
            <div className="lg:col-span-7 bg-[#EFE9DF] rounded-3xl p-6 sm:p-10 border border-[#14293A]/10 shadow-sm">
              <div className="flex items-center justify-between pb-6 border-b border-[#14293A]/15">
                <h3 className="font-serif text-xl sm:text-2xl text-[#14293A]">Comparison at a Glance</h3>
                <span className="text-xs uppercase tracking-widest text-[#8A1C36] font-bold">Dignity vs Institutional</span>
              </div>

              <div className="divide-y divide-[#14293A]/10 text-sm">
                <div className="py-4.5 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  <div className="sm:col-span-4 font-semibold text-[#14293A]">Living Environment</div>
                  <div className="sm:col-span-4 text-neutral-500 line-through text-xs sm:text-sm">Crowded multi-story clinical complex</div>
                  <div className="sm:col-span-4 text-[#8A1C36] font-semibold flex items-center gap-1.5 text-xs sm:text-sm">
                    <Check className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>Single-story residential home (5-6 beds)</span>
                  </div>
                </div>

                <div className="py-4.5 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  <div className="sm:col-span-4 font-semibold text-[#14293A]">Outdoor & Courtyards</div>
                  <div className="sm:col-span-4 text-neutral-500 line-through text-xs sm:text-sm">Concrete patios or gated smoking pens</div>
                  <div className="sm:col-span-4 text-[#8A1C36] font-semibold flex items-center gap-1.5 text-xs sm:text-sm">
                    <Check className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>Private pergolas, fruit trees & desert gardens</span>
                  </div>
                </div>

                <div className="py-4.5 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  <div className="sm:col-span-4 font-semibold text-[#14293A]">Dining Experience</div>
                  <div className="sm:col-span-4 text-neutral-500 line-through text-xs sm:text-sm">Cafeteria trays on fixed schedules</div>
                  <div className="sm:col-span-4 text-[#8A1C36] font-semibold flex items-center gap-1.5 text-xs sm:text-sm">
                    <Check className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>Fresh family-style meals & 24/7 kitchen access</span>
                  </div>
                </div>

                <div className="py-4.5 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  <div className="sm:col-span-4 font-semibold text-[#14293A]">Financial Transparency</div>
                  <div className="sm:col-span-4 text-neutral-500 line-through text-xs sm:text-sm">Hidden utility add-ons & surprise fees</div>
                  <div className="sm:col-span-4 text-[#8A1C36] font-semibold flex items-center gap-1.5 text-xs sm:text-sm">
                    <Check className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>All-inclusive: Power, Wi-Fi, laundry & supplies</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#14293A]/15 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-[#14293A]/70">Valley-wide homes in Mesa, Phoenix & Glendale</span>
                <button
                  type="button"
                  onClick={() => onNavigate('living')}
                  className="px-5 py-2.5 rounded-xl bg-[#14293A] text-white text-xs font-semibold hover:bg-[#8A1C36] transition-colors cursor-pointer"
                >
                  Explore Living Pathways
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CURATED RESIDENCES SPOTLIGHT (Architectural Interactive Showcase - NO CARDS) */}
      <section className="py-24 bg-[#14293A] text-white relative overflow-hidden">
        {/* Subtle Desert Background Grain */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/15 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A1C36]/30 border border-[#8A1C36]/50 text-[#F7E8EB] text-xs font-bold tracking-widest uppercase mb-3">
                <span>Architectural Showcase</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white">
                Our Signature Residential Locations
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('residences')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer self-start md:self-auto"
            >
              <span>View All 3 Residences & Specs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Master Split Showcase Viewport */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Interactive Navigator */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                {businessData.homes.map((home, idx) => {
                  const isActive = idx === activeResidenceIndex;
                  return (
                    <button
                      key={home.id}
                      type="button"
                      onClick={() => setActiveResidenceIndex(idx)}
                      className={`w-full text-left p-5 rounded-2xl transition-all cursor-pointer border ${
                        isActive
                          ? 'bg-gradient-to-r from-[#8A1C36] to-[#A02342] text-white border-transparent shadow-xl translate-x-1'
                          : 'bg-white/5 hover:bg-white/10 text-white/80 border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs uppercase tracking-wider font-semibold ${isActive ? 'text-white/90' : 'text-[#E2B6C0]'}`}>
                          {home.area}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                          home.status === 'Move-in Ready'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        }`}>
                          {home.status}
                        </span>
                      </div>
                      <h4 className="font-serif text-xl sm:text-2xl text-white mb-1">{home.name}</h4>
                      <p className={`text-xs line-clamp-1 ${isActive ? 'text-white/90' : 'text-white/60'}`}>
                        {home.neighborhoodHighlight}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Quick Actions for Selected Home */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-white/60">Capacity & Scale</div>
                    <div className="text-sm font-semibold text-white">{activeHome.totalBeds}</div>
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Location</div>
                    <div className="text-sm font-semibold text-white">{activeHome.city}</div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenIntake('availability', activeHome.name)}
                    className="flex-1 py-3 rounded-xl bg-white text-[#14293A] font-bold text-xs sm:text-sm hover:bg-[#FAF8F5] transition-colors cursor-pointer text-center"
                  >
                    Check Bed in {activeHome.name.replace('The ', '')}
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('residences')}
                    className="px-4 py-3 rounded-xl bg-[#8A1C36] text-white text-xs font-semibold hover:brightness-110 transition-colors cursor-pointer"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>

            {/* Right Large Architectural Viewport with Preview Lightbox Button */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative rounded-3xl overflow-hidden border border-white/20 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full min-h-[360px] group shadow-2xl">
                <img
                  src={activeHome.image}
                  alt={activeHome.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Ambient Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-black/20 to-transparent" />

                {/* Floating Preview Lightbox Button */}
                <button
                  type="button"
                  onClick={() => onPreviewPhoto(activeHome.image, activeHome.name, activeHome.city)}
                  className="absolute top-5 right-5 z-10 px-4 py-2 rounded-xl bg-black/60 hover:bg-[#8A1C36] text-white text-xs font-semibold backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Enlarge Photo</span>
                </button>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {activeHome.roomTypes.map((type, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                        {type}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-white">
                    {activeHome.name} &mdash; <span className="font-sans text-lg font-light text-white/80">{activeHome.city}</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-white/80 max-w-xl font-light">
                    {activeHome.features.join(" • ")}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. A DAY OF BELONGING (Visual Rhythm Horizontal Story - NO CARDS) */}
      <section className="py-24 bg-[#FAF7F2] text-[#14293A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8A1C36]">Daily Life at Desert Oasis</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#14293A]">
              A Rhythm Centered on Peace & Purpose
            </h2>
            <p className="text-sm sm:text-base text-[#14293A]/80 leading-relaxed font-light">
              Residents are not held to rigid institutional schedules. Instead, each day unfolds naturally with warmth, good food, outdoor sunshine, and respect.
            </p>
          </div>

          {/* Staggered Horizontal Narrative Ribbon */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t-2 border-[#8A1C36] pt-6 space-y-3">
              <span className="font-serif text-2xl text-[#8A1C36] font-normal">08:00 AM</span>
              <h4 className="font-serif text-xl text-[#14293A]">Morning Light & Breakfast</h4>
              <p className="text-xs sm:text-sm text-[#14293A]/75 leading-relaxed font-light">
                Fresh coffee brewing in the open kitchen, nutritious breakfast options, and quiet time on the shaded patio.
              </p>
            </div>

            <div className="border-t-2 border-[#14293A]/30 pt-6 space-y-3">
              <span className="font-serif text-2xl text-[#14293A] font-normal">11:30 AM</span>
              <h4 className="font-serif text-xl text-[#14293A]">Courtyard & Personal Time</h4>
              <p className="text-xs sm:text-sm text-[#14293A]/75 leading-relaxed font-light">
                Residents tend desert plants, read in the garden pergolas, or connect with visiting wellness coordinators.
              </p>
            </div>

            <div className="border-t-2 border-[#14293A]/30 pt-6 space-y-3">
              <span className="font-serif text-2xl text-[#14293A] font-normal">02:30 PM</span>
              <h4 className="font-serif text-xl text-[#14293A]">Community & Shuttles</h4>
              <p className="text-xs sm:text-sm text-[#14293A]/75 leading-relaxed font-light">
                Grocery runs, healthcare clinic appointments, or group visits to local parks and Maricopa library events.
              </p>
            </div>

            <div className="border-t-2 border-[#8A1C36] pt-6 space-y-3">
              <span className="font-serif text-2xl text-[#8A1C36] font-normal">06:30 PM</span>
              <h4 className="font-serif text-xl text-[#14293A]">Family-Style Dinner</h4>
              <p className="text-xs sm:text-sm text-[#14293A]/75 leading-relaxed font-light">
                Wholesome dinner around the handcrafted dining table, followed by movies, board games, or calm evening rest.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={() => onNavigate('amenities')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#14293A] hover:bg-[#8A1C36] text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer shadow-md"
            >
              <span>Explore Life & Amenities (Menu, Courtyards & Photos)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 5. VOICES OF BELONGING (Minimalist Quote Ticker - NO CARDS) */}
      <section className="py-20 bg-[#EFE9DF] text-[#14293A] border-y border-[#14293A]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-[#8A1C36]/10 text-[#8A1C36] mx-auto flex items-center justify-center">
            <Quote className="w-6 h-6" />
          </div>

          <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-4xl leading-snug text-[#14293A]">
            &ldquo;{activeTestimonial.quote}&rdquo;
          </blockquote>

          <div className="space-y-1">
            <div className="font-semibold text-base text-[#14293A]">{activeTestimonial.author}</div>
            <div className="text-xs text-[#8A1C36] font-medium tracking-wide uppercase">
              {activeTestimonial.role} &middot; {activeTestimonial.city}
            </div>
          </div>

          {/* Testimonial Nav Dots */}
          <div className="flex items-center justify-center gap-2 pt-4">
            {businessData.testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTestimonialIndex(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === activeTestimonialIndex
                    ? 'w-8 bg-[#8A1C36]'
                    : 'w-2.5 bg-[#14293A]/25 hover:bg-[#14293A]/50'
                }`}
                aria-label={`Testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONVERSION BANNER (Warm Sunset Sanctuary) */}
      <section className="py-20 bg-gradient-to-r from-[#14293A] via-[#1D3A52] to-[#14293A] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#E2B6C0] text-xs font-semibold">
            <span>Fast Placement Response Guarantee</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
            Ready to Experience True Residential Sanctuary?
          </h2>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Schedule an in-person walkthrough or submit an immediate bed inquiry. Our compassionate Valley team is available 7 days a week.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onOpenIntake('availability')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#8A1C36] hover:bg-[#A02342] text-white font-bold text-sm sm:text-base shadow-xl transition-all cursor-pointer"
            >
              Check Immediate Bed Openings
            </button>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/30 backdrop-blur-md transition-all cursor-pointer"
            >
              Schedule a Guided Campus Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
