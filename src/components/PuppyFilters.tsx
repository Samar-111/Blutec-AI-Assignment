'use client';

import React, { useMemo } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Puppy } from '../types';
import { PuppyCard } from './PuppyCard';
import { Filter, RotateCcw } from 'lucide-react';

interface PuppyFiltersProps {
  puppies: Puppy[];
}

const BREED_OPTIONS = [
  { label: 'All breeds', value: 'all' },
  { label: 'Maltipoo', value: 'maltipoo' },
  { label: 'Pomeranian', value: 'pomeranian' },
  { label: 'Cavapoo', value: 'cavapoo' },
  { label: 'Poodle', value: 'poodle' },
  { label: 'Shih Tzu', value: 'shih-tzu' },
  { label: 'Pomsky', value: 'pomsky' },
  { label: 'Bichon', value: 'bichon' },
  { label: 'Maltese', value: 'maltese' }
];

const ORIGIN_OPTIONS = [
  { label: 'All', value: 'all' },
  { label: 'In Dubai', value: 'local' },
  { label: 'Imported', value: 'imported' }
];

const GENDER_OPTIONS = [
  { label: 'All', value: 'all' },
  { label: 'Boy', value: 'male' },
  { label: 'Girl', value: 'female' }
];

export const PuppyFilters: React.FC<PuppyFiltersProps> = ({ puppies }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentBreed = searchParams.get('breed') || 'all';
  const currentOrigin = searchParams.get('origin') || 'all';
  const currentGender = searchParams.get('gender') || 'all';

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const resetFilters = () => {
    router.replace(pathname, { scroll: false });
  };

  const filteredPuppies = useMemo(() => {
    return puppies.filter((p) => {
      // Origin filter
      if (currentOrigin !== 'all') {
        if (currentOrigin === 'local' && p.origin?.slug === 'imported') return false;
        if (currentOrigin === 'imported' && p.origin?.slug !== 'imported') return false;
      }

      // Gender filter
      if (currentGender !== 'all') {
        if (p.gender !== currentGender) return false;
      }

      // Breed filter
      if (currentBreed !== 'all') {
        const breedSlug = p.breed.toLowerCase().replace(/\s+/g, '-');
        if (!breedSlug.includes(currentBreed) && !p.slug.includes(currentBreed)) {
          return false;
        }
      }

      return true;
    });
  }, [puppies, currentBreed, currentOrigin, currentGender]);

  const hasActiveFilters = currentBreed !== 'all' || currentOrigin !== 'all' || currentGender !== 'all';

  return (
    <div>
      {/* Interactive Filter Pills Bar */}
      <div className="mb-10 rounded-[2.5rem] border-[3px] border-[#2a170e] bg-[#fffdf8] p-5 sm:p-7 shadow-md">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-6">
            {/* Origin Filters */}
            <div>
              <span className="font-scrawl text-xs font-bold text-[#c2622b] block mb-2">Location</span>
              <div className="inline-flex rounded-full border-2 border-[#2a170e] p-1 bg-[#fdfaf4]">
                {ORIGIN_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => updateFilter('origin', opt.value)}
                    className={`rounded-full px-3.5 py-1 text-xs font-bold transition-all ${
                      currentOrigin === opt.value
                        ? 'bg-[#2a170e] text-white shadow-xs'
                        : 'text-[#2a170e] hover:bg-[#fbe3b4]/60'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Gender Filters */}
            <div>
              <span className="font-scrawl text-xs font-bold text-[#c2622b] block mb-2">Gender</span>
              <div className="inline-flex rounded-full border-2 border-[#2a170e] p-1 bg-[#fdfaf4]">
                {GENDER_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => updateFilter('gender', opt.value)}
                    className={`rounded-full px-3.5 py-1 text-xs font-bold transition-all ${
                      currentGender === opt.value
                        ? 'bg-[#2a170e] text-white shadow-xs'
                        : 'text-[#2a170e] hover:bg-[#fbe3b4]/60'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Breed Filters */}
            <div>
              <span className="font-scrawl text-xs font-bold text-[#c2622b] block mb-2">Breed</span>
              <select
                value={currentBreed}
                onChange={(e) => updateFilter('breed', e.target.value)}
                className="rounded-full border-2 border-[#2a170e] bg-[#fdfaf4] px-4 py-1.5 text-xs font-bold text-[#2a170e] focus:border-[#c2622b] focus:outline-none"
              >
                {BREED_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Matches Counter & Reset */}
          <div className="flex items-center justify-between lg:justify-end gap-4 border-t lg:border-t-0 border-[#2a170e]/10 pt-4 lg:pt-0">
            <span className="font-plush text-sm font-bold text-[#2a170e]">
              <strong className="text-lg text-[#c2622b]">{filteredPuppies.length}</strong> {filteredPuppies.length === 1 ? 'puppy waiting' : 'puppies waiting'}
            </span>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 text-xs font-scrawl font-bold text-[#c2622b] hover:underline"
              >
                <RotateCcw className="size-3.5" />
                <span>Reset filters</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Puppies Grid */}
      {filteredPuppies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredPuppies.map((pup, index) => (
            <PuppyCard key={pup.slug} puppy={pup} tiltIndex={index} />
          ))}
        </div>
      ) : (
        <div className="rounded-[2.5rem] border-[3px] border-dashed border-[#2a170e]/30 p-16 text-center bg-[#fffdf8]">
          <Filter className="size-12 text-[#c2622b] mx-auto mb-3" />
          <h3 className="font-plush text-2xl font-bold text-[#2a170e]">No puppies match these filters</h3>
          <p className="font-scrawl text-sm text-[#2a170e]/70 mt-1">
            Try choosing a different breed or location, or reset filters to see all available puppies.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2a170e] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#c2622b] transition-colors"
          >
            <span>Show all available puppies</span>
          </button>
        </div>
      )}
    </div>
  );
};
