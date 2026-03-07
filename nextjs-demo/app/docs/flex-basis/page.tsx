import DocPage from '../_components/DocPage'

export default function FlexBasisPage() {
  return (
    <DocPage
      title="Flex Basis"
      description="Utilities for controlling the initial size of flex items."
      source="flexbox.css"
      table={[
        { class: 'vel-basis-auto', properties: 'flex-basis: auto' },
        { class: 'vel-basis-0', properties: 'flex-basis: 0px' },
        { class: 'vel-basis-full', properties: 'flex-basis: 100%' },
        { class: 'vel-basis-1/2', properties: 'flex-basis: 50%' },
        { class: 'vel-basis-1/3', properties: 'flex-basis: 33.333%' },
        { class: 'vel-basis-2/3', properties: 'flex-basis: 66.667%' },
        { class: 'vel-basis-1/4', properties: 'flex-basis: 25%' },
        { class: 'vel-basis-3/4', properties: 'flex-basis: 75%' },
      ]}
    />
  )
}
