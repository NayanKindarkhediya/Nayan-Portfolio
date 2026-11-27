import React from 'react';

/**
 * Hand-built SVG marks for the stack. Keeping them inline means no icon
 * requests at runtime and full control over colour in dark mode.
 */
export default function TechIcon({ name, size = 30 }) {
  const p = { width: size, height: size, viewBox: '0 0 32 32', 'aria-hidden': true };

  switch (name) {
    case 'HTML':
      return (
        <svg {...p}>
          <path d="M5 3h22l-2 22-9 3-9-3L5 3Z" fill="#e44d26" />
          <path d="M16 5.5V27l7.2-2.4L24.9 5.5H16Z" fill="#f16529" />
          <path d="M10 8.6h12l-.3 3.3h-8.3l.22 2.6h7.85l-.9 9.6L16 25.4l-4.5-1.3-.3-3.4h2.9l.15 1.7 1.75.5 1.8-.5.2-2.3h-6.9L10 8.6Z" fill="#fff" />
        </svg>
      );
    case 'CSS':
      return (
        <svg {...p}>
          <path d="M5 3h22l-2 22-9 3-9-3L5 3Z" fill="#1572b6" />
          <path d="M16 5.5V27l7.2-2.4L24.9 5.5H16Z" fill="#33a9dc" />
          <path d="M22 8.6H10l.34 3.3h11.3l-.34 3.2h-7.5l.33 3.2h6.85l-.33 3.5-3.65 1-3.62-1-.23-2.6h-3.3l.45 5 6.7 1.9 6.7-1.9L22 8.6Z" fill="#fff" />
        </svg>
      );
    case 'JavaScript':
      return (
        <svg {...p}>
          <rect x="3" y="3" width="26" height="26" rx="3" fill="#f7df1e" />
          <path d="M13.4 22.6c.52.92 1.18 1.6 2.48 1.6 1.1 0 1.78-.54 1.78-1.3 0-.9-.72-1.22-1.94-1.75l-.66-.28c-1.92-.82-3.2-1.84-3.2-4.02 0-2 1.52-3.52 3.9-3.52 1.7 0 2.92.6 3.8 2.14l-2.08 1.34c-.46-.82-.95-1.14-1.72-1.14-.78 0-1.28.5-1.28 1.14 0 .8.5 1.12 1.64 1.62l.66.28c2.26.97 3.54 1.95 3.54 4.19 0 2.4-1.9 3.72-4.44 3.72-2.48 0-4.08-1.18-4.86-2.73l2.38-1.29Zm-6.6.2c.38.68.73 1.25 1.56 1.25.8 0 1.3-.31 1.3-1.52v-8.2h2.7v8.24c0 2.78-1.64 4.05-4.02 4.05-2.16 0-3.4-1.12-4.04-2.46l2.5-1.36Z" fill="#20232a" />
        </svg>
      );
    case 'React':
      return (
        <svg {...p} fill="none" stroke="#61dafb" strokeWidth="1.3">
          <circle cx="16" cy="16" r="2.4" fill="#61dafb" stroke="none" />
          <ellipse cx="16" cy="16" rx="12.5" ry="4.8" />
          <ellipse cx="16" cy="16" rx="12.5" ry="4.8" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="12.5" ry="4.8" transform="rotate(120 16 16)" />
        </svg>
      );
    case 'Next.js':
      return (
        <svg {...p}>
          <circle cx="16" cy="16" r="13" fill="#000" stroke="#ffffff" strokeOpacity="0.5" />
          <path d="M11 22V10.4h2.1l8.3 11.1" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M20.2 10.4V19" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg {...p}>
          <path
            d="M16 9c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.56.89 2.28 1.62C17.65 14.8 18.98 16 22 16c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.56-.89-2.28-1.62C20.35 10.2 19.02 9 16 9Zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.56.89 2.28 1.62C11.65 22 12.98 23.2 16 23.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.56-.89-2.28-1.62C14.35 17.4 13.02 16.2 10 16.2Z"
            fill="#38bdf8"
          />
        </svg>
      );
    case 'Node.js':
      return (
        <svg {...p}>
          <path d="M16 2.6 28 9.3v13.4L16 29.4 4 22.7V9.3L16 2.6Z" fill="#3c873a" />
          <path d="M16 23.6c-3.1 0-3.8-1.5-3.8-2.7v-.4h2.2v.4c0 .6.2 1 1.6 1 1.3 0 1.7-.3 1.7-1s-.3-.9-2.1-1.1c-2.1-.24-3.4-.8-3.4-2.7 0-1.8 1.5-2.8 3.8-2.8 2.7 0 3.7 1 3.8 3h-2.2c-.1-.9-.5-1.2-1.6-1.2-1.2 0-1.6.4-1.6.9 0 .6.3.8 2 1 2.3.28 3.5.75 3.5 2.7 0 1.9-1.5 2.9-3.9 2.9Z" fill="#fff" />
        </svg>
      );
    case 'Express.js':
      return (
        <svg {...p}>
          <rect x="3" y="3" width="26" height="26" rx="7" fill="#0f172a" stroke="#c7d3e6" strokeOpacity="0.45" />
          <text x="16" y="21" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="12" fill="#e2e8f0">
            ex
          </text>
        </svg>
      );
    case 'MongoDB':
      return (
        <svg {...p}>
          <path d="M16 3c2.8 4.6 7 7 7 12.2 0 4.4-2.9 7.6-6.2 8.9l-.5 3.9h-.6l-.5-3.9C11.9 22.8 9 19.6 9 15.2 9 10 13.2 7.6 16 3Z" fill="#4db33d" />
          <path d="M16 3v24.9l-.3.1-.5-3.9C11.9 22.8 9 19.6 9 15.2 9 10 13.2 7.6 16 3Z" fill="#3f9c35" />
        </svg>
      );
    default:
      return (
        <svg {...p} fill="none" stroke="#f05032" strokeWidth="1.9" strokeLinecap="round">
          <circle cx="9" cy="8" r="2.6" />
          <circle cx="9" cy="24" r="2.6" />
          <circle cx="22" cy="14" r="2.6" />
          <path d="M9 10.6v10.8" />
          <path d="M20 16.2c-1.4 3.4-4.6 4.4-8.6 5" />
        </svg>
      );
  }
}
