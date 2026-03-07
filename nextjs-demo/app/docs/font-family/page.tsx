import DocPage from '../_components/DocPage'

export default function FontFamilyPage() {
  return (
    <DocPage
      title="Font Family"
      description="Utilities for controlling the font family of an element."
      source="typography.css"
      table={[
        { class: 'vel-font-sans', properties: 'font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' },
        { class: 'vel-font-serif', properties: 'font-family: ui-serif, Georgia, Cambria, "Times New Roman", serif' },
        { class: 'vel-font-mono', properties: 'font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace' },
      ]}
    />
  )
}
