import React from 'react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenIntake: (type?: 'availability' | 'referral', home?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenIntake }) => {
  return (
    <div className="animate-fade-in bg-[#FAF7F2] text-[#14293A]">
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-32 pb-16 bg-[#14293A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#14293A]/90 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8A1C36]/30 border border-[#8A1C36]/50 text-[#F7E8EB] text-xs font-bold tracking-widest uppercase">
              <span>Our Story & Mission</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.1]">
              Built on Compassion. <br />
              <span className="italic text-[#E2B6C0] font-serif">Not Corporate Real Estate</span>.
            </h1>

            <p className="text-base sm:text-lg text-white/85 max-w-2xl font-light leading-relaxed">
              Desert Oasis Housing was founded on a simple, uncompromising conviction: every adult deserving of care and stability deserves to live in a clean, beautiful residential home with warmth, respect, and autonomy.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FOUNDING STORY (Asymmetric Magazine Spread - NO CARDS) */}
      <section className="py-20 lg:py-24 border-b border-[#14293A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Story Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8A1C36]">Our Origins</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#14293A] leading-tight">
                Restoring the Feeling of &ldquo;Coming Home&rdquo;
              </h2>
              
              <p className="text-sm sm:text-base text-[#14293A]/80 leading-relaxed font-light">
                Too often, independent adult housing and post-discharge boarding in the Valley resembles sterile institutional warehouses: crowded hallways, noisy dorms, and an atmosphere stripped of human warmth.
              </p>

              <p className="text-sm sm:text-base text-[#14293A]/80 leading-relaxed font-light">
                We chose a different path. We acquire and maintain single-story residences situated in quiet, welcoming neighborhoods in Mesa, Central Phoenix, and Glendale. Each home houses only 5 to 6 residents, allowing for true quiet, privacy, and meaningful connection.
              </p>

              <div className="p-6 rounded-2xl bg-[#EFE9DF] border border-[#14293A]/10 space-y-2">
                <span className="font-serif text-lg text-[#14293A] block">The Desert Oasis Manifesto</span>
                <p className="text-xs text-[#14293A]/80 font-light italic">
                  &ldquo;A clean bedroom door you can close and lock. A sunny courtyard where you can drink your coffee in peace. Good neighbors and honest support. This isn&rsquo;t luxury—it is fundamental human dignity.&rdquo;
                </p>
              </div>
            </div>

            {/* Right Large Image Spread */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#14293A]/10 aspect-[4/3] group">
                <img
                  src="/images/about_home.jpg"
                  alt="A peaceful residence courtyard at Desert Oasis Housing"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-xs font-semibold text-[#E2B6C0] uppercase tracking-wider block">Valley of the Sun</span>
                  <span className="font-serif text-xl sm:text-2xl">Single-Story Homes Designed for Everyday Peace</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THE 4 PILLARS OF DIGNITY (Editorial Flow - NO CARDS) */}
      <section className="py-20 bg-[#EFE9DF] border-b border-[#14293A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8A1C36]">Our Operating Principles</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#14293A]">
              The Four Pillars of Dignified Living
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#14293A]/10 space-y-3 shadow-sm">
              <span className="font-serif text-3xl text-[#8A1C36] block">01</span>
              <h3 className="font-serif text-2xl text-[#14293A]">Uncompromised Autonomy</h3>
              <p className="text-xs sm:text-sm text-[#14293A]/80 leading-relaxed font-light">
                Residents are autonomous adults. You keep your own schedule, maintain your own routines, and enjoy keyed privacy for your bedroom while participating in community when you choose.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#14293A]/10 space-y-3 shadow-sm">
              <span className="font-serif text-3xl text-[#8A1C36] block">02</span>
              <h3 className="font-serif text-2xl text-[#14293A]">Warm Household Culture</h3>
              <p className="text-xs sm:text-sm text-[#14293A]/80 leading-relaxed font-light">
                We carefully interview residents and set clear, respectful house guidelines. Cleanliness, quiet hours, and mutual courtesy are protected so everyone feels at peace.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#14293A]/10 space-y-3 shadow-sm">
              <span className="font-serif text-3xl text-[#8A1C36] block">03</span>
              <h3 className="font-serif text-2xl text-[#14293A]">Transparent All-Inclusive Rates</h3>
              <p className="text-xs sm:text-sm text-[#14293A]/80 leading-relaxed font-light">
                No surprises. All utilities (water, power, high-efficiency A/C), gigabit Wi-Fi, laundry facilities, and common supplies are bundled into one predictable monthly rent.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#14293A]/10 space-y-3 shadow-sm">
              <span className="font-serif text-3xl text-[#8A1C36] block">04</span>
              <h3 className="font-serif text-2xl text-[#14293A]">24/7 Valley Coordination</h3>
              <p className="text-xs sm:text-sm text-[#14293A]/80 leading-relaxed font-light">
                Our house managers and intake coordinators are always reachable. From maintenance calls to medical appointment scheduling assistance, help is never out of reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO EXPLORE OR VISIT */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#14293A]">
            Come Walk Through a Residence
          </h2>
          <p className="text-sm text-[#14293A]/80 font-light leading-relaxed">
            Words only tell part of the story. Schedule a tour to feel the serene atmosphere, speak with our coordinators, and see the private suites firsthand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onOpenIntake('availability')}
              className="px-8 py-3.5 rounded-xl bg-[#8A1C36] hover:bg-[#A02342] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              Check Bed Availability
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-xl bg-[#14293A] text-white font-semibold text-xs sm:text-sm hover:bg-[#1D3A52] transition-colors cursor-pointer"
            >
              Contact &amp; Schedule Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
