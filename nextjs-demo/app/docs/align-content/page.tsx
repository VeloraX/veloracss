import DocPage from '../_components/DocPage'

export default function AlignContentPage() {
  return (
    <DocPage
      title="Align Content"
      description="Utilities for controlling how rows are positioned in multi-row flex and grid containers."
      source="flexbox.css"
      table={[
        { class: 'vel-content-start', properties: 'align-content: flex-start' },
        { class: 'vel-content-end', properties: 'align-content: flex-end' },
        { class: 'vel-content-center', properties: 'align-content: center' },
        { class: 'vel-content-between', properties: 'align-content: space-between' },
        { class: 'vel-content-around', properties: 'align-content: space-around' },
        { class: 'vel-content-evenly', properties: 'align-content: space-evenly' },
      ]}
    />
  )
}
