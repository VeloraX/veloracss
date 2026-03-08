import postcss from 'postcss'
import postcssImport from 'postcss-import'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const entry = resolve(__dirname, 'src/velora.css')
const outDir = resolve(__dirname, 'dist')

// ─── velora.config.js support ────────────────────────────────────────────────

const TOKEN_MAP = {
  dnaHue:            '--vel-dna-hue',
  colorPrimary:      '--vel-color-primary',
  colorPrimaryHover: '--vel-color-primary-hover',
  colorPrimaryLight: '--vel-color-primary-light',
  colorPrimaryFg:    '--vel-color-primary-fg',
  surfaceBg:         '--vel-surface-bg',
  surface1:          '--vel-surface-1',
  surface2:          '--vel-surface-2',
  surface3:          '--vel-surface-3',
  surface4:          '--vel-surface-4',
  borderBase:        '--vel-border-base',
  borderSubtle:      '--vel-border-subtle',
  colorText:         '--vel-color-text',
  colorMuted:        '--vel-color-muted',
  fontSans:          '--vel-font-sans',
  fontSerif:         '--vel-font-serif',
  fontMono:          '--vel-font-mono',
  radius:            '--vel-radius',
  radiusSm:          '--vel-radius-sm',
  radiusMd:          '--vel-radius-md',
  radiusLg:          '--vel-radius-lg',
  radiusXl:          '--vel-radius-xl',
}

async function loadConfig() {
  // Try velora.config.js first, then velora.config.cjs
  const candidates = ['velora.config.js', 'velora.config.cjs']
  for (const name of candidates) {
    const configPath = new URL(name, import.meta.url).pathname
    try {
      const mod = await import(`file://${configPath}?t=${Date.now()}`)
      return mod.default ?? mod
    } catch {
      // file doesn't exist or parse error — try next
    }
  }
  return {}
}

function buildConfigOverride(config) {
  const tokens = config.tokens
  if (!tokens || typeof tokens !== 'object') return { css: '', count: 0 }

  const lines = []

  for (const [key, cssVar] of Object.entries(TOKEN_MAP)) {
    if (tokens[key] !== undefined) {
      lines.push(`  ${cssVar}: ${tokens[key]};`)
      if (key === 'surfaceBg') {
        lines.push(`  --vel-surface-0: ${tokens[key]};`)
      }
    }
  }

  if (typeof tokens.raw === 'string' && tokens.raw.trim()) {
    const rawLines = tokens.raw.trim().split(';')
      .filter(l => l.trim())
      .map(l => `  ${l.trim()};`)
    lines.push(...rawLines)
  }

  if (lines.length === 0) return { css: '', count: 0 }

  const css = [
    '\n/* ─── velora.config.js — token overrides ─── */',
    ':root {',
    ...lines,
    '}',
  ].join('\n')

  return { css, count: lines.length }
}

// ─── Variant filtering ────────────────────────────────────────────────────────
//
// Each function receives `cls` — the part of the class name after `vel-`
// e.g. for `.vel-flex` → cls = 'flex'
//      for `.vel-bg-primary` → cls = 'bg-primary'

function isResponsive(cls) {
  // Exact matches
  const exact = new Set([
    'block','inline-block','inline','flex','inline-flex','grid','inline-grid',
    'hidden','table','table-row','table-cell','contents',
    'static','relative','absolute','fixed','sticky',
    'visible','invisible','collapse',
    'grow','shrink',
    'italic','not-italic',
    'underline','no-underline','line-through',
    'uppercase','lowercase','capitalize','normal-case',
    'truncate','sr-only',
    'object-contain','object-cover','object-fill','object-none','object-scale-down',
    'aspect-auto','aspect-square','aspect-video',
    'float-left','float-right','float-none',
    'clear-left','clear-right','clear-both','clear-none',
  ])
  if (exact.has(cls)) return true
  // Prefix matches
  return (
    /^(overflow|overscroll|flex-|items-|justify-|self-|gap-|space-|order-|grid-|col-|row-)/.test(cls) ||
    /^[pmxy][trblse]?-/.test(cls) ||   // padding / margin shorthand: p-, px-, pt-, m-, mx-, mt-, etc.
    /^(w-|h-|min-w|max-w|min-h|max-h)/.test(cls) ||
    /^(text-|font-|leading-|tracking-|whitespace-|columns-)/.test(cls) ||
    /^z-/.test(cls)
  )
}

function isHover(cls) {
  return (
    /^(bg-|text-|border-)/.test(cls) ||
    /^shadow/.test(cls) ||
    /^opacity-/.test(cls) ||
    /^(scale-|rotate-|translate-)/.test(cls) ||
    /^ring/.test(cls) ||
    cls === 'underline' || cls === 'no-underline' || cls === 'line-through'
  )
}

function isFocus(cls) {
  return (
    /^ring/.test(cls) ||
    /^outline/.test(cls) ||
    /^(bg-|text-|border-)/.test(cls) ||
    /^shadow/.test(cls)
  )
}

function isActive(cls) {
  return (
    /^scale-/.test(cls) ||
    /^opacity-/.test(cls) ||
    /^bg-/.test(cls) ||
    /^shadow/.test(cls)
  )
}

function isDark(cls) {
  return (
    /^(bg-|text-|border-)/.test(cls) ||
    /^shadow/.test(cls) ||
    /^ring/.test(cls)
  )
}

// ─── Variant generator ────────────────────────────────────────────────────────

function generateVariants(baseCss) {
  const root = postcss.parse(baseCss)

  const BREAKPOINTS = [
    ['sm',  '640px'],
    ['md',  '768px'],
    ['lg',  '1024px'],
    ['xl',  '1280px'],
    ['2xl', '1536px'],
  ]

  const responsive = []
  const hover      = []
  const focus      = []
  const active     = []
  const dark       = []

  root.walkRules(rule => {
    // Only top-level single .vel-XXX selectors (no combinators, no pseudo-classes)
    if (rule.parent.type !== 'root') return
    const m = rule.selector.match(/^\.vel-([\w-]+)$/)
    if (!m) return
    const cls = m[1]

    if (isResponsive(cls)) responsive.push({ cls, rule })
    if (isHover(cls))      hover.push({ cls, rule })
    if (isFocus(cls))      focus.push({ cls, rule })
    if (isActive(cls))     active.push({ cls, rule })
    if (isDark(cls))       dark.push({ cls, rule })
  })

  const chunks = ['\n\n/* ============================================\n   VeloraCSS — Responsive & State Variants\n   ============================================ */']

  // ── Responsive variants ──────────────────────────────────────────────────
  chunks.push('\n/* Responsive variants — sm | md | lg | xl | 2xl */')
  for (const [bp, width] of BREAKPOINTS) {
    const media = postcss.atRule({ name: 'media', params: `(min-width: ${width})` })
    for (const { cls, rule } of responsive) {
      const cloned = rule.clone()
      cloned.selector = `.vel-${bp}\\:${cls}`
      // strip inline comments/spaces for clean output
      cloned.raws = {}
      media.append(cloned)
    }
    chunks.push(media.toString())
  }

  // ── Hover variants ───────────────────────────────────────────────────────
  chunks.push('\n/* Hover variants — vel-hover:* */')
  for (const { cls, rule } of hover) {
    const cloned = rule.clone()
    cloned.selector = `.vel-hover\\:${cls}:hover`
    cloned.raws = {}
    chunks.push(cloned.toString())
  }

  // ── Focus variants ───────────────────────────────────────────────────────
  chunks.push('\n/* Focus variants — vel-focus:* */')
  for (const { cls, rule } of focus) {
    const cloned = rule.clone()
    cloned.selector = `.vel-focus\\:${cls}:focus, .vel-focus\\:${cls}:focus-visible`
    cloned.raws = {}
    chunks.push(cloned.toString())
  }

  // ── Active variants ──────────────────────────────────────────────────────
  chunks.push('\n/* Active variants — vel-active:* */')
  for (const { cls, rule } of active) {
    const cloned = rule.clone()
    cloned.selector = `.vel-active\\:${cls}:active`
    cloned.raws = {}
    chunks.push(cloned.toString())
  }

  // ── Dark mode variants — .vel-dark parent class ──────────────────────────
  chunks.push('\n/* Dark mode variants — add class="vel-dark" to <html> or <body> */')
  for (const { cls, rule } of dark) {
    const cloned = rule.clone()
    cloned.selector = `.vel-dark .vel-dark\\:${cls}`
    cloned.raws = {}
    chunks.push(cloned.toString())
  }

  return chunks.join('\n')
}

// ─── Build ────────────────────────────────────────────────────────────────────

async function build() {
  mkdirSync(outDir, { recursive: true })
  const input = readFileSync(entry, 'utf8')

  // Load optional velora.config.js
  const veloraConfig = await loadConfig()
  const { css: configOverrideCss, count: configOverrideCount } = buildConfigOverride(veloraConfig)

  // 1. Resolve imports + autoprefixer → base CSS
  const baseResult = await postcss([postcssImport(), autoprefixer()])
    .process(input, { from: entry })

  const baseCss = baseResult.css + configOverrideCss

  // 2. Generate responsive + state variants
  const variantsCss = generateVariants(baseCss)
  const finalCss = baseCss + variantsCss

  // 3. Write full (unminified) build
  writeFileSync(resolve(outDir, 'velora.css'), finalCss)

  // 4. Minify the full build (variants included)
  const minResult = await postcss([cssnano({ preset: 'default' })])
    .process(finalCss, { from: undefined })

  writeFileSync(resolve(outDir, 'velora.min.css'), minResult.css)

  const size    = (finalCss.length / 1024).toFixed(1)
  const minSize = (minResult.css.length / 1024).toFixed(1)
  console.log(`VeloraCSS built — ${size}KB / ${minSize}KB minified`)
  if (configOverrideCount > 0) {
    console.log(`Config: velora.config.js applied (${configOverrideCount} token overrides)`)
  }

  // 5. Sync to Next.js demo
  const nextStylesDir = resolve(__dirname, 'nextjs-demo/styles')
  mkdirSync(nextStylesDir, { recursive: true })
  copyFileSync(resolve(outDir, 'velora.css'), resolve(nextStylesDir, 'velora.css'))
  console.log('Synced → nextjs-demo/styles/velora.css')
}

build().catch(err => {
  console.error('Build failed:', err.message)
  process.exit(1)
})
