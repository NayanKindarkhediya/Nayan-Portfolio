import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import portrait from '../assets/portrait';
import { profile, stats, socials } from '../data/site';
import { SocialIcon } from './Shared';
import TechIcon from './TechIcon';

const badges = ['React', 'JavaScript', 'Tailwind CSS', 'Node.js'];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="shell hero-grid">
        <div>
          <p className="hero-hello reveal">Hello, I&apos;m</p>
          <h1 className="hero-title reveal" style={{ '--delay': '80ms' }}>
            {profile.name}
            <span className="line-2">Web Dev</span>
          </h1>
          <p className="hero-copy reveal" style={{ '--delay': '160ms' }}>
            {profile.tagline}
          </p>

          <div className="hero-actions reveal" style={{ '--delay': '240ms' }}>
            <a href="#projects" className="btn btn-primary">
              View My Projects <ArrowRight size={17} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me <Mail size={17} />
            </a>
          </div>

          <dl className="hero-stats reveal" style={{ '--delay': '320ms' }}>
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="stat-num">{s.value}</dt>
                <dd className="stat-label" style={{ margin: 0 }}>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-glow" aria-hidden="true" />
          <div className="portrait-ring" aria-hidden="true" />

          <img
            className="portrait-img"
            src={"/img/Model1.webp"}
            alt="Nayan, web developer, sitting and looking at the camera"
            width="470"
            loading="eager"
          />

          <div className="code-window" aria-hidden="true">
            <div className="code-dots"><i /><i /><i /></div>
            <div><span className="tok-key">const</span> developer = {'{'}</div>
            <div>&nbsp;&nbsp;name: <span className="tok-str">&quot;Nayan&quot;</span>,</div>
            <div>&nbsp;&nbsp;role: <span className="tok-str">&quot;Web Developer&quot;</span>,</div>
            <div>&nbsp;&nbsp;passion: <span className="tok-str">&quot;building web&quot;</span></div>
            <div>{'}'};</div>
            <div className="tok-com">// let&apos;s create something</div>
            <div className="tok-com">// amazing together</div>
          </div>

          <div className="badges" aria-hidden="true">
            {badges.map((b) => (
              <span key={b} className="badge" title={b}>
                <TechIcon name={b} size={24} />
              </span>
            ))}
          </div>
        </div>
      </div>

      <span className="hand hero-hand-1" aria-hidden="true">Full Stack</span>
      <span className="hand hero-hand-2" aria-hidden="true">
        Code · Design
        <br />
        Build · Repeat
      </span>

      <nav className="hero-social" aria-label="Social links">
        {socials.map((s) => (
          <a key={s.name} href={s.href} target="_blank" rel="noreferrer noopener" aria-label={s.name}>
            <SocialIcon name={s.name} />
          </a>
        ))}
      </nav>
    </section>
  );
}
