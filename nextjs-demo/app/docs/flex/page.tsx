import DocPage from '../_components/DocPage'

export default function FlexPage() {
  return (
    <DocPage
      title="Flex"
      description="Utilities for controlling how flex items both grow and shrink."
      source="flexbox.css"
      table={[
        { class: 'vel-flex-1', properties: 'flex: 1 1 0%' },
        { class: 'vel-flex-auto', properties: 'flex: 1 1 auto' },
        { class: 'vel-flex-initial', properties: 'flex: 0 1 auto' },
        { class: 'vel-flex-none', properties: 'flex: none' },
      ]}
    />
  )
}
