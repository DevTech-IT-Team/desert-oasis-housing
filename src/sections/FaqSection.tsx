import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Mail, Search } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { businessData } from '../data/businessConfig';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { key: 'all', label: 'All Questions' },
    { key: 'eligibility', label: 'Eligibility & Rules' },
    { key: 'inclusions', label: 'Pricing & Amenities' },
    { key: 'referrals', label: 'Referrals & Placement' },
    { key: 'general', label: 'Move-In Process' },
  ];

  const filteredFaqs = businessData.faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F4EFEB]/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Clear Answers About Living at Desert Oasis"
          subtitle="Transparent answers regarding eligibility, amenities, pricing inclusions, referral procedures, and house guidelines."
        />

        {/* Search Bar & Category Filters */}
        <div className="mb-10 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A1C36]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. utilities, eligibility, referral speed)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-[#8A1C36]/25 text-[#14293A] text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C36] shadow-sm transition-all"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveCategory(tab.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === tab.key
                    ? 'bg-[#8A1C36] text-white shadow-md'
                    : 'bg-white text-[#14293A]/80 hover:bg-[#FAF8F5] border border-[#14293A]/15'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-[#8A1C36]/20">
              <p className="text-sm text-[#14293A]/70">No questions match your search. Call us directly for immediate help!</p>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-2xl transition-all duration-200 border ${
                    isOpen
                      ? 'bg-white border-[#8A1C36] shadow-md'
                      : 'bg-white/90 border-[#8A1C36]/20 hover:border-[#8A1C36]/60'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A1C36] rounded-2xl"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className="font-serif text-lg sm:text-xl text-[#14293A] font-medium leading-snug">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#8A1C36] text-white rotate-180' : 'bg-[#14293A]/5 text-[#14293A]'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#14293A]/80 leading-relaxed border-t border-[#8A1C36]/15 animate-fade-in"
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Have More Questions Prompt */}
        <div className="mt-12 text-center p-6 sm:p-8 rounded-2xl bg-white border border-[#8A1C36]/30 shadow-sm">
          <HelpCircle className="w-8 h-8 text-[#8A1C36] mx-auto mb-2" />
          <h4 className="font-serif text-xl text-[#14293A]">
            Have a question not listed here?
          </h4>
          <p className="text-xs sm:text-sm text-[#14293A]/75 mt-1 max-w-md mx-auto">
            Our intake team is available to speak directly with residents, caseworkers, and family members.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a
              href={businessData.phone}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#14293A] hover:text-[#8A1C36] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#8A1C36]" />
              <span>{businessData.phoneDisplay}</span>
            </a>
            <span className="text-gray-300">•</span>
            <a
              href={`mailto:${businessData.email}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#14293A] hover:text-[#8A1C36] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#8A1C36]" />
              <span>{businessData.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
