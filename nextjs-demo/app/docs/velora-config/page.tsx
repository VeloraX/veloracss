import DocPage from '../_components/DocPage'

export default function VeloraConfigPage() {
  return (
    <DocPage
      title="velora.config.js"
      description="Customize VeloraCSS tokens at the source level. Override --vel-dna-hue, spacing, typography, and semantic color tokens to match your brand without touching the framework files."
      source="tokens.css"
      table={[]}
      examples={[
        {
          label: 'Override the DNA hue on :root to apply your brand color globally',
          html: `<div style="--vel-dna-hue:162;--vel-color-primary:oklch(65% 0.21 162);--vel-surface-2:#0d1a12;border:1px solid #1e2d45;border-radius:8px;padding:1.5rem;display:grid;gap:1rem">
  <div class="vel-text-xs vel-text-muted vel-font-bold" style="text-transform:uppercase;letter-spacing:0.1em;font-family:Cascadia Code,Consolas,monospace">:root { --vel-dna-hue: 162; } — Emerald brand</div>
  <div class="vel-flex vel-gap-3 vel-items-center vel-flex-wrap">
    <button class="vel-btn vel-btn-primary">Primary Button</button>
    <span class="vel-badge vel-badge-primary">Badge</span>
    <div style="width:48px;height:48px;border-radius:50%;background:oklch(65% 0.21 162);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:0.875rem">VX</div>
  </div>
</div>`,
        },
        {
          label: 'Scope a custom theme to a section with data-vel-theme or inline CSS variables',
          html: `<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem">
  <div data-vel-theme="ocean" class="vel-card vel-p-4">
    <code class="vel-text-xs vel-text-primary" style="font-family:Cascadia Code,Consolas,monospace;display:block;margin-bottom:0.75rem">data-vel-theme="ocean"</code>
    <button class="vel-btn vel-btn-primary vel-btn-sm vel-w-full">Ocean</button>
  </div>
  <div data-vel-theme="rose" class="vel-card vel-p-4">
    <code class="vel-text-xs vel-text-primary" style="font-family:Cascadia Code,Consolas,monospace;display:block;margin-bottom:0.75rem">data-vel-theme="rose"</code>
    <button class="vel-btn vel-btn-primary vel-btn-sm vel-w-full">Rose</button>
  </div>
</div>`,
        },
      ]}
    />
  )
}
