import DocPage from '../_components/DocPage'

export default function MarginPage() {
  return (
    <DocPage
      title="Margin"
      description="Utilities for controlling an element's margin."
      source="spacing.css"
      table={[
        { class: 'vel-m-0', properties: 'margin: 0px' },
        { class: 'vel-m-auto', properties: 'margin: auto' },
        { class: 'vel-m-1', properties: 'margin: 0.25rem' },
        { class: 'vel-m-2', properties: 'margin: 0.5rem' },
        { class: 'vel-m-3', properties: 'margin: 0.75rem' },
        { class: 'vel-m-4', properties: 'margin: 1rem' },
        { class: 'vel-m-6', properties: 'margin: 1.5rem' },
        { class: 'vel-m-8', properties: 'margin: 2rem' },
        { class: 'vel-mx-auto', properties: 'margin-left: auto; margin-right: auto' },
        { class: 'vel-mx-4', properties: 'margin-left: 1rem; margin-right: 1rem' },
        { class: 'vel-my-4', properties: 'margin-top: 1rem; margin-bottom: 1rem' },
        { class: 'vel-mt-4', properties: 'margin-top: 1rem' },
        { class: 'vel-mr-4', properties: 'margin-right: 1rem' },
        { class: 'vel-mb-4', properties: 'margin-bottom: 1rem' },
        { class: 'vel-ml-4', properties: 'margin-left: 1rem' },
      ]}
    />
  )
}
