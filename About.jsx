import React from "react";
import { User, MapPin, Mail, Briefcase, Download } from "lucide-react";
import portraitAbout from "../assets/portraitAbout";
import { profile } from "../data/site";
import { SectionHeading } from "./Shared";

const info = [
  { icon: User, label: "Name", value: profile.name },
  { icon: Briefcase, label: "Role", value: "Web Developer" },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Mail, label: "Email", value: profile.email },
  {
    icon: Briefcase,
    label: "Experience",
    value: "1+ Years Learning & Building",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="shell about-grid">
        <div className="reveal" style={{ position: "relative" }}>
          <div className="about-frame">
            <img src={portraitAbout} alt="Portrait of Nayan" />
          </div>
          <span className="hand about-hand-1" aria-hidden="true">
            Web
            <br />
            Developer
          </span>
          <span className="hand about-hand-2" aria-hidden="true">
            Clean Code
            <br />
            Better Web
          </span>
        </div>

        <div>
          <SectionHeading eyebrow="Who I Am" title="About" accent="Me" />
          <p className="about-text reveal">{profile.about}</p>

          <dl className="info-list">
            {info.map((row, i) => {
              const Icon = row.icon;
              return (
                <div
                  className="info-row reveal"
                  key={row.label}
                  style={{ "--delay": `${i * 70}ms` }}
                >
                  <Icon size={17} aria-hidden="true" />
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              );
            })}
          </dl>

          <a
            className="btn btn-primary reveal"
            href="/Nayan-CV.pdf"
            download="Nayan-CV.pdf"
          >
            Download CV <Download size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
