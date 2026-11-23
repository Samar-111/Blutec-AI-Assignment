import React from 'react';
import { WhatsAppIcon } from './Icons';
import { Phone } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-[#2a170e] bg-[#fffdf8] px-3 pb-[calc(0.6rem+env(safe-area-inset-bottom))] pt-2.5 md:hidden shadow-lg">
      <div className="mx-auto flex max-w-md gap-2">
        <a
          href="https://wa.me/919898124987?text=Hi%20Insta%20Biz%20Web%2C%20I'd%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#0f764a] py-2.5 text-sm font-bold text-white shadow-sm active:scale-95 transition-transform"
        >
          <WhatsAppIcon className="size-4" />
          <span>WhatsApp</span>
        </a>
        <a
          href="tel:+971500000000"
          className="flex-1 flex items-center justify-center gap-2 rounded-full border-2 border-[#2a170e] bg-transparent py-2.5 text-sm font-bold text-[#2a170e] active:scale-95 transition-transform"
        >
          <Phone className="size-4" />
          <span>Call Us</span>
        </a>
      </div>
    </div>
  );
};
