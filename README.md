# TeddyPups U.A.E. — Complete Website Clone 🐶✨

A complete, pixel-accurate, fully responsive clone of **[TeddyPups U.A.E.](https://puppy.instabizweb.com/)**, built for the **Blutec AI Assignment**.

---

## 🌟 Overview & Highlights

**TeddyPups U.A.E.** is a luxury miniature and teacup puppy boutique based in Downtown Dubai, specializing in locally available showroom puppies and ethical global imports (Korea & Europe).

This project replicates the entire user experience, nostalgic storybook aesthetic, responsive layouts, client interactions, dynamic routes, and offline-ready media assets.

### 🔗 Reference Website
- **Live Reference**: [https://puppy.instabizweb.com/](https://puppy.instabizweb.com/)
- **Repository**: [https://github.com/Samar-111/Blutec-AI-Assignment](https://github.com/Samar-111/Blutec-AI-Assignment)

---

## 🚀 Key Features & Pages

### 1. 🏠 Homepage (`/`)
- **Hero Section**: Downtown Dubai showroom badge, animated typography, quick CTAs, and featured high-definition video player.
- **Meet the Pups Carousel**: Real-time list of available puppies with badges (*"In Dubai"*, *"Imported"*, *"Boy/Girl"*, age).
- **Two Ways to Meet Your Puppy**: Detailed comparison between in-person showroom visits vs. certified global import cargo.
- **Your Puppy Journey**: 4-step illustrated adoption roadmap.
- **Why Families Trust TeddyPups**: Verified medical credentials, 100% health guarantee, official pedigrees, and 24/7 care.
- **Questions, Answered**: Interactive accordion FAQ preview.
- **CTA Banner**: Direct WhatsApp concierge and showroom appointment booking.

### 2. 🐾 Available Puppies Catalog (`/puppies`)
- **Reactive Multi-Filter System**:
  - **Location**: *All*, *In Dubai*, *Imported*
  - **Gender**: *All*, *Boy*, *Girl*
  - **Breed**: *All breeds*, *Maltipoo*, *Pomeranian*, *Cavapoo*, *Poodle*, *Shih Tzu*, *Pomsky*, *Bichon*, *Maltese*
- **Dynamic Match Counter**: Real-time count of matching puppies.
- **Reset Filters**: One-click filter clear.
- **URL Query Sync**: Supports deep-linking like `/puppies?breed=maltipoo` or `/puppies?origin=imported`.

### 3. 📖 Dynamic Puppy Profiles (`/puppies/[slug]`)
- **42 Pre-rendered SSG Profile Pages** for every single puppy on the reference site.
- **Photo & Video Gallery**: Multi-photo preview carousel with video playback support.
- **Full Specifications Table**: Breed, gender, age, origin, and color.
- **Included Guarantees**: Veterinary health certificate, ISO microchip, vaccinations, pet passport, welcome kit.
- **Storybook Enquiry Letter Form**: Pre-populated letter form with the puppy's name.
- **Previous & Next Pup Navigation**: Seamless browsing between puppies.

### 4. ✈️ Gone Home — Adoption Archive (`/gone-home`)
- **27 Vintage Boarding Passes**: Perforated ticket stub layout with barcodes, flight routes (e.g., *Seoul → Dubai*), arrival dates, and happy puppy photos.
- **Custom Request Callout**: Direct inquiry for families looking for similar breeds.

### 5. 📸 Happy Families (`/happy-families`)
- **Customer Photo Wall**: 64 high-resolution photo cards showcasing puppies with their new families.
- **Interactive Full-Screen Lightbox**:
  - Modal backdrop with smooth keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`).
  - Next/Previous controls and live photo counter (*Photo X of 64*).
- **Pinned Testimonial Note**: Lined craft paper with realistic scotch tape styling.

### 6. 🛠️ How It Works (`/how-it-works`)
- **Interactive Tabbed Walkthrough**:
  - *In Dubai (Meet in person)*: 4 illustrated steps for showroom visits and same-day adoption.
  - *Imported (Order upon request)*: 4 steps covering breeder selection, video consults, flight cargo, and home delivery.
- **Our Premium Puppy Promise**: Verified medical guarantees and lifelong support.
- **Delivery & Collection Modes**: Showroom pickup, Dubai chauffeur, UAE doorstep, and international pet cargo (`#delivery`).

### 7. ❓ Frequently Asked Questions (`/faq`)
- **Corkboard Layout**: Pushpin styled accordion notes.
- **Real-Time Live Search ("Sniff out a question")**: Instantly filters questions and answers as you type.
- **Animated Expand/Collapse**: Accessible accordion toggles.
- **Direct Support Callout**: Quick link to 24/7 WhatsApp concierge.

### 8. ✉️ Visit & Contact (`/contact`)
- **Handwritten Letter Inquiry Form**:
  - Storybook fill-in-the-blanks format (*"Dear TeddyPups, my name is..."*).
  - Client-side field validation with accessible alert notifications.
  - Interactive submission feedback state.
- **Downtown Dubai Showroom Card**: Address, opening hours, Google Maps link, direct phone and WhatsApp buttons.

---

## 🎨 Design System & Aesthetics

- **Typography**:
  - **Display / Headings**: `Fraunces` (warm, playful luxury serif)
  - **Body / Navigation**: `Figtree` (clean, modern geometric sans)
  - **Handwritten Accents**: `Shantell Sans` (playful comic script for notes, stamps, and doodles)
- **Palette**:
  - Backgrounds: Warm Vanilla & Cream (`#fffdf8`, `#fbf5eb`, `#fdfaf4`)
  - Primary Typography & Borders: Espresso Chocolate (`#2a170e`, `#3e2312`)
  - Highlights & Buttons: Toffee Gold (`#ffd27f`, `#fbe3b4`, `#c2622b`)
  - WhatsApp Accent: Forest Emerald (`#0f764a`)
- **Micro-interactions & Motifs**:
  - Scalloped wavy hems and rolling hill SVG dividers.
  - Animated paw print navigation active indicators.
  - Pushpins, scotch tape strips, and torn ticket stubs.
  - Full mobile responsiveness with sticky quick-action contact bar.

---

## 💻 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Static Site Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Design System
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Brand SVGs
- **Media**: 200 locally-hosted media assets (photographs, videos, and icons)

---

## 🛠️ Getting Started

### Prerequisites
- Node.js `18.x` or higher
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Samar-111/Blutec-AI-Assignment.git
cd Blutec-AI-Assignment

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

```bash
# Build optimized static production bundle
npm run build

# Start the production server
npm run start
```

---

## 📁 Project Architecture

```
├── public/
│   ├── brand/               # Brand logo and artwork
│   ├── css/original.css     # Compiled design system styles
│   ├── fonts/               # Fraunces, Figtree, Shantell Sans fonts
│   └── media/               # 200 high-res puppy photos & videos
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with Header, Footer, and styles
│   │   ├── page.tsx         # Complete Homepage (all 8 sections)
│   │   ├── puppies/
│   │   │   ├── page.tsx     # Puppies catalog with filters
│   │   │   └── [slug]/
│   │   │       └── page.tsx # 42 SSG puppy detail pages
│   │   ├── gone-home/
│   │   │   └── page.tsx     # 27 airline boarding pass adoption archive
│   │   ├── happy-families/
│   │   │   └── page.tsx     # 64 customer photo wall & lightbox viewer
│   │   ├── how-it-works/
│   │   │   └── page.tsx     # Interactive tabbed adoption guide
│   │   ├── faq/
│   │   │   └── page.tsx     # Searchable corkboard accordion FAQ
│   │   └── contact/
│   │       └── page.tsx     # Letter enquiry form & showroom card
│   ├── components/
│   │   ├── Header.tsx       # Responsive navbar with paw indicator & mobile drawer
│   │   ├── Footer.tsx       # Rolling hill footer with sitemap links
│   │   ├── MobileBottomBar.tsx # Sticky mobile WhatsApp and call buttons
│   │   ├── PuppyCard.tsx    # Organic sketch card with tilt & status badge
│   │   ├── PuppyFilters.tsx # Reactive client-side catalog filter bar
│   │   ├── BoardingPassCard.tsx # Perforated airline ticket card
│   │   ├── LightboxModal.tsx# Accessible fullscreen photo viewer
│   │   ├── LetterForm.tsx   # Storybook fill-in-the-blanks contact form
│   │   ├── FAQAccordion.tsx # Pushpin corkboard accordion with live search
│   │   └── Icons.tsx        # Paw, WhatsApp, rolling hills, and brand SVGs
│   ├── data/
│   │   ├── puppies.ts       # Unified dataset of all 42 puppies
│   │   ├── tickets.ts       # 27 adopted puppy boarding passes
│   │   ├── happyFamilies.ts # 64 happy family customer photos
│   │   └── faqs.ts          # 9 comprehensive FAQ entries
│   ├── styles/
│   │   ├── fonts.css        # Local font-face declarations
│   │   └── globals.css      # Tailwind & custom CSS variables
│   └── types/
│       └── index.ts         # TypeScript interfaces
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## 📄 License & Credits
Built for the **Blutec AI Website Cloning Assignment** matching **[TeddyPups U.A.E.](https://puppy.instabizweb.com/)**. All trademarks, imagery, and brand materials belong to their respective owners.
