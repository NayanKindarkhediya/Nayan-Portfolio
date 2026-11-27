import React from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import { SectionHeading } from "./Shared";

/**
 * Type-specific UI illustrations stand in for real screenshots until the
 * user drops their own into public/projects/ (see projects.js `image`).
 * These are original vector art, not photos, so there's nothing to attribute.
 */
function Thumb({ kind }) {
  const chrome = (
    <>
      <rect x="0" y="0" width="320" height="200" fill="#05091a" />
      <rect x="0" y="0" width="320" height="18" fill="#0a1226" />
      <circle cx="11" cy="9" r="2.6" fill="#ff5f57" />
      <circle cx="21" cy="9" r="2.6" fill="#febc2e" />
      <circle cx="31" cy="9" r="2.6" fill="#28c840" />
      <rect x="60" y="4.5" width="200" height="9" rx="4.5" fill="#0f1c38" />
    </>
  );

  return (
    <svg
      viewBox="0 0 320 200"
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`g-${kind}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#123a86" />
          <stop offset="100%" stopColor="#050b18" />
        </linearGradient>
        <linearGradient id={`glow-${kind}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5ea3ff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#5ea3ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="0" y="18" width="320" height="182" fill={`url(#g-${kind})`} />
      {chrome}

      {kind === "shop" && (
        <>
          {/* top nav */}
          <rect
            x="16"
            y="30"
            width="46"
            height="9"
            rx="3"
            fill="#eaf2ff"
            opacity="0.9"
          />
          <rect x="238" y="30" width="66" height="16" rx="8" fill="#2f7bff" />
          {/* hero banner */}
          <rect x="16" y="50" width="288" height="46" rx="8" fill="#102a5e" />
          <rect
            x="28"
            y="62"
            width="120"
            height="8"
            rx="4"
            fill="#bcd4ff"
            opacity="0.85"
          />
          <rect
            x="28"
            y="76"
            width="80"
            height="6"
            rx="3"
            fill="#6f9be0"
            opacity="0.7"
          />
          <circle cx="262" cy="73" r="16" fill="#2f7bff" opacity="0.3" />
          {/* product grid */}
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect
                x={16 + i * 98}
                y={104}
                width="86"
                height="64"
                rx="7"
                fill="#0b1832"
                stroke="#2f7bff"
                strokeOpacity="0.4"
              />
              <rect
                x={24 + i * 98}
                y={112}
                width="70"
                height="34"
                rx="5"
                fill="#1b3e80"
              />
              <circle
                cx={82 + i * 98}
                cy="129"
                r="9"
                fill="#5ea3ff"
                opacity="0.4"
              />
              <rect
                x={24 + i * 98}
                y={150}
                width="46"
                height="6"
                rx="3"
                fill="#a9c6f2"
                opacity="0.85"
              />
              <rect
                x={24 + i * 98}
                y={159}
                width="26"
                height="6"
                rx="3"
                fill="#5ea3ff"
              />
            </g>
          ))}
          <rect
            x="0"
            y="170"
            width="320"
            height="30"
            fill={`url(#glow-${kind})`}
          />
        </>
      )}

      {kind === "portfolio" && (
        <>
          <circle
            cx="42"
            cy="52"
            r="16"
            fill="#1b3e80"
            stroke="#5ea3ff"
            strokeOpacity="0.6"
          />
          <rect
            x="68"
            y="42"
            width="90"
            height="9"
            rx="4.5"
            fill="#eaf2ff"
            opacity="0.92"
          />
          <rect
            x="68"
            y="56"
            width="60"
            height="6"
            rx="3"
            fill="#7fa8e8"
            opacity="0.75"
          />
          <rect x="234" y="40" width="70" height="20" rx="10" fill="#2f7bff" />
          <rect
            x="16"
            y="82"
            width="288"
            height="1"
            fill="#2f7bff"
            opacity="0.25"
          />
          <rect
            x="16"
            y="100"
            width="180"
            height="14"
            rx="4"
            fill="#dfeaff"
            opacity="0.92"
          />
          <rect
            x="16"
            y="120"
            width="230"
            height="6"
            rx="3"
            fill="#83a8e0"
            opacity="0.6"
          />
          <rect
            x="16"
            y="130"
            width="190"
            height="6"
            rx="3"
            fill="#83a8e0"
            opacity="0.45"
          />
          <rect x="16" y="148" width="64" height="18" rx="9" fill="#2f7bff" />
          <circle cx="258" cy="130" r="46" fill="#2f7bff" opacity="0.18" />
          <circle
            cx="258"
            cy="130"
            r="30"
            fill="#0d2350"
            stroke="#5ea3ff"
            strokeOpacity="0.55"
          />
          <path
            d="M246 130a12 12 0 1 1 24 0 12 12 0 0 1-24 0Z"
            fill="#5ea3ff"
            opacity="0.5"
          />
        </>
      )}

      {kind === "blog" && (
        <>
          <rect
            x="16"
            y="30"
            width="70"
            height="9"
            rx="4"
            fill="#eaf2ff"
            opacity="0.9"
          />
          <rect x="252" y="30" width="52" height="16" rx="8" fill="#2f7bff" />
          <rect
            x="16"
            y="52"
            width="196"
            height="116"
            rx="8"
            fill="#0b1832"
            stroke="#2f7bff"
            strokeOpacity="0.35"
          />
          <rect x="26" y="62" width="176" height="56" rx="6" fill="#14306a" />
          <path
            d="M26 118 62 90 96 108 140 78 202 108V118H26Z"
            fill="#1e50ac"
            opacity="0.8"
          />
          {[0, 1, 2].map((i) => (
            <rect
              key={i}
              x="26"
              y={128 + i * 12}
              width={i === 1 ? 130 : 168}
              height="6"
              rx="3"
              fill="#8fb6f2"
              opacity={0.75 - i * 0.15}
            />
          ))}
          <rect x="222" y="52" width="82" height="50" rx="7" fill="#102a5e" />
          <rect
            x="230"
            y="60"
            width="60"
            height="6"
            rx="3"
            fill="#a9c6f2"
            opacity="0.85"
          />
          <rect
            x="230"
            y="70"
            width="40"
            height="5"
            rx="2.5"
            fill="#6f9be0"
            opacity="0.6"
          />
          <rect x="222" y="108" width="82" height="50" rx="7" fill="#102a5e" />
          <rect
            x="230"
            y="116"
            width="60"
            height="6"
            rx="3"
            fill="#a9c6f2"
            opacity="0.85"
          />
          <rect
            x="230"
            y="126"
            width="40"
            height="5"
            rx="2.5"
            fill="#6f9be0"
            opacity="0.6"
          />
        </>
      )}
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Selected Work"
          title="My"
          accent="Projects"
          subtitle="Some of the projects I've built to improve my skills and solve real-world problems."
        />

        <div className="projects-grid">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="card project-card reveal"
              style={{ "--delay": `${i * 90}ms` }}
            >
              <div className="project-thumb">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    loading="lazy"
                    onError={(e) => {
                      // Falls back to the placeholder art if the image path is wrong/missing.
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextSibling.style.display = "block";
                    }}
                  />
                ) : null}
                <div style={{ display: p.image ? "none" : "block" }}>
                  <Thumb kind={p.art} />
                </div>
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <ul
                  className="tags"
                  style={{ listStyle: "none", padding: 0, margin: 0 }}
                >
                  {p.tags.map((t) => (
                    <li className="tag" key={t}>
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="project-actions">
                  <a
                    className="btn btn-primary"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    View Project <ExternalLink size={15} />
                  </a>
                  <a
                    className="icon-btn"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${p.title} on GitHub`}
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className="reveal"
          style={{ marginTop: 32, display: "flex", justifyContent: "center" }}
        >
          <a
            className="btn btn-ghost"
            href="https://app.netlify.com/teams/kindarkhediyanayan980/projects"
            target="_blank"
            rel="noreferrer noopener"
          >
            View All Projects <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
