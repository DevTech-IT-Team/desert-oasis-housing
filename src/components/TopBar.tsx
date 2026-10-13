import React from 'react';
import { Phone, MapPin, Clock, Shield } from 'lucide-react';
import { businessData } from '../data/businessConfig';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#14293A] text-white text-[11px] sm:text-xs py-2 px-4 border-b border-[#8A1C36]/30 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side: Status & Coverage */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-[#E2B6C0]">
            <Shield className="w-3.5 h-3.5 text-[#8A1C36]" />
            <span className="font-semibold">Safe, Supportive Independent Living</span>
          </div>
          <span className="text-white/30">•</span>
          <div className="flex items-center gap-1.5 text-white/80">
            <MapPin className="w-3.5 h-3.5 text-[#8A1C36]" />
            <span>Mesa &middot; Central Phoenix &middot; Glendale &middot; Scottsdale</span>
          </div>
        </div>

        {/* Right Side: Quick Intake Line & Hours */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5 text-white/80">
            <Clock className="w-3.5 h-3.5 text-[#8A1C36]" />
            <span>Intake Active Mon–Sat</span>
          </div>
          <span className="text-white/30">•</span>
          <a
            href={businessData.phone}
            className="flex items-center gap-1.5 font-bold text-white hover:text-[#E2B6C0] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#8A1C36]" />
            <span>24/7 Intake Line: {businessData.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
