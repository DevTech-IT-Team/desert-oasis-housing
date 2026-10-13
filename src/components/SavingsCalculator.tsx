import React, { useState } from 'react';
import { Calculator, Check, Zap, Wifi, Droplets, Shirt, Bed, CalendarCheck } from 'lucide-react';

interface SavingsCalculatorProps {
  onCheckBeds: () => void;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ onCheckBeds }) => {
  const [roomType, setRoomType] = useState<'private' | 'shared'>('private');

  const utilityBreakdown = [
    { name: 'High-Efficiency A/C & Electricity', standardCost: 220, icon: Zap, note: 'Arizona summer power included' },
    { name: 'Gigabit High-Speed Wi-Fi', standardCost: 85, icon: Wifi, note: 'Home-wide fiber network' },
    { name: 'Water, Sewer & Trash Services', standardCost: 75, icon: Droplets, note: 'Full residential utilities' },
    { name: 'In-Home Laundry Machines & Detergent', standardCost: 65, icon: Shirt, note: 'Unlimited free resident use' },
    { name: 'Furnished Bed, Dresser & Bedding Kit', standardCost: 130, icon: Bed, note: 'Ready move-in setup' },
  ];

  const totalMonthlySavings = utilityBreakdown.reduce((acc, curr) => acc + curr.standardCost, 0);

  return (
    <div className="rounded-3xl bg-gradient-to-br from-[#14293A] to-[#1C364C] text-white p-7 sm:p-10 border-2 border-[#8A1C36]/50 shadow-2xl my-16 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#8A1C36]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/15 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8A1C36]/30 text-[#E2B6C0] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#8A1C36]/40">
              <Calculator className="w-3.5 h-3.5 text-white" />
              <span>Interactive Utility Estimator</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
              See How Much You Save with All-Inclusive Living
            </h3>
            <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-xl">
              Traditional apartments hit you with separate utility bills, internet fees, and furniture debt. At Desert Oasis, one predictable monthly payment covers it all.
            </p>
          </div>

          {/* Room Style Toggle */}
          <div className="flex items-center p-1.5 rounded-2xl bg-white/10 border border-white/15 shrink-0">
            <button
              type="button"
              onClick={() => setRoomType('private')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                roomType === 'private'
                  ? 'bg-[#8A1C36] text-white shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Private Master Bedroom
            </button>
            <button
              type="button"
              onClick={() => setRoomType('shared')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                roomType === 'shared'
                  ? 'bg-[#8A1C36] text-white shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Semi-Private (Shared 2-Bed)
            </button>
          </div>
        </div>

        {/* Breakdown Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {utilityBreakdown.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-[#8A1C36]/60 transition-colors flex items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-xl bg-[#8A1C36]/40 flex items-center justify-center shrink-0 border border-[#8A1C36]/50">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-xs sm:text-sm font-semibold text-white">{item.name}</h4>
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      $0 with us
                    </span>
                  </div>
                  <p className="text-[11px] text-white/60 mt-0.5">{item.note}</p>
                  <p className="text-[11px] text-[#E2B6C0]/90 line-through mt-1">
                    Standard apartment cost: ~${item.standardCost}/mo
                  </p>
                </div>
              </div>
            );
          })}

          {/* Summary Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#8A1C36]/80 to-[#6E1429] border border-[#E2B6C0]/40 flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#E2B6C0] font-bold">
                Estimated Utility Savings
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  ${totalMonthlySavings}
                </span>
                <span className="text-xs text-white/80">/ month saved</span>
              </div>
              <p className="text-[11px] text-white/90 mt-1">
                Included automatically in your single all-inclusive monthly fee.
              </p>
            </div>

            <button
              type="button"
              onClick={onCheckBeds}
              className="mt-4 w-full py-2.5 rounded-xl bg-white text-[#14293A] font-bold text-xs hover:bg-[#FAF8F5] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-[#8A1C36]" />
              <span>Inquire for Current Monthly Rates</span>
            </button>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-black/20 border border-white/10 text-xs text-white/80">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Zero Hidden Fees:</strong> No separate Wi-Fi connection deposits, no summer APS/SRP electric spikes, no laundry coin runs.
            </span>
          </div>
          <span className="text-[#E2B6C0] font-semibold">Peace of Mind Guarantee</span>
        </div>
      </div>
    </div>
  );
};
