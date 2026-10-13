import React, { useState } from 'react';
import { Bed, LayoutGrid, Sparkles, Zap, Wifi, Utensils, Shirt, Key, PhoneCall, HeartHandshake, Eye } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { SavingsCalculator } from '../components/SavingsCalculator';
import { ValueComparisonWidget } from '../components/ValueComparisonWidget';
import { businessData } from '../data/businessConfig';

interface AmenitiesSectionProps {
  onPreviewPhoto?: (image: string, title: string, subtitle: string) => void;
  onOpenIntake?: (type?: 'availability' | 'referral', home?: string) => void;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ onPreviewPhoto, onOpenIntake }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Room & Accommodations', 'Utilities & Daily Living', 'Safety & Coordination'];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bed': return <Bed className="w-5 h-5 text-[#E2B6C0]" />;
      case 'LayoutGrid': return <LayoutGrid className="w-5 h-5 text-[#E2B6C0]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#E2B6C0]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#E2B6C0]" />;
      case 'Wifi': return <Wifi className="w-5 h-5 text-[#E2B6C0]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#E2B6C0]" />;
      case 'Shirt': return <Shirt className="w-5 h-5 text-[#E2B6C0]" />;
      case 'Key': return <Key className="w-5 h-5 text-[#E2B6C0]" />;
      case 'PhoneCall': return <PhoneCall className="w-5 h-5 text-[#E2B6C0]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-[#E2B6C0]" />;
      default: return <Sparkles className="w-5 h-5 text-[#E2B6C0]" />;
    }
  };

  const filteredCategories = businessData.amenities.filter((cat) => {
    if (activeCategory === 'All') return true;
    return cat.category === activeCategory;
  });

  return (
    <section id="amenities" className="py-20 lg:py-28 bg-[#F4EFEB]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Comfort & Inclusions"
          title="Designed for Everyday Comfort & Dignity"
          subtitle="Everything you need to feel settled from your very first day—fully furnished rooms, all utilities included, and homelike shared spaces."
        />

        {/* Bento Grid Visual Showcases */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Bento Card 1: Private Bedrooms */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl border border-[#8A1C36]/30 aspect-[16/10] group">
            <img
              src="/images/bedroom_private.jpg"
              alt="Private bedroom with fresh linens and natural light"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14293A]/90 via-[#14293A]/30 to-transparent" />
            
            {onPreviewPhoto && (
              <button
                type="button"
                onClick={() => onPreviewPhoto('/images/bedroom_private.jpg', 'Furnished Private Bedroom', 'Desert Oasis Residential Suites')}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#8A1C36] transition-colors backdrop-blur-md opacity-0 group-hover:opacity-100"
                aria-label="Enlarge Bedroom Image"
              >
                <Eye className="w-4 h-4" />
              </button>
            )}

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase tracking-widest text-[#E2B6C0] font-semibold">Move-In Ready</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal mt-1">Peaceful, Move-In Ready Bedrooms</h3>
              <p className="text-xs sm:text-sm text-white/85 mt-1.5 max-w-lg leading-relaxed">
                Comfortable sturdy beds, clean linens, dressers, nightstands, and private lockable spaces ensuring quiet autonomy.
              </p>
            </div>
          </div>

          {/* Bento Card 2: Modern Shared Kitchen & Dining */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl border border-[#8A1C36]/30 aspect-[16/10] lg:aspect-auto group">
            <img
              src="/images/kitchen_dining.jpg"
              alt="Modern community kitchen and dining area"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14293A]/90 via-[#14293A]/30 to-transparent" />

            {onPreviewPhoto && (
              <button
                type="button"
                onClick={() => onPreviewPhoto('/images/kitchen_dining.jpg', 'Modern Community Kitchen & Dining', 'Desert Oasis Community Living')}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#8A1C36] transition-colors backdrop-blur-md opacity-0 group-hover:opacity-100"
                aria-label="Enlarge Kitchen Image"
              >
                <Eye className="w-4 h-4" />
              </button>
            )}

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase tracking-widest text-[#E2B6C0] font-semibold">Shared Common Areas</span>
              <h3 className="font-serif text-2xl font-normal mt-1">Chef-Style Kitchen & Dining</h3>
              <p className="text-xs sm:text-sm text-white/85 mt-1.5 leading-relaxed">
                Dual refrigerators, full cookware, coffee bars, and open living spaces for genuine homelike meals.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Savings Calculator */}
        <SavingsCalculator onCheckBeds={() => onOpenIntake && onOpenIntake('availability')} />

        {/* Amenity Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#14293A] text-white shadow-md'
                  : 'bg-white text-[#14293A]/80 hover:bg-[#FAF8F5] border border-[#14293A]/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categorized Amenities List */}
        <div className="space-y-12 mb-16">
          {filteredCategories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-6">
              <h3 className="font-serif text-2xl text-[#14293A] flex items-center gap-3">
                <span>{category.category}</span>
                <span className="flex-1 h-[1px] bg-[#8A1C36]/25" />
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-6 rounded-2xl bg-white border border-[#8A1C36]/20 hover:border-[#8A1C36] hover:-translate-y-1 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-start"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#14293A] flex items-center justify-center mb-4 shadow-sm">
                      {getIcon(item.icon)}
                    </div>
                    <h4 className="font-serif text-lg font-semibold text-[#14293A] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#14293A]/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Value Comparison Table */}
        <ValueComparisonWidget />
      </div>
    </section>
  );
};
