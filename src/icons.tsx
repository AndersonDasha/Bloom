type P = { size?: number; color?: string }

const base = (size = 24) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  xmlns: 'http://www.w3.org/2000/svg',
})

export const Sprout = ({ size = 22, color = 'var(--accent)' }: P) => (
  <svg {...base(size)} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21v-8" />
    <path d="M12 13c0-4 3-7 8-7 0 4-3 7-8 7z" fill={color} stroke="none" />
    <path d="M12 11C12 7.5 9.5 5 5 5c0 3.5 2.5 6 7 6z" fill={color} opacity="0.55" stroke="none" />
  </svg>
)

export const ChevronLeft = ({ size = 20, color = 'currentColor' }: P) => (
  <svg {...base(size)} fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
)

export const ChevronRight = ({ size = 16, color = 'currentColor' }: P) => (
  <svg {...base(size)} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
)

export const Check = ({ size = 14, color = 'currentColor' }: P) => (
  <svg {...base(size)} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

export const Pin = ({ size = 11, color = 'currentColor' }: P) => (
  <svg {...base(size)} fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export const Restart = ({ size = 17, color = 'currentColor' }: P) => (
  <svg {...base(size)} fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
    <path d="M3 3v5h5" />
  </svg>
)

export const Lock = ({ size = 12, color = 'currentColor' }: P) => (
  <svg {...base(size)} fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="11" width="16" height="10" rx="3" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
)

/* nav */

export const PeopleIcon = ({ size = 21, color = 'currentColor' }: P) => (
  <svg {...base(size)} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5" />
    <circle cx="17.5" cy="9.5" r="2.5" />
    <path d="M16.5 14.6c2.4.3 4.3 1.8 5 4.4" />
  </svg>
)

export const ChatIcon = ({ size = 21, color = 'currentColor' }: P) => (
  <svg {...base(size)} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5c0 4.1-4 7.5-9 7.5-1.1 0-2.2-.2-3.2-.5L4 20l1.1-3.2C3.8 15.4 3 13.6 3 11.5 3 7.4 7 4 12 4s9 3.4 9 7.5z" />
  </svg>
)

export const UserIcon = ({ size = 21, color = 'currentColor' }: P) => (
  <svg {...base(size)} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4.5 21c1-3.8 4-6 7.5-6s6.5 2.2 7.5 6" />
  </svg>
)

/* sources / channels */

export const LinkedInIcon = ({ size = 18, color = '#fff' }: P) => (
  <svg {...base(size)} fill={color}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export const XIcon = ({ size = 16, color = '#fff' }: P) => (
  <svg {...base(size)} fill={color}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
)

export const TikTokIcon = ({ size = 17, color = '#fff' }: P) => (
  <svg {...base(size)} fill={color}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
)

export const InstagramIcon = ({ size = 18, color = '#fff' }: P) => (
  <svg {...base(size)} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="3" width="18" height="18" rx="5.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="1.1" fill={color} stroke="none" />
  </svg>
)

export const MessageIcon = ({ size = 18, color = '#fff' }: P) => (
  <svg {...base(size)} fill={color}>
    <path d="M12 3C6.48 3 2 6.94 2 11.8c0 2.8 1.46 5.29 3.74 6.9-.16 1.04-.66 2.18-1.62 3.06 1.74-.1 3.2-.78 4.26-1.54 1.13.33 2.35.52 3.62.52 5.52 0 10-3.94 10-8.8S17.52 3 12 3z" />
  </svg>
)

export const MailIcon = ({ size = 18, color = '#fff' }: P) => (
  <svg {...base(size)} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2.5" y="5" width="19" height="14" rx="3.5" />
    <path d="m3.5 7.5 8.5 6 8.5-6" />
  </svg>
)

export type ChannelId = 'iMessage' | 'LinkedIn' | 'X' | 'Instagram' | 'TikTok' | 'Gmail'

export const ChannelGlyph = ({ channel, size = 11 }: { channel: ChannelId; size?: number }) => {
  const c = 'currentColor'
  switch (channel) {
    case 'LinkedIn':
      return <LinkedInIcon size={size} color={c} />
    case 'X':
      return <XIcon size={size} color={c} />
    case 'TikTok':
      return <TikTokIcon size={size} color={c} />
    case 'Instagram':
      return <InstagramIcon size={size} color={c} />
    case 'Gmail':
      return <MailIcon size={size} color={c} />
    default:
      return <MessageIcon size={size} color={c} />
  }
}
