import DocPage from '../_components/DocPage'

export default function ZIndexPage() {
  return (
    <DocPage
      title="Z-Index"
      description="Utilities for controlling the stack order of an element."
      source="layout.css"
      table={[
        { class: 'vel-z-0', properties: 'z-index: 0' },
        { class: 'vel-z-10', properties: 'z-index: 10' },
        { class: 'vel-z-20', properties: 'z-index: 20' },
        { class: 'vel-z-30', properties: 'z-index: 30' },
        { class: 'vel-z-40', properties: 'z-index: 40' },
        { class: 'vel-z-50', properties: 'z-index: 50' },
        { class: 'vel-z-auto', properties: 'z-index: auto' },
      ]}
    />
  )
}
