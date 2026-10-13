import React, { useState } from 'react';
import { Coffee, Utensils, Bus, Moon, Sparkles, CheckCircle2 } from 'lucide-react';

export const DayInTheLifeWidget: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const moments = [
    {
      time: '8:00 AM',
      period: 'Morning Calm',
      icon: Coffee,
      title: 'Coffee on the Shaded Patio',
      description: 'Wake up at your own pace. Brew coffee in the modern kitchen, sit in the landscaped courtyard with gentle morning mountain breezes, and enjoy quiet reflection.',
      highlight: 'Respectful quiet hours protect your sleep and peace.',
    },
    {
      time: '12:30 PM',
      period: 'Midday Comfort',
      icon: Utensils,
      title: 'Homelike Meal Preparation',
      description: 'Cook lunch using your dedicated refrigerator and pantry shelf space. Enjoy meals at the solid wood dining table or relax in the communal air-conditioned living lounge.',
      highlight: 'Fully equipped kitchens with microwave, oven, and dual refrigerators.',
    },
    {
      time: '3:30 PM',
      period: 'Afternoon Autonomy',
      icon: Bus,
      title: 'Community Independence & Transit',
      description: 'Walk to nearby grocery stores, visit healthcare appointments via nearby Valley Metro lines, or connect with community friends. You maintain full autonomy over your schedule.',
      highlight: 'Convenient suburban locations close to shopping and essential transit.',
    },
    {
      time: '8:00 PM',
      period: 'Nighttime Sanctuary',
      icon: Moon,
      title: 'Restful Sleep in Your Private Quarters',
      description: 'Return to a safe, keyless-secured residence. Relax in your clean, air-conditioned bedroom with high-speed Wi-Fi and know that an on-call coordinator is always reachable.',
      highlight: '100% drug- and alcohol-free community standard for total security.',
    },
  ];

  return (
    <div className="rounded-3xl bg-white border border-[#8A1C36]/25 p-7 sm:p-10 shadow-xl my-14">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#14293A]/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A1C36]/10 text-[#8A1C36] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Daily Living Experience</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#14293A]">
            A Day at Desert Oasis Housing
          </h3>
          <p className="text-xs sm:text-sm text-[#14293A]/75 mt-1">
            Experience the balance of personal independence, respectful companionship, and predictable comfort.
          </p>
        </div>

        <span className="text-xs font-bold text-[#8A1C36] uppercase tracking-wider">
          Click any moment to explore:
        </span>
      </div>

      {/* Step Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {moments.map((m, idx) => {
          const Icon = m.icon;
          const isActive = activeStep === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#14293A] text-white border-[#8A1C36] shadow-lg scale-[1.02]'
                  : 'bg-[#FAF8F5] text-[#14293A] border-[#14293A]/10 hover:border-[#8A1C36]/40'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className={`text-[11px] font-bold uppercase tracking-wider ${isActive ? 'text-[#E2B6C0]' : 'text-[#8A1C36]'}`}>
                  {m.time}
                </span>
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#8A1C36]'}`} />
              </div>
              <p className="text-xs sm:text-sm font-semibold truncate">{m.period}</p>
            </button>
          );
        })}
      </div>

      {/* Active Moment Display Card */}
      <div className="rounded-2xl bg-[#FAF8F5] border border-[#8A1C36]/20 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#8A1C36] text-white">
              {moments[activeStep].time} &middot; {moments[activeStep].period}
            </span>
          </div>
          <h4 className="font-serif text-2xl text-[#14293A] font-medium">
            {moments[activeStep].title}
          </h4>
          <p className="text-sm text-[#14293A]/85 leading-relaxed font-light">
            {moments[activeStep].description}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#8A1C36]/25 shadow-sm shrink-0 md:max-w-xs">
          <div className="flex items-start gap-2.5 text-xs text-[#14293A]/85">
            <CheckCircle2 className="w-4 h-4 text-[#8A1C36] shrink-0 mt-0.5" />
            <span>{moments[activeStep].highlight}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
