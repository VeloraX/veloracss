import DocPage from '../_components/DocPage'

export default function GridRowPage() {
  return (
    <DocPage
      title="Grid Row"
      description="Utilities for controlling how elements are sized and placed across grid rows."
      source="grid.css"
      table={[
        { class: 'vel-row-auto', properties: 'grid-row: auto' },
        { class: 'vel-row-span-1', properties: 'grid-row: span 1 / span 1' },
        { class: 'vel-row-span-2', properties: 'grid-row: span 2 / span 2' },
        { class: 'vel-row-span-3', properties: 'grid-row: span 3 / span 3' },
        { class: 'vel-row-span-full', properties: 'grid-row: 1 / -1' },
      ]}
    />
  )
}
