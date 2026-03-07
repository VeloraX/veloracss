import DocPage from '../_components/DocPage'

export default function FlexGrowPage() {
  return (
    <DocPage
      title="Flex Grow"
      description="Utilities for controlling how flex items grow."
      source="flexbox.css"
      table={[
        { class: 'vel-grow', properties: 'flex-grow: 1' },
        { class: 'vel-grow-0', properties: 'flex-grow: 0' },
      ]}
    />
  )
}
