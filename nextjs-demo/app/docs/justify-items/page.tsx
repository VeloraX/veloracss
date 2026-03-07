import DocPage from '../_components/DocPage'

export default function JustifyItemsPage() {
  return (
    <DocPage
      title="Justify Items"
      description="Utilities for controlling how grid items are aligned along their inline axis."
      source="flexbox.css"
      table={[
        { class: 'vel-justify-items-start', properties: 'justify-items: start' },
        { class: 'vel-justify-items-end', properties: 'justify-items: end' },
        { class: 'vel-justify-items-center', properties: 'justify-items: center' },
        { class: 'vel-justify-items-stretch', properties: 'justify-items: stretch' },
      ]}
    />
  )
}
