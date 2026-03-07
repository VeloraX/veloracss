import DocPage from '../_components/DocPage'

export default function FlexDirectionPage() {
  return (
    <DocPage
      title="Flex Direction"
      description="Utilities for controlling the direction of flex items."
      source="flexbox.css"
      table={[
        { class: 'vel-flex-row', properties: 'flex-direction: row' },
        { class: 'vel-flex-row-reverse', properties: 'flex-direction: row-reverse' },
        { class: 'vel-flex-col', properties: 'flex-direction: column' },
        { class: 'vel-flex-col-reverse', properties: 'flex-direction: column-reverse' },
      ]}
    />
  )
}
