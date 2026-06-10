import type { FC } from 'react'

/* Hand-drawn line-art portraits (Notion-style sketches), monochrome strokes
   so they sit naturally on the dark glass bubbles. */

type Props = { size?: number }

const svgProps = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
})

const Shoulders = () => <path d="M10 44c3-6 8-9 14-9s11 3 14 9" />
const Head = () => <ellipse cx="24" cy="25" rx="9" ry="10.5" />
const Eyes = () => (
  <>
    <circle cx="20.5" cy="25" r="1" fill="currentColor" stroke="none" />
    <circle cx="27.5" cy="25" r="1" fill="currentColor" stroke="none" />
  </>
)
const Smile = () => <path d="M21 30.5c1.5 1.8 4.5 1.8 6 0" />

export const Bob: FC<Props> = ({ size = 40 }) => (
  <svg {...svgProps(size)}>
    <Shoulders />
    <Head />
    <path d="M14.5 27c-1.5-11 3-17 9.5-17s11 6 9.5 17" />
    <path d="M14.5 27c2-2.2 3.5-5.5 4-8.5 3 1.6 8 1.6 11 0 .5 3 2 6.3 4 8.5" />
    <Eyes />
    <Smile />
  </svg>
)

export const CurlyGlasses: FC<Props> = ({ size = 40 }) => (
  <svg {...svgProps(size)}>
    <Shoulders />
    <Head />
    <path d="M15 19c-2.5-1-2-5 .8-5.2C15.5 11 19 9.5 21 11c1.5-2.5 6-2.5 7.5 0 2-1.5 5.5 0 5.2 2.8 2.8.2 3.3 4.2.8 5.2" />
    <circle cx="20" cy="25.5" r="3.2" />
    <circle cx="28" cy="25.5" r="3.2" />
    <path d="M23.2 25.5h1.6M16.8 25.5H15.2M31.2 25.5h1.6" />
    <Smile />
  </svg>
)

export const BunEarrings: FC<Props> = ({ size = 40 }) => (
  <svg {...svgProps(size)}>
    <Shoulders />
    <Head />
    <circle cx="24" cy="9" r="3" />
    <path d="M14.5 24c0-8 4-12.5 9.5-12.5S33.5 16 33.5 24" />
    <circle cx="14.8" cy="30.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="33.2" cy="30.5" r="1" fill="currentColor" stroke="none" />
    <Eyes />
    <Smile />
  </svg>
)

export const Beanie: FC<Props> = ({ size = 40 }) => (
  <svg {...svgProps(size)}>
    <Shoulders />
    <Head />
    <path d="M14 21c0-7.5 4.5-11.5 10-11.5S34 13.5 34 21" />
    <path d="M13.5 21.5c3.5-1.6 17.5-1.6 21 0" />
    <circle cx="24" cy="7.5" r="2.2" />
    <Eyes />
    <Smile />
  </svg>
)

export const Spiky: FC<Props> = ({ size = 40 }) => (
  <svg {...svgProps(size)}>
    <Shoulders />
    <Head />
    <path d="M15 21c-.5-3 1-5 2.5-5.5-.3-2.5 2-4.5 4-4 .8-2 4.2-2 5 0 2-.5 4.3 1.5 4 4 1.5.5 3 2.5 2.5 5.5" />
    <circle cx="18" cy="29" r="0.7" fill="currentColor" stroke="none" />
    <circle cx="30" cy="29" r="0.7" fill="currentColor" stroke="none" />
    <Eyes />
    <Smile />
  </svg>
)

export const Wavy: FC<Props> = ({ size = 40 }) => (
  <svg {...svgProps(size)}>
    <Shoulders />
    <Head />
    <path d="M14 24c-1-9 4-14 10-14s11 5 10 14" />
    <path d="M14 24c-2 4-2.2 8-1 11 2-1 2.5-3 2-5" />
    <path d="M34 24c2 4 2.2 8 1 11-2-1-2.5-3-2-5" />
    <Eyes />
    <Smile />
  </svg>
)

export const portraits = [Bob, CurlyGlasses, BunEarrings, Beanie, Spiky, Wavy]
