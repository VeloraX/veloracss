import DocPage from '../_components/DocPage'

export default function FlexWrapPage() {
  return (
    <DocPage
      title="Flex Wrap"
      description="Utilities for controlling how flex items wrap."
      source="flexbox.css"
      table={[
        { class: 'vel-flex-nowrap', properties: 'flex-wrap: nowrap' },
        { class: 'vel-flex-wrap', properties: 'flex-wrap: wrap' },
        { class: 'vel-flex-wrap-reverse', properties: 'flex-wrap: wrap-reverse' },
      ]}
    />
  )
}
