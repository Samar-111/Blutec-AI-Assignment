import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ALL_PUPPIES } from '@/data/puppies';
import { LetterForm } from '@/components/LetterForm';
import { PawIcon, WhatsAppIcon } from '@/components/Icons';
import { ShieldCheck, Heart, CheckCircle2, ChevronLeft, ChevronRight, Video, Sparkles } from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return ALL_PUPPIES.map((pup) => ({
    slug: pup.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const puppy = ALL_PUPPIES.find((p) => p.slug === params.slug);
  if (!puppy) return { title: 'Puppy Not Found | TeddyPups U.A.E.' };

  return {
    title: `${puppy.name}, ${puppy.breed} | TeddyPups U.A.E.`,
    description: `Meet ${puppy.name}: ${puppy.breed}, ${puppy.genderLabel || puppy.gender}, ${puppy.age}. Real photos and verified health certificate from TeddyPups U.A.E.`,
  };
}

export default function PuppyDetailPage({ params }: Props) {
  const currentIndex = ALL_PUPPIES.findIndex((p) => p.slug === params.slug);
  if (currentIndex === -1) {
    notFound();
  }

  const puppy = ALL_PUPPIES[currentIndex];
  const prevPup = currentIndex > 0 ? ALL_PUPPIES[currentIndex - 1] : ALL_PUPPIES[ALL_PUPPIES.length - 1];
  const nextPup = currentIndex < ALL_PUPPIES.length - 1 ? ALL_PUPPIES[currentIndex + 1] : ALL_PUPPIES[0];

  const videoItem = puppy.media?.find((m) => m.kind === 'video');
  const photos = puppy.media?.filter((m) => m.kind === 'image') || [];

  return (
    <article className="tp-storybook pb-24 pt-6 md:pt-10">
      <div className="gutter mx-auto max-w-[110rem] px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm font-semibold text-[#2a170e]/70">
          <Link href="/puppies" className="hover:text-[#c2622b] transition-colors">
            Available puppies
          </Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-[#2a170e]">
            {puppy.name}
          </span>
        </nav>

        {/* Chapter 1: Hello, it's me */}
        <div className="mb-6">
          <p className="tp-chapter flex items-center gap-2">
            <span aria-hidden="true" className="tp-chapter__n font-plush text-2xl font-bold text-[#c2622b]">1</span>
            <span className="font-scrawl text-lg text-[#2a170e]/80">hello, it's me</span>
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Media Gallery & Video */}
          <div className="min-w-0 lg:col-span-7 space-y-6">
            {/* Primary Cover Image / Video Player */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border-[3px] border-[#2a170e] bg-[#fbe3b4]/30 shadow-lg">
              {videoItem ? (
                <video
                  src={videoItem.url}
                  controls
                  poster={videoItem.poster?.url || puppy.cover?.url}
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={puppy.cover?.url || (photos[0]?.url) || '/brand/logo.png'}
                  alt={puppy.cover?.alt || puppy.name}
                  fill
                  priority
                  className="object-cover"
                />
              )}
            </div>

            {/* Additional Media Thumbnails */}
            {puppy.media && puppy.media.length > 1 && (
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {puppy.media.map((item, idx) => (
                  <div
                    key={item.id || idx}
                    className="relative aspect-square overflow-hidden rounded-2xl border-2 border-[#2a170e] bg-[#fbe3b4]/20"
                  >
                    {item.kind === 'video' ? (
                      <div className="relative size-full">
                        <img
                          src={item.poster?.url || puppy.cover?.url}
                          alt="Video thumbnail"
                          className="size-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <Video className="size-6 text-white" />
                        </div>
                      </div>
                    ) : (
                      <img
                        src={item.url}
                        alt={item.alt || `${puppy.name} photo`}
                        className="size-full object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Puppy Profile & Specs */}
          <div className="min-w-0 lg:col-span-5">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] rounded-[2.5rem] border-[3px] border-[#2a170e] bg-[#fffdf8] p-6 sm:p-9 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fbe3b4] px-3.5 py-1 text-xs font-bold text-[#2a170e]">
                  <PawIcon className="size-3 text-[#c2622b]" />
                  <span>{puppy.status === 'available' ? 'Available' : 'Adopted'}</span>
                </span>
                <span className="font-scrawl text-xs text-[#c2622b]">
                  {puppy.origin?.name || 'In Dubai'}
                </span>
              </div>

              <h1 className="font-plush text-4xl sm:text-5xl font-bold tracking-tight text-[#2a170e] mt-4">
                {puppy.displayName || puppy.name}
              </h1>
              <p className="font-semibold text-lg text-[#2a170e]/70 mt-1">
                {puppy.breed}
              </p>

              {/* Specs Table */}
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-y-2 border-dashed border-[#2a170e]/15 py-6">
                <div>
                  <dt className="font-scrawl text-xs text-[#2a170e]/60">Breed</dt>
                  <dd className="mt-1 text-base font-bold text-[#2a170e]">{puppy.breed}</dd>
                </div>
                <div>
                  <dt className="font-scrawl text-xs text-[#2a170e]/60">Gender</dt>
                  <dd className="mt-1 text-base font-bold text-[#2a170e]">
                    {puppy.genderLabel || (puppy.gender === 'female' ? 'Girl' : 'Boy')}
                  </dd>
                </div>
                <div>
                  <dt className="font-scrawl text-xs text-[#2a170e]/60">Age</dt>
                  <dd className="mt-1 text-base font-bold text-[#2a170e]">{puppy.age || '3 months'}</dd>
                </div>
                <div>
                  <dt className="font-scrawl text-xs text-[#2a170e]/60">Location</dt>
                  <dd className="mt-1 text-base font-bold text-[#2a170e]">
                    {puppy.origin?.name === 'Imported' ? 'Imported for you' : 'Downtown Dubai'}
                  </dd>
                </div>
              </dl>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={`https://wa.me/919898124987?text=Hi%20TeddyPups%2C%20I'd%20like%20to%20ask%20about%20${encodeURIComponent(puppy.name)}%20(${encodeURIComponent(puppy.breed)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp flex items-center justify-center gap-2 rounded-full bg-[#0f764a] py-4 font-plush text-base font-bold text-white shadow-md hover:bg-[#0c5e3b] transition-transform hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="size-5" />
                  <span>Ask about {puppy.name} on WhatsApp</span>
                </a>

                <a
                  href="#enquire"
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-[#2a170e] py-3.5 font-plush text-base font-bold text-[#2a170e] hover:bg-[#fbe3b4] transition-colors"
                >
                  <span>Post a letter to adopt</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter 2: What comes with puppy */}
        <div className="mt-20 rounded-[2.5rem] border-[3px] border-[#2a170e] bg-[#fdfaf4] p-8 sm:p-12 shadow-md">
          <p className="tp-chapter flex items-center gap-2 mb-6">
            <span aria-hidden="true" className="tp-chapter__n font-plush text-2xl font-bold text-[#c2622b]">2</span>
            <span className="font-scrawl text-lg text-[#2a170e]/80">what comes with {puppy.name}</span>
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Licensed Vet Clearance',
                desc: 'Complete medical inspection report, cardiac exam, and certified pathogen clearance.'
              },
              {
                title: 'Official Microchip & Passport',
                desc: 'International ISO microchip registration and official pet passport ready for travel.'
              },
              {
                title: 'Vaccinations & Deworming',
                desc: 'Age-appropriate core vaccines and deworming treatments fully stamped in medical log.'
              },
              {
                title: '100% Health Guarantee',
                desc: 'Contractual health coverage against genetic and congenital conditions.'
              },
              {
                title: 'Luxury Welcome Kit',
                desc: 'Premium puppy food, transition blanket with mother scent, toy, and starter supplies.'
              },
              {
                title: '24/7 Lifelong Advisory',
                desc: 'Personal support for feeding schedules, potty training, and settling into Dubai life.'
              }
            ].map((inc, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle2 className="size-5 shrink-0 text-[#0f764a] mt-0.5" />
                <div>
                  <h4 className="font-plush text-base font-bold text-[#2a170e]">{inc.title}</h4>
                  <p className="text-xs sm:text-sm text-[#2a170e]/75 mt-1 leading-relaxed">{inc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chapter 3: Home steps */}
        <div className="mt-20">
          <p className="tp-chapter flex items-center gap-2 mb-6">
            <span aria-hidden="true" className="tp-chapter__n font-plush text-2xl font-bold text-[#c2622b]">3</span>
            <span className="font-scrawl text-lg text-[#2a170e]/80">how {puppy.name} comes home</span>
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: '1', title: 'Consultation', text: 'Chat on WhatsApp or visit our Downtown Dubai showroom to discuss.' },
              { n: '2', title: 'Reservation', text: `Place a deposit to secure ${puppy.name} with contractual paperwork.` },
              { n: '3', title: 'Final Vet Check', text: 'A fresh pre-delivery veterinary exam ensures peak wellness.' },
              { n: '4', title: 'Homecoming', text: 'Pickup at our showroom or enjoy doorstep delivery across the UAE.' }
            ].map((step) => (
              <div key={step.n} className="rounded-3xl border-2 border-[#2a170e] bg-[#fffdf8] p-6 shadow-sm">
                <span className="font-plush text-3xl font-bold text-[#c2622b]">{step.n}</span>
                <h4 className="font-plush text-lg font-bold text-[#2a170e] mt-2 mb-1">{step.title}</h4>
                <p className="text-xs sm:text-sm text-[#2a170e]/80">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chapter 4: Enquire Letter Form */}
        <div id="enquire" className="mt-24">
          <p className="tp-chapter flex items-center gap-2 mb-6">
            <span aria-hidden="true" className="tp-chapter__n font-plush text-2xl font-bold text-[#c2622b]">4</span>
            <span className="font-scrawl text-lg text-[#2a170e]/80">send a letter about {puppy.name}</span>
          </p>
          <LetterForm initialPuppySlug={puppy.slug} initialPuppyName={puppy.name} />
        </div>

        {/* Prev / Next Puppy Navigation */}
        <nav aria-label="More puppies" className="mt-20 grid gap-4 sm:grid-cols-2 border-t-2 border-[#2a170e]/15 pt-8">
          <Link
            href={`/puppies/${prevPup.slug}`}
            className="group flex items-center gap-4 rounded-3xl border-2 border-[#2a170e] bg-[#fffdf8] p-4 transition-transform hover:-translate-x-1"
          >
            <ChevronLeft className="size-6 text-[#2a170e] group-hover:text-[#c2622b]" />
            <div className="relative size-14 shrink-0 overflow-hidden rounded-2xl border border-[#2a170e]">
              <Image
                src={prevPup.cover?.url || '/brand/logo.png'}
                alt={prevPup.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-scrawl text-xs text-[#2a170e]/60">Previous puppy</span>
              <p className="font-plush text-lg font-bold text-[#2a170e]">{prevPup.displayName || prevPup.name}</p>
            </div>
          </Link>

          <Link
            href={`/puppies/${nextPup.slug}`}
            className="group flex items-center justify-end gap-4 rounded-3xl border-2 border-[#2a170e] bg-[#fffdf8] p-4 transition-transform hover:translate-x-1"
          >
            <div className="text-right">
              <span className="font-scrawl text-xs text-[#2a170e]/60">Next puppy</span>
              <p className="font-plush text-lg font-bold text-[#2a170e]">{nextPup.displayName || nextPup.name}</p>
            </div>
            <div className="relative size-14 shrink-0 overflow-hidden rounded-2xl border border-[#2a170e]">
              <Image
                src={nextPup.cover?.url || '/brand/logo.png'}
                alt={nextPup.name}
                fill
                className="object-cover"
              />
            </div>
            <ChevronRight className="size-6 text-[#2a170e] group-hover:text-[#c2622b]" />
          </Link>
        </nav>
      </div>
    </article>
  );
}
