# VeloraCSS

VeloraCSS is restarting from a clean slate as a utility-first CSS framework with polished starter components.

## Current direction

- Utility-first API with a strict `vel-` public surface.
- Token-led theming through `--vel-*` custom properties.
- Lightweight, optional JavaScript for progressive enhancement only.
- Public product work will follow after the core API is stable.

## Getting started

```bash
npm install
npm run build
```

The build outputs compiled assets to `dist/`.

## Current scaffold

- `src/tokens.css`: design tokens
- `src/reset.css`: opinionated reset
- `src/utilities/`: first utility packs
- `src/components/`: first starter components
- `src/velora.js`: optional helper runtime
- `proof.html`: local proof surface for early validation
