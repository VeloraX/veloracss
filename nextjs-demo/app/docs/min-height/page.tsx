import DocPage from '../_components/DocPage'

export default function MinHeightPage() {
  return (
    <DocPage
      title="Min-Height"
      description="Utilities for setting the minimum height of an element."
      source="sizing.css"
      table={[
        { class: 'vel-min-h-0', properties: 'min-height: 0px' },
        { class: 'vel-min-h-full', properties: 'min-height: 100%' },
        { class: 'vel-min-h-screen', properties: 'min-height: 100vh' },
        { class: 'vel-min-h-min', properties: 'min-height: min-content' },
        { class: 'vel-min-h-max', properties: 'min-height: max-content' },
        { class: 'vel-min-h-fit', properties: 'min-height: fit-content' },
      ]}
    />
  )
}
