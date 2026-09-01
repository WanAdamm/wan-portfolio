# Wan Portfolio

A static portfolio built with Astro and Tailwind CSS and deployed to GitHub Pages.

## Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local development server |
| `npm run check` | Run Astro and TypeScript diagnostics |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build and publish `dist/` to GitHub Pages |

## Content

- Site metadata, links, and navigation: `src/data/site.ts`
- Projects: `src/data/projects.ts`
- Case-study pages: `src/pages/case-studies/`
- Skills: `src/data/skills.ts`
- Timeline: `src/data/timeline.ts`
- Static assets: `public/`

The GitHub Pages base path is configured in `astro.config.mjs`. Use `assetPath()` from `src/data/site.ts` for public asset URLs so local and deployed paths remain consistent. The deploy script includes dotfiles so `public/.nojekyll` is preserved.
