import DocPage from '../_components/DocPage'

export default function IsolationPage() {
  return (
    <DocPage
      title="Isolation"
      description="Utilities for controlling whether an element should explicitly create a new stacking context."
      source="layout.css"
      table={[
        { class: 'vel-isolate', properties: 'isolation: isolate' },
        { class: 'vel-isolation-auto', properties: 'isolation: auto' },
      ]}
    />
  )
}
