# MeTube 🎬🚀

Welcome to **MeTube** — a full-stack, YouTube-inspired portfolio and project showcase platform! This monorepo is a modern, production-grade MERN stack application, meticulously crafted to look and feel like YouTube, but designed to tell your unique developer story. Every pixel, animation, and interaction is engineered for clarity, responsiveness, and a jaw-dropping first impression.

---

## 🌟 Features at a Glance

- **YouTube-Style UI:** AppBar, sidebar, hero carousel, and grid layouts that mirror the real YouTube experience.
- **SPA Navigation:** Lightning-fast routing with React Router, no page reloads.
- **Responsive Design:** Flawless on desktop, tablet, and mobile — with sidebar and bottom nav adapting to screen size.
- **Interactive Animations:** Framer Motion-powered carousels, animated dropdowns, and micro-interactions.
- **Portfolio-Driven Content:** Projects, achievements, blog teasers, and contact form — all customizable.
- **Production-Ready Build:** Vite, Tailwind CSS, and GitHub Actions for blazing-fast CI/CD and deployment to GitHub Pages.

---

## 🏗️ Project Structure

```
MeTube/
├── client/           # React frontend (YouTube-style UI)
│   ├── src/
│   │   ├── components/   # Header, Sidebar, Carousel, etc.
│   │   ├── pages/        # Home, About, Achievements, ...
│   │   └── ...
│   ├── public/
│   ├── index.html
│   ├── package.json
│   └── ...
├── server/           # Express backend (API, MongoDB)
│   ├── index.js
│   ├── package.json
│   └── ...
├── .github/workflows/ # GitHub Actions CI/CD
│   └── gh-pages.yml
├── README.md
└── ...
```

---

## 🚀 Getting Started

### 1. Clone the Repo
```sh
# SSH
git clone git@github.com:ObviouslySarang/MeTube.git
# or HTTPS
git clone https://github.com/ObviouslySarang/MeTube.git
cd MeTube
```

### 2. Start the Client (Frontend)
```sh
cd client
npm install
npm run dev # Local dev server at http://localhost:5173
```

### 3. Start the Server (Backend)
```sh
cd server
npm install
node index.js # API at http://localhost:5000
```

---

## 🌐 Live Demo (GitHub Pages)

Every push to `main` automatically builds and deploys the frontend to GitHub Pages:
👉 **https://obviouslysarang.github.io/MeTube/**

---

## 🎨 UI/UX Highlights

- **Header:** Custom SVG logo, search with live dropdown, voice button, add-new menu, theme toggle, user avatar/profile menu.
- **Sidebar/BottomNav:** Iconic navigation, collapsible, with active state and smooth transitions.
- **Home:** Hero carousel (Framer Motion), latest highlights grid (YouTube video tile style).
- **About:** Profile, journey, skills, and timeline — all in a clean, card-based layout.
- **Achievements:** Masonry grid, filterable, with modal certificate viewer.
- **Projects:** Gallery, filter bar, detail modal/page, and GitHub stars counter.
- **Blog & Contact:** Up-next teasers, animated contact form with toast notifications.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Tailwind CSS 4, React Router 7, Framer Motion, Vite
- **Backend:** Express 5, Mongoose 8, dotenv, cors
- **CI/CD:** GitHub Actions, peaceiris/actions-gh-pages
- **Deployment:** GitHub Pages (static frontend)

---

## 📝 Customization & Extensibility

- **Add your own projects, achievements, and blog posts** by editing the data in `/client/src/pages/` and `/components/`.
- **Style and theme** via Tailwind config and CSS utility classes.
- **API endpoints** can be extended in `/server/index.js` for dynamic content.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

MIT

---

## 💬 Questions?

Open an issue or reach out via the contact form on the deployed site!
