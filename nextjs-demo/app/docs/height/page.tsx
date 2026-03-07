import DocPage from '../_components/DocPage'

export default function HeightPage() {
  return (
    <DocPage
      title="Height"
      description="Utilities for setting the height of an element."
      source="sizing.css"
      table={[
        { class: 'vel-h-0', properties: 'height: 0px' },
        { class: 'vel-h-auto', properties: 'height: auto' },
        { class: 'vel-h-full', properties: 'height: 100%' },
        { class: 'vel-h-screen', properties: 'height: 100vh' },
        { class: 'vel-h-min', properties: 'height: min-content' },
        { class: 'vel-h-max', properties: 'height: max-content' },
        { class: 'vel-h-fit', properties: 'height: fit-content' },
        { class: 'vel-h-1', properties: 'height: 0.25rem' },
        { class: 'vel-h-2', properties: 'height: 0.5rem' },
        { class: 'vel-h-4', properties: 'height: 1rem' },
        { class: 'vel-h-8', properties: 'height: 2rem' },
        { class: 'vel-h-16', properties: 'height: 4rem' },
        { class: 'vel-h-32', properties: 'height: 8rem' },
        { class: 'vel-h-64', properties: 'height: 16rem' },
      ]}
    />
  )
}
