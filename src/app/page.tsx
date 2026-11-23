import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AVAILABLE_PUPPIES } from '@/data/puppies';
import { PuppyCard } from '@/components/PuppyCard';
import { FAQAccordion } from '@/components/FAQAccordion';
import { PawIcon, WhatsAppIcon, HeartIcon } from '@/components/Icons';
import { ShieldCheck, Heart, Plane, MapPin, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const featuredPuppies = AVAILABLE_PUPPIES.slice(0, 8);

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. Hero Section */}
      <section className="tp-scene tp-hero relative overflow-hidden pt-8 sm:pt-14 pb-16">
        <div className="gutter mx-auto max-w-[110rem] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#2a170e] bg-[#fbe3b4] px-4 py-1.5 text-xs font-bold text-[#2a170e] w-fit shadow-xs">
                <MapPin className="size-3.5 text-[#c2622b]" />
                <span>Downtown Dubai Showroom · Worldwide Shipping</span>
              </div>

              <h1 className="font-plush text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#2a170e] leading-[1.08]">
                Premium teacup <br className="hidden sm:inline" />
                <span className="text-[#c2622b] underline decoration-[#ffd27f] decoration-wavy decoration-2">
                  puppies
                </span> in Dubai
              </h1>

              <p className="text-lg sm:text-xl text-[#2a170e]/80 max-w-2xl leading-relaxed">
                Meet ethically raised miniature teacup puppies face-to-face in our Downtown Dubai showroom, or reserve rare Korean & European lines through our white-glove flight cargo service. <em>Every puppy is family.</em>
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/puppies"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#2a170e] px-8 py-4 font-plush text-base sm:text-lg font-bold text-white shadow-md hover:bg-[#c2622b] transition-all hover:scale-105 active:scale-95"
                >
                  <span>Meet available pups</span>
                  <PawIcon className="size-4 text-[#ffd27f]" />
                </Link>

                <a
                  href="https://wa.me/919898124987?text=Hi%20Insta%20Biz%20Web%2C%20I'd%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp inline-flex items-center gap-2.5 rounded-full bg-[#0f764a] px-8 py-4 font-plush text-base sm:text-lg font-bold text-white shadow-md hover:bg-[#0c5e3b] transition-all hover:scale-105 active:scale-95"
                >
                  <WhatsAppIcon className="size-5" />
                  <span>WhatsApp us</span>
                </a>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-6 border-t border-[#2a170e]/10 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-[#2a170e]/75">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="size-4 text-[#0f764a]" /> 100% Health Guarantee
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="size-4 text-[#0f764a]" /> Microchipped & Vaccinated
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="size-4 text-[#0f764a]" /> 24/7 Lifelong Support
                </span>
              </div>
            </div>

            {/* Right Hero Video & Media Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none overflow-hidden rounded-[2.5rem] border-[4px] border-[#2a170e] bg-[#fbe3b4]/40 p-3 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-black">
                  <video
                    src="/media/dSAUmXs8Qai9/ef39cbea20/27b888_323008bb0f6a41d4bde2a0da7206cd98-720p.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 p-3 shadow-md backdrop-blur-sm flex items-center justify-between">
                    <div>
                      <p className="font-plush text-sm font-bold text-[#2a170e]">Downtown Showroom</p>
                      <p className="font-scrawl text-xs text-[#c2622b]">live play moments</p>
                    </div>
                    <Link
                      href="/contact"
                      className="rounded-full bg-[#2a170e] px-3.5 py-1 text-xs font-bold text-white hover:bg-[#c2622b] transition-colors"
                    >
                      Visit us
                    </Link>
                  </div>
                </div>

                {/* Floating cute sticker */}
                <div className="absolute -top-4 -right-4 size-20 rounded-full border-2 border-[#2a170e] bg-[#fbe3b4] p-2 shadow-md rotate-12 flex flex-col items-center justify-center text-center">
                  <PawIcon className="size-6 text-[#c2622b]" />
                  <span className="font-scrawl text-[10px] font-bold text-[#2a170e] leading-tight">100% PURE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Meet the Pups Section */}
      <section className="tp-scene tp-meet">
        <div className="gutter mx-auto max-w-[110rem] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-scrawl text-lg text-[#c2622b]">our little furry angels</p>
              <h2 className="font-plush text-3xl sm:text-5xl font-bold tracking-tight text-[#2a170e] mt-1">
                Meet the pups
              </h2>
              <p className="text-[#2a170e]/80 mt-2 max-w-xl text-sm sm:text-base">
                Available right now in Dubai and ready to reserve. Each puppy comes fully vet checked, microchipped, and vaccinated.
              </p>
            </div>
            <Link
              href="/puppies"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#2a170e] bg-[#fffdf8] px-6 py-3 font-plush text-sm font-bold text-[#2a170e] hover:bg-[#fbe3b4] transition-colors w-fit"
            >
              <span>View all available pups</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {featuredPuppies.map((pup, index) => (
              <PuppyCard key={pup.slug} puppy={pup} tiltIndex={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/puppies"
              className="inline-flex items-center gap-2 rounded-full bg-[#2a170e] px-8 py-3.5 font-plush text-base font-bold text-white shadow-md hover:bg-[#c2622b] transition-transform hover:scale-105"
            >
              <span>Explore all {AVAILABLE_PUPPIES.length} available puppies</span>
              <PawIcon className="size-4 text-[#ffd27f]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Two Ways to Meet Your Puppy */}
      <section className="tp-scene tp-paths">
        <div className="gutter mx-auto max-w-[110rem] px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="font-scrawl text-lg text-[#c2622b]">how we bring puppies & families together</p>
            <h2 className="font-plush text-3xl sm:text-5xl font-bold tracking-tight text-[#2a170e] mt-1">
              Two ways to meet your puppy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Path 1: In Dubai */}
            <div className="relative overflow-hidden rounded-[2.5rem] border-[3px] border-[#2a170e] bg-[#fffdf8] p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all">
              <div className="size-14 rounded-2xl bg-[#fbe3b4] border-2 border-[#2a170e] flex items-center justify-center mb-6">
                <MapPin className="size-7 text-[#2a170e]" />
              </div>
              <span className="font-scrawl text-xs font-bold uppercase tracking-wider text-[#c2622b]">Option 1</span>
              <h3 className="font-plush text-2xl sm:text-3xl font-bold text-[#2a170e] mt-1 mb-4">
                In Dubai — Meet in person
              </h3>
              <p className="text-[#2a170e]/80 text-sm sm:text-base leading-relaxed mb-6">
                Visit our cozy Downtown Dubai showroom to cuddle, play, and bond with our locally available puppies before you decide. Take your new family member home the very same day!
              </p>
              <ul className="space-y-3 text-sm text-[#2a170e]/90 font-medium mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="size-4 text-[#0f764a]" /> Immediate same-day adoption
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="size-4 text-[#0f764a]" /> In-person bonding room in Downtown
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="size-4 text-[#0f764a]" /> Complete vet health book on site
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#2a170e] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#c2622b] transition-colors"
              >
                <span>Book showroom visit</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Path 2: Order Upon Request */}
            <div className="relative overflow-hidden rounded-[2.5rem] border-[3px] border-[#2a170e] bg-[#fffdf8] p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all">
              <div className="size-14 rounded-2xl bg-[#fbe3b4] border-2 border-[#2a170e] flex items-center justify-center mb-6">
                <Plane className="size-7 text-[#2a170e]" />
              </div>
              <span className="font-scrawl text-xs font-bold uppercase tracking-wider text-[#c2622b]">Option 2</span>
              <h3 className="font-plush text-2xl sm:text-3xl font-bold text-[#2a170e] mt-1 mb-4">
                Imported — Order upon request
              </h3>
              <p className="text-[#2a170e]/80 text-sm sm:text-base leading-relaxed mb-6">
                Looking for a rare miniature line, micro Korean teacup, or specific color? We source directly from certified ethical breeders in Korea & Europe with full flight cargo logistics.
              </p>
              <ul className="space-y-3 text-sm text-[#2a170e]/90 font-medium mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="size-4 text-[#0f764a]" /> Videos & health tests shared prior to flight
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="size-4 text-[#0f764a]" /> Climate-controlled flight nanny cargo
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="size-4 text-[#0f764a]" /> Doorstep delivery across Dubai & UAE
                </li>
              </ul>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#2a170e] px-6 py-2.5 text-sm font-bold text-[#2a170e] hover:bg-[#fbe3b4] transition-colors"
              >
                <span>How import works</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Your Puppy Journey (Timeline) */}
      <section className="tp-scene tp-chat bg-[#fbe3b4]/30 py-16 sm:py-24 border-y-2 border-[#2a170e]">
        <div className="gutter mx-auto max-w-[110rem] px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-scrawl text-lg text-[#c2622b]">simple, transparent, loving</p>
            <h2 className="font-plush text-3xl sm:text-5xl font-bold tracking-tight text-[#2a170e] mt-1">
              Your puppy journey
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Browse or request',
                desc: 'Explore available puppies online or tell us your dream breed, gender, and color preferences.'
              },
              {
                step: '02',
                title: 'Meet & bond',
                desc: 'Visit our Downtown Dubai showroom or receive real-time video calls and certified health checkups.'
              },
              {
                step: '03',
                title: 'Health & passport',
                desc: 'Your puppy receives official veterinary clearance, microchip registry, international pet passport, and vaccines.'
              },
              {
                step: '04',
                title: 'Welcome home',
                desc: 'Take your puppy home or enjoy white-glove doorstep delivery with full starter kit and 24/7 care support.'
              }
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-3xl border-2 border-[#2a170e] bg-[#fffdf8] p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-plush text-4xl font-extrabold text-[#c2622b]/30">
                  {item.step}
                </span>
                <h3 className="font-plush text-xl font-bold text-[#2a170e] mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#2a170e]/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Families Trust TeddyPups */}
      <section className="tp-scene tp-passport">
        <div className="gutter mx-auto max-w-[110rem] px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-scrawl text-lg text-[#c2622b]">our uncompromising promise</p>
            <h2 className="font-plush text-3xl sm:text-5xl font-bold tracking-tight text-[#2a170e] mt-1">
              Why families trust TeddyPups
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: ShieldCheck,
                title: '100% Health Guarantee',
                desc: 'Every puppy is thoroughly examined by licensed veterinarians and comes with comprehensive health coverage.'
              },
              {
                icon: Sparkles,
                title: 'Official Pedigrees',
                desc: 'Purebred lineage documents and microchip tracking certified by accredited international registries.'
              },
              {
                icon: Plane,
                title: 'Ethical Global Sourcing',
                desc: 'We only partner with humane, licensed European and Korean breeders who prioritize animal welfare above all.'
              },
              {
                icon: Heart,
                title: '24/7 Lifelong Aftercare',
                desc: 'From puppy nutrition to toilet training and vet advice, our care team stays by your side throughout your journey.'
              }
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="rounded-[2.2rem] border-2 border-[#2a170e] bg-[#fffdf8] p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="size-12 rounded-2xl bg-[#fbe3b4] border border-[#2a170e] flex items-center justify-center mb-5">
                    <Icon className="size-6 text-[#2a170e]" />
                  </div>
                  <h3 className="font-plush text-xl font-bold text-[#2a170e] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#2a170e]/80 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Questions, Answered (FAQ Preview) */}
      <section className="tp-scene tp-night bg-[#fdfaf4] py-16 border-y-2 border-[#2a170e]">
        <div className="gutter mx-auto max-w-[110rem] px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-scrawl text-lg text-[#c2622b]">everything you need to know</p>
            <h2 className="font-plush text-3xl sm:text-5xl font-bold tracking-tight text-[#2a170e] mt-1">
              Questions, answered
            </h2>
          </div>

          <FAQAccordion showSearch={false} limit={5} />

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 font-scrawl text-base font-bold text-[#c2622b] hover:text-[#2a170e] underline decoration-dashed"
            >
              <span>See all frequently asked questions →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Ready to Meet Your New Best Friend? CTA Banner */}
      <section className="tp-scene tp-home pb-16">
        <div className="gutter mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[3rem] border-[4px] border-[#2a170e] bg-[#2a170e] p-8 sm:p-14 text-center text-white shadow-2xl">
            {/* Background Paw Graphic */}
            <PawIcon className="absolute -right-8 -bottom-8 size-48 text-white/5 pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="font-scrawl text-lg text-[#ffd27f]">the warmest hello</span>
              <h2 className="font-plush text-3xl sm:text-5xl font-bold tracking-tight text-white mt-1 mb-4">
                Ready to meet your new best friend?
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
                Whether you want to visit our Downtown Dubai showroom today or speak with our concierge team about an imported dream puppy, we are thrilled to help!
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://wa.me/919898124987?text=Hi%20Insta%20Biz%20Web%2C%20I'd%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp inline-flex items-center gap-2 rounded-full bg-[#0f764a] px-8 py-4 font-plush text-base font-bold text-white shadow-lg hover:bg-[#0c5e3b] transition-transform hover:scale-105"
                >
                  <WhatsAppIcon className="size-5" />
                  <span>Chat on WhatsApp</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 font-plush text-base font-bold text-white hover:bg-white hover:text-[#2a170e] transition-all"
                >
                  <span>Post a letter to us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
