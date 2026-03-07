import DocPage from '../_components/DocPage'

export default function OverflowPage() {
  return (
    <DocPage
      title="Overflow"
      description="Utilities for controlling how an element handles content that is too large for the container."
      source="layout.css"
      table={[
        { class: 'vel-overflow-auto', properties: 'overflow: auto' },
        { class: 'vel-overflow-hidden', properties: 'overflow: hidden' },
        { class: 'vel-overflow-visible', properties: 'overflow: visible' },
        { class: 'vel-overflow-scroll', properties: 'overflow: scroll' },
        { class: 'vel-overflow-x-auto', properties: 'overflow-x: auto' },
        { class: 'vel-overflow-x-hidden', properties: 'overflow-x: hidden' },
        { class: 'vel-overflow-y-auto', properties: 'overflow-y: auto' },
        { class: 'vel-overflow-y-hidden', properties: 'overflow-y: hidden' },
        { class: 'vel-overflow-y-scroll', properties: 'overflow-y: scroll' },
      ]}
    />
  )
}
