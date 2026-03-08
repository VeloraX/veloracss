import DocPage from '../_components/DocPage'

export default function ScopeThemingPage() {
  return (
    <DocPage
      title="Scope Theming"
      description="Apply data-vel-theme to any element to cascade a complete color universe to its subtree. Multiple themes can live side-by-side on the same page."
      source="tokens.css"
      table={[
        { class: 'data-vel-theme="ocean"',   properties: '--vel-dna-hue: 205 (blue-ocean)' },
        { class: 'data-vel-theme="forest"',  properties: '--vel-dna-hue: 145 (green-forest)' },
        { class: 'data-vel-theme="rose"',    properties: '--vel-dna-hue: 10 (pink-rose)' },
        { class: 'data-vel-theme="amber"',   properties: '--vel-dna-hue: 65 (warm-amber)' },
        { class: 'data-vel-theme="violet"',  properties: '--vel-dna-hue: 280 (purple-violet)' },
        { class: 'data-vel-theme="cyan"',    properties: '--vel-dna-hue: 195 (cyan)' },
        { class: 'data-vel-theme="slate"',   properties: '--vel-dna-hue: 220 (neutral-slate)' },
        { class: 'data-vel-theme="crimson"', properties: '--vel-dna-hue: 350 (red-crimson)' },
      ]}
      examples={[
        {
          label: 'Four themes side by side — same components, different data-vel-theme',
          html: `<div class="vel-grid vel-gap-3" style="grid-template-columns:repeat(2,1fr)">
  <div data-vel-theme="ocean" class="vel-card vel-p-4">
    <div class="vel-text-xs vel-font-bold vel-text-primary vel-mb-2" style="text-transform:uppercase;letter-spacing:0.1em">Ocean</div>
    <button class="vel-btn vel-btn-primary vel-btn-sm">Primary</button>
  </div>
  <div data-vel-theme="forest" class="vel-card vel-p-4">
    <div class="vel-text-xs vel-font-bold vel-text-primary vel-mb-2" style="text-transform:uppercase;letter-spacing:0.1em">Forest</div>
    <button class="vel-btn vel-btn-primary vel-btn-sm">Primary</button>
  </div>
  <div data-vel-theme="rose" class="vel-card vel-p-4">
    <div class="vel-text-xs vel-font-bold vel-text-primary vel-mb-2" style="text-transform:uppercase;letter-spacing:0.1em">Rose</div>
    <button class="vel-btn vel-btn-primary vel-btn-sm">Primary</button>
  </div>
  <div data-vel-theme="amber" class="vel-card vel-p-4">
    <div class="vel-text-xs vel-font-bold vel-text-primary vel-mb-2" style="text-transform:uppercase;letter-spacing:0.1em">Amber</div>
    <button class="vel-btn vel-btn-primary vel-btn-sm">Primary</button>
  </div>
</div>`,
        },
        {
          label: 'Nested scope — child overrides parent theme',
          html: `<div data-vel-theme="ocean" class="vel-card vel-p-5">
  <div class="vel-text-sm vel-font-bold vel-text-primary vel-mb-3">Ocean theme (parent)</div>
  <button class="vel-btn vel-btn-primary vel-btn-sm vel-mb-4">Ocean button</button>
  <div data-vel-theme="amber" class="vel-card vel-p-4" style="border:1px solid #1e2d45">
    <div class="vel-text-xs vel-font-bold vel-text-primary vel-mb-2">Amber theme (nested)</div>
    <button class="vel-btn vel-btn-primary vel-btn-sm">Amber button</button>
  </div>
</div>`,
        },
      ]}
    />
  )
}
