import DocPage from '../_components/DocPage'

export default function PlaceItemsPage() {
  return (
    <DocPage
      title="Place Items"
      description="Utilities for controlling how items are justified and aligned at the same time."
      source="flexbox.css"
      table={[
        { class: 'vel-place-items-center', properties: 'place-items: center' },
        { class: 'vel-place-items-start', properties: 'place-items: start' },
        { class: 'vel-place-items-end', properties: 'place-items: end' },
        { class: 'vel-place-items-stretch', properties: 'place-items: stretch' },
      ]}
    />
  )
}
