import DocPage from '../_components/DocPage'

export default function JustifySelfPage() {
  return (
    <DocPage
      title="Justify Self"
      description="Utilities for controlling how an individual grid item is aligned along its inline axis."
      source="flexbox.css"
      table={[
        { class: 'vel-justify-self-auto', properties: 'justify-self: auto' },
        { class: 'vel-justify-self-start', properties: 'justify-self: start' },
        { class: 'vel-justify-self-end', properties: 'justify-self: end' },
        { class: 'vel-justify-self-center', properties: 'justify-self: center' },
        { class: 'vel-justify-self-stretch', properties: 'justify-self: stretch' },
      ]}
    />
  )
}
