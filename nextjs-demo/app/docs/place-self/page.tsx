import DocPage from '../_components/DocPage'

export default function PlaceSelfPage() {
  return (
    <DocPage
      title="Place Self"
      description="Utilities for controlling how an individual item is justified and aligned at the same time."
      source="flexbox.css"
      table={[
        { class: 'vel-place-self-auto', properties: 'place-self: auto' },
        { class: 'vel-place-self-center', properties: 'place-self: center' },
        { class: 'vel-place-self-start', properties: 'place-self: start' },
        { class: 'vel-place-self-end', properties: 'place-self: end' },
        { class: 'vel-place-self-stretch', properties: 'place-self: stretch' },
      ]}
    />
  )
}
