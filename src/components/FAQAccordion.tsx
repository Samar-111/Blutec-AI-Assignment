'use client';

import React, { useState } from 'react';
import { FAQS } from '../data/faqs';
import { Search, ChevronDown, HelpCircle } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

interface FAQAccordionProps {
  showSearch?: boolean;
  limit?: number;
}

const PIN_COLORS = ['#c2622b', '#0f764a', '#3e2312', '#bc6c25', '#d96b3d'];

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  showSearch = true,
  limit
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true // First FAQ open by default
  });

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = FAQS.filter((f) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
  }).slice(0, limit || FAQS.length);

  return (
    <div className="w-full">
      {/* Search Input Bar */}
      {showSearch && (
        <div className="mb-10 max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[#2a170e]/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Sniff out a question (e.g. vaccines, delivery, breeds)…"
              className="w-full rounded-full border-2 border-[#2a170e] bg-[#fffdf8] py-3.5 pl-12 pr-6 font-medium text-[#2a170e] placeholder-[#2a170e]/50 shadow-sm focus:border-[#c2622b] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#c2622b] hover:underline"
              >
                Clear
              </button>
            )}
          </div>
          <p className="mt-3 text-center font-scrawl text-sm text-[#2a170e]/70">
            {filteredFaqs.length} {filteredFaqs.length === 1 ? 'note' : 'notes'} on the board
          </p>
        </div>
      )}

      {/* Accordion Cards Grid / List */}
      <div className="grid gap-4 md:gap-5 max-w-4xl mx-auto">
        {filteredFaqs.map((faq, index) => {
          const isOpen = !!openIds[faq.id];
          const pinColor = PIN_COLORS[index % PIN_COLORS.length];

          return (
            <div
              key={faq.id}
              className={`relative overflow-hidden rounded-[2rem] border-2 border-[#2a170e] bg-[#fffdf8] transition-all duration-300 shadow-sm hover:shadow-md ${
                isOpen ? 'bg-[#fffdf8]' : 'bg-[#fffdf8]/90'
              }`}
            >
              {/* Pushpin Graphic */}
              <div
                className="absolute top-4 left-5 size-3 rounded-full border border-[#2a170e] shadow-xs"
                style={{ backgroundColor: pinColor }}
              />

              <button
                type="button"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between p-5 sm:p-6 pl-12 text-left transition-colors"
              >
                <span className="font-plush text-lg sm:text-xl font-bold text-[#2a170e]">
                  {faq.question}
                </span>
                <span className={`ml-4 rounded-full border border-[#2a170e]/20 p-2 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 bg-[#fbe3b4]' : 'bg-[#fffdf8]'
                }`}>
                  <ChevronDown className="size-4 text-[#2a170e]" />
                </span>
              </button>

              {/* Collapsible Answer */}
              {isOpen && (
                <div className="border-t border-dashed border-[#2a170e]/20 px-6 sm:px-8 pb-6 pt-4 text-sm sm:text-base leading-relaxed text-[#2a170e]/85 font-medium animate-in fade-in duration-200">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="rounded-3xl border-2 border-dashed border-[#2a170e]/30 p-12 text-center bg-[#fffdf8]">
            <HelpCircle className="size-12 text-[#c2622b] mx-auto mb-3" />
            <h3 className="font-plush text-xl font-bold text-[#2a170e]">No questions matched your search</h3>
            <p className="font-scrawl text-sm text-[#2a170e]/70 mt-1">
              Try searching with different keywords or chat with our team on WhatsApp!
            </p>
          </div>
        )}
      </div>

      {/* Direct WhatsApp help banner */}
      <div className="mt-12 rounded-[2rem] border-2 border-[#2a170e] bg-[#fbe3b4]/50 p-6 sm:p-8 text-center max-w-2xl mx-auto">
        <h4 className="font-plush text-2xl font-bold text-[#2a170e]">
          Still have questions?
        </h4>
        <p className="font-scrawl text-sm text-[#2a170e]/80 mt-1 max-w-md mx-auto">
          Our friendly puppy care team is available 24/7 on WhatsApp to help you choose the right companion.
        </p>
        <div className="mt-5">
          <a
            href="https://wa.me/919898124987?text=Hi%20Insta%20Biz%20Web%2C%20I'd%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#0f764a] px-6 py-3 font-bold text-white shadow-md hover:bg-[#0c5e3b] transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="size-4" />
            <span>Ask us on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
