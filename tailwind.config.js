/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        milk: 'var(--color-milk, #fffdf8)',
        cocoa: 'var(--color-cocoa, #2a170e)',
        honey: 'var(--color-honey, #fbe3b4)',
        toffee: 'var(--color-toffee, #ffd27f)',
        'toffee-ink': 'var(--color-toffee-ink, #c2622b)',
        'cocoa-soft': '#5a3f31',
      },
      fontFamily: {
        plush: ['var(--font-fraunces)', 'Fraunces', 'serif'],
        scrawl: ['var(--font-shantell)', '"Shantell Sans"', 'cursive'],
        sans: ['var(--font-figtree)', 'Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
