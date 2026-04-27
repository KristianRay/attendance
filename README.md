# Attendance — Discord Community Server Website

A website for the **Attendance** Discord community server. Built for gamers and friends who want a fun and welcoming space to connect, play, and hang out.

🔗 **Live:** [attendance-264w.vercel.app](https://attendance-264w.vercel.app)
💬 **Discord:** [discord.com/invite/ngZ7F84N](https://discord.com/invite/ngZ7F84N)

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero video backdrop + activity grid (Competitive, Hangouts, FPS, Squad Up) |
| `/info` | About the server, Discord invite link, and founding members profiles |
| `/activities` | Gaming, Voice Chats, and Fun sections with autoplay video previews |
| `/rules` | Server guidelines and community rules |
| `/feedback` | Google Form embed for community feedback |
| `*` | Custom 404 not found page |

---

## Features

- Autoplay hero video backdrop hosted on Cloudinary
- Responsive navbar with hamburger menu for mobile
- Founding members section with Discord profile links
- Activities showcase with alternating layout and autoplay videos
- Google Form embedded feedback page
- Custom 404 page
- SEO optimized — Open Graph, Twitter Card, JSON-LD structured data, Google Search Console
- Security headers via `vercel.json` (CSP, X-Frame-Options, Referrer-Policy, etc.)
- Client-side routing support via Vercel rewrites

---

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM v7](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- Deployed on [Vercel](https://vercel.com/)

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
attendance/
├── public/
│   ├── logo.png
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   ├── members/        # Founding member profile images
│   │   └── ...             # Activity and hero images
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── ActivitiesPage.jsx
│   │   ├── FeedbackPage.jsx
│   │   ├── InfoPage.jsx
│   │   ├── NotFoundPage.jsx
│   │   └── RulesPage.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html              # SEO, OG, Twitter Card, JSON-LD meta tags
├── vercel.json             # Rewrites + security headers
└── vite.config.js
```

---

## Founding Members

| Name | Role |
|------|------|
| MODGE | Graphic Designer |
| CHIVS | Developer & Digital Creator |
| YEAHG | Developer & UI Creator |
| KAZUMI | Co-founder |
| ZIRK | Developer & Web3 Enthusiast |

---

## Credits

Designed and developed by **Zirk**

| Platform | Link |
|----------|------|
| GitHub | [KristianRay](https://github.com/KristianRay) |
| Twitter/X | [@ggzirky](https://x.com/ggzirky) |
| Discord | [Zirk](https://discord.com/users/747803789901168770) |
| Portfolio | [zirkportfolio.vercel.app](https://zirkportfolio.vercel.app) |

---

© 2026 ATTENDANCE. All rights reserved.
