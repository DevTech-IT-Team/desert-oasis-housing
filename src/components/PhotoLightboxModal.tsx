import React, { useEffect } from 'react';
import { X, MapPin, CalendarCheck } from 'lucide-react';

interface PhotoLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  subtitle?: string;
  onInquire?: () => void;
}

export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  subtitle,
  onInquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#14293A]/90 backdrop-blur-md animate-fade-in">
      <div 
        className="relative max-w-4xl w-full bg-[#14293A] border border-[#8A1C36]/40 rounded-3xl overflow-hidden shadow-2xl"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#8A1C36] transition-colors"
          aria-label="Close image preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image Showcase */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black/40 overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14293A] via-transparent to-black/20" />
        </div>

        {/* Bottom Details Bar */}
        <div className="p-6 sm:p-8 bg-[#14293A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
          <div>
            <h3 className="font-serif text-2xl text-white font-medium">{title}</h3>
            {subtitle && (
              <p className="text-xs sm:text-sm text-[#E2B6C0] flex items-center gap-1.5 mt-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{subtitle}</span>
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            {onInquire && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onInquire();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8A1C36] text-white text-xs sm:text-sm font-semibold hover:bg-[#A02342] transition-colors shadow-md"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Check Availability</span>
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-white/20 text-white/80 hover:text-white text-xs sm:text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
