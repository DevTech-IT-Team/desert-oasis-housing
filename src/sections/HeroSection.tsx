import React, { useState } from 'react';
import { CalendarCheck, ShieldCheck, HeartHandshake, ArrowRight, Phone, MapPin, Bed, Sparkles } from 'lucide-react';
import { businessData } from '../data/businessConfig';

interface HeroSectionProps {
  onOpenIntake: (type?: 'availability' | 'referral', home?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenIntake }) => {
  const [selectedArea, setSelectedArea] = useState('East Valley (Mesa / Gilbert)');
  const [selectedRoom, setSelectedRoom] = useState('Private Room');

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenIntake('availability', selectedArea);
  };

  return (
    <section id="hero" className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Residential Image with Deep Navy Gradient Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_residence.jpg"
          alt="Warm, sunlit Southwestern living room at Desert Oasis Housing"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered overlays: brand navy tint + ambient burgundy lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#14293A]/95 via-[#14293A]/88 to-[#14293A]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14293A] via-transparent to-black/35" />
        {/* Ambient radial glow */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#8A1C36]/20 blur-[140px] rounded-full pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines, Credo & Direct CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium tracking-wide mb-6 shadow-lg">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-300 font-semibold">Active Bed Openings</span>
              <span className="text-white/40">•</span>
              <span className="text-white/90">Greater Phoenix & Maricopa County</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] text-white font-normal leading-[1.1] tracking-tight mb-6">
              Dignified Living. <br />
              <span className="italic text-[#E2B6C0] font-serif">A True Sanctuary</span> to Call Home.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl font-light mb-8">
              Welcome to <strong className="font-medium text-white">Desert Oasis Housing</strong>. We provide warm, high-quality residential homes and supportive independent living for adults seeking peace, stability, and community in Phoenix, Mesa, and Glendale.
            </p>

            {/* Direct CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-center lg:justify-start mb-10">
              <button
                type="button"
                onClick={() => onOpenIntake('availability')}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-[#8A1C36] via-[#A02342] to-[#8A1C36] text-white font-bold text-base shadow-xl shadow-black/30 hover:shadow-2xl hover:brightness-110 active:scale-98 transition-all cursor-pointer group"
              >
                <CalendarCheck className="w-5 h-5 text-white" />
                <span>Check Bed Availability</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#referrals"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/25 backdrop-blur-md transition-all shadow-sm"
              >
                <HeartHandshake className="w-5 h-5 text-[#E2B6C0]" />
                <span>Make Agency Referral</span>
              </a>

              <a
                href={businessData.phone}
                className="inline-flex items-center justify-center gap-2 px-4 py-4 rounded-xl text-white/80 hover:text-[#E2B6C0] text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E2B6C0]" />
                <span>{businessData.phoneDisplay}</span>
              </a>
            </div>

            {/* Trust Pill Strip */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
                  <ShieldCheck className="w-4 h-4 text-[#E2B6C0]" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-white/60 font-semibold">Independent Living</p>
                  <p className="text-xs sm:text-sm font-medium text-white">Safe & Drug-Free</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
                  <span className="font-serif text-[#E2B6C0] text-base font-bold">100%</span>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-white/60 font-semibold">Inclusive Monthly</p>
                  <p className="text-xs sm:text-sm font-medium text-white">All Utilities & Wi-Fi</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
                  <span className="font-serif text-[#E2B6C0] text-base font-bold">24h</span>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-white/60 font-semibold">Intake Turnaround</p>
                  <p className="text-xs sm:text-sm font-medium text-white">Hospital Discharges</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Interactive Fast Bed Finder Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl p-7 sm:p-9 text-[#14293A] relative">
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-[#14293A]/10">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8A1C36]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Instant Locator</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#14293A] mt-0.5">
                    Find Available Housing
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#8A1C36]/10 text-[#8A1C36] text-[11px] font-bold">
                  Phoenix Metro
                </span>
              </div>

              <form onSubmit={handleHeroSearch} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#14293A] uppercase tracking-wider mb-1.5">
                    Preferred Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A1C36]" />
                    <select
                      value={selectedArea}
                      onChange={(e) => setSelectedArea(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#14293A]/15 text-[#14293A] text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C36] transition-all cursor-pointer font-medium"
                    >
                      <option value="East Valley (Mesa / Gilbert)">East Valley &middot; The Saguaro House</option>
                      <option value="Central Phoenix (Arcadia Area)">Central Phoenix &middot; The Arcadia Vista House</option>
                      <option value="West Valley (Glendale / Peoria)">West Valley &middot; The Citrus Grove House</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#14293A] uppercase tracking-wider mb-1.5">
                    Room Type
                  </label>
                  <div className="relative">
                    <Bed className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A1C36]" />
                    <select
                      value={selectedRoom}
                      onChange={(e) => setSelectedRoom(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#14293A]/15 text-[#14293A] text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C36] transition-all cursor-pointer font-medium"
                    >
                      <option value="Private Room">Private Master / Single Room</option>
                      <option value="Semi-Private Room">Semi-Private (Shared 2-Bed)</option>
                      <option value="Either Option">Any Open Bed (Fastest Move-In)</option>
                    </select>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#8A1C36]/5 border border-[#8A1C36]/20">
                  <div className="flex items-center justify-between text-xs text-[#14293A]/80 font-medium">
                    <span>Includes: Private bed, A/C, Wi-Fi, laundry</span>
                    <span className="text-[#8A1C36] font-bold">100% Inclusive</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#8A1C36] hover:bg-[#A02342] text-white font-bold text-sm tracking-wide shadow-lg flex items-center justify-center gap-2.5 transition-all cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Match Available Bed Now</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
