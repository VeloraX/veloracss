# Changelog

All notable changes to VeloraCSS are documented here.

## [1.0.0] — 2026-03-08

### Added
- **Color Genetics** — `--vel-dna-hue` drives the entire color system via `oklch()`. One number changes 50+ derived colors: primary ramp, surfaces, borders, text, and all semantic tokens. Includes `[data-vel-theme]` scope selectors for 8 named presets (ocean, forest, rose, amber, violet, cyan, slate, crimson).
- **Container Intelligence** — `vel-container-type-inline`, `vel-container-type-size`, `vel-container-type-normal` utilities plus `vel-@sm:`, `vel-@md:`, `vel-@lg:` container-query responsive variants. Components now adapt to their own width, not the viewport.
- **CSS State Machine** — Zero-JS tabs via `vel-sm-tabs` + `:has()` + radio inputs. Zero-JS toggles/accordions via `vel-sm-toggle` + checkbox. No event listeners, no JavaScript.
- **Smart Forms** — `vel-field` / `vel-field-input` / `vel-field-label` / `vel-field-hint` / `vel-field-error` / `vel-field-ok` system. CSS `:has(:invalid/:valid)` drives live validation UI with zero JavaScript.
- **Scope Theming** — `data-vel-theme` attribute cascades a complete color universe to any subtree. Multiple themes can coexist on the same page.
- **Fluid Scale** — All spacing tokens (`--vel-space-1` through `--vel-space-16`) and type tokens (`--vel-size-sm` through `--vel-size-5xl`) use `clamp()` for smooth viewport-responsive scaling without breakpoints.
- **142+ documentation pages** across 17 sections including a full Innovations section
- **npm package** — `veloracss` on the npm registry. Install with `npm install veloracss`.
- MIT License
- Exports map: `veloracss`, `veloracss/min`, `veloracss/src`

### Changed
- Rebuilt token system around `oklch()` color model for perceptual uniformity
- Version bumped from 0.x to 1.0.0 — stable public API

### Framework Stats
- 478KB full bundle / 388KB minified
- 300+ utility classes
- 29 components
- 6 CSS innovations
- 0 dependencies

---

## [0.1.2] — 2025 (deprecated)

Legacy pre-release. Upgrade to v1.0.0.

## [0.1.0] — 2025 (deprecated)

Initial prototype. Upgrade to v1.0.0.
