import DocPage from '../_components/DocPage'

export default function AlignSelfPage() {
  return (
    <DocPage
      title="Align Self"
      description="Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis."
      source="flexbox.css"
      table={[
        { class: 'vel-self-auto', properties: 'align-self: auto' },
        { class: 'vel-self-start', properties: 'align-self: flex-start' },
        { class: 'vel-self-end', properties: 'align-self: flex-end' },
        { class: 'vel-self-center', properties: 'align-self: center' },
        { class: 'vel-self-stretch', properties: 'align-self: stretch' },
        { class: 'vel-self-baseline', properties: 'align-self: baseline' },
      ]}
    />
  )
}
