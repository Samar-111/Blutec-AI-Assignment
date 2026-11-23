import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Puppy } from '../types';
import { PawIcon } from './Icons';

interface PuppyCardProps {
  puppy: Puppy;
  tiltIndex?: number;
}

const TILT_ANGLES = ['-0.8deg', '0.6deg', '-1.2deg', '0.9deg', '-0.5deg', '1.1deg'];

export const PuppyCard: React.FC<PuppyCardProps> = ({ puppy, tiltIndex = 0 }) => {
  const tilt = TILT_ANGLES[tiltIndex % TILT_ANGLES.length];
  const isAvailable = puppy.status === 'available';
  const coverUrl = puppy.cover?.url || (puppy.media && puppy.media[0]?.url) || '/brand/logo.png';

  return (
    <div
      className="tp-sketch group relative flex flex-col overflow-hidden rounded-[2rem] border-[3px] border-[#2a170e] bg-[#fffdf8] p-3 sm:p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ '--tilt': tilt } as React.CSSProperties}
    >
      {/* Photo Frame */}
      <Link href={`/puppies/${puppy.slug}`} className="relative block aspect-[4/5] w-full overflow-hidden rounded-[1.4rem] bg-[#fbe3b4]/30">
        <Image
          src={coverUrl}
          alt={puppy.cover?.alt || `${puppy.name}, ${puppy.breed}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Status & Origin Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className={`rounded-full px-2.5 py-1 text-xs font-bold shadow-sm ${
            puppy.origin?.slug === 'imported'
              ? 'bg-[#fbe3b4] text-[#2a170e]'
              : 'bg-[#fffdf8] text-[#2a170e] border border-[#2a170e]/20'
          }`}>
            {puppy.origin?.name || 'In Dubai'}
          </span>
          <span className="rounded-full bg-[#2a170e]/85 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-xs">
            {puppy.genderLabel || (puppy.gender === 'female' ? 'Girl' : 'Boy')}
          </span>
        </div>

        {/* Age pill */}
        <div className="absolute bottom-3 right-3 rounded-full bg-[#fffdf8]/90 px-2.5 py-0.5 text-xs font-bold text-[#2a170e] shadow-xs backdrop-blur-xs">
          {puppy.age || '3 months'}
        </div>
      </Link>

      {/* Info Section */}
      <div className="mt-4 flex flex-1 flex-col justify-between px-1 pb-1">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-plush text-xl font-bold tracking-tight text-[#2a170e] group-hover:text-[#c2622b] transition-colors">
              <Link href={`/puppies/${puppy.slug}`}>
                {puppy.displayName || puppy.name}
              </Link>
            </h3>
            {isAvailable ? (
              <span className="flex items-center gap-1 text-xs font-bold text-[#0f764a]">
                <span className="size-2 rounded-full bg-[#0f764a] animate-pulse"></span>
                Available
              </span>
            ) : (
              <span className="text-xs font-bold text-[#c2622b]">
                Adopted ♥
              </span>
            )}
          </div>
          <p className="font-scrawl text-sm text-[#2a170e]/75 mt-0.5">
            {puppy.breed}
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-4 pt-3 border-t border-[#2a170e]/10 flex items-center justify-between">
          <span className="font-scrawl text-xs text-[#c2622b]">
            View Story
          </span>
          <Link
            href={`/puppies/${puppy.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#2a170e] px-4 py-1.5 text-xs font-bold text-white transition-transform group-hover:bg-[#c2622b] group-hover:scale-105"
          >
            <span>Meet {puppy.name.split(' ')[0]}</span>
            <PawIcon className="size-3 text-[#ffd27f]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
