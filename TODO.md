# VeloraCSS — Project Roadmap & Todo

_Last updated: 2026-03-10. Updated at every milestone. Add items here whenever a new task is identified._

---

## 🟣 ACTIVE — Val Migration Setup

- [x] Refresh GitHub CLI scopes with `read:project`, `project`, `repo`, and `read:org`
- [x] Connect this workspace to GitHub Projects via `gh`
- [x] Standardize a `Driver` field across VeloraX projects with `Copilot`, `User`, and `Shared`
- [x] Seed all six VeloraX projects with starter items:
  - [x] Project 5 — `VeloraCSS Plans`
  - [x] Project 6 — `VeloraCSS Retrospectives`
  - [x] Project 7 — `VeloraCSS Iterative Development`
  - [x] Project 8 — `VeloraCSS Bug Tracker`
  - [x] Project 9 — `VeloraCSS Future Releases`
  - [x] Project 10 — `VeloraCSS Team Planning`
- [x] Define the standalone repo cleanup scope before the first cleanup commit
  - Preserve for now: `.claude/`, `.github/`, and the already-dirty source/build areas under `src/`, `nextjs-demo/`, `playground/`, `build.mjs`, and `package.json`
  - Safe immediate cleanup targets: `CURRENT.md` and `innovation-demo.html`
  - Defer until replacement exists: committed static export under `docs/`
- [x] Create the first cleanup commit separately from Val engine work
  - Commit: `5d8c5fa2` — `chore: start val migration cleanup`
- [x] Start an isolated Val Phase 1 scaffold under `val/` while the legacy tree is still present
  - Added: `val/package.json`, `val/val.config.js`, `val/build.mjs`, `val/src/val.css`, and `val/proof.html`
  - Verified: `node .\val\build.mjs` generates `val/dist/val.css`
  - Expanded: theme-driven color, spacing, sizing, radius, shadow, typography, and starter component generation from `val.config.js`
- [x] Add responsive and state-prefixed variants to the isolated Val scaffold
  - Added configurable `breakpoints` and `states` in `val/val.config.js`
  - Verified generated selectors including `val-lg:grid-cols-2`, `val-hover:bg-brand`, `val-focus:border-brand`, and `val-active:bg-accent`
- [x] Expand isolated Val layout and sizing coverage
  - Added layout, sizing, positioning, and overflow utility generation from `val.config.js`
  - Build now emits `val/dist/val-manifest.json` with utility groups and counts for coverage visibility

---

## ✅ COMPLETE — Phases 1–6 (Framework Core)

- [x] Design tokens (`--vel-*` CSS custom properties) — DNA hue system via oklch()
- [x] Modern CSS reset
- [x] 300+ utility classes (layout, flexbox, grid, spacing, sizing, typography, colors, borders, effects, animations, interactivity, gradients, divide, ring, svg)
- [x] 29 components (button, card, badge, alert, input/form, navbar, progress, spinner, table, tabs, avatar, tooltip, modal, dropdown, pagination, toast, skeleton, breadcrumb, menu, steps, divider, kbd, accordion, code-block, chat-bubble, file-upload, hero, feature-list, pricing)
- [x] Responsive variants (vel-sm: / vel-md: / vel-lg: / vel-xl: / vel-2xl:)
- [x] State variants (vel-hover: / vel-focus: / vel-active:)
- [x] Build script (PostCSS + autoprefixer + cssnano) — 478.5KB / 388.4KB min

---

## ✅ COMPLETE — Framework Innovations

- [x] **Color Genetics** — `--vel-dna-hue` drives ALL colors via oklch(). One number = 50+ colors.
- [x] **Container Intelligence** — `vel-container-type-inline/size/normal` + `vel-@sm/md/lg:` variants
- [x] **CSS State Machine** — `vel-sm-tabs` / `vel-sm-toggle` — zero-JS tabs, toggles via :has()
- [x] **Scope Theming** — `data-vel-theme="ocean/forest/rose/amber/violet/cyan/slate/crimson"` per-subtree
- [x] **Smart Forms** — `vel-field` / `vel-field-input` / `vel-field-error` — :has(:invalid/:valid) CSS validation
- [x] **Fluid Scale** — all spacing/type tokens use clamp() — no breakpoints needed

---

## ✅ COMPLETE — Docs Site (142+ pages)

- [x] Docs infrastructure (sidebar nav, DocPage component, live preview, syntax highlighting)
- [x] macOS terminal style everywhere (red/yellow/green dots, filename center, Copy right)
- [x] Core Concepts (7 pages)
- [x] Base Styles (1 page)
- [x] Layout (20 pages)
- [x] Flexbox & Grid (23 pages)
- [x] Spacing (2 pages)
- [x] Sizing (6 pages)
- [x] Typography (14 pages)
- [x] Backgrounds (6 pages)
- [x] Borders (7 pages)
- [x] Effects (7 pages)
- [x] Animations (5 pages)
- [x] Interactivity (6 pages)
- [x] Components (25 pages)
- [x] Blocks (3 pages)
- [x] **Innovations (6 pages)** — Color Genetics, Container Queries, CSS State Machine, Scope Theming, Smart Forms, Fluid Scale

---

## ✅ COMPLETE — Homepage & Site

- [x] Tailwind-style marketing homepage (hero, DNA slider, innovation demos, showcase, stats, OSS banner)
- [x] Unsplash photo showcase section (real UI cards with photos)
- [x] Whale logo icon as browser favicon — site-wide (`app/icon.png`, `public/icon.png`, layout metadata)
- [x] OpenGraph / SEO metadata (og:image set to whale icon)
- [x] Live playground at `/veloracss/playground/`
- [x] Community nav link in homepage header (replaced duplicate Playground)
- [x] Deployed to GitHub Pages: https://velorax.github.io/veloracss/
- [x] Discord floating widget on homepage (live presence count + member list)
- [x] Shared `SiteHeader` component — consistent nav across all pages (Docs/Community/Playground/GitHub/Discord/ThemeToggle)
- [x] Community components registry page at `/community` (8 seed components, search, filter, modal preview + copy)
- [x] Community submission guide (`community/README.md` + `community/template.json`)

---

## ✅ COMPLETE — npm Package Prep (v1.0.0)

- [x] Version bumped to 1.0.0 across package.json, src/velora.css, homepage
- [x] package.json: exports map, files, main, keywords, license, author, homepage, repository, bugs
- [x] MIT LICENSE file
- [x] .npmignore (excludes nextjs-demo, playground, docs from package)
- [x] package name confirmed: `veloracss` — owned by spiritbocs on npm

---

## 🔴 IMMEDIATE — Monday Evening Launch

- [ ] **npm publish** — Monday EVENING after work
  - Token is set: automation token with 2FA bypass in .npmrc
  - Just run: `npm run build && npm publish`
- [ ] **Git release tag** — `git tag v1.0.0 && git push --tags`
- [ ] **GitHub Release** — draft release from tag v1.0.0 with changelog notes
- [ ] **Deprecate old npm versions**:
  - `npm deprecate veloracss@0.1.0 "Upgrade to v1.0.0 — full rewrite"`
  - `npm deprecate veloracss@0.1.2 "Upgrade to v1.0.0 — full rewrite"`
- [ ] **Bluesky** — grab @veloracss handle (Monday evening)
- [ ] **X/Twitter** — grab @veloracss handle (decide Monday evening)
- [ ] **Discord post** — announce community page, invite component submissions

---

## 🟡 SHORT-TERM — Post-launch v1.x

- [x] **CHANGELOG.md** — document what's new in v1.0.0 vs 0.x
- [x] **velora.config.js docs page** — how to override tokens and customize the framework
- [x] **Docs search** — already built into DocsSidebar (live filter on label + slug)
- [x] **CDN links** — jsDelivr / unpkg install option in Getting Started docs
- [x] QA pass on color-genetics + fluid-scale docs pages — 7 issues fixed (wrong token names, wrong clamp values, redundant classes)
- [ ] Product Hunt launch post (after npm is live)

---

## 🟠 MEDIUM-TERM — v1.x Roadmap

- [ ] **VS Code extension** — autocomplete for `vel-` classes
- [x] **velora.config.js** — build-time token overrides (TOKEN_MAP + loadConfig + :root injection in build.mjs)
- [ ] **Build-time purging** — strip unused classes for production
- [x] **Light mode** — `data-vel-mode="light"` support (src/modes.css — tokens + component overrides)
- [ ] **CLI** — `npx veloracss init`, `velora build`, `velora watch`
- [x] Contributing guide + issue templates — CONTRIBUTING.md + .github/ISSUE_TEMPLATE/ + PR template
- [x] Discord / community — https://discord.gg/RKmSyudqAv added to homepage footer + CONTRIBUTING.md

---

## 🔵 FUTURE — v2 Ideas

- [ ] JetBrains plugin
- [x] Charts — Bar chart (CSS flex + --vel-bar-h) + Progress Ring (SVG + --vel-ring-pct), docs page
- [x] Dark/light mode toggle on docs site — ThemeToggle in sidebar, persists via localStorage, full CSS-var theming
- [ ] **Mega Playground upgrade** — TOMORROW FIRST. Monaco editor + all 29 component gallery tabs + no-code token slider UI + config editor + instant preview + exportable share URL
- [ ] Dark/light mode toggle on playground site
- [x] Calendar component — full month grid, range selection, mini variant, event dots, disabled days, docs page
- [x] Carousel component — zero-JS :has() + radio inputs, up to 6 slides, dots, captions, arrows
- [ ] Social media presence (@veloracss on X/Twitter, Bluesky)
- [ ] Sponsorship / Open Collective
- [ ] F12 DevTools panel — inspect VeloraCSS tokens and component classes live in any page
- [ ] **velora.config.js GUI** — visual token editor on community/playground page, auto-generates config file
- [ ] **Community voting** — upvote components on the community page (GitHub stars or simple count API)
- [ ] **"Made with VeloraCSS" badge** — embeddable shield/badge for READMEs and sites
- [ ] **Template Gallery** — full-page layout templates (landing page, dashboard, blog, docs, SaaS, portfolio)
- [ ] **velora diff** CLI — shows which utilities you actually use vs total bundle, outputs a pruned build
- [ ] **Figma plugin** — generate vel- classes from selected Figma components
- [ ] **AI-assisted class suggestions** — type what you want ("make this card blue and shadowy") → vel- output

