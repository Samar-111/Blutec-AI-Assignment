import React from 'react';
import type { Metadata } from 'next';
import '../styles/globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileBottomBar } from '@/components/MobileBottomBar';
import { PawTrailCanvas } from '@/components/PawTrailCanvas';
import { RouteCurtain } from '@/components/RouteCurtain';
import { SmoothScroll } from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'TeddyPups U.A.E. — Premium teacup puppies in Dubai',
  description: 'Meet miniature teacup puppies in our Downtown Dubai showroom, or reserve rare Korean & European lines through our white-glove cargo service. Every puppy is family.',
  icons: {
    icon: '/brand/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="/css/original.css" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#fffdf8] text-[#2a170e] antialiased selection:bg-[#fbe3b4] selection:text-[#2a170e]">
        {/* Intro Curtain Splash Blanket */}
        <RouteCurtain />

        {/* Skip to Content Accessibility link */}
        <a
          href="#main"
          className="sr-only-focusable fixed left-4 top-4 z-[100] rounded-full bg-[#2a170e] px-5 py-3 font-semibold text-[#fffdf8] focus:not-sr-only"
        >
          Skip to content
        </a>

        {/* Smooth Scrolling Provider */}
        <SmoothScroll>
          {/* Global Navigation Header */}
          <Header />

          {/* Main Content Area */}
          <main id="main" className="flex-1 pt-[var(--header-h)] outline-none">
            {children}
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Mobile Quick Action Sticky Bar */}
          <MobileBottomBar />
        </SmoothScroll>

        {/* Mouse Pointer Paw Prints Canvas Trail */}
        <PawTrailCanvas />
      </body>
    </html>
  );
}
