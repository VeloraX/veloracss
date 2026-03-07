import DocPage from '../_components/DocPage'

export default function BoxDecorationBreakPage() {
  return (
    <DocPage
      title="Box Decoration Break"
      description="Utilities for controlling how element fragments should be rendered across multiple lines, columns, or pages."
      source="layout.css"
      table={[
        { class: 'vel-box-decoration-clone', properties: 'box-decoration-break: clone' },
        { class: 'vel-box-decoration-slice', properties: 'box-decoration-break: slice' },
      ]}
    />
  )
}
