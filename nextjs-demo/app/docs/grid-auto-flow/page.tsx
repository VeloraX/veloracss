import DocPage from '../_components/DocPage'

export default function GridAutoFlowPage() {
  return (
    <DocPage
      title="Grid Auto Flow"
      description="Utilities for controlling how elements in a grid are auto-placed."
      source="grid.css"
      table={[
        { class: 'vel-grid-flow-row', properties: 'grid-auto-flow: row' },
        { class: 'vel-grid-flow-col', properties: 'grid-auto-flow: column' },
        { class: 'vel-grid-flow-dense', properties: 'grid-auto-flow: dense' },
        { class: 'vel-grid-flow-row-dense', properties: 'grid-auto-flow: row dense' },
        { class: 'vel-grid-flow-col-dense', properties: 'grid-auto-flow: column dense' },
      ]}
    />
  )
}
