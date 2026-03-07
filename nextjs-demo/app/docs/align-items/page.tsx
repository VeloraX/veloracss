import DocPage from '../_components/DocPage'

export default function AlignItemsPage() {
  return (
    <DocPage
      title="Align Items"
      description="Utilities for controlling how flex and grid items are positioned along a container's cross axis."
      source="flexbox.css"
      table={[
        { class: 'vel-items-start', properties: 'align-items: flex-start' },
        { class: 'vel-items-end', properties: 'align-items: flex-end' },
        { class: 'vel-items-center', properties: 'align-items: center' },
        { class: 'vel-items-baseline', properties: 'align-items: baseline' },
        { class: 'vel-items-stretch', properties: 'align-items: stretch' },
      ]}
    />
  )
}
