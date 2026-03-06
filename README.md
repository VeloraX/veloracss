# VeloraCSS

A fully original utility-first CSS framework with rich components, responsive variants, and zero dependencies on Tailwind, Bootstrap, or Bulma.

---

## What is VeloraCSS?

VeloraCSS gives you a low-level set of composable utility classes and production-ready components that let you build any design directly in your HTML — no configuration required to get started, and fully customizable when you need it.

Every class, custom property, and token is prefixed with `vel-` / `--vel-` to keep your codebase clean and collision-free.

---

## Features

- **Utility-first** — hundreds of single-purpose classes covering layout, spacing, typography, color, flexbox, grid, and more
- **Rich components** — `vel-btn`, `vel-card`, `vel-badge`, `vel-alert`, and others ship ready to use
- **Responsive breakpoints** — `vel-sm:`, `vel-md:`, `vel-lg:`, `vel-xl:`, `vel-2xl:` prefixes on most utilities
- **State variants** — `vel-hover:`, `vel-focus:`, `vel-active:`, `vel-dark:` for interactive and theme-aware styles
- **Design tokens** — consistent spacing scale, color palette, and typography via CSS custom properties (`--vel-color-primary`, `--vel-space-4`, etc.)
- **No build step required** — drop in the prebuilt `velora.css` and start writing classes
- **Zero dependencies** — no JavaScript runtime, no framework lock-in

---

## Getting Started

### CDN (quickest)

```html
<link rel="stylesheet" href="https://unpkg.com/veloracss/dist/velora.min.css">
```

### npm

```bash
npm install veloracss
```

```js
import 'veloracss/dist/velora.css'
```

---

## Basic Usage

```html
<!-- Button -->
<button class="vel-btn vel-btn-primary">Get Started</button>

<!-- Card -->
<div class="vel-card">
  <div class="vel-card-header">Card Title</div>
  <div class="vel-card-body">Card content goes here.</div>
</div>

<!-- Flex layout -->
<div class="vel-flex vel-items-center vel-gap-4 vel-p-6">
  <span class="vel-text-lg vel-font-bold vel-text-primary">VeloraCSS</span>
</div>

<!-- Responsive grid -->
<div class="vel-grid vel-grid-cols-1 vel-md:grid-cols-3 vel-gap-6">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

---

## Playground

Try VeloraCSS live in the browser — no install needed:

**[VeloraCSS Playground →](https://playground.veloracss.com)**

Write HTML using `vel-*` classes and see the result instantly. Load built-in examples, toggle between device sizes, and share your work via URL.

---

## Project Structure

```
src/
  tokens.css          # CSS custom properties (--vel-*)
  reset.css           # Modern CSS reset
  utilities/          # All utility classes (vel- prefix)
  components/         # Component classes (vel-btn, vel-card, etc.)
  velora.css          # @import entry point
dist/
  velora.css          # Full build
  velora.min.css      # Minified build
playground/           # Live demo app (Vite + React + Monaco)
build.mjs             # PostCSS build script
```

---

## Building from Source

```bash
npm install
npm run build
```

This runs PostCSS through `build.mjs`, which:
1. Processes `src/velora.css` via `postcss-import` → `autoprefixer` → `cssnano`
2. Generates responsive variants (`@media` blocks for `sm` through `2xl`)
3. Generates state variants (`hover:`, `focus:`, `active:`, `dark:` selectors)
4. Writes `dist/velora.css` and `dist/velora.min.css`

### Running the Playground

```bash
cd playground
npm install
npm run dev
```

---

## Naming Conventions

| Type | Pattern | Example |
|---|---|---|
| Utility class | `vel-{property}-{value}` | `vel-text-lg`, `vel-p-4`, `vel-flex` |
| Component class | `vel-{component}` | `vel-btn`, `vel-card`, `vel-badge` |
| Responsive variant | `vel-{bp}:{utility}` | `vel-md:hidden`, `vel-lg:flex` |
| State variant | `vel-{state}:{utility}` | `vel-hover:bg-primary`, `vel-focus:ring` |
| CSS custom property | `--vel-{token}` | `--vel-color-primary`, `--vel-space-4` |

---

## Customization

Override any design token at the `:root` level in your own CSS:

```css
:root {
  --vel-color-primary: #7c3aed;
  --vel-radius-base: 0.75rem;
  --vel-font-sans: 'Inter', system-ui, sans-serif;
}
```

---

## License

MIT — free to use in personal and commercial projects.
