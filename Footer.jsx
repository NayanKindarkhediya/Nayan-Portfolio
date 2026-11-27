import React from 'react';
import { navItems, profile, socials } from '../data/site';
import { BrandMark, SocialIcon } from './Shared';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <a href="#home" className="brand">
          <BrandMark />
          {profile.name}
        </a>

        <nav className="footer-nav" aria-label="Footer">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>{item.label}</a>
          ))}
        </nav>

        <div className="socials">
          {socials.map((s) => (
            <a className="icon-btn" key={s.name} href={s.href} target="_blank" rel="noreferrer noopener" aria-label={s.name}>
              <SocialIcon name={s.name} size={17} />
            </a>
          ))}
        </div>

        <p className="footer-copy">© 2026 {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
