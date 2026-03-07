import DocPage from '../_components/DocPage'

export default function ClearPage() {
  return (
    <DocPage
      title="Clear"
      description="Utilities for controlling the wrapping of content around an element."
      source="layout.css"
      table={[
        { class: 'vel-clear-left', properties: 'clear: left' },
        { class: 'vel-clear-right', properties: 'clear: right' },
        { class: 'vel-clear-both', properties: 'clear: both' },
        { class: 'vel-clear-none', properties: 'clear: none' },
      ]}
    />
  )
}
