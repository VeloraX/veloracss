import DocPage from '../_components/DocPage'

export default function GridAutoRowsPage() {
  return (
    <DocPage
      title="Grid Auto Rows"
      description="Utilities for controlling the size of implicitly-created grid rows."
      source="grid.css"
      table={[
        { class: 'vel-auto-rows-auto', properties: 'grid-auto-rows: auto' },
        { class: 'vel-auto-rows-min', properties: 'grid-auto-rows: min-content' },
        { class: 'vel-auto-rows-max', properties: 'grid-auto-rows: max-content' },
        { class: 'vel-auto-rows-fr', properties: 'grid-auto-rows: minmax(0, 1fr)' },
      ]}
    />
  )
}
