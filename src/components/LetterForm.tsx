'use client';

import React, { useState } from 'react';
import { ALL_PUPPIES } from '../data/puppies';
import { PawIcon, WhatsAppIcon } from './Icons';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';

interface LetterFormProps {
  initialPuppySlug?: string;
  initialPuppyName?: string;
}

export const LetterForm: React.FC<LetterFormProps> = ({
  initialPuppySlug,
  initialPuppyName
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState('');
  const [puppyId, setPuppyId] = useState(initialPuppySlug || '');
  const [message, setMessage] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = 'Please tell us your name';
    if (!phone.trim()) newErrors.phone = 'Please provide your phone/WhatsApp number';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <div className="tp-letter relative overflow-hidden rounded-[2.5rem] border-[3px] border-[#2a170e] bg-[#fffdf8] p-8 md:p-12 shadow-lg text-center animate-in zoom-in-95 duration-300">
        <div className="mx-auto size-16 rounded-full bg-[#0f764a]/10 flex items-center justify-center text-[#0f764a] mb-4">
          <CheckCircle2 className="size-10" />
        </div>
        <h3 className="font-plush text-3xl font-bold text-[#2a170e]">
          Envelope Sealed & Sent!
        </h3>
        <p className="font-scrawl text-lg text-[#c2622b] mt-2">
          Thank you, {name}!
        </p>
        <p className="mt-4 text-[#2a170e]/80 max-w-md mx-auto text-sm leading-relaxed">
          Your letter has landed safely with our Dubai team. We will message or call you on <strong className="text-[#2a170e]">{phone}</strong> shortly to answer your questions and arrange a puppy visit.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href={`https://wa.me/919898124987?text=Hi%20TeddyPups%2C%20my%20name%20is%20${encodeURIComponent(name)}.%20I%20just%20sent%20a%20letter%20about%20${encodeURIComponent(puppyId || 'a puppy')}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp inline-flex items-center gap-2 rounded-full bg-[#0f764a] px-6 py-3 font-bold text-white shadow-md hover:bg-[#0c5e3b] transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="size-5" />
            <span>Chat directly on WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="tp-letter relative overflow-hidden rounded-[2.5rem] border-[3px] border-[#2a170e] bg-[#fffdf8] p-6 sm:p-10 md:p-14 shadow-xl"
    >
      {/* Decorative Vintage Postage Stamp */}
      <div className="absolute top-6 right-6 flex flex-col items-center justify-center size-20 rounded-lg border-2 border-dashed border-[#c2622b] bg-[#fbe3b4]/60 p-2 rotate-3 shadow-xs">
        <PawIcon className="size-6 text-[#c2622b]" />
        <span className="font-mono text-[9px] font-bold text-[#2a170e] uppercase mt-1">DUBAI AIR</span>
        <span className="font-mono text-[8px] text-[#c2622b]">100% LOVE</span>
      </div>

      <div className="max-w-2xl">
        <h2 className="font-plush text-3xl sm:text-4xl font-bold tracking-tight text-[#2a170e]">
          Dear TeddyPups,
        </h2>
        <p className="font-scrawl text-base text-[#c2622b] mt-1 mb-8">
          write to us and we'll reply right away
        </p>

        {/* Validation Alert */}
        {Object.keys(errors).length > 0 && (
          <div role="alert" className="mb-6 rounded-2xl bg-red-50 border border-red-200 p-4 text-sm text-red-700 flex items-center gap-3">
            <AlertCircle className="size-5 shrink-0" />
            <div>
              {errors.name && <p>{errors.name}</p>}
              {errors.phone && <p>{errors.phone}</p>}
            </div>
          </div>
        )}

        {/* Storybook Fill-in-the-blanks */}
        <div className="space-y-6 text-lg sm:text-xl md:text-2xl font-medium text-[#2a170e] leading-relaxed">
          <div>
            <span>My name is </span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="your full name"
              aria-label="Your full name"
              className={`inline-block border-b-2 bg-transparent px-2 py-0.5 text-[#2a170e] placeholder-[#2a170e]/40 focus:outline-none transition-colors ${
                errors.name ? 'border-red-500 bg-red-50' : 'border-[#2a170e] focus:border-[#c2622b]'
              }`}
            />
            <span>, and you can reach me on </span>
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+971 50 123 4567"
              aria-label="Your phone or WhatsApp number"
              className={`inline-block border-b-2 bg-transparent px-2 py-0.5 text-[#2a170e] placeholder-[#2a170e]/40 focus:outline-none transition-colors ${
                errors.phone ? 'border-red-500 bg-red-50' : 'border-[#2a170e] focus:border-[#c2622b]'
              }`}
            />
            <span> or by email at </span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email (optional)"
              aria-label="Your email address"
              className="inline-block border-b-2 border-[#2a170e] bg-transparent px-2 py-0.5 text-[#2a170e] placeholder-[#2a170e]/40 focus:border-[#c2622b] focus:outline-none transition-colors"
            />
            <span>.</span>
          </div>

          <div>
            <span>I live in </span>
            <input
              type="text"
              name="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="e.g. Dubai Marina, Downtown"
              aria-label="Your neighborhood or city"
              className="inline-block border-b-2 border-[#2a170e] bg-transparent px-2 py-0.5 text-[#2a170e] placeholder-[#2a170e]/40 focus:border-[#c2622b] focus:outline-none transition-colors"
            />
            <span>, and I'm curious about </span>
            <select
              name="puppyId"
              value={puppyId}
              onChange={(e) => setPuppyId(e.target.value)}
              aria-label="Select puppy you are interested in"
              className="inline-block rounded-xl border-2 border-[#2a170e] bg-[#fbe3b4]/40 px-3 py-1 font-semibold text-[#2a170e] focus:outline-none focus:border-[#c2622b]"
            >
              <option value="">any puppy (not sure yet)</option>
              {ALL_PUPPIES.map((pup) => (
                <option key={pup.slug} value={pup.slug}>
                  {pup.displayName || pup.name} ({pup.breed}, {pup.genderLabel || (pup.gender === 'female' ? 'girl' : 'boy')})
                </option>
              ))}
            </select>
            <span>.</span>
          </div>

          <div>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              placeholder="Anything else you'd like to tell us about your family, home, or questions…"
              aria-label="Additional notes"
              className="w-full rounded-2xl border-2 border-[#2a170e]/20 bg-[#fdfaf4] p-4 text-base font-normal text-[#2a170e] placeholder-[#2a170e]/40 focus:border-[#c2622b] focus:outline-none transition-colors mt-2"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#2a170e] px-8 py-4 font-plush text-lg font-bold text-white shadow-md hover:bg-[#c2622b] transition-all hover:scale-105 active:scale-95 disabled:opacity-75"
          >
            <Send className="size-5" />
            <span>{isSubmitting ? 'Sealing the envelope…' : 'Post my letter'}</span>
          </button>
          <span className="font-scrawl text-sm text-[#2a170e]/70">
            No spam ever · verified breeders only
          </span>
        </div>
      </div>
    </form>
  );
};
