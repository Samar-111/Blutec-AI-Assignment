'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  tilt: string;
  pin: string;
}

const FAQS_DATA: FAQItem[] = [{'id': 'faq-1', 'question': 'Are your puppies vaccinated and health-checked?', 'answer': 'Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.', 'tilt': '-1.6deg', 'pin': 'var(--color-toffee)'}, {'id': 'faq-2', 'question': 'Can I meet a puppy before I decide?', 'answer': 'Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.', 'tilt': '1.2deg', 'pin': 'var(--color-sky-deep)'}, {'id': 'faq-3', 'question': 'Can I take my puppy home the same day?', 'answer': 'Local puppies are available immediately, so you can take your puppy home the same day.', 'tilt': '-0.8deg', 'pin': '#d9a13c'}, {'id': 'faq-4', 'question': 'Do you import puppies from abroad?', 'answer': 'Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the import for you.', 'tilt': '1.8deg', 'pin': '#c45a6a'}, {'id': 'faq-5', 'question': 'How does an imported puppy travel to Dubai?', 'answer': 'We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free.', 'tilt': '-1.2deg', 'pin': 'var(--color-toffee)'}, {'id': 'faq-6', 'question': 'Will I see photos and health details first?', 'answer': 'Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp.', 'tilt': '0.7deg', 'pin': 'var(--color-sky-deep)'}, {'id': 'faq-7', 'question': 'Do you deliver?', 'answer': 'Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world.', 'tilt': '-1.9deg', 'pin': '#d9a13c'}, {'id': 'faq-8', 'question': 'Which breeds do you usually have?', 'answer': 'Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie.', 'tilt': '1.4deg', 'pin': '#c45a6a'}, {'id': 'faq-9', 'question': 'Is there help after my puppy comes home?', 'answer': 'Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.', 'tilt': '-1.6deg', 'pin': 'var(--color-toffee)'}];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>(null);

  const filteredFaqs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return FAQS_DATA;
    return FAQS_DATA.filter(
      item => item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const toggleFaq = (id: string) => {
    setOpenId(prev => prev === id ? null : id);
  };

  return (
    <div className="tp-page" data-page="faq">
      <section aria-labelledby="faq-title" className="tp-scene tp-faqroom overflow-hidden" data-pup-scene="true" data-tone="light" style={{ "--sky-top": "#fffbf3", "--sky-bottom": "#f6cc85" } as React.CSSProperties}>
        <div className="gutter mx-auto max-w-[110rem] pb-24 pt-10 md:pt-16">
          <header className="max-w-4xl">
            <p className="font-scrawl text-toffee-ink">answers &amp; reassurance</p>
            <h1 id="faq-title" className="font-plush text-huge mt-2">Frequently asked questions</h1>
            <p className="text-lede mt-4 text-[var(--ink-soft)]">
              Everything you might wonder about meeting our puppies in Downtown Dubai, reserving a puppy from Korea or Europe, health guarantees, vaccinations, and delivery.
            </p>
          </header>

          <div className="tp-notes mt-14" data-open={openId || searchQuery ? "" : undefined}>
            <aside aria-label="Find a question" className="tp-notes__side">
              <label htmlFor="faq-search" className="font-scrawl tp-notes__label">sniff out a question</label>
              <div className="tp-notes__search">
                <svg aria-hidden="true" className="tp-notes__lens" viewBox="0 0 24 24">
                  <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="m15.5 15.5 5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <input
                  id="faq-search"
                  type="search"
                  autoComplete="off"
                  placeholder="delivery, Korea, vaccinated…"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>

              <p aria-live="polite" className="tp-notes__count">
                {searchQuery.trim()
                  ? `${filteredFaqs.length} ${filteredFaqs.length === 1 ? 'note' : 'notes'} found`
                  : `${FAQS_DATA.length} notes on the board`}
              </p>

              <div className="tp-notes__teddy">
                <span aria-hidden="true" className="tp-notes__bubble font-plush">
                  <span className="tp-notes__q">?</span>
                  <span className="tp-notes__a">!</span>
                </span>
                <div aria-hidden="true" className="pup-buddy pup-buddy--sit pup-buddy--tilt mx-auto w-32 md:w-40">
                  <svg aria-hidden="true" className="pup-art" style={{ overflow: "visible" } as React.CSSProperties} viewBox="0 0 260 220">
                    <ellipse cx="130" cy="210" fill="#2a170e" opacity="0.12" rx="72" ry="7" />
                    <g className="pup-core">
                      <path d="M78 152 C72 144 68 136 66 130" fill="none" stroke="#2a170e" strokeLinecap="round" strokeWidth="8" />
                      <path d="M78 152 C72 144 68 136 66 130" fill="none" stroke="#f2be6b" strokeLinecap="round" strokeWidth="4" />
                      <path d="M80 180 C80 140 100 120 130 120 C160 120 180 140 180 180 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" />
                      <g className="pup-head" style={{ transformOrigin: "130px 100px", rotate: "12deg" } as React.CSSProperties}>
                        <circle cx="130" cy="85" r="45" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" />
                        <ellipse cx="95" cy="85" rx="14" ry="24" fill="#e4a352" stroke="#2a170e" strokeWidth="3" />
                        <ellipse cx="165" cy="85" rx="14" ry="24" fill="#e4a352" stroke="#2a170e" strokeWidth="3" />
                        <circle cx="116" cy="78" r="4.5" fill="#2a170e" />
                        <circle cx="144" cy="78" r="4.5" fill="#2a170e" />
                        <ellipse cx="130" cy="92" rx="6" ry="4.5" fill="#2a170e" />
                        <path d="M125 98 Q130 103 135 98" fill="none" stroke="#2a170e" strokeWidth="2.5" strokeLinecap="round" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>

              <a
                href="https://wa.me/919898124987?text=Hi%20Insta%20Biz%20Web%2C%20I'd%20like%20to%20ask%20a%20question%20about%20your%20puppies."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp tp-notes__ask"
              >
                Ask your own question
              </a>
            </aside>

            <div className="tp-notes__board">
              <ul className="tp-notes__list">
                {filteredFaqs.map((faq, i) => {
                  const isOpen = openId === faq.id || (searchQuery.trim().length > 0 && faq.answer.toLowerCase().includes(searchQuery.trim().toLowerCase()));
                  return (
                    <li
                      key={faq.id}
                      className="tp-note"
                      data-reveal="true"
                      data-unfolded={isOpen ? "true" : undefined}
                      style={{
                        "--tilt": faq.tilt,
                        "--pin": faq.pin,
                        "--i": i
                      } as React.CSSProperties}
                    >
                      <span aria-hidden="true" className="tp-note__pin" />
                      <h2 className="tp-note__q">
                        <button
                          type="button"
                          id={`q-${faq.id}`}
                          aria-expanded={isOpen}
                          aria-controls={`a-${faq.id}`}
                          onClick={() => toggleFaq(faq.id)}
                        >
                          <span className="font-plush-text">{faq.question}</span>
                          <span aria-hidden="true" className="tp-note__chevron" />
                        </button>
                      </h2>
                      <div
                        id={`a-${faq.id}`}
                        role="region"
                        aria-labelledby={`q-${faq.id}`}
                        className="tp-note__answer"
                      >
                        <div className="tp-note__flap">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {filteredFaqs.length === 0 && (
                <div className="tp-note tp-note--empty">
                  <span aria-hidden="true" className="tp-note__pin" />
                  <p className="font-plush-text text-[1.2rem] font-bold">
                    No note about “{searchQuery.trim()}” yet.
                  </p>
                  <p className="mt-2">
                    <a
                      href="https://wa.me/919898124987?text=Hi%20Insta%20Biz%20Web%2C%20I'd%20like%20to%20ask%20about:%20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-ink font-semibold"
                    >
                      Ask us on WhatsApp
                    </a>{' '}
                    and we'll answer.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
