import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Phone, Calendar, User, Mail, Building2, MapPin } from 'lucide-react';
import { businessData } from '../data/businessConfig';

interface QuickIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: 'availability' | 'referral';
  defaultHome?: string;
}

export const QuickIntakeModal: React.FC<QuickIntakeModalProps> = ({
  isOpen,
  onClose,
  defaultType = 'availability',
  defaultHome = '',
}) => {
  const [inquiryType, setInquiryType] = useState<'availability' | 'referral'>(defaultType);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    organization: '',
    preferredLocation: defaultHome || 'Any Available Home',
    roomPreference: 'Private Room',
    targetDate: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setInquiryType(defaultType);
    if (defaultHome) {
      setFormData(prev => ({ ...prev, preferredLocation: defaultHome }));
    }
  }, [defaultType, defaultHome]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
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

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[0-9+()\-.\s]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
    }, 850);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14293A]/85 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white border border-[#8A1C36]/30 shadow-2xl p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#14293A]/60 hover:text-[#14293A] hover:bg-[#F4EFEB] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitStatus === 'success' ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#8A1C36]/15 flex items-center justify-center text-[#8A1C36]">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl text-[#14293A]">
              Thank You for Reaching Out
            </h3>
            <p className="text-sm text-[#14293A]/80 max-w-md mx-auto leading-relaxed">
              Your inquiry has been received by our residential coordination team. We will review bed availability and contact you at <strong className="text-[#14293A]">{formData.phone}</strong> or <strong className="text-[#14293A]">{formData.email}</strong> within 2 to 4 business hours.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={businessData.phone}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#14293A] text-white font-medium text-sm hover:bg-[#1D3A52] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E2B6C0]" />
                Call Directly: {businessData.phoneDisplay}
              </a>
              <button
                type="button"
                onClick={() => {
                  setSubmitStatus('idle');
                  onClose();
                }}
                className="px-5 py-2.5 rounded-xl border border-[#8A1C36]/40 text-[#14293A] font-medium text-sm hover:bg-[#F4EFEB] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#8A1C36]/10 text-[#8A1C36] border border-[#8A1C36]/25">
                Direct Intake & Inquiry
              </div>
              <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl text-[#14293A]">
                {inquiryType === 'referral' ? 'Make a Housing Referral' : 'Check Room Availability'}
              </h3>
              <p className="text-xs sm:text-sm text-[#14293A]/75 mt-1">
                Serving adults seeking dignified independent living across the Phoenix Metropolitan area.
              </p>

              {/* Inquiry Type Tabs */}
              <div className="grid grid-cols-2 gap-2 mt-4 p-1 rounded-xl bg-[#F4EFEB]">
                <button
                  type="button"
                  onClick={() => setInquiryType('availability')}
                  className={`py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                    inquiryType === 'availability'
                      ? 'bg-[#14293A] text-white shadow-sm'
                      : 'text-[#14293A]/80 hover:text-[#14293A]'
                  }`}
                >
                  Individual / Family
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType('referral')}
                  className={`py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                    inquiryType === 'referral'
                      ? 'bg-[#14293A] text-white shadow-sm'
                      : 'text-[#14293A]/80 hover:text-[#14293A]'
                  }`}
                >
                  Agency / Case Manager
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#14293A] uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A1C36]" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#8A1C36]/25 text-[#14293A] text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C36] transition-all"
                  />
                </div>
                {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#14293A] uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A1C36]" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(602) 000-0000"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#8A1C36]/25 text-[#14293A] text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C36] transition-all"
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#14293A] uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A1C36]" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#8A1C36]/25 text-[#14293A] text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C36] transition-all"
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              {inquiryType === 'referral' && (
                <div>
                  <label className="block text-xs font-semibold text-[#14293A] uppercase tracking-wider mb-1">
                    Referring Hospital / Agency / Organization
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A1C36]" />
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Banner Health / Community Social Services"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#8A1C36]/25 text-[#14293A] text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C36] transition-all"
                    />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#14293A] uppercase tracking-wider mb-1">
                    Preferred Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A1C36]" />
                    <select
                      value={formData.preferredLocation}
                      onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#8A1C36]/25 text-[#14293A] text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C36] transition-all"
                    >
                      <option value="Any Available Home">Any Available Home</option>
                      <option value="East Valley (Mesa / Gilbert Area)">The Saguaro House (Mesa / Gilbert)</option>
                      <option value="Central Phoenix (Arcadia Area)">The Arcadia Vista House (Phoenix)</option>
                      <option value="West Valley (Glendale / Peoria)">The Citrus Grove House (Glendale)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#14293A] uppercase tracking-wider mb-1">
                    Room Preference
                  </label>
                  <select
                    value={formData.roomPreference}
                    onChange={(e) => setFormData({ ...formData, roomPreference: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#8A1C36]/25 text-[#14293A] text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C36] transition-all"
                  >
                    <option value="Private Room">Private Bedroom</option>
                    <option value="Semi-Private Room">Semi-Private (Shared Room)</option>
                    <option value="Either Option">Either / First Available</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#14293A] uppercase tracking-wider mb-1">
                  Target Move-In Date or Additional Notes
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-3 w-4 h-4 text-[#8A1C36]" />
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Desired move-in timeline (e.g. Immediate, within 1 week), mobility preferences, or referral context..."
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#FAF8F5] border border-[#8A1C36]/25 text-[#14293A] text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C36] transition-all"
                  ></textarea>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[#8A1C36] hover:bg-[#A02342] text-white font-semibold text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <span>Submit Inquiry to Admissions Coordinator</span>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-[#14293A]/60 text-center leading-normal">
                Your personal and referral details are handled in strict confidentiality. Street addresses are provided upon tour scheduling to protect resident safety.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
