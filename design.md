# Bloom — Design Principles

Bloom helps Gen Z find the people in their network most likely to land them their next job.
Every screen should feel like it was made for a phone first — thumb-reachable, glanceable, alive.

## Core principles

1. **No unnecessary text.** Every word earns its place. One headline per screen, one action.
   Captions only when they reduce anxiety (privacy, time cost).
2. **Clear hierarchy.** One focal point per screen. Display type for the message,
   quiet type for everything else. Numbers and people are the heroes — chrome recedes.
3. **Simple.** One decision per onboarding step. Defaults over settings. Auto-advance
   when the product can do the work for the user.
4. **Visually balanced.** Consistent 20px gutters, 4px spacing grid, generous radii.
   Weight is distributed — a heavy header is balanced by an airy list.

## Visual language — glassmorphism on a living background

- **Background:** near-black (`#060807`) with a slow-moving green aurora. The glass needs
  something to refract — the background is always alive, never flat.
- **Glass surfaces:** `rgba(255,255,255,0.05–0.09)` fills, 1px `rgba(255,255,255,0.10–0.16)`
  strokes, `backdrop-filter: blur(22px) saturate(1.4)`. A soft top-edge highlight sells the material.
- **Accent green (brand):** `#3FE081`. Used for the single primary action, live/positive
  signals, and selection states. Primary buttons use a green gradient with near-black text.
- **Type:** system stack (SF Pro on iOS). Tight tracking on display sizes (−0.03em).
  Scale: 40/800 display · 28/700 title · 15/400 body · 12.5 caption.
- **Radii:** 28 cards · 999 pills · 48 phone frame.
- **Motion:** springs, not easings-by-default. Screens slide + fade; lists stagger in.
  Motion communicates progress (scanning) and reward (the reveal of your 50).

## Tone

Confident, warm, zero corporate-speak. "Your people" not "your professional network."
