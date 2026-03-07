import DocPage from '../_components/DocPage'

export default function HeroPage() {
  return (
    <DocPage
      title="Hero"
      description="A full-section hero component for landing pages and app headers. Supports size variants, gradient backgrounds, a dot-grid pattern overlay, and structured content slots for eyebrow, title, subtitle, and CTA actions."
      source="components/hero.css"
      table={[
        { class: 'vel-hero', properties: 'position: relative, flex column centered, min-height: 80vh, overflow: hidden, background: surface-bg' },
        { class: 'vel-hero-sm', properties: 'size variant — min-height: 40vh' },
        { class: 'vel-hero-lg', properties: 'size variant — min-height: 100vh' },
        { class: 'vel-hero-gradient', properties: 'background: primary gradient' },
        { class: 'vel-hero-dark', properties: 'background-color: surface-bg (explicit dark)' },
        { class: 'vel-hero-bg-pattern', properties: 'dot grid background-image + radial glow ::before overlay' },
        { class: 'vel-hero-content', properties: 'z-index: 10, flex column centered, gap, max-width: 64rem' },
        { class: 'vel-hero-eyebrow', properties: 'small pill label — primary bg tint, primary-300 text, border, border-radius: full' },
        { class: 'vel-hero-title', properties: 'clamp(4xl → 7xl) font-size, bold, tight line-height and tracking' },
        { class: 'vel-hero-subtitle', properties: 'clamp(base → xl) font-size, muted color, relaxed line-height, max-width: 42rem' },
        { class: 'vel-hero-actions', properties: 'flex row wrap, centered, gap, margin-top' },
      ]}
      examples={[
        {
          label: 'Hero with dot-grid pattern, eyebrow, title, subtitle, and CTA buttons',
          html: `<div style="font-family:system-ui,sans-serif;border-radius:12px;overflow:hidden;">
  <div class="vel-hero vel-hero-bg-pattern" style="min-height:320px;padding:3rem 2rem;">
    <div class="vel-hero-content">
      <span class="vel-hero-eyebrow">✦ Now in v2.0</span>
      <h1 class="vel-hero-title">Build UIs at<br><span style="color:#a87fff;">Velora speed</span></h1>
      <p class="vel-hero-subtitle">A fully original utility-first CSS framework with component richness and zero framework footprint.</p>
      <div class="vel-hero-actions">
        <button class="vel-btn vel-btn-primary vel-btn-lg">Get Started</button>
        <button class="vel-btn vel-btn-lg">View Docs</button>
      </div>
    </div>
  </div>
</div>`,
        },
        {
          label: 'Gradient hero variant',
          html: `<div style="font-family:system-ui,sans-serif;border-radius:12px;overflow:hidden;">
  <div class="vel-hero vel-hero-gradient" style="min-height:240px;padding:3rem 2rem;">
    <div class="vel-hero-content">
      <span class="vel-hero-eyebrow" style="background:rgba(255,255,255,0.15);border-color:rgba(255,255,255,0.25);color:#fff;">Open Source</span>
      <h1 class="vel-hero-title" style="color:#fff;">Ship faster.<br>Look better.</h1>
      <p class="vel-hero-subtitle" style="color:rgba(255,255,255,0.75);">Every token, every component — all yours.</p>
      <div class="vel-hero-actions">
        <button class="vel-btn" style="background:rgba(255,255,255,0.15);color:#fff;border-color:rgba(255,255,255,0.3);">Browse Components</button>
      </div>
    </div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
