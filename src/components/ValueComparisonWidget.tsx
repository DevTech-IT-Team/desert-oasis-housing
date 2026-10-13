import React from 'react';
import { Check, X, Sparkles, ShieldCheck } from 'lucide-react';
import { businessData } from '../data/businessConfig';

export const ValueComparisonWidget: React.FC = () => {
  return (
    <div className="rounded-3xl bg-white border border-[#8A1C36]/25 shadow-xl overflow-hidden p-6 sm:p-10 my-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#14293A]/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A1C36]/10 text-[#8A1C36] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Value & Transparency</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#14293A]">
            All-Inclusive Living vs. Traditional Rental
          </h3>
          <p className="text-xs sm:text-sm text-[#14293A]/75 mt-1">
            Compare what is covered in our single predictable monthly rate versus the hidden utility and furnishing bills of standard leasing.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#14293A] text-white text-xs font-medium shrink-0">
          <ShieldCheck className="w-4 h-4 text-[#E2B6C0]" />
          <span>Zero Unexpected Utility Hikes</span>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[560px]">
          <thead>
            <tr className="border-b border-[#14293A]/10 text-xs uppercase tracking-wider font-semibold text-[#14293A]/60">
              <th className="py-3.5 px-4">Living Factor</th>
              <th className="py-3.5 px-4 text-[#14293A]/70">Traditional Apartment / Rental</th>
              <th className="py-3.5 px-4 bg-[#8A1C36]/10 text-[#8A1C36] rounded-t-xl font-bold">
                Desert Oasis Housing (All-Inclusive)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#14293A]/5 text-xs sm:text-sm">
            {businessData.comparisonTable.map((row, idx) => (
              <tr
                key={idx}
                className={`transition-colors ${
                  row.highlight ? 'bg-[#FAF8F5]/80 font-medium' : 'hover:bg-gray-50/50'
                }`}
              >
                <td className="py-4 px-4 font-semibold text-[#14293A]">
                  {row.feature}
                </td>
                <td className="py-4 px-4 text-[#14293A]/75 flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{row.traditional}</span>
                </td>
                <td className="py-4 px-4 text-[#14293A] bg-[#8A1C36]/5 font-medium">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#8A1C36] shrink-0 mt-0.5" />
                    <span>{row.desertOasis}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
