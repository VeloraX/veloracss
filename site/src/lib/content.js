export const siteNavigation = [
  { href: '/', label: 'Home' },
  { href: '/docs', label: 'Docs' },
  { href: '/tracker', label: 'Tracker' },
  { href: '/examples', label: 'Examples' },
  { href: '/proof', label: 'Proof' }
];

export const docsCards = [
  {
    eyebrow: 'Docs',
    title: 'Install, API rules, and runtime hooks',
    copy: 'Read the frozen 0.1 contract, selector families, package outputs, and practical usage guidance.',
    href: '/docs'
  },
  {
    eyebrow: 'Tracker',
    title: 'Follow the live planning board',
    copy: 'Open the public tracker page for the current GitHub Project, lane health, and the cards the Discord surface is reading from.',
    href: '/tracker'
  },
  {
    eyebrow: 'Examples',
    title: 'See assembled patterns in context',
    copy: 'Browse dashboard, settings, and launch-oriented examples built from the starter surface.',
    href: '/examples'
  },
  {
    eyebrow: 'Proof',
    title: 'Inspect the raw validation harness',
    copy: 'Open the proof surface used to validate utilities, components, and helper behavior.',
    href: '/proof'
  }
];

export const familyCards = [
  {
    eyebrow: 'Foundation',
    title: 'Layout and composition',
    copy: 'Start with the page frame and spacing rhythm, then layer rows, grids, and alignment helpers on top.',
    chips: ['vel-shell', 'vel-stack-*', 'vel-grid-*', 'vel-justify-*'],
    note: 'Think container, rhythm, layout, and alignment before components.'
  },
  {
    eyebrow: 'Tokens and utilities',
    title: 'Spacing, sizing, surfaces, effects',
    copy: 'These utilities control spacing, readable widths, surface tone, border treatment, and elevation.',
    chips: ['vel-p*', 'vel-gap-*', 'vel-max-w-*', 'vel-bg-*', 'vel-shadow-*'],
    note: 'Use these to shape density and hierarchy without custom one-off CSS.'
  },
  {
    eyebrow: 'Typography',
    title: 'Readable roles and tone',
    copy: 'Type roles cover large hero headings, section titles, body copy, supportive tone, and monospace accents.',
    chips: ['vel-display', 'vel-headline', 'vel-body', 'vel-text-*', 'vel-font-*'],
    note: 'The goal is consistent roles, not a giant bag of random font overrides.'
  },
  {
    eyebrow: 'Core UI',
    title: 'Forms, cards, buttons, alerts',
    copy: 'These are the starter controls for real product screens: actions, forms, validation copy, and status messaging.',
    chips: ['vel-button*', 'vel-form', 'vel-input*', 'vel-alert*'],
    note: 'The baseline stays sharper and more restrained than pill-heavy UI kits.'
  },
  {
    eyebrow: 'Navigation and flow',
    title: 'Shell orientation and progress',
    copy: 'Use these pieces to orient the page, move between views, and show staged progress without a heavy runtime layer.',
    chips: ['vel-navbar*', 'vel-breadcrumb*', 'vel-tabs', 'vel-steps'],
    note: 'They are meant for docs shells, dashboards, and setup flows.'
  },
  {
    eyebrow: 'Actions and overlays',
    title: 'Focused interaction surfaces',
    copy: 'This group covers toolbars, grouped actions, menus, modal shells, toast feedback, and the small runtime hooks that support them.',
    chips: ['vel-action-*', 'vel-dropdown*', 'vel-modal*', 'data-vel-toggle'],
    note: 'The JS surface stays narrow: open, close, and toggle only.'
  }
];