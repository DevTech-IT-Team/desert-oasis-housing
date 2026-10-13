import React, { useState } from 'react';
import { 
  Sun, 
  Sparkles, 
  Eye, 
  Maximize2
} from 'lucide-react';

interface AmenitiesPageProps {
  onPreviewPhoto: (image: string, title: string, subtitle: string) => void;
  onOpenIntake: (type?: 'availability' | 'referral', home?: string) => void;
}

export const AmenitiesPage: React.FC<AmenitiesPageProps> = ({
  onPreviewPhoto,
  onOpenIntake,
}) => {
  const [activeMenuDay, setActiveMenuDay] = useState<'monday' | 'wednesday' | 'saturday'>('monday');
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'rooms' | 'dining' | 'outdoor'>('all');

  const galleryItems = [
    {
      src: '/images/desert_courtyard.jpg',
      category: 'outdoor',
      title: 'Desert Courtyard Pergola',
      subtitle: 'Shaded stone patio with water fountain & mountain views',
    },
    {
      src: '/images/chef_dining.jpg',
      category: 'dining',
      title: 'Family-Style Dining Room',
      subtitle: 'Nutritious communal meals served daily',
    },
    {
      src: '/images/bedroom_private.jpg',
      category: 'rooms',
      title: 'Sunlit Private Bedroom Suite',
      subtitle: 'Plush bedding, natural light, and keyed privacy lock',
    },
    {
      src: '/images/kitchen_dining.jpg',
      category: 'dining',
      title: 'Open-Concept Chef Kitchen',
      subtitle: 'Granite counters & 24/7 access to fresh snacks',
    },
    {
      src: '/images/residence_central.jpg',
      category: 'outdoor',
      title: 'The Arcadia Vista Grounds',
      subtitle: 'Camelback corridor with palm landscaping',
    },
    {
      src: '/images/residence_west_valley.jpg',
      category: 'outdoor',
      title: 'Citrus Grove Desert Haven',
      subtitle: 'Single-story modern architecture in Glendale',
    },
  ];

  const filteredGallery = galleryItems.filter(item => {
    if (galleryFilter === 'all') return true;
    return item.category === galleryFilter;
  });

  return (
    <div className="animate-fade-in bg-[#FAF7F2] text-[#14293A]">
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-32 pb-16 bg-[#14293A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#14293A]/90 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8A1C36]/30 border border-[#8A1C36]/50 text-[#F7E8EB] text-xs font-bold tracking-widest uppercase">
              <span>Life & Wellness</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.1]">
              Everyday Dignity. <br />
              <span className="italic text-[#E2B6C0] font-serif">A Sanctuary Designed to Thrive</span>.
            </h1>

            <p className="text-base sm:text-lg text-white/85 max-w-2xl font-light leading-relaxed">
              Experience life outside institutional walls. From fresh, nourishing family meals to quiet courtyard gardens under the Arizona sun, every detail of Desert Oasis Housing is crafted for everyday peace and personal restoration.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CULINARY EXCELLENCE & FAMILY-STYLE DINING (Editorial Split Spread - NO CARDS) */}
      <section className="py-20 lg:py-24 border-b border-[#14293A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative & Interactive Weekly Menu */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8A1C36]">Culinary Philosophy</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#14293A]">
                Nourishing Meals, Shared Around a Real Table
              </h2>
              <p className="text-sm sm:text-base text-[#14293A]/80 leading-relaxed font-light">
                No plastic trays or cold cafeteria lines. Residents enjoy balanced, appetizing home-cooked meals featuring fresh produce, lean proteins, and seasonal Southwest touches.
              </p>

              {/* Interactive Day Switcher */}
              <div className="p-5 rounded-2xl bg-white border border-[#14293A]/10 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#14293A]/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#14293A]">Sample Daily Menu</span>
                  <div className="flex items-center gap-1">
                    {(['monday', 'wednesday', 'saturday'] as const).map((day) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setActiveMenuDay(day)}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer ${
                          activeMenuDay === day 
                            ? 'bg-[#8A1C36] text-white' 
                            : 'text-[#14293A]/70 hover:bg-[#FAF7F2]'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                {activeMenuDay === 'monday' && (
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div>
                      <span className="font-semibold text-[#8A1C36] block">Breakfast</span>
                      <span className="text-[#14293A]/80">Fresh berry oatmeal, farm eggs, whole-wheat toast & Arabica coffee</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#8A1C36] block">Lunch</span>
                      <span className="text-[#14293A]/80">Roasted turkey & avocado wrap with Southwest black bean salad</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#8A1C36] block">Family Dinner</span>
                      <span className="text-[#14293A]/80">Herb-roasted chicken breast, steamed asparagus, sweet potato mash</span>
                    </div>
                  </div>
                )}

                {activeMenuDay === 'wednesday' && (
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div>
                      <span className="font-semibold text-[#8A1C36] block">Breakfast</span>
                      <span className="text-[#14293A]/80">Greek yogurt parfait with desert wildflower honey & sliced almonds</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#8A1C36] block">Lunch</span>
                      <span className="text-[#14293A]/80">Warm Mediterranean chicken grain bowl with crisp garden cucumbers</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#8A1C36] block">Family Dinner</span>
                      <span className="text-[#14293A]/80">Slow-braised lean pot roast with glazed carrots and dinner rolls</span>
                    </div>
                  </div>
                )}

                {activeMenuDay === 'saturday' && (
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div>
                      <span className="font-semibold text-[#8A1C36] block">Breakfast</span>
                      <span className="text-[#14293A]/80">Southwest breakfast scramble with mild peppers, cheese & fresh fruit</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#8A1C36] block">Lunch</span>
                      <span className="text-[#14293A]/80">Grilled panini sandwich with chilled Arizona melon slices</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#8A1C36] block">Family Dinner</span>
                      <span className="text-[#14293A]/80">Chef grilled salmon fillet, wild rice pilaf & sautéed zucchini</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Large Dining Image Viewport */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden aspect-[16/10] shadow-xl border border-[#14293A]/10 group">
                <img
                  src="/images/chef_dining.jpg"
                  alt="Family-style dining at Desert Oasis Housing"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <button
                  type="button"
                  onClick={() => onPreviewPhoto('/images/chef_dining.jpg', 'Family-Style Dining Room', 'Fresh communal meals served daily')}
                  className="absolute top-4 right-4 z-10 px-3.5 py-2 rounded-xl bg-black/60 hover:bg-[#8A1C36] text-white text-xs font-semibold backdrop-blur-md transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge</span>
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/30 to-transparent text-white">
                  <span className="text-xs font-semibold text-[#E2B6C0] uppercase tracking-wider block">Kitchen Open 24/7</span>
                  <span className="font-serif text-xl sm:text-2xl">Always Stocked with Fresh Fruits & Healthy Snacks</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. DESERT COURTYARD SANCTUARY (Atmospheric Landscape Spread - NO CARDS) */}
      <section className="py-20 lg:py-24 bg-[#EFE9DF] border-b border-[#14293A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Large Courtyard Image Viewport */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden aspect-[16/10] shadow-xl border border-[#14293A]/10 group">
                <img
                  src="/images/desert_courtyard.jpg"
                  alt="Desert Courtyard Garden at Desert Oasis Housing"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <button
                  type="button"
                  onClick={() => onPreviewPhoto('/images/desert_courtyard.jpg', 'Desert Courtyard Garden', 'Shaded pergola with fountain and bougainvillea')}
                  className="absolute top-4 right-4 z-10 px-3.5 py-2 rounded-xl bg-black/60 hover:bg-[#8A1C36] text-white text-xs font-semibold backdrop-blur-md transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge</span>
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/30 to-transparent text-white">
                  <span className="text-xs font-semibold text-[#E2B6C0] uppercase tracking-wider block">Outdoor Wellness</span>
                  <span className="font-serif text-xl sm:text-2xl">Pergola Shade, Bougainvillea & Stone Fountain</span>
                </div>
              </div>
            </div>

            {/* Right Narrative Copy */}
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8A1C36]">Outdoor Living</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#14293A]">
                The Healing Power of Arizona Sunshine & Quiet Gardens
              </h2>
              <p className="text-sm sm:text-base text-[#14293A]/80 leading-relaxed font-light">
                Our courtyards are true private havens. Residents read books under the shaded wooden pergolas, listen to the peaceful fountain water, and enjoy golden hour sunsets against the backdrop of Phoenix mountain silhouettes.
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-[#8A1C36]/10 text-[#8A1C36] shrink-0 mt-0.5">
                    <Sun className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-[#14293A]">Shaded Pergola Lounges:</strong> Deep shade seating with outdoor ceiling fans for comfortable year-round enjoyment.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-[#8A1C36]/10 text-[#8A1C36] shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-[#14293A]">Evening Fire Bowls:</strong> Safe, tranquil gas fire features for peaceful night conversations and stargazing.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE SANCTUARY PHOTO GALLERY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#14293A]/10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8A1C36]">Visual Tour</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#14293A]">
                Sanctuary Photo Gallery
              </h2>
            </div>

            {/* Gallery Category Filter Pills */}
            <div className="flex items-center gap-2">
              {(['all', 'rooms', 'dining', 'outdoor'] as const).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setGalleryFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold capitalize transition-all cursor-pointer ${
                    galleryFilter === filter 
                      ? 'bg-[#14293A] text-white shadow-sm' 
                      : 'bg-white text-[#14293A]/70 hover:bg-[#FAF7F2] border border-[#14293A]/10'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onPreviewPhoto(item.src, item.title, item.subtitle)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900 cursor-pointer shadow-md hover:shadow-xl transition-all"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h4 className="font-serif text-lg text-white group-hover:text-[#E2B6C0] transition-colors">{item.title}</h4>
                  <p className="text-xs text-white/75 font-light line-clamp-1">{item.subtitle}</p>
                </div>

                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={() => onOpenIntake('availability')}
              className="px-8 py-3.5 rounded-xl bg-[#8A1C36] hover:bg-[#A02342] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              Check Availability for Furnished Rooms
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
