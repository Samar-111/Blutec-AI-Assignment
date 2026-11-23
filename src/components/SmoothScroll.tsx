'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Only initialize on desktop or pointer devices that support hover
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.85,
      prevent: (node) => !!node.closest?.('dialog, [data-lenis-prevent]'),
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    // Scroll lock event listener
    const handleLock = (e: Event) => {
      const custom = e as CustomEvent<{ locked: boolean }>;
      if (custom.detail?.locked) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };
    window.addEventListener('tp:lock-scroll', handleLock);

    // Scroll reveal observer
    const reveals = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('tp:lock-scroll', handleLock);
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
