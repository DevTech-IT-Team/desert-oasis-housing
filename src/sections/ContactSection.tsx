import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, Send, CheckCircle2, AlertCircle, Calendar } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { businessData } from '../data/businessConfig';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'Check Bed Availability',
    preferredHome: 'Any Phoenix Metro Location',
    timeline: 'Immediate (1-3 Days)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!/^[0-9+()\-.\s]{7,20}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid phone number.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include a brief message or intake context.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('We encountered an error processing your inquiry. Please call our direct line at (602) 555-0198.');
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      inquiryType: 'Check Bed Availability',
      preferredHome: 'Any Phoenix Metro Location',
      timeline: 'Immediate (1-3 Days)',
      message: '',
    });
    setStatus('idle');
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Direct Intake, Inquiries & Scheduled Previews"
          subtitle="Connect directly with our housing team. We respond promptly to prospective residents, families, and healthcare agency partners."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Contact Details & Service Area Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#14293A] text-white p-8 sm:p-10 border-2 border-[#8A1C36]/40 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8A1C36]/20 rounded-full blur-2xl pointer-events-none" />

              <h3 className="font-serif text-2xl sm:text-3xl font-medium mb-6 text-white">
                Residential Intake Office
              </h3>

              <div className="space-y-6 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#8A1C36] flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#E2B6C0] font-semibold">Direct Call / Intake Line</p>
                    <a
                      href={businessData.phone}
                      className="text-base sm:text-lg font-medium text-white hover:text-[#E2B6C0] transition-colors"
                    >
                      {businessData.phoneDisplay}
                    </a>
                    <p className="text-xs text-white/70 mt-0.5">{businessData.intakeAvailability}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#8A1C36] flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#E2B6C0] font-semibold">Referral & General Email</p>
                    <a
                      href={`mailto:${businessData.email}`}
                      className="text-base font-medium text-white hover:text-[#E2B6C0] transition-colors break-all"
                    >
                      {businessData.email}
                    </a>
                    <p className="text-xs text-white/70 mt-0.5">Prompt response to agency packets</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#8A1C36] flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#E2B6C0] font-semibold">Intake Coordination Hours</p>
                    <p className="text-white font-medium">{businessData.hours}</p>
                    <p className="text-xs text-white/70">{businessData.weekendHours}</p>
                  </div>
                </div>

                {/* Service Area */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#8A1C36] flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#E2B6C0] font-semibold">Service Region</p>
                    <p className="text-white font-medium">{businessData.locationArea}</p>
                    <p className="text-xs text-white/75 mt-0.5 leading-relaxed">
                      {businessData.fullServiceArea}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tour & Address Notice Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#8A1C36]/30 shadow-sm">
              <h4 className="font-serif text-lg text-[#14293A] mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#8A1C36]" />
                <span>Scheduling a Walkthrough</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#14293A]/80 leading-relaxed">
                We are proud to show prospective residents and caseworkers our immaculate homes. Please schedule an appointment 24 hours in advance so our house managers can personally welcome you.
              </p>
            </div>
          </div>

          {/* Column 2: Functional Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-[#8A1C36]/30 p-8 sm:p-10 shadow-xl">
              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#8A1C36]/15 flex items-center justify-center text-[#8A1C36]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#14293A]">
                    Inquiry Successfully Submitted
                  </h3>
                  <p className="text-sm text-[#14293A]/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#14293A]">{formData.fullName}</strong>. Your intake message has been forwarded to our housing coordinator. We will reply to <strong className="text-[#14293A]">{formData.email}</strong> shortly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-3 rounded-xl bg-[#14293A] text-white text-sm font-semibold hover:bg-[#1D3A52] transition-colors"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={businessData.phone}
                      className="px-6 py-3 rounded-xl bg-[#8A1C36] text-white text-sm font-semibold hover:bg-[#A02342] transition-colors inline-flex items-center justify-center gap-2 shadow-md"
                    >
                      <Phone className="w-4 h-4 text-white" />
                      <span>Call Us Now</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-[#8A1C36]/20 pb-4 mb-6">
                    <h3 className="font-serif text-2xl text-[#14293A]">
                      Housing Inquiry & Intake Form
                    </h3>
                    <p className="text-xs sm:text-sm text-[#14293A]/75 mt-1">
                      Fill out this form and our admissions team will follow up promptly.
                    </p>
                  </div>

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-[#14293A] uppercase tracking-wider mb-1.5">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="First and last name"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#8A1C36]/25 text-[#14293A] text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C36] transition-all"
                      />
                      {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#14293A] uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(602) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#8A1C36]/25 text-[#14293A] text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C36] transition-all"
                      />
                      {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-[#14293A] uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#8A1C36]/25 text-[#14293A] text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C36] transition-all"
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label htmlFor="contact-type" className="block text-xs font-semibold text-[#14293A] uppercase tracking-wider mb-1.5">
                        Inquiry Nature
                      </label>
                      <select
                        id="contact-type"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#8A1C36]/25 text-[#14293A] text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C36] transition-all"
                      >
                        <option value="Check Bed Availability">Check Bed Availability</option>
                        <option value="Case Manager / Agency Referral">Agency / Hospital Referral</option>
                        <option value="Tour / Walkthrough Request">Schedule Home Walkthrough</option>
                        <option value="General Question">General Information</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Preferred Home */}
                    <div>
                      <label htmlFor="contact-home" className="block text-xs font-semibold text-[#14293A] uppercase tracking-wider mb-1.5">
                        Preferred Location
                      </label>
                      <select
                        id="contact-home"
                        value={formData.preferredHome}
                        onChange={(e) => setFormData({ ...formData, preferredHome: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#8A1C36]/25 text-[#14293A] text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C36] transition-all"
                      >
                        <option value="Any Phoenix Metro Location">Any Phoenix Metro Location</option>
                        <option value="The Saguaro House (East Valley)">The Saguaro House (Mesa / Gilbert)</option>
                        <option value="The Arcadia Vista House (Central Phoenix)">The Arcadia Vista House (Phoenix)</option>
                        <option value="The Citrus Grove House (West Valley)">The Citrus Grove House (Glendale)</option>
                      </select>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label htmlFor="contact-timeline" className="block text-xs font-semibold text-[#14293A] uppercase tracking-wider mb-1.5">
                        Desired Move-In Timeline
                      </label>
                      <select
                        id="contact-timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#8A1C36]/25 text-[#14293A] text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C36] transition-all"
                      >
                        <option value="Immediate (1-3 Days)">Immediate (1–3 Days)</option>
                        <option value="Within 2 Weeks">Within 2 Weeks</option>
                        <option value="Next Month">Next Month</option>
                        <option value="Planning Ahead / Inquiry Only">Planning Ahead / Information Only</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-[#14293A] uppercase tracking-wider mb-1.5">
                      Message / Intake Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share any relevant details, preferred room type (private or shared), mobility considerations, or discharge criteria..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#8A1C36]/25 text-[#14293A] text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C36] transition-all"
                    ></textarea>
                    {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 rounded-xl bg-[#8A1C36] hover:bg-[#A02342] text-white font-bold text-sm tracking-wide shadow-xl flex items-center justify-center gap-3 transition-all cursor-pointer disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <span>Sending Secure Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        <span>Submit Housing Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-[#14293A]/60 text-center leading-normal">
                    We value your privacy. Inquiries are kept strictly confidential within our intake and operations team.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
