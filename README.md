# Bloom 🌱

A social networking prototype for Gen Z — find the 50 people in your network most
likely to land you your next job.

Bloom scans where your real network lives (iMessage, LinkedIn, X, Instagram, TikTok,
Gmail) and ranks your top 50 people, with the context that matters: when you last
talked, where they are, and what you talked about.

## This prototype

Two flows, built as a mobile-first experience:

1. **Onboarding** — welcome → pick what's next → connect your sources → live network scan
2. **Home** — your ranked Top 50 with filters (Hiring now · In SF · Warmest) and one-tap outreach

All data is mocked. Glassmorphism design system documented in [design.md](./design.md).

## Run it

```bash
npm install
npm run dev
```

Open the URL on a phone (or in a narrow browser window — on desktop it renders inside
a phone frame). Tap the ↻ icon on the home screen to replay onboarding.

## Stack

Vite · React · TypeScript · Framer Motion · hand-rolled CSS (no UI library)
