import DocPage from '../_components/DocPage'

export default function TextTransformPage() {
  return (
    <DocPage
      title="Text Transform"
      description="Utilities for controlling the transformation of text."
      source="typography.css"
      table={[
        { class: 'vel-uppercase', properties: 'text-transform: uppercase' },
        { class: 'vel-lowercase', properties: 'text-transform: lowercase' },
        { class: 'vel-capitalize', properties: 'text-transform: capitalize' },
        { class: 'vel-normal-case', properties: 'text-transform: none' },
      ]}
    />
  )
}
