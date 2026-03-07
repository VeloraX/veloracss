import DocPage from '../_components/DocPage'

export default function BreakInsidePage() {
  return (
    <DocPage
      title="Break Inside"
      description="Utilities for controlling how a column or page should break within an element."
      source="layout.css"
      table={[
        { class: 'vel-break-inside-auto', properties: 'break-inside: auto' },
        { class: 'vel-break-inside-avoid', properties: 'break-inside: avoid' },
        { class: 'vel-break-inside-avoid-page', properties: 'break-inside: avoid-page' },
        { class: 'vel-break-inside-avoid-column', properties: 'break-inside: avoid-column' },
      ]}
    />
  )
}
