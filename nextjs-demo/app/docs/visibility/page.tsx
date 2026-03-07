import DocPage from '../_components/DocPage'

export default function VisibilityPage() {
  return (
    <DocPage
      title="Visibility"
      description="Utilities for controlling the visibility of an element."
      source="layout.css"
      table={[
        { class: 'vel-visible', properties: 'visibility: visible' },
        { class: 'vel-invisible', properties: 'visibility: hidden' },
        { class: 'vel-collapse', properties: 'visibility: collapse' },
      ]}
    />
  )
}
