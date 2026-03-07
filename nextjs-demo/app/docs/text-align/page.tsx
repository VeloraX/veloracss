import DocPage from '../_components/DocPage'

export default function TextAlignPage() {
  return (
    <DocPage
      title="Text Align"
      description="Utilities for controlling the alignment of text."
      source="typography.css"
      table={[
        { class: 'vel-text-left', properties: 'text-align: left' },
        { class: 'vel-text-center', properties: 'text-align: center' },
        { class: 'vel-text-right', properties: 'text-align: right' },
        { class: 'vel-text-justify', properties: 'text-align: justify' },
        { class: 'vel-text-start', properties: 'text-align: start' },
        { class: 'vel-text-end', properties: 'text-align: end' },
      ]}
    />
  )
}
