import DocPage from '../_components/DocPage'

export default function LineHeightPage() {
  return (
    <DocPage
      title="Line Height"
      description="Utilities for controlling the leading (line height) of an element."
      source="typography.css"
      table={[
        { class: 'vel-leading-none', properties: 'line-height: 1' },
        { class: 'vel-leading-tight', properties: 'line-height: 1.25' },
        { class: 'vel-leading-snug', properties: 'line-height: 1.375' },
        { class: 'vel-leading-normal', properties: 'line-height: 1.5' },
        { class: 'vel-leading-relaxed', properties: 'line-height: 1.625' },
        { class: 'vel-leading-loose', properties: 'line-height: 2' },
      ]}
    />
  )
}
