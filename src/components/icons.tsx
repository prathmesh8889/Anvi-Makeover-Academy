type P = { className?: string };

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconSparkle = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M12 2l2.1 6.4L21 10.5l-6.9 2.1L12 19l-2.1-6.4L3 10.5l6.9-2.1z" fill="currentColor" />
  </svg>
);

export const IconCrown = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M4 17l1.8-8.5 4.2 4.4 2-6.4 2 6.4 4.2-4.4L20 17z" />
    <path d="M4.5 20h15" />
    <circle cx="12" cy="3.2" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const IconSpray = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <rect x="8.5" y="9" width="7" height="12" rx="2" />
    <path d="M10.5 9V6.5h3V9" />
    <path d="M12 4.5V3" />
    <path d="M18.5 4.5h.01M20.5 7h.01M19.5 10h.01M21 2.8h.01" />
  </svg>
);

export const IconRings = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <circle cx="9" cy="14" r="5.5" />
    <circle cx="15.5" cy="10.5" r="5" />
    <path d="M15.5 3.5L14 5.5h3z" />
  </svg>
);

export const IconLips = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M12 9.5c1.8-2.4 4.6-3.1 6.5-1.6 1.6 1.3 2.3 2.6 2.5 3.3-2.6 3.8-5.7 5.3-9 5.3s-6.4-1.5-9-5.3c.2-.7.9-2 2.5-3.3 1.9-1.5 4.7-.8 6.5 1.6z" />
    <path d="M3.5 11.5c5.5 1.6 11.5 1.6 17 0" />
  </svg>
);

export const IconHair = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M5 20c0-7 2-14 7-14 4 0 5 3 5 6 0 2-1.4 3.4-3 3.4S11.2 14 11.2 12" />
    <path d="M16.5 15.5c1.8 1 2.5 2.6 2.5 4.5" />
    <path d="M8 20c.2-2.5 1-4.5 2.6-5.8" />
  </svg>
);

export const IconNail = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <rect x="9" y="10.5" width="6" height="10.5" rx="1.8" />
    <path d="M10.5 10.5V7.5h3v3" />
    <path d="M11.2 7.5V4.8h1.6v2.7" />
    <path d="M12 4.8V2.5" />
  </svg>
);

export const IconGroom = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M12 12l-8-4.5v9L12 12z" />
    <path d="M12 12l8-4.5v9L12 12z" />
    <rect x="10.4" y="10.2" width="3.2" height="3.6" rx="0.9" />
  </svg>
);

export const IconStar = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9z"
      fill="currentColor"
    />
  </svg>
);

export const IconPhone = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M5.5 3.5h4l1.5 4.5-2.3 1.7a12.5 12.5 0 005.6 5.6l1.7-2.3 4.5 1.5v4c0 .8-.7 1.6-1.6 1.5C10.6 19.6 4.4 13.4 3.9 5.1c0-.9.7-1.6 1.6-1.6z" />
  </svg>
);

export const IconWhatsApp = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 2a8 8 0 11-4.2 14.8l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 0112 4zm-3.1 3.9c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.2s.9 2.6 1.1 2.8c.1.2 1.9 3 4.7 4.1 2.3.9 2.8.7 3.3.7.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.2-.7.1l-.9 1.2c-.2.2-.3.2-.6.1a6.6 6.6 0 01-3.3-2.9c-.2-.4 0-.5.1-.7l.6-.8c.1-.2.1-.4 0-.6L10 8.3c-.2-.4-.4-.4-.6-.4h-.5z"
    />
  </svg>
);

export const IconInstagram = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const IconPin = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M12 21.5s-7-6.4-7-11.5a7 7 0 1114 0c0 5.1-7 11.5-7 11.5z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const IconClock = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7v5.2l3.4 2" />
  </svg>
);

export const IconArrow = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M4 12h15" />
    <path d="M13.5 6l6 6-6 6" />
  </svg>
);

export const IconCheck = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M4.5 12.5l5 5L19.5 7" />
  </svg>
);

export const IconClose = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const IconMenu = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M3.5 7h17M3.5 12h11M3.5 17h17" />
  </svg>
);

export const IconQuote = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M4 13.5C4 9 6.8 5.7 10.6 4.5l.9 1.8c-2.3 1-3.8 2.8-4 4.7.3-.1.7-.2 1.1-.2 2 0 3.4 1.4 3.4 3.4S10.5 17.7 8.4 17.7C5.8 17.7 4 16 4 13.5zm9.5 0c0-4.5 2.8-7.8 6.6-9l.9 1.8c-2.3 1-3.8 2.8-4 4.7.3-.1.7-.2 1.1-.2 2 0 3.4 1.4 3.4 3.4s-1.5 3.5-3.6 3.5c-2.6 0-4.4-1.7-4.4-4.2z"
    />
  </svg>
);

export const IconHeart = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 20.5S3.5 15.4 3.5 9.6C3.5 6.7 5.7 4.5 8.4 4.5c1.6 0 3 .8 3.6 2 .6-1.2 2-2 3.6-2 2.7 0 4.9 2.2 4.9 5.1 0 5.8-8.5 10.9-8.5 10.9z"
    />
  </svg>
);

export const IconComment = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M21 12a8 8 0 01-8 8H4l2.3-2.9A8 8 0 1121 12z" />
  </svg>
);

export const IconKit = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <rect x="3.5" y="8" width="17" height="12" rx="2" />
    <path d="M9 8V6a2 2 0 012-2h2a2 2 0 012 2v2M3.5 13.5h17M12 12.3v2.4" />
  </svg>
);

export const IconCertificate = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <circle cx="12" cy="9" r="5.5" />
    <path d="M12 6.5l.9 1.8 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3z" />
    <path d="M8.5 13.5L7 21l5-2.6L17 21l-1.5-7.5" />
  </svg>
);

export const IconUsers = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <circle cx="9" cy="8.5" r="3.5" />
    <path d="M3 20c.5-3.4 2.8-5.5 6-5.5s5.5 2.1 6 5.5" />
    <path d="M15.5 5.5a3.5 3.5 0 010 6M18 14.9c1.7.8 2.8 2.5 3 5.1" />
  </svg>
);

export const IconCamera = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M4 8h3l2-2.5h6L17 8h3a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z" />
    <circle cx="12" cy="13.5" r="3.5" />
  </svg>
);

export const IconChevron = ({ className, dir = "r" }: P & { dir?: "l" | "r" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    {dir === "r" ? <path d="M9 5l7 7-7 7" /> : <path d="M15 5l-7 7 7 7" />}
  </svg>
);

export const IconCalendar = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <rect x="3.5" y="5" width="17" height="16" rx="2" />
    <path d="M3.5 10h17M8 2.8V7M16 2.8V7" />
  </svg>
);

export const IconSend = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <path d="M21 3.5L10.5 14M21 3.5L14 21l-3.5-7L3 10.5z" />
  </svg>
);

export const IconMirror = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...S}>
    <ellipse cx="12" cy="9.5" rx="6.5" ry="7.5" />
    <path d="M12 17v4.5M8.5 21.5h7M9 7.5c.5-1.6 1.6-2.7 3-3" />
  </svg>
);

export const Monogram = ({ className }: P) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <circle cx="24" cy="24" r="22.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="24" cy="24" r="19" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
    <text
      x="24"
      y="32"
      textAnchor="middle"
      fontFamily="Fraunces, Georgia, serif"
      fontStyle="italic"
      fontWeight="500"
      fontSize="24"
      fill="currentColor"
    >
      A
    </text>
  </svg>
);
