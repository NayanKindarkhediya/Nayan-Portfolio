import React from "react";
import { Code2, ArrowRight } from "lucide-react";
import { timeline } from "../data/experience";
import { SectionHeading } from "./Shared";

/** Abstract "climbing higher" scene that echoes the reference art without a photo. */
function Ridge() {
  return (
    <svg
      className="exp-ridge"
      viewBox="0 0 600 320"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 240 L120 150 L200 205 L300 92 L400 190 L490 140 L600 236 L600 320 L0 320 Z"
        fill="#020610"
        opacity="0.95"
      />
      <path
        d="M0 268 L90 214 L190 262 L300 186 L410 254 L520 206 L600 262 L600 320 L0 320 Z"
        fill="#010409"
      />
      <circle cx="300" cy="80" r="3.5" fill="#cfe4ff" />
      <path d="M300 84 v16" stroke="#cfe4ff" strokeWidth="1.4" />
    </svg>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="shell exp-grid">
        <div>
          <SectionHeading
            eyebrow="My Journey"
            title=""
            accent="Experience"
            subtitle="My professional journey so far — what I've learned, contributed to and grown through as a developer."
          />

          <ol
            className="timeline"
            style={{ listStyle: "none", padding: "0 0 0 34px", margin: 0 }}
          >
            {timeline.map((item, i) => (
              <li
                className="tl-item reveal"
                key={item.year}
                style={{ "--delay": `${i * 110}ms` }}
              >
                <span className="tl-dot" aria-hidden="true" />
                <p className="tl-year">{item.year}</p>
                <h3 className="tl-role">{item.role}</h3>
                <p className="tl-desc">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <video src="/img/ai.mp4" autoPlay muted loop />
        </div>
      </div>
    </section>
  );
}
