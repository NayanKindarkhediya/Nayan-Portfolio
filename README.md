<div align="center">
# Nayan | Web Developer Portfolio
 
**A premium dark and neon-blue developer portfolio.**
 
[**Live Site**](https://nayann-portfolio.netlify.app/)
 
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
 
</div>
---
 
## About
 
This is my personal portfolio website. It shows my skills, projects, experience and services, and lets clients contact me through a validated contact form. The repo has two parts:
 
- **`portfolio/`**: the React + Vite frontend
- **`server/`**: an optional Express + MongoDB backend that saves contact form messages
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
### Backend features
 
- Saves contact messages in MongoDB
- Rate limiting (max 5 messages per IP every 15 minutes)
- Helmet security headers, CORS allow-list, body size limit and input validation
- Admin API (protected by a secret key) to list, mark as read and delete messages
- Unit tests for the validation logic
## Tech Stack
 
| Layer | Technology |
| --- | --- |
| Frontend | React 18, Vite 5, Lucide React, plain CSS |
| Backend | Node.js (18+), Express 4, Mongoose 8 |
| Database | MongoDB (Atlas or local) |
| Security | Helmet, CORS, express-rate-limit |
 
## Project Structure
 
```
nayan-portfolio/
├── portfolio/                  # Frontend
│   ├── public/
│   │   ├── img/                # Project screenshots
│   │   └── Nayan-CV.pdf
│   └── src/
│       ├── components/         # Navbar, Hero, About, Skills, Projects,
│       │                       # Experience, Services, Contact, Footer...
│       ├── data/               # site.js, skills.js, projects.js,
│       │                       # experience.js, services.js
│       ├── hooks/              # useReveal, useActiveSection
│       ├── App.jsx
│       └── index.css
└── server/                     # Backend (optional)
    ├── src/
    │   ├── routes/             # contact.js, admin.js
    │   ├── models/Message.js
    │   ├── validate.js
    │   ├── app.js
    │   └── index.js
    ├── test/validate.test.js
    └── .env.example
```
 
## Getting Started
 
**Requirements:** [Node.js](https://nodejs.org) 18 or higher
 
### Frontend
 
```bash
git clone https://github.com/<your-username>/nayan-portfolio.git
cd nayan-portfolio/portfolio
 
npm install
npm run dev
```
 
Open `http://localhost:5173`.
 
| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server |
| `npm run build` | Creates a production build in `dist/` |
| `npm run preview` | Previews the production build |
| `SINGLE_FILE=1 npm run build` | Builds one self-contained `dist/index.html` |
 
### Backend (optional)
 
```bash
cd server
npm install
cp .env.example .env     # then fill in your values
npm run dev              # http://localhost:5000
```
 
Environment variables:
 
| Variable | Description |
| --- | --- |
| `PORT` | Server port (default `5000`) |
| `MONGODB_URI` | MongoDB Atlas or local connection string |
| `ALLOWED_ORIGINS` | Frontend URLs allowed by CORS, separated by commas |
| `ADMIN_KEY` | Long random secret to protect the admin routes |
 
To connect the frontend to this backend, set the request URL in `portfolio/src/components/Contact.jsx` to `http://localhost:5000/api/contact` (or your deployed backend URL).
 
## API Endpoints
 
| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/health` | Server health check |
| `POST` | `/api/contact` | Save a new message (`name`, `email`, `message`) |
| `GET` | `/api/admin/messages?page=1&limit=20&unread=1` | List messages (admin) |
| `PATCH` | `/api/admin/messages/:id/read` | Mark a message read or unread (admin) |
| `DELETE` | `/api/admin/messages/:id` | Delete a message (admin) |
 
Admin routes need the header `x-admin-key: <your ADMIN_KEY>`.
 
```bash
curl -H "x-admin-key: YOUR_KEY" http://localhost:5000/api/admin/messages
```
 
Run the backend tests with `npm test`.
 
## Customization
 
| What to change | File |
| --- | --- |
| Name, email, phone, social links | `portfolio/src/data/site.js` |
| Projects, links and screenshots | `portfolio/src/data/projects.js` |
| Skills | `portfolio/src/data/skills.js` |
| Experience timeline | `portfolio/src/data/experience.js` |
| Services | `portfolio/src/data/services.js` |
| CV file | `portfolio/public/Nayan-CV.pdf` |
 
## Deployment
 
**Frontend** (Netlify or Vercel): set the base directory to `portfolio`, build command `npm run build`, publish directory `dist`.
 
**Backend** (Render or Railway): deploy the `server/` folder with build command `npm install` and start command `npm start`. Add `MONGODB_URI`, `ADMIN_KEY` and `ALLOWED_ORIGINS` as environment variables.
 
## Featured Projects
 
| Project | Tech | Links |
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
 
