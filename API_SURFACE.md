# VeloraCSS 0.1 API Surface

This document freezes the current public VeloraCSS 0.1 surface.

## Public Rules

- Public classes use the `vel-` prefix.
- Public design tokens use the `--vel-` prefix.
- Runtime hooks use explicit `data-vel-*` attributes.
- Default geometry is sharp-to-moderate, not pill-heavy. Rounded pills are opt-in, not the framework baseline.
- New public selectors should not be added casually; they should ship intentionally and appear in the generated manifest.

## Stable 0.1 Surface

Stable selector families currently shipped:

- Foundation: `vel-shell`
- Layout: `vel-stack-*`, `vel-cluster`, `vel-row*`, `vel-grid-*`
- Flex: `vel-flex*`, `vel-items-*`, `vel-justify-*`
- Spacing and sizing: `vel-p*`, `vel-px-*`, `vel-py-*`, `vel-gap-*`, `vel-mt-*`, `vel-w-full`, `vel-max-w-*`, `vel-min-h-card`
- Surface and effects: `vel-bg-*`, `vel-border*`, `vel-radius-*`, `vel-chip`, `vel-panel`, `vel-swatch`, `vel-shadow-*`, `vel-ring-primary`
- Typography: `vel-display`, `vel-headline`, `vel-title`, `vel-body*`, `vel-text-*`, `vel-font-*`, `vel-eyebrow`, `vel-card-eyebrow`
- Core components: `vel-button*`, `vel-card`, `vel-form`, `vel-field`, `vel-label`, `vel-input*`, `vel-select`, `vel-textarea`, `vel-help*`, `vel-check*`, `vel-control-group`, `vel-alert*`
- Navigation and flow: `vel-navbar*`, `vel-breadcrumb*`, `vel-tabs`, `vel-tab*`, `vel-pagination`, `vel-page-link`, `vel-steps`, `vel-step*`
- Actions and overlays: `vel-action-*`, `vel-toolbar`, `vel-button-group`, `vel-icon-button`, `vel-dropdown*`, `vel-modal*`, `vel-toast*`

## Runtime Surface

Stable runtime hooks currently shipped:

- `data-vel-toggle`
- `data-vel-open`
- `data-vel-close`

These hooks are intentionally narrow and support progressive enhancement only.

## Manifest Authority

The complete machine-readable selector list is generated into `dist/velora.manifest.json` during `npm run build`.

For release work, treat the manifest as the exact source for the frozen public surface and treat this document as the human-readable contract.