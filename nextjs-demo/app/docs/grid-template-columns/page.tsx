import DocPage from '../_components/DocPage'

export default function GridTemplateColumnsPage() {
  return (
    <DocPage
      title="Grid Template Columns"
      description="Utilities for specifying the columns in a grid layout."
      source="grid.css"
      table={[
        { class: 'vel-grid-cols-1', properties: 'grid-template-columns: repeat(1, minmax(0, 1fr))' },
        { class: 'vel-grid-cols-2', properties: 'grid-template-columns: repeat(2, minmax(0, 1fr))' },
        { class: 'vel-grid-cols-3', properties: 'grid-template-columns: repeat(3, minmax(0, 1fr))' },
        { class: 'vel-grid-cols-4', properties: 'grid-template-columns: repeat(4, minmax(0, 1fr))' },
        { class: 'vel-grid-cols-5', properties: 'grid-template-columns: repeat(5, minmax(0, 1fr))' },
        { class: 'vel-grid-cols-6', properties: 'grid-template-columns: repeat(6, minmax(0, 1fr))' },
        { class: 'vel-grid-cols-12', properties: 'grid-template-columns: repeat(12, minmax(0, 1fr))' },
        { class: 'vel-grid-cols-none', properties: 'grid-template-columns: none' },
      ]}
    />
  )
}
