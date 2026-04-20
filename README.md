# Ikan Bakar Fresh — Landing Page

A high-conversion landing page for **Ikan Bakar Fresh**, an Indonesian grilled fish food business. Built with a fire & charcoal aesthetic using TanStack Start, React 19, and Tailwind CSS 4.

## Features

- **10 full sections**: Hero, Problem, Solution/Benefits, Menu, Gallery, Testimonials, Promo, Location & Hours, Order Form, FAQ, Final CTA
- **Live countdown timer** on the promo section
- **Structured order form** that composes a WhatsApp message with all order details
- **Sticky navbar** with scroll-aware background
- **Floating WhatsApp button** always accessible
- All CTAs linked to WhatsApp Admin Aquelino (0831-3493-1256)
- Fully responsive (mobile-first)
- Fire & charcoal design system: Playfair Display + DM Sans fonts, ember particle animations, grill-pattern textures

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — or use Netlify CLI for full platform emulation:

```bash
netlify dev
```

Open [http://localhost:8888](http://localhost:8888).

## Build

```bash
npm run build
```

Output goes to `dist/client/` (configured in `netlify.toml`).
