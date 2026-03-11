# VeloraCSS

VeloraCSS is restarting from a clean slate as a utility-first CSS framework with polished starter components.

## Current direction

- Utility-first API with a strict `vel-` public surface.
- Token-led theming through `--vel-*` custom properties.
- Lightweight, optional JavaScript for progressive enhancement only.
- Sharper default geometry: reduced roundness is the Velora standard unless a component explicitly opts into pills.
- Public product work will follow after the core API is stable.

## Getting started

```bash
npm install
npm run build
```

The build outputs compiled assets to `dist/`.

It also writes `dist/velora.manifest.json`, which is the machine-readable 0.1 public API manifest.

## Release flow

```bash
npm run release:verify
```

This now runs the build, audits docs references against `dist/velora.manifest.json`, and then performs a dry-run package check.

For the remaining npm publication setup, see `NPM_PUBLISHING.md`.

## Current scaffold

- `src/tokens.css`: design tokens
- `src/reset.css`: opinionated reset
- `src/utilities/`: first utility packs
- `src/components/`: first starter components
- `src/velora.js`: optional helper runtime
- `proof.html`: local proof surface for early validation

## Product integration notes

- `TRACKER_SYNC_SPEC.md`: bidirectional sync contract for GitHub Projects and the Discord tracker app
- `API_SURFACE.md`: frozen 0.1 public API rules and stable surface summary
- `NPM_PUBLISHING.md`: repo-side publish flow and remaining manual npmjs settings checklist
