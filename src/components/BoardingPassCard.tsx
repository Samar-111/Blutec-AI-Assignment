import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Ticket } from '../types';
import { Plane, Heart } from 'lucide-react';

interface BoardingPassCardProps {
  ticket: Ticket;
  index?: number;
}

const ROTATIONS = ['rotate-[-1.4deg]', 'rotate-[1.1deg]', 'rotate-[-0.6deg]', 'rotate-[1.6deg]', 'rotate-[-1.1deg]', 'rotate-[0.8deg]'];

export const BoardingPassCard: React.FC<BoardingPassCardProps> = ({ ticket, index = 0 }) => {
  const rot = ROTATIONS[index % ROTATIONS.length];

  return (
    <div className={`tp-ticket group relative flex flex-col md:flex-row overflow-hidden rounded-3xl border-2 border-[#2a170e] bg-[#fffdf8] shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${rot}`}>
      {/* Main Ticket Body */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
        <div>
          {/* Top Ticket Header */}
          <div className="flex items-center justify-between border-b border-dashed border-[#2a170e]/20 pb-3">
            <span className="font-scrawl text-xs uppercase tracking-wider text-[#c2622b] flex items-center gap-1.5">
              <Plane className="size-3.5" /> one ticket home
            </span>
            <span className="font-mono text-xs font-bold text-[#2a170e]/60">
              DXB-TP{String(index + 101).padStart(3, '0')}
            </span>
          </div>

          {/* Center Info */}
          <div className="mt-4 flex items-center gap-4">
            <div className="relative size-20 sm:size-24 shrink-0 overflow-hidden rounded-2xl border-2 border-[#2a170e] bg-[#fbe3b4]/40">
              <Image
                src={ticket.image || '/brand/logo.png'}
                alt={`${ticket.name}, ${ticket.breed}`}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div>
              <h3 className="font-plush text-2xl font-bold tracking-tight text-[#2a170e]">
                <Link href={`/puppies/${ticket.slug}`} className="hover:text-[#c2622b] transition-colors">
                  {ticket.name}
                </Link>
              </h3>
              <p className="font-scrawl text-sm text-[#2a170e]/80 mt-0.5">
                {ticket.breed}
              </p>
              <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#fbe3b4] px-2.5 py-0.5 text-xs font-bold text-[#2a170e]">
                <span>{ticket.location || 'TeddyPups'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Route & Stamp */}
        <div className="mt-5 pt-3 border-t border-dashed border-[#2a170e]/20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0f764a]">
            <Heart className="size-3.5 fill-[#0f764a]" />
            <span>Happily adopted & home ♥</span>
          </div>
          <Link
            href={`/puppies/${ticket.slug}`}
            className="text-xs font-scrawl font-bold text-[#c2622b] underline decoration-dashed hover:text-[#2a170e]"
          >
            view story
          </Link>
        </div>
      </div>

      {/* Perforation Divider Line */}
      <div className="relative border-t-2 md:border-t-0 md:border-l-2 border-dashed border-[#2a170e]/30 flex items-center justify-center bg-[#fdfaf4] px-4 py-3 md:py-0 md:w-28 shrink-0">
        <div className="flex flex-row md:flex-col items-center justify-between w-full h-full gap-2">
          <span className="font-plush text-xs font-bold uppercase tracking-widest text-[#2a170e]/70">
            admit one
          </span>
          {/* Barcode Graphic */}
          <div className="flex gap-0.5 h-8 md:h-12 items-end">
            {[4, 2, 5, 1, 3, 2, 4, 1, 5, 2, 3, 1, 4].map((h, i) => (
              <span key={i} className="w-1 bg-[#2a170e]" style={{ height: `${h * 6}px` }} />
            ))}
          </div>
          <span className="font-scrawl text-[10px] text-[#c2622b]">
            TeddyPups
          </span>
        </div>
      </div>
    </div>
  );
};
