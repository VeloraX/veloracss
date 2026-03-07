import DocPage from '../_components/DocPage'

export default function MaxHeightPage() {
  return (
    <DocPage
      title="Max-Height"
      description="Utilities for setting the maximum height of an element."
      source="sizing.css"
      table={[
        { class: 'vel-max-h-none', properties: 'max-height: none' },
        { class: 'vel-max-h-full', properties: 'max-height: 100%' },
        { class: 'vel-max-h-screen', properties: 'max-height: 100vh' },
        { class: 'vel-max-h-fit', properties: 'max-height: fit-content' },
        { class: 'vel-max-h-16', properties: 'max-height: 4rem' },
        { class: 'vel-max-h-32', properties: 'max-height: 8rem' },
        { class: 'vel-max-h-64', properties: 'max-height: 16rem' },
        { class: 'vel-max-h-96', properties: 'max-height: 24rem' },
      ]}
    />
  )
}
