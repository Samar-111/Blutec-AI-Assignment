import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FooterHill, WhatsAppIcon, PawIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="tp-footer relative bg-[#2a170e] pb-[calc(var(--bar-h)+2rem)] text-[#fffdf8] md:pb-12 pt-16 mt-20">
      <div className="absolute -top-12 left-0 right-0 overflow-hidden leading-none text-[#2a170e]">
        <FooterHill className="w-full h-12" />
      </div>

      <div className="gutter mx-auto max-w-[110rem] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="relative size-12 overflow-hidden rounded-full border-2 border-honey bg-milk p-1">
                <Image
                  src="/brand/logo.png"
                  alt="TeddyPups logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-plush text-2xl font-bold tracking-tight text-white">
                  TeddyPups U.A.E.
                </p>
                <p className="font-scrawl text-sm text-[#ffd27f]">
                  every puppy is family
                </p>
              </div>
            </div>

            <p className="text-sm md:text-base leading-relaxed text-[#fffdf8]/80 max-w-md">
              Home, at last. TeddyPups U.A.E. is a Dubai-based boutique specializing in ethically raised miniature teacup puppies, offering luxury showroom consultations, certified veterinary guarantees, and white-glove worldwide shipping.
            </p>

            <div className="flex items-center gap-4 text-xs font-scrawl text-[#ffd27f]">
              <span className="flex items-center gap-1.5">
                <PawIcon className="size-3.5" /> Downtown Dubai Showroom
              </span>
              <span>·</span>
              <span>Official Pedigrees</span>
              <span>·</span>
              <span>24/7 Care</span>
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-3">
            <h3 className="font-scrawl text-lg font-bold text-[#ffd27f] mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-[#fffdf8]/90">
              <li>
                <Link href="/puppies" className="hover:text-[#ffd27f] transition-colors">
                  Available puppies
                </Link>
              </li>
              <li>
                <Link href="/happy-families" className="hover:text-[#ffd27f] transition-colors">
                  Happy families
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-[#ffd27f] transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/how-it-works#delivery" className="hover:text-[#ffd27f] transition-colors">
                  Delivery & collection
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#ffd27f] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#ffd27f] transition-colors">
                  Visit & contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Say Hello / Contact */}
          <div className="lg:col-span-4">
            <h3 className="font-scrawl text-lg font-bold text-[#ffd27f] mb-4">
              Say hello
            </h3>
            <ul className="space-y-3 text-sm text-[#fffdf8]/90">
              <li>
                <a
                  href="https://wa.me/919898124987?text=Hi%20Insta%20Biz%20Web%2C%20I'd%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#ffd27f] transition-colors"
                >
                  <WhatsAppIcon className="size-4 text-[#0f764a]" />
                  <span>WhatsApp: +971 50 000 0000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@instabizweb.com"
                  className="hover:text-[#ffd27f] transition-colors"
                >
                  Email: info@instabizweb.com
                </a>
              </li>
              <li className="text-[#fffdf8]/75">
                Location: Downtown Dubai, United Arab Emirates
              </li>
              <li className="pt-2">
                <span className="font-scrawl text-xs text-[#ffd27f] block mb-2">Connect with us</span>
                <div className="flex gap-4">
                  <a href="https://www.instabizweb.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffd27f] transition-colors">Instagram</a>
                  <a href="https://www.instabizweb.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffd27f] transition-colors">TikTok</a>
                  <a href="https://www.instabizweb.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffd27f] transition-colors">Facebook</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#fffdf8]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#fffdf8]/60">
          <p>© 2026 TeddyPups U.A.E. · every puppy is family</p>
          <p className="font-scrawl">Crafted with love for puppy lovers</p>
        </div>
      </div>
    </footer>
  );
};
