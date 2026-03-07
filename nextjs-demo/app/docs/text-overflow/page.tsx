import DocPage from '../_components/DocPage'

export default function TextOverflowPage() {
  return (
    <DocPage
      title="Text Overflow"
      description="Utilities for controlling text overflow in an element."
      source="typography.css"
      table={[
        { class: 'vel-truncate', properties: 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap' },
        { class: 'vel-text-ellipsis', properties: 'text-overflow: ellipsis' },
        { class: 'vel-text-clip', properties: 'text-overflow: clip' },
      ]}
    />
  )
}
