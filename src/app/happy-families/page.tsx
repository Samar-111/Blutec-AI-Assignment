'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { HAPPY_FAMILIES_PHOTOS } from '@/data/happyFamilies';
import { LightboxModal } from '@/components/LightboxModal';
import { HeartIcon } from '@/components/Icons';
import { Camera, Heart, Sparkles } from 'lucide-react';

const TILTS = ['-1.5deg', '1deg', '-0.8deg', '1.4deg', '-1.2deg', '0.6deg'];

export default function HappyFamiliesPage() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % HAPPY_FAMILIES_PHOTOS.length);
  };

  const handlePrev = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex(
      (selectedPhotoIndex - 1 + HAPPY_FAMILIES_PHOTOS.length) % HAPPY_FAMILIES_PHOTOS.length
    );
  };

  return (
    <div className="gutter mx-auto max-w-[110rem] px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      {/* Header & Featured Review */}
      <div className="grid gap-10 lg:grid-cols-12 items-start mb-16">
        <div className="lg:col-span-7">
          <span className="font-scrawl text-lg text-[#c2622b]">our wall of happy endings</span>
          <h1 className="font-plush text-4xl sm:text-6xl font-bold tracking-tight text-[#2a170e] mt-1 mb-4 flex items-center gap-3">
            <span>Happy families</span>
            <Heart className="size-8 sm:size-10 text-[#c2622b] fill-[#c2622b]/20" />
          </h1>
          <p className="text-[#2a170e]/80 text-base sm:text-lg leading-relaxed max-w-xl">
            Nothing makes us happier than seeing our puppies in loving homes! Here are some beautiful moments shared by our amazing clients after welcoming their furry friends.
          </p>
          <p className="font-scrawl text-lg text-[#c2622b] mt-4 font-bold">
            {HAPPY_FAMILIES_PHOTOS.length} moments and counting ♥
          </p>
        </div>

        {/* Pinned Scotch-Tape Testimonial Note */}
        <div className="lg:col-span-5 relative rounded-3xl border-2 border-[#2a170e] bg-[#fdfaf4] p-6 sm:p-8 shadow-md rotate-1">
          {/* Tape strip */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#cfe5f6]/80 -rotate-2 border border-[#2a170e]/20 shadow-xs" />

          <blockquote className="font-plush text-base sm:text-lg italic text-[#2a170e] leading-relaxed">
            “TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.”
          </blockquote>
          <p className="font-scrawl text-sm text-[#c2622b] mt-4 text-right">
            — Sarah M., Dubai, UAE
          </p>
        </div>
      </div>

      {/* 64-Photo Gallery Wall */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
        {HAPPY_FAMILIES_PHOTOS.map((photo, index) => {
          const tilt = TILTS[index % TILTS.length];
          return (
            <div
              key={photo.id || index}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group cursor-pointer rounded-2xl border-2 border-[#2a170e] bg-white p-2.5 pb-4 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ transform: `rotate(${tilt})` }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#fbe3b4]/30">
                <img
                  src={photo.url}
                  alt={photo.alt || `Happy family photo ${index + 1}`}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="size-6 text-white drop-shadow-md" />
                </div>
              </div>
              <p className="font-scrawl text-center text-xs text-[#2a170e]/70 mt-2 truncate px-1">
                TeddyPups Family #{index + 1}
              </p>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        photos={HAPPY_FAMILIES_PHOTOS}
        currentIndex={selectedPhotoIndex}
        onClose={() => setSelectedPhotoIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
