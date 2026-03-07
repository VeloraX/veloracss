import DocPage from '../_components/DocPage'

export default function DisplayPage() {
  return (
    <DocPage
      title="Display"
      description="Utilities for controlling the display type of an element."
      source="layout.css"
      table={[
        { class: 'vel-block', properties: 'display: block' },
        { class: 'vel-inline-block', properties: 'display: inline-block' },
        { class: 'vel-inline', properties: 'display: inline' },
        { class: 'vel-flex', properties: 'display: flex' },
        { class: 'vel-inline-flex', properties: 'display: inline-flex' },
        { class: 'vel-grid', properties: 'display: grid' },
        { class: 'vel-inline-grid', properties: 'display: inline-grid' },
        { class: 'vel-hidden', properties: 'display: none' },
        { class: 'vel-contents', properties: 'display: contents' },
        { class: 'vel-table', properties: 'display: table' },
        { class: 'vel-table-row', properties: 'display: table-row' },
        { class: 'vel-table-cell', properties: 'display: table-cell' },
      ]}
    />
  )
}
