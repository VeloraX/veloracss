import DocPage from '../_components/DocPage'

export default function BreakBeforePage() {
  return (
    <DocPage
      title="Break Before"
      description="Utilities for controlling how a column or page should break before an element."
      source="layout.css"
      table={[
        { class: 'vel-break-before-auto', properties: 'break-before: auto' },
        { class: 'vel-break-before-avoid', properties: 'break-before: avoid' },
        { class: 'vel-break-before-all', properties: 'break-before: all' },
        { class: 'vel-break-before-column', properties: 'break-before: column' },
        { class: 'vel-break-before-page', properties: 'break-before: page' },
      ]}
    />
  )
}
