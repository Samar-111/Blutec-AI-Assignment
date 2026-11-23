import React from 'react';
import type { Metadata } from 'next';
import { FAQAccordion } from '@/components/FAQAccordion';
import { PawIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | TeddyPups U.A.E.',
  description: 'Everything you need to know about puppy health checks, vaccinations, showroom visits, imports, delivery, and care.',
};

export default function FAQPage() {
  return (
    <div className="gutter mx-auto max-w-[110rem] px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="font-scrawl text-lg text-[#c2622b] inline-flex items-center gap-1.5">
          <PawIcon className="size-4" /> answers on the corkboard
        </span>
        <h1 className="font-plush text-4xl sm:text-6xl font-bold tracking-tight text-[#2a170e] mt-1 mb-4">
          Questions, answered
        </h1>
        <p className="text-[#2a170e]/80 text-base sm:text-lg leading-relaxed">
          Have questions about our adoption process, health certificates, imports, or Dubai showroom? Search or browse through our helpful notes below.
        </p>
      </div>

      {/* Interactive FAQ Board */}
      <FAQAccordion showSearch={true} />
    </div>
  );
}
