import DocPage from '../_components/DocPage'

export default function CodeBlockPage() {
  return (
    <DocPage
      title="Code Block"
      description="A styled code display component with a header row for language badges, filenames, and copy buttons. Includes a terminal variant with macOS-style traffic-light dots."
      source="components/code-block.css"
      table={[
        { class: 'vel-code-block', properties: 'background: surface-0, border, border-radius: xl, overflow: hidden, font-family: mono' },
        { class: 'vel-code-block-header', properties: 'flex row, space-between, background: surface-1, border-bottom, padding' },
        { class: 'vel-code-block-lang', properties: 'purple pill badge — rgba primary bg, primary-300 text, border, border-radius: full' },
        { class: 'vel-code-block-filename', properties: 'muted monospace filename, flex: 1' },
        { class: 'vel-code-block-copy', properties: 'copy button — border, rounded, hover: primary border + faint bg' },
        { class: 'vel-code-block-body', properties: 'overflow-x: auto, padding' },
        { class: 'vel-code-block-line-numbers', properties: 'adds generated line numbers via pseudo-element on the left' },
        { class: 'vel-code-block-terminal', properties: 'terminal variant — header shows red/yellow/green macOS dots via ::before, code color: success-400' },
      ]}
      examples={[
        {
          label: 'Standard code block with header',
          html: `<div style="padding:24px;background:#060b17;font-family:system-ui,sans-serif;border-radius:12px;">
  <div class="vel-code-block" style="max-width:580px;">
    <div class="vel-code-block-header">
      <span class="vel-code-block-lang">TS</span>
      <span class="vel-code-block-filename">tokens.ts</span>
      <button class="vel-code-block-copy">Copy</button>
    </div>
    <div class="vel-code-block-body">
      <pre><code>const tokens = {
  color: {
    primary: 'var(--vel-color-primary)',
    success: 'var(--vel-color-success)',
  },
  space: {
    4: 'var(--vel-space-4)',
    8: 'var(--vel-space-8)',
  },
}</code></pre>
    </div>
  </div>
</div>`,
        },
        {
          label: 'Terminal variant',
          html: `<div style="padding:24px;background:#060b17;font-family:system-ui,sans-serif;border-radius:12px;">
  <div class="vel-code-block vel-code-block-terminal" style="max-width:580px;">
    <div class="vel-code-block-header">
      <span class="vel-code-block-filename" style="opacity:0.5;">bash</span>
    </div>
    <div class="vel-code-block-body">
      <pre><code>$ npm install veloracss
$ npm run build
✓ Built dist/velora.css (42 kB)
✓ Built dist/velora.min.css (18 kB)</code></pre>
    </div>
  </div>
</div>`,
        },
      ]}
    />
  )
}
