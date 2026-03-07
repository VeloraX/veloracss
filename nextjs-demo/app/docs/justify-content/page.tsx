import DocPage from '../_components/DocPage'

export default function JustifyContentPage() {
  return (
    <DocPage
      title="Justify Content"
      description="Utilities for controlling how flex and grid items are positioned along a container's main axis."
      source="flexbox.css"
      table={[
        { class: 'vel-justify-start', properties: 'justify-content: flex-start' },
        { class: 'vel-justify-end', properties: 'justify-content: flex-end' },
        { class: 'vel-justify-center', properties: 'justify-content: center' },
        { class: 'vel-justify-between', properties: 'justify-content: space-between' },
        { class: 'vel-justify-around', properties: 'justify-content: space-around' },
        { class: 'vel-justify-evenly', properties: 'justify-content: space-evenly' },
      ]}
    />
  )
}
