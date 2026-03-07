import DocPage from '../_components/DocPage'

export default function GridAutoColumnsPage() {
  return (
    <DocPage
      title="Grid Auto Columns"
      description="Utilities for controlling the size of implicitly-created grid columns."
      source="grid.css"
      table={[
        { class: 'vel-auto-cols-auto', properties: 'grid-auto-columns: auto' },
        { class: 'vel-auto-cols-min', properties: 'grid-auto-columns: min-content' },
        { class: 'vel-auto-cols-max', properties: 'grid-auto-columns: max-content' },
        { class: 'vel-auto-cols-fr', properties: 'grid-auto-columns: minmax(0, 1fr)' },
      ]}
    />
  )
}
