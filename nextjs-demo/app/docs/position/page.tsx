import DocPage from '../_components/DocPage'

export default function PositionPage() {
  return (
    <DocPage
      title="Position"
      description="Utilities for controlling how an element is positioned in the document."
      source="layout.css"
      table={[
        { class: 'vel-static', properties: 'position: static' },
        { class: 'vel-relative', properties: 'position: relative' },
        { class: 'vel-absolute', properties: 'position: absolute' },
        { class: 'vel-fixed', properties: 'position: fixed' },
        { class: 'vel-sticky', properties: 'position: sticky' },
      ]}
    />
  )
}
