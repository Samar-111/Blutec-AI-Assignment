'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { HappyFamilyPhoto } from '../types';

interface LightboxModalProps {
  photos: HappyFamilyPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photos,
  currentIndex,
  onClose,
  onNext,
  onPrev
}) => {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [currentIndex, onClose, onNext, onPrev]);

  if (currentIndex === null || !photos[currentIndex]) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close photo"
        className="absolute top-5 right-5 z-10 rounded-full bg-white/20 p-2 text-white hover:bg-white/40 transition-colors"
      >
        <X className="size-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        aria-label="Previous photo"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 p-3 text-white hover:bg-white/40 transition-colors"
      >
        <ChevronLeft className="size-7" />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        aria-label="Next photo"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 p-3 text-white hover:bg-white/40 transition-colors"
      >
        <ChevronRight className="size-7" />
      </button>

      {/* Center Image Container */}
      <div className="relative max-h-[85vh] max-w-[90vw] flex flex-col items-center">
        <div className="relative max-h-[80vh] max-w-[85vw] overflow-hidden rounded-2xl shadow-2xl border-4 border-white/90">
          <img
            src={currentPhoto.url}
            alt={currentPhoto.alt || `Happy family photo ${currentIndex + 1}`}
            className="max-h-[80vh] max-w-[85vw] object-contain"
          />
        </div>

        {/* Caption & Counter */}
        <div className="mt-3 text-center text-white">
          <p className="font-scrawl text-lg text-[#ffd27f]">
            {currentPhoto.alt || 'Happy TeddyPups family'}
          </p>
          <p className="text-xs text-white/70">
            Photo {currentIndex + 1} of {photos.length}
          </p>
        </div>
      </div>
    </div>
  );
};
