import type { ChannelId } from '../icons'

export type Person = {
  id: string
  name: string
  role: string
  company: string
  location: string
  lastContactWeeks: number
  channel: ChannelId
  topics: string[]
  hiring: boolean
  score: number
}

type Seed = Omit<Person, 'id' | 'score'>

const curated: Seed[] = [
  { name: 'Maya Chen', role: 'Design Lead', company: 'Figma', location: 'San Francisco', lastContactWeeks: 1, channel: 'iMessage', topics: ['design systems', 'referrals'], hiring: true },
  { name: 'Jordan Reyes', role: 'Recruiter', company: 'OpenAI', location: 'San Francisco', lastContactWeeks: 0.3, channel: 'LinkedIn', topics: ['AI roles', 'interview prep'], hiring: true },
  { name: 'Sam Okafor', role: 'Eng Manager', company: 'Stripe', location: 'New York', lastContactWeeks: 2, channel: 'X', topics: ['side projects', 'fintech'], hiring: true },
  { name: 'Lena Park', role: 'Product', company: 'Notion', location: 'San Francisco', lastContactWeeks: 3, channel: 'iMessage', topics: ['portfolio', 'PM tips'], hiring: false },
  { name: 'Diego Morales', role: 'Founder', company: 'stealth', location: 'Austin', lastContactWeeks: 1, channel: 'X', topics: ['startup ideas', 'fundraising'], hiring: true },
  { name: 'Priya Shah', role: 'Designer', company: 'Linear', location: 'Berlin', lastContactWeeks: 4, channel: 'Instagram', topics: ['craft', 'Figma plugins'], hiring: false },
  { name: 'Tasha Nguyen', role: 'Creator · 120K', company: 'TikTok', location: 'Los Angeles', lastContactWeeks: 0.3, channel: 'TikTok', topics: ['content', 'brand deals'], hiring: false },
  { name: 'Eli Brooks', role: 'Engineer', company: 'Vercel', location: 'New York', lastContactWeeks: 5, channel: 'Gmail', topics: ['Next.js', 'hackathons'], hiring: false },
  { name: 'Amara Diallo', role: 'Talent Partner', company: 'a16z', location: 'San Francisco', lastContactWeeks: 2, channel: 'LinkedIn', topics: ['warm intros', 'portfolio review'], hiring: true },
  { name: 'Noah Kim', role: 'PM', company: 'TikTok', location: 'Los Angeles', lastContactWeeks: 1, channel: 'iMessage', topics: ['growth', 'creator tools'], hiring: true },
  { name: 'Zoe Ramirez', role: 'Brand Designer', company: 'Freelance', location: 'Miami', lastContactWeeks: 6, channel: 'Instagram', topics: ['moodboards', 'logo crit'], hiring: false },
  { name: 'Marcus Webb', role: 'Data Scientist', company: 'Spotify', location: 'New York', lastContactWeeks: 8, channel: 'Gmail', topics: ['ML', 'music tech'], hiring: false },
  { name: 'Ivy Tran', role: 'Design Engineer', company: 'Browser Co', location: 'New York', lastContactWeeks: 3, channel: 'X', topics: ['prototyping', 'WebGL'], hiring: true },
  { name: 'Leo Fischer', role: 'Engineer', company: 'Google', location: 'Seattle', lastContactWeeks: 12, channel: 'iMessage', topics: ['referrals', 'interview prep'], hiring: false },
]

const firstNames = ['Ava', 'Kai', 'Ruby', 'Theo', 'Nina', 'Omar', 'Jade', 'Felix', 'Sora', 'Liam', 'Mia', 'Dre', 'Hana', 'Cole', 'Isla', 'Rio', 'Tess', 'Yuki', 'Aria', 'Beck', 'Cleo', 'Dev', 'Esme', 'Finn', 'Gigi', 'Hugo', 'Iris', 'Jules', 'Kira', 'Luca', 'Nico', 'Opal', 'Pax', 'Quinn', 'Remy', 'Skye']
const lastNames = ['Patel', 'Johnson', 'Sato', 'Alvarez', 'Brown', 'Haddad', 'Lee', 'Novak', 'Tanaka', "O'Brien", 'Garcia', 'Mitchell', 'Kowalski', 'Bennett', 'Murphy', 'Silva', 'Wong', 'Ito', 'Rossi', 'Adams', 'Dubois', 'Mehta', 'Clark', 'Larsen', 'Romano', 'Schmidt', 'Ali', 'Baker', 'Petrov', 'Costa', 'Greco', 'Hayes', 'Iverson', 'James', 'Khan', 'Lindgren']
const roles = ['Product Designer', 'Engineer', 'PM', 'Recruiter', 'Founder', 'Data Scientist', 'UX Researcher', 'Marketing', 'iOS Engineer', 'Content Lead', 'Design Engineer', 'Growth']
const companies = ['Airbnb', 'Canva', 'Discord', 'Duolingo', 'Pinterest', 'Ramp', 'Retool', 'Shopify', 'Snap', 'Substack', 'Webflow', 'YC startup']
const cities = ['San Francisco', 'New York', 'Los Angeles', 'Austin', 'Seattle', 'London', 'Toronto', 'Chicago', 'Berlin', 'Remote']
const channels: ChannelId[] = ['iMessage', 'LinkedIn', 'X', 'Instagram', 'TikTok', 'Gmail']
const topicPool = [
  ['career advice', 'design crit'],
  ['AI tools', 'side projects'],
  ['internships', 'resumes'],
  ['hackathons', 'demos'],
  ['growth', 'analytics'],
  ['portfolio', 'case studies'],
  ['startup ideas', 'pitch decks'],
  ['content', 'editing'],
  ['referrals', 'open roles'],
  ['mentorship', 'roadmaps'],
]

const generated: Seed[] = firstNames.map((first, i) => ({
  name: `${first} ${lastNames[i]}`,
  role: roles[i % roles.length],
  company: companies[(i * 5 + 3) % companies.length],
  location: cities[(i * 3 + 1) % cities.length],
  lastContactWeeks: 1 + (i % 9) + (i % 3) * 1.5,
  channel: channels[(i * 2 + 1) % channels.length],
  topics: topicPool[(i * 7 + 2) % topicPool.length],
  hiring: i % 7 === 0,
}))

export const people: Person[] = [...curated, ...generated].map((p, i) => ({
  ...p,
  id: `p${i}`,
  score: Math.round(97 - i * 0.72),
}))

export function formatLastContact(weeks: number): string {
  if (weeks < 0.15) return 'today'
  if (weeks < 1) return `${Math.max(1, Math.round(weeks * 7))}d ago`
  if (weeks < 5) return `${Math.round(weeks)}w ago`
  if (weeks < 48) return `${Math.round(weeks / 4.3)}mo ago`
  return '1y+ ago'
}

export function initials(name: string): string {
  const parts = name.split(' ')
  return (parts[0][0] + (parts[1]?.[0] ?? '')).toUpperCase()
}
