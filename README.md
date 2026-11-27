<div align="center">
# Nayan | Web Developer Portfolio
 
**A premium dark and neon-blue developer portfolio built with React and Vite.**
 
[**Live Site**](https://nayann-portfolio.netlify.app/)
 
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/Plain_CSS-1572B6?logo=css3&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Yes-00AEEF)
 
</div>
---
 
## About
 
This is my personal portfolio website. It shows my skills, projects, experience and services, and lets clients contact me through a validated contact form.
 
## Features
 
- Sections: Home, About, Skills, Projects, Experience, Services and Contact
- Dark theme with neon-blue accents, written in plain CSS (no CSS framework)
- Smooth scroll-reveal animations and active-section highlighting in the navbar
- Project cards with screenshots, tech tags, live links and GitHub links
- Contact form with validation, error states and a success message
- Downloadable CV
- Back-to-top button and a fully responsive layout
- Inline SVG tech logos, so no extra icon images are loaded
- Optional single-file build (one self-contained `index.html`)
## Tech Stack
 
| Tool | Use |
| --- | --- |
| React 18 | UI components |
| Vite 5 | Dev server and build tool |
| Lucide React | Icons |
| vite-plugin-singlefile | Optional single-file build |
| Plain CSS | Styling |
| Google Fonts | Sora, Inter, Caveat and JetBrains Mono |
 
## Project Structure
 
```
portfolio/
├── public/
│   ├── img/                  # Project screenshots
│   └── Nayan-CV.pdf
├── src/
│   ├── assets/               # Portraits (embedded as data URIs)
│   ├── components/           # Navbar, Hero, About, Skills, Projects,
│   │                         # Experience, Services, Contact, Footer,
│   │                         # BackToTop, TechIcon, Shared
│   ├── data/                 # site.js, skills.js, projects.js,
│   │                         # experience.js, services.js
│   ├── hooks/                # useReveal, useActiveSection
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```
 
## Getting Started
 
**Requirements:** [Node.js](https://nodejs.org) (LTS version)
 
```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/portfolio.git
cd portfolio
 
# 2. Install dependencies
npm install
 
# 3. Start the dev server
npm run dev
```
 
Open `http://localhost:5173`.
 
## Scripts
 
| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server |
| `npm run build` | Creates a production build in `dist/` |
| `npm run preview` | Previews the production build |
| `SINGLE_FILE=1 npm run build` | Builds one self-contained `dist/index.html` you can open directly |
 
## Customization
 
| What to change | File |
| --- | --- |
| Name, email, phone, social links | `src/data/site.js` |
| Projects, links and screenshots | `src/data/projects.js` |
| Skills | `src/data/skills.js` |
| Experience timeline | `src/data/experience.js` |
| Services | `src/data/services.js` |
| CV file | `public/Nayan-CV.pdf` |
 
**Adding a project:** copy one block in `src/data/projects.js`, put the screenshot in `public/img/` and point `image` to it (for example `/img/my-project.webp`).
 
## Contact Form
 
The form validates the name, email and message in the browser, then sends the message to a Google Apps Script web app. To use your own, replace the `GOOGLE_SCRIPT_URL` value in `src/components/Contact.jsx`.
 
If you want to save messages in your own database instead, replace the request in `submitMessage()` with a call to your backend:
 
```js
await fetch("https://your-backend.example.com/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(values),
});
```
 
## Deployment
 
```bash
npm run build
```
 
Upload the `dist/` folder to **Netlify** or **Vercel**, or connect this repo for automatic deploys.
 
| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `dist` |
 
## Featured Projects
 
| Project | Tech | Link |
| --- | --- | --- |
| E-Commerce Website | React, Tailwind, Node.js | [Live](https://nextzodi.netlify.app/) |
| Portfolio Website | React, Framer Motion | [Live](https://autocraftweb.netlify.app/) |
| Om Beauty Care | React, Vite, CSS, Framer Motion | [Live](https://om-beauty-care.netlify.app/) |
| Lumina (Social Media Platform) | React, Node.js, MongoDB | [Live](https://lumina-social-platform.netlify.app/) |
 
## Connect
 
- GitHub: [NayanKindarkhediya](https://github.com/NayanKindarkhediya)
- LinkedIn: [Nayan Kindarkhediya](https://linkedin.com/in/nayan-kindarkhediya-872b9242b)
- Instagram: [@nayan.kindarkhediya](https://www.instagram.com/nayan.kindarkhediya)
<div align="center">
If you like this project, give it a star.
 
</div>
 
