import DocPage from '../_components/DocPage'

export default function FlexShrinkPage() {
  return (
    <DocPage
      title="Flex Shrink"
      description="Utilities for controlling how flex items shrink."
      source="flexbox.css"
      table={[
        { class: 'vel-shrink', properties: 'flex-shrink: 1' },
        { class: 'vel-shrink-0', properties: 'flex-shrink: 0' },
      ]}
    />
  )
}
