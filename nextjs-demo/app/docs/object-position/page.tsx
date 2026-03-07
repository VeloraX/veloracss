import DocPage from '../_components/DocPage'

export default function ObjectPositionPage() {
  return (
    <DocPage
      title="Object Position"
      description="Utilities for controlling how a replaced element's content should be positioned."
      source="layout.css"
      table={[
        { class: 'vel-object-center', properties: 'object-position: center' },
        { class: 'vel-object-top', properties: 'object-position: top' },
        { class: 'vel-object-bottom', properties: 'object-position: bottom' },
        { class: 'vel-object-left', properties: 'object-position: left' },
        { class: 'vel-object-right', properties: 'object-position: right' },
        { class: 'vel-object-left-top', properties: 'object-position: left top' },
        { class: 'vel-object-right-top', properties: 'object-position: right top' },
        { class: 'vel-object-left-bottom', properties: 'object-position: left bottom' },
        { class: 'vel-object-right-bottom', properties: 'object-position: right bottom' },
      ]}
    />
  )
}
