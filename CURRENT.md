# CURRENT

VeloraCSS has been reset to a clean slate.

## Immediate target

Build a disciplined core that mixes:

- Tailwind-style utility density and composability
- Bootstrap-style starter components and product discipline
- Velora-native naming, tokens, and visual language

## Phase 1

- Establish package and build pipeline
- Rebuild core tokens, reset, utilities, and starter components
- Keep a proof surface for fast iteration

## Current slice

- Overlay and action starter components now exist on top of the expanded utility base
- Proof page now validates menus, modal shells, toasts, action bars, nav bars, breadcrumbs, tabs, pagination, staged steps, forms, feedback, and the optional runtime toggle
- The build now emits a machine-readable API manifest so the 0.1 public surface can be frozen intentionally
- Repo-side npm publishing flow is now wired through package metadata, verification scripts, and a GitHub Actions publish workflow
- The first public product shell now exists with a homepage, docs page, examples page, and shared site-only styling on top of the frozen framework API
- A root-level docs audit now checks public docs and examples references against dist/velora.manifest.json to reduce docs drift

## Next focus

- Complete the remaining npmjs package settings and first publish verification on the account side
- Expand the docs shell into fuller coverage and audit page claims against the shipped manifest
- Keep package hardening and public API freeze in view as the next release-readiness checkpoints
- Treat GitHub Projects and the Discord tracker app as a synchronized project surface, not separate planning systems

## Upcoming Queue

- Next: complete npmjs package settings verification
- Next after that: expand docs coverage on top of the new public shell
- Next after that: audit docs coverage against the shipped manifest

## Product Requirement

- The Discord tracker app must reflect GitHub Project state changes
- The GitHub Project must also accept intentional writeback from the Discord tracker app
- Sync needs a clear authority model, durable item mapping, audit visibility, and loop prevention
- The concrete contract lives in TRACKER_SYNC_SPEC.md

## Phase 2

- Freeze public naming grammar
- Expand utilities and components intentionally
- Stand up docs, home, and examples surfaces
