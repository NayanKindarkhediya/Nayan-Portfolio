import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { profile, socials } from "../data/site";
import { SectionHeading, SocialIcon } from "./Shared";

const EMPTY = { name: "", email: "", message: "" };

/**
 * Swap this for a real request when a backend exists, e.g.
 *   await fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) })
 */

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyICHnyuOGU6tfcPcWPnjyj9pGqwpOMGNOp0b2GvncuXmkmxNOmp2zN5zgCS3yvCnrXTA/exec";
  
async function submitMessage(values) {
  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
    }),
  });
}

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2)
    errors.name = "Enter your name (at least 2 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Enter a valid email address.";
  if (values.message.trim().length < 10)
    errors.message = "Tell me a bit more — at least 10 characters.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("idle"); // idle | sending | sent

  const update = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((err) => ({ ...err, [key]: undefined }));
    if (state === "sent") setState("idle");
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length) return;

    setState("sending");

    try {
      await submitMessage(values);
      setState("sent");
      setValues(EMPTY);
    } catch (error) {
      console.error("Contact form error:", error);
      setState("idle");
      alert("Request failed. Please try again.");
    }
  };

  const lines = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    { icon: MapPin, label: "Location", value: profile.location },
  ];

  return (
    <section id="contact" className="section">
      <div className="shell contact-grid" style={{ position: "relative" }}>
        <div>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's Work"
            accent="Together"
            subtitle="Have a project in mind or just want to say hi? Feel free to reach out. I'd love to hear from you."
          />

          <div className="contact-lines">
            {lines.map((l) => {
              const Icon = l.icon;
              const body = (
                <>
                  <span className="ic" aria-hidden="true">
                    <Icon size={19} />
                  </span>
                  <span>
                    <span>{l.label}</span>
                    <strong>{l.value}</strong>
                  </span>
                </>
              );
              return l.href ? (
                <a className="contact-line reveal" key={l.label} href={l.href}>
                  {body}
                </a>
              ) : (
                <div className="contact-line reveal" key={l.label}>
                  {body}
                </div>
              );
            })}
          </div>

          <div className="socials reveal">
            {socials.map((s) => (
              <a
                className="icon-btn"
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.name}
              >
                <SocialIcon name={s.name} />
              </a>
            ))}
          </div>
        </div>

        <form className="card form-card reveal" onSubmit={onSubmit} noValidate>
          <div className={`field${errors.name ? " invalid" : ""}`}>
            <label htmlFor="cf-name">Your Name</label>
            <input
              id="cf-name"
              name="name"
              value={values.name}
              onChange={update("name")}
              placeholder="Enter your name"
              aria-invalid={!!errors.name}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className={`field${errors.email ? " invalid" : ""}`}>
            <label htmlFor="cf-email">Your Email</label>
            <input
              id="cf-email"
              name="email"
              type="email"
              value={values.email}
              onChange={update("email")}
              placeholder="Enter your email"
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className={`field${errors.message ? " invalid" : ""}`}>
            <label htmlFor="cf-message">Message</label>
            <textarea
              id="cf-message"
              name="message"
              value={values.message}
              onChange={update("message")}
              placeholder="Tell me about your project..."
              aria-invalid={!!errors.message}
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ justifyContent: "center" }}
            disabled={state === "sending"}
          >
            {state === "sending" ? (
              <>
                Sending
                <Loader2 size={17} className="spin" />
              </>
            ) : (
              <>
                Send Message <Send size={17} />
              </>
            )}
          </button>

          <p
            className="form-status"
            role="status"
            aria-live="polite"
            hidden={state !== "sent"}
          >
            <CheckCircle2 size={18} /> Message sent. I&apos;ll get back to you
            soon.
          </p>
        </form>
      </div>
    </section>
  );
}
