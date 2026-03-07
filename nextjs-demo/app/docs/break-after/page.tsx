import DocPage from '../_components/DocPage'

export default function BreakAfterPage() {
  return (
    <DocPage
      title="Break After"
      description="Utilities for controlling how a column or page should break after an element."
      source="layout.css"
      table={[
        { class: 'vel-break-after-auto', properties: 'break-after: auto' },
        { class: 'vel-break-after-avoid', properties: 'break-after: avoid' },
        { class: 'vel-break-after-all', properties: 'break-after: all' },
        { class: 'vel-break-after-column', properties: 'break-after: column' },
        { class: 'vel-break-after-page', properties: 'break-after: page' },
      ]}
    />
  )
}
