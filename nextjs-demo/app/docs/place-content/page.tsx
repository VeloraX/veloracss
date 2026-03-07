import DocPage from '../_components/DocPage'

export default function PlaceContentPage() {
  return (
    <DocPage
      title="Place Content"
      description="Utilities for controlling how content is justified and aligned at the same time."
      source="flexbox.css"
      table={[
        { class: 'vel-place-content-center', properties: 'place-content: center' },
        { class: 'vel-place-content-start', properties: 'place-content: start' },
        { class: 'vel-place-content-end', properties: 'place-content: end' },
        { class: 'vel-place-content-between', properties: 'place-content: space-between' },
      ]}
    />
  )
}
