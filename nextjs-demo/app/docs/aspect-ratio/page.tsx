import DocPage from '../_components/DocPage'

export default function AspectRatioPage() {
  return (
    <DocPage
      title="Aspect Ratio"
      description="Utilities for controlling the aspect ratio of an element."
      source="layout.css"
      table={[
        { class: 'vel-aspect-auto', properties: 'aspect-ratio: auto' },
        { class: 'vel-aspect-square', properties: 'aspect-ratio: 1 / 1' },
        { class: 'vel-aspect-video', properties: 'aspect-ratio: 16 / 9' },
      ]}
    />
  )
}
