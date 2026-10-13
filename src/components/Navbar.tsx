import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, CalendarCheck, MapPin, Clock, Shield } from 'lucide-react';
import { Logo } from './Logo';
import { businessData } from '../data/businessConfig';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenIntake: (type?: 'availability' | 'referral', home?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenIntake,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'residences', label: 'Residences' },
    { id: 'living', label: 'Care & Living' },
    { id: 'amenities', label: 'Life & Amenities' },
    { id: 'referrals', label: 'Referrals Hub' },
    { id: 'about', label: 'Our Story' },
    { id: 'contact', label: 'Visit & Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
        {/* Top Info Bar (Desktop) */}
        {!isScrolled && (
          <div className="bg-[#0F1C2E] text-white text-[11px] sm:text-xs py-2 px-4 border-b border-[#8A1C36]/30 hidden lg:block transition-all">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-[#E2B6C0]">
                  <Shield className="w-3.5 h-3.5 text-[#8A1C36]" />
                  <span className="font-semibold">Dignified Residential Living &bull; Maricopa County</span>
                </div>
                <span className="text-white/30">•</span>
                <div className="flex items-center gap-1.5 text-white/80">
                  <MapPin className="w-3.5 h-3.5 text-[#8A1C36]" />
                  <span>East Valley Mesa &middot; Central Phoenix &middot; West Valley Glendale</span>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex items-center gap-1.5 text-white/80">
                  <Clock className="w-3.5 h-3.5 text-[#8A1C36]" />
                  <span>Intake Office: Mon–Sat</span>
                </div>
                <span className="text-white/30">•</span>
                <a
                  href={businessData.phone}
                  className="flex items-center gap-1.5 font-bold text-white hover:text-[#E2B6C0] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8A1C36]" />
                  <span>24/7 Admissions: {businessData.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Main Navbar */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md py-2.5 shadow-md border-b border-[#8A1C36]/20'
              : 'bg-white/92 backdrop-blur-sm py-3 border-b border-[#14293A]/10'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Header Logo */}
              <button
                type="button"
                onClick={() => handleNavClick('home')}
                className="outline-none focus-visible:ring-2 focus-visible:ring-[#8A1C36] rounded-lg cursor-pointer"
                aria-label="Desert Oasis Housing Home"
              >
                <Logo variant="header" className="h-11 sm:h-13" />
              </button>

              {/* Desktop Sub-Page Navigation Links */}
              <nav className="hidden xl:flex items-center gap-6 text-sm font-medium">
                {navItems.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavClick(item.id)}
                      className={`transition-all py-1 px-1.5 relative cursor-pointer font-medium text-xs sm:text-sm ${
                        isActive
                          ? 'text-[#8A1C36] font-bold'
                          : 'text-[#14293A]/80 hover:text-[#8A1C36]'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#8A1C36] rounded-full animate-fade-in" />
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center gap-4">
                <a
                  href={businessData.phone}
                  className="inline-flex items-center gap-2 text-xs xl:text-sm font-medium text-[#14293A] hover:text-[#8A1C36] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8A1C36]" />
                  <span>{businessData.phoneDisplay}</span>
                </a>

                <button
                  type="button"
                  onClick={() => onOpenIntake('availability')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#8A1C36] to-[#A02342] text-white font-semibold text-xs xl:text-sm hover:brightness-105 transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4 text-white" />
                  <span>Check Bed Openings</span>
                </button>
              </div>

              {/* Mobile Controls */}
              <div className="flex items-center gap-2.5 xl:hidden">
                <button
                  type="button"
                  onClick={() => onOpenIntake('availability')}
                  className="inline-flex sm:hidden items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#8A1C36] text-white font-semibold text-xs"
                >
                  <span>Check Beds</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-xl text-[#14293A] hover:bg-[#14293A]/5 transition-colors focus:outline-none"
                  aria-expanded={mobileMenuOpen}
                  aria-label="Toggle Navigation Menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sub-Pages Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white/98 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col justify-between xl:hidden animate-fade-in border-b border-[#8A1C36]/20 shadow-2xl overflow-y-auto">
          <nav className="flex flex-col gap-3 text-center my-auto">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`text-lg font-serif tracking-wide py-2.5 transition-colors border-b border-[#14293A]/10 text-left px-2 flex items-center justify-between ${
                    isActive ? 'text-[#8A1C36] font-bold' : 'text-[#14293A] hover:text-[#8A1C36]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#8A1C36]"></span>}
                </button>
              );
            })}
          </nav>

          <div className="space-y-3 pt-6 border-t border-[#14293A]/15 text-center">
            <a
              href={businessData.phone}
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#14293A]/5 text-[#14293A] font-semibold text-sm border border-[#14293A]/15"
            >
              <Phone className="w-4 h-4 text-[#8A1C36]" />
              <span>Call Intake: {businessData.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenIntake('availability');
              }}
              className="w-full py-3.5 rounded-xl bg-[#8A1C36] text-white font-bold text-sm tracking-wide shadow-md"
            >
              Check Bed Availability
            </button>
          </div>
        </div>
      )}
    </>
  );
};
