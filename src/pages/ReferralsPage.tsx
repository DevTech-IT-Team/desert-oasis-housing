import React, { useState } from 'react';
import { 
  Clock, 
  CheckCircle, 
  FileText, 
  CalendarCheck
} from 'lucide-react';
import { businessData } from '../data/businessConfig';

interface ReferralsPageProps {
  onOpenIntake: (type?: 'availability' | 'referral', home?: string) => void;
}

export const ReferralsPage: React.FC<ReferralsPageProps> = ({ onOpenIntake }) => {
  const [activeAudienceIndex, setActiveAudienceIndex] = useState(0);
  const activeAudience = businessData.referralAudiences[activeAudienceIndex];

  // Direct Referral Form State
  const [formData, setFormData] = useState({
    agencyName: '',
    coordinatorName: '',
    coordinatorPhone: '',
    coordinatorEmail: '',
    clientName: '',
    clientGender: 'Male',
    desiredLocation: 'East Valley (Mesa)',
    urgency: 'Standard (Within 1-2 weeks)',
    notes: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="animate-fade-in bg-[#FAF7F2] text-[#14293A]">
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-32 pb-16 bg-[#14293A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#14293A]/90 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8A1C36]/30 border border-[#8A1C36]/50 text-[#F7E8EB] text-xs font-bold tracking-widest uppercase">
              <span>Agency & Healthcare Portal</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.1]">
              Rapid Agency Placement. <br />
              <span className="italic text-[#E2B6C0] font-serif">Dignified Residential Transitions</span>.
            </h1>

            <p className="text-base sm:text-lg text-white/85 max-w-2xl font-light leading-relaxed">
              We partner directly with hospital case managers, discharge planners, behavioral health agencies, and VA coordinators across Phoenix and Maricopa County. We guarantee rapid response and bed coordination within 2 hours.
            </p>
          </div>
        </div>
      </section>

      {/* 2. 24-HOUR PLACEMENT GUARANTEE STRIP */}
      <section className="bg-[#8A1C36] text-white py-4 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#F7E8EB]" />
            <span>Hospital Discharge Deadline? Our Intake Coordinators Respond Within 120 Minutes.</span>
          </div>
          <a
            href={businessData.phone}
            className="underline hover:text-[#F7E8EB] font-bold"
          >
            Direct Discharge Line: {businessData.phoneDisplay}
          </a>
        </div>
      </section>

      {/* 3. DISCHARGE-TO-MOVE-IN PIPELINE (Horizontal Flow - NO CARDS) */}
      <section className="py-20 border-b border-[#14293A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8A1C36]">Streamlined Workflow</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#14293A]">
              From Clinical Referral to Warm Welcome
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-t-2 border-[#8A1C36] pt-6 space-y-2">
              <span className="font-serif text-2xl text-[#8A1C36] block">Stage 01</span>
              <h3 className="font-serif text-lg text-[#14293A]">Digital Packet or Call</h3>
              <p className="text-xs text-[#14293A]/75 leading-relaxed font-light">
                Submit basic client parameters online below or call our intake desk directly.
              </p>
            </div>

            <div className="border-t-2 border-[#14293A]/30 pt-6 space-y-2">
              <span className="font-serif text-2xl text-[#14293A] block">Stage 02</span>
              <h3 className="font-serif text-lg text-[#14293A]">Clinical Review (2 Hrs)</h3>
              <p className="text-xs text-[#14293A]/75 leading-relaxed font-light">
                Our house coordinator reviews independent living fit, mobility needs, and bed openings.
              </p>
            </div>

            <div className="border-t-2 border-[#14293A]/30 pt-6 space-y-2">
              <span className="font-serif text-2xl text-[#14293A] block">Stage 03</span>
              <h3 className="font-serif text-lg text-[#14293A]">Virtual or In-Person Tour</h3>
              <p className="text-xs text-[#14293A]/75 leading-relaxed font-light">
                Case managers, families, or clients can join a live video tour of the exact bedroom.
              </p>
            </div>

            <div className="border-t-2 border-[#8A1C36] pt-6 space-y-2">
              <span className="font-serif text-2xl text-[#8A1C36] block">Stage 04</span>
              <h3 className="font-serif text-lg text-[#14293A]">Seamless Move-In Day</h3>
              <p className="text-xs text-[#14293A]/75 leading-relaxed font-light">
                Resident arrives to a freshly prepared bed, house welcome packet, and peaceful routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SPLIT REFERRAL PORTAL: INTERACTIVE AUDIENCES & DIRECT FORM */}
      <section className="py-20 bg-[#EFE9DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Referring Audience Tabs */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#8A1C36]">Target Partnerships</span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#14293A] mt-1">
                  Built to Serve Your Agency's Standards
                </h2>
                <p className="text-xs sm:text-sm text-[#14293A]/80 font-light mt-2">
                  Select your agency role to review our specific compliance and intake checklist:
                </p>
              </div>

              {/* Interactive Audience Track */}
              <div className="space-y-2.5">
                {businessData.referralAudiences.map((aud, idx) => {
                  const isActive = idx === activeAudienceIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveAudienceIndex(idx)}
                      className={`w-full text-left p-4 rounded-xl transition-all cursor-pointer border ${
                        isActive
                          ? 'bg-[#14293A] text-white border-transparent shadow-md'
                          : 'bg-white hover:bg-[#FAF7F2] text-[#14293A] border-[#14293A]/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-base">{aud.title}</span>
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-[#E2B6C0]' : 'text-[#8A1C36]'}`}>
                          {aud.subtitle}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Audience Details Box */}
              <div className="p-6 rounded-2xl bg-white border border-[#14293A]/10 space-y-4">
                <h4 className="font-serif text-lg text-[#14293A]">{activeAudience.title} Focus</h4>
                <p className="text-xs text-[#14293A]/80 leading-relaxed font-light">{activeAudience.description}</p>
                <div className="space-y-2 pt-2 border-t border-[#14293A]/10">
                  {activeAudience.checklist.map((item, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-[#14293A]/85">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Direct Fast-Track Referral Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#14293A]/10 shadow-sm">
              <div className="flex items-center justify-between pb-6 border-b border-[#14293A]/10">
                <div>
                  <h3 className="font-serif text-2xl text-[#14293A]">Submit Referral Packet</h3>
                  <span className="text-xs text-[#14293A]/70">Fast-track response within 2 hours</span>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenIntake('referral')}
                  className="px-3.5 py-1.5 rounded-xl bg-[#8A1C36]/10 hover:bg-[#8A1C36] text-[#8A1C36] hover:text-white text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Launch Modal</span>
                </button>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#14293A]">Referral Successfully Received</h4>
                  <p className="text-sm text-[#14293A]/80 max-w-md mx-auto font-light">
                    Thank you. Our intake director has been alerted and will reach out to <strong>{formData.coordinatorEmail || formData.coordinatorPhone}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#14293A] text-white text-xs font-semibold hover:bg-[#8A1C36] transition-colors cursor-pointer"
                  >
                    Submit Another Referral
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#14293A] block mb-1">Referring Agency / Hospital</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Banner Desert, VA Hospital"
                        value={formData.agencyName}
                        onChange={e => setFormData({ ...formData, agencyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#14293A]/15 text-xs text-[#14293A] focus:outline-none focus:border-[#8A1C36]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#14293A] block mb-1">Coordinator / Case Manager Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins, MSW"
                        value={formData.coordinatorName}
                        onChange={e => setFormData({ ...formData, coordinatorName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#14293A]/15 text-xs text-[#14293A] focus:outline-none focus:border-[#8A1C36]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#14293A] block mb-1">Direct Phone</label>
                      <input
                        type="tel"
                        required
                        placeholder="(602) 555-0100"
                        value={formData.coordinatorPhone}
                        onChange={e => setFormData({ ...formData, coordinatorPhone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#14293A]/15 text-xs text-[#14293A] focus:outline-none focus:border-[#8A1C36]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#14293A] block mb-1">Agency Email</label>
                      <input
                        type="email"
                        required
                        placeholder="case-manager@hospital.org"
                        value={formData.coordinatorEmail}
                        onChange={e => setFormData({ ...formData, coordinatorEmail: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#14293A]/15 text-xs text-[#14293A] focus:outline-none focus:border-[#8A1C36]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#14293A] block mb-1">Client Initials or Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. J.D. or Client Name"
                        value={formData.clientName}
                        onChange={e => setFormData({ ...formData, clientName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#14293A]/15 text-xs text-[#14293A] focus:outline-none focus:border-[#8A1C36]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#14293A] block mb-1">Target Location</label>
                      <select
                        value={formData.desiredLocation}
                        onChange={e => setFormData({ ...formData, desiredLocation: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#14293A]/15 text-xs text-[#14293A] focus:outline-none focus:border-[#8A1C36]"
                      >
                        <option value="East Valley (Mesa)">East Valley (Mesa / Gilbert)</option>
                        <option value="Central Phoenix">Central Phoenix / Arcadia</option>
                        <option value="West Valley">West Valley (Glendale / Peoria)</option>
                        <option value="Any Available">First Available Valley Bed</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#14293A] block mb-1">Placement Urgency</label>
                      <select
                        value={formData.urgency}
                        onChange={e => setFormData({ ...formData, urgency: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#14293A]/15 text-xs text-[#14293A] focus:outline-none focus:border-[#8A1C36]"
                      >
                        <option value="Urgent 24-48 Hours">Urgent (24–48 Hours)</option>
                        <option value="Within 1 Week">Within 1 Week</option>
                        <option value="Future Placement">Future Placement</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#14293A] block mb-1">Brief Clinical or Mobility Notes (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Ambulatory adult, independent ADLs, seeking peaceful recovery environment..."
                      value={formData.notes}
                      onChange={e => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#14293A]/15 text-xs text-[#14293A] focus:outline-none focus:border-[#8A1C36]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#8A1C36] hover:bg-[#A02342] text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Submit Referral Packet for 2-Hour Review</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
