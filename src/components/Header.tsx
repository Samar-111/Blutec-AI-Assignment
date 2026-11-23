'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { PawIcon, WhatsAppIcon } from './Icons';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Puppies', href: '/puppies' },
  { label: 'Happy families', href: '/happy-families' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Visit & contact', href: '/contact' }
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`tp-header fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-milk/95 shadow-md backdrop-blur-md' : 'bg-milk/80 backdrop-blur-sm'}`}>
      <div className="gutter mx-auto flex h-[var(--header-h)] max-w-[110rem] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="tp-header__brand flex items-center gap-3 rounded-full flex-none"
          aria-label="TeddyPups U.A.E. — home"
        >
          <div className="relative size-10 md:size-11 flex-shrink-0">
            <Image
              src="/brand/logo.png"
              alt="TeddyPups logo"
              width={48}
              height={48}
              className="tp-header__logo object-contain transition-transform hover:-rotate-8"
              priority
            />
          </div>
          <span
            className="tp-header__name font-bold tracking-tight leading-none"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-fraunces, 'Fraunces', serif)",
              color: "#2a170e",
              fontVariationSettings: "normal",
            }}
          >
            TeddyPups
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden lg:flex tp-header__nav">
          <ul className="flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    data-active={isActive ? "true" : undefined}
                    aria-current={isActive ? 'page' : undefined}
                    className={`tp-nav-link relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.95rem] font-semibold transition-colors ${
                      isActive ? 'text-cocoa font-bold' : 'text-cocoa/80 hover:text-cocoa hover:bg-honey/30'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <PawIcon className="tp-nav-link__paw size-3.5 text-toffee-ink" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://wa.me/919898124987?text=Hi%20Insta%20Biz%20Web%2C%20I'd%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp hidden sm:inline-flex items-center gap-2 rounded-full bg-[#0f764a] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#0c5e3b] transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="size-4" />
            <span>WhatsApp us</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center gap-1.5 rounded-full border border-cocoa/20 bg-honey/40 px-3.5 py-2 text-sm font-bold text-cocoa lg:hidden hover:bg-honey transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="font-scrawl text-xs">{mobileMenuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[var(--header-h)] z-50 border-b border-cocoa/10 bg-milk/98 px-6 pb-8 pt-4 shadow-2xl backdrop-blur-xl lg:hidden animate-in slide-in-from-top-4 duration-200">
          <p className="font-scrawl text-sm text-toffee-ink mb-3">where to, friend?</p>
          <ul className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-lg font-semibold transition-colors ${
                      isActive ? 'bg-honey/50 text-cocoa font-bold' : 'text-cocoa/80 hover:bg-honey/20'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <PawIcon className="size-4 text-toffee-ink" />}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 pt-6 border-t border-cocoa/10 flex flex-col gap-3">
            <a
              href="https://wa.me/919898124987?text=Hi%20Insta%20Biz%20Web%2C%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#0f764a] py-3.5 font-bold text-white shadow-md active:scale-95 transition-transform"
            >
              <WhatsAppIcon className="size-5" />
              <span>WhatsApp Us Now</span>
            </a>
            <a
              href="tel:+971500000000"
              className="flex items-center justify-center gap-2 rounded-2xl border-2 border-cocoa/20 py-3 font-bold text-cocoa active:scale-95 transition-transform"
            >
              <span>Call: +971 50 000 0000</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
