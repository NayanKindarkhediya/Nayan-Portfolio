import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navItems, profile } from '../data/site';
import { BrandMark } from './Shared';

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="shell nav-inner">
          <a href="#home" className="brand" aria-label={`${profile.name} — home`}>
            <BrandMark />
            {profile.name}
          </a>

          <nav className="nav-links" aria-label="Main">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link${active === item.id ? ' active' : ''}`}
                aria-current={active === item.id ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn btn-primary nav-cta">
            Hire Me <ArrowUpRight size={16} />
          </a>

          <button
            type="button"
            className="icon-btn burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div className={`drawer${open ? ' open' : ''}`} hidden={!open} aria-label="Mobile navigation">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={active === item.id ? 'active' : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary" style={{ marginTop: 24, justifyContent: 'center' }} onClick={() => setOpen(false)}>
          Hire Me <ArrowUpRight size={16} />
        </a>
      </div>
    </>
  );
}
