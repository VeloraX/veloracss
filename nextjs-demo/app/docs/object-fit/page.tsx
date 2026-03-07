import DocPage from '../_components/DocPage'

export default function ObjectFitPage() {
  return (
    <DocPage
      title="Object Fit"
      description="Utilities for controlling how a replaced element's content should be resized."
      source="layout.css"
      table={[
        { class: 'vel-object-contain', properties: 'object-fit: contain' },
        { class: 'vel-object-cover', properties: 'object-fit: cover' },
        { class: 'vel-object-fill', properties: 'object-fit: fill' },
        { class: 'vel-object-none', properties: 'object-fit: none' },
        { class: 'vel-object-scale-down', properties: 'object-fit: scale-down' },
      ]}
    />
  )
}
