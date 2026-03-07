import DocPage from '../_components/DocPage'

export default function OverscrollBehaviorPage() {
  return (
    <DocPage
      title="Overscroll Behavior"
      description="Utilities for controlling how the browser behaves when reaching the boundary of a scrolling area."
      source="layout.css"
      table={[
        { class: 'vel-overscroll-auto', properties: 'overscroll-behavior: auto' },
        { class: 'vel-overscroll-contain', properties: 'overscroll-behavior: contain' },
        { class: 'vel-overscroll-none', properties: 'overscroll-behavior: none' },
      ]}
    />
  )
}
