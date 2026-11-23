'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PawIcon, WhatsAppIcon } from '@/components/Icons';
import { MapPin, Plane, ShieldCheck, Truck, Clock, Heart, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState<'dubai' | 'imported'>('dubai');

  return (
    <div className="gutter mx-auto max-w-[110rem] px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-20">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="font-scrawl text-lg text-[#c2622b] inline-flex items-center gap-1.5">
          <PawIcon className="size-4" /> transparent, ethical & loving
        </span>
        <h1 className="font-plush text-4xl sm:text-6xl font-bold tracking-tight text-[#2a170e] mt-1 mb-4">
          How it works
        </h1>
        <p className="text-[#2a170e]/80 text-base sm:text-lg leading-relaxed">
          Bringing a puppy into your family is a momentous decision. We have made every step transparent, ethical, and joy-filled.
        </p>
      </div>

      {/* Interactive Path Tabs */}
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full border-2 border-[#2a170e] bg-[#fdfaf4] p-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveTab('dubai')}
              className={`flex items-center gap-2 rounded-full px-6 py-3 font-plush text-sm sm:text-base font-bold transition-all ${
                activeTab === 'dubai'
                  ? 'bg-[#2a170e] text-white shadow-md'
                  : 'text-[#2a170e] hover:bg-[#fbe3b4]/50'
              }`}
            >
              <MapPin className="size-4" />
              <span>In Dubai — Meet in person</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('imported')}
              className={`flex items-center gap-2 rounded-full px-6 py-3 font-plush text-sm sm:text-base font-bold transition-all ${
                activeTab === 'imported'
                  ? 'bg-[#2a170e] text-white shadow-md'
                  : 'text-[#2a170e] hover:bg-[#fbe3b4]/50'
              }`}
            >
              <Plane className="size-4" />
              <span>Imported — Order upon request</span>
            </button>
          </div>
        </div>

        {/* Tab 1 Content: In Dubai */}
        {activeTab === 'dubai' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h2 className="font-plush text-2xl sm:text-3xl font-bold text-[#2a170e]">
                Meet your puppy in person in Downtown Dubai
              </h2>
              <p className="font-scrawl text-sm text-[#c2622b] mt-1">
                same-day take-home available
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  step: '01',
                  title: 'Explore our puppies',
                  desc: 'Browse our currently available puppies in Dubai. View actual high-resolution photos, real videos, breed details, and ages.'
                },
                {
                  step: '02',
                  title: 'Choose your puppy',
                  desc: 'Find the one that steals your heart. Contact us on WhatsApp or book a visit directly to our Downtown showroom.'
                },
                {
                  step: '03',
                  title: 'Meet before you choose',
                  desc: 'Visit our private bonding rooms. Sit down, cuddle the puppy, observe their personality, and review complete veterinary health books.'
                },
                {
                  step: '04',
                  title: 'Pick-up or delivery',
                  desc: 'Take your puppy home the very same day! Or arrange convenient white-glove chauffeur delivery to your doorstep across Dubai.'
                }
              ].map((item) => (
                <div key={item.step} className="rounded-3xl border-2 border-[#2a170e] bg-[#fffdf8] p-6 sm:p-8 shadow-sm">
                  <span className="font-plush text-3xl font-bold text-[#c2622b]">{item.step}</span>
                  <h3 className="font-plush text-xl font-bold text-[#2a170e] mt-2 mb-2">{item.title}</h3>
                  <p className="text-sm text-[#2a170e]/80 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2 Content: Imported */}
        {activeTab === 'imported' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h2 className="font-plush text-2xl sm:text-3xl font-bold text-[#2a170e]">
                Order upon request from certified global breeders
              </h2>
              <p className="font-scrawl text-sm text-[#c2622b] mt-1">
                Korean teacup lines & rare European varieties
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  step: '01',
                  title: 'Reserve your puppy',
                  desc: 'Tell us your dream breed, gender, coat shade, and target adult weight. We tap into our certified ethical breeder network in Korea and Europe.'
                },
                {
                  step: '02',
                  title: 'Personalized consultation',
                  desc: 'Receive unfiltered videos, photos, and pre-departure veterinary clearances. You approve the exact puppy before any travel commences.'
                },
                {
                  step: '03',
                  title: 'Import & flight cargo arrival',
                  desc: 'Our team handles import permits, customs clearance, and pet passport logistics with temperature-controlled airline flight cargo.'
                },
                {
                  step: '04',
                  title: 'Welcome home',
                  desc: 'Meet your new puppy at our Downtown showroom or have our flight nanny escort them straight to your home across the UAE.'
                }
              ].map((item) => (
                <div key={item.step} className="rounded-3xl border-2 border-[#2a170e] bg-[#fffdf8] p-6 sm:p-8 shadow-sm">
                  <span className="font-plush text-3xl font-bold text-[#c2622b]">{item.step}</span>
                  <h3 className="font-plush text-xl font-bold text-[#2a170e] mt-2 mb-2">{item.title}</h3>
                  <p className="text-sm text-[#2a170e]/80 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Section: Premium Puppy Promise */}
      <section className="rounded-[2.5rem] border-[3px] border-[#2a170e] bg-[#fbe3b4]/40 p-8 sm:p-14">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-scrawl text-lg text-[#c2622b]">unmatched peace of mind</p>
          <h2 className="font-plush text-3xl sm:text-4xl font-bold text-[#2a170e] mt-1">
            Our premium puppy promise
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          <div className="rounded-3xl border-2 border-[#2a170e] bg-white p-6 shadow-sm">
            <ShieldCheck className="size-10 text-[#0f764a] mb-4" />
            <h3 className="font-plush text-xl font-bold text-[#2a170e] mb-2">Health Guarantee</h3>
            <p className="text-sm text-[#2a170e]/80 leading-relaxed">
              Every puppy is backed by a contractual health guarantee against congenital and infectious conditions, verified by certified vets.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-[#2a170e] bg-white p-6 shadow-sm">
            <CheckCircle2 className="size-10 text-[#c2622b] mb-4" />
            <h3 className="font-plush text-xl font-bold text-[#2a170e] mb-2">Vaccinated & Microchipped</h3>
            <p className="text-sm text-[#2a170e]/80 leading-relaxed">
              Up-to-date core vaccinations, deworming, registered international microchip, and accredited pet passport included.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-[#2a170e] bg-white p-6 shadow-sm">
            <Clock className="size-10 text-[#2a170e] mb-4" />
            <h3 className="font-plush text-xl font-bold text-[#2a170e] mb-2">24/7 Lifelong Care</h3>
            <p className="text-sm text-[#2a170e]/80 leading-relaxed">
              Our team of care specialists is available around the clock to support you with feeding, nutrition, training, and vet tips.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Delivery & Collection */}
      <section id="delivery" className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-scrawl text-lg text-[#c2622b]">convenient & safe transit</p>
          <h2 className="font-plush text-3xl sm:text-4xl font-bold text-[#2a170e] mt-1">
            Delivery & collection
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Showroom Pick-Up',
              desc: 'Collect your puppy in person from our Downtown Dubai boutique immediately upon adoption.',
              icon: MapPin
            },
            {
              title: 'Dubai Chauffeur',
              desc: 'Complimentary or white-glove climate-controlled vehicle delivery across Dubai.',
              icon: Truck
            },
            {
              title: 'UAE Doorstep',
              desc: 'Personal delivery to Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, and Fujairah.',
              icon: Heart
            },
            {
              title: 'Worldwide Cargo',
              desc: 'Certified IATA pet cargo shipping to Saudi Arabia, Qatar, Kuwait, Bahrain, and global hubs.',
              icon: Plane
            }
          ].map((mode, i) => {
            const Icon = mode.icon;
            return (
              <div key={i} className="rounded-3xl border-2 border-[#2a170e] bg-[#fffdf8] p-6 shadow-sm">
                <Icon className="size-8 text-[#c2622b] mb-3" />
                <h3 className="font-plush text-lg font-bold text-[#2a170e] mb-1">{mode.title}</h3>
                <p className="text-xs sm:text-sm text-[#2a170e]/80 leading-relaxed">{mode.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="text-center pt-6">
        <Link
          href="/puppies"
          className="inline-flex items-center gap-2 rounded-full bg-[#2a170e] px-8 py-4 font-plush text-base font-bold text-white shadow-md hover:bg-[#c2622b] transition-transform hover:scale-105"
        >
          <span>Meet available puppies</span>
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
