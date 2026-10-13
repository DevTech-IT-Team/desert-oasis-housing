import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  CalendarCheck, 
  CheckCircle2, 
  Video, 
  User, 
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { businessData } from '../data/businessConfig';

interface ContactPageProps {
  onOpenIntake: (type?: 'availability' | 'referral', home?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenIntake }) => {
  const [tourData, setTourData] = useState({
    name: '',
    phone: '',
    email: '',
    residence: 'The Saguaro House (Mesa)',
    tourType: 'In-Person Walkthrough',
    preferredDate: '',
    timeSlot: 'Morning (10:00 AM - 12:00 PM)',
    notes: '',
  });

  const [tourSubmitted, setTourSubmitted] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTourSubmitted(true);
  };

  return (
    <div className="animate-fade-in bg-[#FAF7F2] text-[#14293A]">
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-32 pb-16 bg-[#14293A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#14293A]/90 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8A1C36]/30 border border-[#8A1C36]/50 text-[#F7E8EB] text-xs font-bold tracking-widest uppercase">
              <span>Visits & Coordination</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.1]">
              Schedule a Visit. <br />
              <span className="italic text-[#E2B6C0] font-serif">We Are Here For You</span>.
            </h1>

            <p className="text-base sm:text-lg text-white/85 max-w-2xl font-light leading-relaxed">
              We welcome prospective residents, family members, case managers, and social workers for private guided walkthroughs 7 days a week. Select an in-person or live video tour below.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SPLIT CONTACT & TOUR SCHEDULER (NO CARDS) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Contacts & Campus Locations */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#8A1C36]">Direct Intake Line</span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#14293A] mt-1">
                  Connect Directly with Our Admissions Team
                </h2>
                <p className="text-xs sm:text-sm text-[#14293A]/80 font-light mt-2">
                  Have questions about bed availability or pricing? Speak with a licensed residential coordinator now:
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#14293A]/10 space-y-4 shadow-sm">
                <a
                  href={businessData.phone}
                  className="flex items-start gap-3.5 group"
                >
                  <div className="p-2.5 rounded-xl bg-[#8A1C36]/10 text-[#8A1C36] group-hover:bg-[#8A1C36] group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#14293A]/60 font-semibold block">Intake Line (24/7 Response)</span>
                    <span className="font-serif text-xl text-[#14293A] group-hover:text-[#8A1C36] transition-colors">{businessData.phoneDisplay}</span>
                  </div>
                </a>

                <div className="border-t border-[#14293A]/10 pt-4 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#14293A]/10 text-[#14293A] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#14293A]/60 font-semibold block">Admissions Email</span>
                    <span className="text-sm font-semibold text-[#14293A]">{businessData.email}</span>
                  </div>
                </div>

                <div className="border-t border-[#14293A]/10 pt-4 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#14293A]/10 text-[#14293A] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#14293A]/60 font-semibold block">Hours</span>
                    <span className="text-xs text-[#14293A]/80 block">{businessData.hours} &middot; {businessData.weekendHours}</span>
                    <span className="text-xs text-[#8A1C36] font-semibold">{businessData.intakeAvailability}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenIntake('availability')}
                    className="w-full py-2.5 rounded-xl bg-[#8A1C36] text-white text-xs font-bold hover:bg-[#A02342] transition-colors cursor-pointer"
                  >
                    Check Immediate Bed Openings Online
                  </button>
                </div>
              </div>

              {/* Campus Locations List */}
              <div className="space-y-3">
                <h3 className="font-serif text-xl text-[#14293A]">Our Valley Locations</h3>
                <div className="space-y-2 text-xs">
                  <div className="p-4 rounded-xl bg-white border border-[#14293A]/10 flex items-center justify-between">
                    <div>
                      <strong className="text-[#14293A] block">East Valley &middot; The Saguaro House</strong>
                      <span className="text-[#14293A]/70">Mesa / Gilbert &middot; Near Banner Desert Medical</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">Open Beds</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#14293A]/10 flex items-center justify-between">
                    <div>
                      <strong className="text-[#14293A] block">Central Phoenix &middot; The Arcadia Vista</strong>
                      <span className="text-[#14293A]/70">Central Corridor &middot; Camelback Mountain View</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold">Limited</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#14293A]/10 flex items-center justify-between">
                    <div>
                      <strong className="text-[#14293A] block">West Valley &middot; The Citrus Grove</strong>
                      <span className="text-[#14293A]/70">Glendale / Peoria &middot; Mature Citrus Backyard</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold">Waitlist</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Tour Scheduler */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#14293A]/10 shadow-sm">
              <div className="flex items-center justify-between pb-6 border-b border-[#14293A]/10">
                <div>
                  <h3 className="font-serif text-2xl text-[#14293A]">Schedule a Guided Walkthrough</h3>
                  <span className="text-xs text-[#14293A]/70">In-person visits or live video tours</span>
                </div>
                <div className="p-2.5 rounded-full bg-[#8A1C36]/10 text-[#8A1C36]">
                  <CalendarCheck className="w-5 h-5" />
                </div>
              </div>

              {tourSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#14293A]">Tour Scheduled Successfully</h4>
                  <p className="text-sm text-[#14293A]/80 max-w-md mx-auto font-light">
                    We look forward to welcoming you! An intake coordinator will contact <strong>{tourData.phone || tourData.email}</strong> within 2 hours to confirm your time slot for <strong>{tourData.residence}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setTourSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#14293A] text-white text-xs font-semibold hover:bg-[#8A1C36] transition-colors cursor-pointer"
                  >
                    Schedule Another Tour
                  </button>
                </div>
              ) : (
                <form onSubmit={handleTourSubmit} className="space-y-4 pt-6">
                  {/* Tour Type Radio Selection */}
                  <div>
                    <label className="text-xs font-semibold text-[#14293A] block mb-2">Preferred Tour Format</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setTourData({ ...tourData, tourType: 'In-Person Walkthrough' })}
                        className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          tourData.tourType === 'In-Person Walkthrough'
                            ? 'bg-[#8A1C36] text-white border-transparent'
                            : 'bg-[#FAF7F2] text-[#14293A] border-[#14293A]/10'
                        }`}
                      >
                        <User className="w-3.5 h-3.5" />
                        <span>In-Person Walkthrough</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setTourData({ ...tourData, tourType: 'Live Video (FaceTime/Zoom)' })}
                        className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          tourData.tourType === 'Live Video (FaceTime/Zoom)'
                            ? 'bg-[#8A1C36] text-white border-transparent'
                            : 'bg-[#FAF7F2] text-[#14293A] border-[#14293A]/10'
                        }`}
                      >
                        <Video className="w-3.5 h-3.5" />
                        <span>Live Video Tour</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#14293A] block mb-1">Select Residence</label>
                      <select
                        value={tourData.residence}
                        onChange={e => setTourData({ ...tourData, residence: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#14293A]/15 text-xs text-[#14293A] focus:outline-none focus:border-[#8A1C36]"
                      >
                        <option value="The Saguaro House (Mesa)">The Saguaro House &middot; Mesa</option>
                        <option value="The Arcadia Vista (Phoenix)">The Arcadia Vista &middot; Central Phoenix</option>
                        <option value="The Citrus Grove (Glendale)">The Citrus Grove &middot; Glendale</option>
                        <option value="Any Available Residence">Let Coordinator Suggest Best Fit</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#14293A] block mb-1">Time Window</label>
                      <select
                        value={tourData.timeSlot}
                        onChange={e => setTourData({ ...tourData, timeSlot: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#14293A]/15 text-xs text-[#14293A] focus:outline-none focus:border-[#8A1C36]"
                      >
                        <option value="Morning (10:00 AM - 12:00 PM)">Morning (10:00 AM - 12:00 PM)</option>
                        <option value="Afternoon (1:00 PM - 3:30 PM)">Afternoon (1:00 PM - 3:30 PM)</option>
                        <option value="Late Afternoon (4:00 PM - 6:00 PM)">Late Afternoon (4:00 PM - 6:00 PM)</option>
                        <option value="Weekend Slot">Weekend Specific Slot</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#14293A] block mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={tourData.name}
                        onChange={e => setTourData({ ...tourData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#14293A]/15 text-xs text-[#14293A] focus:outline-none focus:border-[#8A1C36]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#14293A] block mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="(602) 555-0198"
                        value={tourData.phone}
                        onChange={e => setTourData({ ...tourData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#14293A]/15 text-xs text-[#14293A] focus:outline-none focus:border-[#8A1C36]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#14293A] block mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={tourData.email}
                        onChange={e => setTourData({ ...tourData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#14293A]/15 text-xs text-[#14293A] focus:outline-none focus:border-[#8A1C36]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#14293A] block mb-1">Questions or Specific Accommodation Notes (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Inquiring on behalf of my father, seeking private bedroom with garden view..."
                      value={tourData.notes}
                      onChange={e => setTourData({ ...tourData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#14293A]/15 text-xs text-[#14293A] focus:outline-none focus:border-[#8A1C36]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#8A1C36] hover:bg-[#A02342] text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Confirm Guided Tour Reservation</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS ACCORDION (NO CARDS) */}
      <section className="py-20 bg-[#EFE9DF] border-t border-[#14293A]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8A1C36]">Common Inquiries</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#14293A]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {businessData.faqs.slice(0, 6).map((faq, idx) => {
              const isOpen = activeFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-[#14293A]/10 overflow-hidden shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-serif text-base sm:text-lg text-[#14293A] font-medium">{faq.question}</span>
                    <span className="text-[#8A1C36]">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#14293A]/80 font-light leading-relaxed border-t border-[#14293A]/5 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
