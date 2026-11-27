import React from 'react';
import { Zap } from 'lucide-react';
import { skills } from '../data/skills';
import { SectionHeading } from './Shared';
import TechIcon from './TechIcon';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Tech Stack"
          title="My"
          accent="Skills"
          subtitle="Technologies & tools I work with."
        />

        <ul className="skills-grid" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {skills.map((s, i) => (
            <li
              key={s.name}
              className="card skill-card reveal"
              style={{ '--delay': `${i * 55}ms` }}
            >
              <span
                className="skill-logo"
                style={{ color: s.color, borderColor: `${s.color}33`, background: `${s.color}14` }}
                aria-hidden="true"
              >
                <TechIcon name={s.name} />
              </span>
              <span className="skill-name">{s.name}</span>
            </li>
          ))}
        </ul>

        <p className="skills-note reveal">
          <Zap size={18} className="spark" aria-hidden="true" />
          Always learning new technologies to build better experiences.
        </p>
      </div>
    </section>
  );
}
