import React from 'react';
import type { Metadata } from 'next';
import { LetterForm } from '@/components/LetterForm';
import { PawIcon, WhatsAppIcon } from '@/components/Icons';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Visit & Contact | TeddyPups U.A.E.',
  description: 'Get in touch with TeddyPups U.A.E. or visit our showroom in Downtown Dubai. Write a letter or chat on WhatsApp.',
};

export default function ContactPage() {
  return (
    <div className="gutter mx-auto max-w-[110rem] px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="font-scrawl text-lg text-[#c2622b] inline-flex items-center gap-1.5">
          <PawIcon className="size-4" /> we'd love to hear from you
        </span>
        <h1 className="font-plush text-4xl sm:text-6xl font-bold tracking-tight text-[#2a170e] mt-1 mb-4">
          Get in touch with us
        </h1>
        <p className="text-[#2a170e]/80 text-base sm:text-lg leading-relaxed">
          Have questions about our puppies or adoption process? Fill out the form below, and our team will get back to you promptly. Whether you're ready to adopt or just exploring, we're here for you!
        </p>
      </div>

      {/* Main Grid: Letter Form & Showroom Card */}
      <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
        {/* Left: The Letter Form */}
        <div className="lg:col-span-7">
          <LetterForm />
        </div>

        {/* Right: Showroom & Direct Contacts */}
        <div className="lg:col-span-5 space-y-8">
          {/* Showroom Card */}
          <div className="rounded-[2.5rem] border-[3px] border-[#2a170e] bg-[#fdfaf4] p-8 shadow-md">
            <div className="size-12 rounded-2xl bg-[#fbe3b4] border border-[#2a170e] flex items-center justify-center mb-5">
              <MapPin className="size-6 text-[#2a170e]" />
            </div>
            <h2 className="font-plush text-2xl font-bold text-[#2a170e] mb-2">
              Visit us in Downtown Dubai
            </h2>
            <p className="text-sm text-[#2a170e]/80 leading-relaxed mb-6">
              Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face in a calm, welcoming environment.
            </p>

            <div className="space-y-4 border-t border-dashed border-[#2a170e]/20 pt-6 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="size-5 shrink-0 text-[#c2622b] mt-0.5" />
                <div>
                  <strong className="block text-[#2a170e]">Showroom Address</strong>
                  <span className="text-[#2a170e]/75">Downtown Dubai, United Arab Emirates</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="size-5 shrink-0 text-[#c2622b] mt-0.5" />
                <div>
                  <strong className="block text-[#2a170e]">Opening Hours</strong>
                  <span className="text-[#2a170e]/75">Monday – Sunday: 10:00 AM – 9:00 PM (By appointment)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="size-5 shrink-0 text-[#c2622b] mt-0.5" />
                <div>
                  <strong className="block text-[#2a170e]">Direct Line</strong>
                  <a href="tel:+971500000000" className="text-[#c2622b] font-semibold hover:underline">
                    +971 50 000 0000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="size-5 shrink-0 text-[#c2622b] mt-0.5" />
                <div>
                  <strong className="block text-[#2a170e]">Email Inquiries</strong>
                  <a href="mailto:info@instabizweb.com" className="text-[#c2622b] font-semibold hover:underline">
                    info@instabizweb.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#2a170e]/15 flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com/?q=Downtown+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#2a170e] bg-white py-2.5 px-5 text-xs font-bold text-[#2a170e] hover:bg-[#fbe3b4] transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="size-3.5" />
              </a>

              <a
                href="https://wa.me/919898124987?text=Hi%20TeddyPups%2C%20I'd%20like%20to%20book%20a%20visit%20to%20your%20Downtown%20Dubai%20showroom."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp inline-flex items-center justify-center gap-2 rounded-full bg-[#0f764a] py-2.5 px-5 text-xs font-bold text-white hover:bg-[#0c5e3b] transition-colors"
              >
                <WhatsAppIcon className="size-4" />
                <span>Book visit on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
