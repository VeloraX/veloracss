import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const sourceFile = resolve(__dirname, 'src', 'val.css')
const configFile = resolve(__dirname, 'val.config.js')

function toKebabCase(value) {
  return value.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)
}

function createRule(selector, declarations) {
  return `${selector} { ${declarations.join(' ')} }`
}

function parseRule(rule) {
  const match = rule.match(/^(\.[^\s{]+)\s*\{\s*(.*?)\s*\}$/)
  if (!match) {
    throw new Error(`Unable to parse rule: ${rule}`)
  }

  return {
    selector: match[1],
    declarations: match[2],
  }
}

function utilityNameFromSelector(selector, prefix) {
  const match = selector.match(new RegExp(`^\\.${prefix}-(.+)$`))
  return match?.[1] ?? ''
}

function extractClassNames(cssText, prefix) {
  const matches = cssText.match(new RegExp(`\\.${prefix}-[\\w-]+`, 'g')) ?? []
  return Array.from(new Set(matches.map(match => match.slice(1)).sort()))
}

function flattenUtilityGroups(groups) {
  return Object.values(groups).flat()
}

function readConfig() {
  return import(`${pathToFileURL(configFile).href}?t=${Date.now()}`).then(mod => mod.default ?? mod)
}

function buildRootTokens(theme) {
  const colorLines = Object.entries(theme.colors).map(([name, value]) => `  --val-color-${toKebabCase(name)}: ${value};`)
  const spacingLines = Object.entries(theme.spacing).map(([name, value]) => `  --val-space-${name}: ${value};`)
  const radiusLines = Object.entries(theme.radius).map(([name, value]) => `  --val-radius-${toKebabCase(name)}: ${value};`)
  const textLines = Object.entries(theme.text).map(([name, value]) => `  --val-text-${toKebabCase(name)}: ${value};`)
  const shadowLines = Object.entries(theme.shadow).map(([name, value]) => `  --val-shadow-${toKebabCase(name)}: ${value};`)
  const widthLines = Object.entries(theme.width).map(([name, value]) => `  --val-width-${toKebabCase(name)}: ${value};`)

  return [
    ':root {',
    `  --val-font-sans: ${theme.font.sans};`,
    `  --val-font-display: ${theme.font.display};`,
    `  --val-font-mono: ${theme.font.mono};`,
    ...colorLines,
    ...spacingLines,
    ...radiusLines,
    ...shadowLines,
    ...widthLines,
    ...textLines,
    '}',
  ].join('\n')
}

function buildSpacingUtilities(prefix) {
  const directions = [
    ['p', ['padding']],
    ['px', ['padding-inline']],
    ['py', ['padding-block']],
    ['pt', ['padding-top']],
    ['pb', ['padding-bottom']],
    ['pl', ['padding-left']],
    ['pr', ['padding-right']],
    ['m', ['margin']],
    ['mx', ['margin-inline']],
    ['my', ['margin-block']],
    ['mt', ['margin-top']],
    ['mb', ['margin-bottom']],
    ['ml', ['margin-left']],
    ['mr', ['margin-right']],
    ['gap', ['gap']],
  ]

  const lines = []
  for (const [utility, properties] of directions) {
    for (const scale of ['0', '2', '4', '6', '8', '12', '16', '20']) {
      lines.push(createRule(`.${prefix}-${utility}-${scale}`, properties.map(property => `${property}: var(--val-space-${scale});`)))
    }
  }
  lines.push(createRule(`.${prefix}-mx-auto`, ['margin-inline: auto;']))
  return lines
}

function buildDimensionScaleUtilities(prefix, spacing) {
  const lines = []

  for (const scale of Object.keys(spacing)) {
    lines.push(createRule(`.${prefix}-w-${scale}`, [`width: var(--val-space-${scale});`]))
    lines.push(createRule(`.${prefix}-h-${scale}`, [`height: var(--val-space-${scale});`]))
  }

  return lines
}

function buildColorUtilities(prefix, colors) {
  const lines = []
  for (const name of Object.keys(colors)) {
    const token = toKebabCase(name)
    lines.push(createRule(`.${prefix}-text-${token}`, [`color: var(--val-color-${token});`]))
    lines.push(createRule(`.${prefix}-bg-${token}`, [`background: var(--val-color-${token});`]))
    lines.push(createRule(`.${prefix}-border-${token}`, [`border-color: var(--val-color-${token});`]))
  }
  lines.push(createRule(`.${prefix}-bg-transparent`, ['background: transparent;']))
  return lines
}

function buildRadiusUtilities(prefix, radius) {
  return Object.keys(radius).map(name => createRule(`.${prefix}-rounded-${toKebabCase(name)}`, [`border-radius: var(--val-radius-${toKebabCase(name)});`]))
}

function buildWidthUtilities(prefix, widths) {
  const lines = []

  for (const name of Object.keys(widths)) {
    const token = toKebabCase(name)
    lines.push(createRule(`.${prefix}-max-w-${token}`, [`width: var(--val-width-${token});`]))
  }

  return lines
}

function buildSizingAliasUtilities(prefix, sizing) {
  const groups = [
    ['w', sizing.width],
    ['min-w', sizing.minWidth],
    ['h', sizing.height],
    ['min-h', sizing.minHeight],
    ['max-w', sizing.maxWidth],
    ['max-h', sizing.maxHeight],
  ]

  const lines = []
  for (const [utility, values] of groups) {
    for (const [name, value] of Object.entries(values)) {
      const property = utility.replace(/-([a-z])/g, (_, char) => char.toUpperCase())
      lines.push(createRule(`.${prefix}-${utility}-${name}`, [`${property}: ${value};`]))
    }
  }

  return lines
}

function buildTextUtilities(prefix, text) {
  return Object.keys(text).map(name => {
    const token = toKebabCase(name)
    if (token === 'hero') {
      return createRule(`.${prefix}-text-${token}`, ['font-size: var(--val-text-hero);', 'line-height: 0.95;', 'letter-spacing: -0.05em;'])
    }
    return createRule(`.${prefix}-text-${token}`, [`font-size: var(--val-text-${token});`])
  })
}

function buildShadowUtilities(prefix, shadows) {
  return Object.keys(shadows).map(name => createRule(`.${prefix}-shadow-${toKebabCase(name)}`, [`box-shadow: var(--val-shadow-${toKebabCase(name)});`]))
}

function buildGridUtilities(prefix, layout) {
  return layout.gridColumns.map(columns => createRule(`.${prefix}-grid-cols-${columns}`, [`grid-template-columns: repeat(${columns}, minmax(0, 1fr));`]))
}

function buildPositionUtilities(prefix) {
  return [
    createRule(`.${prefix}-static`, ['position: static;']),
    createRule(`.${prefix}-relative`, ['position: relative;']),
    createRule(`.${prefix}-absolute`, ['position: absolute;']),
    createRule(`.${prefix}-inset-0`, ['inset: 0;']),
  ]
}

function buildOverflowUtilities(prefix, layout) {
  return Object.entries(layout.overflow).map(([name, value]) => createRule(`.${prefix}-overflow-${name}`, [`overflow: ${value};`]))
}

function buildUtilities(prefix, config) {
  return {
    display: [
      createRule(`.${prefix}-flex`, ['display: flex;']),
      createRule(`.${prefix}-inline-flex`, ['display: inline-flex;']),
      createRule(`.${prefix}-grid`, ['display: grid;']),
      createRule(`.${prefix}-block`, ['display: block;']),
      createRule(`.${prefix}-hidden`, ['display: none;']),
    ],
    flex: [
      createRule(`.${prefix}-flex-row`, ['flex-direction: row;']),
      createRule(`.${prefix}-flex-col`, ['flex-direction: column;']),
      createRule(`.${prefix}-flex-wrap`, ['flex-wrap: wrap;']),
      createRule(`.${prefix}-items-center`, ['align-items: center;']),
      createRule(`.${prefix}-items-start`, ['align-items: flex-start;']),
      createRule(`.${prefix}-items-end`, ['align-items: flex-end;']),
      createRule(`.${prefix}-justify-center`, ['justify-content: center;']),
      createRule(`.${prefix}-justify-between`, ['justify-content: space-between;']),
      createRule(`.${prefix}-justify-start`, ['justify-content: flex-start;']),
      createRule(`.${prefix}-justify-end`, ['justify-content: flex-end;']),
    ],
    positioning: buildPositionUtilities(prefix),
    overflow: buildOverflowUtilities(prefix, config.layout),
    grid: buildGridUtilities(prefix, config.layout),
    sizing: [
      ...buildWidthUtilities(prefix, config.theme.width),
      ...buildSizingAliasUtilities(prefix, config.sizing),
      ...buildDimensionScaleUtilities(prefix, config.theme.spacing),
    ],
    typography: [
      createRule(`.${prefix}-text-center`, ['text-align: center;']),
      createRule(`.${prefix}-font-semibold`, ['font-weight: 600;']),
      createRule(`.${prefix}-font-bold`, ['font-weight: 700;']),
      createRule(`.${prefix}-font-display`, ['font-family: var(--val-font-display);']),
      createRule(`.${prefix}-font-mono`, ['font-family: var(--val-font-mono);']),
      createRule(`.${prefix}-leading-tight`, ['line-height: 1.1;']),
      createRule(`.${prefix}-leading-copy`, ['line-height: 1.7;']),
      ...buildTextUtilities(prefix, config.theme.text),
    ],
    colors: buildColorUtilities(prefix, config.theme.colors),
    borders: [
      createRule(`.${prefix}-border`, ['border: 1px solid var(--val-color-border);']),
      createRule(`.${prefix}-border-0`, ['border: 0;']),
    ],
    radius: buildRadiusUtilities(prefix, config.theme.radius),
    shadows: buildShadowUtilities(prefix, config.theme.shadow),
    interaction: [
      createRule(`.${prefix}-transition`, ['transition: all 150ms ease;']),
      createRule(`.${prefix}-cursor-pointer`, ['cursor: pointer;']),
    ],
    spacing: buildSpacingUtilities(prefix),
  }
}

function isStateVariantEligible(name) {
  return /^(bg-|text-|border($|-)|shadow-)/.test(name)
}

function buildResponsiveVariants(prefix, rules, breakpoints) {
  return Object.entries(breakpoints).map(([breakpoint, width]) => {
    const lines = rules.map(rule => {
      const { selector, declarations } = parseRule(rule)
      const variantSelector = selector.replace(`.${prefix}-`, `.${prefix}-${breakpoint}\\:`)
      return `  ${variantSelector} { ${declarations} }`
    })

    return [`@media (min-width: ${width}) {`, ...lines, '}'].join('\n')
  })
}

function buildStateVariants(prefix, rules, states) {
  const eligible = rules.filter(rule => isStateVariantEligible(utilityNameFromSelector(parseRule(rule).selector, prefix)))

  return states.flatMap(state => {
    return eligible.map(rule => {
      const { selector, declarations } = parseRule(rule)
      const variantSelector = selector.replace(`.${prefix}-`, `.${prefix}-${state}\\:`)

      if (state === 'focus') {
        return `${variantSelector}:focus, ${variantSelector}:focus-visible { ${declarations} }`
      }

      return `${variantSelector}:${state} { ${declarations} }`
    })
  })
}

function buildComponents(prefix) {
  return [
    createRule(`.${prefix}-btn`, ['display: inline-flex;', 'align-items: center;', 'justify-content: center;', 'gap: var(--val-space-2);', 'padding: 0.85rem 1.1rem;', 'border-radius: var(--val-radius-pill);', 'border: 1px solid transparent;', 'font: inherit;', 'cursor: pointer;', 'transition: transform 150ms ease, background-color 150ms ease, border-color 150ms ease, color 150ms ease;']),
    `.${prefix}-btn:hover { transform: translateY(-1px); }`,
    createRule(`.${prefix}-btn-brand`, ['background: var(--val-color-brand);', 'color: #fff;']),
    createRule(`.${prefix}-btn-accent`, ['background: var(--val-color-accent);', 'color: #0b1020;']),
    createRule(`.${prefix}-btn-ghost`, ['background: transparent;', 'border-color: var(--val-color-border);', 'color: var(--val-color-text);']),
    createRule(`.${prefix}-card`, ['border: 1px solid var(--val-color-border);', 'border-radius: var(--val-radius-xl);', 'background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 30%), var(--val-color-surface);', 'box-shadow: var(--val-shadow-card);']),
    createRule(`.${prefix}-card-panel`, ['background: var(--val-color-panel);']),
    createRule(`.${prefix}-badge`, ['display: inline-flex;', 'align-items: center;', 'gap: 0.4rem;', 'padding: 0.3rem 0.65rem;', 'border-radius: var(--val-radius-pill);', 'border: 1px solid rgba(255, 255, 255, 0.08);', 'background: rgba(255, 255, 255, 0.05);', 'font-size: var(--val-text-xs);', 'font-weight: 600;']),
    createRule(`.${prefix}-badge-brand`, ['color: var(--val-color-brand);', 'background: rgba(91, 124, 255, 0.1);', 'border-color: rgba(91, 124, 255, 0.25);']),
    createRule(`.${prefix}-badge-accent`, ['color: var(--val-color-accent);', 'background: rgba(142, 242, 194, 0.08);', 'border-color: rgba(142, 242, 194, 0.25);']),
    createRule(`.${prefix}-eyebrow`, ['display: inline-flex;', 'align-items: center;', 'gap: 0.5rem;', 'padding: 0.45rem 0.7rem;', 'border: 1px solid rgba(91, 124, 255, 0.25);', 'border-radius: var(--val-radius-pill);', 'color: var(--val-color-brand);', 'background: rgba(91, 124, 255, 0.08);', 'font-size: var(--val-text-sm);', 'font-weight: 600;']),
  ].join('\n')
}

function buildManifest(prefix, utilityGroups, componentCss, responsiveVariants, stateVariants) {
  const categories = Object.fromEntries(
    Object.entries(utilityGroups).map(([groupName, rules]) => [
      groupName,
      Array.from(new Set(rules.map(rule => utilityNameFromSelector(parseRule(rule).selector, prefix)).filter(Boolean))),
    ]),
  )

  return {
    prefix,
    utilityGroups: categories,
    counts: {
      utilityGroups: Object.keys(categories).length,
      utilities: Object.values(categories).reduce((total, names) => total + names.length, 0),
      responsiveVariants: responsiveVariants.length,
      stateVariants: stateVariants.length,
      components: extractClassNames(componentCss, prefix).length,
    },
    components: extractClassNames(componentCss, prefix),
  }
}

async function build() {
  const config = await readConfig()
  const prefix = config.prefix ?? 'val'
  const outDir = resolve(__dirname, config.outDir ?? 'dist')
  const outFile = resolve(outDir, `${prefix}.css`)
  const manifestFile = resolve(outDir, `${prefix}-manifest.json`)
  const sourceCss = readFileSync(sourceFile, 'utf8').trim()
  const utilityGroups = buildUtilities(prefix, config)
  const utilityRules = flattenUtilityGroups(utilityGroups)
  const responsiveVariants = buildResponsiveVariants(prefix, utilityRules, config.breakpoints ?? {})
  const stateVariants = buildStateVariants(prefix, utilityRules, config.states ?? [])
  const componentCss = buildComponents(prefix)
  const manifest = buildManifest(prefix, utilityGroups, componentCss, responsiveVariants, stateVariants)

  mkdirSync(outDir, { recursive: true })

  const css = [
    '/* Val Phase 1 scaffold */',
    buildRootTokens(config.theme),
    sourceCss,
    '@layer val.utilities {',
    utilityRules.join('\n'),
    '}',
    responsiveVariants.length > 0 ? ['@layer val.variants {', ...responsiveVariants, '}'].join('\n') : '',
    stateVariants.length > 0 ? ['@layer val.states {', ...stateVariants, '}'].join('\n') : '',
    '@layer val.components {',
    componentCss,
    '}',
  ].join('\n\n')

  writeFileSync(outFile, `${css}\n`)
  writeFileSync(manifestFile, `${JSON.stringify(manifest, null, 2)}\n`)
  console.log(`Built ${outFile}`)
}

build().catch(error => {
  console.error(error)
  process.exit(1)
})