import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { MeetSection } from '@/components/home/MeetSection';
import { PathsSection } from '@/components/home/PathsSection';
import { ChatSection } from '@/components/home/ChatSection';
import { PassportSection } from '@/components/home/PassportSection';
import { DuskSection } from '@/components/home/DuskSection';
import { NightSection } from '@/components/home/NightSection';
import { HomeSection } from '@/components/home/HomeSection';
import { PupActor } from '@/components/home/PupActor';

export const metadata: Metadata = {
  title: 'TeddyPups U.A.E. — Premium teacup puppies in Dubai',
  description: 'Meet miniature teacup puppies in our Downtown Dubai showroom, or reserve rare Korean & European lines through our white-glove cargo service. Every puppy is family.',
};

export default function HomePage() {
  return (
    <div className="tp-page" data-page="home">
      <HeroSection />
      <MeetSection />
      <PathsSection />
      <ChatSection />
      <PassportSection />
      <DuskSection />
      <NightSection />
      <HomeSection />
      <PupActor />
    </div>
  );
}
