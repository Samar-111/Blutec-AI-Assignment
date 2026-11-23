import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BOARDING_PASSES } from '@/data/tickets';
import { BoardingPassCard } from '@/components/BoardingPassCard';
import { PawIcon, WhatsAppIcon } from '@/components/Icons';
import { Plane, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gone Home | TeddyPups U.A.E.',
  description: 'Celebrating all our adopted teacup puppies who have safely landed with loving families across Dubai and worldwide.',
};

export default function GoneHomePage() {
  return (
    <div className="gutter mx-auto max-w-[110rem] px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      {/* Booth Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="font-scrawl text-lg text-[#c2622b] inline-flex items-center gap-1.5">
          <Plane className="size-4" /> boarding passes to forever homes
        </span>
        <h1 className="font-plush text-4xl sm:text-6xl font-bold tracking-tight text-[#2a170e] mt-1 mb-4">
          Gone home
        </h1>
        <p className="text-[#2a170e]/80 text-base sm:text-lg leading-relaxed">
          Every boarding pass below represents a happy tail, a loving home, and a lifelong friendship. Here are some of our proud graduates who have safely settled in with their families.
        </p>
      </div>

      {/* Boarding Passes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BOARDING_PASSES.map((ticket, index) => (
          <BoardingPassCard key={ticket.slug || index} ticket={ticket} index={index} />
        ))}
      </div>

      {/* Bottom Adoption Request Callout */}
      <div className="mt-20 rounded-[2.5rem] border-[3px] border-[#2a170e] bg-[#fbe3b4]/40 p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-md">
        <Heart className="size-10 text-[#c2622b] mx-auto mb-3 fill-[#c2622b]/20" />
        <h2 className="font-plush text-3xl font-bold text-[#2a170e]">
          Looking for a puppy like one of these?
        </h2>
        <p className="text-sm sm:text-base text-[#2a170e]/80 mt-2 max-w-xl mx-auto leading-relaxed">
          Even if your favorite puppy has already gone home, we regularly welcome new litters and can custom source rare breeds from certified Korean and European lines.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/puppies"
            className="rounded-full bg-[#2a170e] px-7 py-3 font-plush text-sm font-bold text-white hover:bg-[#c2622b] transition-colors"
          >
            <span>View currently available pups</span>
          </Link>
          <a
            href="https://wa.me/919898124987?text=Hi%20TeddyPups%2C%20I%20saw%20a%20puppy%20on%20Gone%20Home%20and%20would%20like%20to%20request%20a%20similar%20one."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp inline-flex items-center gap-2 rounded-full bg-[#0f764a] px-7 py-3 font-plush text-sm font-bold text-white hover:bg-[#0c5e3b] transition-colors"
          >
            <WhatsAppIcon className="size-4" />
            <span>Request on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
