import DocPage from '../_components/DocPage'

export default function MinWidthPage() {
  return (
    <DocPage
      title="Min-Width"
      description="Utilities for setting the minimum width of an element."
      source="sizing.css"
      table={[
        { class: 'vel-min-w-0', properties: 'min-width: 0px' },
        { class: 'vel-min-w-full', properties: 'min-width: 100%' },
        { class: 'vel-min-w-min', properties: 'min-width: min-content' },
        { class: 'vel-min-w-max', properties: 'min-width: max-content' },
        { class: 'vel-min-w-fit', properties: 'min-width: fit-content' },
      ]}
    />
  )
}
