import DocPage from '../_components/DocPage'

export default function BoxSizingPage() {
  return (
    <DocPage
      title="Box Sizing"
      description="Utilities for controlling how the browser should calculate the total size of an element."
      source="layout.css"
      table={[
        { class: 'vel-box-border', properties: 'box-sizing: border-box' },
        { class: 'vel-box-content', properties: 'box-sizing: content-box' },
      ]}
    />
  )
}
