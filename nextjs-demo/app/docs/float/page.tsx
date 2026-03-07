import DocPage from '../_components/DocPage'

export default function FloatPage() {
  return (
    <DocPage
      title="Float"
      description="Utilities for controlling the wrapping of content around an element."
      source="layout.css"
      table={[
        { class: 'vel-float-left', properties: 'float: left' },
        { class: 'vel-float-right', properties: 'float: right' },
        { class: 'vel-float-none', properties: 'float: none' },
        { class: 'vel-clearfix', properties: '::after { content: \'\'; display: table; clear: both }' },
      ]}
    />
  )
}
