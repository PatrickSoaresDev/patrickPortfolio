# Patrick Soares — Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15.5.15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

Personal site focused on **backend engineering**, technical leadership, and a modern stack (Next.js, TypeScript, Tailwind). It includes hero, about, skills, experience, GitHub projects, and a contact form.

## Live demo

- **Production:** [patricksoares.dev](https://www.patricksoares.dev/)

## About

**Patrick Soares** — backend engineer with experience in distributed systems, APIs, Javascript, Node.js, cloud, and CI/CD. Site copy is available in **Portuguese** and **English** (toggle in the header).

## Tech stack

| Area            | Technologies                                                                 |
| --------------- | ---------------------------------------------------------------------------- |
| Framework       | Next.js 15 (App Router), React 19                                            |
| Language        | TypeScript                                                                   |
| Styling         | Tailwind CSS 4                                                               |
| UI              | Radix UI, shared components (`components/ui`)                                |
| Animation       | Framer Motion / Motion                                                       |
| Email (contact) | Resend (API route `/api/contact`)                                            |
| Deploy          | Vercel-friendly; optional Cloudflare Pages scripts (`pages:build`, Wrangler) |

## Features

- SEO: metadata, Open Graph, JSON-LD, `sitemap.ts`, `robots.ts`
- Light / dark / system theme (`next-themes`)
- Internationalization (PT · EN) via locale context
- GitHub pinned repos section (optional: `GITHUB_TOKEN` in `.env.local`)
- Extra static pages: `/cloud-engineer`, `/devops-engineer`

## Project structure (overview)

```
src/
├── app/                 # App Router routes, layout, API (contact, resume)
├── components/
│   ├── main/            # Hero, About, Skills, Timeline, Projects, Contact, Footer, Navbar
│   ├── sub/             # Hero content and other blocks
│   └── ui/              # Shared UI primitives
├── config/              # site.ts, translations, project cover images
├── contexts/            # Locale (language)
└── lib/                 # Utilities (e.g. GitHub repos)
```

## Local development

**Requirements:** Node.js 18+

```bash
git clone <your-repo-url>
cd patrick-portfolio
npm install
```

Create `.env.local` with the variables you need, for example:

- `NEXT_PUBLIC_SITE_URL` — canonical URL (e.g. `http://localhost:3000` in dev)
- `RESEND_API_KEY` — required for the contact form to send email
- `GITHUB_TOKEN` — optional, to list pinned repositories in the projects section

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## Useful scripts

| Command               | Description               |
| --------------------- | ------------------------- |
| `npm run dev`         | Dev server (Turbopack)    |
| `npm run dev:webpack` | Dev with webpack          |
| `npm run clean`       | Remove the `.next` folder |
| `npm run lint`        | ESLint                    |

## License

See [LICENSE](LICENSE) (MIT unless stated otherwise in this repository).

## Contact

- **Website:** [patricksoares.dev](https://www.patricksoares.dev/)
- **GitHub:** [@PatrickSoaresDev](https://github.com/PatrickSoaresDev)
- **LinkedIn:** [patricksoaresdev](https://www.linkedin.com/in/patricksoaresdev/)
- **Email:** contact@patricksoares.dev

---

## Credits & fork chain

This repository was **adapted from [Hasan Ashab](https://github.com/HasanAshab)**’s portfolio (`HasanAshab/portfolio`), which provided the initial layout, sections, and part of the project structure.

In **Hasan’s own repository**, he **already credits** his project as a fork / derivative of **[Ashlok Chaudhary](https://github.com/ashlok2003)**’s work — so the inspiration chain is: **Ashlok Chaudhary → Hasan Ashab → Patrick Soares** (this version).

Thanks to both for sharing their work as open source.
