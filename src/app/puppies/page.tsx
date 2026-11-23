import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { ALL_PUPPIES } from '@/data/puppies';
import { PuppyFilters } from '@/components/PuppyFilters';
import { PawIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Available Puppies | TeddyPups U.A.E.',
  description: 'Explore available teacup and miniature puppies in Dubai. Filter by breed, gender, and origin.',
};

export default function PuppiesPage() {
  return (
    <div className="gutter mx-auto max-w-[110rem] px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="font-scrawl text-lg text-[#c2622b] inline-flex items-center gap-1.5">
          <PawIcon className="size-4" /> find your little love
        </span>
        <h1 className="font-plush text-4xl sm:text-6xl font-bold tracking-tight text-[#2a170e] mt-1 mb-4">
          Available puppies
        </h1>
        <p className="text-[#2a170e]/80 text-base sm:text-lg leading-relaxed">
          Each puppy is vet-checked, microchipped, dewormed, and fully vaccinated. Visit our Downtown Dubai showroom or reserve your puppy online.
        </p>
      </div>

      {/* Interactive Client-side Filter Grid with Suspense */}
      <Suspense fallback={
        <div className="py-20 text-center font-scrawl text-lg text-[#2a170e]/60">
          Loading puppies catalog…
        </div>
      }>
        <PuppyFilters puppies={ALL_PUPPIES} />
      </Suspense>
    </div>
  );
}
