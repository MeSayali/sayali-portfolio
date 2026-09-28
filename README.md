# Sayali Pawar — Portfolio

A personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, GSAP-ready structure, and Lenis smooth scrolling.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The build output goes to the `dist/` folder.

## Deploy to Vercel (fastest option)

**Option A — no install needed, drag and drop:**
1. Run `npm run build` locally to generate the `dist/` folder.
2. Go to https://vercel.com/new, sign in (free), and choose "Deploy" → drag the `dist` folder onto the page.
3. Vercel gives you a live `.vercel.app` link in under a minute.

**Option B — via the Vercel CLI (recommended for future updates):**
```bash
npm install -g vercel
vercel login
vercel
```
Follow the prompts (accept the defaults — Vercel auto-detects Vite). Every time you run `vercel --prod` afterward, it redeploys your latest changes.

**Option C — GitHub + Vercel (best for ongoing edits):**
1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com/new and import that repository.
3. Vercel auto-detects the Vite framework preset — just click Deploy.
4. Every future `git push` automatically redeploys the live site.

## Things to fill in before you publish

- `src/data/content.js` — two featured projects (A11yView, FacultyDesk) have empty `github` and `demo` fields marked `// TODO`. Add your repository/demo URLs there.
- `public/Sayali_Pawar_Resume.pdf` — replace this file any time you update your resume; the filename must stay the same, or update the reference in `src/data/content.js` (`resumeFile`).
- Tech icons live in `src/assets/icons/` — swap these if you want different logos.

## Notes

- The Contact section intentionally has no message form (removed per request) — it links directly to email, phone, GitHub, and LinkedIn.
- `@emailjs/browser` is included in dependencies in case you want to add a working contact form back in later; it isn't wired into any component currently.
