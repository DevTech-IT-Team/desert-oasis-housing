import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { businessData } from '../data/businessConfig';

interface FooterProps {
  onNavigate?: (page: string) => void;
  onOpenIntake?: (type?: 'availability' | 'referral', home?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenIntake }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const handleLinkClick = (pageId: string) => {
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0F1C2E] text-white border-t-2 border-[#8A1C36] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand & Mission Side Column */}
          <div className="lg:col-span-5 space-y-5">
            <button
              type="button"
              onClick={() => handleLinkClick('home')}
              className="bg-white px-5 py-3 rounded-2xl inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all cursor-pointer group text-left border border-white/20"
              aria-label="Desert Oasis Housing Home"
            >
              <img
                src="/images/logo/dessert-oasis-footer.png"
                alt="Desert Oasis Housing"
                className="h-10 sm:h-12 w-auto max-w-[240px] sm:max-w-[280px] object-contain group-hover:scale-102 transition-transform"
              />
            </button>

            <p className="text-sm text-white/80 leading-relaxed max-w-sm font-light">
              {businessData.shortDescription}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8A1C36]/30 border border-[#8A1C36]/50 text-xs text-[#F7E8EB] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#8A1C36] animate-pulse" />
                <span>Maricopa County Independent Living Network</span>
              </div>
              {onOpenIntake && (
                <button
                  type="button"
                  onClick={() => onOpenIntake('availability')}
                  className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#8A1C36] text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Check Open Beds
                </button>
              )}
            </div>
          </div>

          {/* Quick Sub-Page Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg text-[#E2B6C0] font-medium">
              Sanctuary Pages
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-[#E2B6C0] transition-colors cursor-pointer text-left"
                >
                  Home &amp; Sanctuary
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('residences')}
                  className="hover:text-[#E2B6C0] transition-colors cursor-pointer text-left"
                >
                  Residential Homes (Mesa, Phoenix, Glendale)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('living')}
                  className="hover:text-[#E2B6C0] transition-colors cursor-pointer text-left"
                >
                  Care &amp; Living Pathways
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('amenities')}
                  className="hover:text-[#E2B6C0] transition-colors cursor-pointer text-left"
                >
                  Life &amp; Amenities (Menu &amp; Gardens)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('referrals')}
                  className="hover:text-[#E2B6C0] transition-colors cursor-pointer text-left"
                >
                  Agency &amp; Case Manager Referrals
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-[#E2B6C0] transition-colors cursor-pointer text-left"
                >
                  Our Story &amp; Philosophy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-[#E2B6C0] transition-colors cursor-pointer text-left"
                >
                  Schedule Tour &amp; Visit
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Service Area */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg text-[#E2B6C0] font-medium">
              Direct Contact
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8A1C36] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <a href={businessData.phone} className="hover:text-[#E2B6C0] transition-colors font-semibold text-white">
                    {businessData.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-white/60">Direct Admissions &amp; Bed Coordinator</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8A1C36] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <a href={`mailto:${businessData.email}`} className="hover:text-[#E2B6C0] transition-colors text-white font-medium">
                    {businessData.email}
                  </a>
                  <p className="text-[11px] text-white/60">2-Hour Referral Response</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8A1C36] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">{businessData.locationArea}</p>
                  <p className="text-[11px] text-white/60">East Valley, Central Corridor &amp; West Valley</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            &copy; {currentYear} {businessData.name}. All rights reserved. Equal Housing Opportunity.
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-[#E2B6C0] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
