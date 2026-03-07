import DocPage from '../_components/DocPage'

export default function ColumnsPage() {
  return (
    <DocPage
      title="Columns"
      description="Utilities for controlling the number of columns within an element."
      source="layout.css"
      table={[
        { class: 'vel-columns-1', properties: 'columns: 1' },
        { class: 'vel-columns-2', properties: 'columns: 2' },
        { class: 'vel-columns-3', properties: 'columns: 3' },
        { class: 'vel-columns-4', properties: 'columns: 4' },
        { class: 'vel-columns-5', properties: 'columns: 5' },
        { class: 'vel-columns-6', properties: 'columns: 6' },
        { class: 'vel-columns-auto', properties: 'columns: auto' },
      ]}
    />
  )
}
