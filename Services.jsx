import React from 'react';
import { Layout, MonitorSmartphone, Boxes, PenTool, Bug, MessagesSquare, Check, ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { SectionHeading } from './Shared';

const icons = { Layout, MonitorSmartphone, Boxes, PenTool, Bug, MessagesSquare };

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="shell" style={{ position: 'relative' }}>
        <SectionHeading
          eyebrow="What I Offer"
          title=""
          accent="Services"
          subtitle="I provide modern web solutions to help businesses and individuals build their online presence."
        />

        <span className="hand" aria-hidden="true" style={{ position: 'absolute', top: 6, right: 0, textAlign: 'center', transform: 'rotate(-6deg)' }}>
          Your Idea
          <br />
          My Code
          <br />
          Our Success
        </span>

        <div className="services-grid">
          {services.map((s, i) => {
            const Icon = icons[s.icon] ?? Layout;
            return (
              <article key={s.title} className="card service-card reveal" style={{ '--delay': `${i * 70}ms` }}>
                <span className="service-icon" aria-hidden="true"><Icon size={21} /></span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <ul className="feature-list">
                  {s.features.map((f) => (
                    <li key={f}>
                      <Check size={15} aria-hidden="true" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="service-foot">
                  <a className="round-arrow" href="#contact" aria-label={`Ask about ${s.title}`}>
                    <ArrowRight size={17} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
