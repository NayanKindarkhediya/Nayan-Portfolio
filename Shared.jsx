import React from 'react';

/** Monogram used in the navbar and footer. */
export function BrandMark({ size = 36 }) {
  return (
    <span className="brand-mark" style={{ width: size, height: size }} aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 20V4l16 16V4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/** Eyebrow + title + optional subtitle used at the top of every section. */
export function SectionHeading({ eyebrow, title, accent, subtitle, align = 'left' }) {
  return (
    <header className="section-head reveal" style={{ textAlign: align }}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">
        {title}
        {title && accent ? ' ' : ''}
        {accent && <span className="accent">{accent}</span>}
      </h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </header>
  );
}

/** Fixed decorative layers that sit behind all content. */
export function Background() {
  const particles = React.useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        left: `${(i * 7.3 + 5) % 96}%`,
        top: `${(i * 13.7 + 12) % 92}%`,
        delay: `${(i * 1.6) % 18}s`,
        duration: `${14 + (i % 5) * 3}s`,
      })),
    []
  );

  return (
    <div className="bg-layers" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-diagonal" />
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{ left: p.left, top: p.top, animationDelay: p.delay, animationDuration: p.duration }}
        />
      ))}
    </div>
  );
}

/** Small inline brand icons for the social row (keeps the bundle dependency-light). */
export function SocialIcon({ name, size = 19 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true };
  switch (name) {
    case 'GitHub':
      return (
        <svg {...common}>
          <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
        </svg>
      );
    case 'LinkedIn':
      return (
        <svg {...common}>
          <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9.75h4v11.25H3V9.75Zm6.5 0h3.83v1.54h.05c.53-.95 1.84-1.95 3.79-1.95 4.05 0 4.8 2.53 4.8 5.82V21h-4v-5.15c0-1.23-.02-2.81-1.77-2.81-1.78 0-2.05 1.34-2.05 2.72V21h-4V9.75Z" />
        </svg>
      );
    case 'Instagram':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.9">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M17.5 3h3.2l-7 8 8.2 10h-6.4l-5-6.1L4.7 21H1.5l7.5-8.6L1.2 3h6.6l4.5 5.6L17.5 3Zm-1.1 16.1h1.8L7.7 4.8H5.8l10.6 14.3Z" />
        </svg>
      );
  }
}
