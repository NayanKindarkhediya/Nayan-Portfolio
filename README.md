# Nayan — Portfolio (React + Vite)

Premium dark/neon-blue developer portfolio. No CSS framework, no runtime image requests —
the portrait is embedded as a data URI and every tech logo is inline SVG.

## Run it in Chrome

```bash
npm install
npm run dev
```

Vite opens http://localhost:5173 in your default browser (Chrome if it's set as default).

## Build

```bash
npm run build       # normal dist/ build
npm run preview     # preview the production build

SINGLE_FILE=1 npm run build   # one self-contained dist/index.html you can open directly
```

## Structure

```
src/
  assets/portrait.js        portrait as a base64 data URI
  components/               Navbar, Hero, About, Skills, Projects,
                            Experience, Services, Contact, Footer,
                            BackToTop, TechIcon, Shared
  data/                     site.js, skills.js, projects.js,
                            experience.js, services.js
  hooks/                    useReveal.js, useActiveSection.js
  App.jsx  main.jsx  index.css
```

## Things to edit first

- `src/data/site.js` — name, email, phone, social links.
- `src/data/projects.js` — real project links + descriptions.
- `src/components/Projects.jsx` — swap the `<Thumb />` SVG mock-ups for real
  screenshots (`<img src="..." alt="..." />`).
- `src/components/About.jsx` — point "Download CV" at your PDF
  (`<a href="/cv.pdf" download>`), with the file in `public/`.
- `src/components/Contact.jsx` — `submitMessage()` currently simulates a send.
  Replace its body with a real request when you have a backend:

  ```js
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });
  return { ok: res.ok };
  ```

Validation, error states and the success message already work — only the network
call is stubbed.
